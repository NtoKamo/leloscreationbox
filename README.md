# Lelo's Creation — IT Helpdesk in a Box

A modern, dark-themed landing page for **Lelo's Creation**, an all-in-one IT helpdesk service for small businesses. Built with TanStack Start, React 19, and Tailwind CSS v4.

**Live site:** [leloscreationbox.lovable.app](https://leloscreationbox.lovable.app)

---

## Features

- **Responsive single-page landing** with smooth-scroll anchor navigation
- **Dark teal design system** with custom OKLCH theme tokens
- **Feature showcase** highlighting AI-powered ticketing, email support, and live chat
- **Pricing cards** with three tiers (Starter, Business, Enterprise)
- **"How it works" section** explaining the 3-step onboarding flow
- **Pre-filled booking actions** — email CTAs that open with a ready-made subject line
- **Mobile menu** with collapsible navigation
- **SEO-optimized** — per-route `head()` metadata, Open Graph, and Twitter cards

## Tech Stack

| Layer       | Technology                                             |
| ----------- | ------------------------------------------------------ |
| Framework   | [TanStack Start](https://tanstack.com/start) v1 (React 19, SSR/SSG) |
| Build tool  | [Vite](https://vitejs.dev/) v8                         |
| Styling     | [Tailwind CSS](https://tailwindcss.com/) v4            |
| Icons       | [lucide-react](https://lucide.dev/)                    |
| Fonts       | Inter (body) + JetBrains Mono (code/accents)          |
| Language    | TypeScript                                              |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20+ (or [install via nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- [Bun](https://bun.sh/) (recommended) or npm

### Installation

```sh
git clone <repository-url>
cd lelos-creation
npm install
```

### Development

```sh
npm run dev
```

The dev server starts on `http://localhost:8080`.

### Build

```sh
npm run build          # production build
npm run build:dev     # development build (mode=development)
npm run preview       # preview the production build locally
```

### Lint & Format

```sh
npm run lint
npm run format
```

## Project Structure

```
src/
├── routes/
│   ├── __root.tsx       # App shell — fonts, global metadata, <Outlet />
│   └── index.tsx        # Landing page (hero, features, pricing, CTA, footer)
├── styles.css           # Theme tokens + component styles
├── lib/                 # Shared utilities
├── hooks/               # Custom React hooks
└── components/          # shadcn/ui components
```

## Design Tokens

The theme is defined in `src/styles.css` using CSS custom properties (OKLCH). Key colors:

| Token            | Hex       | Usage                        |
| ---------------- | --------- | ---------------------------- |
| Background       | `#0B0F17` | App background               |
| Surface          | `#111726` | Cards, panels                |
| Primary          | `#4FD1C5` | Accents, CTA buttons, links  |
| Primary Foreground | `#0B0F17` | Text on primary surfaces    |
| Foreground       | `#E2E8F0` | Body text                    |

## Deployment

This project deploys automatically via [Lovable](https://lovable.dev). Connect a GitHub repository for two-way sync, or download the codebase and deploy to any Node-compatible host.

## License

All rights reserved © Lelo's Creation.
