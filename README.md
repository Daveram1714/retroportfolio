# Daveram.OS — Retro Developer Portfolio

A retro desktop-inspired portfolio built with a modern React and Next.js stack.

## Tech stack

- **Next.js 16** — App Router, Server Components, metadata and production routing
- **React 19** + **TypeScript** — typed interactive UI
- **Tailwind CSS 4** — CSS-first styling and design tokens
- **Framer Motion** — animated desktop windows and transitions
- **Lucide React** — interface icons
- **clsx** + **tailwind-merge** — reusable conditional class utilities

## Requirements

- Node.js 22 (minimum supported by this project: 20.9)
- npm

## Run locally

```bash
git clone https://github.com/Daveram1714/retroportfolio.git
cd retroportfolio
npm install
npm run dev
```

Open http://localhost:3000.

## Quality checks

```bash
npm run typecheck
npm run lint
npm run build
```

## Project structure

```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    desktop-experience.tsx
  lib/
    utils.ts
```

The route is a Server Component. The interactive desktop experience is isolated in a Client Component so browser state and motion stay on the client boundary.
