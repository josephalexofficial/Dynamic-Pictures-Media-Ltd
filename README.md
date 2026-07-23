# Dynamic Pictures Media Ltd

Official website for **Dynamic Pictures Media Ltd** — a multimedia creative studio in Kitengela, Kenya.

**Live site:** [https://dynamicpictures.vercel.app/](https://dynamicpictures.vercel.app/)

---

## Overview

The site presents the studio’s photography, videography, event coverage, design, and digital work, with a WhatsApp-first contact flow for client inquiries.

## Tech stack

- **React 19** + **TypeScript**
- **Vite 6**
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **React Router 7**
- **Lucide React** icons
- Deployed on **Vercel** as a static SPA

## Getting started

```bash
npm install
npm run dev
```

App runs at [http://localhost:3000](http://localhost:3000).

```bash
npm run build           # production build → dist/
npm run preview         # preview production build
npm run lint            # ESLint
npm run optimize:images # regenerate WebP/JPEG variants + manifest
```

## Image optimization

Hero, About, and large gallery assets use responsive WebP (with JPEG fallbacks) under `public/images/optimized/`.

```bash
npm run optimize:images
```

That regenerates variants and updates `src/lib/image-manifest.ts`.

## Project structure

```
├── index.html
├── package.json
├── vite.config.ts
├── vercel.json
├── scripts/
│   └── optimize-images.mjs
├── public/images/
│   ├── brand/
│   ├── hero/
│   ├── optimized/
│   ├── services/
│   ├── gallery/
│   ├── team/
│   ├── events/
│   └── testimonials/
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── styles/index.css
    ├── pages/          # Home, Team, Gallery, Event
    ├── components/
    │   ├── layout/     # Navbar, Footer
    │   ├── sections/   # Homepage sections
    │   └── ui/         # Shared UI helpers
    └── lib/            # data, WhatsApp, scroll, images
```

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/gallery` | Full gallery |
| `/team` | Full team |
| `/events/:slug` | Event detail |

## Contact

- **WhatsApp:** +254 798 658 801  
- **Email:** mulusanorris123@gmail.com  
- **Address:** Kitengela Town, Kajiado County — Next to Kitengela Shopping Center  

---

© Dynamic Pictures Media Ltd
