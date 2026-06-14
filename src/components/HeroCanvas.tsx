import { useEffect, useRef } from 'react';
import { prefersReducedMotion } from '../lib/reducedMotion';

/**
 * The site's ONE heavy motion: a soft amber light that drifts toward the
 * cursor behind the hero. It is intentionally cheap (a single radial-gradient
 * fill) and reads its color from the --accent design token.
 *
 * - Pointer devices: the glow eases toward the cursor (requestAnimationFrame).
 * - Touch / no-hover devices: a single static glow is drawn (no loop).
 * - Reduced motion: a single static glow, no loop.
 */
export function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    // Read the accent color from the design token so re-theming "just works".
    const hex = getComputedStyle(document.documentElement)
      .getPropertyValue('--accent')
      .trim();
    const [r, g, b] = hexToRgb(hex || '#E8B04B');

    const reduced = prefersReducedMotion();
    const interactive =
      !reduced &&
      window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let w = 0;
    let h = 0;
    let raf = 0;
    const target = { x: 0.42, y: 0.4 }; // normalized (0..1)
    const cur = { x: 0.42, y: 0.4 };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const cx = cur.x * w;
      const cy = cur.y * h;
      const radius = Math.max(w, h) * 0.62;
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
      grad.addColorStop(0, `rgba(${r},${g},${b},0.20)`);
      grad.addColorStop(0.35, `rgba(${r},${g},${b},0.06)`);
      grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.max(1, Math.round(w * dpr));
      canvas.height = Math.max(1, Math.round(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!interactive) draw();
    };

    const tick = () => {
      cur.x += (target.x - cur.x) * 0.06;
      cur.y += (target.y - cur.y) * 0.06;
      draw();
      raf = requestAnimationFrame(tick);
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      target.x = (e.clientX - rect.left) / rect.width;
      target.y = (e.clientY - rect.top) / rect.height;
    };

    resize();
    window.addEventListener('resize', resize);

    if (interactive) {
      window.addEventListener('pointermove', onPointerMove);
      raf = requestAnimationFrame(tick);
    }

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={ref} className="hero__canvas" aria-hidden="true" />;
}

/** "#E8B04B" -> [232, 176, 75] */
function hexToRgb(hex: string): [number, number, number] {
  const m = hex.replace('#', '');
  const full =
    m.length === 3
      ? m
          .split('')
          .map((c) => c + c)
          .join('')
      : m;
  const int = parseInt(full, 16);
  return [(int >> 16) & 255, (int >> 8) & 255, int & 255];
}
