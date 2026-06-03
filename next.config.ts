import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
