# viral4hype

Marketing website for **viral4hype** — a web design & performance-marketing
agency. Built with Next.js (App Router) and deployed as a fully static site.

- **Framework:** Next.js 16 (App Router, Turbopack) · React 19 · TypeScript
- **Styling:** precompiled Tailwind output in `src/app/globals.css` + inline
  styles. ⚠️ There is no Tailwind build step — see [AGENTS.md](./AGENTS.md)
  before adding utility classes.
- **Forms:** React Server Actions → Supabase (REST), with honeypot + GDPR
  consent + IP rate limiting.
- **Analytics:** Google Tag (gtag), gated behind Cookie Consent / Consent Mode v2.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Scripts

| Command         | Description                                  |
| --------------- | -------------------------------------------- |
| `npm run dev`   | Start the dev server                         |
| `npm run build` | Production build (static prerender)          |
| `npm run start` | Serve the production build                    |
| `npm run lint`  | Run ESLint                                    |

## Environment variables

Create `.env.local` (git-ignored):

```bash
SUPABASE_URL=https://<project>.supabase.co
SUPABASE_PUBLISHABLE_KEY=<publishable-key>   # RLS allows INSERT only
```

The Supabase table is `contact_submissions`; the publishable key is safe to use
server-side because row-level security restricts it to inserts.

## Project structure

```
src/
  app/
    page.tsx              # Homepage
    layout.tsx            # Root layout, fonts, consent + JSON-LD
    not-found.tsx         # Branded 404
    error.tsx             # Branded error boundary
    <route>/page.tsx      # Service / legal / work pages
    actions/contact.ts    # Server Action for the contact + project forms
    components/           # Nav, Footer, forms, modal, cookie consent
    ViralInteractions.tsx # Client-side canvas/cursor/scroll effects
  lib/
    seo.ts                # Metadata + JSON-LD helpers (single source of truth)
    supabase.ts           # REST insert helper
    rate-limit.ts         # In-memory form throttle
```

## Key conventions

- **SEO:** every page builds its metadata via `buildMetadata()` in
  `src/lib/seo.ts`. Update `SITE` there for global copy/URLs.
- **Routing:** internal navigation uses `next/link`. `/contact` is intercepted
  client-side to open the "Start a Project" modal (with a no-JS redirect
  fallback in `next.config.ts`).
- **Images:** use `next/image`; keep source assets reasonably sized (AVIF/WebP
  are served automatically).
- **Security headers / CSP:** configured in `next.config.ts`.
