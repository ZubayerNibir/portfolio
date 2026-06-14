/* ============================================================================
   SMOOTH SCROLL — Lenis, wired into GSAP's ticker so ScrollTrigger stays in
   sync. Returns null when motion is reduced (native scrolling is used instead).
   LOCKED ZONE.
   ============================================================================ */

import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function createSmoothScroll(reduced: boolean): Lenis | null {
  if (reduced) return null;

  const lenis = new Lenis({
    duration: 1.05,
    // gentle, "inevitable" easing — no rubber-banding
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.5,
  });

  // Keep ScrollTrigger updated on every Lenis scroll.
  lenis.on('scroll', ScrollTrigger.update);

  // Drive Lenis from GSAP's ticker for one unified rAF loop.
  const onTick = (time: number) => lenis.raf(time * 1000);
  gsap.ticker.add(onTick);
  gsap.ticker.lagSmoothing(0);

  // Stash the cleanup on the instance so callers can fully tear down.
  (lenis as Lenis & { _gsapTick?: (t: number) => void })._gsapTick = onTick;

  return lenis;
}

export function destroySmoothScroll(lenis: Lenis | null): void {
  if (!lenis) return;
  const tick = (lenis as Lenis & { _gsapTick?: (t: number) => void })._gsapTick;
  if (tick) gsap.ticker.remove(tick);
  lenis.destroy();
}
