import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

// Public, indexable routes. Marketing/service pages get higher priority than
// the legal pages.
const ROUTES: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/websites", priority: 0.9, changeFrequency: "monthly" },
  { path: "/shopify", priority: 0.9, changeFrequency: "monthly" },
  { path: "/marketing", priority: 0.9, changeFrequency: "monthly" },
  { path: "/lead-generation", priority: 0.8, changeFrequency: "monthly" },
  { path: "/ecommerce-scaling", priority: 0.8, changeFrequency: "monthly" },
  { path: "/our-work", priority: 0.8, changeFrequency: "weekly" },
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/cookie-policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms-and-conditions", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
