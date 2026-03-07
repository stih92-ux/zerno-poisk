import { NextRequest, NextResponse } from "next/server";
import * as fs from "fs";
import * as path from "path";

export const dynamic = "force-dynamic";

// In-memory counters for web stats
interface WebStats {
  searchCount: number;
  priceViews: number;
  comtradeQueries: number;
  gaccQueries: number;
  farmerQueries: number;
}

interface BotStats {
  available: boolean;
  users: number;
  searches: number;
  trackingActive: number;
  recentPayments: number;
}

interface StatsResponse {
  web: {
    searches: number;
    priceViews: number;
    comtradeQueries: number;
    gaccQueries: number;
    farmerQueries: number;
    uptime: string;
  };
  bot: BotStats;
}

let webStats: WebStats = {
  searchCount: 0,
  priceViews: 0,
  comtradeQueries: 0,
  gaccQueries: 0,
  farmerQueries: 0,
};

const startTime = Date.now();

// Track web events
export function trackEvent(event: string): void {
  switch (event) {
    case "search":
      webStats.searchCount++;
      break;
    case "prices":
      webStats.priceViews++;
      break;
    case "comtrade":
      webStats.comtradeQueries++;
      break;
    case "gacc":
      webStats.gaccQueries++;
      break;
    case "farmers":
      webStats.farmerQueries++;
      break;
  }
}

function formatUptime(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  return `${hours}h ${minutes}m`;
}

function getBotStats(): BotStats {
  const dbPath = "/sessions/confident-busy-edison/mnt/mybot/.openclaw/workspace/zernopoisk/zernopoisk.db";

  // Check if database exists and is accessible
  try {
    const stats = fs.statSync(dbPath);
    if (!stats.isFile()) {
      return {
        available: false,
        users: 0,
        searches: 0,
        trackingActive: 0,
        recentPayments: 0,
      };
    }

    // Database exists but we can't easily query it without a sqlite3 library
    // For now, return available: true but with zero counts
    // In production, you'd use a sqlite3 library to query the database
    return {
      available: true,
      users: 0,
      searches: 0,
      trackingActive: 0,
      recentPayments: 0,
    };
  } catch {
    // Database file doesn't exist or can't be accessed
    return {
      available: false,
      users: 0,
      searches: 0,
      trackingActive: 0,
      recentPayments: 0,
    };
  }
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  // Check admin password
  const password = request.nextUrl.searchParams.get("password");
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword || password !== adminPassword) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const uptime = formatUptime(Date.now() - startTime);
  const botStats = getBotStats();

  const response: StatsResponse = {
    web: {
      searches: webStats.searchCount,
      priceViews: webStats.priceViews,
      comtradeQueries: webStats.comtradeQueries,
      gaccQueries: webStats.gaccQueries,
      farmerQueries: webStats.farmerQueries,
      uptime,
    },
    bot: botStats,
  };

  return NextResponse.json(response);
}
