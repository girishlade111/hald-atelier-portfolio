# Hald Atelier — Minimalist Architecture Portfolio

A minimalist, editorial portfolio website for **Hald Atelier**, a fictional Copenhagen-based architecture studio. The site is built as a single-page experience with project detail routes, scroll-reveal animations, and a restrained monochrome design language inspired by print architecture monographs.

> “Buildings shaped by light and silence.”

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Pages & Sections](#pages--sections)
- [Configuration](#configuration)
- [Adding a Project](#adding-a-project)
- [Deployment](#deployment)
- [Git & GitHub](#git--github)
- [License](#license)

---

## Features

- **Minimalist editorial design** — warm off-white background (`#f7f5f0`), near-black typography, generous whitespace, and hairline dividers.
- **Responsive layout** — fluid `vw`-based typography and breakpoints that scale gracefully from mobile to ultra-wide screens (up to a `1600px` content column).
- **Scroll-reveal animations** — a custom `Reveal` component using the Intersection Observer API adds staggered fade-up entrances with configurable delays.
- **Client-side routing** — powered by React Router v7 with a home page and dynamic project detail pages (`/work/:slug`).
- **Smooth in-page navigation** — the fixed header navigates between `Work`, `Studio`, and `Contact` anchors with smooth scrolling, and correctly redirects home first when on a project page.
- **Scroll-aware header** — the header gains a blurred background after scrolling past 24px.
- **Project showcase** — six curated projects with metadata (type, location, year, area, status), long-form copy, and a “next project” loop.
- **TypeScript throughout** — strict-friendly configs with separate `tsconfig.app.json` and `tsconfig.node.json`.
- **Full shadcn/ui component library included** — 60+ accessible primitives (accordion, dialog, dropdown, command palette, charts, etc.) ready to use for future expansion.
- **Path aliasing** — `@/*` maps to `src/*` via Vite and TypeScript config.

## Tech Stack

| Layer      | Technology |
| ---------- | ---------- |
| Framework  | [React 19](https://react.dev) |
| Language   | [TypeScript ~5.9](https://www.typescriptlang.org) |
| Build Tool | [Vite 7](https://vite.dev) (`@vitejs/plugin-react`) |
| Styling    | [Tailwind CSS 3.4](https://tailwindcss.com) + `tailwindcss-animate` |
| Routing    | [React Router 7](https://reactrouter.com) |
| UI Primitives | [Radix UI](https://www.radix-ui.com) (via shadcn/ui) |
| Icons      | [Lucide React](https://lucide.dev) |
| Fonts      | [Inter](https://rsms.me/inter/) (Google Fonts, variable weights 300–500) |
| Linting    | [ESLint 9](https://eslint.org) (flat config) + `typescript-eslint` |
| Package Manager | npm (lockfile: `package-lock.json`) |

Additional libraries available in the dependency tree: `react-hook-form` + `zod` + `@hookform/resolvers`, `recharts`, `sonner`, `vaul`, `cmdk`, `embla-carousel-react`, `date-fns`, `react-day-picker`, and `next-themes`.

## Project Structure

```
project/
├── index.html                 # HTML entry — title, meta, Inter font
├── package.json
├── package-lock.json
├── tsconfig.json              # Solution-style references
├── tsconfig.app.json          # App (src) type-checking
├── tsconfig.node.json         # Vite/config type-checking
├── vite.config.ts             # Vite config — base './', port 3000, '@' alias
├── tailwind.config.js         # Tailwind theme + shadcn color system
├── postcss.config.js          # Tailwind + Autoprefixer
├── eslint.config.js           # Flat ESLint config
├── components.json            # shadcn/ui configuration
├── .gitignore                 # Ignores node_modules, dist, .env, logs, editors
└── src/
    ├── main.tsx               # React root
    ├── App.tsx                # Routes + ScrollToTop
    ├── App.css
    ├── index.css              # Global styles, reveal/link-sweep animations
    ├── pages/
    │   ├── Home.tsx           # Composes all sections
    │   └── ProjectPage.tsx    # Dynamic /work/:slug detail page
    ├── sections/
    │   ├── Header.tsx         # Fixed nav (Work / Studio / Contact)
    │   ├── Hero.tsx           # Statement + hero image
    │   ├── Works.tsx          # Project index list
    │   ├── Studio.tsx         # About + facts
    │   └── Contact.tsx        # Footer contact block
    ├── components/
    │   ├── Reveal.tsx         # Intersection Observer reveal wrapper
    │   └── ui/                # shadcn/ui components (60+)
    ├── data/
    │   └── projects.ts        # Typed project content (source of truth)
    ├── hooks/
    │   └── use-mobile.ts
    └── lib/
        └── utils.ts           # cn() utility
```

## Getting Started

### Prerequisites

- **Node.js** 20+ (recommended: latest LTS)
- **npm** 10+ (or a compatible package manager)

### Installation

```bash
# 1. Clone the repository
git clone <repository-url>.git
cd project

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

The app runs at **http://localhost:3000** (port configured in `vite.config.ts`) with hot module replacement enabled.

### Production build

```bash
npm run build     # type-check (tsc -b) + bundle to dist/
npm run preview   # serve the production build locally
```

## Available Scripts

| Script          | Description                                              |
| --------------- | -------------------------------------------------------- |
| `npm run dev`   | Start Vite dev server on port `3000` with HMR            |
| `npm run build` | Type-check with `tsc -b`, then build production bundle   |
| `npm run lint`  | Run ESLint across the project                            |
| `npm run preview` | Preview the production build from `dist/`              |

## Pages & Sections

### Routes

| Route           | Component       | Description                                 |
| --------------- | --------------- | ------------------------------------------- |
| `/`             | `Home`          | Single-page home: Hero → Works → Studio → Contact |
| `/work/:slug`   | `ProjectPage`   | Project detail with facts, body copy, next-project link |
| (unknown slug)  | `Navigate → /`  | Redirects home when slug is not found        |

### Home sections

1. **Header** — fixed top bar; brand “Hald Atelier” scrolls to top; links smooth-scroll to sections (returning home first if needed).
2. **Hero** — eyebrow (“Architecture & Interior — Copenhagen”), large statement headline, and a full-bleed hero image with caption.
3. **Works** — numbered index of all projects (`01`–`06`) with name, type, location, and year; each row links to `/work/:slug`.
4. **Studio** — practice manifesto plus a definition list of facts (Founded, Practice, Recognition, Team).
5. **Contact (footer)** — oversized mailto link, address/enquiries/social columns, copyright, and a “Back to top” button.

### Design tokens (in use)

| Token        | Value       | Usage                          |
| ------------ | ----------- | ------------------------------ |
| Background   | `#f7f5f0`   | Page canvas, warm off-white    |
| Ink          | `#141414`   | Primary text                   |
| Muted        | `#6f6c64`   | Secondary text, captions       |
| Max width    | `1600px`    | Content container              |
| Base spacing | 5–12 (px)   | Horizontal page padding        |

Animations are defined globally in `src/index.css`:

- `.reveal` / `.is-visible` — fade-up on intersection, delay via `--reveal-delay`
- `.link-sweep` — underline sweep on hover
- `.hero-image` — subtle image reveal/scale treatment

## Configuration

### `vite.config.ts`

- `base: './'` — relative asset paths (deployable to any subpath/static host).
- Dev server port `3000`.
- Alias `@` → `./src`.

### TypeScript

Solution-style setup: root `tsconfig.json` references `tsconfig.app.json` (app code) and `tsconfig.node.json` (Vite config files). The build script `tsc -b` type-checks both before bundling.

### Tailwind / shadcn/ui

- `tailwind.config.js` defines the shadcn color system, Inter as `font-sans`, and `tailwindcss-animate`.
- `components.json` configures shadcn/ui for the `src/components/ui` directory with the `@/` alias and Neutral base color — run `npx shadcn@latest add <component>` to scaffold more components.

### Environment variables

No environment variables are required at runtime. If you add any, create a local `.env` file — it is already excluded from Git via `.gitignore`.

## Adding a Project

Project content lives entirely in **`src/data/projects.ts`**. Append a new object to the `projects` array:

```ts
{
  slug: 'my-project',            // used in URL: /work/my-project
  name: 'My Project',
  type: 'Private Residence',     // category shown in lists/details
  location: 'Lisbon, PT',
  year: '2026',
  area: '120 m²',
  status: 'Completed',
  image: '/projects/my-project.jpg',   // served from public/
  imageAlt: 'Describe the image for accessibility',
  lead: 'One-sentence lead paragraph.',
  body: [
    'First body paragraph…',
    'Second body paragraph…',
  ],
},
```

Place the image in `public/projects/` (create the folder if needed). The Works list, project counter, and next-project navigation all update automatically.

> **Note:** `public/hero.jpg` and `public/projects/*.jpg` are referenced by the UI but are not committed (add your own photography before deploying).

## Deployment

Because `base: './'` is set, the `dist/` output works on any static host:

```bash
npm run build
```

Then deploy the `dist/` folder to **GitHub Pages**, **Netlify**, **Vercel**, **Cloudflare Pages**, or any static server.

- **Netlify / Vercel:** build command `npm run build`, publish directory `dist`.
- **Client-side routing:** for hosts that support rewrites, send all paths to `/index.html` so deep links like `/work/horizon-house` resolve correctly.

## Git & GitHub

`node_modules/`, build output, logs, editor files, and `.env` are ignored in `.gitignore` and must never be committed.

```bash
git status                 # verify ignored paths
git add .
git commit -m "Initial commit"
git push -u origin main
```

## License

This project is a demonstration/portfolio template. Content (projects, studio copy) is fictional. Use and adapt freely for your own portfolio.
