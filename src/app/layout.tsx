import type { Metadata } from "next";
import "./globals.css";
import ViralInteractions from "./ViralInteractions";

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Instrument+Serif:ital@1&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>
        {children}
        <ViralInteractions />
      </body>
    </html>
  );
}
