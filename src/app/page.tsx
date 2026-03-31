import ViralInteractions from "./ViralInteractions";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-white focus:text-dark focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold focus:text-sm"
      >
        Skip to main content
      </a>{" "}
      <svg
        className="fixed inset-0 w-full h-full pointer-events-none z-[9998] opacity-[0.038] mix-blend-overlay hidden lg:block"
        aria-hidden="true"
      >
        {" "}
        <filter id="grain-filter">
          {" "}
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.72"
            numOctaves="4"
            stitchTiles="stitch"
          ></feTurbulence>{" "}
          <feColorMatrix type="saturate" values="0"></feColorMatrix>{" "}
        </filter>{" "}
        <rect width="100%" height="100%" filter="url(#grain-filter)"></rect>{" "}
      </svg>{" "}
      <div
        className="c-cursor fixed top-0 left-0 z-[2147483647] pointer-events-none hidden lg:block"
        id="cursor"
      >
        {" "}
        <div className="c-dot absolute w-[6px] h-[6px] bg-white rounded-full origin-center"></div>{" "}
        <div
          className="c-ring absolute w-9 h-9 border-[1.5px] border-white rounded-full origin-center"
          id="cursor-ring"
        ></div>{" "}
      </div>{" "}
      {/*  ====== NAV ======  */}
      <nav
        aria-label="Main navigation"
        className="nav fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between py-[1.4rem] px-[1.5rem] lg:px-container-x transition-all duration-500 ease-out-expo"
        id="nav"
      >
        {" "}
        <a href="/" className="nav-logo flex items-center" style={{ marginLeft: 'clamp(1rem, 5vw, 100px)' }} data-cursor="link">
          <img
            src="/images/logo_v4h.png"
            alt="viral4hype"
            width="120"
            height="38"
            style={{ height: '30px', width: 'auto', display: 'block' }}
            className="transition-opacity hover:opacity-80"
          />
        </a>{" "}
        <div className="nav-links flex gap-[2.2rem] max-lg:hidden">
          {" "}
          <a
            href="/websites"
            className="nav-link text-sm font-medium transition-colors duration-300 relative text-white/60 hover:text-white"
            data-cursor="link"
          >
            Websites
          </a>
          <a
            href="/google-ads-management"
            className="nav-link text-sm font-medium transition-colors duration-300 relative text-white/60 hover:text-white"
            data-cursor="link"
          >
            Google Ads
          </a>
          <a
            href="/our-work"
            className="nav-link text-sm font-medium transition-colors duration-300 relative text-white/60 hover:text-white"
            data-cursor="link"
          >
            Our Work
          </a>
          <a
            href="/blog"
            className="nav-link text-sm font-medium transition-colors duration-300 relative text-white/60 hover:text-white"
            data-cursor="link"
          >
            Blog
          </a>
          <a
            href="/about-us"
            className="nav-link text-sm font-medium transition-colors duration-300 relative text-white/60 hover:text-white"
            data-cursor="link"
          >
            About
          </a>{" "}
        </div>{" "}
        <a
          href="/contact"
          className="nav-cta text-[0.85rem] font-semibold py-[0.6rem] px-6 rounded-full transition-all duration-400 ease-out-expo relative overflow-hidden max-lg:hidden bg-white text-dark"
          style={{ marginRight: '100px' }}
          data-cursor="link"
        >
          {" "}
          <span className="relative z-1">Start a Project</span>{" "}
        </a>{" "}
        <button
          className="burger hidden max-lg:flex flex-col gap-1.5 p-1 z-[1001]"
          style={{ marginRight: '20px' }}
          id="burger"
          aria-label="Menu"
        >
          {" "}
          <span className="block w-[26px] h-0.5 rounded-sm transition-all duration-[350ms] ease-out-expo origin-center bg-white"></span>{" "}
          <span className="block w-[26px] h-0.5 rounded-sm transition-all duration-[350ms] ease-out-expo origin-center bg-white"></span>{" "}
          <span className="block w-[26px] h-0.5 rounded-sm transition-all duration-[350ms] ease-out-expo origin-center bg-white"></span>{" "}
        </button>{" "}
      </nav>{" "}
      {/*  Mobile menu  */}{" "}
      <div
        className="mob-menu fixed inset-0 z-[999] overflow-hidden opacity-0 pointer-events-none transition-opacity duration-400"
        style={{ background: '#180A03' }}
        id="mob-menu"
      >
        {" "}
        {/*  Ambient gradient glows — NO blur filter (kills mobile GPU). Soft radial gradients only.  */}{" "}
        <div
          className="absolute top-[-20%] right-[-20%] w-[90vw] h-[90vw] max-w-[500px] max-h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(242,102,34,0.22) 0%, rgba(242,102,34,0.07) 40%, transparent 70%)",
          }}
        ></div>{" "}
        <div
          className="absolute bottom-[-15%] left-[-20%] w-[80vw] h-[80vw] max-w-[450px] max-h-[450px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(242,102,34,0.15) 0%, rgba(242,102,34,0.04) 40%, transparent 70%)",
          }}
        ></div>{" "}
        {/*  Scrollable inner wrapper — handles landscape overflow independently  */}{" "}
        <div className="absolute inset-0 flex flex-col overflow-y-auto">
          {" "}
          <div className="flex flex-col items-center w-full pt-24 pb-12 px-6 my-auto relative z-[1]">
            {" "}
            {/*  Nav links  */}{" "}
            <nav
              aria-label="Mobile navigation"
              className="flex flex-col items-center gap-[clamp(0.4rem,2.5vh,1.2rem)] w-full mb-[clamp(1.5rem,4vh,3rem)]"
            >
              {" "}
              <a
                href="/"
                className="mob-link font-display text-[clamp(1.4rem,4vh,2.4rem)] font-bold transition-colors duration-300 text-white/70 hover:text-white"
              >
                {" "}
                Home{" "}
              </a>
              <a
                href="/websites"
                className="mob-link font-display text-[clamp(1.4rem,4vh,2.4rem)] font-bold transition-colors duration-300 text-white/70 hover:text-white"
              >
                {" "}
                Websites{" "}
              </a>
              <a
                href="/google-ads-management"
                className="mob-link font-display text-[clamp(1.4rem,4vh,2.4rem)] font-bold transition-colors duration-300 text-white/70 hover:text-white"
              >
                {" "}
                Google Ads{" "}
              </a>
              <a
                href="/our-work"
                className="mob-link font-display text-[clamp(1.4rem,4vh,2.4rem)] font-bold transition-colors duration-300 text-white/70 hover:text-white"
              >
                {" "}
                Our Work{" "}
              </a>
              <a
                href="/blog"
                className="mob-link font-display text-[clamp(1.4rem,4vh,2.4rem)] font-bold transition-colors duration-300 text-white/70 hover:text-white"
              >
                {" "}
                Blog{" "}
              </a>
              <a
                href="/about-us"
                className="mob-link font-display text-[clamp(1.4rem,4vh,2.4rem)] font-bold transition-colors duration-300 text-white/70 hover:text-white"
              >
                {" "}
                About{" "}
              </a>
              <a
                href="/contact"
                className="mob-link font-display text-[clamp(1.4rem,4vh,2.4rem)] font-bold transition-colors duration-300 text-gradient"
              >
                {" "}
                Contact Us{" "}
              </a>{" "}
              {/*  Divider  */}{" "}
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent my-[clamp(1.2rem,3.5vh,2.5rem)]"></div>{" "}
              {/*  Contact details  */}{" "}
              <div className="flex flex-col items-center gap-3 mb-[clamp(1.2rem,3.5vh,2rem)]">
                {" "}
                <a
                  href="tel:0752221510"
                  className="flex items-center gap-2 text-[0.85rem] text-white/55 hover:text-white/80 transition-colors duration-300"
                >
                  {" "}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="flex-shrink-0"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>{" "}
                  0752 221 510{" "}
                </a>{" "}
                <a
                  href="mailto:contact@viral4hype.com"
                  className="flex items-center gap-2 text-[0.85rem] text-white/55 hover:text-white/80 transition-colors duration-300"
                >
                  {" "}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="flex-shrink-0"
                  >
                    <path
                      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <polyline
                      points="22,6 12,13 2,6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></polyline>
                  </svg>{" "}
                  contact@viral4hype.com{" "}
                </a>{" "}
              </div>{" "}
              {/*  Social icons  */}{" "}
              <div className="flex gap-3">
                {" "}
                <a
                  href="https://www.facebook.com/viral4hype/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ft-soc flex items-center justify-center w-9 h-9 rounded-full border border-white/10 text-white/55 transition-all duration-300 hover:text-white hover:-translate-y-0.5"
                  data-cursor="link"
                  aria-label="Facebook"
                >
                  {" "}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>{" "}
                </a>
                <a
                  href="https://www.instagram.com/viral4hype/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ft-soc flex items-center justify-center w-9 h-9 rounded-full border border-white/10 text-white/55 transition-all duration-300 hover:text-white hover:-translate-y-0.5"
                  data-cursor="link"
                  aria-label="Instagram"
                >
                  {" "}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    ></rect>
                    <circle
                      cx="12"
                      cy="12"
                      r="5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    ></circle>
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1"
                      fill="currentColor"
                    ></circle>
                  </svg>{" "}
                </a>
                <a
                  href="https://www.linkedin.com/company/viral4hype/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ft-soc flex items-center justify-center w-9 h-9 rounded-full border border-white/10 text-white/55 transition-all duration-300 hover:text-white hover:-translate-y-0.5"
                  data-cursor="link"
                  aria-label="Linkedin"
                >
                  {" "}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2V9zM4 6a2 2 0 100-4 2 2 0 000 4z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>{" "}
                </a>{" "}
              </div>{" "}
            </nav>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/*  Nav handler — zero dependencies, works instantly on page load  */}{" "}
      <main id="main-content">
        {" "}
        <section
          className="hero relative min-h-svh flex flex-col justify-end px-container-x pb-[clamp(3rem,6vh,5rem)] pt-[120px] overflow-hidden"
          style={{ background: "#180A03" }}
        >
          {" "}
          {/*  Static gradients removed to allow spotlight effect  */}{" "}
          {/*  Ambient glows dimmed/removed  */}{" "}
          <div
            className="hero-glow glow-1 absolute rounded-full blur-[100px] pointer-events-none hidden lg:block"
            style={{
              width: "55vw",
              height: "55vw",
              maxWidth: "700px",
              maxHeight: "700px",
              background:
                "radial-gradient(circle, rgba(8,117,233,0.08) 0%, transparent 65%)",
              top: "-15%",
              right: "-10%",
            }}
          ></div>{" "}
          <div
            className="hero-glow glow-2 absolute rounded-full blur-[100px] pointer-events-none hidden lg:block"
            style={{
              width: "40vw",
              height: "40vw",
              maxWidth: "520px",
              maxHeight: "520px",
              background:
                "radial-gradient(circle, rgba(131,9,238,0.06) 0%, transparent 65%)",
              bottom: "5%",
              left: "-8%",
            }}
          ></div>{" "}
          <div
            className="hero-glow glow-3 absolute rounded-full blur-[100px] pointer-events-none hidden lg:block"
            style={{
              width: "28vw",
              height: "28vw",
              maxWidth: "360px",
              maxHeight: "360px",
              background:
                "radial-gradient(circle, rgba(41,213,90,0.14) 0%, transparent 65%)",
              top: "45%",
              left: "35%",
            }}
          ></div>{" "}
          {/*  Canvases  */}{" "}
          <canvas
            id="hero-reveal-canvas"
            className="hero-reveal-canvas absolute inset-0 z-[2] pointer-events-none"
            aria-hidden="true"
          ></canvas>{" "}
          <canvas
            className="hero-dots absolute inset-0 z-[1] pointer-events-none"
            id="hero-dots"
            aria-hidden="true"
          ></canvas>{" "}
          {/*  Testimonial fragments  */}{" "}
          <div
            className="hero-testimonials absolute inset-0 z-[1] pointer-events-none max-lg:hidden"
            aria-hidden="true"
          >
            {" "}
            <div className="ht-frag ht-frag-1 absolute max-w-[280px] font-sans">
              {" "}
              <span className="ht-stars text-xs tracking-wide text-[#f5c518]">
                ★★★★★
              </span>{" "}
              <p className="text-[clamp(0.85rem,1.2vw,1.05rem)] font-semibold text-white/90 leading-[1.4] mt-1 mb-[0.4rem]">
                &quot;If I could have given 6 stars, I would have.&quot;
              </p>{" "}
              <span className="ht-author text-[0.72rem] text-white/55 font-medium tracking-[0.02em]">
                — Elene P., verified review
              </span>{" "}
            </div>
            <div className="ht-frag ht-frag-2 absolute max-w-[280px] font-sans">
              {" "}
              <span className="ht-stars text-xs tracking-wide text-[#f5c518]">
                ★★★★★
              </span>{" "}
              <p className="text-[clamp(0.85rem,1.2vw,1.05rem)] font-semibold text-white/90 leading-[1.4] mt-1 mb-[0.4rem]">
                &quot;Alex&#39;s professionalism and creativity were outstanding
                throughout.&quot;
              </p>{" "}
              <span className="ht-author text-[0.72rem] text-white/55 font-medium tracking-[0.02em]">
                — Lee M., verified review
              </span>{" "}
            </div>
            <div className="ht-frag ht-frag-3 absolute max-w-[280px] font-sans">
              {" "}
              <span className="ht-stars text-xs tracking-wide text-[#f5c518]">
                ★★★★★
              </span>{" "}
              <p className="text-[clamp(0.85rem,1.2vw,1.05rem)] font-semibold text-white/90 leading-[1.4] mt-1 mb-[0.4rem]">
                &quot;This is the second website they&#39;ve built for me.&quot;
              </p>{" "}
              <span className="ht-author text-[0.72rem] text-white/55 font-medium tracking-[0.02em]">
                — Katy W., repeat client
              </span>{" "}
            </div>
            <div className="ht-frag ht-frag-4 absolute max-w-[280px] font-sans">
              {" "}
              <span className="ht-stars text-xs tracking-wide text-[#f5c518]">
                ★★★★★
              </span>{" "}
              <p className="text-[clamp(0.85rem,1.2vw,1.05rem)] font-semibold text-white/90 leading-[1.4] mt-1 mb-[0.4rem]">
                &quot;This is the second website viral4hype has developed for
                me, and once again they&#39;ve exceeded my
                expectations.&quot;
              </p>{" "}
              <span className="ht-author text-[0.72rem] text-white/55 font-medium tracking-[0.02em]">
                — Meggan P., verified review
              </span>{" "}
            </div>
            <div className="ht-frag ht-frag-5 absolute max-w-[280px] font-sans">
              {" "}
              <span className="ht-stars text-xs tracking-wide text-[#f5c518]">
                ★★★★★
              </span>{" "}
              <p className="text-[clamp(0.85rem,1.2vw,1.05rem)] font-semibold text-white/90 leading-[1.4] mt-1 mb-[0.4rem]">
                &quot;Everyone who sees the website thinks it&#39;s
                amazing.&quot;
              </p>{" "}
              <span className="ht-author text-[0.72rem] text-white/55 font-medium tracking-[0.02em]">
                — Adam F., dermatology clinic
              </span>{" "}
            </div>
            <div className="ht-frag ht-frag-6 absolute max-w-[280px] font-sans">
              {" "}
              <span className="ht-stars text-xs tracking-wide text-[#f5c518]">
                ★★★★★
              </span>{" "}
              <p className="text-[clamp(0.85rem,1.2vw,1.05rem)] font-semibold text-white/90 leading-[1.4] mt-1 mb-[0.4rem]">
                &quot;They absolutely delivered to the brief and then exceeded
                expectations.&quot;
              </p>{" "}
              <span className="ht-author text-[0.72rem] text-white/55 font-medium tracking-[0.02em]">
                — Sarah S., verified review
              </span>{" "}
            </div>{" "}
          </div>{" "}
          <div className="hero-inner relative z-[3]">
            {" "}
            {/*  Badge  */}{" "}
            <div className="inline-flex items-center gap-2 text-[0.8rem] font-medium tracking-[0.08em] text-white/50 border border-white/10 rounded-[40px] py-[0.35rem] px-4 mb-[clamp(2rem,4vh,3.5rem)] backdrop-blur-[8px] hero-badge opacity-0">
              <span className="badge-dot w-[6px] h-[6px] rounded-full animate-badge-pulse" style={{ backgroundColor: '#F26622' }}></span>
              Websites &amp; Google Ads
            </div>{" "}
            {/*  H1  */}{" "}
            <h1 className="hero-title font-display leading-[0.92] tracking-[-0.02em] mb-[clamp(2.5rem,5vh,4rem)]">
              {" "}
              <span className="ht-row ht-row-xl block overflow-hidden leading-[0.95] mb-[0.2em]">
                {" "}
                <span
                  className="ht-word ht-build block will-change-transform font-display font-black text-[clamp(3rem,8.5vw,9.5rem)] tracking-[-0.03em] text-white"
                  style={{ transform: "translateY(100%)" }}
                >
                  We are the partner
                </span>{" "}
              </span>{" "}
              <span className="ht-row ht-row-xl block overflow-hidden leading-[0.95] pb-[2em]">
                {" "}
                <span
                  className="ht-word ht-serif inline-block will-change-transform font-serif italic font-normal text-[clamp(3.5rem,10vw,11rem)]"
                  style={{ transform: "translateY(100%)" }}
                >
                  every business needs
                </span>{" "}
              </span>{" "}
            </h1>{" "}
            {/*  Description + CTAs  */}{" "}
            <div className="hero-bottom opacity-0 flex items-start justify-between gap-[clamp(2rem,4vw,5rem)] flex-wrap mb-[clamp(2.5rem,5vh,4rem)]">
              {" "}
              <p className="hero-desc text-[clamp(0.9rem,1.3vw,1.05rem)] text-white/70 leading-[1.7] max-w-[440px]">
                We are a company that focuses on fast execution, efficiency, and results. We seek to establish long-term partnerships that will be the foundation of success stories.
              </p>{" "}
              <div className="hero-actions flex items-center gap-6 shrink-0 flex-wrap pt-[0.4rem]">
                {" "}
                <a
                  href="/our-work"
                  className="btn-dark inline-flex items-center gap-2 text-[0.95rem] font-semibold py-[0.9rem] px-8 rounded-full bg-white text-dark transition-all duration-400 ease-out-expo relative overflow-hidden whitespace-nowrap"
                  data-cursor="link"
                >
                  <span className="btn-text relative z-[1]">See Our Work</span>
                  <span className="btn-icon relative z-[1] flex transition-transform duration-300 ease-out-expo">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M6 14L14 6M14 6H6M14 6V14"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                </a>{" "}
                <a
                  href="/contact"
                  className="btn-ghost inline-flex items-center text-[0.95rem] font-semibold text-white/70 py-[0.9rem] border-b-[2px] border-white/20 transition-all duration-[350ms] relative hover:text-white hover:border-white/60"
                  data-cursor="link"
                >
                  Let&#39;s Talk
                </a>{" "}
              </div>{" "}
            </div>{" "}
            {/*  Stats bar  */}{" "}
            <div className="hero-stats opacity-0 flex items-center gap-8 pt-6 border-t border-white/[0.06] flex-wrap">
              {" "}
              <div className="stat flex flex-col gap-[0.15rem]">
                {" "}
                <span className="stat-num text-[clamp(1.1rem,1.8vw,1.5rem)] font-extrabold text-white tracking-[0.18em]">
                  ★★★★★
                </span>{" "}
                <span className="stat-label text-xs font-medium text-white/55 uppercase tracking-[0.08em]">
                  Customer Reviews
                </span>{" "}
              </div>{" "}
              <div className="stat-div w-px h-10 bg-white/[0.08]"></div>{" "}
              <div className="stat flex flex-col gap-[0.15rem]">
                {" "}
                <span className="stat-num text-[clamp(1.1rem,1.8vw,1.5rem)] font-extrabold text-white tracking-[-0.02em]">
                  ROMANIA
                </span>{" "}
                <span className="stat-label text-xs font-medium text-white/55 uppercase tracking-[0.08em]">
                  Local Agency
                </span>{" "}
              </div>{" "}
              {/*  Scroll cue  */}{" "}
              <div className="hero-scroll opacity-0 ml-auto flex items-center gap-[0.7rem] text-[0.7rem] font-medium tracking-[0.15em] uppercase text-white/55 max-lg:hidden">
                {" "}
                <div className="scroll-track w-[1.5px] h-10 bg-white/20 relative overflow-hidden rounded-sm">
                  {" "}
                  <div className="scroll-fill w-full h-[14px] bg-white/70 rounded-sm animate-scroll-fill"></div>{" "}
                </div>{" "}
                <span>Scroll</span>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <div className="marquee-wrap overflow-hidden bg-off-white border-y border-black/[0.06] py-[1.4rem]">
          {" "}
          <div className="marquee-tape overflow-hidden">
            {" "}
            <div className="marquee-inner flex items-center whitespace-nowrap w-max animate-marquee">
              {" "}
              {/*  Set 1  */}{" "}
              <span className="mq-item font-sans text-[clamp(0.85rem,1.2vw,1rem)] font-bold uppercase tracking-[0.1em] text-text-dark px-6">
                CONSTANTA, ROMANIA
              </span>{" "}
              <span className="mq-dot text-[0.7rem]" style={{ color: '#F26622' }}>●</span>{" "}
              <span className="mq-item font-sans text-[clamp(0.85rem,1.2vw,1rem)] font-bold uppercase tracking-[0.1em] text-text-dark px-6">
                BUCURESTI, ROMANIA
              </span>{" "}
              <span className="mq-dot text-[0.7rem]" style={{ color: '#F26622' }}>●</span>{" "}
              <span className="mq-item font-sans text-[clamp(0.85rem,1.2vw,1rem)] font-bold uppercase tracking-[0.1em] text-text-dark px-6">
                Web Design
              </span>{" "}
              <span className="mq-dot text-[0.7rem]" style={{ color: '#F26622' }}>●</span>{" "}
              <span className="mq-item font-sans text-[clamp(0.85rem,1.2vw,1rem)] font-bold uppercase tracking-[0.1em] text-text-dark px-6">
                Web Development
              </span>{" "}
              <span className="mq-dot text-[0.7rem]" style={{ color: '#F26622' }}>●</span>{" "}
              <span className="mq-item font-sans text-[clamp(0.85rem,1.2vw,1rem)] font-bold uppercase tracking-[0.1em] text-text-dark px-6">
                Video Content
              </span>{" "}
              <span className="mq-dot text-[0.7rem]" style={{ color: '#F26622' }}>●</span>{" "}
              <span className="mq-item font-sans text-[clamp(0.85rem,1.2vw,1rem)] font-bold uppercase tracking-[0.1em] text-text-dark px-6">
                Google Ads
              </span>{" "}
              <span className="mq-dot text-[0.7rem]" style={{ color: '#F26622' }}>●</span>{" "}
              <span className="mq-item font-sans text-[clamp(0.85rem,1.2vw,1rem)] font-bold uppercase tracking-[0.1em] text-text-dark px-6">
                Meta Ads
              </span>{" "}
              <span className="mq-dot text-[0.7rem]" style={{ color: '#F26622' }}>●</span>{" "}
              <span className="mq-item font-sans text-[clamp(0.85rem,1.2vw,1rem)] font-bold uppercase tracking-[0.1em] text-text-dark px-6">
                Website Support
              </span>{" "}
              <span className="mq-dot text-[0.7rem]" style={{ color: '#F26622' }}>●</span>{" "}
              <span className="mq-item font-sans text-[clamp(0.85rem,1.2vw,1rem)] font-bold uppercase tracking-[0.1em] text-text-dark px-6">
                Results Driven
              </span>{" "}
              <span className="mq-dot text-[0.7rem]" style={{ color: '#F26622' }}>●</span>{" "}
              {/*  Set 2 — identical for seamless loop  */}{" "}
              <span className="mq-item font-sans text-[clamp(0.85rem,1.2vw,1rem)] font-bold uppercase tracking-[0.1em] text-text-dark px-6">
                CONSTANTA, ROMANIA
              </span>{" "}
              <span className="mq-dot text-[0.7rem]" style={{ color: '#F26622' }}>●</span>{" "}
              <span className="mq-item font-sans text-[clamp(0.85rem,1.2vw,1rem)] font-bold uppercase tracking-[0.1em] text-text-dark px-6">
                BUCURESTI, ROMANIA
              </span>{" "}
              <span className="mq-dot text-[0.7rem]" style={{ color: '#F26622' }}>●</span>{" "}
              <span className="mq-item font-sans text-[clamp(0.85rem,1.2vw,1rem)] font-bold uppercase tracking-[0.1em] text-text-dark px-6">
                Web Design
              </span>{" "}
              <span className="mq-dot text-[0.7rem]" style={{ color: '#F26622' }}>●</span>{" "}
              <span className="mq-item font-sans text-[clamp(0.85rem,1.2vw,1rem)] font-bold uppercase tracking-[0.1em] text-text-dark px-6">
                Web Development
              </span>{" "}
              <span className="mq-dot text-[0.7rem]" style={{ color: '#F26622' }}>●</span>{" "}
              <span className="mq-item font-sans text-[clamp(0.85rem,1.2vw,1rem)] font-bold uppercase tracking-[0.1em] text-text-dark px-6">
                Video Content
              </span>{" "}
              <span className="mq-dot text-[0.7rem]" style={{ color: '#F26622' }}>●</span>{" "}
              <span className="mq-item font-sans text-[clamp(0.85rem,1.2vw,1rem)] font-bold uppercase tracking-[0.1em] text-text-dark px-6">
                Google Ads
              </span>{" "}
              <span className="mq-dot text-[0.7rem]" style={{ color: '#F26622' }}>●</span>{" "}
              <span className="mq-item font-sans text-[clamp(0.85rem,1.2vw,1rem)] font-bold uppercase tracking-[0.1em] text-text-dark px-6">
                Meta Ads
              </span>{" "}
              <span className="mq-dot text-[0.7rem]" style={{ color: '#F26622' }}>●</span>{" "}
              <span className="mq-item font-sans text-[clamp(0.85rem,1.2vw,1rem)] font-bold uppercase tracking-[0.1em] text-text-dark px-6">
                Website Support
              </span>{" "}
              <span className="mq-dot text-[0.7rem]" style={{ color: '#F26622' }}>●</span>{" "}
              <span className="mq-item font-sans text-[clamp(0.85rem,1.2vw,1rem)] font-bold uppercase tracking-[0.1em] text-text-dark px-6">
                Results Driven
              </span>{" "}
              <span className="mq-dot text-[0.7rem]" style={{ color: '#F26622' }}>●</span>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <section className="proj bg-off-white py-section-y px-container-x">
          {" "}
          <div className="proj-inner max-w-[1900px] mx-auto">
            {" "}
            <div className="proj-head flex items-end justify-between gap-8 mb-[clamp(2.5rem,5vh,4rem)] flex-wrap">
              {" "}
              <div>
                {" "}
                <div className="flex items-center gap-1.5 text-[0.8rem] font-semibold tracking-[0.12em] uppercase text-text-sec-dark mb-4">
                  {" "}
                  <span className="shrink-0 inline-block w-[5px] h-[5px] rounded-full" style={{ backgroundColor: '#F26622' }}></span>{" "}
                  Selected Work{" "}
                </div>{" "}
                <h2 className="font-display text-[clamp(2rem,4.5vw,3.8rem)] font-extrabold leading-[1.05] tracking-[-0.02em] text-text-dark">
                  {" "}
                  Work that
                  <br />{" "}
                  <em className="font-serif italic font-normal text-[1.02em] text-gradient">
                    makes us proud
                  </em>{" "}
                </h2>{" "}
              </div>{" "}
              <a
                href="/our-work"
                className="text-link inline-flex items-center gap-2 text-sm font-semibold text-text-sec-dark hover:text-text-dark shrink-0 transition-colors duration-300 pb-1"
                data-cursor="link"
              >
                {" "}
                <span>View all work</span>{" "}
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M4 10H16M16 10L11 5M16 10L11 15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>{" "}
              </a>{" "}
            </div>{" "}
            {/*  Project grid  */}{" "}
            <div
              className="proj-grid grid grid-cols-2 max-sm:grid-cols-1 gap-[clamp(1.2rem,2.5vw,2rem)]"
              data-portfolio-grid
            >
              {" "}
              <a
                href="/our-work/alumgates"
                className="proj-card group block rounded-card overflow-visible origin-bottom will-change-transform transition-shadow duration-400"
                data-cursor="link"
              >
                {" "}
                <div
                  className="relative rounded-card overflow-hidden aspect-[4/3]"
                  style={{ background: "rgba(0,0,0,0.03)" }}
                >
                  {" "}
                  <img
                    src="/images/alumgates.png"
                    alt="AlumGates"
                    width="1440"
                    height="1080"
                    loading="lazy"
                    style={{ objectPosition: "0% center" }}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.06]"
                  />{" "}
                  <div
                    className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-400 text-white font-bold text-base"
                    style={{
                      background:
                        "linear-gradient(160deg, rgba(242,102,34,0.7) 0%, rgba(180,60,10,0.8) 100%)",
                    }}
                  >
                    {" "}
                    <span className="text-base font-bold">
                      View Project
                    </span>{" "}
                    <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M6 14L14 6M14 6H6M14 6V14"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="pt-4 px-2">
                  {" "}
                  <h3 className="font-display text-[clamp(0.95rem,1.5vw,1.2rem)] font-bold text-text-dark mb-[0.4rem] tracking-[-0.01em]">
                    AlumGates
                  </h3>{" "}
                  <div className="flex gap-[0.4rem] flex-wrap">
                    {" "}
                    <span className="text-[0.72rem] font-medium tracking-[0.04em] py-1 px-[0.7rem] rounded-pill bg-black/5 text-text-sec-dark">
                      Web Design
                    </span>
                    <span className="text-[0.72rem] font-medium tracking-[0.04em] py-1 px-[0.7rem] rounded-pill bg-black/5 text-text-sec-dark">
                      Web Development
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
              </a>
              <a
                href="/our-work/magazinul-de-interfoane"
                className="proj-card group block rounded-card overflow-visible origin-bottom will-change-transform transition-shadow duration-400"
                data-cursor="link"
              >
                {" "}
                <div
                  className="relative rounded-card overflow-hidden aspect-[4/3]"
                  style={{ background: "rgba(0,0,0,0.03)" }}
                >
                  {" "}
                  <img
                    src="/images/magazinuldeinterfoane.png"
                    alt="Magazinul de Interfoane"
                    width="1440"
                    height="1080"
                    loading="lazy"
                    style={{ objectPosition: "0% center" }}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.06]"
                  />{" "}
                  <div
                    className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-400 text-white font-bold text-base"
                    style={{
                      background:
                        "linear-gradient(160deg, rgba(242,102,34,0.7) 0%, rgba(180,60,10,0.8) 100%)",
                    }}
                  >
                    {" "}
                    <span className="text-base font-bold">
                      View Project
                    </span>{" "}
                    <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M6 14L14 6M14 6H6M14 6V14"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="pt-4 px-2">
                  {" "}
                  <h3 className="font-display text-[clamp(0.95rem,1.5vw,1.2rem)] font-bold text-text-dark mb-[0.4rem] tracking-[-0.01em]">
                    Magazinul de Interfoane
                  </h3>{" "}
                  <div className="flex gap-[0.4rem] flex-wrap">
                    {" "}
                    <span className="text-[0.72rem] font-medium tracking-[0.04em] py-1 px-[0.7rem] rounded-pill bg-black/5 text-text-sec-dark">
                      Web Design
                    </span>
                    <span className="text-[0.72rem] font-medium tracking-[0.04em] py-1 px-[0.7rem] rounded-pill bg-black/5 text-text-sec-dark">
                      Web Development
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
              </a>
              <a
                href="/our-work/daimara"
                className="proj-card group block rounded-card overflow-visible origin-bottom will-change-transform transition-shadow duration-400"
                data-cursor="link"
              >
                {" "}
                <div
                  className="relative rounded-card overflow-hidden aspect-[4/3]"
                  style={{ background: "rgba(0,0,0,0.03)" }}
                >
                  {" "}
                  <img
                    src="/images/daimara.png"
                    alt="Daimara"
                    width="1440"
                    height="1080"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.06]"
                  />{" "}
                  <div
                    className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-400 text-white font-bold text-base"
                    style={{
                      background:
                        "linear-gradient(160deg, rgba(242,102,34,0.7) 0%, rgba(180,60,10,0.8) 100%)",
                    }}
                  >
                    {" "}
                    <span className="text-base font-bold">
                      View Project
                    </span>{" "}
                    <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M6 14L14 6M14 6H6M14 6V14"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="pt-4 px-2">
                  {" "}
                  <h3 className="font-display text-[clamp(0.95rem,1.5vw,1.2rem)] font-bold text-text-dark mb-[0.4rem] tracking-[-0.01em]">
                    Daimara
                  </h3>{" "}
                  <div className="flex gap-[0.4rem] flex-wrap">
                    {" "}
                    <span className="text-[0.72rem] font-medium tracking-[0.04em] py-1 px-[0.7rem] rounded-pill bg-black/5 text-text-sec-dark">
                      Shopify
                    </span>
                  </div>{" "}
                </div>{" "}
              </a>
              <a
                href="/our-work/pc-doc"
                className="proj-card group block rounded-card overflow-visible origin-bottom will-change-transform transition-shadow duration-400"
                data-cursor="link"
              >
                {" "}
                <div
                  className="relative rounded-card overflow-hidden aspect-[4/3]"
                  style={{ background: "rgba(0,0,0,0.03)" }}
                >
                  {" "}
                  <img
                    src="/images/pc-doc.png"
                    alt="PC Doc"
                    width="1440"
                    height="1080"
                    loading="lazy"
                    style={{ objectPosition: "0% center" }}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.06]"
                  />{" "}
                  <div
                    className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-400 text-white font-bold text-base"
                    style={{
                      background:
                        "linear-gradient(160deg, rgba(242,102,34,0.7) 0%, rgba(180,60,10,0.8) 100%)",
                    }}
                  >
                    {" "}
                    <span className="text-base font-bold">
                      View Project
                    </span>{" "}
                    <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M6 14L14 6M14 6H6M14 6V14"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="pt-4 px-2">
                  {" "}
                  <h3 className="font-display text-[clamp(0.95rem,1.5vw,1.2rem)] font-bold text-text-dark mb-[0.4rem] tracking-[-0.01em]">
                    PC Doc
                  </h3>{" "}
                  <div className="flex gap-[0.4rem] flex-wrap">
                    {" "}
                    <span className="text-[0.72rem] font-medium tracking-[0.04em] py-1 px-[0.7rem] rounded-pill bg-black/5 text-text-sec-dark">
                      Shopify
                    </span>
                  </div>{" "}
                </div>{" "}
              </a>
              <a
                href="/our-work/greystone-heritage"
                className="proj-card group block rounded-card overflow-visible origin-bottom will-change-transform transition-shadow duration-400"
                data-cursor="link"
              >
                {" "}
                <div
                  className="relative rounded-card overflow-hidden aspect-[4/3]"
                  style={{ background: "rgba(0,0,0,0.03)" }}
                >
                  {" "}
                  <img
                    src="/images/epok.png"
                    alt="Epok"
                    width="1440"
                    height="1080"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.06]"
                  />{" "}
                  <div
                    className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-400 text-white font-bold text-base"
                    style={{
                      background:
                        "linear-gradient(160deg, rgba(242,102,34,0.7) 0%, rgba(180,60,10,0.8) 100%)",
                    }}
                  >
                    {" "}
                    <span className="text-base font-bold">
                      View Project
                    </span>{" "}
                    <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M6 14L14 6M14 6H6M14 6V14"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="pt-4 px-2">
                  {" "}
                  <h3 className="font-display text-[clamp(0.95rem,1.5vw,1.2rem)] font-bold text-text-dark mb-[0.4rem] tracking-[-0.01em]">
                    Epok
                  </h3>{" "}
                  <div className="flex gap-[0.4rem] flex-wrap">
                    {" "}
                    <span className="text-[0.72rem] font-medium tracking-[0.04em] py-1 px-[0.7rem] rounded-pill bg-black/5 text-text-sec-dark">
                      Shopify
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
              </a>
              <a
                href="/our-work/lc-computers"
                className="proj-card group block rounded-card overflow-visible origin-bottom will-change-transform transition-shadow duration-400"
                data-cursor="link"
              >
                {" "}
                <div
                  className="relative rounded-card overflow-hidden aspect-[4/3]"
                  style={{ background: "rgba(0,0,0,0.03)" }}
                >
                  {" "}
                  <img
                    src="/images/google_ads.png"
                    alt="From €18,000 to €367,800"
                    width="1440"
                    height="1080"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.06]"
                  />{" "}
                  <div
                    className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-400 text-white font-bold text-base"
                    style={{
                      background:
                        "linear-gradient(160deg, rgba(242,102,34,0.7) 0%, rgba(180,60,10,0.8) 100%)",
                    }}
                  >
                    {" "}
                    <span className="text-base font-bold">
                      View Project
                    </span>{" "}
                    <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M6 14L14 6M14 6H6M14 6V14"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="pt-4 px-2">
                  {" "}
                  <h3 className="font-display text-[clamp(0.95rem,1.5vw,1.2rem)] font-bold text-text-dark mb-[0.4rem] tracking-[-0.01em]">
                    From €18,000 to €367,800
                  </h3>{" "}
                  <div className="flex gap-[0.4rem] flex-wrap">
                    {" "}
                    <span className="text-[0.72rem] font-medium tracking-[0.04em] py-1 px-[0.7rem] rounded-pill bg-black/5 text-text-sec-dark">
                      Case Study
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="srv-section py-section-y px-container-x" style={{ background: '#180A03' }}>
          {" "}
          <div className="srv-inner max-w-[1200px] mx-auto">
            {" "}
            {/*  Header  */}{" "}
            <div className="srv-head mb-[clamp(3rem,6vh,5rem)]">
              {" "}
              <div className="flex items-center gap-1.5 text-[0.8rem] font-semibold tracking-[0.12em] uppercase text-white/55 mb-4">
                {" "}
                <span className="shrink-0 inline-block w-[5px] h-[5px] rounded-full" style={{ backgroundColor: '#F26622' }}></span>{" "}
                What We Do{" "}
              </div>{" "}
              <h2 className="srv-heading font-display text-[clamp(2rem,5vw,4rem)] font-extrabold leading-[1.05] tracking-[-0.02em] text-white">
                {" "}
                Services built
                <br />
                for{" "}
                <em className="font-serif italic font-normal text-[1.08em] text-gradient">
                  growth
                </em>{" "}
              </h2>{" "}
            </div>{" "}
            {/*  Rows  */}{" "}
            <div className="srv-rows border-t border-white/[0.07]">
              {" "}
              <a
                href="/websites"
                className="srv-row flex items-center gap-[clamp(1.5rem,3vw,3rem)] py-[clamp(1.8rem,4vh,3rem)] border-b border-white/[0.07] transition-[padding] duration-400 rounded-input relative"
                data-cursor="link"
              >
                {" "}
                <span className="srv-num font-display text-[clamp(2rem,5vw,4rem)] font-black leading-none shrink-0 w-[clamp(60px,8vw,110px)] transition-all duration-700 relative z-[1]">
                  01
                </span>{" "}
                <div className="srv-info flex-1 relative z-[1]">
                  {" "}
                  <h3 className="srv-name font-display text-[clamp(1.2rem,2.5vw,1.9rem)] font-bold text-white/90 tracking-[-0.01em] mb-2">
                    Business Websites
                  </h3>{" "}
                  <p className="srv-desc text-base text-white/55 leading-[1.65] max-w-[500px]">
                    A website built to win you customers, not just look good on
                    a screen. Clean design, sharp copy, and a clear marketing
                    strategy behind every page. Built around your business, your
                    audience, and your goals.
                  </p>{" "}
                </div>{" "}
                <span className="srv-arrow text-white/25 shrink-0 transition-all duration-400 ease-out-expo relative z-[1]">
                  {" "}
                  <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M6 14L14 6M14 6H6M14 6V14"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>{" "}
                </span>{" "}
              </a>
              <a
                href="/shopify-agency"
                className="srv-row flex items-center gap-[clamp(1.5rem,3vw,3rem)] py-[clamp(1.8rem,4vh,3rem)] border-b border-white/[0.07] transition-[padding] duration-400 rounded-input relative"
                data-cursor="link"
              >
                {" "}
                <span className="srv-num font-display text-[clamp(2rem,5vw,4rem)] font-black leading-none shrink-0 w-[clamp(60px,8vw,110px)] transition-all duration-700 relative z-[1]">
                  02
                </span>{" "}
                <div className="srv-info flex-1 relative z-[1]">
                  {" "}
                  <h3 className="srv-name font-display text-[clamp(1.2rem,2.5vw,1.9rem)] font-bold text-white/90 tracking-[-0.01em] mb-2">
                    Online Shops
                  </h3>{" "}
                  <p className="srv-desc text-base text-white/55 leading-[1.65] max-w-[500px]">
                    Sell your products online with a shop designed to convert
                    browsers into buyers. Fast, mobile-friendly, and easy for
                    you to manage day to day.
                  </p>{" "}
                </div>{" "}
                <span className="srv-arrow text-white/25 shrink-0 transition-all duration-400 ease-out-expo relative z-[1]">
                  {" "}
                  <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M6 14L14 6M14 6H6M14 6V14"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>{" "}
                </span>{" "}
              </a>
              <a
                href="/contact"
                className="srv-row flex items-center gap-[clamp(1.5rem,3vw,3rem)] py-[clamp(1.8rem,4vh,3rem)] border-b border-white/[0.07] transition-[padding] duration-400 rounded-input relative"
                data-cursor="link"
              >
                {" "}
                <span className="srv-num font-display text-[clamp(2rem,5vw,4rem)] font-black leading-none shrink-0 w-[clamp(60px,8vw,110px)] transition-all duration-700 relative z-[1]">
                  03
                </span>{" "}
                <div className="srv-info flex-1 relative z-[1]">
                  {" "}
                  <h3 className="srv-name font-display text-[clamp(1.2rem,2.5vw,1.9rem)] font-bold text-white/90 tracking-[-0.01em] mb-2">
                    Website Support
                  </h3>{" "}
                  <p className="srv-desc text-base text-white/55 leading-[1.65] max-w-[500px]">
                    Need something changed on your site? Whether it&#39;s
                    regular content updates and new pages or a one-off tweak,
                    we&#39;re here when you need us. No retainer required.
                  </p>{" "}
                </div>{" "}
                <span className="srv-arrow text-white/25 shrink-0 transition-all duration-400 ease-out-expo relative z-[1]">
                  {" "}
                  <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M6 14L14 6M14 6H6M14 6V14"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>{" "}
                </span>{" "}
              </a>
              <a
                href="/google-ads"
                className="srv-row flex items-center gap-[clamp(1.5rem,3vw,3rem)] py-[clamp(1.8rem,4vh,3rem)] border-b border-white/[0.07] transition-[padding] duration-400 rounded-input relative"
                data-cursor="link"
              >
                {" "}
                <span className="srv-num font-display text-[clamp(2rem,5vw,4rem)] font-black leading-none shrink-0 w-[clamp(60px,8vw,110px)] transition-all duration-700 relative z-[1]">
                  04
                </span>{" "}
                <div className="srv-info flex-1 relative z-[1]">
                  {" "}
                  <h3 className="srv-name font-display text-[clamp(1.2rem,2.5vw,1.9rem)] font-bold text-white/90 tracking-[-0.01em] mb-2">
                    Google Ads Management
                  </h3>{" "}
                  <p className="srv-desc text-base text-white/55 leading-[1.65] max-w-[500px]">
                    Put your business in front of people already searching for
                    what you offer. We build, manage, and optimise your
                    campaigns so you get more enquiries from every pound you
                    spend.
                  </p>{" "}
                </div>{" "}
                <span className="srv-arrow text-white/25 shrink-0 transition-all duration-400 ease-out-expo relative z-[1]">
                  {" "}
                  <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M6 14L14 6M14 6H6M14 6V14"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>{" "}
                </span>{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="ben-section relative border-0">
          {" "}
          <div className="ben-track flex max-lg:flex-col slider-track will-change-transform">
            {" "}
            <div className="ben-panel ben-panel--light w-screen max-lg:w-full max-lg:min-h-auto min-h-screen flex max-lg:flex-col items-center px-[clamp(3rem,8vw,9rem)] max-lg:px-6 py-[clamp(3rem,8vh,7rem)] max-lg:py-20 gap-[clamp(3rem,6vw,7rem)] max-lg:gap-12 relative overflow-hidden bg-off-white text-text-dark">
              {" "}
              <div
                className="ben-ghost absolute right-[3%] bottom-[-2%] font-display font-black text-[clamp(9rem,20vw,20rem)] leading-none tracking-[-0.03em] whitespace-nowrap pointer-events-none select-none text-dark/5 max-lg:hidden"
                aria-hidden="true"
              >
                Trusted
              </div>{" "}
              <div className="ben-content shrink-0 max-w-[500px] relative z-[1]">
                {" "}
                <div className="ben-label flex items-center gap-[0.6rem] mb-6">
                  {" "}
                  <span className="ben-num text-[0.78rem] font-bold tracking-[0.1em] text-gradient">
                    01
                  </span>{" "}
                  <span className="ben-tag text-[0.78rem] font-semibold tracking-[0.12em] uppercase text-text-sec-dark">
                    Results-Driven
                  </span>{" "}
                </div>{" "}
                <h2 className="ben-heading font-display font-black text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.1] tracking-[-0.025em] mb-6 text-text-dark">
                  Websites That
                  <br />
                  <em className="ben-serif block font-serif italic font-normal text-gradient">
                    Grow Your Business
                  </em>
                </h2>{" "}
                <p className="ben-body text-base leading-[1.75] max-w-[44ch] text-text-sec-dark">
                  Generic websites don&#39;t convert. Over 4 years of design
                  and marketing experience means every website we build has one
                  goal: growing your business.
                </p>{" "}
              </div>{" "}
              <div className="ben-visual flex-1 flex flex-col items-center max-lg:items-start justify-center relative z-[1]">
                {" "}
                <div className="ben-big-num font-display font-black text-[clamp(6rem,13vw,12rem)] leading-none tracking-[-0.03em] text-text-dark">
                  100<span className="text-[0.45em] text-gradient" style={{ verticalAlign: 'baseline', marginLeft: '0.05em' }}>%</span>
                </div>{" "}
                <div className="ben-visual-label slider-vlabel text-[0.78rem] font-semibold tracking-[0.12em] uppercase mt-[0.8rem] flex items-center gap-2 text-text-sec-dark">
                  client satisfaction
                </div>{" "}
              </div>{" "}
            </div>
            <div className="ben-panel ben-panel--dark w-screen max-lg:w-full max-lg:min-h-auto min-h-screen flex max-lg:flex-col items-center px-[clamp(3rem,8vw,9rem)] max-lg:px-6 py-[clamp(3rem,8vh,7rem)] max-lg:py-20 gap-[clamp(3rem,6vw,7rem)] max-lg:gap-12 relative overflow-hidden text-white" style={{ background: '#180A03' }}>
              {" "}
              <div
                className="ben-ghost absolute right-[3%] bottom-[-2%] font-display font-black text-[clamp(9rem,20vw,20rem)] leading-none tracking-[-0.03em] whitespace-nowrap pointer-events-none select-none text-white/[0.04] max-lg:hidden"
                aria-hidden="true"
              >
                Results
              </div>{" "}
              <div className="ben-content shrink-0 max-w-[500px] relative z-[1]">
                {" "}
                <div className="ben-label flex items-center gap-[0.6rem] mb-6">
                  {" "}
                  <span className="ben-num text-[0.78rem] font-bold tracking-[0.1em] text-gradient">
                    02
                  </span>{" "}
                  <span className="ben-tag text-[0.78rem] font-semibold tracking-[0.12em] uppercase text-white/55">
                    Results That Speak
                  </span>{" "}
                </div>{" "}
                <h2 className="ben-heading font-display font-black text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.1] tracking-[-0.025em] mb-6 text-white">
                  Above Average,
                  <br />
                  <em className="ben-serif block font-serif italic font-normal text-gradient">
                    Consistently
                  </em>
                </h2>{" "}
                <p className="ben-body text-base leading-[1.75] max-w-[44ch] text-white/50">
                  The average ROAS in Romania sits between 6–7x. We&#39;ve
                  beaten that benchmark in 95% of our campaigns — not as a
                  fluke, but as a standard.
                </p>{" "}
              </div>{" "}
              <div className="ben-visual flex-1 flex flex-col items-center max-lg:items-start justify-center relative z-[1]">
                {" "}
                <div className="ben-big-num font-display font-black text-[clamp(6rem,13vw,12rem)] leading-none tracking-[-0.03em] text-white">
                  10<span className="text-[0.45em] text-gradient" style={{ verticalAlign: 'baseline', marginLeft: '0.05em' }}>x</span>
                </div>{" "}
                <div className="ben-visual-label slider-vlabel text-[0.78rem] font-semibold tracking-[0.12em] uppercase mt-[0.8rem] flex items-center gap-2 text-white/55">
                  average ROAS
                </div>{" "}
              </div>{" "}
            </div>
            <div className="ben-panel ben-panel--light w-screen max-lg:w-full max-lg:min-h-auto min-h-screen flex max-lg:flex-col items-center px-[clamp(3rem,8vw,9rem)] max-lg:px-6 py-[clamp(3rem,8vh,7rem)] max-lg:py-20 gap-[clamp(3rem,6vw,7rem)] max-lg:gap-12 relative overflow-hidden bg-off-white text-text-dark">
              {" "}
              <div
                className="ben-ghost absolute right-[3%] bottom-[-2%] font-display font-black text-[clamp(9rem,20vw,20rem)] leading-none tracking-[-0.03em] whitespace-nowrap pointer-events-none select-none text-dark/5 max-lg:hidden"
                aria-hidden="true"
              >
                Personal
              </div>{" "}
              <div className="ben-content shrink-0 max-w-[500px] relative z-[1]">
                {" "}
                <div className="ben-label flex items-center gap-[0.6rem] mb-6">
                  {" "}
                  <span className="ben-num text-[0.78rem] font-bold tracking-[0.1em] text-gradient">
                    03
                  </span>{" "}
                  <span className="ben-tag text-[0.78rem] font-semibold tracking-[0.12em] uppercase text-text-sec-dark">
                    Always Available
                  </span>{" "}
                </div>{" "}
                <h2 className="ben-heading font-display font-black text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.1] tracking-[-0.025em] mb-6 text-text-dark">
                  Fast Support,
                  <br />
                  <em className="ben-serif block font-serif italic font-normal text-gradient">
                    Always On
                  </em>
                </h2>{" "}
                <p className="ben-body text-base leading-[1.75] max-w-[44ch] text-text-sec-dark">
                  Reach us instantly via WhatsApp or phone — no waiting, no
                  tickets. Your ads are monitored and optimized around the
                  clock, every day of the week, weekends included.
                </p>{" "}
              </div>{" "}
              <div className="ben-visual flex-1 flex flex-col items-center max-lg:items-start justify-center relative z-[1]">
                {" "}
                <div className="ben-big-num font-display font-black text-[clamp(6rem,13vw,12rem)] leading-none tracking-[-0.03em] text-text-dark">
                  24/7
                </div>{" "}
                <div className="ben-visual-label slider-vlabel text-[0.78rem] font-semibold tracking-[0.12em] uppercase mt-[0.8rem] flex items-center gap-2 text-text-sec-dark">
                  monitoring &amp; support
                </div>{" "}
              </div>{" "}
            </div>
            <div className="ben-panel ben-panel--dark w-screen max-lg:w-full max-lg:min-h-auto min-h-screen flex max-lg:flex-col items-center px-[clamp(3rem,8vw,9rem)] max-lg:px-6 py-[clamp(3rem,8vh,7rem)] max-lg:py-20 gap-[clamp(3rem,6vw,7rem)] max-lg:gap-12 relative overflow-hidden text-white" style={{ background: '#180A03' }}>
              {" "}
              <div
                className="ben-ghost absolute right-[3%] bottom-[-2%] font-display font-black text-[clamp(9rem,20vw,20rem)] leading-none tracking-[-0.03em] whitespace-nowrap pointer-events-none select-none text-white/[0.04] max-lg:hidden"
                aria-hidden="true"
              >
                Smart
              </div>{" "}
              <div className="ben-content shrink-0 max-w-[500px] relative z-[1]">
                {" "}
                <div className="ben-label flex items-center gap-[0.6rem] mb-6">
                  {" "}
                  <span className="ben-num text-[0.78rem] font-bold tracking-[0.1em] text-gradient">
                    04
                  </span>{" "}
                  <span className="ben-tag text-[0.78rem] font-semibold tracking-[0.12em] uppercase text-white/55">
                    The Extra Edge
                  </span>{" "}
                </div>{" "}
                <h2 className="ben-heading font-display font-black text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.1] tracking-[-0.025em] mb-6 text-white">
                  Supercharged
                  <br />
                  <em className="ben-serif block font-serif italic font-normal text-gradient">
                    by AI
                  </em>
                </h2>{" "}
                <p className="ben-body text-base leading-[1.75] max-w-[44ch] text-white/50">
                  We use AI to audit SEO foundations, refine code quality, and
                  write copy using proven marketing frameworks. It catches what
                  the human eye misses and sharpens every detail. Over 4 years of
                  experience guides the strategy. AI makes the execution
                  precise.
                </p>{" "}
              </div>{" "}
              <div className="ben-visual flex-1 flex flex-col items-center max-lg:items-start justify-center relative z-[1]">
                {" "}
                <svg
                  className="w-[clamp(130px,16vw,210px)] h-auto mb-[0.8rem]"
                  viewBox="0 0 120 140"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M60 8L14 28V72C14 98 34 120 60 132C86 120 106 98 106 72V28L60 8Z"
                    stroke="url(#sgrd)"
                    strokeWidth="3"
                  ></path>
                  <path
                    d="M42 70L55 83L80 57"
                    stroke="url(#sgrd)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <defs>
                    <linearGradient
                      id="sgrd"
                      x1="14"
                      y1="8"
                      x2="106"
                      y2="132"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#F26622"></stop>
                      <stop offset="100%" stopColor="#F26622"></stop>
                    </linearGradient>
                  </defs>
                </svg>{" "}
                <div className="ben-visual-label slider-vlabel text-[0.78rem] font-semibold tracking-[0.12em] uppercase mt-[0.8rem] flex items-center gap-2 text-white/55">
                  AI refined
                </div>{" "}
              </div>{" "}
            </div>
            <div className="ben-panel ben-panel--light w-screen max-lg:w-full max-lg:min-h-auto min-h-screen flex max-lg:flex-col items-center px-[clamp(3rem,8vw,9rem)] max-lg:px-6 py-[clamp(3rem,8vh,7rem)] max-lg:py-20 gap-[clamp(3rem,6vw,7rem)] max-lg:gap-12 relative overflow-hidden bg-off-white text-text-dark">
              {" "}
              <div
                className="ben-ghost absolute right-[3%] bottom-[-2%] font-display font-black text-[clamp(9rem,20vw,20rem)] leading-none tracking-[-0.03em] whitespace-nowrap pointer-events-none select-none text-dark/5 max-lg:hidden"
                aria-hidden="true"
              >
                Growth
              </div>{" "}
              <div className="ben-content shrink-0 max-w-[500px] relative z-[1]">
                {" "}
                <div className="ben-label flex items-center gap-[0.6rem] mb-6">
                  {" "}
                  <span className="ben-num text-[0.78rem] font-bold tracking-[0.1em] text-gradient">
                    05
                  </span>{" "}
                  <span className="ben-tag text-[0.78rem] font-semibold tracking-[0.12em] uppercase text-text-sec-dark">
                    Free Offer
                  </span>{" "}
                </div>{" "}
                <h2 className="ben-heading font-display font-black text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.1] tracking-[-0.025em] mb-6 text-text-dark">
                  Book a Free Call,
                  <br />
                  <em className="ben-serif block font-serif italic font-normal text-gradient">
                    Get a Free Audit.
                  </em>
                </h2>{" "}
                <p className="ben-body text-base leading-[1.75] max-w-[44ch] text-text-sec-dark">
                  Schedule a free strategy call and we'll include a full PPC
                  &amp; SEO audit for your website — no strings attached. See
                  exactly where your ad spend is leaking and how to fix it.
                </p>{" "}
              </div>{" "}
              <div className="ben-visual flex-1 flex flex-col items-center max-lg:items-start justify-center relative z-[1]">
                {" "}
                <div className="ben-big-num font-display font-black text-[clamp(6rem,13vw,12rem)] leading-none tracking-[-0.03em] text-text-dark">
                  Start
                </div>{" "}
                <div className="ben-visual-label slider-vlabel text-[0.78rem] font-semibold tracking-[0.12em] uppercase mt-[0.8rem] flex items-center gap-2 text-text-sec-dark">
                  PPC &amp; SEO audit
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div
            className="ben-dots absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20 max-lg:hidden"
            aria-hidden="true"
          >
            {" "}
            <span className="ben-dot slider-dot ben-dot--active slider-dot--active"></span>
            <span className="ben-dot slider-dot "></span>
            <span className="ben-dot slider-dot "></span>
            <span className="ben-dot slider-dot "></span>
            <span className="ben-dot slider-dot "></span>{" "}
          </div>{" "}
        </section>{" "}
        <section className="about-section bg-white grid grid-cols-[1.1fr_1fr] max-lg:grid-cols-1 items-center max-lg:items-stretch">
          {" "}
          <div className="about-img-col lg:flex lg:items-center lg:justify-center lg:py-12 lg:pl-16 lg:pr-8 max-lg:self-stretch max-lg:h-[60vw] max-lg:overflow-hidden">
            {" "}
            <img
              src="/images/viral4hype_romania.png"
              alt="Viral4Hype Romania"
              loading="lazy"
              width="1600"
              height="1067"
              className="about-img lg:w-full lg:max-w-[840px] lg:h-auto lg:rounded-2xl max-lg:w-full max-lg:h-full max-lg:object-cover"
            />{" "}
          </div>{" "}
          <div className="about-content-col py-[clamp(4rem,8vh,7rem)] px-[clamp(2rem,5vw,5rem)] flex flex-col justify-center">
            {" "}
            <div className="flex items-center gap-1.5 text-[0.8rem] font-semibold tracking-[0.12em] uppercase text-text-sec-dark about-label mb-4 max-w-[680px]">
              {" "}
              <span className="shrink-0 inline-block w-[5px] h-[5px] rounded-full" style={{ backgroundColor: '#F26622' }}></span>{" "}
              About Us{" "}
            </div>{" "}
            <h2 className="about-heading font-display text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.1] tracking-[-0.02em] text-text-dark mb-6 max-w-[680px]">
              A small agency
              <br />
              <em className="font-serif italic font-normal text-[1.05em] text-gradient">
                big impact
              </em>
            </h2>{" "}
            <p className="text-base text-text-sec-dark leading-[1.75] mb-[0.8rem] max-w-[680px]">
              We&#39;re a small, results-driven digital agency based in Romania.
              Led by Robert, everything we do is focused on creating websites and
              marketing campaigns that actually get results.
            </p>
            <p className="text-base text-text-sec-dark leading-[1.75] mb-[0.8rem] max-w-[680px]">
              From bespoke website design and development to Google Ads
              campaigns, we help businesses across Romania grow online through
              clear strategy, clean design, and a personal touch.
            </p>
            <p className="text-base text-text-sec-dark leading-[1.75] mb-[0.8rem] max-w-[680px]">
              Being a small agency means our overheads stay low. We use modern
              tools, including AI, to work smarter and deliver stronger results.
              You get quality web design and development at genuinely
              competitive prices, without the big agency fluff.
            </p>{" "}
            <div className="about-stats flex gap-8 my-8 flex-wrap max-w-[680px]">
              {" "}
              <div className="about-stat flex flex-col gap-[0.15rem]">
                {" "}
                <span className="astat-num text-[clamp(1.4rem,2.5vw,2rem)] font-extrabold text-gradient tracking-[-0.02em]">
                  4+
                </span>{" "}
                <span className="astat-label text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-text-sec-dark">
                  Years of Experience
                </span>{" "}
              </div>
              <div className="about-stat flex flex-col gap-[0.15rem]">
                {" "}
                <span className="astat-num text-[clamp(1.4rem,2.5vw,2rem)] font-extrabold text-gradient tracking-[-0.02em]">
                  RO
                </span>{" "}
                <span className="astat-label text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-text-sec-dark">
                  Based Agency
                </span>{" "}
              </div>{" "}
            </div>{" "}
            <a
              href="/about"
              className="btn-outline inline-flex items-center gap-2 text-[0.95rem] font-semibold py-[0.9rem] px-8 rounded-full bg-transparent text-text-dark border border-dark/[0.18] transition-[background-color,color,border-color,box-shadow] duration-400 ease-out-expo relative overflow-hidden whitespace-nowrap max-w-[680px] w-fit"
              data-cursor="link"
            >
              <span className="btn-text relative z-[1]">
                Learn more about us
              </span>
              <span className="btn-icon relative z-[1] flex transition-transform duration-300 ease-out-expo">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 10H16M16 10L11 5M16 10L11 15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
            </a>{" "}
          </div>{" "}
        </section>{" "}

        <section className="contact-section py-section-y px-container-x" style={{ background: '#180A03' }}>
          {" "}
          <div className="contact-inner max-w-[1200px] mx-auto grid grid-cols-[1fr_1.3fr] max-lg:grid-cols-1 gap-[clamp(3rem,6vw,7rem)] items-center">
            {" "}
            <div className="contact-left">
              {" "}
              <div className="flex items-center gap-1.5 text-[0.8rem] font-semibold tracking-[0.12em] uppercase text-white/55 contact-label mb-4">
                {" "}
                <span className="shrink-0 inline-block w-[5px] h-[5px] rounded-full" style={{ backgroundColor: '#F26622' }}></span>{" "}
                Get Started{" "}
              </div>{" "}
              <h2 className="contact-heading font-display text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.1] tracking-[-0.02em] text-white mb-4">
                Let&#39;s create
                <br />
                <em className="font-serif italic font-normal text-gradient">
                  something viral
                </em>
              </h2>{" "}
              <p className="contact-sub text-base text-white/55 leading-[1.7] mb-10">
                Tell us about your project and we&#39;ll get back to you within
                one working day. No pressure, no hard sell. Just a
                straightforward conversation about what you need.
              </p>{" "}
              <div className="contact-links flex flex-col">
                {" "}
                <a
                  href="tel:0752221510"
                  className="clink flex justify-between items-baseline py-4 border-b border-white/[0.06] border-t border-white/[0.06] transition-[padding-left] duration-300 ease-out-expo hover:pl-2"
                  data-cursor="link"
                >
                  {" "}
                  <span className="clink-label text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-white/50">
                    Call us
                  </span>{" "}
                  <span className="clink-val text-base font-medium text-white/70">
                    0752 221 510
                  </span>{" "}
                </a>{" "}
                <a
                  href="mailto:contact@viral4hype.com"
                  className="clink flex justify-between items-baseline py-4 border-b border-white/[0.06] transition-[padding-left] duration-300 ease-out-expo hover:pl-2"
                  data-cursor="link"
                >
                  {" "}
                  <span className="clink-label text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-white/50">
                    Email
                  </span>{" "}
                  <span className="clink-val text-base font-medium text-white/70">
                    contact@viral4hype.com
                  </span>{" "}
                </a>{" "}
                <a
                  href="https://maps.app.goo.gl/X14XqwStQ1Tmb6kh7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="clink flex justify-between items-baseline py-4 border-b border-white/[0.06] transition-[padding-left] duration-300 ease-out-expo hover:pl-2"
                  data-cursor="link"
                >
                  {" "}
                  <span className="clink-label text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-white/50">
                    Location
                  </span>{" "}
                  <span className="clink-val text-base font-medium text-white/70">
                    Bucuresti, Constanta, Romania
                  </span>{" "}
                </a>{" "}
              </div>{" "}
              <div
                className="ti-wrap-dark mt-8 flex justify-start"
                id="trustindex-widget"
              ></div>{" "}
            </div>{" "}
            <div className="contact-right">
              {" "}
              <form
                action="https://api.formspark.io/6mvKi3vTd"
                method="post"
                className="cform flex flex-col"
              >
                {" "}
                <div className="cf-row grid grid-cols-2 max-md:grid-cols-1 gap-x-8">
                  {" "}
                  <div className="cf-field relative mb-6">
                    {" "}
                    <input
                      type="text"
                      name="Name"
                      required
                      placeholder=" "
                      id="v4-name"
                      autoComplete="name"
                      className="w-full pt-[1.3rem] pb-[0.6rem] text-[0.95rem] text-white/85 bg-transparent border-0 border-b-[1.5px] border-white/10 outline-none transition-colors duration-300 focus:border-[#F26622]/70"
                    />{" "}
                    <label
                      htmlFor="v4-name"
                      className="absolute left-0 top-[1.3rem] text-[0.88rem] text-white/50 pointer-events-none transition-all duration-300 ease-out-expo"
                    >
                      Your Name *
                    </label>{" "}
                  </div>{" "}
                  <div className="cf-field relative mb-6">
                    {" "}
                    <input
                      type="text"
                      name="Company-Name"
                      placeholder=" "
                      id="v4-company"
                      autoComplete="organization"
                      className="w-full pt-[1.3rem] pb-[0.6rem] text-[0.95rem] text-white/85 bg-transparent border-0 border-b-[1.5px] border-white/10 outline-none transition-colors duration-300 focus:border-[#F26622]/70"
                    />{" "}
                    <label
                      htmlFor="v4-company"
                      className="absolute left-0 top-[1.3rem] text-[0.88rem] text-white/50 pointer-events-none transition-all duration-300 ease-out-expo"
                    >
                      Company
                    </label>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="cf-row grid grid-cols-2 max-md:grid-cols-1 gap-x-8">
                  {" "}
                  <div className="cf-field relative mb-6">
                    {" "}
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder=" "
                      id="v4-email"
                      autoComplete="email"
                      className="w-full pt-[1.3rem] pb-[0.6rem] text-[0.95rem] text-white/85 bg-transparent border-0 border-b-[1.5px] border-white/10 outline-none transition-colors duration-300 focus:border-[#F26622]/70"
                    />{" "}
                    <label
                      htmlFor="v4-email"
                      className="absolute left-0 top-[1.3rem] text-[0.88rem] text-white/50 pointer-events-none transition-all duration-300 ease-out-expo"
                    >
                      Email Address *
                    </label>{" "}
                  </div>{" "}
                  <div className="cf-field relative mb-6">
                    {" "}
                    <input
                      type="tel"
                      name="Phone-Number"
                      placeholder=" "
                      id="v4-phone"
                      autoComplete="tel"
                      className="w-full pt-[1.3rem] pb-[0.6rem] text-[0.95rem] text-white/85 bg-transparent border-0 border-b-[1.5px] border-white/10 outline-none transition-colors duration-300 focus:border-[#F26622]/70"
                    />{" "}
                    <label
                      htmlFor="v4-phone"
                      className="absolute left-0 top-[1.3rem] text-[0.88rem] text-white/50 pointer-events-none transition-all duration-300 ease-out-expo"
                    >
                      Phone Number
                    </label>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="cf-field relative mb-6">
                  {" "}
                  <textarea
                    name="How-can-we-help"
                    required
                    placeholder=" "
                    id="v4-msg"
                    rows={4}
                    className="w-full pt-[1.3rem] pb-[0.6rem] text-[0.95rem] text-white/85 bg-transparent border-0 border-b-[1.5px] border-white/10 outline-none transition-colors duration-300 resize-y min-h-[100px] focus:border-[#F26622]/70"
                  ></textarea>{" "}
                  <label
                    htmlFor="v4-msg"
                    className="absolute left-0 top-[1.3rem] text-[0.88rem] text-white/50 pointer-events-none transition-all duration-300 ease-out-expo"
                  >
                    How can we help? *
                  </label>{" "}
                </div>{" "}
                <label className="cf-gdpr flex items-start gap-[0.7rem] text-[0.8rem] text-white/50 leading-[1.5] mb-6 cursor-pointer">
                  {" "}
                  <input
                    type="checkbox"
                    name="gdpr"
                    required
                    className="sr-only peer"
                    id="gdpr-consent"
                  />{" "}
                  <span className="cf-chk w-4 h-4 rounded-input shrink-0 mt-0.5 border-[1.5px] border-white/15 transition-all duration-300 relative peer-focus-visible:ring-2 peer-focus-visible:ring-[#F26622] peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-dark"></span>{" "}
                  <span>
                    I&apos;m happy for this website to store my info so they can
                    respond to my enquiry.
                  </span>{" "}
                </label>{" "}
                <input
                  type="checkbox"
                  name="_honeypot"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />{" "}
                <input
                  type="hidden"
                  name="_email.from"
                  value="viral4hype"
                />{" "}
                <input
                  type="hidden"
                  name="_email.subject"
                  value="New submission - Website Contact Form"
                />{" "}
                <input
                  type="hidden"
                  name="_redirect"
                  value="https://viral4hype.com/thank-you"
                />{" "}
                <div
                  className="cf-turnstile"
                  data-sitekey="0x4AAAAAAAD0O5FDXA3NbD7f"
                  data-size="invisible"
                ></div>{" "}
                <button
                  type="submit"
                  className="btn-submit inline-flex items-center gap-2 text-[0.95rem] font-semibold py-4 px-[2.2rem] rounded-full bg-white text-dark transition-all duration-400 ease-out-expo relative overflow-hidden whitespace-nowrap mt-2 w-fit"
                  data-cursor="link"
                >
                  <span className="btn-text relative z-[1]">Send Message</span>
                  <span className="btn-icon relative z-[1] flex transition-transform duration-300 ease-out-expo">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 10H16M16 10L11 5M16 10L11 15"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                </button>{" "}
              </form>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
      </main>{" "}
      {/*  ====== FOOTER ======  */}
      <footer className="footer relative overflow-hidden py-[clamp(4rem,8vh,7rem)] px-container-x pb-8 border-t border-white/5" style={{ background: '#180A03' }}>
        {" "}
        <div
          className="ft-watermark absolute bottom-[-0.1em] left-0 font-display font-black leading-[0.85] pointer-events-none select-none whitespace-nowrap"
          style={{
            fontSize: "15vw",
            WebkitTextFillColor: "transparent",
            WebkitTextStroke: "1.5px rgba(255,255,255,0.05)",
          }}
          aria-hidden="true"
        >
          viral4hype
        </div>{" "}
        <div className="ft-inner relative z-[1] max-w-[1200px] mx-auto">
          {" "}
          <div className="ft-top grid grid-cols-[1fr_2fr] max-lg:grid-cols-1 gap-16 max-lg:gap-10 mb-16">
            {" "}
            <div className="ft-brand-col max-w-[300px] max-lg:max-w-full">
              {" "}
              <a href="/">
                <img
                  src="/images/logo_v4h.png"
                  alt="viral4hype"
                  width="140"
                  height="44"
                  style={{ height: '32px', width: 'auto' }}
                  className="opacity-80 mb-4 hover:opacity-100 transition-opacity block"
                />
              </a>{" "}
              <p className="text-[0.85rem] text-white/50 leading-[1.65] [&_a]:text-white/55 [&_a]:underline [&_a]:underline-offset-2 [&_a]:decoration-white/15 [&_a]:transition-colors [&_a]:duration-300 [&_a:hover]:text-white/75 [&_a:hover]:decoration-white/30">
                Agenție de web design și marketing digital cu sediul în România. Lucrăm cu clienți din{" "}
                București, Constanța, Brașov, Cluj-Napoca, Iași, Timișoara și din toată țara.
              </p>{" "}
              <div className="ft-social flex gap-[0.7rem] mt-6">
                {" "}
                <a
                  href="https://www.facebook.com/viral4hype/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ft-soc flex items-center justify-center w-9 h-9 rounded-full border border-white/10 text-white/55 transition-all duration-300 hover:text-white hover:-translate-y-0.5"
                  data-cursor="link"
                  aria-label="Facebook"
                >
                  {" "}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>{" "}
                </a>
                <a
                  href="https://www.instagram.com/viral4hype/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ft-soc flex items-center justify-center w-9 h-9 rounded-full border border-white/10 text-white/55 transition-all duration-300 hover:text-white hover:-translate-y-0.5"
                  data-cursor="link"
                  aria-label="Instagram"
                >
                  {" "}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    ></rect>
                    <circle
                      cx="12"
                      cy="12"
                      r="5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    ></circle>
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1"
                      fill="currentColor"
                    ></circle>
                  </svg>{" "}
                </a>
                <a
                  href="https://www.linkedin.com/company/viral4hype/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ft-soc flex items-center justify-center w-9 h-9 rounded-full border border-white/10 text-white/55 transition-all duration-300 hover:text-white hover:-translate-y-0.5"
                  data-cursor="link"
                  aria-label="Linkedin"
                >
                  {" "}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2V9zM4 6a2 2 0 100-4 2 2 0 000 4z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>{" "}
                </a>{" "}
              </div>{" "}
            </div>{" "}
            <div className="ft-cols grid grid-cols-3 max-xs:grid-cols-1 max-md:grid-cols-2 gap-8 max-md:gap-6">
              {" "}
              <div>
                {" "}
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-white/50 mb-5">
                  Services
                </p>{" "}
                <a
                  href="/websites"
                  className="text-link block w-fit text-[0.88rem] text-white/55 py-[0.3rem] transition-colors duration-300 hover:text-white"
                  data-cursor="link"
                >
                  Business Websites
                </a>
                <a
                  href="/shopify-agency"
                  className="text-link block w-fit text-[0.88rem] text-white/55 py-[0.3rem] transition-colors duration-300 hover:text-white"
                  data-cursor="link"
                >
                  Online Shops
                </a>
                <a
                  href="/contact"
                  className="text-link block w-fit text-[0.88rem] text-white/55 py-[0.3rem] transition-colors duration-300 hover:text-white"
                  data-cursor="link"
                >
                  Website Support
                </a>
                <a
                  href="/google-ads"
                  className="text-link block w-fit text-[0.88rem] text-white/55 py-[0.3rem] transition-colors duration-300 hover:text-white"
                  data-cursor="link"
                >
                  Google Ads
                </a>{" "}
              </div>{" "}
              <div>
                {" "}
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-white/50 mb-5">
                  Company
                </p>{" "}
                <a
                  href="/our-work"
                  className="text-link block w-fit text-[0.88rem] text-white/55 py-[0.3rem] transition-colors duration-300 hover:text-white"
                  data-cursor="link"
                >
                  Our Work
                </a>
                <a
                  href="/blog"
                  className="text-link block w-fit text-[0.88rem] text-white/55 py-[0.3rem] transition-colors duration-300 hover:text-white"
                  data-cursor="link"
                >
                  Blog
                </a>
                <a
                  href="/about-us"
                  className="text-link block w-fit text-[0.88rem] text-white/55 py-[0.3rem] transition-colors duration-300 hover:text-white"
                  data-cursor="link"
                >
                  About Us
                </a>
                <a
                  href="/contact"
                  className="text-link block w-fit text-[0.88rem] text-white/55 py-[0.3rem] transition-colors duration-300 hover:text-white"
                  data-cursor="link"
                >
                  Contact Us
                </a>{" "}
              </div>{" "}
              <div>
                {" "}
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-white/50 mb-5">
                  Contact
                </p>{" "}
                <a
                  href="tel:0752221510"
                  className="text-link block w-fit text-[0.88rem] text-white/55 py-[0.3rem] transition-colors duration-300 hover:text-white"
                  data-cursor="link"
                >
                  0752 221 510
                </a>{" "}
                <a
                  href="mailto:contact@viral4hype.com"
                  className="text-link block w-fit text-[0.88rem] text-white/55 py-[0.3rem] transition-colors duration-300 hover:text-white"
                  data-cursor="link"
                >
                  contact@viral4hype.com
                </a>{" "}
                <a
                  href="https://maps.app.goo.gl/X14XqwStQ1Tmb6kh7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link block w-fit text-[0.88rem] text-white/55 py-[0.3rem] transition-colors duration-300 hover:text-white/65"
                  data-cursor="link"
                >
                  Bucuresti, Constanta, Romania
                </a>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="ft-bottom flex justify-between items-center text-[0.78rem] text-white/55 border-t border-white/5 pt-6 flex-wrap max-xs:flex-col max-xs:text-center gap-[0.8rem]">
            {" "}
            <p>&copy; 2026 viral4hype. All rights reserved.</p>{" "}
            <div className="flex gap-6">
              {" "}
              <a
                href="/terms-and-conditions"
                className="text-link text-white/55 transition-colors duration-300 hover:text-white/70"
                data-cursor="link"
              >
                Terms
              </a>
              <a
                href="/privacy-policy"
                className="text-link text-white/55 transition-colors duration-300 hover:text-white/70"
                data-cursor="link"
              >
                Privacy
              </a>
              <a
                href="/cookie-policy"
                className="text-link text-white/55 transition-colors duration-300 hover:text-white/70"
                data-cursor="link"
              >
                Cookies
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </footer>{" "}
      {/*  GSAP — bundled locally via npm, no CDN dependency  */}
    </>
  );
}
