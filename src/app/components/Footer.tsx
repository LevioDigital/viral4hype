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
              <a href="https://www.linkedin.com/company/viral4hype/" target="_blank" rel="noopener noreferrer" className="ft-soc flex items-center justify-center w-9 h-9 rounded-full border border-white/10 text-white/55 transition-all duration-300 hover:text-white hover:-translate-y-0.5" data-cursor="link" aria-label="Linkedin">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2V9zM4 6a2 2 0 100-4 2 2 0 000 4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>
          </div>

          <div className="ft-cols grid grid-cols-3 max-xs:grid-cols-1 max-md:grid-cols-2 gap-8 max-md:gap-6">
            <div>
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-white/50 mb-5">Services</p>
              <a href="/websites" className="text-link block w-fit text-[0.88rem] text-white/55 py-[0.3rem] transition-colors duration-300 hover:text-white" data-cursor="link">Business Websites</a>
              <a href="/about-us" className="text-link block w-fit text-[0.88rem] text-white/55 py-[0.3rem] transition-colors duration-300 hover:text-white" data-cursor="link">Shopify Stores</a>
              <a href="/google-ads-management" className="text-link block w-fit text-[0.88rem] text-white/55 py-[0.3rem] transition-colors duration-300 hover:text-white" data-cursor="link">Google Ads</a>
              <a href="/google-ads-management" className="text-link block w-fit text-[0.88rem] text-white/55 py-[0.3rem] transition-colors duration-300 hover:text-white" data-cursor="link">Digital Marketing</a>
            </div>
            <div>
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-white/50 mb-5">Company</p>
              <a href="/our-work" className="text-link block w-fit text-[0.88rem] text-white/55 py-[0.3rem] transition-colors duration-300 hover:text-white" data-cursor="link">Our Work</a>
              <a href="/blog" className="text-link block w-fit text-[0.88rem] text-white/55 py-[0.3rem] transition-colors duration-300 hover:text-white" data-cursor="link">Blog</a>
              <a href="/about-us" className="text-link block w-fit text-[0.88rem] text-white/55 py-[0.3rem] transition-colors duration-300 hover:text-white" data-cursor="link">About Us</a>
              <a href="/contact" className="text-link block w-fit text-[0.88rem] text-white/55 py-[0.3rem] transition-colors duration-300 hover:text-white" data-cursor="link">Contact Us</a>
            </div>
            <div>
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-white/50 mb-5">Contact</p>
              <a href="tel:0752221510" className="text-link block w-fit text-[0.88rem] text-white/55 py-[0.3rem] transition-colors duration-300 hover:text-white" data-cursor="link">0752 221 510</a>
              <a href="mailto:contact@viral4hype.com" className="text-link block w-fit text-[0.88rem] text-white/55 py-[0.3rem] transition-colors duration-300 hover:text-white" data-cursor="link">contact@viral4hype.com</a>
              <a href="https://www.google.com/maps/place/Viral+4+Hype/@45.8281953,19.7350693,6z/data=!3m1!4b1!4m6!3m5!1s0x239561cbf0276647:0x754560d0bd4dc421!8m2!3d45.9425072!4d25.0201084!16s%2Fg%2F11y1bk0xpw" target="_blank" rel="noopener noreferrer" className="text-link block w-fit text-[0.88rem] text-white/55 py-[0.3rem] transition-colors duration-300 hover:text-white/65" data-cursor="link">Bucuresti, Constanta, Romania</a>
            </div>
          </div>
        </div>

        <div className="ft-bottom flex justify-between items-center text-[0.78rem] text-white/55 border-t border-white/5 pt-6 flex-wrap max-xs:flex-col max-xs:text-center gap-[0.8rem]">
          <p>&copy; 2026 viral4hype. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/terms-and-conditions" className="text-link text-white/55 transition-colors duration-300 hover:text-white/70" data-cursor="link">Terms</a>
            <a href="/privacy-policy" className="text-link text-white/55 transition-colors duration-300 hover:text-white/70" data-cursor="link">Privacy</a>
            <a href="/cookie-policy" className="text-link text-white/55 transition-colors duration-300 hover:text-white/70" data-cursor="link">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
