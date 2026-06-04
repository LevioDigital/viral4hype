import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Performance Marketing & Digital Growth Systems | viral4hype",
  description:
    "We build complete digital marketing systems — Google Ads, Meta Ads, TikTok Ads — for lead generation and ecommerce scaling. Real, predictable, scalable growth.",
  path: "/marketing",
});

const ACCENT = "#F26622";
const DARK = "#180A03";

/* layout CSS — globals.css is a precompiled Tailwind build, so new grid
   utilities (grid-cols-5, arbitrary templates) silently don't render.
   We define the responsive grids here as plain CSS instead. */
const layoutCss = `
.mk-hero{display:grid;grid-template-columns:1fr;gap:clamp(2rem,4vw,4rem);align-items:center;}
@media(min-width:1024px){.mk-hero{grid-template-columns:1.04fr minmax(0,520px);}}
.mk-two{display:grid;grid-template-columns:1fr;gap:1.5rem;}
@media(min-width:1024px){.mk-two{grid-template-columns:repeat(2,minmax(0,1fr));}}
.mk-about{display:grid;grid-template-columns:1fr;gap:clamp(2.5rem,5vw,4.5rem);align-items:center;}
@media(min-width:1024px){.mk-about{grid-template-columns:1.25fr 1fr;}}
.mk-metrics{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:.5rem;margin-top:.7rem;}
@media(min-width:520px){.mk-metrics{grid-template-columns:repeat(4,minmax(0,1fr));}}
.mk-stats{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));}
.mk-cols{display:grid;grid-template-columns:1fr;}
.mk-col{display:flex;flex-direction:column;align-items:center;text-align:center;padding:clamp(1.4rem,1.6vw,1.6rem) clamp(1rem,1.5vw,1.6rem);}
@media(min-width:640px){.mk-cols{grid-template-columns:repeat(2,minmax(0,1fr));}.mk-col{border-left:1px solid var(--mk-div);}.mk-col:nth-child(2n+1){border-left:none;}}
@media(min-width:1024px){.mk-cols{grid-template-columns:repeat(5,minmax(0,1fr));}.mk-col{border-left:1px solid var(--mk-div);}.mk-col:first-child{border-left:none;}}
.mk-link .mk-arrow{transition:transform .3s cubic-bezier(.19,1,.22,1);}
.mk-link:hover .mk-arrow{transform:translateX(4px);}
`;

/* ── Hero performance dashboard data ──────────────────────────────────── */
const chartMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const chartSeries = [22, 30, 26, 38, 34, 46, 52, 48, 60, 58, 72, 84]; // 0–100
const heroMetrics = [
  { label: "Leads", value: "1,250", delta: "+21%" },
  { label: "Sales", value: "320", delta: "+18%" },
  { label: "ROAS", value: "4.6x", delta: "+36%" },
  { label: "Revenue", value: "$48,500", delta: "+27%" },
];

const marqueeBase = ["Google Ads", "Meta Ads", "TikTok Ads", "Lead Generation", "Ecommerce Scaling", "Performance Max", "Advantage+", "ROAS 5-8x", "Data-Driven"];
const marqueeItems = [...marqueeBase, ...marqueeBase];

const leadPoints = ["Meta Ads & Google Ads", "Static Creatives Included", "Short-Form Content (On Demand)", "Long-Term Impact & Real Results", "Any Service Niche — We Adapt Fast"];
const ecomPoints = ["Meta Ads (Advantage+)", "Google Ads (Performance Max)", "Full Funnel & Tracking Strategy", "ROAS · CPA · POAS Optimization", "Long-Term Profitable Sales Model"];

/* ── Icons ────────────────────────────────────────────────────────────── */
const ic = (path: React.ReactNode) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{path}</svg>
);
const successFactors = [
  { icon: ic(<><path d="M3 7.5V4a1 1 0 011-1h3.5L20 15.5a1.5 1.5 0 010 2L17.5 20a1.5 1.5 0 01-2 0L3 7.5z" /><circle cx="7" cy="7" r="1.2" fill={ACCENT} stroke="none" /></>), title: "Decent Margins", desc: "A 10–30% margin per sale makes scaling truly profitable. With very small margins it only works when retention is strong, customers return, and lifetime value is worth investing in aggressively." },
  { icon: ic(<><path d="M21 8l-9-5-9 5 9 5 9-5z" /><path d="M3 8v8l9 5 9-5V8" /><path d="M12 13v8" /></>), title: "Quality Products & Pricing", desc: "Quality products, competitive pricing, and solid branding are essential to compete effectively and turn ad clicks into paying customers." },
  { icon: ic(<><rect x="3" y="4" width="18" height="12" rx="1.5" /><path d="M9 20h6M12 16v4" /></>), title: "A Solid Website", descNode: (<>A weak store limits scaling no matter how good the ads are. We recommend our <a href="/shopify" style={{ color: ACCENT, fontWeight: 600 }} data-cursor="link">Shopify</a> services so you can scale without friction.</>) },
  { icon: ic(<><path d="M4 20V10M10 20V4M16 20v-6M22 20H2" /><path d="M5 9l4-4 3 3 5-6" /></>), title: "Budgets Are", titleAccent: "Relevant", desc: "Budgets matter, but as long as the system is profitable we can invest aggressively in ads while parameters stay optimal (ROAS, CPA, POAS, etc.)." },
  { icon: ic(<><path d="M12 3v9l6.5 6.5A9 9 0 1012 3z" /><path d="M12 3a9 9 0 016.5 15.5" opacity="0.4" /></>), title: "AOV &", titleAccent: "Ecommerce Reality", desc: "High-AOV stores reach profitability faster and hold ROAS more easily. Under ~150 RON / order, scaling gets harder — strong margins become a major advantage." },
];
const pillars = [
  { icon: ic(<><path d="M21 11.5a8.4 8.4 0 01-9 8.3l-5 1.7 1.7-4.4A8.4 8.4 0 1121 11.5z" /><circle cx="8.5" cy="11.5" r="1" fill={ACCENT} stroke="none" /><circle cx="12" cy="11.5" r="1" fill={ACCENT} stroke="none" /><circle cx="15.5" cy="11.5" r="1" fill={ACCENT} stroke="none" /></>), title: "Fast Response", desc: "Quick replies via email or WhatsApp, nearly 24/7." },
  { icon: ic(<><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" /><path d="M9 12l2 2 4-4" /></>), title: "Maximum Seriousness", desc: "Maximum seriousness and respect toward every single collaboration." },
  { icon: ic(<path d="M12 3l2.6 5.6 6.1.7-4.5 4.1 1.2 6L12 16.8 6.6 19.5l1.2-6L3.3 9.3l6.1-.7L12 3z" />), title: "Proven Expertise", desc: "Expertise proven over time and confirmed by our partners." },
  { icon: ic(<><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0116 0" /></>), title: "Business Consulting", desc: "Online business consulting across the whole collaboration, whenever each partner needs it." },
  { icon: ic(<><path d="M21 12a9 9 0 11-3-6.7" /><path d="M21 4v4h-4" /></>), title: "Continuous Optimization", desc: "24/7 monitoring, transparent reporting and continuous optimization for better and better results." },
];

const arrowSvg = (
  <svg width="22" height="22" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M6 14L14 6M14 6H6M14 6V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
const checkSvg = (
  <svg width="9" height="7" viewBox="0 0 10 8" fill="none" aria-hidden="true"><path d="M1 4L3.5 6.5L9 1" stroke={ACCENT} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

/* chart geometry */
const CW = 520, CH = 220, padX = 26, topY = 24, botY = 188;
const pts = chartSeries.map((v, i) => ({
  x: Math.round((padX + (i * (CW - padX * 2)) / (chartSeries.length - 1)) * 10) / 10,
  y: Math.round((botY - (v / 100) * (botY - topY)) * 10) / 10,
}));
const linePath = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ");
const areaPath = `${linePath} L${pts[pts.length - 1].x},${botY} L${pts[0].x},${botY} Z`;

function Eyebrow({ num, label, center = false, dark = false }: { num: string; label: string; center?: boolean; dark?: boolean }) {
  return (
    <div className={`flex items-center ${center ? "justify-center" : ""}`} style={{ gap: "0.62rem", marginBottom: center ? "1.1rem" : "1rem" }}>
      <span className="font-display font-bold" style={{ fontSize: "0.8rem", letterSpacing: "0.05em", color: ACCENT }}>{num}</span>
      <span style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: dark ? "rgba(255,255,255,0.45)" : "rgba(5,15,30,0.5)" }}>{label}</span>
    </div>
  );
}

export default function MarketingPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: layoutCss }} />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-white focus:text-dark focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold focus:text-sm">
        Skip to main content
      </a>
      <Nav />

      <main id="main-content">

        {/* ── HERO ──────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden min-h-svh flex flex-col justify-center px-container-x" style={{ background: DARK, paddingTop: "clamp(130px,18vh,190px)", paddingBottom: "clamp(3rem,8vh,6rem)" }}>
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ backgroundImage: "radial-gradient(circle 720px at 78% 18%, rgba(242,102,34,0.20), transparent 58%), radial-gradient(circle 520px at 0% 100%, rgba(242,102,34,0.05), transparent 70%)" }} />
          {/* ghost word */}
          <div className="absolute select-none pointer-events-none max-lg:hidden font-display font-black leading-none" aria-hidden="true" style={{ right: "1.5%", bottom: "-6%", fontSize: "clamp(10rem,20vw,22rem)", color: "rgba(255,255,255,0.025)", letterSpacing: "-0.03em", whiteSpace: "nowrap" }}>Marketing</div>
          <div className="absolute pointer-events-none" aria-hidden="true" style={{ top: "22%", right: "2%", width: 200, height: 170, opacity: 0.55, backgroundImage: "radial-gradient(rgba(242,102,34,0.55) 1px, transparent 1.4px)", backgroundSize: "15px 15px", WebkitMaskImage: "radial-gradient(circle at center, black, transparent 75%)", maskImage: "radial-gradient(circle at center, black, transparent 75%)" }} />

          <div className="max-w-[1200px] mx-auto relative w-full" style={{ zIndex: 1 }}>
            <div className="mk-hero">
              {/* Left — copy */}
              <div>
                <Eyebrow num="01" label="Performance Marketing" dark />
                <h1 className="font-display" style={{ letterSpacing: "-0.02em", marginBottom: "clamp(1.3rem,2.6vh,1.8rem)" }}>
                  <span className="block font-display font-black text-white" style={{ fontSize: "clamp(2.5rem,5vw,4.7rem)", letterSpacing: "-0.035em", lineHeight: 0.98 }}>We Build Systems</span>
                  <span className="block font-serif italic text-gradient" style={{ fontSize: "clamp(2.6rem,5.2vw,4.9rem)", lineHeight: 1.02, marginTop: "0.02em" }}>That Generate Growth</span>
                </h1>
                <p className="text-white/70" style={{ fontSize: "clamp(1rem,1.3vw,1.12rem)", lineHeight: 1.7, maxWidth: "470px", marginBottom: "clamp(1.8rem,3.5vh,2.4rem)" }}>
                  We don&apos;t run ads for impressions or vanity metrics. We build complete digital marketing systems that generate qualified leads, sales, and predictable, scalable growth.
                </p>
                <div className="flex items-center flex-wrap" style={{ gap: "1.25rem", marginBottom: "clamp(1.5rem,3vh,2rem)" }}>
                  <a href="/contact" className="btn-dark inline-flex items-center gap-2 text-[0.95rem] font-semibold py-[0.9rem] px-8 rounded-full bg-white text-dark transition-all duration-400 ease-out-expo relative overflow-hidden whitespace-nowrap" data-cursor="link">
                    <span className="btn-text relative z-[1]">Book A Call</span>
                    <span className="btn-icon relative z-[1] flex transition-transform duration-300 ease-out-expo">
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M6 14L14 6M14 6H6M14 6V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                  </a>
                  <a href="/our-work" className="btn-ghost inline-flex items-center text-[0.95rem] font-semibold text-white/70 py-[0.9rem] border-b-[2px] border-white/20 transition-all duration-[350ms] relative hover:text-white hover:border-white/60" data-cursor="link">See Our Work</a>
                </div>
                <div className="flex items-center flex-wrap" style={{ gap: "0.75rem", fontSize: "0.74rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>
                  <span>Google Ads</span><span style={{ color: ACCENT }}>·</span><span>Meta Ads</span><span style={{ color: ACCENT }}>·</span><span>TikTok Ads</span>
                </div>
              </div>

              {/* Right — dashboard */}
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
                      <span className="font-display text-white/90" style={{ fontSize: "0.88rem", fontWeight: 700, letterSpacing: "-0.01em" }}>Performance Overview</span>
                    </div>
                    <span className="flex items-center" style={{ gap: "0.34rem", fontSize: "0.65rem", fontWeight: 600, color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 999, padding: "0.26rem 0.66rem" }}>
                      Last 12 Months
                      <svg width="9" height="9" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                  </div>

                  <div style={{ borderRadius: 12, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", padding: "0.6rem 0.4rem 0.2rem" }}>
                    <svg viewBox={`0 0 ${CW} ${CH}`} width="100%" role="img" aria-label="Upward-trending performance chart" style={{ display: "block" }}>
                      <defs>
                        <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="rgba(242,102,34,0.4)" />
                          <stop offset="100%" stopColor="rgba(242,102,34,0)" />
                        </linearGradient>
                      </defs>
                      {[topY, topY + (botY - topY) / 3, topY + (2 * (botY - topY)) / 3, botY].map((gy, i) => (
                        <line key={i} x1={padX} y1={gy} x2={CW - padX} y2={gy} stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                      ))}
                      <path d={areaPath} fill="url(#areaFill)" />
                      <path d={linePath} fill="none" stroke={ACCENT} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                      {pts.map((p, i) => (<circle key={i} cx={p.x} cy={p.y} r={i === pts.length - 1 ? 4 : 2.6} fill={i === pts.length - 1 ? ACCENT : DARK} stroke={ACCENT} strokeWidth="1.6" />))}
                      {chartMonths.map((m, i) => (<text key={m} x={pts[i].x} y={CH - 6} textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.35)" fontFamily="sans-serif">{m}</text>))}
                    </svg>
                  </div>

                  <div className="mk-metrics">
                    {heroMetrics.map((m) => (
                      <div key={m.label} style={{ borderRadius: 11, padding: "0.7rem 0.75rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                        <span className="block text-white/45" style={{ fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.3rem" }}>{m.label}</span>
                        <span className="block font-display font-bold text-white" style={{ fontSize: "1.15rem", letterSpacing: "-0.02em", lineHeight: 1 }}>{m.value}</span>
                        <span className="inline-flex items-center" style={{ gap: "0.18rem", fontSize: "0.66rem", fontWeight: 700, marginTop: "0.3rem", color: "#34d27b" }}>
                          <svg width="8" height="8" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M5 8V2M5 2L2 5M5 2L8 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          {m.delta}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── MARQUEE STRIP ─────────────────────────────────────────────── */}
        <div className="overflow-hidden bg-off-white border-y border-black/[0.06]" style={{ paddingTop: "1.3rem", paddingBottom: "1.3rem" }}>
          <div className="overflow-hidden">
            <div className="flex items-center whitespace-nowrap w-max animate-marquee">
              {marqueeItems.map((item, i) => (
                <span key={i} className="inline-flex items-center" style={{ gap: "1rem" }}>
                  <span className="font-sans text-text-dark" style={{ fontSize: "clamp(0.85rem,1.2vw,1rem)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", padding: "0 1.5rem" }}>{item}</span>
                  <span style={{ color: ACCENT, fontSize: "0.7rem" }}>●</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── TWO PATHS ──────────────────────────────────────────────────── */}
        <section className="py-section-y px-container-x bg-off-white text-text-dark">
          <div className="max-w-[1200px] mx-auto">
            <Eyebrow num="02" label="Two Main Directions" />
            <h2 className="font-display font-extrabold text-text-dark" style={{ fontSize: "clamp(2rem,4.6vw,3.6rem)", lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: "clamp(2.5rem,5vh,3.5rem)" }}>
              Two Paths. One Goal: <em className="font-serif italic text-gradient" style={{ fontWeight: 400 }}>Your Growth.</em>
            </h2>

            <div className="mk-two">
              {/* Lead Generation */}
              <div className="flex flex-col transition-shadow duration-300 hover:shadow-card" style={{ background: "#fff", borderRadius: 24, padding: "clamp(1.8rem,3vw,2.6rem)", border: "1px solid rgba(5,15,30,0.06)" }}>
                <div className="flex items-center" style={{ gap: "0.8rem", marginBottom: "1.5rem" }}>
                  <span className="flex items-center justify-center" style={{ width: 48, height: 48, borderRadius: 999, background: ACCENT, color: "#fff", flexShrink: 0 }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 20a8 8 0 0116 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: ACCENT }}>Lead Generation</span>
                </div>
                <h3 className="font-display font-bold text-text-dark" style={{ fontSize: "clamp(1.4rem,2.4vw,1.9rem)", lineHeight: 1.15, letterSpacing: "-0.01em", marginBottom: "1rem" }}>Qualified Leads<br />At The Lowest Cost</h3>
                <p className="text-text-sec-dark" style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "0.9rem" }}>We build ad systems that generate qualified leads with genuine purchase intent — forms, calls, bookings and quote requests — at the lowest possible acquisition cost.</p>
                <p className="text-text-sec-dark" style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.6rem" }}>We primarily use Meta Ads and Google Ads, and adapt fast to any service niche thanks to real mastery built across industries.</p>
                <ul className="flex flex-col" style={{ gap: "0.7rem", marginBottom: "1.8rem" }}>
                  {leadPoints.map((p) => (
                    <li key={p} className="flex items-center text-text-dark" style={{ gap: "0.75rem", fontSize: "0.9rem", fontWeight: 500 }}>
                      <span className="flex items-center justify-center" style={{ width: 20, height: 20, borderRadius: 999, flexShrink: 0, background: "rgba(242,102,34,0.1)", border: "1px solid rgba(242,102,34,0.22)" }}>{checkSvg}</span>
                      {p}
                    </li>
                  ))}
                </ul>
                <a href="/lead-generation" className="mk-link inline-flex items-center font-semibold" style={{ gap: "0.5rem", fontSize: "0.92rem", color: ACCENT, marginTop: "auto" }} data-cursor="link">
                  Learn More About Lead Generation <span className="mk-arrow flex">{arrowSvg}</span>
                </a>
              </div>

              {/* Ecommerce */}
              <div className="flex flex-col transition-shadow duration-300 hover:shadow-card" style={{ background: "#fff", borderRadius: 24, padding: "clamp(1.8rem,3vw,2.6rem)", border: "1px solid rgba(5,15,30,0.06)" }}>
                <div className="flex items-center" style={{ gap: "0.8rem", marginBottom: "1.5rem" }}>
                  <span className="flex items-center justify-center" style={{ width: 48, height: 48, borderRadius: 999, background: ACCENT, color: "#fff", flexShrink: 0 }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 4h2l2.4 12.4a1 1 0 001 .8h8.7a1 1 0 001-.8L21 8H6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /><circle cx="9.5" cy="20" r="1.4" fill="currentColor" /><circle cx="17.5" cy="20" r="1.4" fill="currentColor" /></svg>
                  </span>
                  <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: ACCENT }}>Ecommerce</span>
                </div>
                <h3 className="font-display font-bold text-text-dark" style={{ fontSize: "clamp(1.4rem,2.4vw,1.9rem)", lineHeight: 1.15, letterSpacing: "-0.01em", marginBottom: "1rem" }}>Scalable Ads Systems<br />Powered By Data</h3>
                <p className="text-text-sec-dark" style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "0.9rem" }}>In ecommerce the goal isn&apos;t traffic — it&apos;s a predictable, profitable acquisition system. We build scalable ad systems based on data and machine learning.</p>
                <p className="text-text-sec-dark" style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.6rem" }}>We lean on Meta Ads and Google Ads, where Advantage+ and Performance Max can transform an online store&apos;s trajectory into consistent, long-term sales.</p>
                <ul className="flex flex-col" style={{ gap: "0.7rem", marginBottom: "1.8rem" }}>
                  {ecomPoints.map((p) => (
                    <li key={p} className="flex items-center text-text-dark" style={{ gap: "0.75rem", fontSize: "0.9rem", fontWeight: 500 }}>
                      <span className="flex items-center justify-center" style={{ width: 20, height: 20, borderRadius: 999, flexShrink: 0, background: "rgba(242,102,34,0.1)", border: "1px solid rgba(242,102,34,0.22)" }}>{checkSvg}</span>
                      {p}
                    </li>
                  ))}
                </ul>
                <a href="/ecommerce-scaling" className="mk-link inline-flex items-center font-semibold" style={{ gap: "0.5rem", fontSize: "0.92rem", color: ACCENT, marginTop: "auto" }} data-cursor="link">
                  Learn More About Ecommerce <span className="mk-arrow flex">{arrowSvg}</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT MATTERS FOR SUCCESS ─────────────────────────────────────── */}
        <section className="py-section-y px-container-x text-white relative overflow-hidden" style={{ background: DARK }}>
          <div className="max-w-[1200px] mx-auto relative" style={{ zIndex: 1 }}>
            <div style={{ textAlign: "center", marginBottom: "clamp(2.8rem,6vh,4.5rem)" }}>
              <Eyebrow num="03" label="Important In Ecommerce" center dark />
              <h2 className="font-display font-extrabold text-white" style={{ fontSize: "clamp(1.9rem,4.2vw,3.3rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
                What Matters For <em className="font-serif italic text-gradient" style={{ fontWeight: 400 }}>Success</em>
              </h2>
            </div>
            <div className="mk-cols" style={{ ["--mk-div" as string]: "rgba(255,255,255,0.09)" } as React.CSSProperties}>
              {successFactors.map((f) => (
                <div key={f.title} className="mk-col">
                  <span className="flex items-center justify-center" style={{ marginBottom: "1.1rem" }}>{f.icon}</span>
                  <h3 className="font-display text-white" style={{ fontSize: "1rem", fontWeight: 700, letterSpacing: "-0.01em", marginBottom: "0.7rem", lineHeight: 1.3 }}>
                    {f.title}{f.titleAccent && <> <span className="text-gradient">{f.titleAccent}</span></>}
                  </h3>
                  <p className="text-white/50" style={{ fontSize: "0.82rem", lineHeight: 1.6 }}>{f.descNode ?? f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHAT TO EXPECT FROM US ──────────────────────────────────────── */}
        <section className="py-section-y px-container-x bg-off-white text-text-dark">
          <div className="max-w-[1200px] mx-auto">
            <div style={{ textAlign: "center", marginBottom: "clamp(2.8rem,6vh,4.5rem)" }}>
              <Eyebrow num="04" label="What To Expect From Us" center />
              <h2 className="font-display font-extrabold text-text-dark" style={{ fontSize: "clamp(1.9rem,4.2vw,3.3rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
                More Than Just <em className="font-serif italic text-gradient" style={{ fontWeight: 400 }}>Ads Management</em>
              </h2>
            </div>
            <div className="mk-cols" style={{ ["--mk-div" as string]: "rgba(5,15,30,0.09)" } as React.CSSProperties}>
              {pillars.map((p) => (
                <div key={p.title} className="mk-col">
                  <span className="flex items-center justify-center" style={{ marginBottom: "1.1rem" }}>{p.icon}</span>
                  <h3 className="font-display text-text-dark" style={{ fontSize: "1rem", fontWeight: 700, letterSpacing: "-0.01em", marginBottom: "0.7rem", lineHeight: 1.3 }}>{p.title}</h3>
                  <p className="text-text-sec-dark" style={{ fontSize: "0.82rem", lineHeight: 1.6 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT — SINCE 2021 ──────────────────────────────────────────── */}
        <section className="py-section-y px-container-x text-white relative overflow-hidden" style={{ background: DARK }}>
          <div className="absolute pointer-events-none" aria-hidden="true" style={{ top: "-25%", left: "8%", width: "55vw", height: "55vw", maxWidth: 560, maxHeight: 560, borderRadius: 999, background: "radial-gradient(circle, rgba(242,102,34,0.1), transparent 62%)" }} />
          <div className="max-w-[1200px] mx-auto relative mk-about" style={{ zIndex: 1 }}>
            <div>
              <Eyebrow num="05" label="About Viral 4 Hype" dark />
              <h2 className="font-display font-extrabold text-white" style={{ fontSize: "clamp(2rem,4.2vw,3.4rem)", lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: "1.4rem" }}>
                Since 2021. <em className="font-serif italic text-gradient" style={{ fontWeight: 400 }}>Focused On Your Success.</em>
              </h2>
              <p className="text-white/65" style={{ fontSize: "clamp(1rem,1.3vw,1.1rem)", lineHeight: 1.7, marginBottom: "1rem", maxWidth: "560px" }}>
                Founded in 2021, Viral 4 Hype has successfully managed its partners&apos; digital marketing investments ever since. We build long-term relationships based on transparency, results, communication, respect, and real added value.
              </p>
              <p className="text-white/55" style={{ fontSize: "0.95rem", lineHeight: 1.7, maxWidth: "560px" }}>Our goal is simple: to become a real growth partner for your business.</p>
            </div>
            <div className="mk-stats" style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 24, overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #F26622, transparent)" }} />
              {[{ stat: "2021", label: "Founded" }, { stat: "100%", label: "Client Satisfaction" }].map((s, i) => (
                <div key={s.label} style={{ padding: "clamp(1.8rem,3.5vw,2.6rem) clamp(1.2rem,2.5vw,2rem)", borderLeft: i === 1 ? "1px solid rgba(255,255,255,0.08)" : "none", textAlign: "center" }}>
                  <span className="block font-display font-black text-gradient" style={{ fontSize: "clamp(2.6rem,5.5vw,4rem)", letterSpacing: "-0.03em", lineHeight: 1 }}>{s.stat}</span>
                  <span className="block text-white/55" style={{ fontSize: "0.76rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em", marginTop: "0.7rem" }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ───────────────────────────────────────────────────── */}
        <section className="px-container-x" style={{ background: DARK, paddingBottom: "clamp(3.5rem,8vh,7rem)" }}>
          <div className="max-w-[1200px] mx-auto">
            <div className="relative overflow-hidden flex items-center justify-between flex-wrap" style={{ columnGap: "clamp(2rem,4vw,3rem)", rowGap: "1.75rem", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "clamp(3rem,6vh,5rem)" }}>
              <div className="absolute pointer-events-none" aria-hidden="true" style={{ top: "-60%", right: "8%", width: "40vw", height: "40vw", maxWidth: 440, maxHeight: 440, borderRadius: 999, background: "radial-gradient(circle, rgba(242,102,34,0.14) 0%, transparent 64%)" }} />
              <div className="relative" style={{ zIndex: 1 }}>
                <h2 className="font-display font-extrabold text-white" style={{ fontSize: "clamp(1.8rem,3.8vw,3rem)", lineHeight: 1.08, letterSpacing: "-0.02em", marginBottom: "0.7rem" }}>
                  Ready To Scale <em className="font-serif italic text-gradient" style={{ fontWeight: 400 }}>Your Business?</em>
                </h2>
                <p className="text-white/55" style={{ fontSize: "0.98rem", lineHeight: 1.6, maxWidth: "480px" }}>Let&apos;s build a marketing system that generates real results and sustainable growth for your business.</p>
              </div>
              <div className="relative flex items-center flex-wrap" style={{ gap: "1.25rem", zIndex: 1 }}>
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
