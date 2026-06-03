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
    ];
  },
};

export default nextConfig;
