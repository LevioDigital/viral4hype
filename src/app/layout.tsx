import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import ViralInteractions from "./ViralInteractions";
import StartProjectModal from "./components/StartProjectModal";
import CookieConsent from "./components/cookies/CookieConsent";
import { CONSENT_DEFAULT_SNIPPET } from "./components/cookies/consent";

export const metadata: Metadata = {
  title: "viral4hype | Website-ul Afacerii Tale",
  description: "Construim website-ul afacerii tale locale în 7 zile cu 0 RON",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <head>
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
