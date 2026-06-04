import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | viral4hype",
  description: "Privacy Policy for viral4hype.com — how we collect, use, and protect your personal information.",
  path: "/privacy-policy",
});

type Block =
  | { type: "p"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: string[] };

type Section = { title: string; body: Block[] };

const sections: Section[] = [
  {
    title: "Introduction",
    body: [
      {
        type: "p",
        text: "At Viral 4 Hype, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains what information we collect, how we use it, and what rights you have regarding your personal information.",
      },
    ],
  },
  {
    title: "1. Who We Are",
    body: [
      { type: "p", text: "This website is operated by Viral 4 Hype SRL. Throughout this Privacy Policy, references to “we”, “our”, or “us” refer to Viral 4 Hype SRL." },
    ],
  },
  {
    title: "2. What Information We Collect",
    body: [
      { type: "p", text: "When you submit a contact form on our website, we may collect:" },
      {
        type: "list",
        items: ["Full name", "Email address", "Phone number", "Company name", "Project details or message content"],
      },
      { type: "p", text: "We may also automatically collect certain technical information, including:" },
      {
        type: "list",
        items: [
          "IP address",
          "Browser type",
          "Device information",
          "Website activity and interactions",
          "Referral sources",
          "Pages visited",
        ],
      },
    ],
  },
  {
    title: "3. How We Use Your Information",
    body: [
      { type: "p", text: "We use the information collected to:" },
      {
        type: "list",
        items: [
          "Respond to enquiries",
          "Communicate regarding potential projects",
          "Provide requested services",
          "Improve our website and user experience",
          "Measure marketing performance",
          "Maintain website security",
        ],
      },
      { type: "p", text: "We do not sell personal information to third parties." },
    ],
  },
  {
    title: "4. Legal Basis For Processing",
    body: [
      { type: "p", text: "We process personal data under one or more of the following legal bases:" },
      {
        type: "list",
        items: [
          "Your consent",
          "Legitimate business interests",
          "Performance of a contract",
          "Compliance with legal obligations",
        ],
      },
    ],
  },
  {
    title: "5. Analytics & Advertising",
    body: [
      { type: "p", text: "We use the following tools:" },
      { type: "subheading", text: "Google Analytics" },
      { type: "p", text: "Used to understand how visitors interact with our website and improve user experience." },
      { type: "subheading", text: "Google Ads" },
      { type: "p", text: "Used for conversion tracking and advertising performance measurement." },
      { type: "subheading", text: "Meta Pixel (Facebook Pixel)" },
      { type: "p", text: "Used for advertising analytics, conversion tracking, and audience measurement." },
      {
        type: "p",
        text: "These services may collect information about your interaction with our website through cookies and similar technologies.",
      },
    ],
  },
  {
    title: "6. Cookies",
    body: [
      { type: "p", text: "Our website uses cookies to:" },
      {
        type: "list",
        items: [
          "Ensure proper website functionality",
          "Analyze website traffic",
          "Measure advertising performance",
          "Improve user experience",
        ],
      },
      {
        type: "p",
        text: "You can manage your cookie preferences through your browser settings or our cookie consent banner. Please review our Cookie Policy for more information.",
      },
    ],
  },
  {
    title: "7. Data Sharing",
    body: [
      {
        type: "p",
        text: "We may share data with trusted third-party providers when necessary to operate our business, including:",
      },
      {
        type: "list",
        items: ["Google", "Meta", "Website hosting providers", "Analytics providers", "CRM and communication tools"],
      },
      { type: "p", text: "These providers process data only as necessary to provide their services." },
    ],
  },
  {
    title: "8. Data Retention",
    body: [
      { type: "p", text: "We retain personal information only for as long as necessary to:" },
      {
        type: "list",
        items: [
          "Respond to enquiries",
          "Provide services",
          "Meet legal and regulatory requirements",
          "Protect legitimate business interests",
        ],
      },
    ],
  },
  {
    title: "9. Your Rights",
    body: [
      {
        type: "p",
        text: "Depending on your location and applicable laws, you may have the right to:",
      },
      {
        type: "list",
        items: [
          "Access your personal data",
          "Correct inaccurate information",
          "Request deletion of your data",
          "Restrict processing",
          "Object to processing",
          "Withdraw consent",
          "Request data portability",
        ],
      },
      { type: "p", text: "To exercise any of these rights, please contact us using the information below." },
    ],
  },
  {
    title: "10. Data Security",
    body: [
      {
        type: "p",
        text: "We implement appropriate technical and organizational measures designed to protect personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet can be guaranteed to be completely secure.",
      },
    ],
  },
  {
    title: "11. Third-Party Websites",
    body: [
      {
        type: "p",
        text: "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of external websites.",
      },
    ],
  },
  {
    title: "12. Changes To This Policy",
    body: [
      {
        type: "p",
        text: "We may update this Privacy Policy from time to time. Any updates will be published on this page together with the revised effective date.",
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
        <ul key={i} className="text-white/70" style={{ listStyleType: "disc", paddingLeft: "1.25rem" }}>
          {block.items.map((item) => (
            <li key={item} style={{ marginBottom: "0.5rem", fontSize: "1rem", lineHeight: 1.7 }}>
              {item}
            </li>
          ))}
        </ul>
      );
  }
}

export default function PrivacyPage() {
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
              Privacy Policy
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
                  {s.title === "1. Who We Are" && (
                    <p className="text-white/85" style={paraStyle}>
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
                  )}
                  {s.title === "6. Cookies" && (
                    <p className="text-white/85" style={paraStyle}>
                      Read our{" "}
                      <Link
                        href="/cookie-policy"
                        className="underline transition-colors hover:text-white"
                        style={linkStyle}
                      >
                        Cookie Policy
                      </Link>
                      .
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Contact */}
            <div>
              <h2 className="text-[0.68rem] font-bold uppercase tracking-[0.18em] mb-5" style={{ color: "#F26622" }}>
                13. Contact Us
              </h2>
              <p className="text-white/85" style={paraStyle}>
                If you have any questions regarding this Privacy Policy or your personal data, please contact us:
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
