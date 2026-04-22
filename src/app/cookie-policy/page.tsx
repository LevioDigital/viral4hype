import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Cookie Policy | viral4hype",
  description: "Cookie Policy for viral4hype.com — how we use cookies and how you can control them.",
};

const sections = [
  {
    title: "What Are Cookies?",
    content: `Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the Site or a third-party to recognize you and make your next visit easier and the Site more useful to you.`,
  },
  {
    title: "Essential Cookies",
    content: `These cookies are essential to provide you with services available through our Site and to enable you to use some of its features. Without these cookies, the services that you have asked for cannot be provided, and we only use these cookies to provide you with those services.`,
  },
  {
    title: "Analytics Cookies",
    content: `These cookies allow us to analyze your use of the Site and track website performance so we can improve the quality and effectiveness of our services. These cookies may collect information such as your IP address, browser type, and pages visited on the Site. This information is anonymous and aggregated, and it is only used to help us understand how the Site is being used.`,
  },
  {
    title: "Managing Cookies",
    content: `You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer, and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site, and some services and functionalities may not work.`,
  },
  {
    title: "Changes to This Cookie Policy",
    content: `We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page.`,
  },
];

export default function CookiePolicyPage() {
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold focus:text-sm">
        Skip to main content
      </a>
      <Nav />
      <main id="main-content" style={{ background: "#180A03" }}>
        {/* Hero */}
        <section
          className="px-container-x pb-[clamp(3rem,6vh,5rem)]"
          style={{
            background: "#180A03",
            backgroundImage:
              "radial-gradient(circle 600px at 80% 0%, rgba(242,102,34,0.12) 0%, transparent 70%)",
            paddingTop: "clamp(9rem, 18vh, 13rem)",
          }}
        >
          <div className="max-w-[760px] mx-auto">
            <p
              className="text-[0.7rem] font-bold uppercase tracking-[0.18em] mb-5"
              style={{ color: "#F26622" }}
            >
              Legal
            </p>
            <h1 className="font-display font-black text-white leading-[1.05] tracking-[-0.02em] mb-5" style={{ fontSize: "clamp(2.4rem,5vw,4rem)" }}>
              Cookie Policy
            </h1>
            <p className="text-white/40 text-sm">Last updated: February 14, 2024</p>
          </div>
        </section>

        {/* Divider */}
        <div className="px-container-x">
          <div className="max-w-[760px] mx-auto border-t border-white/8" />
        </div>

        {/* Content */}
        <section className="px-container-x py-[clamp(4rem,8vh,7rem)]" style={{ background: "#180A03" }}>
          <div className="max-w-[760px] mx-auto space-y-14">
            {sections.map((s) => (
              <div key={s.title}>
                <h2
                  className="text-[0.68rem] font-bold uppercase tracking-[0.18em] mb-5"
                  style={{ color: "#F26622" }}
                >
                  {s.title}
                </h2>
                <p className="text-white/85 text-[1rem] leading-[1.85]">{s.content}</p>
              </div>
            ))}

            {/* Contact */}
            <div>
              <h2 className="text-[0.68rem] font-bold uppercase tracking-[0.18em] mb-5" style={{ color: "#F26622" }}>
                Contact Us
              </h2>
              <p className="text-white/85 text-[1rem] leading-[1.85]">
                If you have any questions about this Cookie Policy, please contact us at:{" "}
                <a
                  href="mailto:contact@viral4hype.com"
                  className="underline underline-offset-4 transition-colors hover:text-white"
                  style={{ color: "#F26622" }}
                >
                  contact@viral4hype.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
