import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Custom Websites Built For Modern Businesses | viral4hype",
  description:
    "We design and develop premium custom websites — fast, modern and performance-focused. Built to generate trust, leads and long-term business growth.",
  path: "/websites",
});

const ACCENT = "#F26622";
const DARK = "#180A03";

const heroPoints = ["Custom Designed", "Lightning Fast", "SEO Ready", "Conversion Focused", "Built To Scale"];

/* 02 — Why it matters */
const assetPoints = [
  "Increase trust in your brand",
  "Generate more enquiries",
  "Support your marketing campaigns",
  "Improve user experience",
  "Differentiate from competitors",
];

/* 03 — Built for performance */
const perfPoints = [
  "Google PageSpeed Insights",
  "Core Web Vitals",
  "Mobile Performance",
  "Technical SEO Best Practices",
  "Fast Loading Times",
  "Modern Web Standards",
];

/* 04 — What's included */
const included = [
  { icon: "design", title: "Custom Design", desc: "A unique design tailored to your brand, industry, and business goals." },
  { icon: "responsive", title: "Responsive Development", desc: "A seamless experience across desktop, tablet, and mobile devices." },
  { icon: "seo", title: "SEO-Friendly Structure", desc: "Clean architecture designed to support your future SEO efforts." },
  { icon: "leads", title: "Lead Generation Forms", desc: "Contact forms and enquiry systems built to generate business opportunities." },
  { icon: "analytics", title: "Analytics & Tracking", desc: "Google Analytics, Tag Manager and other relevant tracking solutions." },
  { icon: "security", title: "Security & Stability", desc: "Best practices for security, reliability, and long-term stability." },
  { icon: "gauge", title: "Performance Optimization", desc: "Full optimization for speed, user experience and technical performance." },
];

/* 05 — Perfect for */
const perfectFor = [
  "Local Businesses", "Construction Companies", "Medical Clinics", "Dental Practices",
  "Law Firms", "Consultants", "Agencies", "Professional Services", "B2B Companies", "Premium Brands",
];

/* 06 — Our process */
const process = [
  { num: "01", title: "Discovery", desc: "We learn about your business, services and objectives." },
  { num: "02", title: "Planning", desc: "We create the website structure and content strategy." },
  { num: "03", title: "Design", desc: "We build a modern visual identity and user experience." },
  { num: "04", title: "Development", desc: "We develop the website and implement all functionality." },
  { num: "05", title: "Optimization", desc: "We optimise performance, speed and user experience." },
  { num: "06", title: "Launch", desc: "We deploy the website and thoroughly test every component." },
];

/* 07 — Why Viral 4 Hype */
const whyPoints = [
  "Create trust",
  "Support business growth",
  "Strengthen your brand",
  "Improve user experience",
  "Generate enquiries",
  "Work alongside your marketing",
];

/* 08 — What to expect */
const expectList = [
  "Fast communication",
  "Transparent project management",
  "Professional execution",
  "Performance-focused development",
  "Attention to detail",
  "Long-term partnership mindset",
];

const marqueeItems = [
  "Custom Web Development", "Responsive Design", "Core Web Vitals", "Technical SEO",
  "Lead Generation", "Analytics & Tracking", "Performance Optimization", "Security & Stability",
  "Modern Web Standards", "Conversion Focused", "Mobile First", "Built To Scale",
];

const eyebrowDot = { width: 5, height: 5, borderRadius: 999, backgroundColor: ACCENT, flexShrink: 0, display: "inline-block" as const };

/* layout CSS — globals.css is a precompiled Tailwind build, so responsive grid
   variants (lg:grid-cols-*) and arbitrary fr-templates silently don't render.
   We define the responsive grids we rely on here as plain CSS instead. */
const layoutCss = `
.hero-grid{display:grid;grid-template-columns:1fr;gap:clamp(2.5rem,5vw,4rem);align-items:center;}
@media(min-width:1024px){.hero-grid{grid-template-columns:1.04fr minmax(0,520px);}}
@media(min-width:640px){.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr));}}
@media(min-width:1024px){.lg\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr));}}
.mk-link .mk-arrow{transition:transform .3s cubic-bezier(.19,1,.22,1);}
.mk-link:hover .mk-arrow{transform:translateX(4px);}
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

const arrowSvg = (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M6 14L14 6M14 6H6M14 6V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

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

// Meaning-matched line icons (24×24, currentColor stroke)
function Glyph({ name }: { name: string }) {
  switch (name) {
    case "design":
      return (<><rect x="3" y="4" width="18" height="16" rx="1.5" /><path d="M3 9h18" /><circle cx="6" cy="6.5" r="0.6" fill="currentColor" stroke="none" /><path d="M7 14l2.5 2.5L13 13l4 4" /></>);
    case "responsive":
      return (<><rect x="2" y="4" width="14" height="11" rx="1.2" /><rect x="15" y="9" width="7" height="11" rx="1.2" /><path d="M2 18h10" /></>);
    case "seo":
      return (<><circle cx="11" cy="11" r="6" /><path d="M20 20l-4.5-4.5" /><path d="M8.5 11l2 2 3.5-3.5" /></>);
    case "leads":
      return (<><rect x="3" y="5" width="18" height="14" rx="1.5" /><path d="M3 7l9 6 9-6" /></>);
    case "analytics":
      return (<><path d="M4 20V4M20 20H4" /><rect x="7" y="12" width="2.6" height="5" /><rect x="12" y="8" width="2.6" height="9" /><rect x="17" y="5" width="2.6" height="12" opacity="0.5" /></>);
    case "security":
      return (<><path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" /><path d="M9 12l2 2 4-4" /></>);
    case "gauge":
      return (<><path d="M5 18a8 8 0 1 1 14 0" /><path d="M12 14l4-4" /><circle cx="12" cy="14" r="1.2" fill="currentColor" stroke="none" /></>);
    case "trust":
      return (<><path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" /><path d="M9 11l2 2 4-4" /></>);
    case "growth":
      return (<><path d="M3 17l6-6 4 4 7-7" /><path d="M17 5h4v4" /></>);
    case "brand":
      return (<><path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19.2l1-5.8L3.5 9.2l5.9-.9z" /></>);
    case "ux":
      return (<><circle cx="12" cy="12" r="8" /><path d="M9 10h.01M15 10h.01M8.5 14a4 4 0 0 0 7 0" /></>);
    case "enquiry":
      return (<><path d="M21 11.5a8.4 8.4 0 0 1-9 8.3l-5 1.7 1.7-4.4A8.4 8.4 0 1 1 21 11.5z" /></>);
    case "partner":
      return (<><circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0 1 12 0" /><circle cx="17" cy="9" r="2.4" /><path d="M15.5 20a5 5 0 0 1 6.5-4.8" /></>);
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

/* lighthouse-style score ring */
function ScoreRing({ value, label }: { value: number; label: string }) {
  const r = 24;
  const c = 2 * Math.PI * r;
  const dash = (value / 100) * c;
  return (
    <div className="flex flex-col items-center" style={{ gap: "0.55rem" }}>
      <span className="relative flex items-center justify-center" style={{ width: 64, height: 64 }}>
        <svg width="64" height="64" viewBox="0 0 64 64" style={{ transform: "rotate(-90deg)" }} aria-hidden="true">
          <circle cx="32" cy="32" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="5" />
          <circle cx="32" cy="32" r={r} fill="none" stroke={ACCENT} strokeWidth="5" strokeLinecap="round" strokeDasharray={`${dash} ${c}`} />
        </svg>
        <span className="absolute font-display font-black text-white" style={{ fontSize: "1.05rem", letterSpacing: "-0.02em" }}>{value}</span>
      </span>
      <span className="text-white/50" style={{ fontSize: "0.66rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>{label}</span>
    </div>
  );
}

export default function WebsitesPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: layoutCss }} />
      <Nav />

      <main id="main-content">

        {/* ── 01 HERO · DARK ────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden min-h-svh flex flex-col justify-center px-container-x" style={{ background: DARK, paddingTop: "clamp(130px,18vh,190px)", paddingBottom: "clamp(3rem,8vh,6rem)" }}>
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ backgroundImage: "radial-gradient(circle 720px at 78% 18%, rgba(242,102,34,0.20), transparent 58%), radial-gradient(circle 520px at 0% 100%, rgba(242,102,34,0.05), transparent 70%)" }} />
          {/* ghost word */}
          <div className="absolute select-none pointer-events-none max-lg:hidden font-display font-black leading-none" aria-hidden="true" style={{ right: "1.5%", bottom: "-6%", fontSize: "clamp(10rem,20vw,22rem)", color: "rgba(255,255,255,0.025)", letterSpacing: "-0.03em", whiteSpace: "nowrap" }}>Websites</div>
          {/* dot pattern */}
          <div className="absolute pointer-events-none" aria-hidden="true" style={{ top: "22%", right: "2%", width: 200, height: 170, opacity: 0.55, backgroundImage: "radial-gradient(rgba(242,102,34,0.55) 1px, transparent 1.4px)", backgroundSize: "15px 15px", WebkitMaskImage: "radial-gradient(circle at center, black, transparent 75%)", maskImage: "radial-gradient(circle at center, black, transparent 75%)" }} />

          <div className="max-w-[1200px] mx-auto relative w-full" style={{ zIndex: 1 }}>
            <div className="hero-grid">
              {/* Left copy */}
              <div>
                <Eyebrow num="01" label="Custom Website Development" dark />

                <h1 className="font-display" style={{ letterSpacing: "-0.02em", marginBottom: "clamp(1.3rem,2.6vh,1.8rem)" }}>
                  <span className="block font-display font-black text-white" style={{ fontSize: "clamp(2.5rem,5vw,4.7rem)", letterSpacing: "-0.035em", lineHeight: 0.98 }}>Websites Built</span>
                  <span className="block font-serif italic text-gradient" style={{ fontSize: "clamp(2.6rem,5.2vw,4.9rem)", lineHeight: 1.02, marginTop: "0.02em" }}>To Represent You</span>
                </h1>

                <p className="text-white/70" style={{ fontSize: "clamp(1rem,1.3vw,1.12rem)", lineHeight: 1.7, maxWidth: "470px", marginBottom: "clamp(1.8rem,3.5vh,2.4rem)" }}>
                  We don&apos;t use cheap templates or outdated solutions. We build fast, modern, performance-focused websites designed to support long-term business growth.
                </p>

                <div className="flex items-center flex-wrap" style={{ gap: "1.25rem", marginBottom: "clamp(1.5rem,3vh,2rem)" }}>
                  <a href="/contact" className="btn-dark inline-flex items-center gap-2 text-[0.95rem] font-semibold py-[0.9rem] px-8 rounded-full bg-white text-dark transition-all duration-400 ease-out-expo relative overflow-hidden whitespace-nowrap" data-cursor="link">
                    <span className="btn-text relative z-[1]">Book A Call</span>
                    <span className="btn-icon relative z-[1] flex transition-transform duration-300 ease-out-expo">{arrowSvg}</span>
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

              {/* Right: performance / lighthouse dashboard */}
              <div className="relative">
                <div className="absolute pointer-events-none" aria-hidden="true" style={{ inset: "-16% -10% -18% -4%", borderRadius: 999, background: "radial-gradient(circle at 60% 42%, rgba(242,102,34,0.24), transparent 60%)" }} />
                <div className="absolute pointer-events-none" aria-hidden="true" style={{ top: "-24%", right: "-12%", width: 300, height: 300, borderRadius: 999, background: "radial-gradient(circle at 32% 32%, rgba(255,255,255,0.04), rgba(242,102,34,0.10) 42%, transparent 62%)", border: "1px solid rgba(242,102,34,0.12)" }} />

                <div className="relative" style={{ borderRadius: 18, padding: "clamp(0.9rem,1.5vw,1.3rem)", background: "linear-gradient(160deg, rgba(30,17,9,0.97), rgba(13,8,6,0.97))", border: "1px solid rgba(255,255,255,0.10)", boxShadow: "0 34px 90px -34px rgba(0,0,0,0.85), inset 0 1px 0 rgba(255,255,255,0.05)" }}>
                  <div className="flex items-center justify-between" style={{ marginBottom: "0.9rem" }}>
                    <div className="flex items-center" style={{ gap: "0.6rem" }}>
                      <span className="flex" style={{ gap: "0.34rem" }} aria-hidden="true">
                        <span style={{ width: 8, height: 8, borderRadius: 999, background: "rgba(255,255,255,0.16)" }} />
                        <span style={{ width: 8, height: 8, borderRadius: 999, background: "rgba(255,255,255,0.1)" }} />
                        <span style={{ width: 8, height: 8, borderRadius: 999, background: "rgba(242,102,34,0.55)" }} />
                      </span>
                      <span className="font-display text-white/90" style={{ fontSize: "0.88rem", fontWeight: 700, letterSpacing: "-0.01em" }}>Performance Report</span>
                    </div>
                    <span className="flex items-center" style={{ gap: "0.34rem", fontSize: "0.65rem", fontWeight: 600, color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 999, padding: "0.26rem 0.66rem" }}>
                      Lighthouse
                    </span>
                  </div>

                  <div style={{ borderRadius: 12, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", padding: "1rem 0.6rem", marginBottom: "0.7rem" }}>
                    <div className="grid grid-cols-4" style={{ gap: "0.4rem" }}>
                      <ScoreRing value={99} label="Perf" />
                      <ScoreRing value={100} label="SEO" />
                      <ScoreRing value={98} label="Access" />
                      <ScoreRing value={100} label="Best" />
                    </div>
                  </div>

                  <div className="grid grid-cols-3" style={{ gap: "0.5rem" }}>
                    {[{ k: "Load Time", v: "0.8s" }, { k: "LCP", v: "1.1s" }, { k: "CLS", v: "0.00" }].map((s) => (
                      <div key={s.k} style={{ borderRadius: 11, padding: "0.7rem 0.75rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                        <span className="block font-display font-bold text-white" style={{ fontSize: "1.15rem", letterSpacing: "-0.02em", lineHeight: 1 }}>{s.v}</span>
                        <span className="block text-white/45" style={{ fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", marginTop: "0.3rem" }}>{s.k}</span>
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

        {/* ── 02 A WEBSITE THAT REPRESENTS · LIGHT ──────────────────────────── */}
        <section className="px-container-x bg-off-white text-text-dark" style={{ paddingTop: "clamp(3.5rem,8vh,7rem)", paddingBottom: "clamp(3.5rem,8vh,7rem)" }}>
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center" style={{ gap: "clamp(2.5rem,5vw,4rem)" }}>
            <div>
              <div className="inline-flex items-center gap-1.5 text-text-sec-dark" style={{ fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}>
                <span style={eyebrowDot}></span>02 — Custom Website Development
              </div>
              <h2 className="font-display font-extrabold text-text-dark" style={{ fontSize: "clamp(1.8rem,3.6vw,3rem)", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "1.3rem" }}>
                A Website That Represents <em className="font-serif italic text-gradient" style={{ fontWeight: 400 }}>Your Business Properly</em>
              </h2>
              <p className="text-text-sec-dark" style={{ fontSize: "0.98rem", lineHeight: 1.75, marginBottom: "1rem", maxWidth: "520px" }}>
                For many businesses, a website is the first interaction a potential customer has with the company. In just a few seconds, visitors decide whether they trust you, whether your services look professional, and whether they want to get in touch.
              </p>
              <p className="text-text-sec-dark" style={{ fontSize: "0.98rem", lineHeight: 1.75, maxWidth: "520px" }}>
                We develop premium custom websites for businesses that want a modern online presence built the right way.
              </p>
            </div>

            {/* asset list card */}
            <div className="relative overflow-hidden" style={{ background: "#fff", border: "1px solid rgba(5,15,30,0.06)", borderRadius: 24, padding: "clamp(1.6rem,3vw,2.2rem)", boxShadow: "0 2px 18px rgba(5,15,30,0.05)" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #F26622, transparent)" }} />
              <div className="inline-flex items-center gap-1.5 text-text-sec-dark" style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.3rem" }}>
                <span style={eyebrowDot}></span>Your Website Is A Business Asset
              </div>
              <p className="text-text-sec-dark" style={{ fontSize: "0.9rem", lineHeight: 1.65, marginBottom: "1.4rem" }}>A professionally built website becomes one of the most valuable digital assets your company owns. It can:</p>
              <div className="flex flex-col" style={{ gap: "0.85rem" }}>
                {assetPoints.map((p) => (
                  <div key={p} className="flex items-center gap-3">
                    <Check />
                    <span className="text-text-dark" style={{ fontSize: "0.92rem", fontWeight: 500 }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 03 BUILT FOR PERFORMANCE · DARK ───────────────────────────────── */}
        <section className="px-container-x relative overflow-hidden" style={{ background: DARK, paddingTop: "clamp(3.5rem,8vh,7rem)", paddingBottom: "clamp(3.5rem,8vh,7rem)" }}>
          <div className="absolute pointer-events-none" aria-hidden="true" style={{ top: "-20%", right: "-6%", width: "50vw", height: "50vw", maxWidth: 540, maxHeight: 540, borderRadius: 999, background: "radial-gradient(circle, rgba(242,102,34,0.12), transparent 62%)" }} />
          <div className="max-w-[1200px] mx-auto relative" style={{ zIndex: 1 }}>
            <div style={{ marginBottom: "clamp(2.5rem,5vh,3.5rem)" }}>
              <div className="flex items-center gap-1.5 text-white/45" style={{ fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}>
                <span style={eyebrowDot}></span>03 — Built For Performance
              </div>
              <h2 className="font-display font-extrabold text-white" style={{ fontSize: "clamp(1.8rem,3.6vw,3rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                Fast Websites. <em className="font-serif italic text-gradient" style={{ fontWeight: 400 }}>Better User Experience.</em>
              </h2>
              <p className="text-white/55" style={{ fontSize: "0.95rem", lineHeight: 1.7, marginTop: "1.1rem", maxWidth: "560px" }}>
                Website performance directly impacts user experience, search visibility and advertising results. Every website we build is optimised for:
              </p>
            </div>
            <div className="flex flex-wrap" style={{ gap: "0.9rem" }}>
              {perfPoints.map((p) => (
                <div key={p} className="group flex items-center gap-3 transition-all duration-300 hover:-translate-y-1" style={{ flex: "1 1 260px", padding: "1.2rem 1.4rem", borderRadius: 16, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", position: "relative", overflow: "hidden" }}>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-400" style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #F26622, transparent)" }} />
                  <Check />
                  <span className="text-white/85" style={{ fontSize: "0.92rem", fontWeight: 500 }}>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 04 PERFECT FOR · DARK ─────────────────────────────────────────── */}
        <section className="px-container-x relative overflow-hidden" style={{ background: DARK, paddingTop: "clamp(3.5rem,8vh,7rem)", paddingBottom: "clamp(3.5rem,8vh,7rem)" }}>
          <div className="max-w-[1200px] mx-auto relative grid grid-cols-1 lg:grid-cols-2 items-center" style={{ zIndex: 1, gap: "clamp(2rem,4vw,3.5rem)" }}>
            <div>
              <div className="flex items-center gap-1.5 text-white/45" style={{ fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}>
                <span style={eyebrowDot}></span>04 — Perfect For
              </div>
              <h2 className="font-display font-extrabold text-white" style={{ fontSize: "clamp(1.8rem,3.6vw,3rem)", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "1.2rem" }}>
                Built For <em className="font-serif italic text-gradient" style={{ fontWeight: 400 }}>Growing Businesses</em>
              </h2>
              <p className="text-white/55" style={{ fontSize: "0.95rem", lineHeight: 1.7, maxWidth: "440px" }}>
                Our websites are ideal for any business looking to establish a stronger, more professional online presence.
              </p>
            </div>
            <div className="flex flex-wrap" style={{ gap: "0.6rem" }}>
              {perfectFor.map((p) => (
                <span key={p} className="inline-flex items-center gap-2 text-white/80" style={{ fontSize: "0.82rem", fontWeight: 600, padding: "0.6rem 1rem", borderRadius: 999, background: "rgba(242,102,34,0.08)", border: "1px solid rgba(242,102,34,0.2)" }}>
                  <span style={{ width: 5, height: 5, borderRadius: 999, background: ACCENT }}></span>{p}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── 05 OUR PROCESS · LIGHT ────────────────────────────────────────── */}
        <section className="px-container-x bg-off-white text-text-dark" style={{ paddingTop: "clamp(3.5rem,8vh,7rem)", paddingBottom: "clamp(3.5rem,8vh,7rem)" }}>
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center" style={{ marginBottom: "clamp(2.5rem,5vh,3.5rem)" }}>
              <div className="inline-flex items-center gap-1.5 text-text-sec-dark" style={{ fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}>
                <span style={eyebrowDot}></span>05 — Our Process
              </div>
              <h2 className="font-display font-extrabold text-text-dark" style={{ fontSize: "clamp(1.7rem,3.6vw,3rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                From Idea <em className="font-serif italic text-gradient" style={{ fontWeight: 400 }}>To Launch.</em>
              </h2>
            </div>
            <div className="flex flex-wrap" style={{ gap: "0.9rem" }}>
              {process.map((s) => (
                <div key={s.num} className="group flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1" style={{ flex: "1 1 150px", padding: "1.6rem 1rem", borderRadius: 18, background: "#fff", border: "1px solid rgba(5,15,30,0.05)", boxShadow: "0 2px 14px rgba(5,15,30,0.05)", position: "relative", overflow: "hidden" }}>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-400" style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #F26622, transparent)" }} />
                  <span className="flex items-center justify-center font-display font-black" style={{ width: 46, height: 46, borderRadius: 999, border: "1px solid rgba(242,102,34,0.25)", background: "rgba(242,102,34,0.1)", color: ACCENT, fontSize: "0.95rem", marginBottom: "0.9rem" }}>{s.num}</span>
                  <h3 className="font-display text-text-dark" style={{ fontSize: "0.9rem", fontWeight: 700, marginBottom: "0.35rem" }}>{s.title}</h3>
                  <p className="text-text-sec-dark" style={{ fontSize: "0.78rem", lineHeight: 1.5 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 06 WHAT'S INCLUDED · LIGHT ────────────────────────────────────── */}
        <section className="px-container-x bg-off-white text-text-dark" style={{ paddingTop: "clamp(3.5rem,8vh,7rem)", paddingBottom: "clamp(3.5rem,8vh,7rem)" }}>
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center" style={{ marginBottom: "clamp(2.5rem,5vh,3.5rem)" }}>
              <div className="inline-flex items-center gap-1.5 text-text-sec-dark" style={{ fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}>
                <span style={eyebrowDot}></span>06 — What&apos;s Included
              </div>
              <h2 className="font-display font-extrabold text-text-dark" style={{ fontSize: "clamp(1.7rem,3.6vw,3rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                Everything You Need <em className="font-serif italic text-gradient" style={{ fontWeight: 400 }}>To Launch Professionally.</em>
              </h2>
            </div>
            <div className="flex flex-wrap" style={{ gap: "0.9rem" }}>
              {included.map((f) => (
                <div key={f.title} className="group transition-all duration-300 hover:-translate-y-1" style={{ flex: "1 1 240px", padding: "1.7rem 1.4rem", borderRadius: 18, background: "#fff", border: "1px solid rgba(5,15,30,0.05)", boxShadow: "0 2px 14px rgba(5,15,30,0.05)", position: "relative", overflow: "hidden" }}>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-400" style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #F26622, transparent)" }} />
                  <span style={{ display: "inline-block", marginBottom: "1rem" }}><IconBadge glyph={f.icon} dark={false} /></span>
                  <h3 className="font-display text-text-dark" style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.45rem", letterSpacing: "-0.01em" }}>{f.title}</h3>
                  <p className="text-text-sec-dark" style={{ fontSize: "0.85rem", lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 07 / 08 WHY V4H + WHAT TO EXPECT · LIGHT ──────────────────────── */}
        <section className="px-container-x bg-off-white text-text-dark" style={{ paddingTop: "clamp(3.5rem,8vh,7rem)", paddingBottom: "clamp(3.5rem,8vh,7rem)" }}>
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2" style={{ gap: "1.25rem" }}>
            {/* 07 */}
            <div className="relative overflow-hidden" style={{ background: "#fff", border: "1px solid rgba(5,15,30,0.06)", borderRadius: 24, padding: "clamp(1.8rem,3vw,2.4rem)", boxShadow: "0 2px 18px rgba(5,15,30,0.05)" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #F26622, transparent)" }} />
              <div className="flex items-center gap-1.5 text-text-sec-dark" style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
                <span style={eyebrowDot}></span>07 — Why Viral 4 Hype
              </div>
              <h3 className="font-display" style={{ marginBottom: "0.9rem" }}>
                <span className="block font-extrabold text-text-dark" style={{ fontSize: "clamp(1.4rem,2.4vw,2rem)", lineHeight: 1.1, letterSpacing: "-0.01em" }}>More Than</span>
                <span className="block font-serif italic text-gradient" style={{ fontSize: "clamp(1.5rem,2.5vw,2.1rem)", lineHeight: 1.1 }}>Just Web Design</span>
              </h3>
              <p className="text-text-sec-dark" style={{ fontSize: "0.9rem", lineHeight: 1.65, marginBottom: "1.4rem" }}>We don&apos;t build websites simply for appearance. We build websites that:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "0.8rem", columnGap: "1.2rem" }}>
                {whyPoints.map((w) => (
                  <div key={w} className="flex items-center gap-3">
                    <Check />
                    <span className="text-text-dark" style={{ fontSize: "0.88rem", fontWeight: 500 }}>{w}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 08 */}
            <div className="relative overflow-hidden" style={{ background: "#fff", border: "1px solid rgba(5,15,30,0.06)", borderRadius: 24, padding: "clamp(1.8rem,3vw,2.4rem)", boxShadow: "0 2px 18px rgba(5,15,30,0.05)" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #F26622, transparent)" }} />
              <div className="flex items-center gap-1.5 text-text-sec-dark" style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
                <span style={eyebrowDot}></span>08 — What To Expect
              </div>
              <h3 className="font-display" style={{ marginBottom: "0.9rem" }}>
                <span className="block font-extrabold text-text-dark" style={{ fontSize: "clamp(1.4rem,2.4vw,2rem)", lineHeight: 1.1, letterSpacing: "-0.01em" }}>A Reliable</span>
                <span className="block font-serif italic text-gradient" style={{ fontSize: "clamp(1.5rem,2.5vw,2.1rem)", lineHeight: 1.1 }}>Digital Partner</span>
              </h3>
              <div className="flex flex-col" style={{ gap: "0.85rem", marginTop: "1.2rem" }}>
                {expectList.map((e) => (
                  <div key={e} className="flex items-start gap-3">
                    <span style={{ marginTop: 1 }}><Check /></span>
                    <span className="text-text-dark" style={{ fontSize: "0.9rem", lineHeight: 1.5, fontWeight: 500 }}>{e}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 09 ABOUT · DARK ───────────────────────────────────────────────── */}
        <section className="px-container-x text-white relative overflow-hidden" style={{ background: DARK, paddingTop: "clamp(3.5rem,8vh,7rem)", paddingBottom: "clamp(3.5rem,8vh,7rem)" }}>
          <div className="absolute pointer-events-none" aria-hidden="true" style={{ top: "-25%", left: "8%", width: "55vw", height: "55vw", maxWidth: 560, maxHeight: 560, borderRadius: 999, background: "radial-gradient(circle, rgba(242,102,34,0.1), transparent 62%)" }} />
          <div className="max-w-[1200px] mx-auto relative grid grid-cols-1 lg:grid-cols-2 items-center" style={{ zIndex: 1, gap: "clamp(2.5rem,5vw,4.5rem)" }}>
            <div>
              <div className="flex items-center gap-1.5 text-white/45" style={{ fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}>
                <span style={eyebrowDot}></span>09 — About Viral 4 Hype
              </div>
              <h2 className="font-display font-extrabold text-white" style={{ fontSize: "clamp(2rem,4.2vw,3.4rem)", lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: "1.4rem" }}>
                Since 2021. <em className="font-serif italic text-gradient" style={{ fontWeight: 400 }}>Building Digital Assets.</em>
              </h2>
              <p className="text-white/65" style={{ fontSize: "clamp(1rem,1.3vw,1.1rem)", lineHeight: 1.7, marginBottom: "1rem", maxWidth: "560px" }}>
                Since 2021, Viral 4 Hype has been helping businesses grow through digital marketing, web development and performance-focused strategies. Every website we build reflects our commitment to quality, performance and long-term business value.
              </p>
              <p className="text-white/55" style={{ fontSize: "0.95rem", lineHeight: 1.7, maxWidth: "560px" }}>
                We believe a website should not be an expense. It should be an investment in your company&apos;s future.
              </p>
            </div>
            <div className="grid grid-cols-2" style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 24, overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #F26622, transparent)" }} />
              {[{ stat: "2021", label: "Founded" }, { stat: "100%", label: "Client Focused" }].map((s, i) => (
                <div key={s.label} style={{ padding: "clamp(1.8rem,3.5vw,2.6rem) clamp(1.2rem,2.5vw,2rem)", borderLeft: i === 1 ? "1px solid rgba(255,255,255,0.08)" : "none", textAlign: "center" }}>
                  <span className="block font-display font-black text-gradient" style={{ fontSize: "clamp(2.6rem,5.5vw,4rem)", letterSpacing: "-0.03em", lineHeight: 1 }}>{s.stat}</span>
                  <span className="block text-white/55" style={{ fontSize: "0.76rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em", marginTop: "0.7rem" }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA · DARK ────────────────────────────────────────────────────── */}
        <section className="px-container-x" style={{ background: DARK, paddingTop: "clamp(2rem,3vh,3rem)", paddingBottom: "clamp(4rem,9vh,8rem)" }}>
          <div className="max-w-[1200px] mx-auto">
            <div className="relative overflow-hidden flex items-center justify-between flex-wrap gap-8" style={{ borderRadius: 24, padding: "clamp(2rem,5vw,3.5rem)", background: "linear-gradient(135deg, #1a0c04 0%, #0d0806 100%)", border: "1px solid rgba(242,102,34,0.18)" }}>
              <div className="absolute pointer-events-none" aria-hidden="true" style={{ top: "-30%", right: "-8%", width: "40vw", height: "40vw", maxWidth: 440, maxHeight: 440, borderRadius: 999, background: "radial-gradient(circle, rgba(242,102,34,0.14) 0%, transparent 65%)" }} />
              <div className="relative" style={{ zIndex: 1 }}>
                <div className="flex items-center gap-1.5 text-white/45" style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.8rem" }}>
                  <span style={eyebrowDot}></span>Ready To Upgrade
                </div>
                <h2 className="font-display font-extrabold text-white" style={{ fontSize: "clamp(1.7rem,3.4vw,2.8rem)", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "0.6rem" }}>
                  Upgrade Your <em className="font-serif italic text-gradient" style={{ fontWeight: 400 }}>Online Presence?</em>
                </h2>
                <p className="text-white/55" style={{ fontSize: "0.95rem", maxWidth: "460px" }}>
                  Let&apos;s build a website that represents your business properly and helps you grow with confidence.
                </p>
              </div>
              <div className="relative flex items-center gap-5 flex-wrap" style={{ zIndex: 1 }}>
                <a href="/contact" className="btn-dark inline-flex items-center gap-2 text-[0.95rem] font-semibold py-[0.9rem] px-8 rounded-full bg-white text-dark transition-all duration-400 ease-out-expo relative overflow-hidden whitespace-nowrap" data-cursor="link">
                  <span className="btn-text relative z-[1]">Book A Call</span>
                  <span className="btn-icon relative z-[1] flex transition-transform duration-300 ease-out-expo">{arrowSvg}</span>
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
