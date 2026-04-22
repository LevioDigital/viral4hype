"use client";

import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CTABanner from "../components/CTABanner";

type Category = "All" | "Website" | "Shopify" | "Marketing";

const projects = [
  { slug: "alumgates", title: "AlumGates", image: "/images/alumgates.png", category: "Website" as Category, tags: ["Web Design", "Web Development"] },
  { slug: "magazinul-de-interfoane", title: "Magazinul de Interfoane", image: "/images/magazinuldeinterfoane.png", category: "Website" as Category, tags: ["Web Design", "Web Development"] },
  { slug: "daimara", title: "Daimara", image: "/images/daimara.png", category: "Shopify" as Category, tags: ["Shopify"] },
  { slug: "pc-doc", title: "PC Doc", image: "/images/pc-doc.png", category: "Shopify" as Category, tags: ["Shopify"] },
  { slug: "greystone-heritage", title: "Epok", image: "/images/epok.png", category: "Shopify" as Category, tags: ["Shopify"] },
  { slug: "lc-computers", title: "€18K → €367K", image: "/images/google_ads.png", category: "Marketing" as Category, tags: ["Case Study", "Google Ads"] },
];

const categories: Category[] = ["All", "Website", "Shopify", "Marketing"];

export default function OurWorkPage() {
  const [active, setActive] = useState<Category>("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-white focus:text-dark focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold focus:text-sm">
        Skip to main content
      </a>
      <Nav />

      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden min-h-svh flex flex-col justify-end pt-[120px] pb-[clamp(3rem,6vh,5rem)] px-container-x" style={{ backgroundColor: '#180A03', backgroundImage: 'radial-gradient(circle 700px at 95% 0%, rgba(242,102,34,0.30) 0%, transparent 70%), radial-gradient(circle 520px at -5% 100%, rgba(8,117,233,0.12) 0%, transparent 70%)' }}>

          <div className="max-w-[1200px] mx-auto relative z-[1] w-full">
            <div className="inline-flex items-center gap-2 text-[0.8rem] font-medium tracking-[0.08em] text-white/50 border border-white/10 rounded-[40px] py-[0.35rem] px-4 mb-[clamp(2rem,4vh,3.5rem)] backdrop-blur-[8px]">
              <span className="w-[6px] h-[6px] rounded-full animate-badge-pulse" style={{ backgroundColor: '#F26622' }}></span>
              Portfolio
            </div>

            <h1 className="font-display leading-[0.92] tracking-[-0.02em] mb-[clamp(2.5rem,5vh,4rem)]">
              <span className="block font-black text-[clamp(3rem,8.5vw,9.5rem)] tracking-[-0.03em] text-white leading-[0.95] mb-[0.2em]">Work that</span>
              <em className="font-serif italic font-normal text-[clamp(3.5rem,10vw,11rem)] text-gradient leading-[0.95]">speaks for itself</em>
            </h1>

            <div className="flex items-start justify-between gap-[clamp(2rem,4vw,5rem)] flex-wrap mb-[clamp(2.5rem,5vh,4rem)]">
              <p className="text-[clamp(0.9rem,1.3vw,1.05rem)] text-white/70 leading-[1.7] max-w-[440px]">
                Every project is built with intention. Clean code, sharp design, and a clear focus on the client&apos;s business goals.
              </p>
              <div className="flex items-center gap-6 shrink-0 flex-wrap pt-[0.4rem]">
                <a href="/contact" className="btn-dark inline-flex items-center gap-2 text-[0.95rem] font-semibold py-[0.9rem] px-8 rounded-full bg-white text-dark transition-all duration-400 ease-out-expo relative overflow-hidden whitespace-nowrap" data-cursor="link">
                  <span className="btn-text relative z-[1]">Start a Project</span>
                  <span className="btn-icon relative z-[1] flex transition-transform duration-300 ease-out-expo">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M6 14L14 6M14 6H6M14 6V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                </a>
                <a href="/contact" className="btn-ghost inline-flex items-center text-[0.95rem] font-semibold text-white/70 py-[0.9rem] border-b-[2px] border-white/20 transition-all duration-[350ms] relative hover:text-white hover:border-white/60" data-cursor="link">
                  Let&apos;s Talk
                </a>
              </div>
            </div>

            <div className="hero-stats flex items-center gap-8 pt-6 border-t border-white/[0.06] flex-wrap">
              <div className="stat flex flex-col gap-[0.15rem]">
                <span className="stat-num text-[clamp(1.1rem,1.8vw,1.5rem)] font-extrabold text-white tracking-[-0.02em]">100+</span>
                <span className="stat-label text-xs font-medium text-white/55 uppercase tracking-[0.08em]">Projects</span>
              </div>
              <div className="stat-div w-px h-10 bg-white/[0.08]"></div>
              <div className="stat flex flex-col gap-[0.15rem]">
                <span className="stat-num text-[clamp(1.1rem,1.8vw,1.5rem)] font-extrabold text-white tracking-[-0.02em]">4+ Years</span>
                <span className="stat-label text-xs font-medium text-white/55 uppercase tracking-[0.08em]">Experience</span>
              </div>
              <div className="stat-div w-px h-10 bg-white/[0.08]"></div>
              <div className="stat flex flex-col gap-[0.15rem]">
                <span className="stat-num text-[clamp(1.1rem,1.8vw,1.5rem)] font-extrabold text-white tracking-[0.18em]">★★★★★</span>
                <span className="stat-label text-xs font-medium text-white/55 uppercase tracking-[0.08em]">Reviews</span>
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

        {/* Filter + Grid */}
        <section className="py-section-y px-container-x bg-off-white">
          <div className="max-w-[1200px] mx-auto">
            {/* Filter bar */}
            <div className="flex items-center gap-3 flex-wrap mb-[clamp(2rem,4vh,3rem)]">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`text-[0.85rem] font-semibold py-2 px-5 rounded-full transition-all duration-300 ${
                    active === cat
                      ? "text-white"
                      : "text-text-sec-dark bg-black/[0.06] hover:bg-black/[0.10]"
                  }`}
                  style={active === cat ? { backgroundColor: '#F26622' } : {}}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Project grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project) => (
                <a
                  key={project.slug}
                  href={`/our-work/${project.slug}`}
                  className="group block rounded-[20px] overflow-visible origin-bottom will-change-transform"
                  data-cursor="link"
                >
                  <div className="relative rounded-[20px] overflow-hidden aspect-[4/3]" style={{ background: 'rgba(0,0,0,0.03)' }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      width="1440"
                      height="1080"
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.06]"
                    />
                    <div
                      className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-400 text-white font-bold"
                      style={{ background: 'linear-gradient(160deg, rgba(242,102,34,0.7) 0%, rgba(180,60,10,0.8) 100%)' }}
                    >
                      <span className="text-base font-bold">View Project</span>
                      <svg width="22" height="22" viewBox="0 0 20 20" fill="none"><path d="M6 14L14 6M14 6H6M14 6V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                  </div>
                  <div className="pt-4 px-2">
                    <h3 className="font-display text-[clamp(0.95rem,1.5vw,1.2rem)] font-bold text-text-dark mb-[0.4rem] tracking-[-0.01em]">{project.title}</h3>
                    <div className="flex gap-[0.4rem] flex-wrap">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[0.72rem] font-medium tracking-[0.04em] py-1 px-[0.7rem] rounded-full bg-black/5 text-text-sec-dark">{tag}</span>
                      ))}
                    </div>
                  </div>
                </a>
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
