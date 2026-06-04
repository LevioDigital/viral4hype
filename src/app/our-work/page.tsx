import type { Metadata } from "next";
import Image from "next/image";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Our Work — Websites, Shopify Stores & Ad Campaigns | viral4hype",
  description:
    "Selected projects from viral4hype — custom websites, Shopify stores and performance marketing campaigns built for businesses across Romania and Europe.",
  path: "/our-work",
});

const ACCENT = "#F26622";
const DARK = "#180A03";

type Category = "All" | "Website" | "Shopify" | "Marketing";

const projects = [
  { slug: "alumgates", title: "AlumGates", image: "/images/alumgates.png", category: "Website" as Category, tags: ["Web Development", "Content Creation", "Social Media Management", "Google Ads", "Meta Ads"], url: "https://alumgates.ro/" },
  { slug: "greystone-heritage", title: "Epok", image: "/images/epok.png", category: "Shopify" as Category, tags: ["Shopify", "Meta Ads", "Email Marketing"], url: "https://epok.ro/" },
  { slug: "lc-computers", title: "Easy Equipment", image: "/images/easy_equipment.jpeg", category: "Marketing" as Category, tags: ["Google Ads"], url: "https://easyequipment.com/" },
  { slug: "pc-doc", title: "PC Doc", image: "/images/pc-doc.png", category: "Shopify" as Category, tags: ["Shopify"], url: "https://pc-doc.ro/" },
  { slug: "magazinul-de-interfoane", title: "Magazinul de Interfoane", image: "/images/magazinuldeinterfoane.png", category: "Website" as Category, tags: ["Web Design", "Web Development"], url: "https://magazinuldeinterfoane.ro/" },
  { slug: "daimara", title: "Daimara", image: "/images/daimara.png", category: "Shopify" as Category, tags: ["Shopify", "Google Ads", "Meta Ads", "Content Creation", "Email Marketing"], url: "https://daimara.ro/" },
  { slug: "din-munte", title: "Din Munte", image: "/images/dinmunte.png", category: "Website" as Category, tags: ["Web Design", "Web Development"], url: "https://dinmunte.ro/" },
  { slug: "british-football-school", title: "British Football School", image: "/images/britishfotbal.png", category: "Website" as Category, tags: ["Web Design", "Web Development"], url: "https://www.britishfootballschool.com/" },
];

const marqueeItems = [
  "Web Development", "Shopify Stores", "Meta Ads", "Google Ads", "Content Creation",
  "Email Marketing", "Web Design", "Social Media", "Performance Max", "Branding",
  "SEO Optimized", "Conversion Focused",
];

/* 03 — Capabilities behind every project */
const capabilities = [
  {
    icon: "website",
    label: "Custom Websites",
    title: "Websites Built",
    italic: "To Convert",
    desc: "Fast, modern, performance-focused websites engineered to build trust and generate enquiries.",
    href: "/websites",
    cta: "Explore Websites",
  },
  {
    icon: "shopify",
    label: "Shopify Stores",
    title: "Stores Built",
    italic: "To Scale",
    desc: "Complete Shopify ecommerce systems — design, migrations, automation and speed, ready for ads.",
    href: "/shopify",
    cta: "Explore Shopify",
  },
  {
    icon: "marketing",
    label: "Performance Marketing",
    title: "Systems That",
    italic: "Drive Growth",
    desc: "Google, Meta & TikTok ad systems built for qualified leads, sales and predictable scaling.",
    href: "/marketing",
    cta: "Explore Marketing",
  },
];

const heroChips = ["Web Development", "Shopify", "Meta Ads", "Google Ads"];
const heroTiles = [
  { label: "Experience", value: "6+ Yrs" },
  { label: "Retention", value: "95%" },
  { label: "Satisfaction", value: "100%" },
];

const eyebrowDot = { width: 5, height: 5, borderRadius: 999, backgroundColor: ACCENT, flexShrink: 0, display: "inline-block" as const };

/* layout CSS — globals.css is a precompiled Tailwind build, so responsive grid
   variants (md:/lg:grid-cols-*) and arbitrary fr-templates silently don't render.
   We define every responsive grid we rely on here as plain CSS instead. */
const layoutCss = `
.ow-hero{display:grid;grid-template-columns:1fr;gap:clamp(2.5rem,5vw,4rem);align-items:center;}
@media(min-width:1024px){.ow-hero{grid-template-columns:1.04fr minmax(0,500px);}}
.ow-grid{display:grid;grid-template-columns:1fr;gap:1.5rem;}
@media(min-width:640px){.ow-grid{grid-template-columns:repeat(2,minmax(0,1fr));}}
.ow-cards{display:grid;grid-template-columns:1fr;gap:1.25rem;}
@media(min-width:768px){.ow-cards{grid-template-columns:repeat(3,minmax(0,1fr));}}
.ow-tiles{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:0.5rem;}
.mk-link .mk-arrow{transition:transform .3s cubic-bezier(.19,1,.22,1);}
.mk-link:hover .mk-arrow{transform:translateX(4px);}
`;

const arrowSvg = (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M6 14L14 6M14 6H6M14 6V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

/* Marketing-style eyebrow — accent number + uppercase label (no pill). */
function Eyebrow({ num, label, center = false, dark = false }: { num: string; label: string; center?: boolean; dark?: boolean }) {
  return (
    <div className={`flex items-center ${center ? "justify-center" : ""}`} style={{ gap: "0.62rem", marginBottom: center ? "1.1rem" : "1rem" }}>
      <span className="font-display font-bold" style={{ fontSize: "0.8rem", letterSpacing: "0.05em", color: ACCENT }}>{num}</span>
      <span style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: dark ? "rgba(255,255,255,0.45)" : "rgba(5,15,30,0.5)" }}>{label}</span>
    </div>
  );
}

function CapIcon({ name }: { name: string }) {
  const common = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  if (name === "website") return (<svg {...common}><rect x="3" y="4" width="18" height="16" rx="1.5" /><path d="M3 9h18" /><circle cx="6" cy="6.5" r="0.6" fill="currentColor" stroke="none" /></svg>);
  if (name === "shopify") return (<svg {...common}><path d="M3 9l1.8-4.5h14.4L21 9" /><path d="M5 9v10h14V9" /><path d="M3 9h18" /><path d="M10 19v-5h4v5" /></svg>);
  return (<svg {...common}><path d="M4 20V10M10 20V4M16 20v-6M22 20H2" /><path d="M5 9l4-4 3 3 5-6" /></svg>);
}

export default function OurWorkPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: layoutCss }} />
      <Nav />

      <main id="main-content">

        {/* ── 01 HERO · DARK ────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden min-h-svh flex flex-col justify-center px-container-x" style={{ background: DARK, paddingTop: "clamp(130px,18vh,190px)", paddingBottom: "clamp(3rem,8vh,6rem)" }}>
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ backgroundImage: "radial-gradient(circle 720px at 78% 18%, rgba(242,102,34,0.20), transparent 58%), radial-gradient(circle 520px at 0% 100%, rgba(242,102,34,0.05), transparent 70%)" }} />
          <div className="absolute select-none pointer-events-none max-lg:hidden font-display font-black leading-none" aria-hidden="true" style={{ right: "1.5%", bottom: "-6%", fontSize: "clamp(10rem,20vw,22rem)", color: "rgba(255,255,255,0.025)", letterSpacing: "-0.03em", whiteSpace: "nowrap" }}>Work</div>
          <div className="absolute pointer-events-none" aria-hidden="true" style={{ top: "22%", right: "2%", width: 200, height: 170, opacity: 0.55, backgroundImage: "radial-gradient(rgba(242,102,34,0.55) 1px, transparent 1.4px)", backgroundSize: "15px 15px", WebkitMaskImage: "radial-gradient(circle at center, black, transparent 75%)", maskImage: "radial-gradient(circle at center, black, transparent 75%)" }} />

          <div className="max-w-[1200px] mx-auto relative w-full" style={{ zIndex: 1 }}>
            <div className="ow-hero">
              {/* Left copy */}
              <div>
                <Eyebrow num="01" label="Selected Work" dark />

                <h1 className="font-display" style={{ letterSpacing: "-0.02em", marginBottom: "clamp(1.3rem,2.6vh,1.8rem)" }}>
                  <span className="block font-display font-black text-white" style={{ fontSize: "clamp(2.6rem,5.3vw,5rem)", letterSpacing: "-0.035em", lineHeight: 0.98 }}>Work That</span>
                  <span className="block font-serif italic text-gradient" style={{ fontSize: "clamp(2.9rem,6vw,5.6rem)", lineHeight: 1.02, marginTop: "0.02em" }}>Speaks For Itself</span>
                </h1>

                <p className="text-white/70" style={{ fontSize: "clamp(1rem,1.3vw,1.12rem)", lineHeight: 1.7, maxWidth: "470px", marginBottom: "clamp(1.8rem,3.5vh,2.4rem)" }}>
                  Every project is built with intention — clean code, sharp design and a clear focus on the client&apos;s business goals. Websites, Shopify stores and ad systems that perform.
                </p>

                <div className="flex items-center flex-wrap" style={{ gap: "1.25rem", marginBottom: "clamp(1.5rem,3vh,2rem)" }}>
                  <a href="/contact" className="btn-dark inline-flex items-center gap-2 text-[0.95rem] font-semibold py-[0.9rem] px-8 rounded-full bg-white text-dark transition-all duration-400 ease-out-expo relative overflow-hidden whitespace-nowrap" data-cursor="link">
                    <span className="btn-text relative z-[1]">Book A Call</span>
                    <span className="btn-icon relative z-[1] flex transition-transform duration-300 ease-out-expo">{arrowSvg}</span>
                  </a>
                </div>

                <div className="flex items-center flex-wrap" style={{ gap: "0.75rem", fontSize: "0.74rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>
                  {heroChips.map((p, i) => (
                    <span key={p} className="inline-flex items-center" style={{ gap: "0.75rem" }}>
                      {i > 0 && <span style={{ color: ACCENT }}>·</span>}
                      <span>{p}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: portfolio snapshot card */}
              <div className="relative">
                <div className="absolute pointer-events-none" aria-hidden="true" style={{ inset: "-16% -10% -18% -4%", borderRadius: 999, background: "radial-gradient(circle at 60% 42%, rgba(242,102,34,0.24), transparent 60%)" }} />
                <div className="absolute pointer-events-none" aria-hidden="true" style={{ top: "-24%", right: "-12%", width: 300, height: 300, borderRadius: 999, background: "radial-gradient(circle at 32% 32%, rgba(255,255,255,0.04), rgba(242,102,34,0.10) 42%, transparent 62%)", border: "1px solid rgba(242,102,34,0.12)" }} />

                <div className="relative overflow-hidden" style={{ borderRadius: 18, padding: "clamp(1.1rem,1.8vw,1.5rem)", background: "linear-gradient(160deg, rgba(30,17,9,0.97), rgba(13,8,6,0.97))", border: "1px solid rgba(255,255,255,0.10)", boxShadow: "0 34px 90px -34px rgba(0,0,0,0.85), inset 0 1px 0 rgba(255,255,255,0.05)" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #F26622, transparent)" }} />
                  <div className="flex items-center justify-between" style={{ marginBottom: "1.3rem" }}>
                    <div className="flex items-center" style={{ gap: "0.6rem" }}>
                      <span className="flex" style={{ gap: "0.34rem" }} aria-hidden="true">
                        <span style={{ width: 8, height: 8, borderRadius: 999, background: "rgba(255,255,255,0.16)" }} />
                        <span style={{ width: 8, height: 8, borderRadius: 999, background: "rgba(255,255,255,0.1)" }} />
                        <span style={{ width: 8, height: 8, borderRadius: 999, background: "rgba(242,102,34,0.55)" }} />
                      </span>
                      <span className="font-display text-white/90" style={{ fontSize: "0.88rem", fontWeight: 700, letterSpacing: "-0.01em" }}>Portfolio Overview</span>
                    </div>
                    <span className="flex items-center" style={{ gap: "0.34rem", fontSize: "0.65rem", fontWeight: 600, color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 999, padding: "0.26rem 0.66rem" }}>
                      Since 2021
                    </span>
                  </div>

                  {/* hero stat */}
                  <div className="flex items-baseline" style={{ gap: "0.55rem", marginBottom: "0.25rem" }}>
                    <span className="font-display font-black text-white" style={{ fontSize: "clamp(2.2rem,4vw,2.8rem)", letterSpacing: "0.04em", lineHeight: 1, color: "#fff" }}>★★★★★</span>
                    <span className="font-display font-black text-white" style={{ fontSize: "clamp(1.4rem,2.4vw,1.8rem)", letterSpacing: "-0.02em", lineHeight: 1 }}>5.0</span>
                  </div>
                  <span className="block text-white/45" style={{ fontSize: "0.72rem", marginBottom: "1.2rem" }}>Rated by the clients we build for</span>

                  {/* metric tiles */}
                  <div className="ow-tiles" style={{ marginBottom: "1.1rem" }}>
                    {heroTiles.map((t) => (
                      <div key={t.label} style={{ borderRadius: 11, padding: "0.7rem 0.6rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                        <span className="block font-display font-bold text-white" style={{ fontSize: "1.05rem", letterSpacing: "-0.02em", lineHeight: 1 }}>{t.value}</span>
                        <span className="block text-white/45" style={{ fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", marginTop: "0.35rem" }}>{t.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* chips */}
                  <div className="flex flex-wrap" style={{ gap: "0.4rem" }}>
                    {heroChips.map((c) => (
                      <span key={c} className="inline-flex items-center text-white/70" style={{ gap: "0.4rem", fontSize: "0.68rem", fontWeight: 600, padding: "0.4rem 0.7rem", borderRadius: 999, background: "rgba(242,102,34,0.08)", border: "1px solid rgba(242,102,34,0.2)" }}>
                        <span style={{ width: 4, height: 4, borderRadius: 999, background: ACCENT }} />{c}
                      </span>
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

        {/* ── 02 SELECTED WORK · LIGHT ──────────────────────────────────────── */}
        <section className="px-container-x bg-off-white text-text-dark" style={{ paddingTop: "clamp(3.5rem,8vh,7rem)", paddingBottom: "clamp(3.5rem,8vh,7rem)" }}>
          <div className="max-w-[1200px] mx-auto">
            <div style={{ marginBottom: "clamp(2.2rem,4vh,3rem)" }}>
              <Eyebrow num="02" label="The Portfolio" />
              <h2 className="font-display font-extrabold text-text-dark" style={{ fontSize: "clamp(1.8rem,3.6vw,3rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                Projects We&apos;re <em className="font-serif italic text-gradient" style={{ fontWeight: 400 }}>Proud Of.</em>
              </h2>
              <p className="text-text-sec-dark" style={{ fontSize: "0.98rem", lineHeight: 1.7, marginTop: "1.1rem", maxWidth: "560px" }}>
                A selection of websites, Shopify stores and marketing campaigns we&apos;ve built for brands that wanted to grow.
              </p>
            </div>

            {/* Project grid */}
            <div className="ow-grid" style={{ marginTop: "clamp(2.2rem,4vh,3rem)" }}>
              {projects.map((project) => (
                <a
                  key={project.slug}
                  href={project.url}
                  target={project.url.startsWith("http") ? "_blank" : undefined}
                  rel={project.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="proj-card group block rounded-card overflow-visible origin-bottom will-change-transform transition-shadow duration-400"
                  data-cursor="link"
                >
                  <div className="relative rounded-card overflow-hidden aspect-[4/3]" style={{ background: "rgba(0,0,0,0.03)" }}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1440}
                      height={1080}
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.06]"
                    />
                    <div
                      className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-400 text-white font-bold text-base"
                      style={{ background: "linear-gradient(160deg, rgba(242,102,34,0.7) 0%, rgba(180,60,10,0.8) 100%)" }}
                    >
                      <span className="text-base font-bold">View Project</span>
                      <svg width="22" height="22" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M6 14L14 6M14 6H6M14 6V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                  </div>
                  <div className="pt-4 px-2">
                    <h3 className="font-display text-[clamp(0.95rem,1.5vw,1.2rem)] font-bold text-text-dark mb-[0.4rem] tracking-[-0.01em]">{project.title}</h3>
                    <div className="flex gap-[0.4rem] flex-wrap">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[0.72rem] font-medium tracking-[0.04em] py-1 px-[0.7rem] rounded-pill bg-black/5 text-text-sec-dark">{tag}</span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── 03 CAPABILITIES · DARK ────────────────────────────────────────── */}
        <section className="px-container-x" style={{ background: DARK, paddingTop: "clamp(3.5rem,8vh,7rem)", paddingBottom: "clamp(3.5rem,8vh,7rem)" }}>
          <div className="max-w-[1200px] mx-auto">
            <div style={{ marginBottom: "clamp(2.5rem,5vh,3.5rem)" }}>
              <Eyebrow num="03" label="What Powers Every Project" dark />
              <h2 className="font-display font-extrabold text-white" style={{ fontSize: "clamp(1.8rem,3.6vw,3rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                Three Disciplines. <em className="font-serif italic text-gradient" style={{ fontWeight: 400 }}>One Standard.</em>
              </h2>
            </div>
            <div className="ow-cards">
              {capabilities.map((c) => (
                <a key={c.href} href={c.href} className="mk-link group flex flex-col transition-all duration-300 hover:-translate-y-1" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 22, padding: "clamp(1.6rem,2.5vw,2.1rem)", position: "relative", overflow: "hidden" }} data-cursor="link">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-400" style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #F26622, transparent)" }} />
                  <span className="flex items-center justify-center" style={{ width: 46, height: 46, borderRadius: 14, color: ACCENT, background: "rgba(242,102,34,0.1)", border: "1px solid rgba(255,255,255,0.08)", marginBottom: "1.3rem" }}><CapIcon name={c.icon} /></span>
                  <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "0.7rem" }}>{c.label}</span>
                  <h3 className="font-display" style={{ marginBottom: "0.9rem" }}>
                    <span className="block font-extrabold text-white" style={{ fontSize: "clamp(1.3rem,2vw,1.6rem)", lineHeight: 1.1, letterSpacing: "-0.01em" }}>{c.title}</span>
                    <span className="block font-serif italic text-gradient" style={{ fontSize: "clamp(1.4rem,2.1vw,1.7rem)", lineHeight: 1.1 }}>{c.italic}</span>
                  </h3>
                  <p className="text-white/55" style={{ fontSize: "0.88rem", lineHeight: 1.65, marginBottom: "1.6rem" }}>{c.desc}</p>
                  <span className="inline-flex items-center font-semibold" style={{ gap: "0.5rem", fontSize: "0.9rem", color: ACCENT, marginTop: "auto" }}>
                    {c.cta} <span className="mk-arrow flex">{arrowSvg}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── 04 CTA · DARK ─────────────────────────────────────────────────── */}
        <section className="px-container-x" style={{ background: DARK, paddingTop: "clamp(3.5rem,8vh,7rem)", paddingBottom: "clamp(4rem,9vh,8rem)" }}>
          <div className="max-w-[1200px] mx-auto">
            <div className="relative overflow-hidden flex items-center justify-between flex-wrap gap-8" style={{ borderRadius: 24, padding: "clamp(2rem,5vw,3.5rem)", background: "linear-gradient(135deg, #1a0c04 0%, #0d0806 100%)", border: "1px solid rgba(242,102,34,0.18)" }}>
              <div className="absolute pointer-events-none" aria-hidden="true" style={{ top: "-30%", right: "-8%", width: "40vw", height: "40vw", maxWidth: 440, maxHeight: 440, borderRadius: 999, background: "radial-gradient(circle, rgba(242,102,34,0.14) 0%, transparent 65%)" }} />
              <div className="relative" style={{ zIndex: 1 }}>
                <div className="flex items-center gap-1.5 text-white/45" style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.8rem" }}>
                  <span style={eyebrowDot}></span>Get Started
                </div>
                <h2 className="font-display font-extrabold text-white" style={{ fontSize: "clamp(1.7rem,3.4vw,2.8rem)", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "0.6rem" }}>
                  Ready To Build <em className="font-serif italic text-gradient" style={{ fontWeight: 400 }}>Your Project?</em>
                </h2>
                <p className="text-white/55" style={{ fontSize: "0.95rem", maxWidth: "460px" }}>
                  Let&apos;s build something great together. Fast delivery, professional results, no upfront costs.
                </p>
              </div>
              <div className="relative flex items-center gap-5 flex-wrap" style={{ zIndex: 1 }}>
                <a href="/contact" className="btn-dark inline-flex items-center gap-2 text-[0.95rem] font-semibold py-[0.9rem] px-8 rounded-full bg-white text-dark transition-all duration-400 ease-out-expo relative overflow-hidden whitespace-nowrap" data-cursor="link">
                  <span className="btn-text relative z-[1]">Start a Project</span>
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
