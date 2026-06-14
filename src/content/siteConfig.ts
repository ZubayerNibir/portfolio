/* ============================================================================
   SITE CONFIG — the most important things to keep up to date.
   ✅ SAFE TO EDIT: change any text inside the quotes.
   ❌ Do NOT rename the keys (the words before the colon).
   ============================================================================ */

import type { CTA, NavLink } from './types';

export const siteConfig = {
  /* ---- IDENTITY ----------------------------------------------------------- */

  /** Your real name — recruiters trust a real person. Shown as the main name. */
  name: 'Talha Zubayer',

  /** Your studio / brand wordmark, shown in the top-left logo. */
  brand: 'Barakah Labs',

  /** One-line role, used in the eyebrow above the hero headline. */
  role: 'Motion + AI Engineer',

  /** Where you are + how you work. */
  location: 'Dhaka, Bangladesh',
  availability: 'Remote · Worldwide',

  /* ---- CONTACT (used by the buttons and footer) --------------------------- */
  email: 'domainnibir@gmail.com',
  linkedin: 'https://www.linkedin.com/in/zubayer-nibir/',

  /** Optional scheduling link (e.g. Calendly). Leave '' to hide the button. */
  schedulingUrl: '',

  /* ---- HERO (the first thing visitors see) -------------------------------- */
  hero: {
    /** Two short lines of the big headline. This is your 8-second pitch. */
    headlineA: 'Videos that sell your product.',
    headlineB: 'AI agents that actually work.',

    /** The supporting sentence under the headline. */
    subline:
      'Code-based motion (Remotion) for SaaS, AI & YouTube — plus AI automation with Claude, n8n, Cowork & Hermes. Built in code, so it scales, stays on-brand, and updates by changing a value, not re-editing.',
  },

  /* ---- CALLS TO ACTION ---------------------------------------------------- */
  /** Primary button. The mailto opens the visitor's email app pre-filled. */
  primaryCta: {
    label: 'Start a project',
    href: 'mailto:domainnibir@gmail.com?subject=Project%20inquiry%20%E2%80%94%20Barakah%20Labs&body=Hi%20Talha%2C%0A%0AI%27d%20like%20to%20talk%20about%20a%20project.%0A%0AWhat%20I%20need%3A%0ATimeline%3A%0ABudget%20range%3A%0A',
  } as CTA,

  /** Secondary button — jumps to the work section. */
  secondaryCta: { label: 'See the work', href: '#work' } as CTA,

  /* ---- NAVIGATION (top bar links) ----------------------------------------- */
  nav: [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ] as NavLink[],

  /* ---- TOOLS STRIP (the marquee of tools you use) ------------------------- */
  /** Shown as a quiet scrolling/wrapping row. Add or remove freely. */
  tools: [
    'Remotion',
    'React',
    'TypeScript',
    'Claude',
    'MCP',
    'n8n',
    'Cowork',
    'Hermes',
    'Veo',
    'ElevenLabs',
  ],
};
