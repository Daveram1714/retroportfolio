# Daveram.OS — Interactive Developer Portfolio

A retro pixel-inspired portfolio experience built with a modern Next.js stack. The site is structured as a seven-part developer story rather than a static collection of cards.

## Stack

- Next.js 16 App Router
- React 19 + TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React
- ESLint 9 flat config

## Experience map

1. **Hello / Hero** — boot screen, pixel avatar and quick navigation
2. **About** — developer profile and engineering stats
3. **Journey** — experience timeline and player profile
4. **Creative process** — interactive four-step workflow
5. **Toolbox** — grouped technologies and AI workflow
6. **Projects** — interactive case files with challenge, implementation and outcome
7. **Launch + Contact** — portfolio launch dialog, contact links and interactive terminal

## Run locally

Requires Node.js 22 (minimum supported by Next.js: 20.9).

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

GitHub Actions runs all three checks on pushes and pull requests to `main`.

## Structure

```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    desktop-experience.tsx
    portfolio/
      pixel-avatar.tsx
      section-heading.tsx
      window-frame.tsx
  lib/
    utils.ts
```

The route uses a Server Component. Interactive motion, story progression, project dialogs and terminal state live in the Client Component boundary.
