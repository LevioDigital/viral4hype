import type { NextConfig } from "next";
import path from "path";

// Content-Security-Policy. Locked down where it's safe (no framing, no <base>
// hijack, no plugins, forms only post to our own origin) and kept permissive
// only for the third parties the site actually loads: Google Tag / GA / Ads
// (gtag.js, loaded after consent) and the inline JSON-LD + consent snippets.
// `'unsafe-inline'` is required because the markup uses inline styles and
// inline <script> JSON-LD; nonces aren't viable with a fully static export.
const isDev = process.env.NODE_ENV !== "production";

// React/Next dev mode (Fast Refresh, error overlay) relies on eval(), so
// `'unsafe-eval'` is added to script-src ONLY in development. Production never
// gets it — React never uses eval() in production builds.
const scriptSrc = [
  "script-src 'self' 'unsafe-inline'",
  isDev ? "'unsafe-eval'" : "",
  "https://www.googletagmanager.com https://*.googletagmanager.com https://www.google-analytics.com https://www.googleadservices.com https://www.google.com",
]
  .filter(Boolean)
  .join(" ");

const cspDirectives = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  scriptSrc,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https:",
  "font-src 'self'",
  "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com https://*.googletagmanager.com https://www.google.com",
  "frame-src 'self' https://www.googletagmanager.com https://td.doubleclick.net https://www.google.com",
  "upgrade-insecure-requests",
].join("; ");

// Applied to every response. See async headers() below.
const securityHeaders = [
  { key: "Content-Security-Policy", value: cspDirectives },
  // Force HTTPS for 2 years, incl. subdomains; eligible for the preload list.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  // Hide the framework fingerprint (X-Powered-By: Next.js).
  poweredByHeader: false,
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
  async headers() {
    return [
      {
        // Apply the security headers to every route.
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
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
