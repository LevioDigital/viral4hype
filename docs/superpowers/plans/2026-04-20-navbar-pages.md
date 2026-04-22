# Navbar Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create 5 separate pages for each navbar item (Websites, Marketing, Shopify Stores, Our Work, Blog) in the same viral4hype design system, plus extract shared Nav/Footer components.

**Architecture:** Extract Nav and Footer from `page.tsx` into reusable components. Each new page uses these components plus page-specific sections following the "Impact First" layout: dark hero with stats → light features grid → dark process section → shared CTA banner.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS (via globals.css CSS vars), TypeScript, no new dependencies.

---

## File Map

| Action | File | Purpose |
|--------|------|---------|
| Create | `src/app/components/Nav.tsx` | Nav bar + mobile menu (extracted from page.tsx lines 40–334) |
| Create | `src/app/components/Footer.tsx` | Footer (extracted from page.tsx lines 1732–1971) |
| Create | `src/app/components/CTABanner.tsx` | Shared dark CTA section used on all service pages |
| Modify | `src/app/page.tsx` | Replace inline nav/footer with `<Nav />` / `<Footer />` |
| Create | `src/app/websites/page.tsx` | Websites service page |
| Create | `src/app/google-ads-management/page.tsx` | Marketing service page |
| Create | `src/app/about-us/page.tsx` | Shopify Stores service page |
| Create | `src/app/our-work/page.tsx` | Portfolio page with category filter |
| Create | `src/app/blog/page.tsx` | Coming Soon page |

---

## Task 1: Create Nav Component

**Files:**
- Create: `src/app/components/Nav.tsx`

- [ ] **Step 1: Create the file with the exact markup extracted from page.tsx**

```tsx
export default function Nav() {
  return (
    <>
      {/* Grain overlay */}
      <svg
        className="fixed inset-0 w-full h-full pointer-events-none z-[9998] opacity-[0.038] mix-blend-overlay hidden lg:block"
        aria-hidden="true"
      >
        <filter id="grain-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-filter)" />
      </svg>

      {/* Custom cursor */}
      <div className="c-cursor fixed top-0 left-0 z-[2147483647] pointer-events-none hidden lg:block" id="cursor">
        <div className="c-dot absolute w-[6px] h-[6px] bg-white rounded-full origin-center"></div>
        <div className="c-ring absolute w-9 h-9 border-[1.5px] border-white rounded-full origin-center" id="cursor-ring"></div>
      </div>

      {/* Desktop nav */}
      <nav
        aria-label="Main navigation"
        className="nav fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between py-[1.4rem] px-[1.5rem] lg:px-container-x transition-all duration-500 ease-out-expo"
        id="nav"
      >
        <a href="/" className="nav-logo flex items-center" style={{ marginLeft: 'clamp(1rem, 5vw, 100px)' }} data-cursor="link">
          <img
            src="/images/logo_v4h.png"
            alt="viral4hype"
            width="120"
            height="38"
            style={{ height: '30px', width: 'auto', display: 'block' }}
            className="transition-opacity hover:opacity-80"
          />
        </a>

        <div className="nav-links flex gap-[2.2rem] max-lg:hidden">
          <a href="/websites" className="nav-link text-sm font-medium transition-colors duration-300 relative text-white/60 hover:text-white" data-cursor="link">Websites</a>
          <a href="/google-ads-management" className="nav-link text-sm font-medium transition-colors duration-300 relative text-white/60 hover:text-white" data-cursor="link">Marketing</a>
          <a href="/about-us" className="nav-link text-sm font-medium transition-colors duration-300 relative text-white/60 hover:text-white" data-cursor="link">Shopify Stores</a>
          <a href="/our-work" className="nav-link text-sm font-medium transition-colors duration-300 relative text-white/60 hover:text-white" data-cursor="link">Our Work</a>
          <a href="/blog" className="nav-link text-sm font-medium transition-colors duration-300 relative text-white/60 hover:text-white" data-cursor="link">Blog</a>
        </div>

        <a
          href="/contact"
          className="nav-cta text-[0.85rem] font-semibold py-[0.6rem] px-6 rounded-full transition-all duration-400 ease-out-expo relative overflow-hidden max-lg:hidden bg-white text-dark"
          style={{ marginRight: '100px' }}
          data-cursor="link"
        >
          <span className="relative z-1">Start a Project</span>
        </a>

        <button
          className="burger hidden max-lg:flex flex-col gap-1.5 p-1 z-[1001]"
          style={{ marginRight: '20px' }}
          id="burger"
          aria-label="Menu"
        >
          <span className="block w-[26px] h-0.5 rounded-sm transition-all duration-[350ms] ease-out-expo origin-center bg-white"></span>
          <span className="block w-[26px] h-0.5 rounded-sm transition-all duration-[350ms] ease-out-expo origin-center bg-white"></span>
          <span className="block w-[26px] h-0.5 rounded-sm transition-all duration-[350ms] ease-out-expo origin-center bg-white"></span>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className="mob-menu fixed inset-0 z-[999] overflow-hidden opacity-0 pointer-events-none transition-opacity duration-400"
        style={{ background: '#180A03' }}
        id="mob-menu"
      >
        <div className="absolute top-[-20%] right-[-20%] w-[90vw] h-[90vw] max-w-[500px] max-h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(242,102,34,0.22) 0%, rgba(242,102,34,0.07) 40%, transparent 70%)' }}
        ></div>
        <div className="absolute bottom-[-15%] left-[-20%] w-[80vw] h-[80vw] max-w-[450px] max-h-[450px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(242,102,34,0.15) 0%, rgba(242,102,34,0.04) 40%, transparent 70%)' }}
        ></div>

        <div className="absolute inset-0 flex flex-col overflow-y-auto">
          <div className="flex flex-col items-center w-full pt-24 pb-12 px-6 my-auto relative z-[1]">
            <nav aria-label="Mobile navigation" className="flex flex-col items-center gap-[clamp(0.4rem,2.5vh,1.2rem)] w-full mb-[clamp(1.5rem,4vh,3rem)]">
              <a href="/" className="mob-link font-display text-[clamp(1.4rem,4vh,2.4rem)] font-bold transition-colors duration-300 text-white/70 hover:text-white">Home</a>
              <a href="/websites" className="mob-link font-display text-[clamp(1.4rem,4vh,2.4rem)] font-bold transition-colors duration-300 text-white/70 hover:text-white">Websites</a>
              <a href="/google-ads-management" className="mob-link font-display text-[clamp(1.4rem,4vh,2.4rem)] font-bold transition-colors duration-300 text-white/70 hover:text-white">Marketing</a>
              <a href="/about-us" className="mob-link font-display text-[clamp(1.4rem,4vh,2.4rem)] font-bold transition-colors duration-300 text-white/70 hover:text-white">Shopify Stores</a>
              <a href="/our-work" className="mob-link font-display text-[clamp(1.4rem,4vh,2.4rem)] font-bold transition-colors duration-300 text-white/70 hover:text-white">Our Work</a>
              <a href="/blog" className="mob-link font-display text-[clamp(1.4rem,4vh,2.4rem)] font-bold transition-colors duration-300 text-white/70 hover:text-white">Blog</a>
              <a href="/contact" className="mob-link font-display text-[clamp(1.4rem,4vh,2.4rem)] font-bold transition-colors duration-300 text-gradient">Contact Us</a>

              <div className="w-20 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent my-[clamp(1.2rem,3.5vh,2.5rem)]"></div>

              <div className="flex flex-col items-center gap-3 mb-[clamp(1.2rem,3.5vh,2rem)]">
                <a href="tel:0752221510" className="flex items-center gap-2 text-[0.85rem] text-white/55 hover:text-white/80 transition-colors duration-300">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  0752 221 510
                </a>
                <a href="mailto:contact@viral4hype.com" className="flex items-center gap-2 text-[0.85rem] text-white/55 hover:text-white/80 transition-colors duration-300">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  contact@viral4hype.com
                </a>
              </div>

              <div className="flex gap-3">
                <a href="https://www.facebook.com/viral4hype/" target="_blank" rel="noopener noreferrer" className="ft-soc flex items-center justify-center w-9 h-9 rounded-full border border-white/10 text-white/55 transition-all duration-300 hover:text-white hover:-translate-y-0.5" data-cursor="link" aria-label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>
                <a href="https://www.instagram.com/viral4hype/" target="_blank" rel="noopener noreferrer" className="ft-soc flex items-center justify-center w-9 h-9 rounded-full border border-white/10 text-white/55 transition-all duration-300 hover:text-white hover:-translate-y-0.5" data-cursor="link" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" /><circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
                </a>
                <a href="https://www.linkedin.com/company/viral4hype/" target="_blank" rel="noopener noreferrer" className="ft-soc flex items-center justify-center w-9 h-9 rounded-full border border-white/10 text-white/55 transition-all duration-300 hover:text-white hover:-translate-y-0.5" data-cursor="link" aria-label="Linkedin">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2V9zM4 6a2 2 0 100-4 2 2 0 000 4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/components/Nav.tsx
git commit -m "feat: extract Nav component from page.tsx"
```

---

## Task 2: Create Footer Component

**Files:**
- Create: `src/app/components/Footer.tsx`

- [ ] **Step 1: Create the file**

```tsx
export default function Footer() {
  return (
    <footer className="footer relative overflow-hidden py-[clamp(4rem,8vh,7rem)] px-container-x pb-8 border-t border-white/5" style={{ background: '#180A03' }}>
      <div
        className="ft-watermark absolute bottom-[-0.1em] left-0 font-display font-black leading-[0.85] pointer-events-none select-none whitespace-nowrap"
        style={{ fontSize: '15vw', WebkitTextFillColor: 'transparent', WebkitTextStroke: '1.5px rgba(255,255,255,0.05)' }}
        aria-hidden="true"
      >
        viral4hype
      </div>

      <div className="ft-inner relative z-[1] max-w-[1200px] mx-auto">
        <div className="ft-top grid grid-cols-[1fr_2fr] max-lg:grid-cols-1 gap-16 max-lg:gap-10 mb-16">
          <div className="ft-brand-col max-w-[300px] max-lg:max-w-full">
            <a href="/">
              <img src="/images/logo_v4h.png" alt="viral4hype" width="140" height="44" style={{ height: '32px', width: 'auto' }} className="opacity-80 mb-4 hover:opacity-100 transition-opacity block" />
            </a>
            <p className="text-[0.85rem] text-white/50 leading-[1.65]">
              Agenție de web design și marketing digital cu sediul în România. Lucrăm cu clienți din București, Constanța, Brașov, Cluj-Napoca, Iași, Timișoara și din toată țara.
            </p>
            <div className="ft-social flex gap-[0.7rem] mt-6">
              <a href="https://www.facebook.com/viral4hype/" target="_blank" rel="noopener noreferrer" className="ft-soc flex items-center justify-center w-9 h-9 rounded-full border border-white/10 text-white/55 transition-all duration-300 hover:text-white hover:-translate-y-0.5" data-cursor="link" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
              <a href="https://www.instagram.com/viral4hype/" target="_blank" rel="noopener noreferrer" className="ft-soc flex items-center justify-center w-9 h-9 rounded-full border border-white/10 text-white/55 transition-all duration-300 hover:text-white hover:-translate-y-0.5" data-cursor="link" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" /><circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
              </a>
              <a href="https://www.linkedin.com/company/viral4hype/" target="_blank" rel="noopener noreferrer" className="ft-soc flex items-center justify-center w-9 h-9 rounded-full border border-white/10 text-white/55 transition-all duration-300 hover:text-white hover:-translate-y-0.5" data-cursor="link" aria-label="Linkedin">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2V9zM4 6a2 2 0 100-4 2 2 0 000 4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>
          </div>

          <div className="ft-cols grid grid-cols-3 max-xs:grid-cols-1 max-md:grid-cols-2 gap-8 max-md:gap-6">
            <div>
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-white/50 mb-5">Services</p>
              <a href="/websites" className="text-link block w-fit text-[0.88rem] text-white/55 py-[0.3rem] transition-colors duration-300 hover:text-white" data-cursor="link">Business Websites</a>
              <a href="/about-us" className="text-link block w-fit text-[0.88rem] text-white/55 py-[0.3rem] transition-colors duration-300 hover:text-white" data-cursor="link">Shopify Stores</a>
              <a href="/google-ads-management" className="text-link block w-fit text-[0.88rem] text-white/55 py-[0.3rem] transition-colors duration-300 hover:text-white" data-cursor="link">Google Ads</a>
              <a href="/google-ads-management" className="text-link block w-fit text-[0.88rem] text-white/55 py-[0.3rem] transition-colors duration-300 hover:text-white" data-cursor="link">Digital Marketing</a>
            </div>
            <div>
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-white/50 mb-5">Company</p>
              <a href="/our-work" className="text-link block w-fit text-[0.88rem] text-white/55 py-[0.3rem] transition-colors duration-300 hover:text-white" data-cursor="link">Our Work</a>
              <a href="/blog" className="text-link block w-fit text-[0.88rem] text-white/55 py-[0.3rem] transition-colors duration-300 hover:text-white" data-cursor="link">Blog</a>
              <a href="/about-us" className="text-link block w-fit text-[0.88rem] text-white/55 py-[0.3rem] transition-colors duration-300 hover:text-white" data-cursor="link">About Us</a>
              <a href="/contact" className="text-link block w-fit text-[0.88rem] text-white/55 py-[0.3rem] transition-colors duration-300 hover:text-white" data-cursor="link">Contact Us</a>
            </div>
            <div>
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-white/50 mb-5">Contact</p>
              <a href="tel:0752221510" className="text-link block w-fit text-[0.88rem] text-white/55 py-[0.3rem] transition-colors duration-300 hover:text-white" data-cursor="link">0752 221 510</a>
              <a href="mailto:contact@viral4hype.com" className="text-link block w-fit text-[0.88rem] text-white/55 py-[0.3rem] transition-colors duration-300 hover:text-white" data-cursor="link">contact@viral4hype.com</a>
              <a href="https://www.google.com/maps/place/Viral+4+Hype/@45.8281953,19.7350693,6z/data=!3m1!4b1!4m6!3m5!1s0x239561cbf0276647:0x754560d0bd4dc421!8m2!3d45.9425072!4d25.0201084!16s%2Fg%2F11y1bk0xpw" target="_blank" rel="noopener noreferrer" className="text-link block w-fit text-[0.88rem] text-white/55 py-[0.3rem] transition-colors duration-300 hover:text-white/65" data-cursor="link">Bucuresti, Constanta, Romania</a>
            </div>
          </div>
        </div>

        <div className="ft-bottom flex justify-between items-center text-[0.78rem] text-white/55 border-t border-white/5 pt-6 flex-wrap max-xs:flex-col max-xs:text-center gap-[0.8rem]">
          <p>&copy; 2026 viral4hype. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/terms-and-conditions" className="text-link text-white/55 transition-colors duration-300 hover:text-white/70" data-cursor="link">Terms</a>
            <a href="/privacy-policy" className="text-link text-white/55 transition-colors duration-300 hover:text-white/70" data-cursor="link">Privacy</a>
            <a href="/cookie-policy" className="text-link text-white/55 transition-colors duration-300 hover:text-white/70" data-cursor="link">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/components/Footer.tsx
git commit -m "feat: extract Footer component from page.tsx"
```

---

## Task 3: Create CTABanner Component

**Files:**
- Create: `src/app/components/CTABanner.tsx`

- [ ] **Step 1: Create the file**

```tsx
export default function CTABanner() {
  return (
    <section className="py-section-y px-container-x" style={{ background: '#180A03' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="relative rounded-[24px] overflow-hidden px-[clamp(2rem,6vw,5rem)] py-[clamp(3rem,7vh,5rem)]"
          style={{ background: 'linear-gradient(135deg, #1a0c04 0%, #0d0806 100%)', border: '1px solid rgba(242,102,34,0.15)' }}
        >
          {/* Glow */}
          <div className="absolute top-[-30%] right-[-10%] w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(242,102,34,0.12) 0%, transparent 65%)' }}
          />

          <div className="relative z-[1] flex items-center justify-between gap-8 flex-wrap">
            <div>
              <div className="flex items-center gap-1.5 text-[0.8rem] font-semibold tracking-[0.12em] uppercase text-white/40 mb-4">
                <span className="shrink-0 inline-block w-[5px] h-[5px] rounded-full" style={{ backgroundColor: '#F26622' }}></span>
                Get Started
              </div>
              <h2 className="font-display text-[clamp(1.8rem,3.5vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.02em] text-white mb-3">
                Ready to grow<br />
                <em className="font-serif italic font-normal text-[1.02em]" style={{ color: '#F26622' }}>your business?</em>
              </h2>
              <p className="text-[0.95rem] text-white/55 max-w-[400px]">
                Let&apos;s build something great together. Fast delivery, professional results, no upfront costs.
              </p>
            </div>

            <div className="flex items-center gap-4 flex-wrap shrink-0">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-[0.95rem] font-semibold py-[0.9rem] px-8 rounded-full bg-white text-dark transition-all duration-400 ease-out-expo whitespace-nowrap"
                data-cursor="link"
              >
                Start a Project
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M6 14L14 6M14 6H6M14 6V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="tel:0752221510"
                className="text-[0.9rem] font-medium text-white/60 hover:text-white transition-colors duration-300 whitespace-nowrap"
                data-cursor="link"
              >
                or call 0752 221 510
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/components/CTABanner.tsx
git commit -m "feat: add shared CTABanner component"
```

---

## Task 4: Refactor Homepage to Use Shared Components

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Add imports at the top of `src/app/page.tsx`**

After the first line `import ViralInteractions from "./ViralInteractions";`, add:

```tsx
import Nav from "./components/Nav";
import Footer from "./components/Footer";
```

- [ ] **Step 2: Replace inline nav block**

Find this block in `page.tsx` (lines 12–334, starts with the grain SVG, ends with the closing `</div>` of the mobile menu):

```tsx
      <svg
        className="fixed inset-0 w-full h-full pointer-events-none z-[9998] opacity-[0.038] mix-blend-overlay hidden lg:block"
        aria-hidden="true"
      >
```

...through to the end of the mobile menu closing tag:

```tsx
      </div>{" "}
      {/*  Nav handler — zero dependencies, works instantly on page load  */}{" "}
```

Replace the grain SVG + cursor + nav + mobile menu block with:

```tsx
      <Nav />
      {/*  Nav handler — zero dependencies, works instantly on page load  */}{" "}
```

- [ ] **Step 3: Replace inline footer**

Find the opening tag of the footer in `page.tsx`:
```tsx
      <footer className="footer relative overflow-hidden
```

...through to its closing `</footer>{" "}` tag.

Replace the entire footer block with:
```tsx
      <Footer />
```

- [ ] **Step 4: Verify homepage still works**

Run: `npm run dev`
Open: `http://localhost:3000`
Expected: Homepage looks exactly the same. Nav, mobile menu, footer all functional.

- [ ] **Step 5: Commit**

```bash
git add src/app/page.tsx
git commit -m "refactor: homepage uses shared Nav and Footer components"
```

---

## Task 5: Create /websites Page

**Files:**
- Create: `src/app/websites/page.tsx`

- [ ] **Step 1: Create the file**

```tsx
import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CTABanner from "../components/CTABanner";

export const metadata: Metadata = {
  title: "Web Design & Development | viral4hype",
  description: "Custom websites built in 7 days. Mobile-first, SEO optimized, results-driven. Start with 0 RON upfront.",
};

const features = [
  { icon: "✦", title: "Custom Design", desc: "Every site is designed from scratch to match your brand — no templates, no compromises." },
  { icon: "◈", title: "Mobile-First", desc: "Built for mobile from day one. Flawless on every device, every screen size." },
  { icon: "◎", title: "SEO Optimized", desc: "Technical SEO baked in from the start: fast load, clean markup, schema, sitemap." },
  { icon: "⬡", title: "Easy CMS", desc: "Update your content yourself — no coding needed, ever. We handle the setup." },
  { icon: "◉", title: "Performance 95+", desc: "Lighthouse scores above 95. Fast sites rank better and convert more visitors." },
  { icon: "◌", title: "Ongoing Support", desc: "We stay with you after launch — updates, fixes, and improvements whenever you need." },
];

const steps = [
  { num: "01", title: "Discovery Call", desc: "We learn about your business, goals, and competitors in a focused 30-minute call." },
  { num: "02", title: "Wireframe & Design", desc: "We produce a full design mockup for your approval before writing a single line of code." },
  { num: "03", title: "Development", desc: "Your site is built with performance-first code, tested across browsers and devices." },
  { num: "04", title: "Launch", desc: "We deploy your site, set up hosting, connect your domain, and hand over the keys." },
];

export default function WebsitesPage() {
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-white focus:text-dark focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold focus:text-sm">
        Skip to main content
      </a>
      <Nav />

      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden pt-[clamp(7rem,14vh,11rem)] pb-section-y px-container-x" style={{ background: '#180A03' }}>
          <div className="absolute top-[-20%] right-[-10%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full pointer-events-none hidden lg:block"
            style={{ background: 'radial-gradient(circle, rgba(242,102,34,0.10) 0%, transparent 65%)' }}
          />
          <div className="absolute bottom-[10%] left-[-8%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full pointer-events-none hidden lg:block"
            style={{ background: 'radial-gradient(circle, rgba(8,117,233,0.06) 0%, transparent 65%)' }}
          />

          <div className="max-w-[1200px] mx-auto relative z-[1]">
            <div className="inline-flex items-center gap-2 text-[0.8rem] font-medium tracking-[0.08em] text-white/50 border border-white/10 rounded-[40px] py-[0.35rem] px-4 mb-[clamp(1.5rem,3vh,2.5rem)] backdrop-blur-[8px]">
              <span className="w-[6px] h-[6px] rounded-full" style={{ backgroundColor: '#F26622' }}></span>
              Web Design &amp; Development
            </div>

            <h1 className="font-display font-black text-[clamp(2.8rem,6.5vw,7.5rem)] leading-[0.93] tracking-[-0.03em] text-white mb-[clamp(1.5rem,3vh,2.5rem)]">
              Websites that<br />
              <em className="font-serif italic font-normal text-[1.05em]">actually convert</em>
            </h1>

            <p className="text-[clamp(0.9rem,1.3vw,1.05rem)] text-white/65 leading-[1.7] max-w-[500px] mb-[clamp(2rem,4vh,3rem)]">
              We build fast, beautiful, conversion-focused websites for local businesses — delivered in 7 days, with 0 RON upfront. Your competitors already have one. Now it&apos;s your turn.
            </p>

            <div className="flex items-center gap-8 pt-6 border-t border-white/[0.06] flex-wrap mb-[clamp(2.5rem,5vh,4rem)]">
              <div className="flex flex-col gap-[0.15rem]">
                <span className="text-[clamp(1.1rem,1.8vw,1.5rem)] font-extrabold text-white tracking-[-0.02em]">100+</span>
                <span className="text-xs font-medium text-white/55 uppercase tracking-[0.08em]">Sites Built</span>
              </div>
              <div className="w-px h-10 bg-white/[0.08]"></div>
              <div className="flex flex-col gap-[0.15rem]">
                <span className="text-[clamp(1.1rem,1.8vw,1.5rem)] font-extrabold text-white tracking-[-0.02em]">7 Days</span>
                <span className="text-xs font-medium text-white/55 uppercase tracking-[0.08em]">Delivery</span>
              </div>
              <div className="w-px h-10 bg-white/[0.08]"></div>
              <div className="flex flex-col gap-[0.15rem]">
                <span className="text-[clamp(1.1rem,1.8vw,1.5rem)] font-extrabold text-white tracking-[0.18em]">★★★★★</span>
                <span className="text-xs font-medium text-white/55 uppercase tracking-[0.08em]">Reviews</span>
              </div>
            </div>

            <div className="flex items-center gap-6 flex-wrap">
              <a href="/contact" className="inline-flex items-center gap-2 text-[0.95rem] font-semibold py-[0.9rem] px-8 rounded-full bg-white text-dark transition-all duration-400 ease-out-expo" data-cursor="link">
                Start a Project
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M6 14L14 6M14 6H6M14 6V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
              <a href="/our-work" className="text-[0.95rem] font-semibold text-white/65 hover:text-white transition-colors duration-300 border-b-2 border-white/20 hover:border-white/60 py-[0.9rem]" data-cursor="link">
                See Our Work
              </a>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-section-y px-container-x bg-off-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-[clamp(2.5rem,5vh,4rem)]">
              <div className="flex items-center gap-1.5 text-[0.8rem] font-semibold tracking-[0.12em] uppercase text-text-sec-dark mb-4">
                <span className="shrink-0 inline-block w-[5px] h-[5px] rounded-full" style={{ backgroundColor: '#F26622' }}></span>
                What&apos;s Included
              </div>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.8rem)] font-extrabold leading-[1.05] tracking-[-0.02em] text-text-dark">
                Everything you need,<br />
                <em className="font-serif italic font-normal text-[1.02em] text-gradient">in one package</em>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <div key={f.title} className="bg-white rounded-[20px] p-8 border border-black/[0.05] transition-shadow duration-300 hover:shadow-card">
                  <div className="text-2xl mb-5" style={{ color: '#F26622' }}>{f.icon}</div>
                  <h3 className="font-display text-[1.05rem] font-bold text-text-dark mb-2 tracking-[-0.01em]">{f.title}</h3>
                  <p className="text-[0.88rem] text-text-sec-dark leading-[1.65]">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-section-y px-container-x" style={{ background: '#180A03' }}>
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-[clamp(2.5rem,5vh,4rem)]">
              <div className="flex items-center gap-1.5 text-[0.8rem] font-semibold tracking-[0.12em] uppercase text-white/40 mb-4">
                <span className="shrink-0 inline-block w-[5px] h-[5px] rounded-full" style={{ backgroundColor: '#F26622' }}></span>
                How It Works
              </div>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.8rem)] font-extrabold leading-[1.05] tracking-[-0.02em] text-white">
                From idea to<br />
                <em className="font-serif italic font-normal text-[1.02em]" style={{ color: '#F26622' }}>live in 7 days</em>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((s) => (
                <div key={s.num} className="relative p-8 rounded-[20px] border border-white/[0.07]" style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <div className="text-[3rem] font-extrabold leading-none mb-5 tracking-[-0.02em]" style={{ color: 'rgba(242,102,34,0.25)' }}>{s.num}</div>
                  <h3 className="font-display text-[1rem] font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-[0.85rem] text-white/50 leading-[1.65]">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-section-y px-container-x bg-off-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-[clamp(2.5rem,5vh,4rem)]">
              <div className="flex items-center gap-1.5 text-[0.8rem] font-semibold tracking-[0.12em] uppercase text-text-sec-dark mb-4">
                <span className="shrink-0 inline-block w-[5px] h-[5px] rounded-full" style={{ backgroundColor: '#F26622' }}></span>
                Client Reviews
              </div>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.8rem)] font-extrabold leading-[1.05] tracking-[-0.02em] text-text-dark">
                Don&apos;t take<br />
                <em className="font-serif italic font-normal text-[1.02em] text-gradient">our word for it</em>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { quote: "If I could have given 6 stars, I would have.", author: "Elene P.", role: "Verified Review" },
                { quote: "Everyone who sees the website thinks it's amazing.", author: "Adam F.", role: "Dermatology Clinic" },
                { quote: "This is the second website they've built for me. Once again exceeded expectations.", author: "Meggan P.", role: "Repeat Client" },
              ].map((t) => (
                <div key={t.author} className="bg-white rounded-[20px] p-8 border border-black/[0.05]">
                  <div className="text-[#f5c518] text-sm mb-4">★★★★★</div>
                  <p className="text-[0.95rem] font-semibold text-text-dark leading-[1.5] mb-4">&quot;{t.quote}&quot;</p>
                  <div>
                    <span className="text-[0.8rem] font-bold text-text-dark">— {t.author}</span>
                    <span className="text-[0.75rem] text-text-sec-dark ml-2">{t.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>

      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Verify in browser**

Run: `npm run dev`  
Open: `http://localhost:3000/websites`  
Expected: Full page with dark hero, features grid, process steps, testimonials, CTA banner, nav and footer.

- [ ] **Step 3: Commit**

```bash
git add src/app/websites/page.tsx
git commit -m "feat: add /websites service page"
```

---

## Task 6: Create /google-ads-management Page

**Files:**
- Create: `src/app/google-ads-management/page.tsx`

- [ ] **Step 1: Create the file**

```tsx
import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CTABanner from "../components/CTABanner";

export const metadata: Metadata = {
  title: "Google Ads & Digital Marketing | viral4hype",
  description: "Data-driven Google Ads and Meta Ads campaigns with transparent ROI. 340% average ROAS across our clients.",
};

const services = [
  { icon: "◎", title: "Google Search Ads", desc: "Appear at the top of Google when your customers are actively searching for what you offer." },
  { icon: "◈", title: "Google Display Ads", desc: "Visual banner campaigns across millions of websites to build brand awareness and drive traffic." },
  { icon: "✦", title: "Meta Ads (FB & IG)", desc: "Precision-targeted campaigns on Facebook and Instagram reaching the right audience at the right time." },
  { icon: "⬡", title: "Remarketing", desc: "Bring back visitors who didn't convert the first time with smart retargeting sequences." },
  { icon: "◉", title: "A/B Testing", desc: "Continuous creative and copy testing so your budget always flows to what works best." },
  { icon: "◌", title: "Monthly Reports", desc: "Clear, jargon-free monthly reports showing exactly where your money goes and what it returns." },
];

const steps = [
  { num: "01", title: "Account Audit", desc: "We audit your existing ads accounts (or start fresh) to identify quick wins and gaps." },
  { num: "02", title: "Strategy", desc: "We build a campaign strategy aligned to your goals — leads, sales, brand, or all three." },
  { num: "03", title: "Launch", desc: "Campaigns go live with precise targeting, compelling creative, and conversion tracking in place." },
  { num: "04", title: "Optimize", desc: "We optimize weekly — adjusting bids, pausing underperformers, scaling what converts." },
  { num: "05", title: "Scale", desc: "Once profitable, we scale your budget intelligently to compound your returns over time." },
];

export default function MarketingPage() {
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-white focus:text-dark focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold focus:text-sm">
        Skip to main content
      </a>
      <Nav />

      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden pt-[clamp(7rem,14vh,11rem)] pb-section-y px-container-x" style={{ background: '#180A03' }}>
          <div className="absolute top-[-20%] right-[-10%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full pointer-events-none hidden lg:block"
            style={{ background: 'radial-gradient(circle, rgba(242,102,34,0.10) 0%, transparent 65%)' }}
          />
          <div className="absolute bottom-[10%] left-[-8%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full pointer-events-none hidden lg:block"
            style={{ background: 'radial-gradient(circle, rgba(131,9,238,0.06) 0%, transparent 65%)' }}
          />

          <div className="max-w-[1200px] mx-auto relative z-[1]">
            <div className="inline-flex items-center gap-2 text-[0.8rem] font-medium tracking-[0.08em] text-white/50 border border-white/10 rounded-[40px] py-[0.35rem] px-4 mb-[clamp(1.5rem,3vh,2.5rem)] backdrop-blur-[8px]">
              <span className="w-[6px] h-[6px] rounded-full" style={{ backgroundColor: '#F26622' }}></span>
              Digital Marketing
            </div>

            <h1 className="font-display font-black text-[clamp(2.8rem,6.5vw,7.5rem)] leading-[0.93] tracking-[-0.03em] text-white mb-[clamp(1.5rem,3vh,2.5rem)]">
              Marketing that<br />
              <em className="font-serif italic font-normal text-[1.05em]">drives real ROI</em>
            </h1>

            <p className="text-[clamp(0.9rem,1.3vw,1.05rem)] text-white/65 leading-[1.7] max-w-[500px] mb-[clamp(2rem,4vh,3rem)]">
              Google Ads and Meta campaigns managed daily by a team obsessed with your return on investment. No vanity metrics, no guesswork — just revenue you can measure.
            </p>

            <div className="flex items-center gap-8 pt-6 border-t border-white/[0.06] flex-wrap mb-[clamp(2.5rem,5vh,4rem)]">
              <div className="flex flex-col gap-[0.15rem]">
                <span className="text-[clamp(1.1rem,1.8vw,1.5rem)] font-extrabold text-white tracking-[-0.02em]">340%</span>
                <span className="text-xs font-medium text-white/55 uppercase tracking-[0.08em]">Avg. ROAS</span>
              </div>
              <div className="w-px h-10 bg-white/[0.08]"></div>
              <div className="flex flex-col gap-[0.15rem]">
                <span className="text-[clamp(1.1rem,1.8vw,1.5rem)] font-extrabold text-white tracking-[-0.02em]">50+</span>
                <span className="text-xs font-medium text-white/55 uppercase tracking-[0.08em]">Active Clients</span>
              </div>
              <div className="w-px h-10 bg-white/[0.08]"></div>
              <div className="flex flex-col gap-[0.15rem]">
                <span className="text-[clamp(1.1rem,1.8vw,1.5rem)] font-extrabold text-white tracking-[-0.02em]">Daily</span>
                <span className="text-xs font-medium text-white/55 uppercase tracking-[0.08em]">Optimization</span>
              </div>
            </div>

            <div className="flex items-center gap-6 flex-wrap">
              <a href="/contact" className="inline-flex items-center gap-2 text-[0.95rem] font-semibold py-[0.9rem] px-8 rounded-full bg-white text-dark transition-all duration-400 ease-out-expo" data-cursor="link">
                Get a Free Audit
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M6 14L14 6M14 6H6M14 6V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>
          </div>
        </section>

        {/* Services grid */}
        <section className="py-section-y px-container-x bg-off-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-[clamp(2.5rem,5vh,4rem)]">
              <div className="flex items-center gap-1.5 text-[0.8rem] font-semibold tracking-[0.12em] uppercase text-text-sec-dark mb-4">
                <span className="shrink-0 inline-block w-[5px] h-[5px] rounded-full" style={{ backgroundColor: '#F26622' }}></span>
                What We Manage
              </div>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.8rem)] font-extrabold leading-[1.05] tracking-[-0.02em] text-text-dark">
                Full-funnel coverage,<br />
                <em className="font-serif italic font-normal text-[1.02em] text-gradient">top to bottom</em>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <div key={s.title} className="bg-white rounded-[20px] p-8 border border-black/[0.05] transition-shadow duration-300 hover:shadow-card">
                  <div className="text-2xl mb-5" style={{ color: '#F26622' }}>{s.icon}</div>
                  <h3 className="font-display text-[1.05rem] font-bold text-text-dark mb-2 tracking-[-0.01em]">{s.title}</h3>
                  <p className="text-[0.88rem] text-text-sec-dark leading-[1.65]">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-section-y px-container-x" style={{ background: '#180A03' }}>
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-[clamp(2.5rem,5vh,4rem)]">
              <div className="flex items-center gap-1.5 text-[0.8rem] font-semibold tracking-[0.12em] uppercase text-white/40 mb-4">
                <span className="shrink-0 inline-block w-[5px] h-[5px] rounded-full" style={{ backgroundColor: '#F26622' }}></span>
                Real Results
              </div>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.8rem)] font-extrabold leading-[1.05] tracking-[-0.02em] text-white">
                Numbers that<br />
                <em className="font-serif italic font-normal text-[1.02em]" style={{ color: '#F26622' }}>speak for themselves</em>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { metric: "340%", label: "Average ROAS", context: "Return on ad spend across all active Google Ads clients." },
                { metric: "62%", label: "Lower CPA", context: "Average reduction in cost-per-acquisition after 90 days of optimization." },
                { metric: "4.8×", label: "Lead Volume", context: "Average increase in qualified leads after switching to our managed campaigns." },
              ].map((r) => (
                <div key={r.label} className="p-8 rounded-[20px] border border-white/[0.07]" style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <div className="font-display text-[clamp(2.5rem,4vw,4rem)] font-black tracking-[-0.03em] mb-2" style={{ color: '#F26622' }}>{r.metric}</div>
                  <div className="text-[1rem] font-bold text-white mb-3">{r.label}</div>
                  <p className="text-[0.85rem] text-white/50 leading-[1.65]">{r.context}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-section-y px-container-x bg-off-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-[clamp(2.5rem,5vh,4rem)]">
              <div className="flex items-center gap-1.5 text-[0.8rem] font-semibold tracking-[0.12em] uppercase text-text-sec-dark mb-4">
                <span className="shrink-0 inline-block w-[5px] h-[5px] rounded-full" style={{ backgroundColor: '#F26622' }}></span>
                Our Process
              </div>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.8rem)] font-extrabold leading-[1.05] tracking-[-0.02em] text-text-dark">
                From audit to<br />
                <em className="font-serif italic font-normal text-[1.02em] text-gradient">scaling profits</em>
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              {steps.map((s, i) => (
                <div key={s.num} className="flex items-start gap-8 p-8 bg-white rounded-[20px] border border-black/[0.05]">
                  <div className="text-[2rem] font-extrabold tracking-[-0.02em] shrink-0" style={{ color: 'rgba(242,102,34,0.3)' }}>{s.num}</div>
                  <div>
                    <h3 className="font-display text-[1.05rem] font-bold text-text-dark mb-1">{s.title}</h3>
                    <p className="text-[0.88rem] text-text-sec-dark leading-[1.65]">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>

      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Verify in browser**

Open: `http://localhost:3000/google-ads-management`  
Expected: Full page with dark hero (340% ROAS stats), services grid, results metrics, process steps.

- [ ] **Step 3: Commit**

```bash
git add src/app/google-ads-management/page.tsx
git commit -m "feat: add /google-ads-management marketing page"
```

---

## Task 7: Create /about-us Page (Shopify Stores)

**Files:**
- Create: `src/app/about-us/page.tsx`

- [ ] **Step 1: Create the file**

```tsx
import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CTABanner from "../components/CTABanner";

export const metadata: Metadata = {
  title: "Shopify Stores | viral4hype",
  description: "Custom Shopify stores built in 7 days. Full setup — theme, payments, shipping, products, SEO. Start selling immediately.",
};

const features = [
  { icon: "✦", title: "Custom Shopify Theme", desc: "A unique storefront design that reflects your brand — not a modified free template." },
  { icon: "◈", title: "Payment Integration", desc: "Stripe, PayPal, and local Romanian payment gateways set up and tested end-to-end." },
  { icon: "◎", title: "Shipping & Logistics", desc: "FanCourier, Cargus, and Sameday integrations pre-configured and ready to go." },
  { icon: "⬡", title: "Product Catalog Setup", desc: "We import, organize, and optimize your full product catalog so you open with everything live." },
  { icon: "◉", title: "SEO & Speed", desc: "Technical SEO, fast load times, and structured data so Google can find and rank your store." },
  { icon: "◌", title: "Analytics & Reporting", desc: "Google Analytics 4 and Meta Pixel configured so you know exactly where your sales come from." },
];

const steps = [
  { num: "01", title: "Discovery", desc: "We learn about your products, target customers, and business goals." },
  { num: "02", title: "Design", desc: "A full custom design mockup for your approval — homepage, product page, cart, checkout." },
  { num: "03", title: "Build", desc: "We build your store: theme, apps, products, payments, shipping, SEO — everything." },
  { num: "04", title: "Launch", desc: "Your store goes live. We hand over the dashboard and train you on the basics." },
];

export default function ShopifyPage() {
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-white focus:text-dark focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold focus:text-sm">
        Skip to main content
      </a>
      <Nav />

      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden pt-[clamp(7rem,14vh,11rem)] pb-section-y px-container-x" style={{ background: '#180A03' }}>
          <div className="absolute top-[-20%] right-[-10%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full pointer-events-none hidden lg:block"
            style={{ background: 'radial-gradient(circle, rgba(242,102,34,0.10) 0%, transparent 65%)' }}
          />
          <div className="absolute bottom-[10%] left-[-8%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full pointer-events-none hidden lg:block"
            style={{ background: 'radial-gradient(circle, rgba(41,213,90,0.06) 0%, transparent 65%)' }}
          />

          <div className="max-w-[1200px] mx-auto relative z-[1]">
            <div className="inline-flex items-center gap-2 text-[0.8rem] font-medium tracking-[0.08em] text-white/50 border border-white/10 rounded-[40px] py-[0.35rem] px-4 mb-[clamp(1.5rem,3vh,2.5rem)] backdrop-blur-[8px]">
              <span className="w-[6px] h-[6px] rounded-full" style={{ backgroundColor: '#F26622' }}></span>
              Shopify Stores
            </div>

            <h1 className="font-display font-black text-[clamp(2.8rem,6.5vw,7.5rem)] leading-[0.93] tracking-[-0.03em] text-white mb-[clamp(1.5rem,3vh,2.5rem)]">
              Shopify stores that<br />
              <em className="font-serif italic font-normal text-[1.05em]">actually sell</em>
            </h1>

            <p className="text-[clamp(0.9rem,1.3vw,1.05rem)] text-white/65 leading-[1.7] max-w-[500px] mb-[clamp(2rem,4vh,3rem)]">
              From zero to a fully operational online store in 7 days. Custom design, complete payment and shipping setup, product catalog ready — everything your business needs to start selling online today.
            </p>

            <div className="flex items-center gap-8 pt-6 border-t border-white/[0.06] flex-wrap mb-[clamp(2.5rem,5vh,4rem)]">
              <div className="flex flex-col gap-[0.15rem]">
                <span className="text-[clamp(1.1rem,1.8vw,1.5rem)] font-extrabold text-white tracking-[-0.02em]">30+</span>
                <span className="text-xs font-medium text-white/55 uppercase tracking-[0.08em]">Stores Launched</span>
              </div>
              <div className="w-px h-10 bg-white/[0.08]"></div>
              <div className="flex flex-col gap-[0.15rem]">
                <span className="text-[clamp(1.1rem,1.8vw,1.5rem)] font-extrabold text-white tracking-[-0.02em]">7 Days</span>
                <span className="text-xs font-medium text-white/55 uppercase tracking-[0.08em]">Go Live</span>
              </div>
              <div className="w-px h-10 bg-white/[0.08]"></div>
              <div className="flex flex-col gap-[0.15rem]">
                <span className="text-[clamp(1.1rem,1.8vw,1.5rem)] font-extrabold text-white tracking-[-0.02em]">Full</span>
                <span className="text-xs font-medium text-white/55 uppercase tracking-[0.08em]">Setup Included</span>
              </div>
            </div>

            <div className="flex items-center gap-6 flex-wrap">
              <a href="/contact" className="inline-flex items-center gap-2 text-[0.95rem] font-semibold py-[0.9rem] px-8 rounded-full bg-white text-dark transition-all duration-400 ease-out-expo" data-cursor="link">
                Build My Store
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M6 14L14 6M14 6H6M14 6V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-section-y px-container-x bg-off-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-[clamp(2.5rem,5vh,4rem)]">
              <div className="flex items-center gap-1.5 text-[0.8rem] font-semibold tracking-[0.12em] uppercase text-text-sec-dark mb-4">
                <span className="shrink-0 inline-block w-[5px] h-[5px] rounded-full" style={{ backgroundColor: '#F26622' }}></span>
                Everything Included
              </div>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.8rem)] font-extrabold leading-[1.05] tracking-[-0.02em] text-text-dark">
                One price,<br />
                <em className="font-serif italic font-normal text-[1.02em] text-gradient">zero surprises</em>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <div key={f.title} className="bg-white rounded-[20px] p-8 border border-black/[0.05] transition-shadow duration-300 hover:shadow-card">
                  <div className="text-2xl mb-5" style={{ color: '#F26622' }}>{f.icon}</div>
                  <h3 className="font-display text-[1.05rem] font-bold text-text-dark mb-2 tracking-[-0.01em]">{f.title}</h3>
                  <p className="text-[0.88rem] text-text-sec-dark leading-[1.65]">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Shopify */}
        <section className="py-section-y px-container-x" style={{ background: '#180A03' }}>
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-[clamp(2.5rem,5vh,4rem)]">
              <div className="flex items-center gap-1.5 text-[0.8rem] font-semibold tracking-[0.12em] uppercase text-white/40 mb-4">
                <span className="shrink-0 inline-block w-[5px] h-[5px] rounded-full" style={{ backgroundColor: '#F26622' }}></span>
                Why Shopify
              </div>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.8rem)] font-extrabold leading-[1.05] tracking-[-0.02em] text-white">
                The platform built<br />
                <em className="font-serif italic font-normal text-[1.02em]" style={{ color: '#F26622' }}>for selling</em>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Easy to Manage", desc: "Add products, track orders, and manage inventory without touching a single line of code. Shopify's dashboard is intuitive from day one." },
                { title: "Built to Scale", desc: "Whether you're selling 10 products or 10,000, Shopify grows with you. No platform migrations, no performance drops." },
                { title: "App Ecosystem", desc: "Over 8,000 apps for reviews, upsells, loyalty programs, email marketing, and more — all integrate in a few clicks." },
              ].map((w) => (
                <div key={w.title} className="p-8 rounded-[20px] border border-white/[0.07]" style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mb-6 border border-white/10" style={{ background: 'rgba(242,102,34,0.12)' }}>
                    <span style={{ color: '#F26622', fontSize: '1.2rem' }}>◎</span>
                  </div>
                  <h3 className="font-display text-[1.05rem] font-bold text-white mb-3">{w.title}</h3>
                  <p className="text-[0.88rem] text-white/50 leading-[1.65]">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-section-y px-container-x bg-off-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-[clamp(2.5rem,5vh,4rem)]">
              <div className="flex items-center gap-1.5 text-[0.8rem] font-semibold tracking-[0.12em] uppercase text-text-sec-dark mb-4">
                <span className="shrink-0 inline-block w-[5px] h-[5px] rounded-full" style={{ backgroundColor: '#F26622' }}></span>
                How It Works
              </div>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.8rem)] font-extrabold leading-[1.05] tracking-[-0.02em] text-text-dark">
                Open for business<br />
                <em className="font-serif italic font-normal text-[1.02em] text-gradient">in 7 days</em>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((s) => (
                <div key={s.num} className="relative p-8 rounded-[20px] border border-black/[0.05] bg-white">
                  <div className="text-[3rem] font-extrabold leading-none mb-5 tracking-[-0.02em]" style={{ color: 'rgba(242,102,34,0.25)' }}>{s.num}</div>
                  <h3 className="font-display text-[1rem] font-bold text-text-dark mb-2">{s.title}</h3>
                  <p className="text-[0.85rem] text-text-sec-dark leading-[1.65]">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>

      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Verify in browser**

Open: `http://localhost:3000/about-us`  
Expected: Shopify Stores page with dark hero, features grid (6 cards), Why Shopify section, process steps.

- [ ] **Step 3: Commit**

```bash
git add src/app/about-us/page.tsx
git commit -m "feat: add /about-us Shopify Stores service page"
```

---

## Task 8: Create /our-work Page

**Files:**
- Create: `src/app/our-work/page.tsx`

- [ ] **Step 1: Create the file**

```tsx
"use client";

import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CTABanner from "../components/CTABanner";

type Category = "All" | "Website" | "Shopify" | "Marketing";

const projects = [
  { slug: "pc-doc", title: "PC Doc", image: "/images/pcdoc.png", category: "Shopify" as Category, tags: ["Shopify"] },
  { slug: "greystone-heritage", title: "Epok", image: "/images/epok.png", category: "Shopify" as Category, tags: ["Shopify"] },
  { slug: "lc-computers", title: "LC Computers", image: "/images/lc.png", category: "Website" as Category, tags: ["Web Design", "WordPress"] },
  { slug: "best-doctor", title: "Best Doctor", image: "/images/bestdoctor.png", category: "Website" as Category, tags: ["Web Design"] },
  { slug: "clinic", title: "Clinic", image: "/images/clinic.png", category: "Website" as Category, tags: ["Web Design"] },
  { slug: "restaurant", title: "Restaurant", image: "/images/restaurant.png", category: "Website" as Category, tags: ["Web Design"] },
];

const categories: Category[] = ["All", "Website", "Shopify", "Marketing"];

export default function OurWorkPage() {
  const [active, setActive] = useState<Category>("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-white focus:text-dark focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold focus:text-sm">
        Skip to main content
      </a>
      <Nav />

      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden pt-[clamp(7rem,14vh,11rem)] pb-section-y px-container-x" style={{ background: '#180A03' }}>
          <div className="absolute top-[-20%] right-[-10%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full pointer-events-none hidden lg:block"
            style={{ background: 'radial-gradient(circle, rgba(242,102,34,0.10) 0%, transparent 65%)' }}
          />

          <div className="max-w-[1200px] mx-auto relative z-[1]">
            <div className="inline-flex items-center gap-2 text-[0.8rem] font-medium tracking-[0.08em] text-white/50 border border-white/10 rounded-[40px] py-[0.35rem] px-4 mb-[clamp(1.5rem,3vh,2.5rem)] backdrop-blur-[8px]">
              <span className="w-[6px] h-[6px] rounded-full" style={{ backgroundColor: '#F26622' }}></span>
              Portfolio
            </div>

            <h1 className="font-display font-black text-[clamp(2.8rem,6.5vw,7.5rem)] leading-[0.93] tracking-[-0.03em] text-white mb-[clamp(1.5rem,3vh,2.5rem)]">
              Work that<br />
              <em className="font-serif italic font-normal text-[1.05em]">speaks for itself</em>
            </h1>

            <p className="text-[clamp(0.9rem,1.3vw,1.05rem)] text-white/65 leading-[1.7] max-w-[500px] mb-[clamp(2rem,4vh,3rem)]">
              Every project is built with intention — clean code, sharp design, and a clear focus on the client&apos;s business goals. Browse our work below.
            </p>

            <div className="flex items-center gap-8 pt-6 border-t border-white/[0.06] flex-wrap">
              <div className="flex flex-col gap-[0.15rem]">
                <span className="text-[clamp(1.1rem,1.8vw,1.5rem)] font-extrabold text-white tracking-[-0.02em]">100+</span>
                <span className="text-xs font-medium text-white/55 uppercase tracking-[0.08em]">Projects</span>
              </div>
              <div className="w-px h-10 bg-white/[0.08]"></div>
              <div className="flex flex-col gap-[0.15rem]">
                <span className="text-[clamp(1.1rem,1.8vw,1.5rem)] font-extrabold text-white tracking-[-0.02em]">5 Years</span>
                <span className="text-xs font-medium text-white/55 uppercase tracking-[0.08em]">Experience</span>
              </div>
              <div className="w-px h-10 bg-white/[0.08]"></div>
              <div className="flex flex-col gap-[0.15rem]">
                <span className="text-[clamp(1.1rem,1.8vw,1.5rem)] font-extrabold text-white tracking-[0.18em]">★★★★★</span>
                <span className="text-xs font-medium text-white/55 uppercase tracking-[0.08em]">Reviews</span>
              </div>
            </div>
          </div>
        </section>

        {/* Filter + Grid */}
        <section className="py-section-y px-container-x bg-off-white">
          <div className="max-w-[1200px] mx-auto">
            {/* Filter bar */}
            <div className="flex items-center gap-3 flex-wrap mb-[clamp(2rem,4vh,3rem)]">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`text-[0.85rem] font-semibold py-2 px-5 rounded-full transition-all duration-300 ${
                    active === cat
                      ? "text-white"
                      : "text-text-sec-dark bg-black/[0.06] hover:bg-black/[0.10]"
                  }`}
                  style={active === cat ? { backgroundColor: '#F26622' } : {}}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Project grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project) => (
                <a
                  key={project.slug}
                  href={`/our-work/${project.slug}`}
                  className="group block rounded-[20px] overflow-visible origin-bottom will-change-transform transition-shadow duration-400"
                  data-cursor="link"
                >
                  <div className="relative rounded-[20px] overflow-hidden aspect-[4/3]" style={{ background: 'rgba(0,0,0,0.03)' }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      width="1440"
                      height="1080"
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.06]"
                    />
                    <div
                      className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-400 text-white font-bold"
                      style={{ background: 'linear-gradient(160deg, rgba(242,102,34,0.7) 0%, rgba(180,60,10,0.8) 100%)' }}
                    >
                      <span className="text-base font-bold">View Project</span>
                      <svg width="22" height="22" viewBox="0 0 20 20" fill="none"><path d="M6 14L14 6M14 6H6M14 6V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                  </div>
                  <div className="pt-4 px-2">
                    <h3 className="font-display text-[clamp(0.95rem,1.5vw,1.2rem)] font-bold text-text-dark mb-[0.4rem] tracking-[-0.01em]">{project.title}</h3>
                    <div className="flex gap-[0.4rem] flex-wrap">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[0.72rem] font-medium tracking-[0.04em] py-1 px-[0.7rem] rounded-full bg-black/5 text-text-sec-dark">{tag}</span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>

      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Update the projects array with actual image filenames**

Check which images exist in `/public/images/`:
```bash
ls "public/images/"
```
Update each `image` path in the `projects` array to match actual filenames. If an image doesn't exist, remove that project entry.

- [ ] **Step 3: Verify in browser**

Open: `http://localhost:3000/our-work`  
Expected: Portfolio page with dark hero, filter buttons (All/Website/Shopify/Marketing), project grid. Clicking filter buttons shows/hides cards.

- [ ] **Step 4: Commit**

```bash
git add src/app/our-work/page.tsx
git commit -m "feat: add /our-work portfolio page with category filter"
```

---

## Task 9: Create /blog Page (Coming Soon)

**Files:**
- Create: `src/app/blog/page.tsx`

- [ ] **Step 1: Create the file**

```tsx
import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Blog — Coming Soon | viral4hype",
  description: "Insights on web design, digital marketing, and growing your business online. Coming soon.",
};

export default function BlogPage() {
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-white focus:text-dark focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold focus:text-sm">
        Skip to main content
      </a>
      <Nav />

      <main id="main-content" className="min-h-screen flex flex-col" style={{ background: '#180A03' }}>
        {/* Ambient glows */}
        <div className="fixed top-[-20%] right-[-20%] w-[90vw] h-[90vw] max-w-[700px] max-h-[700px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(242,102,34,0.08) 0%, transparent 65%)' }}
        />
        <div className="fixed bottom-[-20%] left-[-20%] w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(131,9,238,0.06) 0%, transparent 65%)' }}
        />

        <section className="relative z-[1] flex-1 flex flex-col items-center justify-center text-center px-container-x py-[clamp(8rem,16vh,14rem)]">
          <div className="inline-flex items-center gap-2 text-[0.8rem] font-medium tracking-[0.08em] text-white/50 border border-white/10 rounded-[40px] py-[0.35rem] px-4 mb-[clamp(1.5rem,3vh,2.5rem)] backdrop-blur-[8px]">
            <span className="w-[6px] h-[6px] rounded-full animate-badge-pulse" style={{ backgroundColor: '#F26622' }}></span>
            Blog
          </div>

          <h1 className="font-display font-black text-[clamp(2.5rem,6vw,7rem)] leading-[0.93] tracking-[-0.03em] text-white mb-6 max-w-[800px]">
            The blog is<br />
            <em className="font-serif italic font-normal text-[1.05em]">coming soon</em>
          </h1>

          <p className="text-[clamp(0.9rem,1.3vw,1.1rem)] text-white/55 leading-[1.7] max-w-[480px] mb-[clamp(2.5rem,5vh,4rem)]">
            Practical insights on web design, digital marketing, and growing your local business online. Leave your email to be the first to know when we publish.
          </p>

          <form
            className="flex items-center gap-3 w-full max-w-[440px] flex-wrap justify-center"
            onSubmit={(e) => {
              e.preventDefault();
              const input = e.currentTarget.querySelector('input') as HTMLInputElement;
              window.location.href = `mailto:contact@viral4hype.com?subject=Blog+Notification&body=Please+notify+me+when+the+blog+launches.+My+email:+${encodeURIComponent(input.value)}`;
            }}
          >
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="flex-1 min-w-[200px] bg-white/[0.06] border border-white/[0.12] rounded-lg px-4 py-3 text-[0.9rem] text-white placeholder:text-white/35 outline-none focus:border-white/30 transition-colors duration-300"
            />
            <button
              type="submit"
              className="text-[0.9rem] font-semibold py-3 px-6 rounded-lg text-white transition-all duration-300 hover:opacity-90 whitespace-nowrap"
              style={{ backgroundColor: '#F26622' }}
              data-cursor="link"
            >
              Notify me
            </button>
          </form>

          <div className="mt-[clamp(3rem,6vh,5rem)] pt-[clamp(2rem,4vh,3rem)] border-t border-white/[0.06] w-full max-w-[440px]">
            <p className="text-[0.78rem] text-white/35 mb-4 uppercase tracking-[0.1em] font-medium">Follow us for updates</p>
            <div className="flex gap-3 justify-center">
              <a href="https://www.facebook.com/viral4hype/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-white/55 transition-all duration-300 hover:text-white hover:border-white/25 hover:-translate-y-0.5" data-cursor="link" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
              <a href="https://www.instagram.com/viral4hype/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-white/55 transition-all duration-300 hover:text-white hover:border-white/25 hover:-translate-y-0.5" data-cursor="link" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" /><circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
              </a>
              <a href="https://www.linkedin.com/company/viral4hype/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-white/55 transition-all duration-300 hover:text-white hover:border-white/25 hover:-translate-y-0.5" data-cursor="link" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2V9zM4 6a2 2 0 100-4 2 2 0 000 4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Verify in browser**

Open: `http://localhost:3000/blog`  
Expected: Full-screen dark page with centered "coming soon" headline, email subscribe form, social links.

- [ ] **Step 3: Commit**

```bash
git add src/app/blog/page.tsx
git commit -m "feat: add /blog coming soon page with email subscribe"
```

---

## Self-Review Checklist

**Spec coverage:**
- [x] `/websites` — Task 5
- [x] `/google-ads-management` — Task 6
- [x] `/about-us` (Shopify Stores) — Task 7
- [x] `/our-work` with category filter — Task 8
- [x] `/blog` Coming Soon — Task 9
- [x] Shared `Nav.tsx` — Task 1
- [x] Shared `Footer.tsx` — Task 2
- [x] Shared `CTABanner.tsx` — Task 3
- [x] Homepage refactor — Task 4

**Placeholder scan:** All code blocks are complete. No TBD/TODO present.

**Type consistency:** `Category` type defined once in Task 8, used consistently across `projects` array and `useState`. All component imports match file paths.

**Note for Task 8:** The `projects` array uses image filenames that may not all exist. Step 2 explicitly instructs verifying against actual `/public/images/` contents before committing.
