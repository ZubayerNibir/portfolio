/* ============================================================================
   REDUCED MOTION — one place that answers "should we animate?".
   Respects the OS / browser "Reduce motion" accessibility setting.
   LOCKED ZONE: editors generally shouldn't need to change this.
   ============================================================================ */

import { useEffect, useState } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

/** Synchronous check — safe to call anywhere (returns false on the server). */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia(QUERY).matches;
}

/** React hook version that also updates if the user flips the setting live. */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState<boolean>(prefersReducedMotion);

  useEffect(() => {
    const mq = window.matchMedia(QUERY);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return reduced;
}
