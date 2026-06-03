"use client";

import { useCallback, useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import {
  type ConsentCategories,
  CONSENT_KEY,
  CONSENT_CHANGE_EVENT,
  DENIED,
  GRANTED,
  OPEN_SETTINGS_EVENT,
  parseStoredConsent,
  writeConsent,
  toGoogleConsent,
} from "./consent";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

/** Tell Google the visitor's latest choice. Safe to call before the GA library loads. */
function updateGoogleConsent(c: ConsentCategories) {
  window.gtag?.("consent", "update", toGoogleConsent(c));
}

// --- localStorage as an external store (idiomatic React 19 read, no SSR mismatch) ---
function subscribeConsent(cb: () => void) {
  window.addEventListener("storage", cb);
  window.addEventListener(CONSENT_CHANGE_EVENT, cb);
  return () => {
    window.removeEventListener("storage", cb);
    window.removeEventListener(CONSENT_CHANGE_EVENT, cb);
  };
}
const getConsentSnapshot = () => window.localStorage.getItem(CONSENT_KEY);
const noopSubscribe = () => () => {};

export default function CookieConsent() {
  // Raw string from storage; null on server + first hydration render, then real value.
  const raw = useSyncExternalStore(subscribeConsent, getConsentSnapshot, () => null);
  // False during SSR and the first client render, true once mounted — avoids hydration mismatch.
  const hydrated = useSyncExternalStore(noopSubscribe, () => true, () => false);

  const consent = useMemo(() => parseStoredConsent(raw), [raw]);
  const decided = consent !== null;

  const [panelOpen, setPanelOpen] = useState(false); // settings view vs. compact banner
  const [manualOpen, setManualOpen] = useState(false); // reopened via footer after a decision
  const [delayed, setDelayed] = useState(false); // first-visit banner slides in after a short pause
  const [draft, setDraft] = useState<ConsentCategories>(DENIED);
  const pathname = usePathname();

  // Show the first-visit prompt a few seconds in, the way most sites do.
  useEffect(() => {
    const t = setTimeout(() => setDelayed(true), 5000);
    return () => clearTimeout(t);
  }, []);

  // Keep Google's consent signals in sync with the stored decision.
  useEffect(() => {
    if (consent) updateGoogleConsent(consent);
  }, [consent]);

  // Let the footer (or anywhere) reopen the preferences panel.
  useEffect(() => {
    function open() {
      setDraft(consent ?? DENIED);
      setPanelOpen(true);
      setManualOpen(true);
    }
    window.addEventListener(OPEN_SETTINGS_EVENT, open);
    // Delegated click for the footer button (footer is a server component).
    function onClick(e: MouseEvent) {
      const t = e.target as HTMLElement | null;
      if (t?.closest("[data-cookie-settings]")) {
        e.preventDefault();
        open();
      }
    }
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener(OPEN_SETTINGS_EVENT, open);
      document.removeEventListener("click", onClick);
    };
  }, [consent]);

  // GA4 page_view on client-side navigations (config only fires on first load).
  useEffect(() => {
    if (consent?.analytics && GA_ID) {
      window.gtag?.("event", "page_view", { page_path: pathname });
    }
  }, [pathname, consent?.analytics]);

  const persist = useCallback((categories: ConsentCategories) => {
    writeConsent(categories); // dispatches CONSENT_CHANGE_EVENT → store re-reads → consent updates
    setManualOpen(false);
    setPanelOpen(false);
  }, []);

  const acceptAll = useCallback(() => persist(GRANTED), [persist]);
  const rejectAll = useCallback(() => persist(DENIED), [persist]);
  const saveDraft = useCallback(() => persist(draft), [persist, draft]);

  // Render nothing until hydrated (matches empty SSR output, no flash for returning visitors).
  if (!hydrated) return null;

  // First visit: appears after the delay. Reopened from the footer: appears instantly.
  const bannerOpen = (!decided && delayed) || manualOpen;
  const settingsOpen = panelOpen;

  return (
    <>
      {/* Tracking scripts — only mounted for granted categories, never before. */}
      {consent?.analytics && GA_ID && (
        <>
          <Script
            id="ga-src"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`gtag('js', new Date());
gtag('config', '${GA_ID}');${ADS_ID ? `\ngtag('config', '${ADS_ID}');` : ""}`}
          </Script>
        </>
      )}

      {consent?.marketing && PIXEL_ID && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${PIXEL_ID}');
fbq('track', 'PageView');`}
        </Script>
      )}

      {bannerOpen && (
        <CookieBanner
          settingsOpen={settingsOpen}
          draft={draft}
          setDraft={setDraft}
          onOpenSettings={() => {
            setDraft(consent ?? DENIED);
            setPanelOpen(true);
          }}
          onAcceptAll={acceptAll}
          onRejectAll={rejectAll}
          onSave={saveDraft}
        />
      )}
    </>
  );
}

type BannerProps = {
  settingsOpen: boolean;
  draft: ConsentCategories;
  setDraft: (c: ConsentCategories) => void;
  onOpenSettings: () => void;
  onAcceptAll: () => void;
  onRejectAll: () => void;
  onSave: () => void;
};

function CookieBanner({
  settingsOpen,
  draft,
  setDraft,
  onOpenSettings,
  onAcceptAll,
  onRejectAll,
  onSave,
}: BannerProps) {
  return (
    <div
      className="ck-wrap"
      role="dialog"
      aria-modal="false"
      aria-label="Cookie preferences"
    >
      <style>{STYLES}</style>
      <div className="ck-card">
        <div className="ck-glow" aria-hidden="true" />

        {!settingsOpen ? (
          <div className="ck-main">
            <p className="ck-text">
              We use cookies to run the site and, with your consent, for analytics
              and marketing.{" "}
              <a href="/cookie-policy" className="ck-link">
                Learn more
              </a>
              .
            </p>
            <div className="ck-actions">
              <button type="button" className="ck-btn ck-ghost" onClick={onOpenSettings}>
                Settings
              </button>
              <button type="button" className="ck-btn ck-ghost" onClick={onRejectAll}>
                Reject all
              </button>
              <button type="button" className="ck-btn ck-primary" onClick={onAcceptAll}>
                Accept all
              </button>
            </div>
          </div>
        ) : (
          <div className="ck-settings">
            <p className="ck-eyebrow">
              <span className="ck-dot" /> Cookie settings
            </p>
            <h2 className="ck-title ck-title-sm">Choose what you allow</h2>

            <div className="ck-cat">
              <div className="ck-cat-head">
                <span className="ck-cat-name">Necessary</span>
                <span className="ck-badge">Always on</span>
              </div>
              <p className="ck-cat-desc">
                Essential for the site to function (navigation, forms,
                security). These cannot be disabled.
              </p>
            </div>

            <CatToggle
              name="Analytics"
              desc="Google Analytics — helps us understand how the site is used, anonymously and in aggregate."
              checked={draft.analytics}
              onChange={(v) => setDraft({ ...draft, analytics: v })}
            />
            <CatToggle
              name="Marketing"
              desc="Google Ads and Meta Pixel — measure conversions and enable relevant advertising."
              checked={draft.marketing}
              onChange={(v) => setDraft({ ...draft, marketing: v })}
            />

            <div className="ck-actions ck-actions-end">
              <button type="button" className="ck-btn ck-ghost" onClick={onRejectAll}>
                Reject all
              </button>
              <button type="button" className="ck-btn ck-primary" onClick={onSave}>
                Save preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function CatToggle({
  name,
  desc,
  checked,
  onChange,
}: {
  name: string;
  desc: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="ck-cat">
      <div className="ck-cat-head">
        <span className="ck-cat-name">{name}</span>
        <button
          type="button"
          role="switch"
          aria-checked={checked}
          aria-label={name}
          className={`ck-switch ${checked ? "is-on" : ""}`}
          onClick={() => onChange(!checked)}
        >
          <span className="ck-knob" />
        </button>
      </div>
      <p className="ck-cat-desc">{desc}</p>
    </div>
  );
}

const STYLES = `
.ck-wrap {
  position: fixed; left: 0; right: 0; bottom: 0; z-index: 1900;
  pointer-events: none; opacity: 0.5;
  transition: opacity 0.4s ease;
  animation: ckIn 0.5s cubic-bezier(.16,1,.3,1) both;
}
.ck-wrap:hover, .ck-wrap:focus-within { opacity: 1; }
.ck-card {
  pointer-events: auto; position: relative; width: 100%;
  background: rgba(12, 7, 3, 0.6);
  backdrop-filter: blur(8px) saturate(110%);
  -webkit-backdrop-filter: blur(8px) saturate(110%);
  border-top: 1px solid rgba(255,255,255,0.04);
  box-shadow: none;
  padding: 0.45rem clamp(0.9rem, 4vw, 2.2rem);
}
.ck-glow { display: none; }

/* --- Compact bottom bar --- */
.ck-main {
  position: relative; max-width: 1180px; margin: 0 auto;
  display: flex; align-items: center; justify-content: space-between; gap: 1.4rem;
}
.ck-text { font-size: 0.68rem; line-height: 1.4; color: rgba(255,255,255,0.4); margin: 0; }
.ck-dot { display: none; }
.ck-link { color: rgba(255,255,255,0.6); text-decoration: underline; text-underline-offset: 2px; transition: color 0.3s ease; }
.ck-link:hover { color: #fff; }
.ck-actions { display: flex; align-items: center; gap: 0.35rem; flex: none; }
.ck-btn {
  display: inline-flex; align-items: center; justify-content: center; white-space: nowrap;
  padding: 0.34rem 0.8rem; border-radius: 9999px; font-size: 0.68rem; font-weight: 600;
  cursor: pointer; border: 1px solid transparent;
  transition: transform 0.3s cubic-bezier(.16,1,.3,1), background 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}
.ck-ghost { background: transparent; border-color: rgba(255,255,255,0.1); color: rgba(255,255,255,0.5); }
.ck-ghost:hover { background: rgba(255,255,255,0.05); color: rgba(255,255,255,0.85); }
.ck-primary { background: transparent; border-color: rgba(255,255,255,0.18); color: rgba(255,255,255,0.65); }
.ck-primary:hover { background: rgba(255,255,255,0.08); color: #fff; }

/* --- Settings panel (inside the bar) --- */
.ck-settings { position: relative; max-width: 860px; margin: 0 auto;
  max-height: min(60vh, 420px); overflow-y: auto; overflow-x: hidden;
  scrollbar-width: thin; scrollbar-color: rgba(255,255,255,0.18) transparent; }
.ck-eyebrow {
  display: flex; align-items: center; gap: 0.45rem; margin: 0 0 0.35rem;
  font-size: 0.6rem; font-weight: 600; letter-spacing: 0.13em; text-transform: uppercase;
  color: rgba(255,255,255,0.5);
}
.ck-eyebrow .ck-dot { margin-right: 0; }
.ck-title { font-size: 1rem; font-weight: 800; line-height: 1.1; letter-spacing: -0.02em; color: #fff; margin: 0 0 0.6rem; }
.ck-title-sm { font-size: 0.95rem; }
.ck-title em {
  font-style: italic; font-weight: 400;
  background: linear-gradient(115deg, #ffae7a 0%, #F26622 55%, #e0531a 100%);
  -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
}
.ck-cat { padding: 0.7rem 0; border-top: 1px solid rgba(255,255,255,0.07); }
.ck-cat:first-of-type { border-top: 0; padding-top: 0.3rem; }
.ck-cat-head { display: flex; align-items: center; justify-content: space-between; gap: 0.8rem; margin-bottom: 0.3rem; }
.ck-cat-name { font-size: 0.85rem; font-weight: 700; color: #fff; }
.ck-cat-desc { font-size: 0.74rem; line-height: 1.5; color: rgba(255,255,255,0.52); margin: 0; }
.ck-badge {
  font-size: 0.58rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase;
  color: rgba(242,102,34,0.95); background: rgba(242,102,34,0.12);
  border: 1px solid rgba(242,102,34,0.25); padding: 0.2rem 0.5rem; border-radius: 9999px; flex: none;
}
.ck-switch {
  flex: none; width: 38px; height: 22px; border-radius: 9999px; cursor: pointer; position: relative;
  background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.18);
  transition: background 0.3s ease, border-color 0.3s ease;
}
.ck-switch.is-on { background: #F26622; border-color: #F26622; }
.ck-knob {
  position: absolute; top: 2px; left: 2px; width: 16px; height: 16px; border-radius: 9999px;
  background: #fff; transition: transform 0.3s cubic-bezier(.16,1,.3,1);
}
.ck-switch.is-on .ck-knob { transform: translateX(16px); }
.ck-switch:focus-visible { outline: none; box-shadow: 0 0 0 3px rgba(242,102,34,0.4); }
.ck-actions-end { width: 100%; justify-content: flex-end; margin-top: 1rem; }

@keyframes ckIn { from { opacity: 0; transform: translateY(100%); } to { opacity: 1; transform: none; } }

@media (max-width: 720px) {
  .ck-main { flex-direction: column; align-items: stretch; gap: 0.85rem; }
  .ck-actions { width: 100%; }
  .ck-actions .ck-btn { flex: 1; }
}
@media (prefers-reduced-motion: reduce) {
  .ck-wrap { animation: none; }
  .ck-btn, .ck-knob, .ck-switch { transition: background 0.2s ease, color 0.2s ease; }
}
`;
