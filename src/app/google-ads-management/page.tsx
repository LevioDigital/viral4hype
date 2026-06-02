import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Performance Ads & Digital Growth Partner | viral4hype",
  description: "Complete digital marketing systems for companies that want real, predictable, and scalable growth. Google Ads, Meta Ads, TikTok Ads.",
};

const ACCENT = "#F26622";
const DARK = "#180A03";

const processBadges = ["Strategy", "Implementation", "Creatives", "Optimization", "Reporting", "Scaling"];

const leadNiches = [
  { num: "01", name: "Medical & Aesthetics", desc: "Qualified forms & appointment bookings." },
  { num: "02", name: "Construction & Renovation", desc: "Quote requests with genuine intent." },
  { num: "03", name: "Real Estate & Developers", desc: "High-purchasing-power leads." },
  { num: "04", name: "Law & Consulting", desc: "Premium clients for top-tier services." },
  { num: "05", name: "Local Businesses", desc: "Local traffic and direct phone calls." },
  { num: "06", name: "B2B & Software", desc: "Qualified decision-makers and demos." },
  { num: "07", name: "Education & Courses", desc: "Consistent platform enrollments." },
  { num: "08", name: "Automotive & Dealers", desc: "Test-drive requests and acquisitions." },
];

const leadOptimisations = [
  "Contact forms",
  "Direct phone calls",
  "Online appointment bookings",
  "Leads with genuine intent",
];

const leadFeatures = [
  {
    num: "01",
    title: "Full Campaign Management",
    tag: "Meta · Google · TikTok",
    desc: "We fully manage advertising campaigns across Meta, Google, and TikTok — from structure and budgets to continuous audits and performance reports.",
  },
  {
    num: "02",
    title: "Static Creatives Included",
    tag: "Images · Banners · Ads",
    desc: "We produce images, banners, and static creatives optimised to capture attention and maximise conversion rate on every platform.",
  },
  {
    num: "03",
    title: "Short Form Content For Ads",
    tag: "Reels · TikTok · UGC",
    desc: "On demand, we produce Reels, TikTok-style ads, and vertical UGC content. We understand exactly how video influences ad performance.",
  },
];

const ecomMetrics = [
  { name: "ROAS", desc: "Return on Ad Spend" },
  { name: "CPA", desc: "Cost Per Acquisition" },
  { name: "POAS", desc: "Profit on Ad Spend" },
  { name: "AOV", desc: "Average Order Value" },
  { name: "CR", desc: "Conversion Rate" },
  { name: "CAC", desc: "Customer Acq. Cost" },
];

const ecomSteps = [
  { num: "01", title: "Campaign Structure", desc: "Consolidated TOF/MOF/BOF campaigns minimising audience overlap and maximising budget efficiency." },
  { num: "02", title: "Full Tracking & API Setup", desc: "Pixel setup, Conversions API, and Google Analytics 4 for 100% accurate conversion data." },
  { num: "03", title: "Optimised Product Feeds", desc: "Product feeds with correct and complete attributes for Google Merchant Center and Meta Catalog." },
  { num: "04", title: "Funnels & Creative Strategy", desc: "Custom retargeting flows and creatives built on proven psychological angles." },
];

const partnershipPillars = [
  { num: "01", icon: "◈", title: "Fast Communication", desc: "Rapid replies via email or WhatsApp nearly 24/7. We stay permanently connected to your business performance." },
  { num: "02", icon: "◎", title: "Seriousness & Respect", desc: "Every collaboration is treated with maximum professionalism and respect. Your trusted partner, not just a vendor." },
  { num: "03", icon: "⬡", title: "Proven Expertise", desc: "Solid expertise built and validated over time through real results delivered to our active partners." },
  { num: "04", icon: "◉", title: "Business Consulting", desc: "Strategic guidance on online business and e-commerce growth throughout our entire collaboration." },
  { num: "05", icon: "✦", title: "Continuous Optimization", desc: "Campaigns are monitored and optimised daily based on real conversion data and user behaviour." },
  { num: "06", icon: "◌", title: "Transparent Reporting", desc: "Clear reports, no unnecessary technical jargon — showing exactly where budgets go and what profit they generate." },
];

const marqueeItems = [
  "Google Ads", "Meta Ads", "TikTok Ads", "Lead Generation", "Ecommerce Scaling",
  "Performance Max", "Advantage+", "ROAS 5-8x", "Conversions API", "Data-Driven",
  "Google Ads", "Meta Ads", "TikTok Ads", "Lead Generation", "Ecommerce Scaling",
  "Performance Max", "Advantage+", "ROAS 5-8x", "Conversions API", "Data-Driven",
];

// Shared inline style tokens (globals.css is precompiled — custom values must be inline)
const eyebrowDot = { width: 5, height: 5, borderRadius: 999, backgroundColor: ACCENT, flexShrink: 0, display: "inline-block" as const };

export default function MarketingPage() {
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-white focus:text-dark focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold focus:text-sm">
        Skip to main content
      </a>
      <Nav />

      <main id="main-content">

        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden min-h-svh flex flex-col justify-center px-container-x"
          style={{
            background: DARK,
            paddingTop: "clamp(130px, 18vh, 190px)",
            paddingBottom: "clamp(3rem, 8vh, 6rem)",
          }}
        >
          {/* static decorative gradients (no JS, no reveal effect) */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              backgroundImage:
                "radial-gradient(circle 640px at 86% 6%, rgba(242,102,34,0.16), transparent 66%), radial-gradient(circle 520px at 4% 98%, rgba(131,9,238,0.07), transparent 70%)",
            }}
          />
          {/* ghost word */}
          <div
            className="absolute select-none pointer-events-none max-lg:hidden font-display font-black leading-none"
            aria-hidden="true"
            style={{ right: "1.5%", bottom: "-5%", fontSize: "clamp(11rem,22vw,24rem)", color: "rgba(255,255,255,0.025)", letterSpacing: "-0.03em", whiteSpace: "nowrap" }}
          >
            Growth
          </div>

          <div className="max-w-[1200px] mx-auto relative w-full" style={{ zIndex: 1 }}>
            {/* badge */}
            <div
              className="inline-flex items-center gap-2 border border-white/10 rounded-full"
              style={{ fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.08em", color: "rgba(255,255,255,0.55)", padding: "0.42rem 1rem", marginBottom: "clamp(1.6rem,3.5vh,2.6rem)", backdropFilter: "blur(8px)" }}
            >
              <span className="animate-badge-pulse" style={{ width: 6, height: 6, borderRadius: 999, backgroundColor: ACCENT }}></span>
              01 — Digital Growth Partner
            </div>

            {/* Main grid: copy (with H1) + service cards beside it */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,380px)] items-center" style={{ gap: "clamp(2rem,4vw,4rem)", marginBottom: "clamp(2.5rem,5vh,3.5rem)" }}>
              {/* Left: H1 → description → CTAs → pills */}
              <div>
                <h1 className="font-display" style={{ letterSpacing: "-0.02em", marginBottom: "clamp(1.4rem,3vh,2rem)" }}>
                  <span className="block font-display font-black text-white" style={{ fontSize: "clamp(2.4rem,5vw,5rem)", letterSpacing: "-0.03em", lineHeight: 1 }}>
                    Systems Built To
                  </span>
                  <span className="block font-serif italic text-gradient" style={{ fontSize: "clamp(2.7rem,6vw,5.8rem)", lineHeight: 1.04, marginTop: "0.05em" }}>
                    Scale Businesses
                  </span>
                </h1>

                <p className="text-white/70" style={{ fontSize: "clamp(0.95rem,1.3vw,1.08rem)", lineHeight: 1.7, maxWidth: "520px", marginBottom: "1.6rem" }}>
                  At <strong className="text-white/90">Viral 4 Hype</strong> we build complete digital marketing systems for companies that want real, predictable, and scalable growth — not just &quot;running ads&quot;.
                </p>

                <div className="flex items-center gap-5 flex-wrap" style={{ marginBottom: "1.5rem" }}>
                  <a
                    href="/contact"
                    className="btn-dark inline-flex items-center gap-2 text-[0.95rem] font-semibold py-[0.9rem] px-8 rounded-full bg-white text-dark transition-all duration-400 ease-out-expo relative overflow-hidden whitespace-nowrap"
                    data-cursor="link"
                  >
                    <span className="btn-text relative z-[1]">Start a Partnership</span>
                    <span className="btn-icon relative z-[1] flex transition-transform duration-300 ease-out-expo">
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path d="M6 14L14 6M14 6H6M14 6V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </a>
                  <a
                    href="/our-work"
                    className="btn-ghost inline-flex items-center text-[0.95rem] font-semibold text-white/70 py-[0.9rem] border-b-[2px] border-white/20 transition-all duration-[350ms] relative hover:text-white hover:border-white/60"
                    data-cursor="link"
                  >
                    See Our Results
                  </a>
                </div>

                <div className="flex flex-wrap gap-2">
                  {processBadges.map((badge) => (
                    <span
                      key={badge}
                      className="border border-white/10 text-white/70 transition-colors duration-300 hover:border-white/25 hover:text-white"
                      style={{ fontSize: "0.72rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", padding: "0.45rem 0.9rem", borderRadius: 999, background: "rgba(255,255,255,0.03)" }}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: two service cards */}
              <div className="flex flex-col gap-3">
                {[
                  { href: "#lead-generation", label: "Service 01", title: "Lead Generation", desc: "Qualified leads at the lowest possible acquisition cost.", meta: "Google · Meta · TikTok", metric: "↓ CPL focus" },
                  { href: "#ecommerce-scaling", label: "Service 02", title: "Ecommerce Scaling", desc: "Predictable, scalable online customer acquisition systems.", meta: "PMax · Advantage+", metric: "↑ 5-8x ROAS" },
                ].map((c) => (
                  <a
                    key={c.href}
                    href={c.href}
                    className="group block transition-colors duration-300"
                    data-cursor="link"
                    style={{ padding: "1.4rem", borderRadius: 18, border: "1px solid rgba(255,255,255,0.09)", background: "rgba(255,255,255,0.025)" }}
                  >
                    <div className="flex items-start justify-between" style={{ marginBottom: "0.75rem" }}>
                      <div>
                        <span className="block" style={{ fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "0.35rem" }}>{c.label}</span>
                        <h3 className="font-display text-white" style={{ fontSize: "1.05rem", fontWeight: 700 }}>{c.title}</h3>
                      </div>
                      <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" style={{ color: ACCENT, fontSize: "1.15rem", flexShrink: 0 }}>↗</span>
                    </div>
                    <p className="text-white/50" style={{ fontSize: "0.83rem", lineHeight: 1.55, marginBottom: "0.9rem" }}>{c.desc}</p>
                    <div className="flex items-center gap-3" style={{ paddingTop: "0.8rem", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                      <span style={{ fontSize: "0.68rem", fontWeight: 500, color: "rgba(255,255,255,0.32)", letterSpacing: "0.02em" }}>{c.meta}</span>
                      <span style={{ color: "rgba(255,255,255,0.15)", fontSize: "0.7rem" }}>·</span>
                      <span style={{ fontSize: "0.68rem", fontWeight: 600, color: ACCENT }}>{c.metric}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Stats bar */}
            <div className="flex items-center gap-8 flex-wrap" style={{ paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              <div className="flex flex-col" style={{ gap: "0.15rem" }}>
                <span className="font-extrabold text-white" style={{ fontSize: "clamp(1.2rem,1.8vw,1.55rem)", letterSpacing: "-0.02em" }}>5-8x</span>
                <span className="text-white/55" style={{ fontSize: "0.72rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em" }}>Average ROAS</span>
              </div>
              <div style={{ width: 1, height: 40, background: "rgba(255,255,255,0.1)" }}></div>
              <div className="flex flex-col" style={{ gap: "0.15rem" }}>
                <span className="font-extrabold text-white" style={{ fontSize: "clamp(1.2rem,1.8vw,1.55rem)", letterSpacing: "-0.02em" }}>Google &amp; Meta</span>
                <span className="text-white/55" style={{ fontSize: "0.72rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em" }}>Core Platforms</span>
              </div>
              <div className="max-sm:hidden" style={{ width: 1, height: 40, background: "rgba(255,255,255,0.1)" }}></div>
              <div className="flex flex-col max-sm:hidden" style={{ gap: "0.15rem" }}>
                <span className="font-extrabold text-white" style={{ fontSize: "clamp(1.2rem,1.8vw,1.55rem)", letterSpacing: "0.18em" }}>★★★★★</span>
                <span className="text-white/55" style={{ fontSize: "0.72rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em" }}>Client Reviews</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── MARQUEE STRIP ─────────────────────────────────────────────────── */}
        <div className="overflow-hidden bg-off-white border-y border-black/[0.06]" style={{ paddingTop: "1.4rem", paddingBottom: "1.4rem" }}>
          <div className="overflow-hidden">
            <div className="flex items-center whitespace-nowrap w-max animate-marquee">
              {marqueeItems.map((item, i) => (
                <span key={i} className="inline-flex items-center gap-4">
                  <span className="font-sans text-text-dark" style={{ fontSize: "clamp(0.85rem,1.2vw,1rem)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", padding: "0 1.5rem" }}>
                    {item}
                  </span>
                  <span style={{ color: ACCENT, fontSize: "0.7rem" }}>●</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── LEAD GENERATION ───────────────────────────────────────────────── */}
        <section id="lead-generation" className="py-section-y px-container-x bg-off-white text-text-dark">
          <div className="max-w-[1200px] mx-auto">

            {/* Header + intro */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr]" style={{ gap: "clamp(2rem,4vw,4rem)", marginBottom: "clamp(3.5rem,7vh,6rem)" }}>
              <div>
                <div className="flex items-center gap-1.5 text-text-sec-dark" style={{ fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}>
                  <span style={eyebrowDot}></span>
                  02 — Lead Generation
                </div>
                <h2 className="font-display font-extrabold text-text-dark" style={{ fontSize: "clamp(2rem,4.2vw,3.4rem)", lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: "1.4rem" }}>
                  Qualified Leads<br />
                  <em className="font-serif italic text-gradient" style={{ fontWeight: 400 }}>Generated At Scale</em>
                </h2>
                <p style={{ fontSize: "clamp(1rem,1.3vw,1.1rem)", lineHeight: 1.7, color: "rgba(5,15,30,0.9)", marginBottom: "0.8rem", maxWidth: "560px" }}>
                  Lead generation is one of the most effective ways a service business can secure consistent, predictable growth.
                </p>
                <p className="text-text-sec-dark" style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "2rem", maxWidth: "560px" }}>
                  Our goal is clear: high-quality leads with genuine purchase intent, at the lowest possible acquisition cost.
                </p>

                <div style={{ background: "#fff", borderRadius: 18, padding: "1.4rem 1.5rem", border: "1px solid rgba(5,15,30,0.06)", boxShadow: "0 1px 6px rgba(0,0,0,0.03)", maxWidth: "540px" }}>
                  <h4 className="font-display" style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: ACCENT, marginBottom: "1rem" }}>
                    Systems optimised for
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "0.7rem" }}>
                    {leadOptimisations.map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <span className="flex items-center justify-center" style={{ width: 22, height: 22, borderRadius: 999, flexShrink: 0, background: "rgba(242,102,34,0.1)", border: "1px solid rgba(242,102,34,0.2)" }}>
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
                            <path d="M1 4L3.5 6.5L9 1" stroke={ACCENT} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span className="text-text-dark" style={{ fontSize: "0.88rem", fontWeight: 500 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Long term impact + metrics */}
              <div className="flex flex-col justify-center gap-4">
                <div style={{ background: "#fff", borderRadius: 22, padding: "2rem", border: "1px solid rgba(5,15,30,0.06)", boxShadow: "0 1px 6px rgba(0,0,0,0.03)", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #F26622, transparent)" }}></div>
                  <div className="text-gradient" style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.8rem" }}>Long Term Impact</div>
                  <h3 className="font-display text-text-dark" style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem", letterSpacing: "-0.01em" }}>Lead gen compounds over time</h3>
                  <p className="text-text-sec-dark" style={{ fontSize: "0.88rem", lineHeight: 1.7 }}>
                    Over time, platform algorithms learn your ideal customer&apos;s behavioural profile (LAL / Core Audiences) and allocate budget toward better and better results.
                  </p>
                </div>

                <div className="grid grid-cols-2" style={{ gap: "0.75rem" }}>
                  {[
                    { label: "Lower CPL", sub: "as algorithms learn" },
                    { label: "Higher LTV", sub: "better lead quality" },
                    { label: "More Volume", sub: "scalable systems" },
                    { label: "Better Data", sub: "each campaign feeds the next" },
                  ].map((m) => (
                    <div key={m.label} style={{ background: "#fff", borderRadius: 14, padding: "1rem", border: "1px solid rgba(5,15,30,0.05)" }}>
                      <span className="block text-text-dark" style={{ fontSize: "0.9rem", fontWeight: 700, letterSpacing: "-0.01em" }}>{m.label}</span>
                      <span className="text-text-sec-dark" style={{ fontSize: "0.72rem", lineHeight: 1.3 }}>{m.sub}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* What's included — numbered rows */}
            <div style={{ borderTop: "1px solid rgba(5,15,30,0.08)", paddingTop: "clamp(2.5rem,5vh,4rem)", marginBottom: "clamp(3rem,6vh,5rem)" }}>
              <div style={{ marginBottom: "2rem" }}>
                <h3 className="font-display font-extrabold text-text-dark" style={{ fontSize: "clamp(1.4rem,2.8vw,2.2rem)", letterSpacing: "-0.02em", marginBottom: "0.5rem" }}>
                  What&apos;s Included in Lead Generation
                </h3>
                <p className="text-text-sec-dark" style={{ fontSize: "0.9rem" }}>Everything inside a single monthly management system.</p>
              </div>
              <div style={{ borderTop: "1px solid rgba(5,15,30,0.06)" }}>
                {leadFeatures.map((f) => (
                  <div key={f.title} className="flex items-start" style={{ gap: "clamp(1.2rem,3vw,3rem)", padding: "clamp(1.6rem,4vh,2.6rem) 0", borderBottom: "1px solid rgba(5,15,30,0.06)" }}>
                    <span className="font-display font-black" style={{ fontSize: "clamp(2rem,5vw,3.8rem)", lineHeight: 1, flexShrink: 0, width: "clamp(56px,8vw,110px)", letterSpacing: "-0.02em", color: "rgba(242,102,34,0.22)" }}>
                      {f.num}
                    </span>
                    <div className="flex-1" style={{ paddingTop: "0.2rem" }}>
                      <div className="flex flex-wrap items-center gap-3" style={{ marginBottom: "0.5rem" }}>
                        <h4 className="font-display text-text-dark" style={{ fontSize: "clamp(1.1rem,2.2vw,1.55rem)", fontWeight: 700, letterSpacing: "-0.01em" }}>{f.title}</h4>
                        <span className="text-text-sec-dark" style={{ fontSize: "0.66rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", border: "1px solid rgba(5,15,30,0.1)", borderRadius: 999, padding: "0.25rem 0.7rem" }}>{f.tag}</span>
                      </div>
                      <p className="text-text-sec-dark" style={{ fontSize: "0.9rem", lineHeight: 1.65, maxWidth: "560px" }}>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Niche grid */}
            <div style={{ borderTop: "1px solid rgba(5,15,30,0.08)", paddingTop: "clamp(2.5rem,5vh,4rem)" }}>
              <div style={{ maxWidth: "560px", marginBottom: "2rem" }}>
                <div className="flex items-center gap-1.5 text-text-sec-dark" style={{ fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.8rem" }}>
                  <span style={eyebrowDot}></span>
                  Works Across Every Niche
                </div>
                <p className="text-text-sec-dark" style={{ fontSize: "0.92rem", lineHeight: 1.6 }}>
                  Proven expertise across a wide range of industries — we adapt quickly to any niche or business model.
                </p>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4" style={{ gap: "0.75rem" }}>
                {leadNiches.map((n) => (
                  <div key={n.name} className="group transition-shadow duration-300 hover:shadow-card" style={{ background: "#fff", borderRadius: 16, padding: "1.25rem", border: "1px solid rgba(5,15,30,0.05)", position: "relative", overflow: "hidden" }}>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 3, background: "linear-gradient(180deg, #F26622, rgba(242,102,34,0.3))" }} />
                    <span className="block text-text-sec-dark" style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", opacity: 0.5, marginBottom: "0.5rem" }}>{n.num}</span>
                    <h4 className="font-display text-text-dark" style={{ fontSize: "0.9rem", fontWeight: 700, lineHeight: 1.25, marginBottom: "0.4rem" }}>{n.name}</h4>
                    <p className="text-text-sec-dark" style={{ fontSize: "0.76rem", lineHeight: 1.5 }}>{n.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── ECOMMERCE ─────────────────────────────────────────────────────── */}
        <section id="ecommerce-scaling" className="py-section-y px-container-x text-white relative overflow-hidden" style={{ background: DARK }}>
          <div className="absolute select-none pointer-events-none max-lg:hidden font-display font-black leading-none" aria-hidden="true" style={{ right: "1.5%", bottom: "-4%", fontSize: "clamp(9rem,20vw,20rem)", color: "rgba(255,255,255,0.03)", letterSpacing: "-0.03em", whiteSpace: "nowrap" }}>
            Scale
          </div>

          <div className="max-w-[1200px] mx-auto relative" style={{ zIndex: 1 }}>

            {/* Header + intro */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr]" style={{ gap: "clamp(2rem,4vw,4rem)", marginBottom: "clamp(3.5rem,7vh,6rem)" }}>
              <div>
                <div className="flex items-center gap-1.5 text-white/45" style={{ fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}>
                  <span style={eyebrowDot}></span>
                  03 — Ecommerce
                </div>
                <h2 className="font-display font-extrabold text-white" style={{ fontSize: "clamp(2rem,4.2vw,3.4rem)", lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: "1.4rem" }}>
                  Data Driven<br />
                  <em className="font-serif italic text-gradient" style={{ fontWeight: 400 }}>Ecommerce Advertising</em>
                </h2>
                <p className="text-white/90" style={{ fontSize: "clamp(1rem,1.3vw,1.1rem)", lineHeight: 1.7, marginBottom: "0.8rem", maxWidth: "560px" }}>
                  In e-commerce the goal is not traffic — it&apos;s building a <strong className="text-white">predictable and profitable customer acquisition system</strong>.
                </p>
                <p className="text-white/60" style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "2rem", maxWidth: "560px" }}>
                  We build data-driven strategies using machine learning, continuous optimisation, and behaviour analysis — training platform algorithms to generate profitable conversions.
                </p>

                <div style={{ padding: "1.4rem", borderRadius: 18, border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.025)" }}>
                  <h4 className="font-display" style={{ fontSize: "0.74rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: ACCENT, marginBottom: "0.8rem" }}>
                    Platforms &amp; Technologies
                  </h4>
                  <p className="text-white/70" style={{ fontSize: "0.88rem", lineHeight: 1.65 }}>
                    We primarily use <strong className="text-white/90">Meta Ads</strong> and <strong className="text-white/90">Google Ads</strong>, where <strong className="text-white/90">Advantage+</strong> and <strong className="text-white/90">Performance Max</strong> can radically transform an online store&apos;s trajectory.
                  </p>
                </div>
              </div>

              {/* KPI card */}
              <div className="flex flex-col justify-center">
                <div style={{ padding: "2rem", borderRadius: 24, border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.025)", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #F26622, transparent)" }}></div>
                  <div style={{ marginBottom: "1.5rem" }}>
                    <div className="text-white/45" style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Average ROAS</div>
                    <div className="flex items-baseline" style={{ gap: "0.1rem" }}>
                      <span className="font-display font-black text-white" style={{ fontSize: "clamp(4.5rem,8vw,7rem)", lineHeight: 1, letterSpacing: "-0.04em" }}>5-8</span>
                      <em className="font-serif italic text-gradient" style={{ fontSize: "clamp(2.2rem,4vw,3.4rem)", lineHeight: 1 }}>x</em>
                    </div>
                    <p className="text-white/45" style={{ fontSize: "0.8rem", marginTop: "0.5rem" }}>across industries &amp; account sizes</p>
                  </div>
                  <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "1.25rem" }}>
                    <div className="text-white/35" style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>KPIs we track &amp; optimize</div>
                    <div className="grid grid-cols-3" style={{ gap: "0.5rem" }}>
                      {ecomMetrics.map((m) => (
                        <div key={m.name} className="text-center" style={{ padding: "0.7rem 0.4rem", borderRadius: 12, border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)" }}>
                          <span className="block font-extrabold text-white" style={{ fontSize: "0.95rem", letterSpacing: "-0.01em" }}>{m.name}</span>
                          <span className="block text-white/35" style={{ fontSize: "0.6rem", lineHeight: 1.2, marginTop: "0.2rem" }}>{m.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* What we build — numbered rows */}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "clamp(2.5rem,5vh,4rem)", marginBottom: "clamp(3rem,6vh,5rem)" }}>
              <div style={{ marginBottom: "2rem" }}>
                <h3 className="font-display font-extrabold text-white" style={{ fontSize: "clamp(1.4rem,2.8vw,2.2rem)", letterSpacing: "-0.02em", marginBottom: "0.5rem" }}>
                  What We Build in Your Ecosystem
                </h3>
                <p className="text-white/50" style={{ fontSize: "0.9rem", maxWidth: "600px" }}>
                  We configure, test, and scale every element of a stable, high-performing conversion funnel.
                </p>
              </div>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                {ecomSteps.map((s) => (
                  <div key={s.num} className="flex items-start group" style={{ gap: "clamp(1.2rem,3vw,3rem)", padding: "clamp(1.6rem,4vh,2.6rem) 0", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                    <span className="font-display font-black" style={{ fontSize: "clamp(2rem,5vw,3.8rem)", lineHeight: 1, flexShrink: 0, width: "clamp(56px,8vw,110px)", letterSpacing: "-0.02em", color: "rgba(242,102,34,0.22)" }}>
                      {s.num}
                    </span>
                    <div className="flex-1" style={{ paddingTop: "0.2rem" }}>
                      <h4 className="font-display text-white" style={{ fontSize: "clamp(1.1rem,2.2vw,1.55rem)", fontWeight: 700, letterSpacing: "-0.01em", marginBottom: "0.5rem" }}>{s.title}</h4>
                      <p className="text-white/50" style={{ fontSize: "0.9rem", lineHeight: 1.65, maxWidth: "560px" }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AOV & budgets */}
            <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "clamp(2.5rem,5vh,4rem)", marginBottom: "clamp(3rem,6vh,5rem)" }}>
              <div style={{ background: "rgba(255,255,255,0.025)", borderRadius: 24, padding: "2rem", border: "1px solid rgba(255,255,255,0.07)", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #F26622, transparent)" }}></div>
                <h3 className="font-display text-white" style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1.25rem", letterSpacing: "-0.01em" }}>AOV &amp; Ecommerce Reality</h3>
                <p className="text-white/55" style={{ fontSize: "0.86rem", lineHeight: 1.7, marginBottom: "1.1rem" }}>Average order value (AOV) dictates scaling velocity:</p>
                <div className="flex flex-col" style={{ gap: "1rem" }}>
                  <div className="flex items-start gap-3">
                    <span className="flex items-center justify-center" style={{ width: 22, height: 22, borderRadius: 999, flexShrink: 0, marginTop: 2, background: "rgba(242,102,34,0.12)", border: "1px solid rgba(242,102,34,0.25)" }}>
                      <span style={{ fontSize: "0.6rem", fontWeight: 900, color: ACCENT }}>↑</span>
                    </span>
                    <div>
                      <span className="block text-white/90" style={{ fontSize: "0.88rem", fontWeight: 600, marginBottom: "0.15rem" }}>High AOV</span>
                      <span className="text-white/50" style={{ fontSize: "0.83rem", lineHeight: 1.55 }}>Profitability comes faster and a strong ROAS is easier to maintain.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex items-center justify-center" style={{ width: 22, height: 22, borderRadius: 999, flexShrink: 0, marginTop: 2, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                      <span className="text-white/45" style={{ fontSize: "0.6rem", fontWeight: 900 }}>!</span>
                    </span>
                    <div>
                      <span className="block text-white/90" style={{ fontSize: "0.88rem", fontWeight: 600, marginBottom: "0.15rem" }}>AOV under ~€30</span>
                      <span className="text-white/50" style={{ fontSize: "0.83rem", lineHeight: 1.55 }}>Scaling gets harder — strong margins are vital to offset acquisition costs.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ background: "rgba(255,255,255,0.025)", borderRadius: 24, padding: "2rem", border: "1px solid rgba(255,255,255,0.07)", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #F26622, transparent)" }}></div>
                <h3 className="font-display text-white" style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1.25rem", letterSpacing: "-0.01em" }}>Ad Budgets &amp; Scalability</h3>
                <div style={{ marginBottom: "1.25rem" }}>
                  <div className="text-white/35" style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Recommended margin per sale</div>
                  <div className="flex items-baseline" style={{ gap: "0.3rem" }}>
                    <span className="font-display font-black text-white" style={{ fontSize: "2.2rem", letterSpacing: "-0.02em" }}>10%</span>
                    <span className="text-white/45">—</span>
                    <span className="font-display font-black text-white" style={{ fontSize: "2.2rem", letterSpacing: "-0.02em" }}>30%</span>
                  </div>
                  <p className="text-white/35" style={{ fontSize: "0.78rem", marginTop: "0.25rem" }}>for sustainable scaling</p>
                </div>
                <p className="text-white/55" style={{ fontSize: "0.86rem", lineHeight: 1.7 }}>
                  As long as ROAS, CPA, POAS, and overall profitability stay within optimal parameters, budgets can be scaled consistently and aggressively.
                </p>
              </div>
            </div>

            {/* Long term scaling */}
            <div className="flex items-start gap-6" style={{ padding: "2rem", borderRadius: 24, border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.025)", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 3, background: "linear-gradient(180deg, #F26622, rgba(242,102,34,0.2))" }}></div>
              <span className="flex items-center justify-center max-sm:hidden" style={{ width: 48, height: 48, borderRadius: 14, flexShrink: 0, background: "rgba(242,102,34,0.1)", border: "1px solid rgba(242,102,34,0.2)", color: ACCENT, fontSize: "1.4rem" }}>∞</span>
              <div>
                <h3 className="font-display text-white" style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", letterSpacing: "-0.01em" }}>Long Term Scaling</h3>
                <p className="text-white/60" style={{ fontSize: "0.9rem", lineHeight: 1.75, maxWidth: "620px" }}>
                  A properly built sales system generates results for years. We focus on long-term partnerships, full transparency, and sustainable growth — not quick wins that fade.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── PARTNERSHIP PILLARS ───────────────────────────────────────────── */}
        <section className="py-section-y px-container-x bg-off-white text-text-dark relative overflow-hidden">
          <div className="absolute select-none pointer-events-none max-lg:hidden font-display font-black leading-none" aria-hidden="true" style={{ right: "1.5%", bottom: "-3%", fontSize: "clamp(9rem,18vw,18rem)", color: "rgba(5,15,30,0.04)", letterSpacing: "-0.03em", whiteSpace: "nowrap" }}>
            Partner
          </div>

          <div className="max-w-[1200px] mx-auto relative" style={{ zIndex: 1 }}>
            <div className="flex items-end justify-between gap-8 flex-wrap" style={{ marginBottom: "clamp(2.5rem,5vh,4rem)" }}>
              <div>
                <div className="flex items-center gap-1.5 text-text-sec-dark" style={{ fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}>
                  <span style={eyebrowDot}></span>
                  04 — Our Process
                </div>
                <h2 className="font-display font-extrabold text-text-dark" style={{ fontSize: "clamp(2rem,4.5vw,3.6rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
                  What Partnership<br />
                  <em className="font-serif italic text-gradient" style={{ fontWeight: 400 }}>Means For Us</em>
                </h2>
              </div>
              <p className="text-text-sec-dark" style={{ fontSize: "0.95rem", lineHeight: 1.7, maxWidth: "380px", marginBottom: "0.25rem" }}>
                Six pillars that define how we work with every partner — from the first call to long-term growth.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: "1.25rem" }}>
              {partnershipPillars.map((pillar) => (
                <div key={pillar.title} className="group transition-shadow duration-300 hover:shadow-card" style={{ background: "#fff", borderRadius: 20, padding: "1.8rem", border: "1px solid rgba(5,15,30,0.05)", position: "relative", overflow: "hidden" }}>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-400" style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #F26622, transparent)" }} />
                  <div className="flex items-start justify-between" style={{ marginBottom: "1.4rem" }}>
                    <span className="flex items-center justify-center" style={{ width: 44, height: 44, borderRadius: 999, border: "1px solid rgba(5,15,30,0.06)", background: "rgba(242,102,34,0.08)", color: ACCENT, fontSize: "1.1rem" }}>{pillar.icon}</span>
                    <span className="font-display font-black" style={{ fontSize: "0.75rem", letterSpacing: "0.06em", color: "rgba(242,102,34,0.35)" }}>{pillar.num}</span>
                  </div>
                  <h3 className="font-display text-text-dark" style={{ fontSize: "1.02rem", fontWeight: 700, marginBottom: "0.6rem", letterSpacing: "-0.01em" }}>{pillar.title}</h3>
                  <p className="text-text-sec-dark" style={{ fontSize: "0.86rem", lineHeight: 1.65 }}>{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA · DARK ────────────────────────────────────────────────────── */}
        <section className="px-container-x" style={{ background: "#180A03", paddingTop: "clamp(3.5rem,8vh,7rem)", paddingBottom: "clamp(4rem,9vh,8rem)" }}>
          <div className="max-w-[1200px] mx-auto">
            <div className="relative overflow-hidden flex items-center justify-between flex-wrap gap-8" style={{ borderRadius: 24, padding: "clamp(2rem,5vw,3.5rem)", background: "linear-gradient(135deg, #1a0c04 0%, #0d0806 100%)", border: "1px solid rgba(242,102,34,0.18)" }}>
              <div className="absolute pointer-events-none" aria-hidden="true" style={{ top: "-30%", right: "-8%", width: "40vw", height: "40vw", maxWidth: 440, maxHeight: 440, borderRadius: 999, background: "radial-gradient(circle, rgba(242,102,34,0.14) 0%, transparent 65%)" }} />
              <div className="relative" style={{ zIndex: 1 }}>
                <div className="flex items-center gap-1.5 text-white/45" style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.8rem" }}>
                  <span style={{ width: 5, height: 5, borderRadius: 999, backgroundColor: ACCENT, flexShrink: 0, display: "inline-block" }}></span>
                  Get Started
                </div>
                <h2 className="font-display font-extrabold text-white" style={{ fontSize: "clamp(1.7rem,3.4vw,2.8rem)", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "0.6rem" }}>
                  Ready To Grow <em className="font-serif italic text-gradient" style={{ fontWeight: 400 }}>Your Business?</em>
                </h2>
                <p className="text-white/55" style={{ fontSize: "0.95rem", maxWidth: "440px" }}>
                  Let&apos;s build something great together. Fast delivery, professional results, no upfront costs.
                </p>
              </div>
              <div className="relative flex items-center gap-5 flex-wrap" style={{ zIndex: 1 }}>
                <a href="/contact" className="inline-flex items-center gap-2 text-[0.95rem] font-semibold py-[0.9rem] px-8 rounded-full bg-white text-dark transition-all duration-400 ease-out-expo whitespace-nowrap" data-cursor="link">
                  Start a Project
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M6 14L14 6M14 6H6M14 6V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>
                <a href="/contact" className="inline-flex items-center text-[0.95rem] font-semibold text-white/70 py-[0.9rem] border-b-[2px] border-white/20 transition-all duration-[350ms] hover:text-white hover:border-white/60" data-cursor="link">
                  Let&apos;s Talk
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
