/**
 * Cache Utilities
 * ─────────────────────────────────────────────────────────────
 * High-level helpers built on top of the Redis client.
 * All functions fail gracefully — if Redis is not configured,
 * they simply call through to the real data source.
 *
 * Key naming convention:
 *   bhaskar:{module}:{resource}:{identifier}
 *
 * Examples:
 *   bhaskar:products:all
 *   bhaskar:products:category:chilli-varieties
 *   bhaskar:products:slug:haldi-powder
 *   bhaskar:analytics:views:home
 *
 * Usage:
 *   import { getOrSet, invalidate, invalidatePattern } from "@/lib/cache";
 *
 *   // In a Server Component or API Route:
 *   const products = await getOrSet(
 *     "bhaskar:products:all",
 *     () => db.product.findMany(),  // ← your future DB call
 *     300                           // ← 5-minute TTL
 *   );
 */

import { getRedis } from "@/lib/redis";

// ── Types ─────────────────────────────────────────────────────────────────────

export interface CacheOptions {
  /** Time-to-live in seconds. Default: 300 (5 minutes). */
  ttl?: number;
  /** Optional tag for log messages (e.g. "products", "analytics"). */
  tag?: string;
}

export type FetchFn<T> = () => Promise<T>;

// ── Core: getOrSet ────────────────────────────────────────────────────────────

/**
 * Fetch a value from cache, or compute it and store it.
 *
 * @param key     - Namespaced Redis key (e.g. "bhaskar:products:all")
 * @param fetchFn - Async function that returns the real data (called on miss)
 * @param ttl     - How long to cache in seconds (default: 300)
 * @returns       - The cached or freshly fetched value
 *
 * @example
 * const products = await getOrSet(
 *   "bhaskar:products:all",
 *   () => db.product.findMany(),
 *   300
 * );
 */
export async function getOrSet<T>(
  key: string,
  fetchFn: FetchFn<T>,
  ttl: number = 300
): Promise<T> {
  const redis = getRedis();

  // ── No Redis: pass-through ──────────────────────────────────────────────
  if (!redis) {
    return fetchFn();
  }

  // ── Try cache ───────────────────────────────────────────────────────────
  try {
    const cached = await redis.get<T>(key);

    if (cached !== null && cached !== undefined) {
      log("HIT", key);
      return cached;
    }
  } catch (err) {
    logError("GET", key, err);
    // Fall through to real fetch
  }

  // ── Cache miss: fetch real data ─────────────────────────────────────────
  log("MISS", key);
  const data = await fetchFn();

  // ── Store in cache ──────────────────────────────────────────────────────
  try {
    await redis.set(key, data, { ex: ttl });
    log("SET", key, `TTL=${ttl}s`);
  } catch (err) {
    logError("SET", key, err);
    // Non-fatal: return data even if storing fails
  }

  return data;
}

// ── Invalidation ──────────────────────────────────────────────────────────────

/**
 * Delete a single cache key.
 *
 * @example
 * await invalidate("bhaskar:products:all");
 */
export async function invalidate(key: string): Promise<void> {
  const redis = getRedis();
  if (!redis) return;

  try {
    await redis.del(key);
    log("DEL", key);
  } catch (err) {
    logError("DEL", key, err);
  }
}

/**
 * Delete all keys matching a pattern.
 * Uses Redis SCAN + DEL (safe — won't block the server).
 *
 * @param pattern - Pattern with wildcard, e.g. "bhaskar:products:*"
 *
 * @example
 * await invalidatePattern("bhaskar:products:*");
 */
export async function invalidatePattern(pattern: string): Promise<number> {
  const redis = getRedis();
  if (!redis) return 0;

  try {
    // Upstash supports SCAN via .scan()
    let cursor = 0;
    let deletedCount = 0;

    do {
      const [nextCursor, keys] = await redis.scan(cursor, {
        match: pattern,
        count: 100,
      });

      cursor = nextCursor;

      if (keys.length > 0) {
        // Pipeline bulk delete
        const pipeline = redis.pipeline();
        keys.forEach((key) => pipeline.del(key));
        await pipeline.exec();
        deletedCount += keys.length;
      }
    } while (cursor !== 0);

    log("DEL_PATTERN", pattern, `deleted=${deletedCount} keys`);
    return deletedCount;
  } catch (err) {
    logError("DEL_PATTERN", pattern, err);
    return 0;
  }
}

// ── Bulk get (pipeline) ───────────────────────────────────────────────────────

/**
 * Fetch multiple keys in a single round-trip using pipelining.
 * Returns an array of values in the same order as the keys.
 * Missing keys return `null`.
 *
 * @example
 * const [home, about, products] = await mgetCache([
 *   "bhaskar:analytics:views:home",
 *   "bhaskar:analytics:views:about",
 *   "bhaskar:analytics:views:products",
 * ]);
 */
export async function mgetCache<T>(keys: string[]): Promise<(T | null)[]> {
  const redis = getRedis();
  if (!redis || keys.length === 0) return keys.map(() => null);

  try {
    const pipeline = redis.pipeline();
    keys.forEach((key) => pipeline.get(key));
    const results = await pipeline.exec();
    return results as (T | null)[];
  } catch (err) {
    logError("MGET", keys.join(", "), err);
    return keys.map(() => null);
  }
}

// ── TTL presets (export for convenience) ─────────────────────────────────────

/**
 * Standard TTL values in seconds.
 * Use these for consistency across your codebase.
 *
 * @example
 * await getOrSet(key, fn, TTL.FIVE_MINUTES);
 */
export const TTL = {
  ONE_MINUTE: 60,
  FIVE_MINUTES: 300,
  FIFTEEN_MINUTES: 900,
  ONE_HOUR: 3_600,
  SIX_HOURS: 21_600,
  ONE_DAY: 86_400,
  ONE_WEEK: 604_800,
} as const;

// ── Key builders (namespacing helpers) ───────────────────────────────────────

/**
 * Pre-built cache key generators following the convention:
 *   bhaskar:{module}:{resource}:{id}
 *
 * @example
 * const key = CacheKey.product("haldi-powder");
 * // → "bhaskar:products:slug:haldi-powder"
 */
export const CacheKey = {
  /** All products */
  allProducts: () => "bhaskar:products:all",

  /** Products filtered by category */
  productsByCategory: (category: string) =>
    `bhaskar:products:category:${slugify(category)}`,

  /** Single product by slug */
  product: (slug: string) => `bhaskar:products:slug:${slug}`,

  /** Page view counter */
  pageViews: (page: string) => `bhaskar:analytics:views:${slugify(page)}`,

  /** Any custom module key */
  custom: (module: string, resource: string, id?: string) =>
    id
      ? `bhaskar:${module}:${resource}:${id}`
      : `bhaskar:${module}:${resource}`,
} as const;

// ── Internal helpers ──────────────────────────────────────────────────────────

function log(action: string, key: string, detail?: string): void {
  const parts = [`[Cache ${action}]`, key];
  if (detail) parts.push(`(${detail})`);
  console.log(parts.join(" "));
}

function logError(action: string, key: string, err: unknown): void {
  console.error(`[Cache ERROR:${action}] ${key}`, err);
}

function slugify(str: string): string {
  return str.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}
