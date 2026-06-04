'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ViralInteractions() {
  // This component lives in the root layout (mounted once), but the DOM it
  // drives — the custom cursor (#cursor), the nav (#nav) and the per-page
  // hero markup — is rendered inside each page's <Nav /> / hero. On a
  // client-side route change the App Router keeps the layout (and this
  // component) mounted while it unmounts the old page subtree and mounts a
  // fresh one, including a brand-new #cursor. If the effect only ran once
  // ([] deps) it would keep transforming the now-detached old cursor while
  // the new cursor stayed frozen at its CSS top-left origin (looked "stuck
  // in the navbar"), and the hover listeners would be bound to dead nodes.
  // Re-running on every pathname change re-queries the live DOM; the
  // `cleanups` teardown below runs first, so there are no leaked listeners.
  const pathname = usePathname();

  useEffect(() => {
    // ─── Guard: run only on client ───────────────────────────────────────────
    if (typeof window === 'undefined') return;

    const cleanups: (() => void)[] = [];

    // ════════════════════════════════════════════════════════════════════════
    // 1. UNITING MOUSE TRACKING & CUSTOM CURSOR
    // ════════════════════════════════════════════════════════════════════════
    const cursorEl = document.getElementById('cursor') as HTMLElement | null;
    const dotEl = cursorEl?.querySelector<HTMLElement>('.c-dot');
    const ringEl = document.getElementById('cursor-ring') as HTMLElement | null;
    const hero = document.querySelector<HTMLElement>('.hero');
    const frags = Array.from(document.querySelectorAll<HTMLElement>('.ht-frag'));

    // Defense-in-depth: only hide the OS cursor once the custom cursor is
    // actually live (element present + a fine pointer). CSS keeps the native
    // cursor until this class is set, so a slow/failed hydration never leaves
    // the user without a visible cursor. See globals.css `html.cursor-active`.
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    if (cursorEl && finePointer) {
      document.documentElement.classList.add('cursor-active');
      cleanups.push(() => document.documentElement.classList.remove('cursor-active'));
    }

    let mx = -100, my = -100; // Mouse target (viewport)
    let curX = -100, curY = -100; // Smoothed cursor/orb position (viewport)
    let lastMx = -100, lastMy = -100;
    let trailIntensity = 0; // 0 to 1 based on movement
    let initialized = false;
    let raf: number;

    // Track mouse globally
    const updateMouse = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!initialized) {
        curX = mx;
        curY = my;
        initialized = true;
      }
    };
    window.addEventListener('mousemove', updateMouse);
    cleanups.push(() => window.removeEventListener('mousemove', updateMouse));

    const updateTouch = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mx = e.touches[0].clientX;
        my = e.touches[0].clientY;
        if (!initialized) {
          curX = mx;
          curY = my;
          initialized = true;
        }
      }
    };
    window.addEventListener('touchmove', updateTouch, { passive: true });
    cleanups.push(() => window.removeEventListener('touchmove', updateTouch));

    // Cursor interactions
    const onEnter = () => { if (ringEl) { ringEl.style.width = '72px'; ringEl.style.height = '72px'; ringEl.style.opacity = '0.5'; } };
    const onLeave = () => { if (ringEl) { ringEl.style.width = '36px'; ringEl.style.height = '36px'; ringEl.style.opacity = '1'; } };
    document.querySelectorAll<HTMLElement>('a,button,[data-cursor="link"]').forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    // Spotlight & Cursor Loop
    // ════════════════════════════════════════════════════════════════════════
    // 1.5 HERO CANVAS REVEAL (Dot Grid)
    // ════════════════════════════════════════════════════════════════════════
    const dotsCanvas = document.getElementById('hero-dots') as HTMLCanvasElement;
    const revealCanvas = document.getElementById('hero-reveal-canvas') as HTMLCanvasElement;
    const colorCanvas = document.createElement('canvas'); // Create color trail canvas
    colorCanvas.id = 'hero-color-canvas';

    if (dotsCanvas && revealCanvas && hero) {
      const dCtx = dotsCanvas.getContext('2d');

      const resizeCanvases = () => {
        const hr = hero.getBoundingClientRect();
        dotsCanvas.width = revealCanvas.width = colorCanvas.width = hr.width;
        dotsCanvas.height = revealCanvas.height = colorCanvas.height = hr.height;

        // Draw Dot Grid
        if (dCtx) {
          dCtx.clearRect(0, 0, dotsCanvas.width, dotsCanvas.height);
          dCtx.fillStyle = 'rgba(255,255,255,0.30)';
          const gap = 24;
          for (let x = gap / 2; x < dotsCanvas.width; x += gap) {
            for (let y = gap / 2; y < dotsCanvas.height; y += gap) {
              dCtx.beginPath();
              dCtx.arc(x, y, 1.2, 0, Math.PI * 2);
              dCtx.fill();
            }
          }
        }
      };

      window.addEventListener('resize', resizeCanvases);
      resizeCanvases();
      cleanups.push(() => window.removeEventListener('resize', resizeCanvases));
    }

    const posHistory: { x: number, y: number, age: number }[] = [];
    const TRAIL_LIFETIME = 120; // 2 seconds at 60fps - EXACT time the trail will "linger"

    const tic = () => {
      // 1. Movement Check (for Intensity)
      if (Math.abs(mx - lastMx) < 0.1 && Math.abs(my - lastMy) < 0.1) {
        trailIntensity = Math.max(0, trailIntensity - 0.01);
      } else {
        trailIntensity = Math.min(1, trailIntensity + 0.1);
      }

      // 2. Snappy Custom Cursor (follows mouse instantly)
      if (dotEl) {
        dotEl.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      }
      if (ringEl) {
        ringEl.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      }

      // Adaptive cursor color: white on dark/colored, black on light backgrounds
      if (mx > 0 && my > 0) {
        let lum = 0; // default: assume dark → white cursor
        const underEl = document.elementFromPoint(mx, my);
        if (underEl) {
          let node: Element | null = underEl;
          while (node && node !== document.documentElement) {
            const bg = getComputedStyle(node).backgroundColor;
            if (bg && bg !== 'transparent' && bg !== 'rgba(0, 0, 0, 0)') {
              const m = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
              if (m) {
                const alpha = m[4] !== undefined ? parseFloat(m[4]) : 1;
                if (alpha > 0.15) {
                  lum = 0.2126 * +m[1] / 255 + 0.7152 * +m[2] / 255 + 0.0722 * +m[3] / 255;
                  break;
                }
              } else {
                break;
              }
            }
            node = node.parentElement;
          }
        }
        const isLight = lum > 0.55;
        const dotColor = isLight ? '#111' : '#fff';
        const ringColor = isLight ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.75)';
        if (dotEl) dotEl.style.background = dotColor;
        if (ringEl) ringEl.style.borderColor = ringColor;
      }

      // 2. Cinematic Light (slightly smoothed for secondary interactions)
      curX += (mx - curX) * 0.15;
      curY += (my - curY) * 0.15;

      const cCtx = colorCanvas?.getContext('2d');

      if (hero) {
        const hr = hero.getBoundingClientRect();
        
        // 1. Age existing points
        for (let i = 0; i < posHistory.length; i++) {
          posHistory[i].age += 1;
        }

        // 2. Remove old points (that lived longer than 120 frames)
        while (posHistory.length > 0 && posHistory[posHistory.length - 1].age > TRAIL_LIFETIME) {
          posHistory.pop();
        }

        // 3. Add new points (Interpolated)
        const dist = Math.sqrt(Math.pow(mx - lastMx, 2) + Math.pow(my - lastMy, 2));
        // Only add points if moving (to allow it to disappear when stopped)
        const steps = (lastMx < 0) ? 1 : Math.min(20, Math.ceil(dist / 12));
        
        for (let s = 1; s <= steps; s++) {
          const ix = lastMx + (mx - lastMx) * (s / steps);
          const iy = lastMy + (my - lastMy) * (s / steps);
          // New points have age 0
          posHistory.unshift({ x: ix - hr.left, y: iy - hr.top, age: 0 });
        }

        const isHeroVisible = hr.bottom > 0 && hr.top < window.innerHeight;

        // Update Text Fragments (Hero Title)
        frags.forEach(frag => {
          if (isHeroVisible && colorCanvas.style.opacity === '1') {
            const fX = frag.offsetLeft + frag.offsetWidth / 2;
            const fY = frag.offsetTop + frag.offsetHeight / 2;
            
            // Find the maximum opacity from current position and trail history
            let maxOp = 0;
            
            // Check all historical points (sampled to avoid lag)
            posHistory.forEach((pos, i) => {
              if (i % 8 !== 0 && i !== 0) return;
              const d = Math.sqrt(Math.pow(fX - pos.x, 2) + Math.pow(fY - pos.y, 2));
              const life = 1 - (pos.age / TRAIL_LIFETIME);
              const factor = life > 0.5 ? 1 : Math.pow(life / 0.5, 1.5);
              const op = Math.max(0, Math.min(1, 1 - (d - 140) / 160)) * factor;
              if (op > maxOp) maxOp = op;
            });
            
            frag.style.opacity = (maxOp * trailIntensity).toString();
          } else {
            frag.style.opacity = '0';
          }
        });

        // DRAW COLOR TRAIL (The "Paint")
        if (cCtx && isHeroVisible) {
          cCtx.clearRect(0, 0, colorCanvas.width, colorCanvas.height);
          const drawRadius = 170; // SAME DIMENSION for all circles

          posHistory.forEach((pos, i) => {
            // Sampling for performance
            if (i % 6 !== 0 && i !== 0) return;

            const life = 1 - (pos.age / TRAIL_LIFETIME);
            // Plateau decay: stay at full opacity, then fade out smoothly
            const factor = life > 0.5 ? 1 : Math.pow(life / 0.5, 1.5);
            if (factor <= 0) return;

            const grad = cCtx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, drawRadius);
            grad.addColorStop(0, `rgba(242, 102, 34, ${factor * 0.45})`);
            grad.addColorStop(0.5, `rgba(242, 102, 34, ${factor * 0.30})`);
            grad.addColorStop(1, 'rgba(242, 102, 34, 0)');

            cCtx.fillStyle = grad;
            cCtx.beginPath();
            cCtx.arc(pos.x, pos.y, drawRadius, 0, Math.PI * 2);
            cCtx.fill();
          });
        }

        const rCanvas = document.getElementById('hero-reveal-canvas') as HTMLCanvasElement;
        const rCtx = rCanvas?.getContext('2d');
        if (rCtx && isHeroVisible) {
          rCtx.clearRect(0, 0, rCanvas.width, rCanvas.height);
          rCtx.globalCompositeOperation = 'source-over';
          rCtx.fillStyle = '#180A03';
          rCtx.fillRect(0, 0, rCanvas.width, rCanvas.height);

          rCtx.globalCompositeOperation = 'destination-out';

          // Draw multiple reveal circles from history
          const drawRadius = 170; // EXACT SAME dimension as requested
          
          posHistory.forEach((pos, i) => {
            if (i % 6 !== 0 && i !== 0) return;

            const life = 1 - (pos.age / TRAIL_LIFETIME);
            const factor = life > 0.5 ? 1 : Math.pow(life / 0.5, 1.5);
            if (factor <= 0) return;

            const gradOuter = rCtx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, drawRadius);
            gradOuter.addColorStop(0, `rgba(0,0,0,${factor * 0.9})`);
            gradOuter.addColorStop(1, 'rgba(0,0,0,0)');
            rCtx.fillStyle = gradOuter;
            rCtx.beginPath();
            rCtx.arc(pos.x, pos.y, drawRadius, 0, Math.PI * 2);
            rCtx.fill();
          });

          rCtx.globalCompositeOperation = 'source-over';
        }
      }

      lastMx = mx; lastMy = my;
      raf = requestAnimationFrame(tic);
    };
    
    // Run canvas loop unconditionally for both pointer and touch devices
    raf = requestAnimationFrame(tic);
    cleanups.push(() => cancelAnimationFrame(raf));

    // ════════════════════════════════════════════════════════════════════════
    // 2. SCROLL-AWARE NAV
    // ════════════════════════════════════════════════════════════════════════
    const nav = document.getElementById('nav');
    if (nav) {
      const syncNav = () => nav.classList.toggle('nav--scrolled', window.scrollY > 80);
      window.addEventListener('scroll', syncNav, { passive: true });
      syncNav();
      cleanups.push(() => window.removeEventListener('scroll', syncNav));
    }

    // ════════════════════════════════════════════════════════════════════════
    // 3. MOBILE MENU BURGER
    // ════════════════════════════════════════════════════════════════════════
    const burger = document.getElementById('burger');
    const mobMenu = document.getElementById('mob-menu');
    if (burger && mobMenu) {
      const toggle = () => {
        const open = burger.classList.toggle('open');
        mobMenu.classList.toggle('open', open);
        document.body.classList.toggle('locked', open);
      };
      const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { burger.classList.remove('open'); mobMenu.classList.remove('open'); document.body.classList.remove('locked'); } };
      burger.addEventListener('click', toggle);
      document.addEventListener('keydown', onKey);
      cleanups.push(() => { burger.removeEventListener('click', toggle); document.removeEventListener('keydown', onKey); });
    }

    // ════════════════════════════════════════════════════════════════════════
    // 4. HERO TEXT WORD REVEAL (Mask slide-up)
    // ════════════════════════════════════════════════════════════════════════
    const words = document.querySelectorAll<HTMLElement>('.ht-word');
    words.forEach((w, i) => {
      w.style.transition = `transform 1.1s cubic-bezier(0.16, 1, 0.3, 1) ${80 + i * 160}ms`;
      // Force reflow then set
      requestAnimationFrame(() => { w.style.transform = 'translateY(0%)'; });
    });

    const heroBadge = document.querySelector<HTMLElement>('.hero-badge');
    const heroBottom = document.querySelector<HTMLElement>('.hero-bottom');
    const heroStats = document.querySelector<HTMLElement>('.hero-stats');
    const heroScroll = document.querySelector<HTMLElement>('.hero-scroll');

    const fadeIn = (el: HTMLElement | null, delay: number, extra?: string) => {
      if (!el) return;
      el.style.transition = `opacity 0.9s ease ${delay}ms${extra ? ', ' + extra : ''}`;
      requestAnimationFrame(() => { el.style.opacity = '1'; });
    };

    fadeIn(heroBadge, 300);
    fadeIn(heroBottom, 600, `transform 0.9s cubic-bezier(0.16,1,0.3,1) 600ms`);
    if (heroBottom) { requestAnimationFrame(() => { heroBottom.style.transform = 'none'; }); }
    fadeIn(heroStats, 900);
    fadeIn(heroScroll, 1100);

    // ════════════════════════════════════════════════════════════════════════
    // 5. HERO SPOTLIGHT ORB CREATION & HOVER EVENTS
    // ════════════════════════════════════════════════════════════════════════
    if (hero && frags.length > 0) {
      colorCanvas.style.cssText = `
        position: absolute;
        pointer-events: none;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        filter: blur(120px);
        mix-blend-mode: screen;
        opacity: 0;
        transition: opacity 1s cubic-bezier(0.16,1,0.3,1);
      `;
      hero.insertBefore(colorCanvas, hero.firstChild);

      frags.forEach(f => {
        f.style.opacity = '0';
        f.style.transition = 'opacity 0.4s ease';
      });

      const onEnterHero = () => {
        colorCanvas.style.opacity = '1';
        posHistory.length = 0;
        lastMx = -1; lastMy = -1;
      };
      const onLeaveHero = () => {
        colorCanvas.style.opacity = '0';
        frags.forEach(f => f.style.opacity = '0');
      };

      hero.addEventListener('mouseenter', onEnterHero);
      hero.addEventListener('touchstart', onEnterHero, { passive: true });
      hero.addEventListener('mouseleave', onLeaveHero);
      hero.addEventListener('touchend', onLeaveHero, { passive: true });
      cleanups.push(() => {
        hero.removeEventListener('mouseenter', onEnterHero);
        hero.removeEventListener('touchstart', onEnterHero);
        hero.removeEventListener('mouseleave', onLeaveHero);
        hero.removeEventListener('touchend', onLeaveHero);
        if (colorCanvas.parentNode) colorCanvas.parentNode.removeChild(colorCanvas);
      });
    }


    // ════════════════════════════════════════════════════════════════════════
    // 6. HORIZONTAL PINNED SLIDER (ben-section)
    //    Replicates the GSAP ScrollTrigger pin effect from viral4hype.com
    //    using a pure-JS sticky + translateX approach
    // ════════════════════════════════════════════════════════════════════════
    const benSection = document.querySelector<HTMLElement>('.ben-section');
    const benTrack = document.querySelector<HTMLElement>('.ben-track');

    // Disable horizontal scroll effect on mobile to allow native vertical stacking
    const isMobile = window.matchMedia('(max-width: 1024px)').matches;

    if (benSection && benTrack && !isMobile) {
      const panels = Array.from(benTrack.querySelectorAll<HTMLElement>('.ben-panel'));
      const numPanels = panels.length;
      if (numPanels > 1) {
        // Total horizontal distance to travel = (numPanels-1) × 100vw
        const totalSlide = () => (numPanels - 1) * window.innerWidth;

        // Wrap benSection in a spacer div that provides the vertical scroll space
        const spacer = document.createElement('div');
        spacer.className = 'ben-spacer';
        spacer.style.cssText = `
          position: relative;
          height: ${totalSlide() + window.innerHeight}px;
          touch-action: pan-y;
        `;
        benSection.parentNode!.insertBefore(spacer, benSection);
        spacer.appendChild(benSection);

        // Make benSection sticky
        benSection.style.cssText = `
          position: sticky;
          top: 0;
          overflow: hidden;
          height: ${window.innerHeight}px;
          width: 100%;
        `;

        // Make benTrack lay out horizontally
        benTrack.style.cssText = `
          display: flex;
          flex-direction: row;
          width: ${numPanels * 100}vw;
          height: 100%;
          will-change: transform;
          transform: translate3d(0,0,0);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transition: transform 0.05s linear;
        `;
        panels.forEach(p => {
          p.style.width = '100vw';
          p.style.height = `${window.innerHeight}px`;
          p.style.flexShrink = '0';
          p.style.willChange = 'transform';
        });

        // Promote benSection to its own compositor layer
        benSection.style.transform = 'translateZ(0)';
        benSection.style.contain = 'layout paint';

        // Sync dots
        const dots = Array.from(document.querySelectorAll<HTMLElement>('.ben-dot'));

        let lastTx = 0;
        let lastActiveIdx = -1;
        let cachedTotal = totalSlide();
        let cachedSpacerTop = spacer.offsetTop;
        let cachedInnerWidth = window.innerWidth;

        const applySlider = () => {
          const scrolledIn = window.scrollY - cachedSpacerTop;
          if (scrolledIn <= 0) {
            if (lastTx !== 0) {
              benTrack.style.transform = 'translate3d(0,0,0)';
              lastTx = 0;
              if (lastActiveIdx !== 0) {
                dots.forEach((d, i) => d.classList.toggle('slider-dot--active', i === 0));
                lastActiveIdx = 0;
              }
            }
            return;
          }
          const progress = Math.min(scrolledIn / cachedTotal, 1);
          const rawTx = -(progress * (numPanels - 1) * cachedInnerWidth);
          const tx = Math.round(rawTx * 10) / 10;
          if (Math.abs(tx - lastTx) > 0.1) {
            benTrack.style.transform = `translate3d(${tx}px,0,0)`;
            lastTx = tx;
            const activeIdx = Math.min(Math.round(progress * (numPanels - 1)), numPanels - 1);
            if (activeIdx !== lastActiveIdx) {
              dots.forEach((d, i) => d.classList.toggle('slider-dot--active', i === activeIdx));
              lastActiveIdx = activeIdx;
            }
          }
        };

        const syncSlider = () => {
          applySlider();
        };

        window.addEventListener('scroll', syncSlider, { passive: true });
        applySlider();

        const onResize = () => {
          cachedTotal = totalSlide();
          cachedSpacerTop = spacer.offsetTop;
          cachedInnerWidth = window.innerWidth;
          benSection.style.height = `${window.innerHeight}px`;
          panels.forEach(p => {
            p.style.height = `${window.innerHeight}px`;
          });
          spacer.style.height = `${cachedTotal + window.innerHeight}px`;
          benTrack.style.width = `${numPanels * 100}vw`;
          applySlider();
        };
        window.addEventListener('resize', onResize, { passive: true });

        cleanups.push(() => {
          window.removeEventListener('scroll', syncSlider);
          window.removeEventListener('resize', onResize);
        });
      }
    }

    // ════════════════════════════════════════════════════════════════════════
    // 7. SCROLL-REVEAL — sections fade + translateY as they enter viewport
    // ════════════════════════════════════════════════════════════════════════

    const revealEls = document.querySelectorAll<HTMLElement>(
      '.proj, .srv-section, .about-section, .contact-section'
    );

    revealEls.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(32px)';
      el.style.transition = 'opacity 0.85s ease, transform 0.85s cubic-bezier(0.16,1,0.3,1)';
    });



    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const t = entry.target as HTMLElement;
          t.style.opacity = '1';
          t.style.transform = 'translateY(0)';
          revealObserver.unobserve(t);
        }
      });
    }, { threshold: 0.06, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => revealObserver.observe(el));
    cleanups.push(() => revealObserver.disconnect());

    // ════════════════════════════════════════════════════════════════════════
    // 8. SCROLL PROGRESS BAR (bottom of viewport)
    // ════════════════════════════════════════════════════════════════════════
    const progressBar = document.querySelector<HTMLElement>('.progress-bar');
    if (progressBar) {
      let cachedMaxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      
      const syncProgress = () => {
        progressBar.style.transform = `scaleX(${cachedMaxScroll > 0 ? window.scrollY / cachedMaxScroll : 0})`;
      };
      
      const onPbResize = () => {
        cachedMaxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
        syncProgress();
      };
      
      window.addEventListener('scroll', syncProgress, { passive: true });
      window.addEventListener('resize', onPbResize, { passive: true });
      
      cleanups.push(() => {
        window.removeEventListener('scroll', syncProgress);
        window.removeEventListener('resize', onPbResize);
      });
    }

    // ════════════════════════════════════════════════════════════════════════
    // 9. SERVICE ROW HOVER — number gradient effect
    // ════════════════════════════════════════════════════════════════════════
    document.querySelectorAll<HTMLElement>('.srv-row').forEach(row => {
      const num = row.querySelector<HTMLElement>('.srv-num');
      if (!num) return;
      const on = () => { num.dataset.active = '1'; num.style.cssText += ';background:linear-gradient(135deg,#F26622,#F26622);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;-webkit-text-stroke:0;opacity:1'; };
      const off = () => { num.dataset.active = ''; num.style.background = ''; num.style.webkitTextFillColor = ''; num.style.webkitBackgroundClip = ''; num.style.backgroundClip = ''; num.style.opacity = ''; };
      row.addEventListener('mouseenter', on);
      row.addEventListener('mouseleave', off);
    });

    // ════════════════════════════════════════════════════════════════════════
    // CLEANUP on unmount
    // ════════════════════════════════════════════════════════════════════════
    return () => cleanups.forEach(fn => fn());
  }, [pathname]);

  return null;
}
