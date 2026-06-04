import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Page not found — viral4hype",
  description: "The page you’re looking for doesn’t exist or has moved.",
  robots: { index: false, follow: true },
};

/**
 * Branded 404. Self-contained with inline styles — globals.css is precompiled
 * Tailwind, so new arbitrary classes wouldn't render (see AGENTS.md).
 */
export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100svh",
        background: "#180A03",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem 1.5rem",
        gap: "1.25rem",
      }}
    >
      <Link href="/" aria-label="viral4hype home">
        <Image
          src="/images/logo_v4h.png"
          alt="viral4hype"
          width={140}
          height={44}
          style={{ height: "34px", width: "auto", opacity: 0.85 }}
        />
      </Link>
      <p
        style={{
          fontSize: "clamp(4rem, 14vw, 7rem)",
          fontWeight: 900,
          lineHeight: 1,
          margin: 0,
          background: "linear-gradient(90deg, #F26622, #f59e0b)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        404
      </p>
      <h1 style={{ fontSize: "clamp(1.3rem, 4vw, 2rem)", fontWeight: 700, margin: 0 }}>
        This page doesn’t exist
      </h1>
      <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: "46ch", lineHeight: 1.65 }}>
        The link may be broken or the page may have moved. Let’s get you back on track.
      </p>
      <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap", justifyContent: "center", marginTop: "0.5rem" }}>
        <Link
          href="/"
          style={{
            background: "#fff",
            color: "#180A03",
            fontWeight: 600,
            fontSize: "0.9rem",
            padding: "0.7rem 1.6rem",
            borderRadius: "999px",
            textDecoration: "none",
          }}
        >
          Back to home
        </Link>
        <Link
          href="/our-work"
          style={{
            border: "1px solid rgba(255,255,255,0.2)",
            color: "#fff",
            fontWeight: 600,
            fontSize: "0.9rem",
            padding: "0.7rem 1.6rem",
            borderRadius: "999px",
            textDecoration: "none",
          }}
        >
          See our work
        </Link>
      </div>
    </main>
  );
}
