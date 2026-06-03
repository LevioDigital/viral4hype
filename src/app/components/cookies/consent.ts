// Cookie consent — shared types, storage helpers and constants.
// Used by CookieConsent.tsx (UI + script gating) and the layout head snippet.

export type ConsentCategories = {
  analytics: boolean;
  marketing: boolean;
};

export type StoredConsent = ConsentCategories & {
  /** Bump CONSENT_VERSION to re-prompt every visitor after a policy change. */
  version: number;
  /** ISO timestamp — proof of when consent was given. */
  timestamp: string;
};

/** Increment when the cookie policy changes materially to force re-consent. */
export const CONSENT_VERSION = 1;

export const CONSENT_KEY = "v4h_cookie_consent";

/** Dispatched on window to (re)open the preferences panel, e.g. from the footer. */
export const OPEN_SETTINGS_EVENT = "v4h:open-cookie-settings";

/** Dispatched after we write consent so same-tab listeners re-read (storage event is cross-tab only). */
export const CONSENT_CHANGE_EVENT = "v4h:cookie-consent-change";

export const DENIED: ConsentCategories = { analytics: false, marketing: false };
export const GRANTED: ConsentCategories = { analytics: true, marketing: true };

/** Parse a raw stored value into a valid consent record, or null if absent/outdated/corrupt. */
export function parseStoredConsent(raw: string | null): StoredConsent | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as StoredConsent;
    // Outdated policy version → treat as no decision so the banner reappears.
    if (parsed.version !== CONSENT_VERSION) return null;
    return {
      analytics: !!parsed.analytics,
      marketing: !!parsed.marketing,
      version: parsed.version,
      timestamp: parsed.timestamp,
    };
  } catch {
    return null;
  }
}

export function readConsent(): StoredConsent | null {
  if (typeof window === "undefined") return null;
  return parseStoredConsent(window.localStorage.getItem(CONSENT_KEY));
}

export function writeConsent(categories: ConsentCategories): StoredConsent {
  const record: StoredConsent = {
    ...categories,
    version: CONSENT_VERSION,
    timestamp: new Date().toISOString(),
  };
  try {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify(record));
  } catch {
    /* storage unavailable (private mode) — consent applies for this session only */
  }
  // Notify same-tab listeners (the storage event only fires in other tabs).
  window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
  return record;
}

/**
 * Google Consent Mode v2 defaults — everything denied until the visitor chooses.
 * Rendered inline in <head> so it runs before any tag (legally required in the EU).
 */
export const CONSENT_DEFAULT_SNIPPET = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  functionality_storage: 'granted',
  security_storage: 'granted',
  wait_for_update: 500
});
`.trim();

/** Map our two categories onto Google's consent signals. */
export function toGoogleConsent(c: ConsentCategories) {
  return {
    analytics_storage: c.analytics ? "granted" : "denied",
    ad_storage: c.marketing ? "granted" : "denied",
    ad_user_data: c.marketing ? "granted" : "denied",
    ad_personalization: c.marketing ? "granted" : "denied",
  } as const;
}

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: ((...args: unknown[]) => void) & { callMethod?: (...a: unknown[]) => void };
    _fbq?: unknown;
  }
}
