import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Ecommerce Scaling — Data-Driven Advertising | viral4hype",
  description:
    "Scalable, profitable ecommerce ad systems powered by data and machine learning. Meta Ads, Google Ads, Advantage+ and Performance Max — built to scale over time.",
  path: "/ecommerce-scaling",
});

const ACCENT = "#F26622";
const DARK = "#180A03";

const layoutCss = `
.ec-hero{display:grid;grid-template-columns:1fr;gap:clamp(2rem,4vw,4rem);align-items:center;}
@media(min-width:1024px){.ec-hero{grid-template-columns:1.05fr minmax(0,470px);}}
.gx{display:grid;gap:1.25rem;}
.gx-2{grid-template-columns:1fr;}
@media(min-width:768px){.gx-2{grid-template-columns:repeat(2,minmax(0,1fr));}}
.gx-3{grid-template-columns:1fr;}
@media(min-width:640px){.gx-3{grid-template-columns:repeat(2,minmax(0,1fr));}}
@media(min-width:1024px){.gx-3{grid-template-columns:repeat(3,minmax(0,1fr));}}
.gx-4{grid-template-columns:repeat(2,minmax(0,1fr));}
@media(min-width:1024px){.gx-4{grid-template-columns:repeat(4,minmax(0,1fr));}}
.ec-link .ec-arrow{transition:transform .3s cubic-bezier(.19,1,.22,1);}
.ec-link:hover .ec-arrow{transform:translateX(4px);}
`;

const marqueeBase = ["Meta Ads", "Google Ads", "Advantage+", "Performance Max", "ROAS 5-8x", "Data-Driven", "Optimized Feeds", "Retargeting", "Profitable Scaling"];
const marqueeItems = [...marqueeBase, ...marqueeBase];

const heroNeeds = ["Strategy", "Tracking", "Machine Learning", "Creatives", "Optimization", "Scaling Systems"];
const heroKpis = [
  { value: "€348,500", label: "Revenue" },
  { value: "2,845", label: "Orders" },
  { value: "€67", label: "Avg. Order" },
  { value: "3.62%", label: "Conv. Rate" },
];
const spark = [18, 26, 22, 34, 40, 36, 52, 60, 56, 74, 82];

const buildItems = ["Campaign Structure", "Funnels", "Creatives", "Retargeting", "Full Tracking", "Optimized Feeds", "Scaling Strategies"];
const monitorKpis = ["ROAS", "CPA", "POAS", "AOV", "Conversion Rate", "Profitability", "CAC"];

const realityFactors = ["Margins", "Product Quality", "Branding", "Retention", "Website", "User Experience", "AOV", "Competition", "Content"];
const failReasons = ["Weak products", "A site that doesn't convert", "No branding", "A wrong ads strategy", "No retention"];

const profitCards = [
  { metric: "10–30%", label: "Margin per sale", title: "Margins Matter", desc: "Healthy margins make scaling profitable. With very small margins it only works when retention is strong, customers return, and lifetime value is high." },
  { metric: "150 RON", label: "The AOV line", title: "AOV Matters Too", desc: "High-AOV stores reach ROAS, profitability and stable scaling faster. Under ~150 RON / order you need better margins, retention, strong content and careful optimization." },
  { metric: "↗", label: "When profitable", title: "Budgets & Scaling", desc: "Budgets are relevant — but as long as ROAS, CPA, profitability and system parameters stay healthy, we can scale ad spend aggressively." },
];

const pillars = ["Fast response & communication", "Total transparency", "Continuous optimization", "Ecommerce business consulting", "Maximum seriousness", "Focus on real results", "Long-term partnership"];

const arrowSvg = (<svg width="22" height="22" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M6 14L14 6M14 6H6M14 6V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>);
const checkSvg = (<svg width="9" height="7" viewBox="0 0 10 8" fill="none" aria-hidden="true"><path d="M1 4L3.5 6.5L9 1" stroke={ACCENT} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>);

function Eyebrow({ num, label, dark = false }: { num: string; label: string; dark?: boolean }) {
  return (
    <div className="flex items-center" style={{ gap: "0.62rem", marginBottom: "1rem" }}>
      <span className="font-display font-bold" style={{ fontSize: "0.8rem", letterSpacing: "0.05em", color: ACCENT }}>{num}</span>
      <span style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: dark ? "rgba(255,255,255,0.45)" : "rgba(5,15,30,0.5)" }}>{label}</span>
    </div>
  );
}

const ctaButtons = (
  <div className="flex items-center flex-wrap" style={{ gap: "1.25rem" }}>
    <a href="/contact" className="btn-dark inline-flex items-center gap-2 text-[0.95rem] font-semibold py-[0.9rem] px-8 rounded-full bg-white text-dark transition-all duration-400 ease-out-expo relative overflow-hidden whitespace-nowrap" data-cursor="link">
      <span className="btn-text relative z-[1]">Book A Call</span>
      <span className="btn-icon relative z-[1] flex transition-transform duration-300 ease-out-expo">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M6 14L14 6M14 6H6M14 6V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </span>
    </a>
    <a href="/our-work" className="btn-ghost inline-flex items-center text-[0.95rem] font-semibold text-white/70 py-[0.9rem] border-b-[2px] border-white/20 transition-all duration-[350ms] relative hover:text-white hover:border-white/60" data-cursor="link">See Our Work</a>
  </div>
);

const ctaButtonsSolo = (
  <div className="flex items-center flex-wrap" style={{ gap: "1.25rem" }}>
    <a href="/contact" className="ec-link inline-flex items-center text-[0.95rem] font-semibold py-[0.9rem] px-8 rounded-full bg-white text-dark transition-all duration-400 ease-out-expo whitespace-nowrap" style={{ gap: "0.5rem" }} data-cursor="link">
      Book A Call <span className="ec-arrow flex">{arrowSvg}</span>
    </a>
  </div>
);

/* mini sparkline */
const SW = 240, SH = 64;
const sp = spark.map((v, i) => ({ x: Math.round((10 + (i * (SW - 20)) / (spark.length - 1)) * 10) / 10, y: Math.round((SH - 8 - (v / 100) * (SH - 18)) * 10) / 10 }));
const spLine = sp.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ");
const spArea = `${spLine} L${sp[sp.length - 1].x},${SH} L${sp[0].x},${SH} Z`;

export default function EcommerceScalingPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: layoutCss }} />
      <Nav />

      <main id="main-content">

        {/* ── HERO ──────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden min-h-svh flex flex-col justify-center px-container-x" style={{ background: DARK, paddingTop: "clamp(130px,18vh,190px)", paddingBottom: "clamp(3rem,8vh,6rem)" }}>
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ backgroundImage: "radial-gradient(circle 720px at 80% 16%, rgba(242,102,34,0.18), transparent 58%), radial-gradient(circle 520px at 0% 100%, rgba(242,102,34,0.05), transparent 70%)" }} />
          <div className="absolute select-none pointer-events-none max-lg:hidden font-display font-black leading-none" aria-hidden="true" style={{ right: "1.5%", bottom: "-6%", fontSize: "clamp(10rem,20vw,22rem)", color: "rgba(255,255,255,0.025)", letterSpacing: "-0.03em", whiteSpace: "nowrap" }}>Scale</div>

          <div className="max-w-[1200px] mx-auto relative w-full" style={{ zIndex: 1 }}>
            <div className="ec-hero">
              <div>
                <Eyebrow num="01" label="Ecommerce Scaling" dark />
                <h1 className="font-display" style={{ letterSpacing: "-0.02em", marginBottom: "clamp(1.3rem,2.6vh,1.8rem)" }}>
                  <span className="block font-display font-black text-white" style={{ fontSize: "clamp(2.5rem,5vw,4.7rem)", letterSpacing: "-0.035em", lineHeight: 0.98 }}>Scalable Ecommerce</span>
                  <span className="block font-serif italic text-gradient" style={{ fontSize: "clamp(2.5rem,4.8vw,4.4rem)", lineHeight: 1.04, marginTop: "0.04em" }}>Powered By Data</span>
                </h1>
                <p className="text-white/70" style={{ fontSize: "clamp(1rem,1.3vw,1.12rem)", lineHeight: 1.7, maxWidth: "480px", marginBottom: "1.4rem" }}>
                  In ecommerce, ads alone aren&apos;t enough. We build complete ecommerce ecosystems based on data and real performance — engineered to acquire customers profitably.
                </p>
                <div className="flex items-center flex-wrap" style={{ gap: "0.75rem", marginBottom: "clamp(1.8rem,3.5vh,2.4rem)", fontSize: "0.74rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>
                  {heroNeeds.map((p, i) => (
                    <span key={p} className="inline-flex items-center" style={{ gap: "0.75rem" }}>
                      {i > 0 && <span style={{ color: ACCENT }}>·</span>}
                      <span>{p}</span>
                    </span>
                  ))}
                </div>
                {ctaButtons}
              </div>

              {/* Side performance panel */}
              <div className="relative">
                <div className="absolute pointer-events-none" aria-hidden="true" style={{ inset: "-16% -8% -18% -4%", borderRadius: 999, background: "radial-gradient(circle at 60% 40%, rgba(242,102,34,0.2), transparent 60%)" }} />
                <div className="relative" style={{ borderRadius: 18, padding: "clamp(1.3rem,2vw,1.8rem)", background: "linear-gradient(160deg, rgba(30,17,9,0.97), rgba(13,8,6,0.97))", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 34px 90px -34px rgba(0,0,0,0.85), inset 0 1px 0 rgba(255,255,255,0.05)" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #F26622, transparent)" }} />
                  <div className="flex items-center justify-between" style={{ marginBottom: "1.1rem" }}>
                    <span className="text-white/45" style={{ fontSize: "0.66rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase" }}>Store Performance</span>
                    <span className="text-white/45" style={{ fontSize: "0.62rem", fontWeight: 600, border: "1px solid rgba(255,255,255,0.12)", borderRadius: 999, padding: "0.24rem 0.62rem" }}>Last 30 Days</span>
                  </div>
                  <div className="flex items-end" style={{ gap: "0.6rem", marginBottom: "0.9rem" }}>
                    <span className="font-display font-black text-white" style={{ fontSize: "clamp(2.6rem,5vw,3.4rem)", letterSpacing: "-0.03em", lineHeight: 0.9 }}>5-8<em className="font-serif text-gradient" style={{ fontStyle: "italic" }}>x</em></span>
                    <span className="text-white/45" style={{ fontSize: "0.78rem", marginBottom: "0.35rem" }}>Average ROAS</span>
                  </div>
                  <div style={{ borderRadius: 12, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", padding: "0.5rem", marginBottom: "0.9rem" }}>
                    <svg viewBox={`0 0 ${SW} ${SH}`} width="100%" role="img" aria-label="Upward revenue trend" style={{ display: "block" }}>
                      <defs><linearGradient id="ecArea" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="rgba(242,102,34,0.4)" /><stop offset="100%" stopColor="rgba(242,102,34,0)" /></linearGradient></defs>
                      <path d={spArea} fill="url(#ecArea)" />
                      <path d={spLine} fill="none" stroke={ACCENT} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx={sp[sp.length - 1].x} cy={sp[sp.length - 1].y} r="3.4" fill={ACCENT} />
                    </svg>
                  </div>
                  <div className="grid grid-cols-2" style={{ gap: "0.5rem" }}>
                    {heroKpis.map((k) => (
                      <div key={k.label} style={{ borderRadius: 11, padding: "0.7rem 0.8rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                        <span className="block font-display font-bold text-white" style={{ fontSize: "1.05rem", letterSpacing: "-0.02em", lineHeight: 1 }}>{k.value}</span>
                        <span className="block text-white/45" style={{ fontSize: "0.64rem", marginTop: "0.28rem", letterSpacing: "0.02em", textTransform: "uppercase" }}>{k.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── MARQUEE ───────────────────────────────────────────────────── */}
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

        {/* ── APPROACH ──────────────────────────────────────────────────── */}
        <section className="py-section-y px-container-x bg-off-white text-text-dark">
          <div className="max-w-[1200px] mx-auto">
            <div className="gx gx-2" style={{ alignItems: "center" }}>
              <div>
                <Eyebrow num="02" label="Data-Driven Ads" />
                <h2 className="font-display font-extrabold text-text-dark" style={{ fontSize: "clamp(1.9rem,4vw,3.2rem)", lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: "1.3rem" }}>
                  We Train Algorithms <em className="font-serif italic text-gradient" style={{ fontWeight: 400 }}>To Generate Profitable Sales</em>
                </h2>
                <p className="text-text-sec-dark" style={{ fontSize: "1rem", lineHeight: 1.7, maxWidth: "520px" }}>
                  Practically, the entire job in ecommerce is training the advertising platforms&apos; algorithms to generate profitable conversions — through continuous optimisation and behaviour analysis.
                </p>
              </div>
              <div className="flex flex-col" style={{ gap: "1.25rem" }}>
                {[
                  { name: "Meta Ads", tag: "Advantage+", desc: "Advantage+ campaigns let the algorithm find your best buyers and scale spend efficiently." },
                  { name: "Google Ads", tag: "Performance Max", desc: "Performance Max can radically transform an online store's trajectory when implemented correctly." },
                ].map((p) => (
                  <div key={p.name} style={{ background: "#fff", borderRadius: 20, padding: "1.8rem", border: "1px solid rgba(5,15,30,0.06)" }}>
                    <div className="flex items-center justify-between" style={{ marginBottom: "0.8rem" }}>
                      <h3 className="font-display text-text-dark" style={{ fontSize: "1.25rem", fontWeight: 700, letterSpacing: "-0.01em" }}>{p.name}</h3>
                      <span style={{ fontSize: "0.66rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: ACCENT, border: "1px solid rgba(242,102,34,0.25)", borderRadius: 999, padding: "0.25rem 0.7rem" }}>{p.tag}</span>
                    </div>
                    <p className="text-text-sec-dark" style={{ fontSize: "0.92rem", lineHeight: 1.65 }}>{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT WE BUILD ─────────────────────────────────────────────── */}
        <section className="py-section-y px-container-x text-white relative overflow-hidden" style={{ background: DARK }}>
          <div className="max-w-[1200px] mx-auto relative" style={{ zIndex: 1 }}>
            <div style={{ marginBottom: "clamp(2.5rem,5vh,3.5rem)", maxWidth: "640px" }}>
              <Eyebrow num="03" label="Full Ecommerce System" dark />
              <h2 className="font-display font-extrabold text-white" style={{ fontSize: "clamp(1.9rem,4vw,3.2rem)", lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: "0.8rem" }}>
                More Than <em className="font-serif italic text-gradient" style={{ fontWeight: 400 }}>Just Campaigns</em>
              </h2>
              <p className="text-white/55" style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>We configure, test and scale every element of a stable, high-performing conversion funnel.</p>
            </div>
            <div className="gx gx-4" style={{ gap: "0.75rem", marginBottom: "2.2rem" }}>
              {buildItems.map((b) => (
                <div key={b} className="flex items-center" style={{ gap: "0.8rem", background: "rgba(255,255,255,0.025)", borderRadius: 14, padding: "1rem 1.2rem", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <span className="flex items-center justify-center" style={{ width: 24, height: 24, borderRadius: 999, flexShrink: 0, background: "rgba(242,102,34,0.12)", border: "1px solid rgba(242,102,34,0.25)" }}>{checkSvg}</span>
                  <span className="font-display text-white" style={{ fontSize: "0.9rem", fontWeight: 600 }}>{b}</span>
                </div>
              ))}
            </div>
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "1.8rem" }}>
              <span className="text-white/35" style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", display: "block", marginBottom: "1rem" }}>KPIs we monitor & optimise</span>
              <div className="flex flex-wrap" style={{ gap: "0.6rem" }}>
                {monitorKpis.map((k) => (
                  <span key={k} className="font-display text-white" style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.02em", padding: "0.5rem 1rem", borderRadius: 999, background: "rgba(242,102,34,0.1)", border: "1px solid rgba(242,102,34,0.22)" }}>{k}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── REALITY CHECK ─────────────────────────────────────────────── */}
        <section className="py-section-y px-container-x bg-off-white text-text-dark">
          <div className="max-w-[1200px] mx-auto">
            <div className="gx gx-2" style={{ alignItems: "start" }}>
              <div>
                <Eyebrow num="04" label="Reality Check" />
                <h2 className="font-display font-extrabold text-text-dark" style={{ fontSize: "clamp(1.9rem,4vw,3.2rem)", lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: "1.3rem" }}>
                  Ecommerce <em className="font-serif italic text-gradient" style={{ fontWeight: 400 }}>Is Not Magic</em>
                </h2>
                <p className="text-text-sec-dark" style={{ fontSize: "1rem", lineHeight: 1.7, marginBottom: "1.4rem", maxWidth: "520px" }}>Profitability depends on real fundamentals — not just the ads:</p>
                <div className="flex flex-wrap" style={{ gap: "0.55rem" }}>
                  {realityFactors.map((f) => (
                    <span key={f} className="text-text-dark" style={{ fontSize: "0.82rem", fontWeight: 600, padding: "0.5rem 0.95rem", borderRadius: 999, background: "#fff", border: "1px solid rgba(5,15,30,0.1)" }}>{f}</span>
                  ))}
                </div>
              </div>
              <div style={{ background: "#fff", borderRadius: 22, padding: "clamp(1.8rem,3vw,2.4rem)", border: "1px solid rgba(5,15,30,0.06)" }}>
                <h3 className="font-display text-text-dark" style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "1.2rem" }}>Why many stores don&apos;t perform</h3>
                <ul className="flex flex-col" style={{ gap: "0.8rem" }}>
                  {failReasons.map((r) => (
                    <li key={r} className="flex items-center text-text-sec-dark" style={{ gap: "0.8rem", fontSize: "0.92rem" }}>
                      <span className="flex items-center justify-center" style={{ width: 20, height: 20, borderRadius: 999, flexShrink: 0, background: "rgba(5,15,30,0.05)", border: "1px solid rgba(5,15,30,0.12)" }}>
                        <svg width="9" height="9" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M2.5 2.5l5 5M7.5 2.5l-5 5" stroke="rgba(5,15,30,0.4)" strokeWidth="1.5" strokeLinecap="round" /></svg>
                      </span>
                      {r}
                    </li>
                  ))}
                </ul>
                <p className="text-text-sec-dark" style={{ fontSize: "0.88rem", lineHeight: 1.7, marginTop: "1.4rem" }}>We build systems engineered for real, sustainable growth.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROFITABILITY ─────────────────────────────────────────────── */}
        <section className="py-section-y px-container-x text-white relative overflow-hidden" style={{ background: DARK }}>
          <div className="max-w-[1200px] mx-auto relative" style={{ zIndex: 1 }}>
            <div style={{ marginBottom: "clamp(2.5rem,5vh,3.5rem)", maxWidth: "640px" }}>
              <Eyebrow num="05" label="Profitability" dark />
              <h2 className="font-display font-extrabold text-white" style={{ fontSize: "clamp(1.9rem,4vw,3.2rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
                Margins, AOV <em className="font-serif italic text-gradient" style={{ fontWeight: 400 }}>&amp; Budgets</em>
              </h2>
            </div>
            <div className="gx gx-3">
              {profitCards.map((c) => (
                <div key={c.title} style={{ background: "rgba(255,255,255,0.025)", borderRadius: 22, padding: "clamp(1.6rem,2.5vw,2.2rem)", border: "1px solid rgba(255,255,255,0.07)", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #F26622, transparent)" }} />
                  <div className="flex items-baseline" style={{ gap: "0.5rem", marginBottom: "1rem" }}>
                    <span className="font-display font-black text-gradient" style={{ fontSize: "clamp(1.8rem,3vw,2.4rem)", letterSpacing: "-0.02em", lineHeight: 1 }}>{c.metric}</span>
                    <span className="text-white/40" style={{ fontSize: "0.7rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em" }}>{c.label}</span>
                  </div>
                  <h3 className="font-display text-white" style={{ fontSize: "1.1rem", fontWeight: 700, letterSpacing: "-0.01em", marginBottom: "0.6rem" }}>{c.title}</h3>
                  <p className="text-white/55" style={{ fontSize: "0.88rem", lineHeight: 1.65 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PARTNERSHIP ───────────────────────────────────────────────── */}
        <section className="py-section-y px-container-x text-white relative overflow-hidden" style={{ background: DARK }}>
          <div className="max-w-[1200px] mx-auto relative" style={{ zIndex: 1 }}>
            <div style={{ marginBottom: "clamp(2.5rem,5vh,3.5rem)", maxWidth: "640px" }}>
              <Eyebrow num="06" label="Partnership" dark />
              <h2 className="font-display font-extrabold text-white" style={{ fontSize: "clamp(1.9rem,4vw,3.2rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
                What Partnership <em className="font-serif italic text-gradient" style={{ fontWeight: 400 }}>Means For Us</em>
              </h2>
            </div>
            <div className="gx gx-3">
              {pillars.map((p) => (
                <div key={p} className="flex items-center" style={{ gap: "0.9rem", background: "rgba(255,255,255,0.025)", borderRadius: 16, padding: "1.3rem 1.4rem", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <span className="flex items-center justify-center" style={{ width: 30, height: 30, borderRadius: 999, flexShrink: 0, background: "rgba(242,102,34,0.12)", border: "1px solid rgba(242,102,34,0.25)" }}>{checkSvg}</span>
                  <span className="text-white/85" style={{ fontSize: "0.92rem", fontWeight: 500 }}>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT + FINAL CTA ─────────────────────────────────────────── */}
        <section className="px-container-x text-white relative overflow-hidden" style={{ background: DARK, paddingTop: "clamp(1rem,3vh,3rem)", paddingBottom: "clamp(3.5rem,8vh,7rem)" }}>
          <div className="absolute pointer-events-none" aria-hidden="true" style={{ top: "10%", right: "6%", width: "40vw", height: "40vw", maxWidth: 440, maxHeight: 440, borderRadius: 999, background: "radial-gradient(circle, rgba(242,102,34,0.14), transparent 64%)" }} />
          <div className="max-w-[1200px] mx-auto relative" style={{ zIndex: 1 }}>
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "clamp(2.5rem,5vh,4rem)", marginBottom: "clamp(2.5rem,5vh,4rem)", maxWidth: "640px" }}>
              <Eyebrow num="07" label="Since 2021" dark />
              <p className="text-white/70" style={{ fontSize: "clamp(1.05rem,1.6vw,1.3rem)", lineHeight: 1.6, fontWeight: 500 }}>
                A properly built sales system generates results for years. Since 2021, Viral 4 Hype has focused on long-term partnerships, transparency, continuous optimization and real added value — not artificial short-term wins.
              </p>
            </div>
            <div className="flex items-center justify-between flex-wrap" style={{ columnGap: "clamp(2rem,4vw,3rem)", rowGap: "1.75rem" }}>
              <h2 className="font-display font-extrabold text-white" style={{ fontSize: "clamp(1.8rem,3.8vw,3rem)", lineHeight: 1.08, letterSpacing: "-0.02em" }}>
                Ready To Scale <em className="font-serif italic text-gradient" style={{ fontWeight: 400 }}>Your Ecommerce Brand?</em>
              </h2>
              {ctaButtonsSolo}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
