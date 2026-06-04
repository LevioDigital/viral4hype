import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project so Turbopack ignores the stray
  // package-lock.json detected in the parent (C:\Users\Lucian).
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    // Serve AVIF first (smallest), falling back to WebP, then the original
    // format for browsers that support neither.
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/google-ads-management",
        destination: "/marketing",
        permanent: true,
      },
      {
        // There is no standalone /contact page — the CTA links open the
        // "Start a Project" modal client-side (see StartProjectModal). This
        // redirect is the no-JS / crawler / direct-visit fallback so /contact
        // never 404s; it lands on the homepage contact section + form.
        source: "/contact",
        destination: "/#contact",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
