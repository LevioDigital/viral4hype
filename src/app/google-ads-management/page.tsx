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
        <section className="relative overflow-hidden min-h-svh flex flex-col justify-end pt-[120px] pb-[clamp(3rem,6vh,5rem)] px-container-x" style={{ backgroundColor: '#180A03', backgroundImage: 'radial-gradient(circle 700px at 95% 0%, rgba(242,102,34,0.30) 0%, transparent 70%), radial-gradient(circle 520px at -5% 100%, rgba(131,9,238,0.14) 0%, transparent 70%), radial-gradient(circle 380px at 55% 60%, rgba(8,117,233,0.14) 0%, transparent 70%)' }}>

          <div className="max-w-[1200px] mx-auto relative z-[1] w-full">
            <div className="inline-flex items-center gap-2 text-[0.8rem] font-medium tracking-[0.08em] text-white/50 border border-white/10 rounded-[40px] py-[0.35rem] px-4 mb-[clamp(2rem,4vh,3.5rem)] backdrop-blur-[8px]">
              <span className="w-[6px] h-[6px] rounded-full animate-badge-pulse" style={{ backgroundColor: '#F26622' }}></span>
              Digital Marketing
            </div>

            <h1 className="font-display leading-[0.92] tracking-[-0.02em] mb-[clamp(2.5rem,5vh,4rem)]">
              <span className="block font-black text-[clamp(3rem,8.5vw,9.5rem)] tracking-[-0.03em] text-white leading-[0.95] mb-[0.2em]">Marketing that</span>
              <em className="font-serif italic font-normal text-[clamp(3.5rem,10vw,11rem)] text-gradient leading-[0.95]">drives real ROI</em>
            </h1>

            <div className="flex items-start justify-between gap-[clamp(2rem,4vw,5rem)] flex-wrap mb-[clamp(2.5rem,5vh,4rem)]">
              <p className="text-[clamp(0.9rem,1.3vw,1.05rem)] text-white/70 leading-[1.7] max-w-[440px]">
                Google Ads and Meta campaigns managed daily by a team obsessed with your return on investment. No vanity metrics, no guesswork — just revenue you can measure.
              </p>
              <div className="flex items-center gap-6 shrink-0 flex-wrap pt-[0.4rem]">
                <a href="/contact" className="btn-dark inline-flex items-center gap-2 text-[0.95rem] font-semibold py-[0.9rem] px-8 rounded-full bg-white text-dark transition-all duration-400 ease-out-expo relative overflow-hidden whitespace-nowrap" data-cursor="link">
                  <span className="btn-text relative z-[1]">Get a Free Audit</span>
                  <span className="btn-icon relative z-[1] flex transition-transform duration-300 ease-out-expo">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M6 14L14 6M14 6H6M14 6V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                </a>
                <a href="/our-work" className="btn-ghost inline-flex items-center text-[0.95rem] font-semibold text-white/70 py-[0.9rem] border-b-[2px] border-white/20 transition-all duration-[350ms] relative hover:text-white hover:border-white/60" data-cursor="link">
                  See Case Studies
                </a>
              </div>
            </div>

            <div className="hero-stats flex items-center gap-8 pt-6 border-t border-white/[0.06] flex-wrap">
              <div className="stat flex flex-col gap-[0.15rem]">
                <span className="stat-num text-[clamp(1.1rem,1.8vw,1.5rem)] font-extrabold text-white tracking-[-0.02em]">10x</span>
                <span className="stat-label text-xs font-medium text-white/55 uppercase tracking-[0.08em]">Avg. ROAS</span>
              </div>
              <div className="stat-div w-px h-10 bg-white/[0.08]"></div>
              <div className="stat flex flex-col gap-[0.15rem]">
                <span className="stat-num text-[clamp(1.1rem,1.8vw,1.5rem)] font-extrabold text-white tracking-[-0.02em]">95%</span>
                <span className="stat-label text-xs font-medium text-white/55 uppercase tracking-[0.08em]">Beat Benchmark</span>
              </div>
              <div className="stat-div w-px h-10 bg-white/[0.08]"></div>
              <div className="stat flex flex-col gap-[0.15rem]">
                <span className="stat-num text-[clamp(1.1rem,1.8vw,1.5rem)] font-extrabold text-white tracking-[-0.02em]">Daily</span>
                <span className="stat-label text-xs font-medium text-white/55 uppercase tracking-[0.08em]">Optimization</span>
              </div>
              <div className="hero-scroll opacity-0 ml-auto flex items-center gap-[0.7rem] text-[0.7rem] font-medium tracking-[0.15em] uppercase text-white/55 max-lg:hidden">
                <div className="scroll-track w-[1.5px] h-10 bg-white/20 relative overflow-hidden rounded-sm">
                  <div className="scroll-fill w-full h-[14px] bg-white/70 rounded-sm animate-scroll-fill"></div>
                </div>
                <span>Scroll</span>
              </div>
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
                <div key={s.title} className="bg-white rounded-[20px] p-8 border border-black/[0.05] transition-shadow duration-300 hover:shadow-card relative overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{ background: 'linear-gradient(90deg, #F26622, transparent)' }}
                  />
                  <div className="w-11 h-11 rounded-full flex items-center justify-center mb-6 border border-black/[0.06]"
                    style={{ background: 'rgba(242,102,34,0.08)' }}>
                    <span className="text-lg" style={{ color: '#F26622' }}>{s.icon}</span>
                  </div>
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
                <em className="font-serif italic font-normal text-[1.02em] text-gradient">speak for themselves</em>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.07] rounded-[20px] overflow-hidden border border-white/[0.07]"
              style={{ background: 'rgba(255,255,255,0.02)' }}>
              {[
                { metric: "10x", label: "Average ROAS", context: "Return on ad spend across all active Google Ads clients, consistently beating the national average." },
                { metric: "62%", label: "Lower CPA", context: "Average reduction in cost-per-acquisition after 90 days of optimization." },
                { metric: "4.8×", label: "Lead Volume", context: "Average increase in qualified leads after switching to our managed campaigns." },
              ].map((r) => (
                <div key={r.label} className="p-[clamp(2rem,4vw,3.5rem)] flex flex-col">
                  <div className="font-display text-[clamp(3.5rem,7vw,6.5rem)] font-black tracking-[-0.03em] leading-none mb-4" style={{ color: '#F26622' }}>{r.metric}</div>
                  <div className="text-[0.78rem] font-bold text-white/70 uppercase tracking-[0.12em] mb-3">{r.label}</div>
                  <p className="text-[0.85rem] text-white/45 leading-[1.65] mt-auto">{r.context}</p>
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
            <div className="border-t border-black/[0.06]">
              {steps.map((s) => (
                <div key={s.num} className="flex items-start gap-[clamp(1.5rem,3vw,3rem)] py-[clamp(1.8rem,4vh,2.8rem)] border-b border-black/[0.06]">
                  <span className="font-display text-[clamp(2rem,5vw,4rem)] font-black leading-none shrink-0 w-[clamp(60px,8vw,110px)] tracking-[-0.02em]"
                    style={{ color: 'rgba(242,102,34,0.22)' }}
                  >{s.num}</span>
                  <div className="flex-1 pt-[0.3rem]">
                    <h3 className="font-display text-[clamp(1.1rem,2.2vw,1.6rem)] font-bold text-text-dark mb-2 tracking-[-0.01em]">{s.title}</h3>
                    <p className="text-[0.9rem] text-text-sec-dark leading-[1.65] max-w-[520px]">{s.desc}</p>
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
