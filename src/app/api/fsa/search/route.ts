import { NextRequest, NextResponse } from "next/server";
import { searchDeclarations } from "@/lib/fsa";
import { trackEvent } from "@/lib/stats";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

export async function POST(request: NextRequest) {
  trackEvent("fsa_search");
  try {
    const body = await request.json();
    const {
      products = [],
      regions = [],
      segments = [],
      minVolume,
      dateFrom,
      dateTo,
      page = 0,
      size = 20,
    } = body;

    if (!products.length) {
      return NextResponse.json(
        { error: "Выберите хотя бы одну культуру", items: [], total: 0, page: 0 },
        { status: 400 }
      );
    }

    const result = await searchDeclarations({
      products,
      regions: regions.length ? regions : undefined,
      segments: segments.length ? segments : undefined,
      minVolume: minVolume ? Number(minVolume) : undefined,
      dateFrom: dateFrom || undefined,
      dateTo: dateTo || undefined,
      page: Number(page),
      size: Math.min(Number(size), 50),
    });

    return NextResponse.json(result);
  } catch (e: any) {
    console.error("Search API error:", e);
    return NextResponse.json(
      { error: e.message || "Internal error", items: [], total: 0, page: 0 },
      { status: 500 }
    );
  }
}
