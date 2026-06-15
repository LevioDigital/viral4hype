# /admin — vizualizare submisii formular

**Data:** 2026-06-15
**Status:** aprobat, în implementare

## Scop

Pagină internă `/admin` care afișează submisiile din tabelul Supabase
`public.contact_submissions` (formularul de contact + popup "Start a Project").
Doar pentru uz intern al echipei. Citire + export CSV.

## Acces & securitate

- O singură parolă, din env `ADMIN_PASSWORD`.
- La login corect se setează un cookie de sesiune `admin_session`:
  - valoare semnată HMAC-SHA256 cu `ADMIN_SESSION_SECRET`
  - `httpOnly`, `sameSite=lax`, `secure` în producție, `path=/admin`
  - `maxAge` foarte lung (~5 ani) — userul vrea "să nu îl mai deconecteze".
    Re-login doar la logout manual sau la ștergerea cookie-urilor.
- Gardul de auth se face **în Server Component** (`/admin/page.tsx`) și în
  route handler-ul de export — NU în `proxy.ts`. Ghidul Next 16 spune explicit
  că proxy nu e o soluție de sesiune/autorizare.
- `/admin` are `robots: noindex` ca să nu apară în motoare de căutare.

## Citirea datelor

- Server-side, cu `SUPABASE_SECRET_KEY` (cheie secretă `sb_secret_...`, trece
  peste RLS) prin REST/PostgREST cu `fetch` — același pattern ca
  `src/lib/supabase.ts`, fără `@supabase/supabase-js`.
- Cheia rămâne strict pe server (fără prefix `NEXT_PUBLIC`).
- RLS și tabelul rămân neatinse (INSERT-only pentru cheia publishable).

## UI

- `/admin` = Server Component. Dacă nu există cookie valid → afișează un
  formular mic de login (parolă). Dacă există → afișează dashboard-ul.
- Tabel pe tema dark a site-ului, **inline styles** (globals.css e Tailwind
  precompilat — clase arbitrare noi nu se randează; vezi AGENTS.md).
- Coloane: dată, sursă, nume, companie, email, telefon, serviciu, buget,
  mesaj, consimțământ GDPR. Sortare `created_at desc`.
- Filtru după sursă prin query param `?source=contact_form|start_project`.
- Buton "Export CSV" → `/admin/export` (route handler, respectă filtrul).
- Buton logout (șterge cookie-ul).

## Fișiere

- `src/lib/admin-auth.ts` — semnare/verificare cookie + helper `isAuthed()`.
- `src/lib/supabase-admin.ts` — `fetchSubmissions({ source? })`.
- `src/app/actions/admin.ts` — `login`, `logout` (Server Actions).
- `src/app/admin/page.tsx` — gate + tabel.
- `src/app/admin/export/route.ts` — CSV.
- `.env.local` — `SUPABASE_SECRET_KEY`, `ADMIN_PASSWORD`, `ADMIN_SESSION_SECRET`.

## Non-obiective (YAGNI)

- Fără Supabase Auth / utilizatori reali.
- Fără editare/ștergere/marcare submisii (read-only + export).
- Fără paginare server-side acum (volum mic; se adaugă dacă crește).
