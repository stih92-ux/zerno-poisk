import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const maxDuration = 30;

// Порт grain_prices.py из бота
const MOEX_URL = "https://iss.moex.com/iss/engines/agro/markets/spot/securities.json";

const ZOL_MARKETS = [
  { id: 1, name: "Пшеница 3 кл. (Евр. Россия)" },
  { id: 2, name: "Пшеница 4 кл. (Евр. Россия)" },
  { id: 3, name: "Пшеница 3 кл. (ЦФО)" },
  { id: 7, name: "Пшеница 3 кл. (ЮФО/СКФО)" },
];

export async function GET() {
  const [moex, zol, idk] = await Promise.allSettled([
    fetchMoex(),
    fetchZol(),
    fetchIdk(),
  ]);

  return NextResponse.json({
    moex: moex.status === "fulfilled" ? moex.value : [],
    zol: zol.status === "fulfilled" ? zol.value : [],
    idk: idk.status === "fulfilled" ? idk.value : [],
  });
}

async function fetchMoex() {
  try {
    const resp = await fetch(MOEX_URL, { next: { revalidate: 300 } });
    if (!resp.ok) return [];
    const data = await resp.json();
    const securities = data?.securities?.data || [];
    const columns = data?.securities?.columns || [];

    const secIdx = columns.indexOf("SECID");
    const nameIdx = columns.indexOf("SHORTNAME");
    const lastIdx = columns.indexOf("LAST");
    const wapIdx = columns.indexOf("WAPRICE");
    const prevIdx = columns.indexOf("PREVWAPRICE");

    return securities
      .filter((row: any[]) => {
        const secid = row[secIdx] || "";
        return secid.startsWith("SP_WH");
      })
      .map((row: any[]) => ({
        secid: row[secIdx],
        name: row[nameIdx] || row[secIdx],
        price: row[lastIdx] || row[wapIdx] || row[prevIdx],
      }));
  } catch {
    return [];
  }
}

async function fetchZol() {
  const results = [];
  for (const market of ZOL_MARKETS) {
    try {
      const resp = await fetch(`https://www.zol.ru/grainprices/graph/${market.id}.txt`, {
        next: { revalidate: 600 },
        headers: { "User-Agent": "Mozilla/5.0" },
      });
      if (!resp.ok) continue;
      const text = await resp.text();

      // Парсим JS-массив вида [['DD.MM', price], ...]
      const matches = [...text.matchAll(/\['(\d{2}\.\d{2})',\s*([\d.]+)\]/g)];
      if (matches.length >= 2) {
        const last = parseFloat(matches[matches.length - 1][2]);
        const prev = parseFloat(matches[matches.length - 2][2]);
        const trend = prev > 0 ? Math.round(((last - prev) / prev) * 1000) / 10 : 0;
        results.push({ name: market.name, price: Math.round(last), trend });
      }
    } catch {
      continue;
    }
  }
  return results;
}

async function fetchIdk() {
  try {
    const resp = await fetch("https://idk.ru/", {
      next: { revalidate: 600 },
      headers: { "User-Agent": "Mozilla/5.0" },
    });
    if (!resp.ok) return [];
    const html = await resp.text();

    // Простой парсинг таблицы объявлений
    const results: any[] = [];
    const grainKw = ["пшениц", "ячмень", "кукуруз", "рожь", "подсолнечн", "соя", "овёс", "горох"];

    // Ищем строки таблицы с ценами
    const rowRegex = /<tr[^>]*>[\s\S]*?<\/tr>/gi;
    const rows = html.match(rowRegex) || [];

    for (const row of rows) {
      const cells = row.match(/<td[^>]*>([\s\S]*?)<\/td>/gi) || [];
      if (cells.length < 3) continue;

      const stripTags = (s: string) => s.replace(/<[^>]*>/g, "").trim();
      const cellTexts = cells.map(stripTags);

      // Ищем строки с ценами зерновых
      const hasGrain = grainKw.some((kw) => cellTexts.some((t) => t.toLowerCase().includes(kw)));
      if (!hasGrain) continue;

      const priceMatch = cellTexts.join(" ").match(/(\d[\d\s]*)\s*(?:руб|₽|р\.)/i);
      if (priceMatch) {
        const price = parseInt(priceMatch[1].replace(/\s/g, ""), 10);
        if (price >= 3000 && price <= 100000) {
          results.push({
            type: cellTexts[0].toLowerCase().includes("покуп") || cellTexts[0].toLowerCase().includes("buy") ? "buy" : "sell",
            product: cellTexts[1] || cellTexts[0],
            price,
            region: cellTexts.find((t) => t.includes("обл") || t.includes("край") || t.includes("респ")) || "",
          });
          if (results.length >= 20) break;
        }
      }
    }

    return results;
  } catch {
    return [];
  }
}
