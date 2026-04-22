import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Blog | viral4hype",
  description: "Tips, case studies, and insights on web design, digital marketing, and growing your business online.",
};

const topics = [
  { icon: "◎", label: "Web Design" },
  { icon: "⬡", label: "Google Ads" },
  { icon: "✦", label: "Case Studies" },
  { icon: "◈", label: "SEO" },
  { icon: "◉", label: "Shopify" },
  { icon: "◌", label: "Business Growth" },
];

export default function BlogPage() {
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-white focus:text-dark focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold focus:text-sm">
        Skip to main content
      </a>
      <Nav />

      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden min-h-svh flex flex-col justify-end pt-[120px] pb-[clamp(3rem,6vh,5rem)] px-container-x" style={{ backgroundColor: '#180A03', backgroundImage: 'radial-gradient(circle 700px at 95% 0%, rgba(242,102,34,0.30) 0%, transparent 70%), radial-gradient(circle 520px at -5% 100%, rgba(131,9,238,0.10) 0%, transparent 70%), radial-gradient(circle 380px at 50% 60%, rgba(41,213,90,0.08) 0%, transparent 70%)' }}>

          <div className="max-w-[1200px] mx-auto relative z-[1] w-full">
            <div className="inline-flex items-center gap-2 text-[0.8rem] font-medium tracking-[0.08em] text-white/50 border border-white/10 rounded-[40px] py-[0.35rem] px-4 mb-[clamp(2rem,4vh,3.5rem)] backdrop-blur-[8px]">
              <span className="w-[6px] h-[6px] rounded-full animate-badge-pulse" style={{ backgroundColor: '#F26622' }}></span>
              Blog
            </div>

            <h1 className="font-display leading-[0.92] tracking-[-0.02em] mb-[clamp(2.5rem,5vh,4rem)]">
              <span className="block font-black text-[clamp(3rem,8.5vw,9.5rem)] tracking-[-0.03em] text-white leading-[0.95] mb-[0.2em]">Something good</span>
              <em className="font-serif italic font-normal text-[clamp(3.5rem,10vw,11rem)] text-gradient leading-[0.95]">is coming.</em>
            </h1>

            <div className="flex items-start justify-between gap-[clamp(2rem,4vw,5rem)] flex-wrap mb-[clamp(2.5rem,5vh,4rem)]">
              <p className="text-[clamp(0.9rem,1.3vw,1.05rem)] text-white/70 leading-[1.7] max-w-[440px]">
                We are working on articles, case studies, and practical guides on web design, digital marketing, and growing your business online.
              </p>
              <div className="flex items-center gap-6 shrink-0 flex-wrap pt-[0.4rem]">
                <a href="/contact" className="btn-dark inline-flex items-center gap-2 text-[0.95rem] font-semibold py-[0.9rem] px-8 rounded-full bg-white text-dark transition-all duration-400 ease-out-expo relative overflow-hidden whitespace-nowrap" data-cursor="link">
                  <span className="btn-text relative z-[1]">Start a Project</span>
                  <span className="btn-icon relative z-[1] flex transition-transform duration-300 ease-out-expo">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M6 14L14 6M14 6H6M14 6V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                </a>
                <a href="/our-work" className="btn-ghost inline-flex items-center text-[0.95rem] font-semibold text-white/70 py-[0.9rem] border-b-[2px] border-white/20 transition-all duration-[350ms] relative hover:text-white hover:border-white/60" data-cursor="link">
                  See Our Work
                </a>
              </div>
            </div>

            <div className="hero-stats flex items-center gap-8 pt-6 border-t border-white/[0.06] flex-wrap">
              <div className="stat flex flex-col gap-[0.15rem]">
                <span className="stat-num text-[clamp(1.1rem,1.8vw,1.5rem)] font-extrabold text-white tracking-[-0.02em]">Soon</span>
                <span className="stat-label text-xs font-medium text-white/55 uppercase tracking-[0.08em]">Articles</span>
              </div>
              <div className="stat-div w-px h-10 bg-white/[0.08]"></div>
              <div className="stat flex flex-col gap-[0.15rem]">
                <span className="stat-num text-[clamp(1.1rem,1.8vw,1.5rem)] font-extrabold text-white tracking-[-0.02em]">Real</span>
                <span className="stat-label text-xs font-medium text-white/55 uppercase tracking-[0.08em]">Case Studies</span>
              </div>
              <div className="stat-div w-px h-10 bg-white/[0.08]"></div>
              <div className="stat flex flex-col gap-[0.15rem]">
                <span className="stat-num text-[clamp(1.1rem,1.8vw,1.5rem)] font-extrabold text-white tracking-[-0.02em]">Free</span>
                <span className="stat-label text-xs font-medium text-white/55 uppercase tracking-[0.08em]">Insights</span>
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

        {/* Topics preview */}
        <section className="py-section-y px-container-x bg-off-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-[clamp(2.5rem,5vh,4rem)]">
              <div className="flex items-center gap-1.5 text-[0.8rem] font-semibold tracking-[0.12em] uppercase text-text-sec-dark mb-4">
                <span className="shrink-0 inline-block w-[5px] h-[5px] rounded-full" style={{ backgroundColor: '#F26622' }}></span>
                What to Expect
              </div>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.8rem)] font-extrabold leading-[1.05] tracking-[-0.02em] text-text-dark">
                Topics we will<br />
                <em className="font-serif italic font-normal text-[1.02em] text-gradient">be covering</em>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topics.map((t) => (
                <div key={t.label} className="bg-white rounded-[20px] p-8 border border-black/[0.05] relative overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{ background: 'linear-gradient(90deg, #F26622, transparent)' }}
                  />
                  <div className="w-11 h-11 rounded-full flex items-center justify-center mb-6 border border-black/[0.06]"
                    style={{ background: 'rgba(242,102,34,0.08)' }}>
                    <span className="text-lg" style={{ color: '#F26622' }}>{t.icon}</span>
                  </div>
                  <h3 className="font-display text-[1.05rem] font-bold text-text-dark tracking-[-0.01em]">{t.label}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
