/* ============================================================================
   ANIMATIONS — the site's motion vocabulary, in one place.
   Every function here assumes motion is ALLOWED; callers must check
   prefersReducedMotion() first and skip these when it returns true.
   Durations/easings come from the same values as tokens.css.
   LOCKED ZONE.
   ============================================================================ */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

let registered = false;

/** Register GSAP plugins once. */
export function registerMotion(): void {
  if (registered) return;
  gsap.registerPlugin(ScrollTrigger, SplitText);
  registered = true;
}

const EASE_OUT = 'power3.out';

/**
 * Hero signature moment: split the headline into lines/words and let them
 * rise + fade in on load. Returns a cleanup function.
 */
export function animateHero(
  lines: HTMLElement[],
  extras: HTMLElement[] = [],
): () => void {
  const splits: SplitText[] = [];

  const ctx = gsap.context(() => {
    const allWords: Element[] = [];
    lines.forEach((line) => {
      const split = new SplitText(line, {
        type: 'lines,words',
        linesClass: 'split-line',
      });
      splits.push(split);
      allWords.push(...split.words);
    });

    const tl = gsap.timeline({ defaults: { ease: EASE_OUT } });
    tl.from(allWords, {
      yPercent: 115,
      opacity: 0,
      duration: 0.9,
      stagger: 0.045,
    }).from(
      extras,
      { y: 18, opacity: 0, duration: 0.6, stagger: 0.12 },
      '-=0.5',
    );
  });

  return () => {
    ctx.revert();
    splits.forEach((s) => s.revert());
  };
}

/**
 * Reveal-on-scroll for every [data-reveal] element inside `root`.
 * Sets the hidden start-state immediately (call from a layout effect to avoid
 * a flash), then animates each element in as it enters the viewport.
 * Returns a cleanup function.
 */
export function revealOnScroll(root: HTMLElement): () => void {
  const ctx = gsap.context(() => {
    const els = gsap.utils.toArray<HTMLElement>('[data-reveal]');
    gsap.set(els, { opacity: 0, y: 22 });

    ScrollTrigger.batch(els, {
      start: 'top 86%',
      once: true,
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: EASE_OUT,
          stagger: 0.09,
          overwrite: true,
        }),
    });

    // Make sure positions are correct once fonts/images settle.
    ScrollTrigger.refresh();
  }, root);

  return () => ctx.revert();
}

/**
 * Magnetic hover for buttons marked [data-magnetic]. Pointer devices only.
 * The element drifts slightly toward the cursor, then springs back on leave.
 * Returns a cleanup function.
 */
export function enableMagnetic(root: HTMLElement): () => void {
  // Only on devices that actually have a hovering pointer (skip touch).
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    return () => {};
  }

  const cleanups: Array<() => void> = [];
  const targets = root.querySelectorAll<HTMLElement>('[data-magnetic]');

  targets.forEach((el) => {
    const strength = 0.35;
    const xTo = gsap.quickTo(el, 'x', { duration: 0.4, ease: EASE_OUT });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.4, ease: EASE_OUT });

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const relX = e.clientX - (r.left + r.width / 2);
      const relY = e.clientY - (r.top + r.height / 2);
      xTo(relX * strength);
      yTo(relY * strength);
    };
    const onLeave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
    cleanups.push(() => {
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
    });
  });

  return () => cleanups.forEach((fn) => fn());
}
