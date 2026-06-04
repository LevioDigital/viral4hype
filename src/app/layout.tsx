import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import ViralInteractions from "./ViralInteractions";
import StartProjectModal from "./components/StartProjectModal";
import CookieConsent from "./components/cookies/CookieConsent";
import { CONSENT_DEFAULT_SNIPPET } from "./components/cookies/consent";
import { SITE, buildMetadata, websiteJsonLd, jsonLdScript } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  // Default tags for the whole site. Individual pages override title/
  // description/canonical/openGraph via the same buildMetadata helper.
  ...buildMetadata({
    title: SITE.title,
    description: SITE.description,
    path: "/",
  }),
  applicationName: SITE.name,
  icons: { icon: "/favicon.ico" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Site-wide WebSite + Organization structured data. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(websiteJsonLd())}
        />
        {/* Self-hosted fonts (declared in globals.css). Preload the families
            used above the fold to avoid FOUT. The Google Fonts links were
            removed — the same families are already served locally from
            /public/fonts, so loading them again from Google was redundant and
            render-blocking. */}
        <link
          rel="preload"
          href="/fonts/plus-jakarta-sans-variable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/satoshi-900.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        {/* Google Consent Mode v2 — defaults to denied before any tag loads.
            beforeInteractive is injected into <head> and runs before hydration. */}
        <Script id="google-consent-default" strategy="beforeInteractive">
          {CONSENT_DEFAULT_SNIPPET}
        </Script>
        {children}
        <StartProjectModal />
        <ViralInteractions />
        <CookieConsent />
      </body>
    </html>
  );
}
