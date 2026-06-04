import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Cookie Policy | viral4hype",
  description: "Cookie Policy for viral4hype.com — how we use cookies and how you can control them.",
  path: "/cookie-policy",
});

type Block =
  | { type: "p"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "link"; label: string; href: string }
  | { type: "linklist"; items: { label: string; href: string }[] };

type Section = { title: string; body: Block[] };

const sections: Section[] = [
  {
    title: "What Are Cookies?",
    body: [
      {
        type: "p",
        text: "Cookies are small text files stored on your device when you visit a website. They help websites function properly, improve user experience, and provide information about website performance and visitor behavior. We also use similar technologies, such as tracking pixels, which work in the same way.",
      },
    ],
  },
  {
    title: "Your Consent",
    body: [
      {
        type: "p",
        text: "When you first visit our website, a cookie banner lets you accept all cookies, reject all non-essential cookies, or choose which categories you allow. Non-essential cookies (analytics and advertising) are not loaded until you give consent. Your choice is stored on your device, and analytics and advertising tags stay disabled by default through Google Consent Mode until you opt in.",
      },
    ],
  },
  {
    title: "How We Use Cookies",
    body: [
      { type: "p", text: "We use cookies for the following purposes:" },
      { type: "subheading", text: "Essential Cookies" },
      {
        type: "p",
        text: "These cookies are necessary for the website to function properly and cannot be disabled. They may include:",
      },
      {
        type: "list",
        items: ["Security-related cookies", "Session management cookies", "Website functionality cookies"],
      },
      { type: "subheading", text: "Analytics Cookies" },
      {
        type: "p",
        text: "With your consent, we use Google Analytics to better understand how visitors interact with our website. These cookies help us collect information such as:",
      },
      {
        type: "list",
        items: [
          "Pages visited",
          "Time spent on the website",
          "Traffic sources",
          "User interactions",
          "Device and browser information",
        ],
      },
      {
        type: "p",
        text: "This information is used solely to improve our website and services.",
      },
      { type: "subheading", text: "Advertising Cookies" },
      {
        type: "p",
        text: "With your consent, we use advertising technologies provided by Google and Meta (Facebook) to measure campaign performance and improve advertising effectiveness. These cookies may collect information about:",
      },
      {
        type: "list",
        items: ["Website visits", "User interactions", "Conversion events", "Advertising performance"],
      },
      {
        type: "p",
        text: "The data collected helps us understand how our marketing campaigns perform and allows us to improve future advertising efforts.",
      },
    ],
  },
  {
    title: "Third-Party Services",
    body: [
      { type: "p", text: "Our website may use the following third-party services:" },
      { type: "subheading", text: "Google Analytics" },
      { type: "p", text: "Used for website analytics and performance measurement." },
      { type: "link", label: "policies.google.com/privacy", href: "https://policies.google.com/privacy" },
      { type: "subheading", text: "Google Ads" },
      { type: "p", text: "Used for conversion tracking and advertising performance measurement." },
      {
        type: "link",
        label: "policies.google.com/technologies/ads",
        href: "https://policies.google.com/technologies/ads",
      },
      { type: "subheading", text: "Meta Ads (Facebook Pixel)" },
      {
        type: "p",
        text: "Used for advertising measurement, audience creation, and conversion tracking.",
      },
      {
        type: "link",
        label: "facebook.com/privacy/policy",
        href: "https://www.facebook.com/privacy/policy",
      },
    ],
  },
  {
    title: "Managing Cookies",
    body: [
      {
        type: "p",
        text: "You can change or withdraw your consent at any time by clicking “Cookie Settings” in the footer of any page, which reopens the preferences panel. You can also manage or disable cookies through your browser settings. Please note that disabling certain cookies may affect website functionality and your browsing experience.",
      },
      {
        type: "linklist",
        items: [
          { label: "Google Chrome", href: "https://support.google.com/chrome/answer/95647" },
          {
            label: "Mozilla Firefox",
            href: "https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer",
          },
          {
            label: "Microsoft Edge",
            href: "https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09",
          },
          { label: "Safari", href: "https://support.apple.com/en-us/HT201265" },
        ],
      },
      {
        type: "p",
        text: "Refer to your browser’s help documentation for detailed instructions.",
      },
    ],
  },
  {
    title: "Changes To This Policy",
    body: [
      {
        type: "p",
        text: "We may update this Cookie Policy from time to time to reflect changes in technology, legal requirements, or our services. Any updates will be published on this page.",
      },
    ],
  },
];

const paraStyle = { fontSize: "1rem", lineHeight: 1.85 } as const;
const linkStyle = { color: "#F26622", textUnderlineOffset: "4px" } as const;

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "p":
      return (
        <p key={i} className="text-white/85" style={paraStyle}>
          {block.text}
        </p>
      );
    case "subheading":
      return (
        <h3
          key={i}
          className="text-white font-semibold text-[1.05rem]"
          style={{ marginTop: "1.5rem", marginBottom: "0.5rem" }}
        >
          {block.text}
        </h3>
      );
    case "list":
      return (
        <ul
          key={i}
          className="text-white/70"
          style={{ listStyleType: "disc", paddingLeft: "1.25rem" }}
        >
          {block.items.map((item) => (
            <li key={item} style={{ marginBottom: "0.5rem", fontSize: "1rem", lineHeight: 1.7 }}>
              {item}
            </li>
          ))}
        </ul>
      );
    case "link":
      return (
        <p key={i} style={{ fontSize: "0.95rem" }}>
          <a
            href={block.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition-colors hover:text-white"
            style={linkStyle}
          >
            {block.label}
          </a>
        </p>
      );
    case "linklist":
      return (
        <ul key={i} className="text-white/70" style={{ listStyleType: "disc", paddingLeft: "1.25rem" }}>
          {block.items.map((item) => (
            <li key={item.href} style={{ marginBottom: "0.5rem", fontSize: "1rem", lineHeight: 1.7 }}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition-colors hover:text-white"
                style={linkStyle}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      );
  }
}

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
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
              Last updated: June 5, 2026
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="px-container-x">
          <div className="max-w-[760px] mx-auto border-t border-white/8" />
        </div>

        {/* Content */}
        <section className="px-container-x py-[clamp(4rem,8vh,7rem)]" style={{ background: "#180A03" }}>
          <div
            className="max-w-[760px] mx-auto"
            style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}
          >
            {sections.map((s) => (
              <div key={s.title}>
                <h2
                  className="text-[0.68rem] font-bold uppercase tracking-[0.18em] mb-5"
                  style={{ color: "#F26622" }}
                >
                  {s.title}
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {s.body.map(renderBlock)}
                </div>
              </div>
            ))}

            {/* Contact */}
            <div>
              <h2 className="text-[0.68rem] font-bold uppercase tracking-[0.18em] mb-5" style={{ color: "#F26622" }}>
                Contact Us
              </h2>
              <p className="text-white/85" style={paraStyle}>
                If you have any questions regarding this Cookie Policy, please contact us:
              </p>
              <p className="text-white/85" style={{ ...paraStyle, marginTop: "1rem" }}>
                <span className="text-white font-semibold">Viral 4 Hype SRL</span>
                <br />
                Email:{" "}
                <a
                  href="mailto:contact@viral4hype.com"
                  className="underline transition-colors hover:text-white"
                  style={linkStyle}
                >
                  contact@viral4hype.com
                </a>
                <br />
                Website:{" "}
                <a
                  href="https://www.viral4hype.com"
                  className="underline transition-colors hover:text-white"
                  style={linkStyle}
                >
                  www.viral4hype.com
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
