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

// Flow codes: import=M, export=X
const FLOW_CODES: Record<string, string> = {
  import: "M",
  export: "X",
};

const COMTRADE_API = "https://comtradeapi.un.org/data/v1/get/C/A/HS";

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
  const countries = countriesStr
    .split(",")
    .filter((c) => c.trim() && c.trim() in UN_COUNTRY_CODES);

  if (products.length === 0 || countries.length === 0) {
    return NextResponse.json(
      { error: "Invalid products or countries" },
      { status: 400 }
    );
  }

  // Determine flows
  let flows: string[] = [];
  if (flowStr === "import") flows = ["M"];
  else if (flowStr === "export") flows = ["X"];
  else flows = ["M", "X"];

  // Get last 4 years
  const currentYear = new Date().getFullYear();
  const periods = [currentYear - 1, currentYear - 2, currentYear - 3, currentYear - 4].filter(
    (y) => y >= 2012
  );

  const records: ComtradeRecord[] = [];

  // Fetch data for each product, country, and flow combination
  for (const product of products) {
    for (const country of countries) {
      for (const flow of flows) {
        for (const period of periods) {
          try {
            const reporterCode = UN_COUNTRY_CODES[country];
            const cmdCode = HS_CODES[product];
            const flowCode = FLOW_CODES[flow];

            // Regular query
            const url = new URL(COMTRADE_API);
            url.searchParams.set("reporterCode", reporterCode);
            url.searchParams.set("period", period.toString());
            url.searchParams.set("cmdCode", cmdCode);
            url.searchParams.set("flowCode", flowCode);
            url.searchParams.set("partnerCode", "");
            url.searchParams.set("partner2Code", "");
            url.searchParams.set("customsCode", "");
            url.searchParams.set("motCode", "");
            url.searchParams.set("maxRecords", "500");
            url.searchParams.set("includeDesc", "true");

            const response = await fetch(url.toString(), {
              headers: { "User-Agent": "zerno-poisk-web" },
            });

            if (response.ok) {
              const data = (await response.json()) as any;
              const data_records = data?.data || [];

              // Process records
              for (const rec of data_records) {
                if (rec.primaryValue > 0) {
                  records.push({
                    refYear: rec.refYear,
                    reporterCode: rec.reporterCode,
                    reporterDesc: rec.reporterDesc || "",
                    partnerCode: rec.partnerCode,
                    partnerDesc: rec.partnerDesc || "Мир",
                    cmdCode: rec.cmdCode,
                    cmdDesc: rec.cmdDesc || "",
                    flowCode: rec.flowCode,
                    flowDesc: rec.flowDesc || "",
                    primaryValue: rec.primaryValue,
                    netWgt: rec.netWgt,
                    _from: rec.reporterDesc || "",
                    _to: rec.partnerDesc || "",
                    _mirror: false,
                  });
                }
              }
            }

            // Mirror query for RU and BY: reverse flow, use as partnerCode
            if ((country === "RU" || country === "BY") && flow !== undefined) {
              const reverseFlow = flow === "X" ? "M" : "X";
              const mirrorUrl = new URL(COMTRADE_API);
              mirrorUrl.searchParams.set("reporterCode", "");
              mirrorUrl.searchParams.set("period", period.toString());
              mirrorUrl.searchParams.set("cmdCode", cmdCode);
              mirrorUrl.searchParams.set("flowCode", reverseFlow);
              mirrorUrl.searchParams.set("partnerCode", reporterCode);
              mirrorUrl.searchParams.set("partner2Code", "");
              mirrorUrl.searchParams.set("customsCode", "");
              mirrorUrl.searchParams.set("motCode", "");
              mirrorUrl.searchParams.set("maxRecords", "500");
              mirrorUrl.searchParams.set("includeDesc", "true");

              const mirrorResponse = await fetch(mirrorUrl.toString(), {
                headers: { "User-Agent": "zerno-poisk-web" },
              });

              if (mirrorResponse.ok) {
                const mirrorData = (await mirrorResponse.json()) as any;
                const mirrorRecords = mirrorData?.data || [];

                for (const rec of mirrorRecords) {
                  if (rec.primaryValue > 0) {
                    records.push({
                      refYear: rec.refYear,
                      reporterCode: rec.reporterCode,
                      reporterDesc: rec.reporterDesc || "",
                      partnerCode: rec.partnerCode,
                      partnerDesc: rec.partnerDesc || "",
                      cmdCode: rec.cmdCode,
                      cmdDesc: rec.cmdDesc || "",
                      flowCode: rec.flowCode,
                      flowDesc: rec.flowDesc || "",
                      primaryValue: rec.primaryValue,
                      netWgt: rec.netWgt,
                      _from: rec.reporterDesc || "",
                      _to: rec.partnerDesc || "",
                      _mirror: true,
                    });
                  }
                }
              }
            }
          } catch {
            // Silently skip errors for this request
          }

          // Add delay to avoid rate limiting
          await new Promise((resolve) => setTimeout(resolve, 100));
        }
      }
    }
  }

  // Sort by primaryValue descending and limit to 50 records
  const sorted = records.sort((a, b) => b.primaryValue - a.primaryValue).slice(0, 50);

  return NextResponse.json({
    records: sorted,
    total: sorted.length,
    source: "UN Comtrade",
  });
}
