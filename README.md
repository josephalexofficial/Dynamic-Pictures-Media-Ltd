# Dynamic Pictures Media Ltd

Official website for **[Dynamic Pictures Media Ltd](https://dynamicpictures.vercel.app/)** — a multimedia creative studio based in Kitengela, Kajiado County, Kenya.

We deliver professional photography, videography, event coverage, graphic design, web development, and video editing for brands, institutions, and unforgettable moments.

---

## Live site

**Production:** [https://dynamicpictures.vercel.app/](https://dynamicpictures.vercel.app/)

| Resource | Link |
|---|---|
| Live website | [dynamicpictures.vercel.app](https://dynamicpictures.vercel.app/) |
| Repository | [github.com/josephalexofficial/Dynamic-Pictures-Media-Ltd](https://github.com/josephalexofficial/Dynamic-Pictures-Media-Ltd) |

---

## Features

- Full-bleed hero slider with optimized responsive WebP images
- Services grid with booking CTAs
- Editorial About section with studio highlights
- Portfolio gallery with lightbox and dedicated gallery page
- Recent events with full story + photo galleries
- Team profiles with social links
- Client testimonials spotlight
- Contact form that opens WhatsApp with a pre-filled project brief
- Mobile-first layout with polished navigation and footer

---

## Tech stack

| Layer | Technology |
|---|---|
| UI | React 19 |
| Build | Vite 6 |
| Styling | Tailwind CSS v4 |
| Routing | React Router 7 |
| Language | TypeScript |
| Hosting | Vercel (static SPA) |
| Image tooling | Sharp (optional local optimization) |

---

## Quick start

**Requirements:** Node.js 20+ and npm.

```bash
git clone https://github.com/josephalexofficial/Dynamic-Pictures-Media-Ltd.git
cd Dynamic-Pictures-Media-Ltd
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the local development server |
| `npm run build` | Type-check and build production assets to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run optimize:images` | Generate responsive WebP/JPEG variants for hero, about, and heavy gallery images |

---

## Project structure

```
├── index.html                 # App shell + LCP image preload
├── package.json
├── vite.config.ts
├── vercel.json                # SPA rewrites for client routes
├── scripts/
│   └── optimize-images.mjs    # Image compression pipeline
├── public/
│   └── images/
│       ├── brand/             # Logo & about visual
│       ├── hero/              # Source hero photography
│       ├── optimized/         # Responsive WebP + JPEG outputs
│       ├── services/
│       ├── gallery/
│       ├── team/
│       ├── events/
│       └── testimonials/
├── src/
│   ├── main.tsx
│   ├── App.tsx                # Routes + layout shell
│   ├── styles/                # Tailwind theme tokens
│   ├── pages/                 # Home, Team, Gallery, Event detail
│   ├── components/
│   │   ├── layout/            # Navbar, Footer
│   │   ├── sections/          # Homepage sections
│   │   └── ui/                # Image, links, lightbox, socials
│   └── lib/                   # Content data, WhatsApp, image helpers
└── legacy/                    # Archived original HTML (not deployed)
```

---

## Routes

| Path | Description |
|---|---|
| `/` | Homepage (all primary sections) |
| `/gallery` | Full portfolio gallery |
| `/team` | Full team page |
| `/events/:slug` | Individual event story + gallery |

---

## Contact

- **Phone / WhatsApp:** +254 798 658 801  
- **Email:** mulusanorris123@gmail.com  
- **Location:** Kitengela Town, Kajiado County — Next to Kitengela Shopping Center  

---

## Deployment

The site is a Vite SPA hosted on **Vercel**.

1. Push to `main`
2. Vercel builds with `npm run build`
3. Output directory: `dist`
4. `vercel.json` rewrites all routes to `index.html` for client-side routing

After a successful deploy, the live site updates at [https://dynamicpictures.vercel.app/](https://dynamicpictures.vercel.app/).

---

## License

Private client project for Dynamic Pictures Media Ltd. All rights reserved.
