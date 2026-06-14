/* ============================================================================
   CONTENT TYPES — the "shape" of the site's data.
   You usually DON'T need to touch this file. It just describes what fields
   each piece of content must have, so editors can't accidentally break things.
   Edit the actual words in: siteConfig.ts, bio.ts, services.ts, projects.ts
   ============================================================================ */

/** A button / link with visible text and where it points. */
export interface CTA {
  /** The text shown on the button, e.g. "Start a project". */
  label: string;
  /** Where it goes: a URL, a "mailto:" link, or an in-page anchor like "#work". */
  href: string;
}

/** One navigation link in the top bar. */
export interface NavLink {
  label: string;
  href: string; // in-page anchor, e.g. "#work"
}

/** One service you offer. */
export interface Service {
  /** Two-digit number shown beside the service, e.g. "01". */
  no: string;
  /** Short service name, e.g. "Code-Based Product Video". */
  title: string;
  /** One or two sentences describing the outcome for the client. */
  description: string;
  /** Small tags shown under the service (tools / keywords). Keep to 2–4. */
  tags: string[];
}

/**
 * One portfolio project (a video).
 * IMPORTANT: only describe what the video ACTUALLY shows. Never invent claims.
 */
export interface Project {
  /** URL-safe id, lowercase, no spaces. Used internally. e.g. "pulsegrid". */
  id: string;
  /** Project title shown on the card. */
  title: string;
  /** Short tagline / subtitle. */
  tagline: string;
  /** One short paragraph describing the video accurately. */
  description: string;
  /** Tech/keyword tags, e.g. ["React", "Three.js", "Remotion"]. */
  tags: string[];
  /** Duration label shown on the card, e.g. "20s". */
  duration: string;
  /** Aspect ratio of the video: "square" (1:1) or "wide" (16:9). */
  aspect: 'square' | 'wide';
  /** Poster image path (shown before the video loads). In /public. */
  poster: string;
  /**
   * The video source. Either a self-hosted file path in /public/video/...
   * OR a YouTube/Vimeo URL. If you paste a YouTube/Vimeo link, set kind:"embed".
   */
  videoSrc: string;
  /** "file" = self-hosted mp4 (click to load). "embed" = YouTube/Vimeo URL. */
  kind: 'file' | 'embed';
}
