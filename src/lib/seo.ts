import type { Metadata } from "next";

/**
 * Central SEO configuration. Single source of truth for the site URL, brand
 * copy, social profiles and the Open Graph image, plus a `buildMetadata`
 * helper so every page ships a complete, consistent set of tags (title,
 * description, canonical, Open Graph, Twitter).
 *
 * Targeting: international audience, English content (`lang="en"`).
 */

export const SITE = {
  name: "viral4hype",
  url: "https://viral4hype.com",
  // Used as the homepage <title> and the Open Graph default.
  title: "viral4hype — Web Design & Performance Marketing Agency",
  description:
    "We build high-converting websites and Shopify stores and run Google & Meta Ads campaigns that scale. Web design and digital marketing agency based in Romania, working with clients across Europe.",
  locale: "en_US",
  email: "contact@viral4hype.com",
  telephone: "+40752221510",
  // Registered seat. streetAddress/postalCode are optional — when left empty
  // they are omitted from the structured data rather than shipped as
  // placeholders. Fill them in to complete the NAP for local SEO so it matches
  // the Google Business Profile.
  address: {
    streetAddress: "",
    postalCode: "",
    addressLocality: "București",
    addressRegion: "București",
    addressCountry: "RO",
  },
  // Dedicated 1200×630 share card (compressed JPG, ~130KB) — the source
  // brand PNG was 2.9MB, far too heavy for an Open Graph preview.
  ogImage: {
    url: "/images/og-default.jpg",
    width: 1200,
    height: 630,
    alt: "viral4hype — Web Design & Performance Marketing Agency",
  },
  sameAs: [
    "https://www.facebook.com/viral4hype/",
    "https://www.instagram.com/viral4hype/",
    "https://www.reddit.com/r/RealGoogleAds/",
  ],
} as const;

type BuildMetadataArgs = {
  /** Full page title (shown in the browser tab and search results). */
  title: string;
  description: string;
  /** Absolute path, e.g. "/marketing". Used for the canonical + OG URL. */
  path: string;
};

/**
 * Produce a complete Metadata object for a page. `metadataBase` is set in the
 * root layout, so relative paths/images here are resolved to absolute URLs.
 */
export function buildMetadata({
  title,
  description,
  path,
}: BuildMetadataArgs): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      siteName: SITE.name,
      locale: SITE.locale,
      title,
      description,
      images: [SITE.ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [SITE.ogImage.url],
    },
  };
}

/** Site-wide WebSite + Organization graph, injected once in the root layout. */
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        description: SITE.description,
        publisher: { "@id": `${SITE.url}/#organization` },
        inLanguage: "en",
      },
      {
        "@type": "Organization",
        "@id": `${SITE.url}/#organization`,
        name: SITE.name,
        url: SITE.url,
        logo: `${SITE.url}/images/logo_v4h.png`,
        image: `${SITE.url}${SITE.ogImage.url}`,
        email: SITE.email,
        telephone: SITE.telephone,
        sameAs: SITE.sameAs,
      },
    ],
  };
}

/**
 * Rich business entity for the homepage. Establishes NAP (name/address/phone)
 * for local SEO and rich results. Street/postal are only emitted once filled
 * in `SITE.address` — until then they are omitted (never shipped as
 * placeholders).
 */
export function localBusinessJsonLd() {
  const a = SITE.address;
  const address = {
    "@type": "PostalAddress",
    ...(a.streetAddress ? { streetAddress: a.streetAddress } : {}),
    ...(a.postalCode ? { postalCode: a.postalCode } : {}),
    addressLocality: a.addressLocality,
    addressRegion: a.addressRegion,
    addressCountry: a.addressCountry,
  };

  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/images/logo_v4h.png`,
    image: `${SITE.url}${SITE.ogImage.url}`,
    description: SITE.description,
    email: SITE.email,
    telephone: SITE.telephone,
    priceRange: "$$",
    address,
    areaServed: [
      { "@type": "Country", name: "Romania" },
      { "@type": "Place", name: "Europe" },
    ],
    sameAs: SITE.sameAs,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.telephone,
      email: SITE.email,
      contactType: "sales",
      availableLanguage: ["English", "Romanian"],
    },
  };
}

/** Small helper component prop: stringify JSON-LD for a <script> tag. */
export function jsonLdScript(data: unknown) {
  return { __html: JSON.stringify(data) };
}
