# Navbar Pages — Design Spec
**Date:** 2026-04-20  
**Project:** viral4hype  
**Status:** Approved

---

## Overview

Create 5 separate pages for each navbar item, in the same design system as the homepage. All pages follow the **Impact First** layout: stats and results front-and-center, dark background hero, light feature sections, dark CTA banner.

**Decisions made:**
- Layout: B — Impact First (hero centrat cu cifre + visual showcase + features + CTA)
- Language: English
- Blog: Coming Soon page with email subscribe

---

## Design System (inherited from homepage)

- **Background dark:** `#180A03` / `#0D0806`
- **Background light:** `#f4f3ef` (off-white)
- **Accent:** `#F26622` (orange)
- **Text primary:** white
- **Text secondary:** `rgba(255,255,255,0.55)`
- **Fonts:** Plus Jakarta Sans (body/display), Instrument Serif italic (accent headlines)
- **Border radius card:** `20px`
- **Spacing:** `py-section-y px-container-x` (CSS vars)
- **Animations:** no complex canvas animations on inner pages — keep it clean and fast

---

## Shared Components (new files)

### `src/app/components/Nav.tsx`
Extracted verbatim from `page.tsx`. Includes desktop nav, mobile burger menu, mobile overlay. No changes to existing markup — just extracted into a reusable component.

### `src/app/components/Footer.tsx`
Extracted verbatim from `page.tsx`. Includes social links, contact info, copyright.

### `src/app/components/CTABanner.tsx`
Full-width dark section reused on every service page:
- Headline: "Ready to grow your business?"
- Subtext: "Let's build something great together."
- Button: "Start a Project →" → `/contact`

**Homepage update:** `page.tsx` imports `<Nav />` and `<Footer />` instead of inline markup. No visual change.

---

## Pages

### 1. `/websites` — Websites

**Route:** `src/app/websites/page.tsx`  
**Metadata:** `title: "Web Design & Development | viral4hype"`

**Sections:**
1. **Hero (dark)** — badge "Web Design & Development" · headline `Websites that` / *`actually convert`* (serif italic) · subtext · 3 stats (100+ Sites Built / 7-Day Delivery / ★★★★★) · CTA "Start a Project" + "See Our Work"
2. **Features Grid (light)** — heading `What's` *`included`* · 6 feature cards with icon + title + short description: Custom Design, Mobile-First, SEO Optimized, Fast CMS, Performance (95+ score), Ongoing Support
3. **Process (dark)** — heading `How it` *`works`* · 4 horizontal steps: Brief → Wireframe → Design → Dev → Launch
4. **Testimonials strip (light)** — 3 review cards pulled from existing testimonials in homepage
5. **CTA Banner (dark)** — `<CTABanner />`

---

### 2. `/google-ads-management` — Marketing

**Route:** `src/app/google-ads-management/page.tsx`  
**Metadata:** `title: "Google Ads & Digital Marketing | viral4hype"`

**Sections:**
1. **Hero (dark)** — badge "Digital Marketing" · headline `Marketing that` / *`drives real ROI`* · subtext · 3 stats (340% Avg ROAS / 50+ Clients / Daily Optimization) · CTA "Get a Free Audit"
2. **Services Grid (light)** — heading `What we` *`manage`* · 6 cards: Google Search Ads, Google Display Ads, Meta Ads (FB/IG), Remarketing, A/B Testing, Monthly Reporting
3. **Results Section (dark)** — heading `Real` *`results`* · 3 large metric callouts with client context (ROAS numbers, lead volume)
4. **Process (light)** — 5 steps: Audit → Strategy → Launch → Optimize → Scale
5. **CTA Banner (dark)** — `<CTABanner />`

---

### 3. `/about-us` — Shopify Stores

**Route:** `src/app/about-us/page.tsx`  
**Metadata:** `title: "Shopify Stores | viral4hype"`

**Note:** Nav label is "Shopify Stores" but URL is `/about-us` — keeping existing URL to avoid breaking links.

**Sections:**
1. **Hero (dark)** — badge "Shopify Stores" · headline `Shopify stores that` / *`actually sell`* · subtext · 3 stats (30+ Stores Launched / 7-Day Go Live / Full Setup Included) · CTA "Build My Store"
2. **Features Grid (light)** — heading `Everything` *`included`* · 6 cards: Custom Shopify Theme, Payment Integration (Stripe/PayPal), Shipping (FanCourier/Cargus), Product Catalog Setup, SEO & Speed, Analytics Dashboard
3. **Why Shopify (dark)** — 3 large benefit callouts: Ease of Use, Scalability, Ecosystem
4. **Process (light)** — 4 steps: Discovery → Design → Build → Launch
5. **CTA Banner (dark)** — `<CTABanner />`

---

### 4. `/our-work` — Our Work

**Route:** `src/app/our-work/page.tsx`  
**Metadata:** `title: "Our Work | viral4hype"`

**Sections:**
1. **Hero (dark)** — badge "Portfolio" · headline `Work that` / *`speaks for itself`* · subtext · 3 stats (100+ Projects / 5 Years / ★★★★★) · no CTA button (scroll cue instead)
2. **Filter Bar (light bg)** — pill buttons: All / Websites / Shopify / Marketing — client-side filter via React `useState`, filters cards by `data-category` tag
3. **Project Grid (light)** — masonry-style 3-col grid. Each card: image (aspect-ratio 4/3) → project name → tags → hover orange overlay "View Project ↗". Uses existing project images already in `/public/images/`. Cards are links to `/our-work/[slug]` (existing routes, not new ones)
4. **CTA Banner (dark)** — `<CTABanner />`

**Note:** Individual project detail pages (`/our-work/[slug]`) already exist or are linked — not in scope for this spec.

---

### 5. `/blog` — Coming Soon

**Route:** `src/app/blog/page.tsx`  
**Metadata:** `title: "Blog — Coming Soon | viral4hype"`

**Single section (full-screen dark, centered):**
- Grain SVG overlay (same as homepage)
- Badge pill "Blog"
- Headline `The Blog is` / *`coming soon`*
- Subtext: "Insights on web design, digital marketing, and growing your business online."
- Email subscribe form: input + "Notify me" button — on submit, opens `mailto:contact@viral4hype.com?subject=Blog+Notification` (no backend needed)
- Social icons row (same as mobile menu)

---

## Implementation Notes

- No canvas animations or WebGL on inner pages — use CSS only (grain SVG, radial gradient glows)
- Grain SVG, cursor dot, and ViralInteractions.tsx run from root `layout.tsx` — no duplication needed
- `ViralInteractions.tsx` already handles cursor, nav scroll behavior, burger menu — it will apply to all pages automatically since it's in `layout.tsx`
- Each page imports `<Nav />` and `<Footer />` directly (not via layout, to keep homepage intact during refactor)
- All images reference existing `/public/images/` assets
- No new dependencies required

---

## File Structure

```
src/app/
├── components/
│   ├── Nav.tsx          ← extracted from page.tsx
│   ├── Footer.tsx       ← extracted from page.tsx  
│   └── CTABanner.tsx    ← new shared component
├── websites/
│   └── page.tsx
├── google-ads-management/
│   └── page.tsx
├── about-us/
│   └── page.tsx         (Shopify Stores content)
├── our-work/
│   └── page.tsx
├── blog/
│   └── page.tsx         (Coming Soon)
└── page.tsx             (updated to use Nav + Footer components)
```
