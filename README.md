# Dynamic Pictures Media Ltd

Modern website for **Dynamic Pictures Media Ltd** — Next.js 15 + React + Tailwind CSS.

## Quick start

```bash
cd dpm-next
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
Dynamic-Pictures-Media-Ltd/
├── README.md                 # This file
├── dpm-next/                 # ★ Active production app (deploy this)
│   ├── public/
│   │   ├── images/
│   │   │   ├── brand/        # Logo, about imagery
│   │   │   ├── hero/         # Homepage hero slides
│   │   │   ├── services/     # Service section images
│   │   │   ├── gallery/      # Portfolio / gallery
│   │   │   ├── team/
│   │   │   │   ├── portraits/
│   │   │   │   └── group/
│   │   │   ├── testimonials/
│   │   │   └── events/
│   │   │       ├── maa-institute/
│   │   │       └── half-marathon/
│   │   └── videos/           # Optional video assets
│   ├── src/
│   │   ├── app/              # Routes (home, /team, /events/[slug])
│   │   ├── components/
│   │   │   ├── layout/       # Navbar, Footer
│   │   │   └── sections/     # Page sections
│   │   └── lib/              # Content data + WhatsApp helper
│   ├── package.json
│   └── …
└── legacy/                   # Archived original HTML site & source media
    ├── html/
    ├── images/
    ├── videos/
    └── source/               # Original event / team / service uploads
```

## Image paths in code

All live site images are served from `dpm-next/public/images/...` and referenced as:

`/images/<folder>/<file>`

Example: `/images/brand/logo.jpg`

## Deploy on Vercel

1. Push the repo when ready.
2. Set **Root Directory** to `dpm-next`.
3. Deploy — Next.js is auto-detected.

## Notes

- Do not edit or rely on `legacy/` for the live site — it is an archive only.
- Keep new media under the matching folder in `dpm-next/public/images/`.
