import { useLayoutEffect, useRef } from 'react';
import type Lenis from 'lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Work } from './components/Work';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

import { prefersReducedMotion } from './lib/reducedMotion';
import { createSmoothScroll, destroySmoothScroll } from './lib/smoothScroll';
import {
  registerMotion,
  animateHero,
  revealOnScroll,
  enableMagnetic,
} from './lib/animations';

export function App() {
  const rootRef = useRef<HTMLDivElement>(null);

  // All motion is set up here, once, and torn down cleanly.
  // If the visitor prefers reduced motion, we skip EVERYTHING animated and
  // fall back to native scrolling + fully-visible content.
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduced = prefersReducedMotion();
    let lenis: Lenis | null = null;
    const cleanups: Array<() => void> = [];

    if (!reduced) {
      registerMotion();
      lenis = createSmoothScroll(reduced);

      // Hero signature moment.
      const lines = Array.from(
        root.querySelectorAll<HTMLElement>('.hero__line'),
      );
      const extras = Array.from(
        root.querySelectorAll<HTMLElement>('[data-hero-extra]'),
      );
      if (lines.length) cleanups.push(animateHero(lines, extras));

      // Scroll reveals + magnetic buttons.
      cleanups.push(revealOnScroll(root));
      cleanups.push(enableMagnetic(root));

      // Recalculate trigger positions once fonts have loaded (avoids drift).
      void document.fonts?.ready.then(() => ScrollTrigger.refresh());
    }

    // Smooth in-page anchor navigation (works with or without Lenis).
    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );
      if (!link) return;
      const id = link.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector<HTMLElement>(id);
      if (!target) return;

      e.preventDefault();
      if (lenis) {
        lenis.scrollTo(target, { offset: -8 });
      } else {
        target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
      }
      // Move keyboard focus to the destination for accessibility.
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    };
    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
      cleanups.forEach((fn) => fn());
      destroySmoothScroll(lenis);
    };
  }, []);

  return (
    <div ref={rootRef}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Work />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
