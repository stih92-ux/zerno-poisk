import { NextRequest, NextResponse } from "next/server";
import { getStats } from "@/lib/stats";

export const dynamic = "force-dynamic";

function formatUptime(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  return `${hours}h ${minutes}m`;
}

async function fetchBotStats(): Promise<Record<string, unknown> | null> {
  const botStatsUrl = process.env.BOT_STATS_URL;
  const botStatsToken = process.env.BOT_STATS_TOKEN;

  if (!botStatsUrl || !botStatsToken) {
    return null;
  }

  try {
    const resp = await fetch(
      `${botStatsUrl}/stats?token=${encodeURIComponent(botStatsToken)}`,
      { signal: AbortSignal.timeout(5000) }
    );
    if (!resp.ok) return null;
    return await resp.json();
  } catch {
    return null;
  }
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  const password = request.nextUrl.searchParams.get("password");
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword || password !== adminPassword) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const { counters, uptimeMs } = getStats();
  const botStats = await fetchBotStats();

  const response = {
    web: {
      searches: counters["fsa_search"] || 0,
      priceViews: counters["price_view"] || 0,
      comtradeQueries: counters["comtrade_query"] || 0,
      gaccQueries: counters["gacc_query"] || 0,
      farmerQueries: counters["farmer_query"] || 0,
      uptime: formatUptime(uptimeMs),
    },
    bot: botStats || {
      available: false,
    },
  };

  return NextResponse.json(response);
}
