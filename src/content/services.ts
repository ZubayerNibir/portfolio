/* ============================================================================
   SERVICES — what people can hire you for.
   ✅ SAFE TO EDIT: change titles, descriptions, and tags.
   To add a service: copy one { ... } block, paste it, and update the text.
   Keep the "no" values in order (01, 02, 03, ...).
   ============================================================================ */

import type { Service } from './types';

/** Small label + heading shown above the services list. */
export const servicesIntro = {
  eyebrow: 'Services',
  heading: 'Two things, done properly.',
  subheading:
    'I help SaaS, AI, and YouTube teams in two ways — and I handle the messy bits in between.',
};

export const services: Service[] = [
  {
    no: '01',
    title: 'Code-Based Product Video',
    description:
      'Product explainers, demos, and feature-launch videos built in Remotion. Because they’re code, they scale to many versions or languages from one project and stay perfectly on-brand.',
    tags: ['Remotion', 'React', 'Motion Graphics'],
  },
  {
    no: '02',
    title: 'AI Automation & Workflows',
    description:
      'Agents and automations with Claude, n8n, Cowork and Hermes — no-code, low-code, or fully custom — that remove manual work and actually run reliably instead of breaking.',
    tags: ['Claude', 'MCP', 'n8n'],
  },
  {
    no: '03',
    title: 'Agent Reliability',
    description:
      'Fixing agents that misbehave in production. Through context engineering I stop them hallucinating, looping, or drifting — so they do the job every time.',
    tags: ['Context Engineering', 'LLMs', 'Evals'],
  },
];

/** A quiet one-liner under the services, for the extra offerings. */
export const servicesFootnote =
  'Also available: YouTube content, AI / UGC-style video, and bulk image generation.';
