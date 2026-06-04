<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Styling: `globals.css` is PRECOMPILED Tailwind — there is NO build step

`src/app/globals.css` is a static, pre-generated Tailwind output (~6k lines).
There is **no `tailwind.config`, no PostCSS pipeline, and no JIT compiler** in
this project. Consequences you MUST keep in mind:

- **A brand-new arbitrary Tailwind class will silently NOT render** (e.g.
  `top-[37px]`, `bg-[#abc123]`, `grid-cols-[1.3fr_1fr]` that isn't already in
  the file). It won't error — it just produces no styles.
- Before using a utility class, confirm it already exists in `globals.css`. If
  it doesn't, either **reuse an existing class** or **use an inline `style={{}}`
  object** instead (this is the established pattern across the pages).
- New standalone components (e.g. `not-found.tsx`, `error.tsx`) use inline
  styles for exactly this reason.

If the styling system is ever reworked into a real Tailwind build, delete this
section.

# Headers / security

Global HTTP security headers (CSP, HSTS, etc.) live in `next.config.ts`. The CSP
is intentionally permissive for Google Tag/GA/Ads and inline scripts/styles —
if you add a new third-party script or domain, update `cspDirectives` there or
it will be blocked in the browser.
