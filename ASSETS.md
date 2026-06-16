# Kajüt Vendéglő — Image Asset Guide

Official photography and branding are sourced from [kajutvendeglo.hu](https://www.kajutvendeglo.hu/) (Webnode CDN).

## Refresh assets from the live site

```bash
npm run assets:download
```

This runs `scripts/download-assets.sh` and repopulates `public/images/`.

## Folder structure

```
public/images/
├── logo/          Brand identity
├── food/          Dishes, platters, catering
├── interior/      Dining room, kitchen, entrance
└── gallery/       General gallery images
```

## Required files

| File path | Description | Recommended size |
|-----------|-------------|------------------|
| `public/images/logo/logo.png` | Primary logo (transparent PNG) | 512×512px |
| `public/images/food/hero-platter.jpg` | Homepage hero — platter with steam | 2400×1500px (16:10) |
| `public/images/food/daily-menu.jpg` | Soup + main pairing | 1200×750px |
| `public/images/food/kajut-tal.jpg` | Kajüt tál overhead shot | 1200×750px |
| `public/images/food/offering-daily.jpg` | Daily menu offering card | 800×500px |
| `public/images/food/offering-platters.jpg` | Family platter spread | 800×500px |
| `public/images/food/offering-catering.jpg` | Catering spread | 800×500px |
| `public/images/food/catering-spread.jpg` | Catering page hero | 2400×1500px |
| `public/images/interior/dining-room.jpg` | Warm dining room interior | 1200×900px |
| `public/images/interior/kitchen.jpg` | Kitchen action shot | 1200×900px |
| `public/images/interior/entrance.jpg` | Exterior / entrance + parking | 1200×750px |
| `public/images/interior/about-hero.jpg` | About page hero | 2400×1500px |
| `public/images/gallery/gallery-01.jpg` | Gallery image 1 | 800×600px |
| `public/images/gallery/gallery-02.jpg` | Gallery image 2 | 800×600px |
| `public/images/gallery/gallery-03.jpg` | Gallery image 3 | 800×600px |
| `public/images/gallery/gallery-04.jpg` | Gallery image 4 | 800×600px |
| `public/images/gallery/gallery-05.jpg` | Gallery image 5 | 800×600px |
| `public/images/gallery/gallery-06.jpg` | Gallery image 6 | 800×600px |

## Optional

| File path | Description |
|-----------|-------------|
| `public/menu.pdf` | Downloadable full menu PDF |

## How fallback works

Image resolution logic is isolated in `src/lib/images.ts`:

1. Check if local file exists at the mapped path
2. If valid → use local image
3. If missing → use curated Unsplash URL

After adding images, hard-refresh the browser (or clear cache) to see updates.

## Photography guidelines

- Natural warm side-lighting
- Preserve steam and texture — minimal retouching
- sRGB color profile
- WebP conversion recommended for production (keep JPG in public/ for simplicity)

## CMS migration

When moving to a headless CMS, replace `src/data/menu.json` and image paths with CMS URLs.
The `ImageKey` type and `resolveImageUrl()` function provide a single swap point.
