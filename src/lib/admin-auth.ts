/**
 * Sesiune /admin: un cookie semnat HMAC-SHA256, fara stare pe server.
 *
 * Tokenul = "<issuedAtMs>.<semnatura>". Semnatura se calculeaza peste
 * issuedAtMs cu ADMIN_SESSION_SECRET. Validarea recalculeaza semnatura si o
 * compara timing-safe. Nu pastram sesiuni in DB — e suficient pentru o pagina
 * interna protejata de o parola unica.
 */

import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE = "admin_session";

// "Practic permanent" — userul vrea sa nu fie delogat. ~5 ani.
export const SESSION_MAX_AGE_S = 5 * 365 * 24 * 60 * 60;

function secret(): string {
  const s = process.env.ADMIN_SESSION_SECRET;
  if (!s) throw new Error("Lipseste ADMIN_SESSION_SECRET din .env.local");
  return s;
}

function sign(issuedAtMs: string): string {
  return createHmac("sha256", secret()).update(issuedAtMs).digest("hex");
}

/** Creeaza valoarea cookie-ului de sesiune pentru un login reusit. */
export function createSessionToken(): string {
  const issuedAtMs = String(Date.now());
  return `${issuedAtMs}.${sign(issuedAtMs)}`;
}

/** Verifica un token de sesiune: semnatura valida si neexpirat. */
export function verifySessionToken(token: string | undefined): boolean {
  if (!token) return false;
  const dot = token.lastIndexOf(".");
  if (dot <= 0) return false;

  const issuedAtMs = token.slice(0, dot);
  const sig = token.slice(dot + 1);

  const expected = sign(issuedAtMs);
  const a = Buffer.from(sig, "hex");
  const b = Buffer.from(expected, "hex");
  if (a.length !== b.length || !timingSafeEqual(a, b)) return false;

  const issued = Number(issuedAtMs);
  if (!Number.isFinite(issued)) return false;
  const ageS = (Date.now() - issued) / 1000;
  return ageS >= 0 && ageS < SESSION_MAX_AGE_S;
}

/** True daca request-ul curent are un cookie de sesiune valid. */
export async function isAuthed(): Promise<boolean> {
  const store = await cookies();
  return verifySessionToken(store.get(ADMIN_COOKIE)?.value);
}
