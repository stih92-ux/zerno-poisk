import { createHash, createHmac } from "crypto";

export interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
  auth_date: number;
  hash: string;
}

/**
 * Verify Telegram Login Widget data.
 * https://core.telegram.org/widgets/login#checking-authorization
 */
export function verifyTelegramAuth(
  data: TelegramUser,
  botToken: string
): boolean {
  const { hash, ...rest } = data;

  // Build data-check-string: key=value pairs sorted alphabetically, joined by \n
  // Only include fields that have defined values
  const checkString = Object.keys(rest)
    .filter((k) => rest[k as keyof typeof rest] !== undefined)
    .sort()
    .map((k) => `${k}=${rest[k as keyof typeof rest]}`)
    .join("\n");

  // secret_key = SHA256(bot_token) — plain hash, NOT HMAC
  const secret = createHash("sha256").update(botToken).digest();

  const hmac = createHmac("sha256", secret)
    .update(checkString)
    .digest("hex");

  return hmac === hash;
}

/**
 * Check that auth_date is not too old (max 1 day).
 */
export function isAuthFresh(authDate: number, maxAgeSeconds = 86400): boolean {
  return Date.now() / 1000 - authDate < maxAgeSeconds;
}

// Simple JWT-like token using HMAC (no external deps)
const ALGORITHM = "sha256";

export function createSessionToken(
  user: Omit<TelegramUser, "hash">,
  secret: string
): string {
  const payload = Buffer.from(JSON.stringify(user)).toString("base64url");
  const sig = createHmac(ALGORITHM, secret).update(payload).digest("base64url");
  return `${payload}.${sig}`;
}

export function verifySessionToken(
  token: string,
  secret: string
): Omit<TelegramUser, "hash"> | null {
  const parts = token.split(".");
  if (parts.length !== 2) return null;

  const [payload, sig] = parts;
  const expected = createHmac(ALGORITHM, secret)
    .update(payload)
    .digest("base64url");

  if (sig !== expected) return null;

  try {
    return JSON.parse(Buffer.from(payload, "base64url").toString());
  } catch {
    return null;
  }
}
