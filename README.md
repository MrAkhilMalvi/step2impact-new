# Step2Impact

Step2Impact is a responsive React website for the Step2Impact Global Network. The site presents the organization, its impact philosophy, core offerings, leadership, calls to action, and contact flow through a polished single-page experience.

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React icons
- Framer Motion / GSAP / Lenis dependencies for motion and smooth interaction support

## Features

- Responsive single-page layout
- Fixed desktop and mobile navigation
- Hero section with video background
- About, impact, vision/mission, offerings, founders, CTA, and contact sections
- Tailwind-based brand theme
- Public logo and founder image assets
- Production build and preview scripts

## Getting Started

### Prerequisites

- Node.js 24 is recommended for this project.
- npm

If you use `nvm`, select the project Node version before installing dependencies:

```bash
nvm use
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

The Vite dev server will print a local URL, usually:

```text
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

This runs TypeScript build checks and creates the production output in `dist/`.

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Available Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server. |
| `npm run dev:node24` | Loads `nvm`, switches Node versions, and starts Vite. |
| `npm run build` | Runs TypeScript build checks and Vite production build. |
| `npm run build:node24` | Loads `nvm`, switches Node versions, and runs the production build. |
| `npm run lint` | Runs ESLint across the project. |
| `npm run preview` | Serves the production build locally for review. |

## Project Structure

```text
.
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   ├── images/
│   └── logos/
├── src/
│   ├── components/
│   │   ├── AboutUs.tsx
│   │   ├── ContactUs.tsx
│   │   ├── CTA.tsx
│   │   ├── Footer.tsx
│   │   ├── Founders.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── ImpactPhilosophy.tsx
│   │   ├── Offerings.tsx
│   │   └── VisionMission.tsx
│   ├── layout/
│   │   └── Layout.tsx
│   ├── pages/
│   │   └── Home.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── tailwind.config.ts
├── vite.config.ts
└── package.json
```

## Styling

Global styles and reusable Tailwind component classes live in `src/index.css`.

Brand colors are configured in `tailwind.config.ts`:

- `brandNavy`
- `brandBlue`
- `brandBlueDark`
- `brandRed`
- `brandRedLight`
- `brandLight`
- `brandWhite`
- `brandMuted`
- `brandBorder`

## Content Updates

- Navigation links are defined in `src/components/Header.tsx`.
- Page section order is controlled in `src/pages/Home.tsx`.
- Logos and local images are stored in `public/logos/` and `public/images/`.
- The main brand theme can be adjusted in `tailwind.config.ts`.

## Deployment

Build the app before deployment:

```bash
npm run build
```

Deploy the generated `dist/` directory to any static hosting provider such as Netlify, Vercel, Cloudflare Pages, or GitHub Pages.
