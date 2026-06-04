/**
 * Minimal in-memory sliding-window rate limiter.
 *
 * Caveat: state lives in the process memory, so it resets on redeploy and is
 * NOT shared across multiple serverless instances. It's a lightweight guard
 * against casual form spam on top of the honeypot — not a hard security
 * boundary. For stronger guarantees move to a shared store (Upstash/Redis) or
 * a CAPTCHA (Turnstile).
 */

type Hits = number[];

const buckets = new Map<string, Hits>();

// Opportunistic cleanup so the map can't grow unbounded over a long uptime.
let lastSweep = 0;
const SWEEP_INTERVAL_MS = 5 * 60_000;

function sweep(now: number, windowMs: number) {
  if (now - lastSweep < SWEEP_INTERVAL_MS) return;
  lastSweep = now;
  for (const [key, hits] of buckets) {
    const fresh = hits.filter((t) => now - t < windowMs);
    if (fresh.length === 0) buckets.delete(key);
    else buckets.set(key, fresh);
  }
}

export type RateLimitResult = {
  /** True when the request is within the allowance. */
  ok: boolean;
  /** Seconds until the oldest hit falls out of the window (when blocked). */
  retryAfter: number;
};

/**
 * Records a hit for `key` and reports whether it's allowed.
 *
 * @param key      Caller identity (e.g. client IP).
 * @param limit    Max allowed hits within the window.
 * @param windowMs Sliding window length in milliseconds.
 */
export function rateLimit(
  key: string,
  limit: number,
  windowMs: number,
): RateLimitResult {
  const now = Date.now();
  sweep(now, windowMs);

  const hits = (buckets.get(key) ?? []).filter((t) => now - t < windowMs);

  if (hits.length >= limit) {
    const retryAfter = Math.ceil((windowMs - (now - hits[0])) / 1000);
    buckets.set(key, hits);
    return { ok: false, retryAfter };
  }

  hits.push(now);
  buckets.set(key, hits);
  return { ok: true, retryAfter: 0 };
}
