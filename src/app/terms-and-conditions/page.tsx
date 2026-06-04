import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms and Conditions | viral4hype",
  description: "Terms and Conditions for using viral4hype.com and our web design and digital marketing services.",
  path: "/terms-and-conditions",
});

type Block =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "linklist"; items: { label: string; href: string }[] };

type Section = { title: string; body: Block[] };

const sections: Section[] = [
  {
    title: "Introduction",
    body: [
      {
        type: "p",
        text: "Welcome to the Viral 4 Hype website. By accessing and using this website, you agree to be bound by the following Terms & Conditions. If you do not agree with any part of these terms, please discontinue use of the website.",
      },
    ],
  },
  {
    title: "1. Company Information",
    body: [
      {
        type: "p",
        text: "This website is operated by Viral 4 Hype SRL. Throughout these Terms & Conditions, references to “we”, “our”, or “us” refer to Viral 4 Hype SRL.",
      },
    ],
  },
  {
    title: "2. Website Purpose",
    body: [
      {
        type: "p",
        text: "The purpose of this website is to provide information about our services, including but not limited to:",
      },
      {
        type: "list",
        items: [
          "Google Ads Management",
          "Meta Ads Management",
          "TikTok Ads Management",
          "Shopify Development",
          "Custom Website Development",
          "Digital Marketing Consulting",
          "Related Digital Services",
        ],
      },
      { type: "p", text: "The information presented on this website is for informational purposes only." },
    ],
  },
  {
    title: "3. Contact Forms",
    body: [
      { type: "p", text: "Users may submit enquiries through the contact forms available on the website. By submitting a form, you confirm that:" },
      {
        type: "list",
        items: [
          "The information provided is accurate.",
          "You are authorized to submit the information.",
          "You consent to being contacted regarding your enquiry.",
        ],
      },
      {
        type: "p",
        text: "Submission of a form does not create a contractual relationship between the user and Viral 4 Hype.",
      },
    ],
  },
  {
    title: "4. No Guarantee Of Results",
    body: [
      { type: "p", text: "While we strive to deliver high-quality services, we do not guarantee:" },
      {
        type: "list",
        items: [
          "Specific advertising results",
          "Specific lead volumes",
          "Specific sales volumes",
          "Search engine rankings",
          "Revenue increases",
          "Return on investment (ROI)",
          "Return on ad spend (ROAS)",
        ],
      },
      {
        type: "p",
        text: "Results may vary depending on factors outside our control, including market conditions, competition, budgets, products, services, website quality, and customer behavior.",
      },
    ],
  },
  {
    title: "5. Intellectual Property",
    body: [
      { type: "p", text: "All content on this website, including but not limited to:" },
      {
        type: "list",
        items: ["Text", "Graphics", "Logos", "Design elements", "Images", "Branding", "Website structure"],
      },
      {
        type: "p",
        text: "is owned by or licensed to Viral 4 Hype SRL and is protected by applicable intellectual property laws. No content may be copied, reproduced, distributed, or used without prior written permission.",
      },
    ],
  },
  {
    title: "6. Third-Party Services",
    body: [
      {
        type: "p",
        text: "Our website may contain links to third-party websites, services, or platforms. We are not responsible for:",
      },
      {
        type: "list",
        items: [
          "Third-party content",
          "Third-party privacy practices",
          "Third-party service availability",
          "Third-party policies",
        ],
      },
      { type: "p", text: "Users access third-party services at their own discretion." },
    ],
  },
  {
    title: "7. Limitation Of Liability",
    body: [
      {
        type: "p",
        text: "To the maximum extent permitted by law, Viral 4 Hype SRL shall not be liable for:",
      },
      {
        type: "list",
        items: [
          "Direct or indirect losses",
          "Business interruption",
          "Loss of profits",
          "Loss of revenue",
          "Loss of data",
          "Technical issues beyond our control",
          "Errors or omissions on the website",
        ],
      },
      {
        type: "p",
        text: "The website is provided on an “as available” basis without warranties of any kind.",
      },
    ],
  },
  {
    title: "8. Website Availability",
    body: [
      {
        type: "p",
        text: "We make reasonable efforts to keep the website available and functioning properly. However, we do not guarantee uninterrupted access and may temporarily suspend access for:",
      },
      {
        type: "list",
        items: ["Maintenance", "Security updates", "Technical issues", "System upgrades"],
      },
    ],
  },
  {
    title: "9. User Conduct",
    body: [
      { type: "p", text: "Users agree not to:" },
      {
        type: "list",
        items: [
          "Use the website for unlawful purposes",
          "Attempt unauthorized access to systems",
          "Introduce malicious software",
          "Disrupt website functionality",
          "Submit false or misleading information",
        ],
      },
      { type: "p", text: "We reserve the right to restrict access if misuse is detected." },
    ],
  },
  {
    title: "10. Privacy",
    body: [
      { type: "p", text: "Use of this website is also governed by our:" },
      {
        type: "linklist",
        items: [
          { label: "Privacy Policy", href: "/privacy-policy" },
          { label: "Cookie Policy", href: "/cookie-policy" },
        ],
      },
      { type: "p", text: "Users are encouraged to review these documents before using the website." },
    ],
  },
  {
    title: "11. Changes To These Terms",
    body: [
      {
        type: "p",
        text: "We reserve the right to modify these Terms & Conditions at any time. Updated versions will be published on this page and become effective immediately upon publication.",
      },
    ],
  },
  {
    title: "12. Governing Law",
    body: [
      {
        type: "p",
        text: "These Terms & Conditions shall be governed by and interpreted in accordance with the laws of Romania. Any disputes arising from the use of this website shall be subject to the jurisdiction of the competent courts of Romania.",
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
    case "linklist":
      return (
        <ul key={i} className="text-white/70" style={{ listStyleType: "disc", paddingLeft: "1.25rem" }}>
          {block.items.map((item) => (
            <li key={item.href} style={{ marginBottom: "0.5rem", fontSize: "1rem", lineHeight: 1.7 }}>
              <Link
                href={item.href}
                className="underline transition-colors hover:text-white"
                style={linkStyle}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      );
  }
}

export default function TermsPage() {
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
              Terms &amp; Conditions
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
                  {s.title === "1. Company Information" && (
                    <p className="text-white/85" style={paraStyle}>
                      Website:{" "}
                      <a
                        href="https://www.viral4hype.com"
                        className="underline transition-colors hover:text-white"
                        style={linkStyle}
                      >
                        www.viral4hype.com
                      </a>
                      <br />
                      Email:{" "}
                      <a
                        href="mailto:contact@viral4hype.com"
                        className="underline transition-colors hover:text-white"
                        style={linkStyle}
                      >
                        contact@viral4hype.com
                      </a>
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Contact */}
            <div>
              <h2 className="text-[0.68rem] font-bold uppercase tracking-[0.18em] mb-5" style={{ color: "#F26622" }}>
                13. Contact
              </h2>
              <p className="text-white/85" style={paraStyle}>
                For questions regarding these Terms &amp; Conditions, please contact:
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
