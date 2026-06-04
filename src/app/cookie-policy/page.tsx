import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Cookie Policy | viral4hype",
  description: "Cookie Policy for viral4hype.com — how we use cookies and how you can control them.",
  path: "/cookie-policy",
});

const sections = [
  {
    title: "What Are Cookies?",
    content: `Cookies are small pieces of text stored in your web browser by a website you visit. They allow the Site, or a third party, to recognize your browser and make your visit easier or the Site more useful. We also use similar technologies such as tracking pixels, which work in the same way.`,
  },
  {
    title: "Your Consent",
    content: `When you first visit the Site, a cookie banner lets you accept all cookies, reject all non-essential cookies, or choose which categories you allow. Non-essential cookies (analytics and marketing) are not loaded until you give consent. Your choice is stored on your device, and analytics and advertising tags stay disabled by default through Google Consent Mode until you opt in.`,
  },
  {
    title: "Necessary Cookies",
    content: `These cookies are essential for the Site to function — for example, enabling page navigation, submitting forms, and keeping the Site secure. The Site cannot work properly without them, so they are always active and do not require consent.`,
  },
  {
    title: "Analytics Cookies",
    content: `With your consent, we use Google Analytics to understand how visitors use the Site so we can improve it. This may involve information such as your approximate location, browser type, and pages visited. The data is used in aggregate to measure traffic and performance.`,
  },
  {
    title: "Marketing Cookies",
    content: `With your consent, we use Google Ads and the Meta (Facebook) Pixel to measure the effectiveness of our advertising, track conversions, and show you relevant ads on other platforms. These cookies are only set if you accept the Marketing category.`,
  },
  {
    title: "Withdrawing or Changing Your Consent",
    content: `You can change or withdraw your consent at any time by clicking "Cookie Settings" in the footer of any page, which reopens the preferences panel. You can also delete or block cookies through your browser settings, though some features may stop working. Withdrawing consent does not affect data already processed before your change.`,
  },
  {
    title: "Changes to This Cookie Policy",
    content: `We may update this Cookie Policy from time to time. We will post any changes on this page and, where the update is material, ask for your consent again.`,
  },
];

export default function CookiePolicyPage() {
  return (
    <>
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
            <p className="text-white/40 text-sm">Last updated: June 3, 2026</p>
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
