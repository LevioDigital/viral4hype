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
        <section className="relative overflow-hidden pt-[clamp(7rem,14vh,11rem)] pb-section-y px-container-x" style={{ background: '#180A03' }}>
          <div className="absolute top-[-20%] right-[-10%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full pointer-events-none hidden lg:block"
            style={{ background: 'radial-gradient(circle, rgba(242,102,34,0.10) 0%, transparent 65%)' }}
          />
          <div className="absolute bottom-[10%] left-[-8%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full pointer-events-none hidden lg:block"
            style={{ background: 'radial-gradient(circle, rgba(41,213,90,0.06) 0%, transparent 65%)' }}
          />

          <div className="max-w-[1200px] mx-auto relative z-[1]">
            <div className="inline-flex items-center gap-2 text-[0.8rem] font-medium tracking-[0.08em] text-white/50 border border-white/10 rounded-[40px] py-[0.35rem] px-4 mb-[clamp(1.5rem,3vh,2.5rem)] backdrop-blur-[8px]">
              <span className="w-[6px] h-[6px] rounded-full" style={{ backgroundColor: '#F26622' }}></span>
              Shopify Stores
            </div>

            <h1 className="font-display font-black text-[clamp(2.8rem,6.5vw,7.5rem)] leading-[0.93] tracking-[-0.03em] text-white mb-[clamp(1.5rem,3vh,2.5rem)]">
              Shopify stores that<br />
              <em className="font-serif italic font-normal text-[1.05em]">actually sell</em>
            </h1>

            <p className="text-[clamp(0.9rem,1.3vw,1.05rem)] text-white/65 leading-[1.7] max-w-[500px] mb-[clamp(2rem,4vh,3rem)]">
              From zero to a fully operational online store in 7 days. Custom design, complete payment and shipping setup, product catalog ready — everything your business needs to start selling online today.
            </p>

            <div className="flex items-center gap-8 pt-6 border-t border-white/[0.06] flex-wrap mb-[clamp(2.5rem,5vh,4rem)]">
              <div className="flex flex-col gap-[0.15rem]">
                <span className="text-[clamp(1.1rem,1.8vw,1.5rem)] font-extrabold text-white tracking-[-0.02em]">30+</span>
                <span className="text-xs font-medium text-white/55 uppercase tracking-[0.08em]">Stores Launched</span>
              </div>
              <div className="w-px h-10 bg-white/[0.08]"></div>
              <div className="flex flex-col gap-[0.15rem]">
                <span className="text-[clamp(1.1rem,1.8vw,1.5rem)] font-extrabold text-white tracking-[-0.02em]">7 Days</span>
                <span className="text-xs font-medium text-white/55 uppercase tracking-[0.08em]">Go Live</span>
              </div>
              <div className="w-px h-10 bg-white/[0.08]"></div>
              <div className="flex flex-col gap-[0.15rem]">
                <span className="text-[clamp(1.1rem,1.8vw,1.5rem)] font-extrabold text-white tracking-[-0.02em]">Full</span>
                <span className="text-xs font-medium text-white/55 uppercase tracking-[0.08em]">Setup Included</span>
              </div>
            </div>

            <div className="flex items-center gap-6 flex-wrap">
              <a href="/contact" className="inline-flex items-center gap-2 text-[0.95rem] font-semibold py-[0.9rem] px-8 rounded-full bg-white text-dark transition-all duration-400 ease-out-expo" data-cursor="link">
                Build My Store
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M6 14L14 6M14 6H6M14 6V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
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
                Everything Included
              </div>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.8rem)] font-extrabold leading-[1.05] tracking-[-0.02em] text-text-dark">
                One price,<br />
                <em className="font-serif italic font-normal text-[1.02em] text-gradient">zero surprises</em>
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
                <em className="font-serif italic font-normal text-[1.02em]" style={{ color: '#F26622' }}>for selling</em>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Easy to Manage", desc: "Add products, track orders, and manage inventory without touching a single line of code. Shopify's dashboard is intuitive from day one." },
                { title: "Built to Scale", desc: "Whether you're selling 10 products or 10,000, Shopify grows with you. No platform migrations, no performance drops." },
                { title: "App Ecosystem", desc: "Over 8,000 apps for reviews, upsells, loyalty programs, email marketing, and more — all integrate in a few clicks." },
              ].map((w) => (
                <div key={w.title} className="p-8 rounded-[20px] border border-white/[0.07]" style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mb-6 border border-white/10" style={{ background: 'rgba(242,102,34,0.12)' }}>
                    <span style={{ color: '#F26622', fontSize: '1.2rem' }}>◎</span>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((s) => (
                <div key={s.num} className="relative p-8 rounded-[20px] border border-black/[0.05] bg-white">
                  <div className="text-[3rem] font-extrabold leading-none mb-5 tracking-[-0.02em]" style={{ color: 'rgba(242,102,34,0.25)' }}>{s.num}</div>
                  <h3 className="font-display text-[1rem] font-bold text-text-dark mb-2">{s.title}</h3>
                  <p className="text-[0.85rem] text-text-sec-dark leading-[1.65]">{s.desc}</p>
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
