/**
 * Test end-to-end + securitate pentru sistemul /admin.
 *
 * Ruleaza pe un server pornit local + Supabase live. Acopera:
 *   1. Scrierea prin calea reala a formularului (cheie publishable + RLS)
 *   1b. Politica de INSERT respinge date invalide (sursa/consimtamant/lungime)
 *   2. RLS: cheia publishable NU poate citi submisiile
 *   3. Gardul /admin: cookie absent / malformat / falsificat / expirat / viitor
 *   4. Cookie valid -> dashboard + datele de test apar
 *   5. Export CSV: blocat fara auth, filtrare pe sursa, anti-injection, escaping
 *   6. Header-e de securitate + noindex pe /admin
 *   7. Cleanup
 *
 * Rulare (server pe 3939):  node tests/admin-e2e.mjs
 *   BASE=http://localhost:3000 node tests/admin-e2e.mjs
 */

import { createHmac } from "node:crypto";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE = process.env.BASE ?? "http://localhost:3939";

/* ----------------------------- env loading ----------------------------- */

function loadEnv() {
  const txt = readFileSync(join(__dirname, "..", ".env.local"), "utf8");
  const env = {};
  for (const line of txt.split("\n")) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m) env[m[1]] = m[2].trim();
  }
  return env;
}

const env = loadEnv();
const SUPABASE_URL = env.SUPABASE_URL;
const PUBLISHABLE = env.SUPABASE_PUBLISHABLE_KEY;
const SECRET = env.SUPABASE_SECRET_KEY;
const SESSION_SECRET = env.ADMIN_SESSION_SECRET;
const SESSION_MAX_AGE_S = 5 * 365 * 24 * 60 * 60;

/* ------------------------------ test harness ---------------------------- */

let passed = 0;
let failed = 0;
const failures = [];

function check(name, cond, detail = "") {
  if (cond) {
    passed++;
    console.log(`  \x1b[32m✓\x1b[0m ${name}`);
  } else {
    failed++;
    failures.push(name);
    console.log(`  \x1b[31m✗ ${name}\x1b[0m ${detail ? `— ${detail}` : ""}`);
  }
}

/* ------------------------------ helpers --------------------------------- */

function signTs(issuedMs) {
  return createHmac("sha256", SESSION_SECRET).update(String(issuedMs)).digest("hex");
}
function cookieFor(issuedMs) {
  return `${issuedMs}.${signTs(issuedMs)}`;
}
const validCookie = () => cookieFor(Date.now());

function get(path, cookie) {
  return fetch(`${BASE}${path}`, {
    redirect: "manual",
    headers: cookie ? { Cookie: `admin_session=${cookie}` } : {},
  });
}

function insertPublishable(rows) {
  return fetch(`${SUPABASE_URL}/rest/v1/contact_submissions`, {
    method: "POST",
    headers: {
      apikey: PUBLISHABLE,
      Authorization: `Bearer ${PUBLISHABLE}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(rows),
  });
}

/* --------------------------------- run ---------------------------------- */

const MARKER = `e2e-${Date.now()}`;
const trickyMessage = 'Line one, with "quotes"\nand a comma, plus émojis ✓';

// Toate randurile poarta acelasi set de chei (cerinta PostgREST pentru array).
const base = {
  company: MARKER,
  phone: null,
  service: null,
  budget: null,
  gdpr_consent: true,
};

async function main() {
  for (const [k, v] of Object.entries({ SUPABASE_URL, PUBLISHABLE, SECRET, SESSION_SECRET })) {
    if (!v) {
      console.error(`Missing ${k} in .env.local`);
      process.exit(2);
    }
  }

  console.log(`\nRunning admin e2e + security against ${BASE}\n`);
  const cookie = validCookie();

  // 1. INSERT prin calea reala (cheie publishable, ca formularul)
  console.log("1) Form write path (publishable key + RLS INSERT)");
  const insertRes = await insertPublishable([
    {
      ...base,
      source: "contact_form",
      name: "E2E Alice",
      email: `${MARKER}-a@test.local`,
      phone: "+40700000001",
      message: trickyMessage,
    },
    {
      ...base,
      source: "start_project",
      name: "E2E Bob",
      email: `${MARKER}-b@test.local`,
      message: "Project enquiry",
      service: "Websites",
      budget: "5k-10k",
    },
  ]);
  check("INSERT of valid rows returns 2xx", insertRes.ok, `status ${insertRes.status}`);

  // 1b. Politica respinge inserari invalide
  console.log("1b) Hardened INSERT policy rejects invalid data");
  const badSource = await insertPublishable([
    { ...base, source: "hacker", name: "Bad", email: `${MARKER}-x@test.local`, message: "x" },
  ]);
  check("unknown source rejected", !badSource.ok, `status ${badSource.status}`);

  const noConsent = await insertPublishable([
    { ...base, source: "contact_form", name: "NoConsent", email: `${MARKER}-y@test.local`, message: "x", gdpr_consent: false },
  ]);
  check("gdpr_consent=false rejected", !noConsent.ok, `status ${noConsent.status}`);

  const tooLong = await insertPublishable([
    { ...base, source: "contact_form", name: "Long", email: `${MARKER}-z@test.local`, message: "x".repeat(10001) },
  ]);
  check("over-long message rejected", !tooLong.ok, `status ${tooLong.status}`);

  // 2. RLS: publishable key nu poate citi
  console.log("2) RLS blocks reads with the publishable key");
  const readPub = await fetch(
    `${SUPABASE_URL}/rest/v1/contact_submissions?select=id&company=eq.${MARKER}`,
    { headers: { apikey: PUBLISHABLE, Authorization: `Bearer ${PUBLISHABLE}` } },
  );
  const pubRows = readPub.ok ? await readPub.json() : null;
  check("publishable key cannot read rows", Array.isArray(pubRows) && pubRows.length === 0, `got ${JSON.stringify(pubRows)}`);

  // 3. Gardul /admin
  console.log("3) /admin auth gate (cookie variants)");
  const isLogin = (html) => html.includes("Admin access") && !html.includes("Form submissions");

  check("no cookie -> login", isLogin(await (await get("/admin")).text()));
  check("empty cookie -> login", isLogin(await (await get("/admin", "")).text()));
  check("malformed cookie (no dot) -> login", isLogin(await (await get("/admin", "garbage")).text()));
  check("forged signature -> login", isLogin(await (await get("/admin", "123.deadbeef")).text()));

  const tampered = cookie.replace(/^\d+/, "9999999999999"); // timestamp schimbat, semnatura veche
  check("tampered timestamp -> login", isLogin(await (await get("/admin", tampered)).text()));

  const expired = cookieFor(Date.now() - (SESSION_MAX_AGE_S + 86400) * 1000);
  check("expired but correctly-signed cookie -> login", isLogin(await (await get("/admin", expired)).text()));

  const future = cookieFor(Date.now() + 86400 * 1000);
  check("future-dated cookie -> login", isLogin(await (await get("/admin", future)).text()));

  // 4. Cookie valid -> dashboard + date
  console.log("4) Valid session -> dashboard shows data");
  const authedHtml = await (await get("/admin", cookie)).text();
  check("valid cookie -> dashboard", authedHtml.includes("Form submissions"));
  check("dashboard contains test submission", authedHtml.includes("E2E Alice"));
  check("dashboard contains test email", authedHtml.includes(`${MARKER}-a@test.local`));

  // 5. Export CSV
  console.log("5) CSV export (auth, filter, anti-injection, escaping)");
  check("export without auth -> 401", (await get("/admin/export")).status === 401);

  const expAll = await get("/admin/export", cookie);
  const csvAll = await expAll.text();
  check("export with auth -> 200", expAll.status === 200, `status ${expAll.status}`);
  check("export content-type text/csv", (expAll.headers.get("content-type") ?? "").includes("text/csv"));
  check("CSV contains both test emails", csvAll.includes(`${MARKER}-a@test.local`) && csvAll.includes(`${MARKER}-b@test.local`));
  check("CSV escapes quotes/commas/newlines (RFC-4180)", csvAll.includes('"Line one, with ""quotes""'));

  const csvContact = await (await get("/admin/export?source=contact_form", cookie)).text();
  check(
    "source filter: contact_form export excludes start_project row",
    csvContact.includes(`${MARKER}-a@test.local`) && !csvContact.includes(`${MARKER}-b@test.local`),
  );

  const injection = encodeURIComponent("contact_form&select=*&id=not.is.null");
  const injRes = await get(`/admin/export?source=${injection}`, cookie);
  const injCsv = await injRes.text();
  check(
    "source injection attempt is neutralised (200, no data leak)",
    injRes.status === 200 && !injCsv.includes(`${MARKER}-a@test.local`),
    `status ${injRes.status}`,
  );

  // 6. Security headers + noindex
  console.log("6) Security headers & noindex on /admin");
  const headRes = await get("/admin", cookie);
  const headHtml = await headRes.text();
  check("CSP header present", !!headRes.headers.get("content-security-policy"));
  check("X-Content-Type-Options: nosniff", (headRes.headers.get("x-content-type-options") ?? "") === "nosniff");
  check("page is marked noindex", /noindex/i.test(headHtml) || /noindex/i.test(headRes.headers.get("x-robots-tag") ?? ""));

  // 7. Cleanup
  console.log("7) Cleanup test rows (secret key)");
  const del = await fetch(`${SUPABASE_URL}/rest/v1/contact_submissions?company=eq.${MARKER}`, {
    method: "DELETE",
    headers: { apikey: SECRET, Authorization: `Bearer ${SECRET}`, Prefer: "return=representation" },
  });
  const deleted = del.ok ? await del.json() : [];
  check("deleted the 2 valid test rows (invalid ones never inserted)", Array.isArray(deleted) && deleted.length === 2, `deleted ${Array.isArray(deleted) ? deleted.length : "?"}`);

  /* ------------------------------- summary ------------------------------ */
  console.log(`\n${passed} passed, ${failed} failed`);
  if (failed > 0) {
    console.log(`Failures: ${failures.join(", ")}`);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("\nTest run crashed:", err);
  process.exit(2);
});
