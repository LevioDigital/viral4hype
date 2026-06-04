import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Lead Generation — Qualified Leads At The Lowest Cost | viral4hype",
  description:
    "Lead generation systems built on Meta Ads and Google Ads — qualified leads with real purchase intent, predictable costs, and long-term, scalable growth across any niche.",
  path: "/lead-generation",
});

const ACCENT = "#F26622";
const DARK = "#180A03";

const layoutCss = `
.lg-hero{display:grid;grid-template-columns:1fr;gap:clamp(2rem,4vw,4rem);align-items:center;}
@media(min-width:1024px){.lg-hero{grid-template-columns:1.05fr minmax(0,480px);}}
.gx{display:grid;gap:1.25rem;}
.gx-2{grid-template-columns:1fr;}
@media(min-width:768px){.gx-2{grid-template-columns:repeat(2,minmax(0,1fr));}}
.gx-3{grid-template-columns:1fr;}
@media(min-width:640px){.gx-3{grid-template-columns:repeat(2,minmax(0,1fr));}}
@media(min-width:1024px){.gx-3{grid-template-columns:repeat(3,minmax(0,1fr));}}
.gx-4{grid-template-columns:repeat(2,minmax(0,1fr));}
@media(min-width:1024px){.gx-4{grid-template-columns:repeat(4,minmax(0,1fr));}}
.lg-link .lg-arrow{transition:transform .3s cubic-bezier(.19,1,.22,1);}
.lg-link:hover .lg-arrow{transform:translateX(4px);}
`;

const marqueeBase = ["Meta Ads", "Google Ads", "Qualified Leads", "Low CPL", "Real Intent", "Lead Funnels", "Static Creatives", "Short-Form Content", "Retargeting", "Conversion Tracking"];
const marqueeItems = [...marqueeBase, ...marqueeBase];

const heroPoints = ["Qualified Leads", "Predictable Costs", "Constant Growth", "Long-Term Scaling"];
const heroBars = [
  { label: "Lead Quality", value: 92 },
  { label: "Show-Up Rate", value: 78 },
  { label: "Budget Efficiency", value: 88 },
];
const heroKpis = [
  { value: "−42%", label: "Cost / Lead" },
  { value: "480+", label: "Monthly Bookings" },
];

const worksWhen = ["Targeting is accurate", "The offer is well built", "The funnel is optimised", "Ads are monitored constantly", "Generated leads are qualified"];

const platforms = [
  { name: "Meta Ads", tag: "Facebook · Instagram", desc: "One of the most effective ways to target precisely and generate leads at scale, with continuous data-driven optimisation." },
  { name: "Google Ads", tag: "Search · PMax", desc: "Captures users already searching for your services or products — high-intent demand, ready to convert." },
];

const included = [
  { title: "Campaign Strategy", desc: "Custom strategy based on your industry and goals." },
  { title: "Campaign Setup", desc: "Complete, correct configuration of every campaign." },
  { title: "Audience Targeting", desc: "Targeting optimised for relevant, qualified leads." },
  { title: "Static Creatives", desc: "Conversion-optimised static creatives, included." },
  { title: "Short-Form Content", desc: "On demand: Reels, TikTok-style ads, vertical UGC." },
  { title: "Tracking & Optimization", desc: "Full tracking setup and constant performance tuning." },
  { title: "Reporting", desc: "Clear, transparent reports — no unnecessary jargon." },
  { title: "24/7 Monitoring", desc: "Constant monitoring and fast reaction to changes." },
];

const steps = [
  { num: "01", title: "Business Analysis", desc: "We analyse your business, competitors, and ideal customer." },
  { num: "02", title: "Offer & Funnel Strategy", desc: "We build the offer strategy and the funnel structure." },
  { num: "03", title: "Campaign Launch", desc: "We launch the campaigns and implement full tracking." },
  { num: "04", title: "Continuous Optimization", desc: "We optimise cost per lead, lead quality, targeting, creatives, and conversions." },
  { num: "05", title: "Scaling", desc: "We scale the system once performance becomes stable." },
];

const niches = ["Clinics", "Dentistry", "Real Estate", "Construction", "Law", "Automotive", "Premium Services", "Local Businesses", "B2B Companies", "Education"];

const dontPromise = ["Instant results", "“Thousands of leads overnight”", "Vanity metrics", "Numbers without relevance"];
const focusOn = ["Qualified leads", "Optimised costs", "Sustainable growth", "Stable, long-term systems"];

const pillars = ["Fast response via email or WhatsApp", "Seriousness & respect", "Total transparency", "Continuous optimization", "Online business consulting", "Focus on real results", "Long-term partnership"];

/* shared bits */
const arrowSvg = (<svg width="22" height="22" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M6 14L14 6M14 6H6M14 6V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>);
const checkSvg = (<svg width="9" height="7" viewBox="0 0 10 8" fill="none" aria-hidden="true"><path d="M1 4L3.5 6.5L9 1" stroke={ACCENT} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>);

function Eyebrow({ num, label, center = false, dark = false }: { num: string; label: string; center?: boolean; dark?: boolean }) {
  return (
    <div className={`flex items-center ${center ? "justify-center" : ""}`} style={{ gap: "0.62rem", marginBottom: center ? "1.1rem" : "1rem" }}>
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
    <a href="/contact" className="lg-link inline-flex items-center text-[0.95rem] font-semibold py-[0.9rem] px-8 rounded-full bg-white text-dark transition-all duration-400 ease-out-expo whitespace-nowrap" style={{ gap: "0.5rem" }} data-cursor="link">
      Book A Call <span className="lg-arrow flex">{arrowSvg}</span>
    </a>
  </div>
);

export default function LeadGenerationPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: layoutCss }} />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-white focus:text-dark focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold focus:text-sm">Skip to main content</a>
      <Nav />

      <main id="main-content">

        {/* ── HERO ──────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden min-h-svh flex flex-col justify-center px-container-x" style={{ background: DARK, paddingTop: "clamp(130px,18vh,190px)", paddingBottom: "clamp(3rem,8vh,6rem)" }}>
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ backgroundImage: "radial-gradient(circle 720px at 80% 16%, rgba(242,102,34,0.18), transparent 58%), radial-gradient(circle 520px at 0% 100%, rgba(242,102,34,0.05), transparent 70%)" }} />
          <div className="absolute select-none pointer-events-none max-lg:hidden font-display font-black leading-none" aria-hidden="true" style={{ right: "1.5%", bottom: "-6%", fontSize: "clamp(10rem,20vw,22rem)", color: "rgba(255,255,255,0.025)", letterSpacing: "-0.03em", whiteSpace: "nowrap" }}>Leads</div>

          <div className="max-w-[1200px] mx-auto relative w-full" style={{ zIndex: 1 }}>
            <div className="lg-hero">
              <div>
                <Eyebrow num="01" label="Lead Generation" dark />
                <h1 className="font-display" style={{ letterSpacing: "-0.02em", marginBottom: "clamp(1.3rem,2.6vh,1.8rem)" }}>
                  <span className="block font-display font-black text-white" style={{ fontSize: "clamp(2.5rem,5vw,4.6rem)", letterSpacing: "-0.035em", lineHeight: 0.98 }}>Qualified Leads</span>
                  <span className="block font-serif italic text-gradient" style={{ fontSize: "clamp(2.4rem,4.6vw,4.2rem)", lineHeight: 1.04, marginTop: "0.04em" }}>Built For Long-Term Growth</span>
                </h1>
                <p className="text-white/70" style={{ fontSize: "clamp(1rem,1.3vw,1.12rem)", lineHeight: 1.7, maxWidth: "480px", marginBottom: "1.4rem" }}>
                  We don&apos;t run ads for impressions or vanity metrics. Through Meta Ads and Google Ads we build lead generation systems optimised to generate relevant leads at the lowest possible cost.
                </p>
                <div className="flex items-center flex-wrap" style={{ gap: "0.75rem", marginBottom: "clamp(1.8rem,3.5vh,2.4rem)", fontSize: "0.74rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>
                  {heroPoints.map((p, i) => (
                    <span key={p} className="inline-flex items-center" style={{ gap: "0.75rem" }}>
                      {i > 0 && <span style={{ color: ACCENT }}>·</span>}
                      <span>{p}</span>
                    </span>
                  ))}
                </div>
                {ctaButtons}
              </div>

              {/* Side KPI panel */}
              <div className="relative">
                <div className="absolute pointer-events-none" aria-hidden="true" style={{ inset: "-16% -8% -18% -4%", borderRadius: 999, background: "radial-gradient(circle at 60% 40%, rgba(242,102,34,0.2), transparent 60%)" }} />
                <div className="relative" style={{ borderRadius: 18, padding: "clamp(1.3rem,2vw,1.8rem)", background: "linear-gradient(160deg, rgba(30,17,9,0.97), rgba(13,8,6,0.97))", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 34px 90px -34px rgba(0,0,0,0.85), inset 0 1px 0 rgba(255,255,255,0.05)" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #F26622, transparent)" }} />
                  <div className="text-white/45" style={{ fontSize: "0.66rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "1.4rem" }}>Lead Performance</div>
                  <div className="grid grid-cols-2" style={{ gap: "0.75rem", marginBottom: "1.5rem" }}>
                    {heroKpis.map((k) => (
                      <div key={k.label} style={{ borderRadius: 12, padding: "0.9rem 1rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                        <span className="block font-display font-black text-gradient" style={{ fontSize: "1.7rem", letterSpacing: "-0.02em", lineHeight: 1 }}>{k.value}</span>
                        <span className="block text-white/45" style={{ fontSize: "0.68rem", marginTop: "0.35rem", letterSpacing: "0.02em" }}>{k.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col" style={{ gap: "1rem" }}>
                    {heroBars.map((b) => (
                      <div key={b.label}>
                        <div className="flex items-center justify-between" style={{ marginBottom: "0.4rem" }}>
                          <span className="text-white/70" style={{ fontSize: "0.78rem", fontWeight: 500 }}>{b.label}</span>
                          <span className="font-display font-bold text-white" style={{ fontSize: "0.82rem" }}>{b.value}%</span>
                        </div>
                        <div style={{ height: 6, borderRadius: 999, background: "rgba(255,255,255,0.08)", overflow: "hidden" }}>
                          <div style={{ width: `${b.value}%`, height: "100%", borderRadius: 999, background: "linear-gradient(90deg, #F26622, #ff9152)" }} />
                        </div>
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
            <div className="gx gx-2" style={{ alignItems: "start" }}>
              <div>
                <Eyebrow num="02" label="Our Approach" />
                <h2 className="font-display font-extrabold text-text-dark" style={{ fontSize: "clamp(1.9rem,4vw,3.2rem)", lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: "1.3rem" }}>
                  Focused On <em className="font-serif italic text-gradient" style={{ fontWeight: 400 }}>Real Customers</em>
                </h2>
                <p className="text-text-sec-dark" style={{ fontSize: "1rem", lineHeight: 1.7, marginBottom: "1.6rem", maxWidth: "520px" }}>
                  Our goal is simple: to bring people with genuine purchase intent for your business. Lead generation works when every piece is right:
                </p>
                <ul className="flex flex-col" style={{ gap: "0.8rem" }}>
                  {worksWhen.map((w) => (
                    <li key={w} className="flex items-center text-text-dark" style={{ gap: "0.8rem", fontSize: "0.95rem", fontWeight: 500 }}>
                      <span className="flex items-center justify-center" style={{ width: 22, height: 22, borderRadius: 999, flexShrink: 0, background: "rgba(242,102,34,0.1)", border: "1px solid rgba(242,102,34,0.22)" }}>{checkSvg}</span>
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col" style={{ gap: "1.25rem" }}>
                {platforms.map((p) => (
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

        {/* ── WHAT'S INCLUDED ──────────────────────────────────────────────── */}
        <section className="py-section-y px-container-x text-white relative overflow-hidden" style={{ background: DARK }}>
          <div className="max-w-[1200px] mx-auto relative" style={{ zIndex: 1 }}>
            <div style={{ marginBottom: "clamp(2.5rem,5vh,3.5rem)", maxWidth: "640px" }}>
              <Eyebrow num="03" label="Full Management" dark />
              <h2 className="font-display font-extrabold text-white" style={{ fontSize: "clamp(1.9rem,4vw,3.2rem)", lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: "0.8rem" }}>
                Everything Managed <em className="font-serif italic text-gradient" style={{ fontWeight: 400 }}>End To End</em>
              </h2>
              <p className="text-white/55" style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>Through our monthly management model we run the entire advertising ecosystem for you.</p>
            </div>
            <div className="gx gx-4">
              {included.map((f, i) => (
                <div key={f.title} style={{ background: "rgba(255,255,255,0.025)", borderRadius: 16, padding: "1.5rem", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <span className="font-display font-black" style={{ fontSize: "0.85rem", color: "rgba(242,102,34,0.4)", display: "block", marginBottom: "0.8rem" }}>{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-white" style={{ fontSize: "1rem", fontWeight: 700, letterSpacing: "-0.01em", marginBottom: "0.5rem" }}>{f.title}</h3>
                  <p className="text-white/50" style={{ fontSize: "0.84rem", lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ───────────────────────────────────────────────────── */}
        <section className="py-section-y px-container-x bg-off-white text-text-dark">
          <div className="max-w-[1200px] mx-auto">
            <div style={{ marginBottom: "clamp(2.5rem,5vh,3.5rem)", maxWidth: "640px" }}>
              <Eyebrow num="04" label="How We Work" />
              <h2 className="font-display font-extrabold text-text-dark" style={{ fontSize: "clamp(1.9rem,4vw,3.2rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
                A Systematic Process <em className="font-serif italic text-gradient" style={{ fontWeight: 400 }}>Built Around Performance</em>
              </h2>
            </div>
            <div style={{ borderTop: "1px solid rgba(5,15,30,0.08)" }}>
              {steps.map((s) => (
                <div key={s.num} className="flex items-start" style={{ gap: "clamp(1rem,3vw,2.5rem)", padding: "clamp(1.4rem,3vh,2.2rem) 0", borderBottom: "1px solid rgba(5,15,30,0.08)" }}>
                  <span className="font-display font-black" style={{ fontSize: "clamp(1.8rem,4vw,3rem)", lineHeight: 1, flexShrink: 0, width: "clamp(48px,6vw,80px)", letterSpacing: "-0.02em", color: "rgba(242,102,34,0.26)" }}>{s.num}</span>
                  <div className="flex-1" style={{ paddingTop: "0.2rem" }}>
                    <h3 className="font-display text-text-dark" style={{ fontSize: "clamp(1.1rem,2vw,1.5rem)", fontWeight: 700, letterSpacing: "-0.01em", marginBottom: "0.4rem" }}>{s.title}</h3>
                    <p className="text-text-sec-dark" style={{ fontSize: "0.92rem", lineHeight: 1.65, maxWidth: "620px" }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INDUSTRIES ────────────────────────────────────────────────── */}
        <section className="py-section-y px-container-x text-white relative overflow-hidden" style={{ background: DARK }}>
          <div className="absolute select-none pointer-events-none max-lg:hidden font-display font-black leading-none" aria-hidden="true" style={{ left: "-2%", bottom: "-4%", fontSize: "clamp(8rem,16vw,15rem)", color: "rgba(255,255,255,0.022)", letterSpacing: "-0.04em", whiteSpace: "nowrap" }}>Niches</div>
          <div className="max-w-[1200px] mx-auto relative" style={{ zIndex: 1 }}>
            <div style={{ marginBottom: "clamp(2.5rem,5vh,3.5rem)", maxWidth: "640px" }}>
              <Eyebrow num="05" label="Industries" dark />
              <h2 className="font-display font-extrabold text-white" style={{ fontSize: "clamp(1.9rem,4vw,3.2rem)", lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: "0.8rem" }}>
                We Adapt Fast <em className="font-serif italic text-gradient" style={{ fontWeight: 400 }}>To Any Niche</em>
              </h2>
              <p className="text-white/55" style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>Lead generation works in almost any industry. We have real mastery here and understand how different industries buy online.</p>
            </div>
            <div className="gx gx-4" style={{ gap: "0.75rem" }}>
              {niches.map((n, i) => (
                <div key={n} className="flex items-center" style={{ gap: "0.8rem", background: "rgba(255,255,255,0.025)", borderRadius: 14, padding: "1rem 1.2rem", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <span className="font-display font-black" style={{ fontSize: "0.78rem", color: "rgba(242,102,34,0.45)" }}>{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-white" style={{ fontSize: "0.92rem", fontWeight: 600 }}>{n}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── REALISTIC EXPECTATIONS ────────────────────────────────────── */}
        <section className="py-section-y px-container-x bg-off-white text-text-dark">
          <div className="max-w-[1200px] mx-auto">
            <div style={{ marginBottom: "clamp(2.5rem,5vh,3.5rem)", maxWidth: "640px" }}>
              <Eyebrow num="06" label="Realistic Expectations" />
              <h2 className="font-display font-extrabold text-text-dark" style={{ fontSize: "clamp(1.9rem,4vw,3.2rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
                We Don&apos;t Sell <em className="font-serif italic text-gradient" style={{ fontWeight: 400 }}>Fake Expectations</em>
              </h2>
            </div>
            <div className="gx gx-2">
              <div style={{ background: "#fff", borderRadius: 22, padding: "clamp(1.8rem,3vw,2.4rem)", border: "1px solid rgba(5,15,30,0.06)" }}>
                <h3 className="font-display text-text-dark" style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "1.3rem" }}>We don&apos;t promise</h3>
                <ul className="flex flex-col" style={{ gap: "0.8rem" }}>
                  {dontPromise.map((d) => (
                    <li key={d} className="flex items-center text-text-sec-dark" style={{ gap: "0.8rem", fontSize: "0.92rem" }}>
                      <span className="flex items-center justify-center" style={{ width: 20, height: 20, borderRadius: 999, flexShrink: 0, background: "rgba(5,15,30,0.05)", border: "1px solid rgba(5,15,30,0.12)" }}>
                        <svg width="9" height="9" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M2.5 2.5l5 5M7.5 2.5l-5 5" stroke="rgba(5,15,30,0.4)" strokeWidth="1.5" strokeLinecap="round" /></svg>
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ background: DARK, borderRadius: 22, padding: "clamp(1.8rem,3vw,2.4rem)", border: "1px solid rgba(242,102,34,0.2)", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #F26622, transparent)" }} />
                <h3 className="font-display text-white" style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "1.3rem" }}>We focus on</h3>
                <ul className="flex flex-col" style={{ gap: "0.8rem" }}>
                  {focusOn.map((f) => (
                    <li key={f} className="flex items-center text-white/85" style={{ gap: "0.8rem", fontSize: "0.92rem" }}>
                      <span className="flex items-center justify-center" style={{ width: 20, height: 20, borderRadius: 999, flexShrink: 0, background: "rgba(242,102,34,0.12)", border: "1px solid rgba(242,102,34,0.25)" }}>{checkSvg}</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="text-white/45" style={{ fontSize: "0.86rem", lineHeight: 1.7, marginTop: "1.4rem" }}>Real lead generation means testing, optimization, and consistency.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── PARTNERSHIP ───────────────────────────────────────────────── */}
        <section className="py-section-y px-container-x text-white relative overflow-hidden" style={{ background: DARK }}>
          <div className="max-w-[1200px] mx-auto relative" style={{ zIndex: 1 }}>
            <div style={{ marginBottom: "clamp(2.5rem,5vh,3.5rem)", maxWidth: "640px" }}>
              <Eyebrow num="07" label="Partnership" dark />
              <h2 className="font-display font-extrabold text-white" style={{ fontSize: "clamp(1.9rem,4vw,3.2rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
                More Than Just <em className="font-serif italic text-gradient" style={{ fontWeight: 400 }}>Ads Management</em>
              </h2>
            </div>
            <div className="gx gx-3">
              {pillars.map((p, i) => (
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
              <Eyebrow num="08" label="Since 2021" dark />
              <p className="text-white/70" style={{ fontSize: "clamp(1.05rem,1.6vw,1.3rem)", lineHeight: 1.6, fontWeight: 500 }}>
                Founded in 2021, Viral 4 Hype has successfully managed its partners&apos; digital marketing investments — building long-term relationships based on transparency, results, communication and real added value.
              </p>
            </div>
            <div className="flex items-center justify-between flex-wrap" style={{ columnGap: "clamp(2rem,4vw,3rem)", rowGap: "1.75rem" }}>
              <h2 className="font-display font-extrabold text-white" style={{ fontSize: "clamp(1.8rem,3.8vw,3rem)", lineHeight: 1.08, letterSpacing: "-0.02em" }}>
                Ready To Generate <em className="font-serif italic text-gradient" style={{ fontWeight: 400 }}>Better Leads?</em>
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
