# Hald Atelier — Minimalist Architecture Portfolio

A minimalist, editorial portfolio website for **Hald Atelier**, a fictional Copenhagen-based architecture studio. The site is built as a single-page experience with project detail routes, scroll-reveal animations, and a restrained monochrome design language inspired by print architecture monographs.

> "Buildings shaped by light and silence."

## Features

- Editorial single-page layout with Hero, Works, Studio, and Contact sections
- Project detail routes (hash-based routing, so it works on any static host)
- Scroll-reveal animations with `prefers-reduced-motion` support
- Full shadcn/ui component set (accordion, dialog, carousel, charts, forms, and more)
- Monochrome design system driven by CSS variables with dark-mode tokens
- Responsive layout with a mobile navigation menu

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 7** (build tooling)
- **Tailwind CSS 3** + `tailwindcss-animate`
- **shadcn/ui** (Radix primitives) + `class-variance-authority`, `tailwind-merge`
- **react-router** (HashRouter) for project pages
- **lucide-react** icons, `recharts`, `embla-carousel-react`, `react-hook-form` + `zod`

## Getting Started

Prerequisites: Node.js 18+ and npm.

```bash
npm install
npm run dev      # start dev server (http://localhost:3000)
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Project Structure

```
├── index.html            # HTML entry
├── src/
│   ├── main.tsx          # React entry (HashRouter)
│   ├── App.tsx           # Routes (Home, ProjectPage)
│   ├── pages/            # Home, ProjectPage
│   ├── sections/         # Header, Hero, Works, Studio, Contact
│   ├── components/       # Reveal helper + shadcn/ui set
│   ├── data/projects.ts  # Project content (edit to add projects)
│   ├── hooks/, lib/      # Utilities
│   └── index.css         # Tailwind + design tokens
├── tailwind.config.js    # Theme (CSS-variable driven colors)
└── vite.config.ts        # base: './' for portable static hosting
```

## Configuration

- Project content lives in `src/data/projects.ts` — add entries there to publish new work.
- Design tokens (colors, radius) are CSS variables in `src/index.css` (`:root` / `.dark`).
- `vite.config.ts` uses `base: './'`, so the built site works from any sub-path (e.g. GitHub Pages project pages).

## Deployment

The site is fully static. Build with `npm run build` and host the `dist/` folder anywhere (GitHub Pages, Cloudflare Pages, Netlify). A GitHub Actions workflow (`.github/workflows/pages.yml`) builds and deploys to GitHub Pages automatically on every push to `main`.

## Credits

Built by **Girish Lade** — https://ladestack.in
