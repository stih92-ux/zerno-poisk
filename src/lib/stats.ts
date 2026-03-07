// In-memory counters (reset on cold start)
const counters: Record<string, number> = {};
const startTime = Date.now();

// Bot stats (pushed by bot every 5 min)
let botStats: Record<string, unknown> | null = null;
let botStatsUpdatedAt: number | null = null;

export function trackEvent(event: string): void {
  counters[event] = (counters[event] || 0) + 1;
}

export function getStats(): { counters: Record<string, number>; uptimeMs: number } {
  return { counters: { ...counters }, uptimeMs: Date.now() - startTime };
}

export function setBotStats(stats: Record<string, unknown>): void {
  botStats = stats;
  botStatsUpdatedAt = Date.now();
}

export function getBotStats(): { stats: Record<string, unknown> | null; updatedAt: number | null } {
  return { stats: botStats, updatedAt: botStatsUpdatedAt };
}
