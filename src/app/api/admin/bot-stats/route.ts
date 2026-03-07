import { NextRequest, NextResponse } from "next/server";
import { setBotStats } from "@/lib/stats";

export const dynamic = "force-dynamic";

/**
 * POST /api/admin/bot-stats
 * Бот пушит свою статистику сюда каждые 5 минут.
 * Authorization: Bearer <BOT_STATS_TOKEN>
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  const authHeader = request.headers.get("authorization") || "";
  const token = authHeader.replace("Bearer ", "").trim();

  const expectedToken = process.env.BOT_STATS_TOKEN;
  if (!expectedToken || token !== expectedToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    setBotStats(body);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
}
