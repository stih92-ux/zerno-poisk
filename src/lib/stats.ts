// In-memory counters (reset on cold start)
const counters: Record<string, number> = {};
const startTime = Date.now();

export function trackEvent(event: string): void {
  counters[event] = (counters[event] || 0) + 1;
}

export function getStats(): { counters: Record<string, number>; uptimeMs: number } {
  return { counters: { ...counters }, uptimeMs: Date.now() - startTime };
}
