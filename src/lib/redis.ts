/**
 * Redis Client — Upstash
 * ─────────────────────────────────────────────────────────────
 * Uses Upstash's HTTP-based Redis client, which works correctly
 * in Next.js serverless / edge environments (unlike ioredis).
 *
 * Setup:
 *   1. Create a free database at https://upstash.com
 *   2. Copy the REST URL and token into .env.local:
 *        UPSTASH_REDIS_REST_URL=https://...upstash.io
 *        UPSTASH_REDIS_REST_TOKEN=your-token-here
 *
 * Usage:
 *   import { redis, isRedisConfigured } from "@/lib/redis";
 */

import { Redis } from "@upstash/redis";

// ── Singleton instance ────────────────────────────────────────────────────────

let _redis: Redis | null = null;

/**
 * Returns the Redis client singleton.
 * Returns `null` gracefully if env vars are not configured yet —
 * so the app works without Redis during development.
 */
export function getRedis(): Redis | null {
  // Already initialised
  if (_redis) return _redis;

  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    // Not configured yet — fail gracefully (no crash)
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        "[Redis] UPSTASH_REDIS_REST_URL or UPSTASH_REDIS_REST_TOKEN is not set. " +
          "Redis features are disabled. Set them in .env.local to enable caching."
      );
    }
    return null;
  }

  try {
    _redis = new Redis({ url, token });
    console.log("[Redis] Client initialised ✓");
    return _redis;
  } catch (err) {
    console.error("[Redis] Failed to initialise client:", err);
    return null;
  }
}

/**
 * Convenience export — the live Redis instance (or null).
 * Prefer `getRedis()` in server functions for explicitness.
 */
export const redis = getRedis();

/**
 * True if Upstash env vars are present and client was created.
 */
export const isRedisConfigured = (): boolean => getRedis() !== null;
