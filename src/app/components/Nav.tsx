export default function Nav() {
  return (
    <>
      {/* Grain overlay */}
      <svg
        className="fixed inset-0 w-full h-full pointer-events-none z-[9998] opacity-[0.038] mix-blend-overlay hidden lg:block"
        aria-hidden="true"
      >
        <filter id="grain-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-filter)" />
      </svg>

      {/* Custom cursor */}
      <div className="c-cursor fixed top-0 left-0 z-[2147483647] pointer-events-none hidden lg:block" id="cursor">
        <div className="c-dot absolute w-[6px] h-[6px] bg-white rounded-full origin-center"></div>
        <div className="c-ring absolute w-9 h-9 border-[1.5px] border-white rounded-full origin-center" id="cursor-ring"></div>
      </div>

      {/* Desktop nav */}
      <nav
        aria-label="Main navigation"
        className="nav fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between py-[1.4rem] px-[1.5rem] lg:px-container-x transition-all duration-500 ease-out-expo"
        id="nav"
      >
        <a href="/" className="nav-logo flex items-center" style={{ marginLeft: 'clamp(1rem, 5vw, 100px)' }} data-cursor="link">
          <img
            src="/images/logo_v4h.png"
            alt="viral4hype"
            width="120"
            height="38"
            style={{ height: '30px', width: 'auto', display: 'block' }}
            className="transition-opacity hover:opacity-80"
          />
        </a>

        <div className="nav-links flex gap-[2.2rem] max-lg:hidden">
          <a href="/websites" className="nav-link text-sm font-medium transition-colors duration-300 relative text-white/60 hover:text-white" data-cursor="link">Websites</a>
          <a href="/marketing" className="nav-link text-sm font-medium transition-colors duration-300 relative text-white/60 hover:text-white" data-cursor="link">Marketing</a>
          <a href="/shopify" className="nav-link text-sm font-medium transition-colors duration-300 relative text-white/60 hover:text-white" data-cursor="link">Shopify</a>
          <a href="/our-work" className="nav-link text-sm font-medium transition-colors duration-300 relative text-white/60 hover:text-white" data-cursor="link">Our Work</a>
        </div>

        <a
          href="/contact"
          className="nav-cta text-[0.85rem] font-semibold py-[0.6rem] px-6 rounded-full transition-all duration-400 ease-out-expo relative overflow-hidden max-lg:hidden bg-white text-dark"
          style={{ marginRight: '100px' }}
          data-cursor="link"
        >
          <span className="relative z-1">Start a Project</span>
        </a>

        <button
          className="burger hidden max-lg:flex flex-col gap-1.5 p-1 z-[1001]"
          style={{ marginRight: '20px' }}
          id="burger"
          aria-label="Menu"
        >
          <span className="block w-[26px] h-0.5 rounded-sm transition-all duration-[350ms] ease-out-expo origin-center bg-white"></span>
          <span className="block w-[26px] h-0.5 rounded-sm transition-all duration-[350ms] ease-out-expo origin-center bg-white"></span>
          <span className="block w-[26px] h-0.5 rounded-sm transition-all duration-[350ms] ease-out-expo origin-center bg-white"></span>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className="mob-menu fixed inset-0 z-[999] overflow-hidden opacity-0 pointer-events-none transition-opacity duration-400"
        style={{ background: '#180A03' }}
        id="mob-menu"
      >
        <div className="absolute top-[-20%] right-[-20%] w-[90vw] h-[90vw] max-w-[500px] max-h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(242,102,34,0.22) 0%, rgba(242,102,34,0.07) 40%, transparent 70%)' }}
        ></div>
        <div className="absolute bottom-[-15%] left-[-20%] w-[80vw] h-[80vw] max-w-[450px] max-h-[450px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(242,102,34,0.15) 0%, rgba(242,102,34,0.04) 40%, transparent 70%)' }}
        ></div>

        <div className="absolute inset-0 flex flex-col overflow-y-auto">
          <div className="flex flex-col items-center w-full pt-24 pb-12 px-6 my-auto relative z-[1]">
            <nav aria-label="Mobile navigation" className="flex flex-col items-center gap-[clamp(0.4rem,2.5vh,1.2rem)] w-full mb-[clamp(1.5rem,4vh,3rem)]">
              <a href="/" className="mob-link font-display text-[clamp(1.4rem,4vh,2.4rem)] font-bold transition-colors duration-300 text-white/70 hover:text-white">Home</a>
              <a href="/websites" className="mob-link font-display text-[clamp(1.4rem,4vh,2.4rem)] font-bold transition-colors duration-300 text-white/70 hover:text-white">Websites</a>
              <a href="/marketing" className="mob-link font-display text-[clamp(1.4rem,4vh,2.4rem)] font-bold transition-colors duration-300 text-white/70 hover:text-white">Marketing</a>
              <a href="/shopify" className="mob-link font-display text-[clamp(1.4rem,4vh,2.4rem)] font-bold transition-colors duration-300 text-white/70 hover:text-white">Shopify</a>
              <a href="/our-work" className="mob-link font-display text-[clamp(1.4rem,4vh,2.4rem)] font-bold transition-colors duration-300 text-white/70 hover:text-white">Our Work</a>
              <a href="/contact" className="mob-link font-display text-[clamp(1.4rem,4vh,2.4rem)] font-bold transition-colors duration-300 text-gradient">Contact Us</a>

              <div className="w-20 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent my-[clamp(1.2rem,3.5vh,2.5rem)]"></div>

              <div className="flex flex-col items-center gap-3 mb-[clamp(1.2rem,3.5vh,2rem)]">
                <a href="tel:+40752221510" className="flex items-center gap-2 text-[0.85rem] text-white/55 hover:text-white/80 transition-colors duration-300">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  +40 752 221 510
                </a>
                <a href="mailto:contact@viral4hype.com" className="flex items-center gap-2 text-[0.85rem] text-white/55 hover:text-white/80 transition-colors duration-300">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  contact@viral4hype.com
                </a>
              </div>

              <div className="flex gap-3">
                <a href="https://www.facebook.com/viral4hype/" target="_blank" rel="noopener noreferrer" className="ft-soc flex items-center justify-center w-9 h-9 rounded-full border border-white/10 text-white/55 transition-all duration-300 hover:text-white hover:-translate-y-0.5" data-cursor="link" aria-label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>
                <a href="https://www.instagram.com/viral4hype/" target="_blank" rel="noopener noreferrer" className="ft-soc flex items-center justify-center w-9 h-9 rounded-full border border-white/10 text-white/55 transition-all duration-300 hover:text-white hover:-translate-y-0.5" data-cursor="link" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" /><circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
                </a>
                <a href="https://www.reddit.com/r/RealGoogleAds/" target="_blank" rel="noopener noreferrer" className="ft-soc flex items-center justify-center w-9 h-9 rounded-full border border-white/10 text-white/55 transition-all duration-300 hover:text-white hover:-translate-y-0.5" data-cursor="link" aria-label="Reddit">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/><path d="M20 12a2 2 0 00-2-2 2 2 0 00-1.4.6C15.1 9.8 13.6 9.4 12 9.4l.8-3.7 2.5.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0l-2.8-.6a.4.4 0 00-.5.3L11 9.4c-1.6.1-3.1.5-4.6 1.2A2 2 0 002 12a2 2 0 001 1.7 3.5 3.5 0 000 .5c0 2.5 2.7 4.5 6 4.5s6-2 6-4.5a3.5 3.5 0 000-.5A2 2 0 0020 12z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="9" cy="13" r="1" fill="currentColor"/><circle cx="15" cy="13" r="1" fill="currentColor"/><path d="M9.5 16a4 4 0 005 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
