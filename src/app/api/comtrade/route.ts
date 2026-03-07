import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

// HS codes for grain products
const HS_CODES: Record<string, string> = {
  wheat: "1001",
  rye: "1002",
  barley: "1003",
  oats: "1004",
  corn: "1005",
  rice: "1006",
  buckwheat: "1008",
  soy: "1201",
  sunflower: "1206",
  peas: "0713",
};

// UN M49 country codes
const UN_COUNTRY_CODES: Record<string, string> = {
  RU: "643",
  KZ: "398",
  BY: "112",
  KG: "417",
  AM: "051",
};

// Countries that stopped reporting (need mirror data)
const MIRROR_REPORTERS = new Set(["643", "112"]); // Russia, Belarus

// FREE preview API — no key needed, but 1 period + 1 commodity per request
const COMTRADE_PREVIEW_API = "https://comtradeapi.un.org/public/v1/preview/C/A/HS";

interface ComtradeRecord {
  refYear: number;
  reporterCode: string;
  reporterDesc: string;
  partnerCode: string;
  partnerDesc: string;
  cmdCode: string;
  cmdDesc: string;
  flowCode: string;
  flowDesc: string;
  primaryValue: number;
  netWgt?: number;
  _from?: string;
  _to?: string;
  _mirror?: boolean;
  _source?: string;
}

async function queryComtradePreview(
  period: string,
  reporterCode: string,
  cmdCode: string,
  flowCodes: string,
  partnerCode?: string,
): Promise<ComtradeRecord[]> {
  const url = new URL(COMTRADE_PREVIEW_API);
  url.searchParams.set("reporterCode", reporterCode);
  url.searchParams.set("period", period);
  url.searchParams.set("cmdCode", cmdCode);
  url.searchParams.set("flowCode", flowCodes);
  url.searchParams.set("partnerCode", partnerCode || "");
  url.searchParams.set("partner2Code", "");
  url.searchParams.set("customsCode", "");
  url.searchParams.set("motCode", "");
  url.searchParams.set("maxRecords", "500");
  url.searchParams.set("includeDesc", "true");

  try {
    const response = await fetch(url.toString(), {
      headers: { "User-Agent": "zerno-poisk-web/1.0" },
    });

    if (!response.ok) {
      console.warn(`Comtrade ${response.status} for ${period}/${cmdCode}`);
      return [];
    }

    const data = await response.json();
    const rows = data?.data || [];

    return rows.filter((r: any) => r.primaryValue > 0).map((r: any) => ({
      refYear: r.refYear,
      reporterCode: String(r.reporterCode || ""),
      reporterDesc: r.reporterDesc || "",
      partnerCode: String(r.partnerCode || ""),
      partnerDesc: r.partnerDesc || "Мир",
      cmdCode: r.cmdCode || "",
      cmdDesc: r.cmdDesc || "",
      flowCode: r.flowCode || "",
      flowDesc: r.flowDesc || "",
      primaryValue: r.primaryValue || 0,
      netWgt: r.netWgt || undefined,
    }));
  } catch (e: any) {
    console.warn(`Comtrade error for ${period}/${cmdCode}: ${e.message}`);
    return [];
  }
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const productsStr = searchParams.get("products") || "";
  const countriesStr = searchParams.get("countries") || "";
  const flowStr = searchParams.get("flow") || "both";

  if (!productsStr || !countriesStr) {
    return NextResponse.json(
      { error: "Missing products or countries parameters" },
      { status: 400 }
    );
  }

  const products = productsStr.split(",").filter((p) => p.trim() && p.trim() in HS_CODES);
  const countries = countriesStr.split(",").filter((c) => c.trim() && c.trim() in UN_COUNTRY_CODES);

  if (products.length === 0 || countries.length === 0) {
    return NextResponse.json(
      { error: "Invalid products or countries" },
      { status: 400 }
    );
  }

  // Determine flows
  let flowCodes = "M,X";
  if (flowStr === "import") flowCodes = "M";
  else if (flowStr === "export") flowCodes = "X";

  // Recent 4 years
  const currentYear = new Date().getFullYear();
  const periods = [currentYear - 1, currentYear - 2, currentYear - 3, currentYear - 4]
    .filter((y) => y >= 2012)
    .map(String);

  // Build HS codes and reporter codes
  const hsCodes = products.map((p) => HS_CODES[p]).filter(Boolean);
  const reporterCodes = countries.map((c) => UN_COUNTRY_CODES[c]).filter(Boolean);
  const reporterStr = reporterCodes.join(",");

  // Check if mirror needed
  const needsMirror = reporterCodes.some((c) => MIRROR_REPORTERS.has(c));
  const mirrorCountries = reporterCodes.filter((c) => MIRROR_REPORTERS.has(c)).join(",");

  const records: ComtradeRecord[] = [];

  // Free preview: 1 period + 1 commodity per request
  // Stop at first year that returns data (most recent with data)
  for (const period of periods) {
    let gotData = false;

    for (const hs of hsCodes) {
      // Direct query
      const direct = await queryComtradePreview(period, reporterStr, hs, flowCodes);
      for (const rec of direct) {
        rec._source = "direct";
        rec._mirror = false;
        rec._from = rec.reporterDesc;
        rec._to = rec.partnerDesc;
        records.push(rec);
        gotData = true;
      }

      // Mirror query for RU/BY (others report trade with them)
      if (needsMirror) {
        // Reverse flow: export→import, import→export
        const mirrorFlows = flowCodes
          .replace("X", "m_temp")
          .replace("M", "X")
          .replace("m_temp", "M");

        const mirror = await queryComtradePreview(period, "", hs, mirrorFlows, mirrorCountries);
        for (const rec of mirror) {
          rec._source = "mirror";
          rec._mirror = true;
          // In mirror: reporter=Turkey, partner=Russia, flow=Import
          // means Russia exported to Turkey
          rec._from = rec.partnerDesc;
          rec._to = rec.reporterDesc;
          records.push(rec);
          gotData = true;
        }
      }

      // Small delay to avoid rate limiting
      await new Promise((resolve) => setTimeout(resolve, 200));
    }

    // Stop after first year with data (like the bot does)
    if (gotData) break;
  }

  // Sort by value descending, limit to 50
  const sorted = records.sort((a, b) => b.primaryValue - a.primaryValue).slice(0, 50);

  return NextResponse.json({
    records: sorted,
    total: sorted.length,
    source: "UN Comtrade (free preview)",
  });
}
