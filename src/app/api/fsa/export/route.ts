import { NextRequest, NextResponse } from "next/server";
import { searchDeclarations, generateCsv } from "@/lib/fsa";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      products = [],
      regions = [],
      segments = [],
      minVolume,
      dateFrom,
      dateTo,
      groupByCompany = false,
    } = body;

    if (!products.length) {
      return NextResponse.json({ error: "Выберите хотя бы одну культуру" }, { status: 400 });
    }

    // Запрашиваем до 100 записей для экспорта
    const result = await searchDeclarations({
      products,
      regions: regions.length ? regions : undefined,
      segments: segments.length ? segments : undefined,
      minVolume: minVolume ? Number(minVolume) : undefined,
      dateFrom: dateFrom || undefined,
      dateTo: dateTo || undefined,
      page: 0,
      size: 100,
      enrich: true,
    });

    if (result.error) {
      return NextResponse.json({ error: result.error }, { status: 502 });
    }

    const csv = generateCsv(result.items, groupByCompany);
    const now = new Date();
    const filename = `declarations_${now.toISOString().slice(0, 10)}_${now.toTimeString().slice(0, 8).replace(/:/g, "")}.csv`;

    return new NextResponse(csv, {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="${filename}"`,
      },
    });
  } catch (e: any) {
    console.error("Export API error:", e);
    return NextResponse.json({ error: e.message || "Internal error" }, { status: 500 });
  }
}
