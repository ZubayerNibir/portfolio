# Talha Zubayer — Portfolio (Barakah Labs)

A fast, recruiter-facing portfolio for a code-based video + AI-automation studio.
Single page, mobile-first, near-black with one warm amber accent.

**Editing the content?** Read **[AGENTS.md](./AGENTS.md)** first — it explains
the safe way to change text and media without breaking anything.

## Stack
- **React + Vite + TypeScript**
- **GSAP** (ScrollTrigger + SplitText) for motion
- **Lenis** for smooth scrolling
- Self-hosted fonts (**Fraunces** serif + **Inter** sans) via `@fontsource-variable`
- No CSS framework — just design tokens in `src/styles/tokens.css`

## Scripts
```bash
npm install      # install dependencies
npm run dev      # local dev server (http://localhost:5173)
npm run build    # production build -> /dist
npm run preview  # preview the production build
npm run typecheck
```

## Project structure
```
src/
  content/      🟢 SAFE to edit — all copy & project data (heavily commented)
    siteConfig.ts   name, brand, hero, contact, nav, tools
    bio.ts          the About story
    services.ts     services offered
    projects.ts     the portfolio videos
    types.ts        shapes (rarely needs editing)
  components/   🔴 LOCKED — the page sections (pure markup)
  styles/       🔴 LOCKED — tokens.css (colors/fonts/spacing) + global.css
  lib/          🔴 LOCKED — smooth scroll + animation engine
  App.tsx       wires sections together + sets up motion
  main.tsx      entry point (loads fonts + styles)
public/
  posters/      poster stills shown before a video loads
  video/        web-compressed videos (click-to-load only)
  og-image.jpg  social share image
  favicon.svg, robots.txt, sitemap.xml
```

## Key behaviors
- **Performance:** videos use **click-to-load** (only a poster image loads up
  front). GSAP is split into its own chunk. Fonts load Latin subset only.
- **Accessibility:** full keyboard nav, skip link, semantic landmarks, and a
  complete `prefers-reduced-motion` path that disables every animation.
- **Content separation:** components contain **zero** hard-coded copy — every
  word comes from `src/content/`.

## Before deploying
Search-and-replace the placeholder domain `talhazubayer.com` with your real
domain in: `index.html`, `public/robots.txt`, `public/sitemap.xml`.

Deployment steps (GitHub + Cloudflare Pages) are at the bottom of the build
summary / can be re-generated on request.
```
Build command:    npm run build
Build output dir: dist
```
