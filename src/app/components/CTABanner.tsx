export default function CTABanner() {
  return (
    <section className="py-section-y px-container-x" style={{ background: '#180A03' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="relative rounded-[24px] overflow-hidden px-[clamp(2rem,6vw,5rem)] py-[clamp(3rem,7vh,5rem)]"
          style={{ background: 'linear-gradient(135deg, #1a0c04 0%, #0d0806 100%)', border: '1px solid rgba(242,102,34,0.15)' }}
        >
          {/* Glow */}
          <div className="absolute top-[-30%] right-[-10%] w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(242,102,34,0.12) 0%, transparent 65%)' }}
          />

          <div className="relative z-[1] flex items-center justify-between gap-8 flex-wrap">
            <div>
              <div className="flex items-center gap-1.5 text-[0.8rem] font-semibold tracking-[0.12em] uppercase text-white/40 mb-4">
                <span className="shrink-0 inline-block w-[5px] h-[5px] rounded-full" style={{ backgroundColor: '#F26622' }}></span>
                Get Started
              </div>
              <h2 className="font-display text-[clamp(1.8rem,3.5vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.02em] text-white mb-3">
                Ready to grow<br />
                <em className="font-serif italic font-normal text-[1.02em]" style={{ color: '#F26622' }}>your business?</em>
              </h2>
              <p className="text-[0.95rem] text-white/55 max-w-[400px]">
                Let&apos;s build something great together. Fast delivery, professional results, no upfront costs.
              </p>
            </div>

            <div className="flex items-center gap-4 flex-wrap shrink-0">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-[0.95rem] font-semibold py-[0.9rem] px-8 rounded-full bg-white text-dark transition-all duration-400 ease-out-expo whitespace-nowrap"
                data-cursor="link"
              >
                Start a Project
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M6 14L14 6M14 6H6M14 6V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="tel:0752221510"
                className="text-[0.9rem] font-medium text-white/60 hover:text-white transition-colors duration-300 whitespace-nowrap"
                data-cursor="link"
              >
                or call 0752 221 510
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
