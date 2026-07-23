# Dynamic Pictures Media Ltd

Client website for **Dynamic Pictures Media Ltd**.

## Tech stack

- **React 19**
- **Vite 6**
- **Tailwind CSS v4**
- **React Router 7**

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Local development server |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build |

## Folder structure

```
├── index.html
├── package.json
├── vite.config.ts
├── vercel.json
├── public/
│   └── images/          # brand, hero, services, gallery, team, events…
├── src/
│   ├── main.tsx         # App entry
│   ├── App.tsx          # Routes + shell layout
│   ├── styles/          # Tailwind v4 theme
│   ├── pages/           # Home, Team, Event detail
│   ├── components/
│   │   ├── layout/      # Navbar, Footer
│   │   ├── sections/    # Page sections
│   │   └── ui/          # Shared Image / Link helpers
│   └── lib/             # Content data + WhatsApp helper
└── legacy/              # Archived original HTML (not deployed)
```

## Deploy (Vercel)

Push to `main`. Framework is a static Vite SPA; `vercel.json` rewrites routes to `index.html`.
