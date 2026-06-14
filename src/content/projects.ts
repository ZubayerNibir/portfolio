/* ============================================================================
   PROJECTS — the work shown in the "Work" section.
   ✅ SAFE TO EDIT: titles, taglines, descriptions, tags, duration.
   ⚠️  GOLDEN RULE: only describe what the video ACTUALLY shows. Never invent.

   To ADD a project:
     1. Put the compressed video in   public/video/your-file.mp4
     2. Put a poster image in         public/posters/your-file.jpg
     3. Copy one { ... } block below, paste it, and fill in the fields.

   To use a YouTube/Vimeo link instead of a self-hosted file:
     set  kind: 'embed'  and  videoSrc: 'https://www.youtube.com/embed/XXXX'
   ============================================================================ */

import type { Project } from './types';

/** Small label + heading shown above the work grid. */
export const workIntro = {
  eyebrow: 'Selected work',
  heading: 'Films that are built, not edited.',
  subheading:
    'Every pixel below was generated in code with Remotion — no After Effects, no stock templates.',
};

export const projects: Project[] = [
  {
    id: 'pulsegrid',
    title: 'Pulsegrid',
    tagline: 'Data that moves',
    description:
      'A 20-second launch teaser for a SaaS data platform, built entirely in code. 1,200 audio-reactive particles converge into a glowing core, resolve into 3D data bars and a live analytics dashboard, then snap to the logo — proof that a polished product film can be pure React, Three.js and Remotion.',
    tags: ['React', 'Three.js', 'Remotion', 'Audio-reactive'],
    duration: '20s',
    aspect: 'square',
    poster: '/posters/pulsegrid.jpg',
    videoSrc: '/video/pulsegrid-square.mp4',
    kind: 'file',
  },
  {
    id: 'catalyst',
    title: 'Catalyst Protocol',
    tagline: 'Total automation · zero limits',
    description:
      'A 60-second audio-reactive brand film about automation. A fractured, “disconnected” data pipeline is forged into one system: an energy core implodes into brutalist chroma-type, a jagged error-wave morphs into a singing visualizer and live dashboard, then slams into the final reveal — every frame generated in code.',
    tags: ['React', 'Remotion', 'Generative SVG', 'Audio-reactive'],
    duration: '60s',
    aspect: 'wide',
    poster: '/posters/catalyst.jpg',
    videoSrc: '/video/catalyst.mp4',
    kind: 'file',
  },
];
