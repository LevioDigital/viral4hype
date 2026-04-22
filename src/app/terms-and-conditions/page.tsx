import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Terms and Conditions | viral4hype",
  description: "Terms and Conditions for using viral4hype.com and our web design and digital marketing services.",
};

const sections = [
  {
    title: "Introduction",
    content: `Please read these Terms and Conditions carefully before using viral4hype.com, operated by Viral4Hype. Your access to and use of the Site is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Site. By accessing or using the Site, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Site.`,
  },
  {
    title: "Content",
    paragraphs: [
      `Our Site allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post on or through the Site, including its legality, reliability, and appropriateness.`,
      `By posting Content on or through the Site, you represent and warrant that:`,
    ],
    bullets: [
      `The Content is yours (you own it) and/or you have the right to use it and the right to grant us the rights and license as provided in these Terms.`,
      `The posting of your Content on or through the Site does not violate the privacy rights, publicity rights, copyrights, contract rights, or any other rights of any person or entity.`,
    ],
    footer: `We reserve the right to terminate the account of anyone found to be infringing on a copyright.`,
  },
  {
    title: "Data Collection",
    content: `Our Site collects minimal data for the purpose of providing and improving the Service. By using the Site, you agree to the collection and use of information in accordance with this policy. We do not collect sensitive personal information. Any data collected is used solely for the operation of the Site and to communicate with you.`,
  },
  {
    title: "Links to Other Websites",
    content: `Our Site may contain links to third-party websites or services that are not owned or controlled by Viral4Hype. Viral4Hype has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that Viral4Hype shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.`,
  },
];

export default function TermsPage() {
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
              Terms and Conditions
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
                {"content" in s && (
                  <p className="text-white/85 text-[1rem] leading-[1.85]">{s.content}</p>
                )}
                {"paragraphs" in s && (
                  <div className="space-y-4">
                    {s.paragraphs!.map((p, i) => (
                      <p key={i} className="text-white/85 text-[1rem] leading-[1.85]">{p}</p>
                    ))}
                    <ul className="space-y-3 pl-4">
                      {s.bullets!.map((b, i) => (
                        <li key={i} className="flex gap-3 text-white/85 text-[1rem] leading-[1.85]">
                          <span className="mt-[0.55rem] shrink-0 w-[5px] h-[5px] rounded-full" style={{ backgroundColor: "#F26622" }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                    {s.footer && (
                      <p className="text-white/85 text-[1rem] leading-[1.85]">{s.footer}</p>
                    )}
                  </div>
                )}
              </div>
            ))}

            {/* Contact */}
            <div>
              <h2 className="text-[0.68rem] font-bold uppercase tracking-[0.18em] mb-5" style={{ color: "#F26622" }}>
                Contact Us
              </h2>
              <p className="text-white/85 text-[1rem] leading-[1.85]">
                If you have any questions about these Terms and Conditions, please contact us at:{" "}
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
