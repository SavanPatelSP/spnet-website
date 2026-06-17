const store = new Map<string, { count: number; resetAt: number }>();

export function rateLimit(ip: string, maxRequests = 5, windowMs = 60_000): {
  allowed: boolean;
  remaining: number;
  resetAt: number;
} {
  const now = Date.now();
  const entry = store.get(ip);

  if (!entry || now > entry.resetAt) {
    store.set(ip, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: maxRequests - 1, resetAt: now + windowMs };
  }

  entry.count += 1;
  const allowed = entry.count <= maxRequests;
  return { allowed, remaining: Math.max(0, maxRequests - entry.count), resetAt: entry.resetAt };
}
