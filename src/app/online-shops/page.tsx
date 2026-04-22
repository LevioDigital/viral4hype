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
        <section className="relative overflow-hidden min-h-svh flex flex-col justify-end pt-[120px] pb-[clamp(3rem,6vh,5rem)] px-container-x" style={{ backgroundColor: '#180A03', backgroundImage: 'radial-gradient(circle 700px at 95% 0%, rgba(242,102,34,0.30) 0%, transparent 70%), radial-gradient(circle 520px at -5% 100%, rgba(41,213,90,0.14) 0%, transparent 70%), radial-gradient(circle 380px at 55% 60%, rgba(8,117,233,0.12) 0%, transparent 70%)' }}>

          <div className="max-w-[1200px] mx-auto relative z-[1] w-full">
            <div className="inline-flex items-center gap-2 text-[0.8rem] font-medium tracking-[0.08em] text-white/50 border border-white/10 rounded-[40px] py-[0.35rem] px-4 mb-[clamp(2rem,4vh,3.5rem)] backdrop-blur-[8px]">
              <span className="w-[6px] h-[6px] rounded-full animate-badge-pulse" style={{ backgroundColor: '#F26622' }}></span>
              Shopify Stores
            </div>

            <h1 className="font-display leading-[0.92] tracking-[-0.02em] mb-[clamp(2.5rem,5vh,4rem)]">
              <span className="block font-black text-[clamp(3rem,8.5vw,9.5rem)] tracking-[-0.03em] text-white leading-[0.95] mb-[0.2em]">Shopify stores that</span>
              <em className="font-serif italic font-normal text-[clamp(3.5rem,10vw,11rem)] text-gradient leading-[0.95]">actually sell</em>
            </h1>

            <div className="flex items-start justify-between gap-[clamp(2rem,4vw,5rem)] flex-wrap mb-[clamp(2.5rem,5vh,4rem)]">
              <p className="text-[clamp(0.9rem,1.3vw,1.05rem)] text-white/70 leading-[1.7] max-w-[440px]">
                From zero to a fully operational online store in 7 days. Custom design, complete payment and shipping setup, product catalog ready — everything your business needs to start selling online today.
              </p>
              <div className="flex items-center gap-6 shrink-0 flex-wrap pt-[0.4rem]">
                <a href="/contact" className="btn-dark inline-flex items-center gap-2 text-[0.95rem] font-semibold py-[0.9rem] px-8 rounded-full bg-white text-dark transition-all duration-400 ease-out-expo relative overflow-hidden whitespace-nowrap" data-cursor="link">
                  <span className="btn-text relative z-[1]">Build My Store</span>
                  <span className="btn-icon relative z-[1] flex transition-transform duration-300 ease-out-expo">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M6 14L14 6M14 6H6M14 6V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                </a>
                <a href="/our-work" className="btn-ghost inline-flex items-center text-[0.95rem] font-semibold text-white/70 py-[0.9rem] border-b-[2px] border-white/20 transition-all duration-[350ms] relative hover:text-white hover:border-white/60" data-cursor="link">
                  See Our Stores
                </a>
              </div>
            </div>

            <div className="hero-stats flex items-center gap-8 pt-6 border-t border-white/[0.06] flex-wrap">
              <div className="stat flex flex-col gap-[0.15rem]">
                <span className="stat-num text-[clamp(1.1rem,1.8vw,1.5rem)] font-extrabold text-white tracking-[-0.02em]">30+</span>
                <span className="stat-label text-xs font-medium text-white/55 uppercase tracking-[0.08em]">Stores Launched</span>
              </div>
              <div className="stat-div w-px h-10 bg-white/[0.08]"></div>
              <div className="stat flex flex-col gap-[0.15rem]">
                <span className="stat-num text-[clamp(1.1rem,1.8vw,1.5rem)] font-extrabold text-white tracking-[-0.02em]">7 Days</span>
                <span className="stat-label text-xs font-medium text-white/55 uppercase tracking-[0.08em]">Go Live</span>
              </div>
              <div className="stat-div w-px h-10 bg-white/[0.08]"></div>
              <div className="stat flex flex-col gap-[0.15rem]">
                <span className="stat-num text-[clamp(1.1rem,1.8vw,1.5rem)] font-extrabold text-white tracking-[-0.02em]">Full</span>
                <span className="stat-label text-xs font-medium text-white/55 uppercase tracking-[0.08em]">Setup Included</span>
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
                <div key={f.title} className="bg-white rounded-[20px] p-8 border border-black/[0.05] transition-shadow duration-300 hover:shadow-card relative overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{ background: 'linear-gradient(90deg, #F26622, transparent)' }}
                  />
                  <div className="w-11 h-11 rounded-full flex items-center justify-center mb-6 border border-black/[0.06]"
                    style={{ background: 'rgba(242,102,34,0.08)' }}>
                    <span className="text-lg" style={{ color: '#F26622' }}>{f.icon}</span>
                  </div>
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
                <em className="font-serif italic font-normal text-[1.02em] text-gradient">for selling</em>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: "◎", title: "Easy to Manage", desc: "Add products, track orders, and manage inventory without touching a single line of code. Shopify's dashboard is intuitive from day one." },
                { icon: "◈", title: "Built to Scale", desc: "Whether you're selling 10 products or 10,000, Shopify grows with you. No platform migrations, no performance drops." },
                { icon: "✦", title: "App Ecosystem", desc: "Over 8,000 apps for reviews, upsells, loyalty programs, email marketing, and more — all integrate in a few clicks." },
              ].map((w) => (
                <div key={w.title} className="p-8 rounded-[20px] border border-white/[0.07] relative overflow-hidden group transition-colors duration-300 hover:border-white/[0.14]"
                  style={{ background: 'rgba(255,255,255,0.02)' }}>
                  <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{ background: 'linear-gradient(90deg, #F26622, transparent)' }}
                  />
                  <div className="w-11 h-11 rounded-full flex items-center justify-center mb-6 border border-white/10"
                    style={{ background: 'rgba(242,102,34,0.12)' }}>
                    <span className="text-lg" style={{ color: '#F26622' }}>{w.icon}</span>
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
