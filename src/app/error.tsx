"use client";

import { useEffect } from "react";
import Link from "next/link";

/**
 * Branded route-level error boundary. Must be a Client Component. Self-contained
 * inline styles — globals.css is precompiled Tailwind (see AGENTS.md).
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface to the browser console / monitoring; the digest links to the
    // server-side log entry for prerender/runtime errors.
    console.error(error);
  }, [error]);

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
      <h1 style={{ fontSize: "clamp(1.4rem, 4vw, 2.1rem)", fontWeight: 800, margin: 0 }}>
        Something went wrong
      </h1>
      <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: "48ch", lineHeight: 1.65 }}>
        An unexpected error occurred. You can try again, or head back to the
        homepage and reach out if it keeps happening.
      </p>
      {error.digest ? (
        <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.75rem", fontFamily: "monospace" }}>
          Reference: {error.digest}
        </p>
      ) : null}
      <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap", justifyContent: "center", marginTop: "0.5rem" }}>
        <button
          type="button"
          onClick={reset}
          style={{
            background: "#fff",
            color: "#180A03",
            fontWeight: 600,
            fontSize: "0.9rem",
            padding: "0.7rem 1.6rem",
            borderRadius: "999px",
            border: 0,
            cursor: "pointer",
          }}
        >
          Try again
        </button>
        <Link
          href="/"
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
          Back to home
        </Link>
      </div>
    </main>
  );
}
