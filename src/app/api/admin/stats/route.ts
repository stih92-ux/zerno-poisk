import { NextRequest, NextResponse } from "next/server";
import { getStats, getBotStats } from "@/lib/stats";

export const dynamic = "force-dynamic";

function formatUptime(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  return `${hours}h ${minutes}m`;
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  const password = request.nextUrl.searchParams.get("password");
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword || password !== adminPassword) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { counters, uptimeMs } = getStats();
  const { stats: botStats, updatedAt } = getBotStats();

  const response = {
    web: {
      searches: counters["fsa_search"] || 0,
      priceViews: counters["price_view"] || 0,
      comtradeQueries: counters["comtrade_query"] || 0,
      gaccQueries: counters["gacc_query"] || 0,
      farmerQueries: counters["farmer_query"] || 0,
      uptime: formatUptime(uptimeMs),
    },
    bot: botStats || { available: false },
    botUpdatedAt: updatedAt ? new Date(updatedAt).toISOString() : null,
  };

  return NextResponse.json(response);
}
