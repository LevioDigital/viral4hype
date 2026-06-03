"use client";

import {
  useActionState,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  submitContactForm,
  type ContactFormState,
} from "@/app/actions/contact";

const initialState: ContactFormState = { status: "idle" };

type Service = { value: string; label: string; desc: string; icon: ReactNode };

const SERVICES: Service[] = [
  {
    value: "Website",
    label: "Website",
    desc: "Design & development",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
        <rect x="3" y="4" width="18" height="15" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 8h18" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="5.7" cy="6" r="0.6" fill="currentColor" />
        <circle cx="7.7" cy="6" r="0.6" fill="currentColor" />
      </svg>
    ),
  },
  {
    value: "Marketing",
    label: "Marketing",
    desc: "Ads, SEO & lead-gen",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
        <path d="M4 15v-4l11-5v14L4 15z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M15 8a4 4 0 0 1 0 8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 15v3a1.5 1.5 0 0 0 3 0v-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    value: "Shopify",
    label: "Shopify",
    desc: "E-commerce store",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
        <path d="M6 8h12l-1 11H7L6 8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 8a3 3 0 0 1 6 0" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    value: "Other",
    label: "Something else",
    desc: "Tell us what you need",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
        <path d="M12 4l1.6 4.4L18 10l-4.4 1.6L12 16l-1.6-4.4L6 10l4.4-1.6L12 4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const BUDGETS = [
  "Under €1,000",
  "€1,000 – €3,000",
  "€3,000 – €10,000",
  "€10,000+",
  "Not sure yet",
];

const STEP_META = [
  { eyebrow: "Step 01 — Service", lead: "What can we", accent: "build together?" },
  { eyebrow: "Step 02 — Budget", lead: "What's your", accent: "investment range?" },
  { eyebrow: "Step 03 — Details", lead: "Let's get", accent: "acquainted." },
];

export default function StartProjectModal() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [service, setService] = useState<string | null>(null);
  const [budget, setBudget] = useState<string | null>(null);
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialState,
  );
  const firstFieldRef = useRef<HTMLInputElement>(null);

  const close = useCallback(() => setOpen(false), []);

  const reset = useCallback(() => {
    setStep(1);
    setService(null);
    setBudget(null);
  }, []);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const trigger = target?.closest(
        '[data-start-project], a[href="/contact"], a[href="/#contact"]',
      );
      if (trigger) {
        e.preventDefault();
        reset();
        setOpen(true);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [reset]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", onKey);

    // Blocheaza scroll-ul din spate — inclusiv iOS Safari, unde overflow:hidden
    // singur nu opreste touch-scroll. Fixam body si pastram pozitia.
    const { body } = document;
    const scrollY = window.scrollY;
    const prev = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
    };
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";

    return () => {
      document.removeEventListener("keydown", onKey);
      body.style.overflow = prev.overflow;
      body.style.position = prev.position;
      body.style.top = prev.top;
      body.style.left = prev.left;
      body.style.right = prev.right;
      body.style.width = prev.width;
      window.scrollTo(0, scrollY);
    };
  }, [open, close]);

  // Focus pe primul camp cand ajungem la pasul 3.
  useEffect(() => {
    if (open && step === 3) {
      const t = setTimeout(() => firstFieldRef.current?.focus(), 360);
      return () => clearTimeout(t);
    }
  }, [open, step]);

  if (!open) return null;

  const success = state.status === "success";
  const meta = STEP_META[step - 1];

  return (
    <div
      className="spm-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Start a project"
      onClick={close}
    >
      <style>{STYLES}</style>

      <div className="spm-panel" onClick={(e) => e.stopPropagation()}>
        <div className="spm-glow spm-glow-1" aria-hidden="true" />
        <div className="spm-glow spm-glow-2" aria-hidden="true" />
        <div className="spm-grain" aria-hidden="true" />

        <button type="button" className="spm-close" onClick={close} aria-label="Close">
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
            <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>

        <div className="spm-body">
          {success ? (
            <div className="spm-step" key="success">
              <div className="spm-success-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                  <path
                    className="spm-check"
                    d="M5 13l4 4L19 7"
                    stroke="#F26622"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="spm-eyebrow">
                <span className="spm-dot" /> All set
              </p>
              <h2 className="spm-title">
                Request <em>received.</em>
              </h2>
              <p className="spm-sub">
                {state.message ??
                  "Thanks — we'll review your project and get back to you within one working day."}
              </p>
              <button type="button" className="spm-submit" onClick={close}>
                Done
              </button>
            </div>
          ) : (
            <>
              <div className="spm-header">
                <p className="spm-eyebrow">
                  <span className="spm-dot" /> {meta.eyebrow}
                </p>
                <h2 className="spm-title">
                  {meta.lead} <em>{meta.accent}</em>
                </h2>
                <div className="spm-progress" aria-hidden="true">
                  {[1, 2, 3].map((n) => (
                    <span key={n} className={`spm-seg ${n <= step ? "is-on" : ""}`} />
                  ))}
                </div>
              </div>

              <div className="spm-step" key={step}>
                {step === 1 && (
                  <div className="spm-cards">
                    {SERVICES.map((s) => (
                      <button
                        key={s.value}
                        type="button"
                        className={`spm-card ${service === s.value ? "is-sel" : ""}`}
                        onClick={() => {
                          setService(s.value);
                          setStep(2);
                        }}
                      >
                        <span className="spm-card-ico">{s.icon}</span>
                        <span className="spm-card-label">{s.label}</span>
                        <span className="spm-card-desc">{s.desc}</span>
                        <span className="spm-card-arrow">
                          <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                            <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </button>
                    ))}
                  </div>
                )}

                {step === 2 && (
                  <>
                    <div className="spm-rows">
                      {BUDGETS.map((b) => (
                        <button
                          key={b}
                          type="button"
                          className={`spm-row ${budget === b ? "is-sel" : ""}`}
                          onClick={() => {
                            setBudget(b);
                            setStep(3);
                          }}
                        >
                          <span className="spm-radio" />
                          <span className="spm-row-label">{b}</span>
                          <span className="spm-row-arrow">
                            <svg width="15" height="15" viewBox="0 0 20 20" fill="none">
                              <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                        </button>
                      ))}
                    </div>
                    <button type="button" className="spm-back" onClick={() => setStep(1)}>
                      ← Back
                    </button>
                  </>
                )}

                {step === 3 && (
                  <form className="spm-form" action={formAction}>
                    <input type="hidden" name="source" value="start_project" />
                    <input type="hidden" name="service" value={service ?? ""} />
                    <input type="hidden" name="budget" value={budget ?? ""} />

                    <div className="spm-field">
                      <input ref={firstFieldRef} className="spm-input" type="text" name="Name" required placeholder=" " id="spm-name" autoComplete="name" />
                      <label className="spm-flabel" htmlFor="spm-name">Your name *</label>
                    </div>
                    <div className="spm-field">
                      <input className="spm-input" type="email" name="email" required placeholder=" " id="spm-email" autoComplete="email" />
                      <label className="spm-flabel" htmlFor="spm-email">Email address *</label>
                    </div>
                    <div className="spm-field-row">
                      <div className="spm-field">
                        <input className="spm-input" type="tel" name="Phone-Number" placeholder=" " id="spm-phone" autoComplete="tel" />
                        <label className="spm-flabel" htmlFor="spm-phone">Phone</label>
                      </div>
                      <div className="spm-field">
                        <input className="spm-input" type="text" name="Company-Name" placeholder=" " id="spm-company" autoComplete="organization" />
                        <label className="spm-flabel" htmlFor="spm-company">Company</label>
                      </div>
                    </div>
                    <div className="spm-field">
                      <textarea className="spm-input spm-textarea" name="How-can-we-help" required placeholder=" " id="spm-msg" rows={3} />
                      <label className="spm-flabel" htmlFor="spm-msg">Tell us about your project *</label>
                    </div>

                    <label className="spm-gdpr">
                      <input type="checkbox" name="gdpr" required className="spm-gdpr-input" />
                      <span className="spm-gdpr-box" aria-hidden="true">
                        <svg width="11" height="11" viewBox="0 0 20 20" fill="none">
                          <path d="M4 10l4 4 8-9" stroke="#180A03" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="spm-gdpr-text">
                        I&apos;m happy for this website to store my info so they can respond to my enquiry.
                      </span>
                    </label>

                    <input type="checkbox" name="_honeypot" tabIndex={-1} autoComplete="off" style={{ display: "none" }} />

                    {state.status === "error" && (
                      <p className="spm-error" role="alert">{state.message}</p>
                    )}

                    <div className="spm-actions">
                      <button type="button" className="spm-back" onClick={() => setStep(2)}>
                        ← Back
                      </button>
                      <button type="submit" className="spm-submit" disabled={pending}>
                        <span>{pending ? "Sending…" : "Send request"}</span>
                        {!pending && (
                          <svg width="17" height="17" viewBox="0 0 20 20" fill="none">
                            <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const STYLES = `
.spm-overlay {
  position: fixed; inset: 0; z-index: 2000;
  display: flex; align-items: center; justify-content: center;
  padding: 1.5rem;
  background: radial-gradient(120% 120% at 50% 0%, rgba(40,18,6,0.55) 0%, rgba(6,3,1,0.82) 70%);
  backdrop-filter: blur(10px) saturate(120%);
  -webkit-backdrop-filter: blur(10px) saturate(120%);
  animation: spmOverlayIn 0.4s cubic-bezier(.16,1,.3,1) both;
}
.spm-panel {
  position: relative; width: 100%; max-width: 600px;
  max-height: 92vh; max-height: 92dvh;
  overflow: hidden; border-radius: 26px;
  background:
    radial-gradient(110% 80% at 85% -10%, rgba(242,102,34,0.10) 0%, transparent 55%),
    linear-gradient(180deg, #1f0f05 0%, #160a03 100%);
  border: 1px solid rgba(255,255,255,0.09);
  box-shadow: 0 40px 120px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06);
  animation: spmPanelIn 0.6s cubic-bezier(.16,1,.3,1) both;
}
.spm-glow { position: absolute; border-radius: 9999px; filter: blur(70px); pointer-events: none; }
.spm-glow-1 { width: 320px; height: 320px; top: -120px; right: -80px;
  background: radial-gradient(circle, rgba(242,102,34,0.30) 0%, transparent 70%);
  animation: spmGlow 7s ease-in-out infinite; }
.spm-glow-2 { width: 280px; height: 280px; bottom: -140px; left: -100px;
  background: radial-gradient(circle, rgba(242,102,34,0.12) 0%, transparent 70%);
  animation: spmGlow 9s ease-in-out infinite reverse; }
.spm-grain {
  position: absolute; inset: 0; pointer-events: none; opacity: 0.04; mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}
.spm-close {
  position: absolute; top: 1.2rem; right: 1.2rem; z-index: 3;
  width: 2.2rem; height: 2.2rem; display: flex; align-items: center; justify-content: center;
  border-radius: 9999px; border: 1px solid rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.03); color: rgba(255,255,255,0.65); cursor: pointer;
  transition: all 0.3s cubic-bezier(.16,1,.3,1);
}
.spm-close:hover { background: rgba(255,255,255,0.09); color: #fff; transform: rotate(90deg); }
.spm-body {
  position: relative; z-index: 2;
  padding: clamp(1.8rem, 4vw, 2.8rem);
  max-height: 92vh; max-height: 92dvh;
  overflow-y: auto; overflow-x: hidden;
  -webkit-overflow-scrolling: touch; overscroll-behavior: contain;
  scrollbar-width: thin;
  scrollbar-color: rgba(242,102,34,0.35) transparent;
}
.spm-body::-webkit-scrollbar { width: 10px; }
.spm-body::-webkit-scrollbar-track { background: transparent; margin: 14px 0; }
.spm-body::-webkit-scrollbar-thumb {
  background: rgba(255,255,255,0.14); border-radius: 9999px;
  border: 3px solid transparent; background-clip: padding-box;
  transition: background 0.3s ease;
}
.spm-body::-webkit-scrollbar-thumb:hover {
  background: rgba(242,102,34,0.55); background-clip: padding-box;
}
.spm-header { margin-bottom: 1.9rem; }
.spm-eyebrow {
  display: flex; align-items: center; gap: 0.55rem; margin: 0 0 0.9rem;
  font-size: 0.72rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase;
  color: rgba(255,255,255,0.5);
}
.spm-dot { width: 6px; height: 6px; border-radius: 9999px; background: #F26622;
  box-shadow: 0 0 10px rgba(242,102,34,0.8); animation: spmPulse 2.4s ease-in-out infinite; flex: none; }
.spm-title {
  font-family: var(--font-display, "Plus Jakarta Sans Variable", sans-serif);
  font-size: clamp(1.8rem, 4.5vw, 2.5rem); font-weight: 800; line-height: 1.08;
  letter-spacing: -0.025em; color: #fff; margin: 0 0 1.4rem;
}
.spm-title em {
  font-family: var(--font-serif, "Instrument Serif", serif);
  font-style: italic; font-weight: 400; letter-spacing: -0.01em;
  background: linear-gradient(115deg, #ffae7a 0%, #F26622 55%, #e0531a 100%);
  -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
}
.spm-progress { display: flex; gap: 0.45rem; }
.spm-seg { height: 3px; flex: 1; border-radius: 9999px; background: rgba(255,255,255,0.1);
  position: relative; overflow: hidden; }
.spm-seg.is-on { background: linear-gradient(90deg, #F26622, #ff8a4c); box-shadow: 0 0 12px rgba(242,102,34,0.4); }

.spm-step { animation: spmStepIn 0.55s cubic-bezier(.16,1,.3,1) both; }

.spm-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; }
.spm-card {
  position: relative; display: flex; flex-direction: column; align-items: flex-start; gap: 0.35rem;
  text-align: left; padding: 1.3rem 1.2rem; border-radius: 16px; cursor: pointer;
  border: 1.5px solid rgba(255,255,255,0.09); background: rgba(255,255,255,0.018);
  transition: transform 0.4s cubic-bezier(.16,1,.3,1), border-color 0.3s ease, background 0.3s ease;
  animation: spmStepIn 0.55s cubic-bezier(.16,1,.3,1) both;
}
.spm-cards .spm-card:nth-child(1) { animation-delay: 0.05s; }
.spm-cards .spm-card:nth-child(2) { animation-delay: 0.1s; }
.spm-cards .spm-card:nth-child(3) { animation-delay: 0.15s; }
.spm-cards .spm-card:nth-child(4) { animation-delay: 0.2s; }
.spm-card:hover { transform: translateY(-3px); border-color: rgba(242,102,34,0.5); background: rgba(242,102,34,0.05); }
.spm-card.is-sel { border-color: #F26622; background: rgba(242,102,34,0.08); }
.spm-card-ico {
  display: flex; align-items: center; justify-content: center; width: 2.6rem; height: 2.6rem;
  margin-bottom: 0.5rem; border-radius: 12px; color: #F26622;
  background: rgba(242,102,34,0.1); border: 1px solid rgba(242,102,34,0.18);
  transition: all 0.3s ease;
}
.spm-card:hover .spm-card-ico { background: rgba(242,102,34,0.16); }
.spm-card-label { font-size: 1.02rem; font-weight: 700; color: #fff; }
.spm-card-desc { font-size: 0.8rem; color: rgba(255,255,255,0.48); }
.spm-card-arrow {
  position: absolute; top: 1.3rem; right: 1.2rem; color: #F26622;
  opacity: 0; transform: translateX(-6px); transition: all 0.35s cubic-bezier(.16,1,.3,1);
}
.spm-card:hover .spm-card-arrow { opacity: 1; transform: translateX(0); }

.spm-rows { display: flex; flex-direction: column; gap: 0.6rem; }
.spm-row {
  display: flex; align-items: center; gap: 0.9rem; width: 100%;
  padding: 1rem 1.2rem; border-radius: 14px; cursor: pointer; font-size: 0.96rem; color: #fff;
  border: 1.5px solid rgba(255,255,255,0.09); background: rgba(255,255,255,0.018);
  transition: transform 0.35s cubic-bezier(.16,1,.3,1), border-color 0.3s ease, background 0.3s ease;
  animation: spmStepIn 0.5s cubic-bezier(.16,1,.3,1) both;
}
.spm-rows .spm-row:nth-child(1) { animation-delay: 0.04s; }
.spm-rows .spm-row:nth-child(2) { animation-delay: 0.08s; }
.spm-rows .spm-row:nth-child(3) { animation-delay: 0.12s; }
.spm-rows .spm-row:nth-child(4) { animation-delay: 0.16s; }
.spm-rows .spm-row:nth-child(5) { animation-delay: 0.2s; }
.spm-row:hover { transform: translateX(4px); border-color: rgba(242,102,34,0.45); background: rgba(242,102,34,0.045); }
.spm-row.is-sel { border-color: #F26622; background: rgba(242,102,34,0.08); }
.spm-radio { width: 16px; height: 16px; border-radius: 9999px; flex: none;
  border: 1.5px solid rgba(255,255,255,0.25); transition: all 0.3s ease; position: relative; }
.spm-row:hover .spm-radio, .spm-row.is-sel .spm-radio { border-color: #F26622; }
.spm-row.is-sel .spm-radio { background: #F26622; box-shadow: inset 0 0 0 3px #160a03; }
.spm-row-label { flex: 1; text-align: left; }
.spm-row-arrow { color: #F26622; opacity: 0; transform: translateX(-6px); transition: all 0.35s cubic-bezier(.16,1,.3,1); }
.spm-row:hover .spm-row-arrow { opacity: 1; transform: translateX(0); }

.spm-form { display: flex; flex-direction: column; gap: 1.4rem; }
.spm-field { position: relative; }
.spm-field-row { display: flex; gap: 1.4rem; }
.spm-field-row .spm-field { flex: 1; }
.spm-input {
  width: 100%; padding: 1.25rem 0 0.55rem; font-size: 0.95rem; color: #fff;
  background: transparent; border: 0; border-bottom: 1.5px solid rgba(255,255,255,0.12);
  outline: none; transition: border-color 0.3s cubic-bezier(.16,1,.3,1); font-family: inherit;
}
.spm-input:focus { border-color: rgba(242,102,34,0.75); }
.spm-textarea { resize: vertical; min-height: 70px; }
.spm-flabel {
  position: absolute; left: 0; top: 1.25rem; font-size: 0.92rem; color: rgba(255,255,255,0.42);
  pointer-events: none; transition: all 0.3s cubic-bezier(.16,1,.3,1);
}
.spm-input:focus + .spm-flabel,
.spm-input:not(:placeholder-shown) + .spm-flabel {
  top: -0.1rem; font-size: 0.7rem; letter-spacing: 0.04em; color: rgba(242,102,34,0.9);
}
.spm-gdpr { display: flex; align-items: flex-start; gap: 0.65rem; cursor: pointer;
  font-size: 0.78rem; line-height: 1.5; color: rgba(255,255,255,0.5); }
.spm-gdpr-input { position: absolute; opacity: 0; width: 0; height: 0; }
.spm-gdpr-box {
  flex: none; width: 18px; height: 18px; margin-top: 1px; border-radius: 6px;
  border: 1.5px solid rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center;
  transition: all 0.25s ease;
}
.spm-gdpr-box svg { opacity: 0; transform: scale(0.5); transition: all 0.25s cubic-bezier(.16,1,.3,1); }
.spm-gdpr-input:checked + .spm-gdpr-box { background: #F26622; border-color: #F26622; }
.spm-gdpr-input:checked + .spm-gdpr-box svg { opacity: 1; transform: scale(1); }
.spm-gdpr-input:focus-visible + .spm-gdpr-box { box-shadow: 0 0 0 3px rgba(242,102,34,0.4); }

.spm-error { font-size: 0.82rem; color: #ff7a6b; margin: -0.4rem 0 0; }

.spm-actions { display: flex; align-items: center; justify-content: space-between; margin-top: 0.3rem; }
.spm-back {
  background: transparent; border: 0; padding: 0.5rem 0; cursor: pointer;
  font-size: 0.88rem; color: rgba(255,255,255,0.5); transition: color 0.3s ease;
}
.spm-back:hover { color: #fff; }
.spm-submit {
  display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.95rem 1.9rem;
  font-size: 0.92rem; font-weight: 600; color: #180A03; background: #fff; border: 0;
  border-radius: 9999px; cursor: pointer; white-space: nowrap;
  transition: transform 0.4s cubic-bezier(.16,1,.3,1), box-shadow 0.4s ease;
  box-shadow: 0 8px 24px rgba(0,0,0,0.25);
}
.spm-submit:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 14px 34px rgba(242,102,34,0.28); }
.spm-submit:hover:not(:disabled) svg { transform: translateX(3px); }
.spm-submit svg { transition: transform 0.35s cubic-bezier(.16,1,.3,1); }
.spm-submit:disabled { opacity: 0.6; cursor: not-allowed; }

.spm-success-icon {
  width: 3.4rem; height: 3.4rem; border-radius: 9999px; display: flex; align-items: center; justify-content: center;
  background: rgba(242,102,34,0.14); border: 1px solid rgba(242,102,34,0.25); margin-bottom: 1.3rem;
  animation: spmPop 0.5s cubic-bezier(.16,1,.3,1) both;
}
.spm-check { stroke-dasharray: 40; stroke-dashoffset: 40; animation: spmCheck 0.5s 0.25s cubic-bezier(.16,1,.3,1) forwards; }
.spm-sub { font-size: 0.95rem; color: rgba(255,255,255,0.6); line-height: 1.6; max-width: 420px; margin: 0 0 1.6rem; }

@keyframes spmOverlayIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes spmPanelIn { from { opacity: 0; transform: translateY(26px) scale(0.965); } to { opacity: 1; transform: none; } }
@keyframes spmStepIn { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
@keyframes spmPulse { 0%,100% { opacity: 0.5; transform: scale(1); } 50% { opacity: 1; transform: scale(1.25); } }
@keyframes spmGlow { 0%,100% { opacity: 0.5; } 50% { opacity: 0.9; } }
@keyframes spmCheck { to { stroke-dashoffset: 0; } }
@keyframes spmPop { from { opacity: 0; transform: scale(0.7); } to { opacity: 1; transform: scale(1); } }

/* Touch devices: arrow-urile nu au hover, asa ca le aratam discret. */
@media (hover: none) {
  .spm-card-arrow, .spm-row-arrow { opacity: 0.55; transform: none; }
}

@media (max-width: 560px) {
  /* Bottom-sheet: urca de jos, ocupa toata latimea. */
  .spm-overlay { padding: 0; align-items: flex-end; }
  .spm-panel {
    max-width: 100%;
    max-height: 92vh; max-height: 92dvh;
    border-radius: 24px 24px 0 0;
    border-bottom: 0;
    animation: spmSheetIn 0.55s cubic-bezier(.16,1,.3,1) both;
  }
  /* Maner de tip drag pentru afordanta vizuala. */
  .spm-panel::before {
    content: ""; position: absolute; z-index: 4; top: 0.7rem; left: 50%;
    transform: translateX(-50%); width: 38px; height: 4px; border-radius: 9999px;
    background: rgba(255,255,255,0.22);
  }
  .spm-body {
    max-height: 92vh; max-height: 92dvh;
    padding: 2.3rem 1.4rem calc(1.6rem + env(safe-area-inset-bottom, 0px));
  }
  .spm-close { top: 0.85rem; right: 0.9rem; width: 2rem; height: 2rem; }
  .spm-header { margin-bottom: 1.5rem; }
  .spm-title { margin-bottom: 1.1rem; }
  .spm-cards { grid-template-columns: 1fr; gap: 0.65rem; }
  .spm-card { padding: 1.1rem 1.15rem; }
  .spm-field-row { flex-direction: column; gap: 1.4rem; }
  .spm-actions { gap: 0.8rem; }
  .spm-submit { padding: 0.95rem 1.6rem; }
}
@keyframes spmSheetIn { from { opacity: 0; transform: translateY(100%); } to { opacity: 1; transform: none; } }

@media (prefers-reduced-motion: reduce) {
  .spm-overlay, .spm-panel, .spm-step, .spm-card, .spm-row, .spm-success-icon, .spm-check, .spm-dot, .spm-glow { animation: none !important; }
  .spm-card, .spm-row, .spm-submit, .spm-close { transition: border-color 0.2s ease, background 0.2s ease, color 0.2s ease; }
}
`;
