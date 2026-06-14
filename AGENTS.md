# How to edit this website safely

This guide is for **anyone** updating the site later — a human, or an AI helper
like Claude, Cowork, or Hermes. Read this first. It is written in plain English.

The #1 rule: **work in the SAFE zone, leave the LOCKED zone alone.**

---

## 🟢 SAFE ZONE — you may edit these freely

These files hold all the **words and media** on the site. Changing them cannot
break the layout, as long as you only change the text inside quotes and don't
rename the labels before the colons.

| What you want to change | File to edit |
| --- | --- |
| Your name, brand, email, LinkedIn, hero headline, nav, tools | `src/content/siteConfig.ts` |
| The "About" story and skills | `src/content/bio.ts` |
| The list of services | `src/content/services.ts` |
| The portfolio projects (videos) | `src/content/projects.ts` |
| Poster images for videos | `public/posters/` |
| The video files themselves | `public/video/` |

Each of those `.ts` files has comments (lines starting with `//`) explaining
exactly what to do.

### Example: change a headline
Open `src/content/siteConfig.ts`, find:
```ts
headlineA: 'Videos that sell your product.',
```
Change only the part inside the quotes:
```ts
headlineA: 'I build videos that convert.',
```
Save. Done.

### Example: add a new project (video)
1. Put a web-friendly `.mp4` in `public/video/` (keep it small — under ~10 MB).
2. Put a poster image (a still from the video) in `public/posters/`.
3. In `src/content/projects.ts`, copy one `{ ... }` block, paste it below the
   last one, and fill in the fields. **Only describe what the video actually
   shows — never make things up.**

---

## 🔴 LOCKED ZONE — do NOT edit unless you really know React/CSS

These run the design and the animations. A small mistake here can break the
whole page. Only an experienced developer (or a strong AI model) should touch
them.

- `src/components/` — the building blocks of the page
- `src/styles/` — colors, fonts, spacing (the "design tokens")
- `src/lib/` — the scroll + animation engine
- `index.html`, `vite.config.ts`, `tsconfig*.json`, `package.json`

> Want to change a **color** or **font**? Those live in
> `src/styles/tokens.css`. That is still the LOCKED zone — change one value at a
> time and check the site afterwards.

---

## 💾 ALWAYS do this before AND after editing

This lets you undo any mistake instantly.

**Before you start editing:**
```bash
git add -A && git commit -m "checkpoint"
```

**If something looks broken and you want to undo all changes since the checkpoint:**
```bash
git restore .
```

---

## ▶️ Running the site on your computer

```bash
npm install      # once, the first time
npm run dev      # start a live preview at http://localhost:5173
npm run build    # make the final files for the internet (creates /dist)
npm run preview  # preview the built site
```

Leave `npm run dev` running while you edit — the browser updates as you save.

---

## ✅ A quick checklist after editing

1. The site still loads (`npm run dev`).
2. Your change shows up.
3. No red error messages in the terminal.
4. Commit it: `git add -A && git commit -m "update content"`.

That's it. Stay in the 🟢 SAFE ZONE and you can't go far wrong.
