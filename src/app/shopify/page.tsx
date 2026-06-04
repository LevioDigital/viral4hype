import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Shopify Stores Built To Scale | viral4hype",
  description: "Complete Shopify ecommerce systems — store development, migrations, design, automation and performance optimization for brands that want real growth.",
  path: "/shopify",
});

const ACCENT = "#F26622";
const DARK = "#180A03";

const heroPoints = ["High Converting", "Lightning Fast", "Scalable", "Ads-Ready", "Premium Experience"];

const services = [
  { icon: "store", title: "Store Development", sub: "From Zero" },
  { icon: "migrate", title: "Shopify Migrations", sub: "From Any Platform" },
  { icon: "design", title: "Web Design", sub: "That Converts" },
  { icon: "automation", title: "Automation Systems", sub: "That Save Time" },
  { icon: "gauge", title: "Performance & Speed", sub: "Optimization" },
  { icon: "support", title: "Ongoing Support", sub: "& Growth" },
];

const pillars = [
  { num: "03", label: "Store From Scratch", title: "Shopify Stores", italic: "Built From Zero", desc: "Complete Shopify stores, optimised for conversions, speed and scaling.", items: ["Custom Design", "Mobile Optimized", "Speed Optimized", "Conversion Focused", "Tracking & Analytics"] },
  { num: "04", label: "Migrations", title: "Migrate To Shopify", italic: "Without Losing Data", desc: "We migrate products, customers, orders, SEO and all important data safely.", items: ["WooCommerce", "Magento", "OpenCart", "PrestaShop", "Custom Platforms"] },
  { num: "05", label: "Web Design", title: "Design That Looks", italic: "Good & Converts", desc: "Modern, clean and premium design, built for an excellent experience.", items: ["UX / UI Focused", "Clean & Modern", "Brand Aligned", "Mobile First", "Built For Performance"] },
];

const automations = [
  { icon: "mail", title: "Email Automation", desc: "Automated flows for retention and communication." },
  { icon: "cart", title: "Abandoned Cart", desc: "Recover lost sales automatically via email and SMS." },
  { icon: "trending", title: "Upsell & Cross-sell", desc: "Increase average order value through smart upsells." },
  { icon: "retention", title: "Customer Retention", desc: "Automations for returning customers and loyalty." },
  { icon: "star", title: "Review Systems", desc: "Collect reviews automatically and build trust." },
  { icon: "integrations", title: "Integrations", desc: "Integrate apps, ERP, CRM, couriers and much more." },
];

const whyShopify = ["Speed & performance", "Security & stability", "Simple management", "Powerful ecosystem", "Perfect Ads integration", "Easy scaling"];

const whyMini = [
  { icon: "shield", title: "Secure", desc: "Secure platform, always up to date." },
  { icon: "bolt", title: "Fast", desc: "Optimised speed for better conversions." },
  { icon: "scale", title: "Scalable", desc: "Built for unlimited scaling." },
  { icon: "grid", title: "Powerful", desc: "Thousands of apps and integrations." },
  { icon: "clock", title: "Reliable", desc: "Excellent uptime, global infrastructure." },
  { icon: "smile", title: "User Friendly", desc: "Simple management, zero headaches." },
];

const process = [
  { num: "01", title: "Discovery", desc: "We analyse your business, niche and goals." },
  { num: "02", title: "Structure", desc: "We build the store architecture and UX." },
  { num: "03", title: "Design", desc: "We craft the design and visual identity." },
  { num: "04", title: "Development", desc: "We develop all required features and integrations." },
  { num: "05", title: "Optimization", desc: "We optimise speed, SEO, conversions and tracking." },
  { num: "06", title: "Launch", desc: "We launch the store and verify everything end-to-end." },
  { num: "07", title: "Scaling", desc: "We prepare the infrastructure for ads and scaling." },
];

const adsBadges = ["Meta Ads Ready", "Google Ads Ready", "TikTok Ads Ready", "Conversion Focused"];

const expectList = ["Fast replies and clear communication", "Seriousness, transparency and respect", "Ongoing ecommerce consulting", "Focus on performance and results", "Long-term partnership, not one-off projects"];

const marqueeItems = [
  "Shopify Development", "Store Migrations", "Conversion Design", "Speed Optimization",
  "Email Automation", "Abandoned Cart Recovery", "Meta Ads Ready", "Performance Max",
  "SEO Optimized", "Mobile First", "Customer Retention", "Built To Scale",
];

const eyebrowDot = { width: 5, height: 5, borderRadius: 999, backgroundColor: ACCENT, flexShrink: 0, display: "inline-block" as const };

/* layout CSS — globals.css is a precompiled Tailwind build, so responsive grid
   variants (lg:grid-cols-*, sm:grid-cols-*) and arbitrary fr-templates silently
   don't render. We define the responsive grids we rely on here as plain CSS. */
const layoutCss = `
.hero-grid{display:grid;grid-template-columns:1fr;gap:clamp(2.5rem,5vw,4.5rem);align-items:center;}
@media(min-width:1024px){.hero-grid{grid-template-columns:1.04fr minmax(0,520px);}}
@media(min-width:640px){.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr));}.sm\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr));}}
@media(min-width:1024px){.lg\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr));}.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr));}}
`;

/* Marketing-style eyebrow — accent number + uppercase label (no pill). */
function Eyebrow({ num, label, center = false, dark = false }: { num: string; label: string; center?: boolean; dark?: boolean }) {
  return (
    <div className={`flex items-center ${center ? "justify-center" : ""}`} style={{ gap: "0.62rem", marginBottom: center ? "1.1rem" : "1rem" }}>
      <span className="font-display font-bold" style={{ fontSize: "0.8rem", letterSpacing: "0.05em", color: ACCENT }}>{num}</span>
      <span style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: dark ? "rgba(255,255,255,0.45)" : "rgba(5,15,30,0.5)" }}>{label}</span>
    </div>
  );
}

// Orange check in a circle (works on dark + light)
function Check() {
  return (
    <span className="flex items-center justify-center" style={{ width: 22, height: 22, borderRadius: 999, flexShrink: 0, background: "rgba(242,102,34,0.12)", border: "1px solid rgba(242,102,34,0.25)" }}>
      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
        <path d="M1 4L3.5 6.5L9 1" stroke={ACCENT} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

// Shopify-style mark
function ShopMark({ size = 44 }: { size?: number }) {
  return (
    <span className="flex items-center justify-center font-display" style={{ width: size, height: size, borderRadius: size * 0.28, background: "linear-gradient(160deg,#95BF47,#5E8E3E)", color: "#fff", fontWeight: 900, fontSize: size * 0.5, lineHeight: 1, boxShadow: "0 6px 18px rgba(149,191,71,0.35)" }}>S</span>
  );
}

// Meaning-matched line icons (24×24, currentColor stroke)
function Glyph({ name }: { name: string }) {
  switch (name) {
    case "store":
      return (<><path d="M3 9l1.8-4.5h14.4L21 9" /><path d="M5 9v10h14V9" /><path d="M3 9h18" /><path d="M10 19v-5h4v5" /></>);
    case "migrate":
      return (<><path d="M4 8h13M13 4l4 4-4 4" /><path d="M20 16H7M11 20l-4-4 4-4" /></>);
    case "design":
      return (<><rect x="4" y="5" width="16" height="14" rx="1.5" /><path d="M4 9h16M9 9v10" /></>);
    case "automation":
      return (<><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5.2 5.2l2.1 2.1M16.7 16.7l2.1 2.1M18.8 5.2l-2.1 2.1M7.3 16.7l-2.1 2.1" /></>);
    case "gauge":
      return (<><path d="M5 18a8 8 0 1 1 14 0" /><path d="M12 14l4-4" /><circle cx="12" cy="14" r="1.2" fill="currentColor" stroke="none" /></>);
    case "support":
      return (<><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><path d="M4 14a2 2 0 0 1 2-2h1v6H6a2 2 0 0 1-2-2z" /><path d="M20 14a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2z" /><path d="M18 16v1a3 3 0 0 1-3 3h-3" /></>);
    case "mail":
      return (<><rect x="3" y="6" width="18" height="12" rx="1.5" /><path d="M4 7l8 6 8-6" /></>);
    case "cart":
      return (<><circle cx="9" cy="20" r="1.3" fill="currentColor" stroke="none" /><circle cx="17" cy="20" r="1.3" fill="currentColor" stroke="none" /><path d="M3 4h2l2.2 11h10l2-7H6.5" /></>);
    case "trending":
      return (<><path d="M3 17l6-6 4 4 7-7" /><path d="M17 5h4v4" /></>);
    case "retention":
      return (<><path d="M20 12a8 8 0 1 1-2.3-5.6" /><path d="M20 4v4h-4" /></>);
    case "star":
      return (<><path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19.2l1-5.8L3.5 9.2l5.9-.9z" /></>);
    case "integrations":
      return (<><circle cx="6" cy="6" r="2" /><circle cx="6" cy="18" r="2" /><circle cx="18" cy="12" r="2" /><path d="M8 6h5a3 3 0 0 1 3 3v1M8 18h5a3 3 0 0 0 3-3v-1" /></>);
    case "shield":
      return (<><path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" /><path d="M9 12l2 2 4-4" /></>);
    case "bolt":
      return (<><path d="M13 2L4 14h7l-1 8 9-12h-7z" /></>);
    case "scale":
      return (<><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" /></>);
    case "grid":
      return (<><rect x="4" y="4" width="7" height="7" rx="1" /><rect x="13" y="4" width="7" height="7" rx="1" /><rect x="4" y="13" width="7" height="7" rx="1" /><rect x="13" y="13" width="7" height="7" rx="1" /></>);
    case "clock":
      return (<><circle cx="12" cy="12" r="8" /><path d="M12 8v4l3 2" /></>);
    case "smile":
      return (<><circle cx="12" cy="12" r="8" /><path d="M9 10h.01M15 10h.01M8.5 14a4 4 0 0 0 7 0" /></>);
    default:
      return null;
  }
}

function Icon({ name, size = 22 }: { name: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <Glyph name={name} />
    </svg>
  );
}

function IconBadge({ glyph, dark = true }: { glyph: string; dark?: boolean }) {
  return (
    <span className="flex items-center justify-center" style={{ width: 46, height: 46, borderRadius: 14, color: ACCENT, background: "rgba(242,102,34,0.1)", border: dark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(242,102,34,0.18)" }}><Icon name={glyph} size={22} /></span>
  );
}

export default function ShopifyPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: layoutCss }} />
      <Nav />

      <main id="main-content">

        {/* ── 01 HERO · DARK ────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden min-h-svh flex flex-col justify-center px-container-x" style={{ background: DARK, paddingTop: "clamp(130px,18vh,190px)", paddingBottom: "clamp(3rem,8vh,6rem)" }}>
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ backgroundImage: "radial-gradient(circle 640px at 88% 4%, rgba(242,102,34,0.18), transparent 64%), radial-gradient(circle 520px at 2% 100%, rgba(149,191,71,0.06), transparent 70%)" }} />
          <div className="absolute select-none pointer-events-none max-lg:hidden font-display font-black leading-none" aria-hidden="true" style={{ right: "1.5%", bottom: "-6%", fontSize: "clamp(10rem,20vw,22rem)", color: "rgba(255,255,255,0.025)", letterSpacing: "-0.03em", whiteSpace: "nowrap" }}>Shopify</div>
          {/* dot pattern */}
          <div className="absolute pointer-events-none" aria-hidden="true" style={{ top: "22%", right: "2%", width: 200, height: 170, opacity: 0.55, backgroundImage: "radial-gradient(rgba(242,102,34,0.55) 1px, transparent 1.4px)", backgroundSize: "15px 15px", WebkitMaskImage: "radial-gradient(circle at center, black, transparent 75%)", maskImage: "radial-gradient(circle at center, black, transparent 75%)" }} />

          <div className="max-w-[1200px] mx-auto relative w-full" style={{ zIndex: 1 }}>
            <div className="hero-grid">
              {/* Left copy */}
              <div>
                <Eyebrow num="01" label="Shopify Development" dark />

                <h1 className="font-display" style={{ letterSpacing: "-0.02em", marginBottom: "clamp(1.3rem,2.6vh,1.8rem)" }}>
                  <span className="block font-display font-black text-white" style={{ fontSize: "clamp(2.6rem,5.5vw,5.4rem)", letterSpacing: "-0.035em", lineHeight: 0.98 }}>Shopify Stores</span>
                  <span className="block font-serif italic text-gradient" style={{ fontSize: "clamp(2.9rem,6.5vw,6.2rem)", lineHeight: 1.02, marginTop: "0.02em" }}>Built To Scale</span>
                </h1>

                <p className="text-white/70" style={{ fontSize: "clamp(1rem,1.3vw,1.12rem)", lineHeight: 1.7, maxWidth: "470px", marginBottom: "clamp(1.8rem,3.5vh,2.4rem)" }}>
                  At <strong className="text-white/90">Viral 4 Hype</strong> we don&apos;t just build an online store. We build the complete infrastructure of a modern ecommerce business — ready for real performance and scaling.
                </p>

                <div className="flex items-center flex-wrap" style={{ gap: "1.25rem", marginBottom: "clamp(1.5rem,3vh,2rem)" }}>
                  <a href="/contact" className="btn-dark inline-flex items-center gap-2 text-[0.95rem] font-semibold py-[0.9rem] px-8 rounded-full bg-white text-dark transition-all duration-400 ease-out-expo relative overflow-hidden whitespace-nowrap" data-cursor="link">
                    <span className="btn-text relative z-[1]">Book A Call</span>
                    <span className="btn-icon relative z-[1] flex transition-transform duration-300 ease-out-expo">
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M6 14L14 6M14 6H6M14 6V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                  </a>
                  <a href="/our-work" className="btn-ghost inline-flex items-center text-[0.95rem] font-semibold text-white/70 py-[0.9rem] border-b-[2px] border-white/20 transition-all duration-[350ms] relative hover:text-white hover:border-white/60" data-cursor="link">
                    See Our Work
                  </a>
                </div>

                <div className="flex items-center flex-wrap" style={{ gap: "0.75rem", fontSize: "0.74rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>
                  {heroPoints.map((p, i) => (
                    <span key={p} className="inline-flex items-center" style={{ gap: "0.75rem" }}>
                      {i > 0 && <span style={{ color: ACCENT }}>·</span>}
                      <span>{p}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: dashboard mock */}
              <div className="relative">
                <div className="absolute pointer-events-none" aria-hidden="true" style={{ inset: "-16% -10% -18% -4%", borderRadius: 999, background: "radial-gradient(circle at 60% 42%, rgba(242,102,34,0.24), transparent 60%)" }} />
                <div className="absolute pointer-events-none" aria-hidden="true" style={{ top: "-24%", right: "-12%", width: 300, height: 300, borderRadius: 999, background: "radial-gradient(circle at 32% 32%, rgba(255,255,255,0.04), rgba(242,102,34,0.10) 42%, transparent 62%)", border: "1px solid rgba(242,102,34,0.12)" }} />
                <div className="relative overflow-hidden" style={{ borderRadius: 18, padding: "clamp(1.1rem,1.8vw,1.5rem)", background: "linear-gradient(160deg, rgba(30,17,9,0.97), rgba(13,8,6,0.97))", border: "1px solid rgba(255,255,255,0.10)", boxShadow: "0 34px 90px -34px rgba(0,0,0,0.85), inset 0 1px 0 rgba(255,255,255,0.05)" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #F26622, transparent)" }}></div>
                  <div className="flex items-center justify-between" style={{ marginBottom: "1.4rem" }}>
                    <span className="text-white/45" style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>Sales Overview</span>
                    <ShopMark size={34} />
                  </div>
                  <div style={{ marginBottom: "0.4rem" }} className="flex items-baseline gap-2">
                    <span className="font-display font-black text-white" style={{ fontSize: "2rem", letterSpacing: "-0.02em" }}>€348,500</span>
                    <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#95BF47" }}>+22%</span>
                  </div>
                  <span className="text-white/45" style={{ fontSize: "0.72rem" }}>Total sales · last 30 days</span>

                  <svg viewBox="0 0 320 90" className="w-full" style={{ height: "auto", margin: "1.1rem 0" }} aria-hidden="true">
                    <defs>
                      <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(242,102,34,0.35)" />
                        <stop offset="100%" stopColor="rgba(242,102,34,0)" />
                      </linearGradient>
                    </defs>
                    <polygon points="0,72 40,64 80,68 120,46 160,52 200,32 240,36 280,18 320,10 320,90 0,90" fill="url(#area)" />
                    <polyline points="0,72 40,64 80,68 120,46 160,52 200,32 240,36 280,18 320,10" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>

                  <div className="grid grid-cols-3" style={{ gap: "0.6rem" }}>
                    {[{ k: "Orders", v: "2,845" }, { k: "Conv. Rate", v: "3.62%" }, { k: "Avg. Order", v: "€67" }].map((s) => (
                      <div key={s.k} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "0.7rem" }}>
                        <span className="block font-extrabold text-white" style={{ fontSize: "1rem", letterSpacing: "-0.01em" }}>{s.v}</span>
                        <span className="block text-white/45" style={{ fontSize: "0.62rem", marginTop: "0.15rem" }}>{s.k}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── MARQUEE STRIP ─────────────────────────────────────────────────── */}
        <div className="overflow-hidden bg-off-white border-y border-black/[0.06]" style={{ paddingTop: "1.4rem", paddingBottom: "1.4rem" }}>
          <div className="overflow-hidden">
            <div className="flex items-center whitespace-nowrap w-max animate-marquee">
              {[...marqueeItems, ...marqueeItems].map((item, i) => (
                <span key={i} className="inline-flex items-center gap-4">
                  <span className="font-sans text-text-dark" style={{ fontSize: "clamp(0.85rem,1.2vw,1rem)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", padding: "0 1.5rem" }}>{item}</span>
                  <span style={{ color: ACCENT, fontSize: "0.7rem" }}>●</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── 02 SERVICES OVERVIEW · LIGHT ──────────────────────────────────── */}
        <section className="px-container-x bg-off-white text-text-dark" style={{ paddingTop: "clamp(3.5rem,8vh,7rem)", paddingBottom: "clamp(3.5rem,8vh,7rem)" }}>
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center" style={{ marginBottom: "clamp(2.5rem,5vh,3.5rem)" }}>
              <div className="inline-flex items-center gap-1.5 text-text-sec-dark" style={{ fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}>
                <span style={eyebrowDot}></span>02 — Full Shopify Services
              </div>
              <h2 className="font-display font-extrabold text-text-dark" style={{ fontSize: "clamp(1.7rem,3.6vw,3rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                Complete Shopify Solutions. <em className="font-serif italic text-gradient" style={{ fontWeight: 400 }}>All In One Place.</em>
              </h2>
            </div>
            <div className="flex flex-wrap" style={{ gap: "0.75rem" }}>
              {services.map((s) => (
                <div key={s.title} className="group flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1" style={{ flex: "1 1 150px", padding: "1.9rem 1rem", borderRadius: 18, background: "#fff", border: "1px solid rgba(5,15,30,0.05)", boxShadow: "0 2px 14px rgba(5,15,30,0.05)", position: "relative", overflow: "hidden" }}>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-400" style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #F26622, transparent)" }} />
                  <span style={{ marginBottom: "0.9rem" }}><IconBadge glyph={s.icon} dark={false} /></span>
                  <span className="font-display text-text-dark" style={{ fontSize: "0.92rem", fontWeight: 700, lineHeight: 1.2 }}>{s.title}</span>
                  <span className="text-text-sec-dark" style={{ fontSize: "0.8rem", marginTop: "0.2rem" }}>{s.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 03 / 04 / 05 PILLAR CARDS · DARK ──────────────────────────────── */}
        <section className="px-container-x" style={{ background: DARK, paddingTop: "clamp(3.5rem,8vh,7rem)", paddingBottom: "clamp(3.5rem,8vh,7rem)" }}>
          <div className="max-w-[1200px] mx-auto">
            <div style={{ marginBottom: "clamp(2.5rem,5vh,3.5rem)" }}>
              <div className="flex items-center gap-1.5 text-white/45" style={{ fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}>
                <span style={eyebrowDot}></span>What We Build
              </div>
              <h2 className="font-display font-extrabold text-white" style={{ fontSize: "clamp(1.8rem,3.6vw,3rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                More Than <em className="font-serif italic text-gradient" style={{ fontWeight: 400 }}>Just A Store</em>
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: "1.25rem" }}>
              {pillars.map((p) => (
                <div key={p.num} className="group transition-all duration-300 hover:-translate-y-1" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 22, padding: "clamp(1.6rem,2.5vw,2rem)", position: "relative", overflow: "hidden" }}>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-400" style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #F26622, transparent)" }} />
                  <div className="flex items-center gap-2" style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "1rem" }}>
                    <span className="font-display font-black" style={{ color: "rgba(242,102,34,0.5)" }}>{p.num}</span>
                    <span>{p.label}</span>
                  </div>
                  <h3 className="font-display" style={{ marginBottom: "0.9rem" }}>
                    <span className="block font-extrabold text-white" style={{ fontSize: "clamp(1.3rem,2vw,1.6rem)", lineHeight: 1.1, letterSpacing: "-0.01em" }}>{p.title}</span>
                    <span className="block font-serif italic text-gradient" style={{ fontSize: "clamp(1.4rem,2.1vw,1.7rem)", lineHeight: 1.1 }}>{p.italic}</span>
                  </h3>
                  <p className="text-white/55" style={{ fontSize: "0.88rem", lineHeight: 1.65, marginBottom: "1.4rem" }}>{p.desc}</p>
                  <div className="flex flex-col" style={{ gap: "0.7rem" }}>
                    {p.items.map((it) => (
                      <div key={it} className="flex items-center gap-3">
                        <Check />
                        <span className="text-white/80" style={{ fontSize: "0.86rem", fontWeight: 500 }}>{it}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 06 AUTOMATION · LIGHT ─────────────────────────────────────────── */}
        <section className="px-container-x bg-off-white text-text-dark" style={{ paddingTop: "clamp(3.5rem,8vh,7rem)", paddingBottom: "clamp(3.5rem,8vh,7rem)" }}>
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center" style={{ marginBottom: "clamp(2.5rem,5vh,3.5rem)" }}>
              <div className="inline-flex items-center gap-1.5 text-text-sec-dark" style={{ fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}>
                <span style={eyebrowDot}></span>06 — Automation Systems
              </div>
              <h2 className="font-display font-extrabold text-text-dark" style={{ fontSize: "clamp(1.7rem,3.6vw,3rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                Automation That <em className="font-serif italic text-gradient" style={{ fontWeight: 400 }}>Drives Sales.</em>
              </h2>
            </div>
            <div className="flex flex-wrap" style={{ gap: "0.9rem" }}>
              {automations.map((a) => (
                <div key={a.title} className="group transition-all duration-300 hover:-translate-y-1" style={{ flex: "1 1 160px", padding: "1.7rem 1.3rem", borderRadius: 18, background: "#fff", border: "1px solid rgba(5,15,30,0.05)", boxShadow: "0 2px 14px rgba(5,15,30,0.05)", position: "relative", overflow: "hidden" }}>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-400" style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #F26622, transparent)" }} />
                  <span style={{ display: "inline-block", marginBottom: "1rem" }}><IconBadge glyph={a.icon} dark={false} /></span>
                  <h3 className="font-display text-text-dark" style={{ fontSize: "0.95rem", fontWeight: 700, marginBottom: "0.4rem" }}>{a.title}</h3>
                  <p className="text-text-sec-dark" style={{ fontSize: "0.82rem", lineHeight: 1.55 }}>{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 07 WHY SHOPIFY · DARK ─────────────────────────────────────────── */}
        <section className="px-container-x" style={{ background: DARK, paddingTop: "clamp(3.5rem,8vh,7rem)", paddingBottom: "clamp(3.5rem,8vh,7rem)" }}>
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center" style={{ gap: "clamp(2rem,4vw,3.5rem)" }}>
            <div>
              <div className="flex items-center gap-1.5 text-white/45" style={{ fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}>
                <span style={eyebrowDot}></span>07 — Why Shopify
              </div>
              <h2 className="font-display font-extrabold text-white" style={{ fontSize: "clamp(1.8rem,3.6vw,3rem)", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "1.2rem" }}>
                Why We Recommend<br /><em className="font-serif italic text-gradient" style={{ fontWeight: 400 }}>Shopify</em>
              </h2>
              <p className="text-white/55" style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.6rem", maxWidth: "460px" }}>
                Shopify is one of the most stable and scalable ecommerce platforms in the world, ideal for brands that want real, long-term growth.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "0.7rem", columnGap: "1.5rem" }}>
                {whyShopify.map((w) => (
                  <div key={w} className="flex items-center gap-3">
                    <Check />
                    <span className="text-white/80" style={{ fontSize: "0.86rem", fontWeight: 500 }}>{w}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* glass card */}
            <div className="relative overflow-hidden" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 24, padding: "clamp(1.5rem,3vw,2.2rem)" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #F26622, transparent)" }} />
              <div className="flex items-center gap-3" style={{ marginBottom: "1.8rem", paddingBottom: "1.4rem", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                <ShopMark size={46} />
                <span className="font-display font-black text-white" style={{ fontSize: "1.4rem", letterSpacing: "-0.02em" }}>Shopify</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3" style={{ gap: "1.5rem 1.2rem" }}>
                {whyMini.map((m) => (
                  <div key={m.title}>
                    <span className="flex items-center justify-center" style={{ width: 38, height: 38, borderRadius: 11, marginBottom: "0.6rem", color: ACCENT, background: "rgba(242,102,34,0.1)", border: "1px solid rgba(242,102,34,0.18)" }}><Icon name={m.icon} size={19} /></span>
                    <h4 className="font-display text-white" style={{ fontSize: "0.85rem", fontWeight: 700, marginBottom: "0.25rem" }}>{m.title}</h4>
                    <p style={{ fontSize: "0.72rem", lineHeight: 1.45, color: "rgba(255,255,255,0.5)" }}>{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 08 OUR PROCESS · LIGHT ────────────────────────────────────────── */}
        <section className="px-container-x bg-off-white text-text-dark" style={{ paddingTop: "clamp(3.5rem,8vh,7rem)", paddingBottom: "clamp(3.5rem,8vh,7rem)" }}>
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center" style={{ marginBottom: "clamp(2.5rem,5vh,3.5rem)" }}>
              <div className="inline-flex items-center gap-1.5 text-text-sec-dark" style={{ fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}>
                <span style={eyebrowDot}></span>08 — Our Process
              </div>
              <h2 className="font-display font-extrabold text-text-dark" style={{ fontSize: "clamp(1.7rem,3.6vw,3rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                Our Process. <em className="font-serif italic text-gradient" style={{ fontWeight: 400 }}>Clear &amp; Simple.</em>
              </h2>
            </div>
            <div className="flex flex-wrap" style={{ gap: "0.9rem" }}>
              {process.map((s) => (
                <div key={s.num} className="group flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1" style={{ flex: "1 1 130px", padding: "1.6rem 0.9rem", borderRadius: 18, background: "#fff", border: "1px solid rgba(5,15,30,0.05)", boxShadow: "0 2px 14px rgba(5,15,30,0.05)", position: "relative", overflow: "hidden" }}>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-400" style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #F26622, transparent)" }} />
                  <span className="flex items-center justify-center font-display font-black" style={{ width: 46, height: 46, borderRadius: 999, border: "1px solid rgba(242,102,34,0.25)", background: "rgba(242,102,34,0.1)", color: ACCENT, fontSize: "0.95rem", marginBottom: "0.9rem" }}>{s.num}</span>
                  <h3 className="font-display text-text-dark" style={{ fontSize: "0.9rem", fontWeight: 700, marginBottom: "0.35rem" }}>{s.title}</h3>
                  <p className="text-text-sec-dark" style={{ fontSize: "0.76rem", lineHeight: 1.45 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 09 / 10 PERFORMANCE + PARTNERSHIP · DARK ──────────────────────── */}
        <section className="px-container-x" style={{ background: DARK, paddingTop: "clamp(3.5rem,8vh,7rem)", paddingBottom: "clamp(3.5rem,8vh,7rem)" }}>
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2" style={{ gap: "1.25rem" }}>
            {/* 09 */}
            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 24, padding: "clamp(1.8rem,3vw,2.4rem)", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #F26622, transparent)" }}></div>
              <div className="flex items-center gap-1.5 text-white/45" style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
                <span style={eyebrowDot}></span>09 — Performance Ready
              </div>
              <h3 className="font-display" style={{ marginBottom: "0.9rem" }}>
                <span className="block font-extrabold text-white" style={{ fontSize: "clamp(1.4rem,2.4vw,2rem)", lineHeight: 1.1, letterSpacing: "-0.01em" }}>Stores Built For</span>
                <span className="block font-serif italic text-gradient" style={{ fontSize: "clamp(1.5rem,2.5vw,2.1rem)", lineHeight: 1.1 }}>Performance Marketing</span>
              </h3>
              <p className="text-white/55" style={{ fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.6rem" }}>
                Our stores are built specifically for ads and performance. Every element directly impacts ROAS, conversions and profitability.
              </p>
              <div className="flex flex-wrap" style={{ gap: "0.6rem" }}>
                {adsBadges.map((b) => (
                  <span key={b} className="inline-flex items-center gap-2 text-white/80" style={{ fontSize: "0.78rem", fontWeight: 600, padding: "0.55rem 0.9rem", borderRadius: 999, background: "rgba(242,102,34,0.08)", border: "1px solid rgba(242,102,34,0.2)" }}>
                    <span style={{ width: 5, height: 5, borderRadius: 999, background: ACCENT }}></span>{b}
                  </span>
                ))}
              </div>
            </div>

            {/* 10 */}
            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 24, padding: "clamp(1.8rem,3vw,2.4rem)", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #F26622, transparent)" }}></div>
              <div className="flex items-center gap-1.5 text-white/45" style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
                <span style={eyebrowDot}></span>10 — Partnership
              </div>
              <h3 className="font-display" style={{ marginBottom: "0.9rem" }}>
                <span className="block font-extrabold text-white" style={{ fontSize: "clamp(1.4rem,2.4vw,2rem)", lineHeight: 1.1, letterSpacing: "-0.01em" }}>More Than Development.</span>
                <span className="block font-serif italic text-gradient" style={{ fontSize: "clamp(1.5rem,2.5vw,2.1rem)", lineHeight: 1.1 }}>A True Partner.</span>
              </h3>
              <div className="flex flex-col" style={{ gap: "0.8rem", marginTop: "1.2rem" }}>
                {expectList.map((e) => (
                  <div key={e} className="flex items-start gap-3">
                    <span style={{ marginTop: 1 }}><Check /></span>
                    <span style={{ fontSize: "0.88rem", lineHeight: 1.5, color: "rgba(255,255,255,0.78)" }}>{e}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 11 CTA · DARK ─────────────────────────────────────────────────── */}
        <section className="px-container-x" style={{ background: DARK, paddingTop: "clamp(3.5rem,8vh,7rem)", paddingBottom: "clamp(4rem,9vh,8rem)" }}>
          <div className="max-w-[1200px] mx-auto">
            <div className="relative overflow-hidden flex items-center justify-between flex-wrap gap-8" style={{ borderRadius: 24, padding: "clamp(2rem,5vw,3.5rem)", background: "linear-gradient(135deg, #1a0c04 0%, #0d0806 100%)", border: "1px solid rgba(242,102,34,0.18)" }}>
              <div className="absolute pointer-events-none" aria-hidden="true" style={{ top: "-30%", right: "-8%", width: "40vw", height: "40vw", maxWidth: 440, maxHeight: 440, borderRadius: 999, background: "radial-gradient(circle, rgba(242,102,34,0.14) 0%, transparent 65%)" }} />
              <div className="relative" style={{ zIndex: 1 }}>
                <div className="flex items-center gap-1.5 text-white/45" style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.8rem" }}>
                  <span style={eyebrowDot}></span>11 — Ready To Build
                </div>
                <h2 className="font-display font-extrabold text-white" style={{ fontSize: "clamp(1.7rem,3.4vw,2.8rem)", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "0.6rem" }}>
                  Ready To Build <em className="font-serif italic text-gradient" style={{ fontWeight: 400 }}>Your Shopify Store?</em>
                </h2>
                <p className="text-white/55" style={{ fontSize: "0.95rem", maxWidth: "440px" }}>
                  Let&apos;s build a Shopify store engineered for real performance and scaling — together.
                </p>
              </div>
              <div className="relative flex items-center gap-5 flex-wrap" style={{ zIndex: 1 }}>
                <a href="/contact" className="btn-dark inline-flex items-center gap-2 text-[0.95rem] font-semibold py-[0.9rem] px-8 rounded-full bg-white text-dark transition-all duration-400 ease-out-expo relative overflow-hidden whitespace-nowrap" data-cursor="link">
                  <span className="btn-text relative z-[1]">Book A Call</span>
                  <span className="btn-icon relative z-[1] flex transition-transform duration-300 ease-out-expo">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M6 14L14 6M14 6H6M14 6V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
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
