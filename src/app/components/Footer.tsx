export default function Footer() {
  return (
    <footer className="footer relative overflow-hidden py-[clamp(4rem,8vh,7rem)] px-container-x pb-8 border-t border-white/5" style={{ background: '#180A03' }}>
      <div
        className="ft-watermark absolute bottom-[-0.1em] left-0 font-display font-black leading-[0.85] pointer-events-none select-none whitespace-nowrap"
        style={{ fontSize: '15vw', WebkitTextFillColor: 'transparent', WebkitTextStroke: '1.5px rgba(255,255,255,0.05)' }}
        aria-hidden="true"
      >
        viral4hype
      </div>

      <div className="ft-inner relative z-[1] max-w-[1200px] mx-auto">
        <div className="ft-top grid grid-cols-[1fr_2fr] max-lg:grid-cols-1 gap-16 max-lg:gap-10 mb-16">
          <div className="ft-brand-col max-w-[300px] max-lg:max-w-full">
            <a href="/">
              <img src="/images/logo_v4h.png" alt="viral4hype" width="140" height="44" style={{ height: '32px', width: 'auto' }} className="opacity-80 mb-4 hover:opacity-100 transition-opacity block" />
            </a>
            <p className="text-[0.85rem] text-white/50 leading-[1.65]">
              Agenție de web design și marketing digital cu sediul în România. Lucrăm cu clienți din București, Constanța, Brașov, Cluj-Napoca, Iași, Timișoara și din toată țara.
            </p>
            <div className="ft-social flex gap-[0.7rem] mt-6">
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
          </div>

          <div className="ft-cols grid grid-cols-3 max-xs:grid-cols-1 max-md:grid-cols-2 gap-8 max-md:gap-6">
            <div>
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-white/50 mb-5">Services</p>
              <a href="/websites" className="text-link block w-fit text-[0.88rem] text-white/55 py-[0.3rem] transition-colors duration-300 hover:text-white" data-cursor="link">Business Websites</a>
              <a href="/shopify" className="text-link block w-fit text-[0.88rem] text-white/55 py-[0.3rem] transition-colors duration-300 hover:text-white" data-cursor="link">Shopify Stores</a>
              <a href="/marketing" className="text-link block w-fit text-[0.88rem] text-white/55 py-[0.3rem] transition-colors duration-300 hover:text-white" data-cursor="link">Google Ads</a>
              <a href="/marketing" className="text-link block w-fit text-[0.88rem] text-white/55 py-[0.3rem] transition-colors duration-300 hover:text-white" data-cursor="link">Digital Marketing</a>
            </div>
            <div>
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-white/50 mb-5">Company</p>
              <a href="/our-work" className="text-link block w-fit text-[0.88rem] text-white/55 py-[0.3rem] transition-colors duration-300 hover:text-white" data-cursor="link">Our Work</a>
              <a href="/shopify" className="text-link block w-fit text-[0.88rem] text-white/55 py-[0.3rem] transition-colors duration-300 hover:text-white" data-cursor="link">About Us</a>
              <a href="/contact" className="text-link block w-fit text-[0.88rem] text-white/55 py-[0.3rem] transition-colors duration-300 hover:text-white" data-cursor="link">Contact Us</a>
            </div>
            <div>
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-white/50 mb-5">Contact</p>
              <a href="tel:+40752221510" className="text-link block w-fit text-[0.88rem] text-white/55 py-[0.3rem] transition-colors duration-300 hover:text-white" data-cursor="link">+40 752 221 510</a>
              <a href="mailto:contact@viral4hype.com" className="text-link block w-fit text-[0.88rem] text-white/55 py-[0.3rem] transition-colors duration-300 hover:text-white" data-cursor="link">contact@viral4hype.com</a>
              <a href="https://www.google.com/maps/place/Viral+4+Hype/@45.8281953,19.7350693,6z/data=!3m1!4b1!4m6!3m5!1s0x239561cbf0276647:0x754560d0bd4dc421!8m2!3d45.9425072!4d25.0201084!16s%2Fg%2F11y1bk0xpw" target="_blank" rel="noopener noreferrer" className="text-link block w-fit text-[0.88rem] text-white/55 py-[0.3rem] transition-colors duration-300 hover:text-white/65" data-cursor="link">Bucuresti, Constanta, Romania</a>
            </div>
          </div>
        </div>

        <div className="ft-bottom flex justify-between items-center text-[0.78rem] text-white/55 border-t border-white/5 pt-6 flex-wrap max-xs:flex-col max-xs:text-center gap-[0.8rem]">
          <p>&copy; 2026 viral4hype. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="https://anpc.ro/utilizatori/" target="_blank" rel="noopener noreferrer" aria-label="ANPC" data-cursor="link" className="opacity-60 hover:opacity-100 transition-opacity duration-300">
              <img src="/images/ANPC-logo_final.png" alt="ANPC" width="80" height="40" style={{ height: '32px', width: 'auto' }} />
            </a>
            <a href="/terms-and-conditions" className="text-link text-white/55 transition-colors duration-300 hover:text-white/70" data-cursor="link">Terms</a>
            <a href="/privacy-policy" className="text-link text-white/55 transition-colors duration-300 hover:text-white/70" data-cursor="link">Privacy</a>
            <a href="/cookie-policy" className="text-link text-white/55 transition-colors duration-300 hover:text-white/70" data-cursor="link">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
