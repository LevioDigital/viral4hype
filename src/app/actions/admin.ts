"use server";

import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { timingSafeEqual } from "crypto";
import {
  ADMIN_COOKIE,
  SESSION_MAX_AGE_S,
  createSessionToken,
} from "@/lib/admin-auth";
import { rateLimit } from "@/lib/rate-limit";

// Anti brute-force: max 10 incercari de login per IP / 10 minute.
const LOGIN_LIMIT = 10;
const LOGIN_WINDOW_MS = 10 * 60_000;

async function clientIp(): Promise<string> {
  const h = await headers();
  const fwd = h.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]!.trim();
  return h.get("x-real-ip") ?? "unknown";
}

/** Compara doua string-uri timing-safe (lungimi diferite => false). */
function safeEqual(a: string, b: string): boolean {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  if (ab.length !== bb.length) return false;
  return timingSafeEqual(ab, bb);
}

/** Server Action: verifica parola si seteaza cookie-ul de sesiune. */
export async function login(formData: FormData): Promise<void> {
  const { ok } = rateLimit(
    `admin-login:${await clientIp()}`,
    LOGIN_LIMIT,
    LOGIN_WINDOW_MS,
  );
  if (!ok) redirect("/admin?error=rate");

  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) redirect("/admin?error=config");

  const password = String(formData.get("password") ?? "");
  if (!safeEqual(password, expected!)) redirect("/admin?error=bad");

  const store = await cookies();
  store.set(ADMIN_COOKIE, createSessionToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/admin",
    maxAge: SESSION_MAX_AGE_S,
  });

  redirect("/admin");
}

/** Server Action: sterge cookie-ul de sesiune. */
export async function logout(): Promise<void> {
  const store = await cookies();
  store.set(ADMIN_COOKIE, "", { path: "/admin", maxAge: 0 });
  redirect("/admin");
}
