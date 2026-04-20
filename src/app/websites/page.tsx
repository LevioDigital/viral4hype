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
