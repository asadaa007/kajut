# Kajüt Vendéglő

Premium restaurant website for Kajüt Vendéglő, Debrecen — built from the approved brand & design system.

## Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4
- React Router 7
- Framer Motion
- i18next (HU / EN)

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├── components/     UI, layout, sections, forms, menu
├── config/         Site config, motion tokens
├── data/           menu.json (CMS-ready)
├── hooks/          Open status, images, scroll
├── i18n/           Translation setup
├── lib/            Images, utils (isolated fallback logic)
├── locales/        hu/en translation files
├── pages/          6 route pages
└── types/          Shared TypeScript types
```

## Images

See [ASSETS.md](./ASSETS.md) for the complete image replacement guide.

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/menu` | Étlap / Menu |
| `/order` | Rendelés / Order |
| `/catering` | Rendezvény & Catering |
| `/about` | Rólunk / About |
| `/contact` | Kapcsolat / Contact |

## CMS readiness

- Menu content: `src/data/menu.json`
- Translations: `src/locales/{hu,en}/translation.json`
- Images: `src/lib/images.ts` → swap paths for CMS URLs
