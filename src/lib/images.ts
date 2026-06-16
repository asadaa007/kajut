/**
 * Image asset strategy — isolated fallback logic.
 *
 * Local images live in public/images/{category}/.
 * If a local file is missing, Unsplash placeholders are used automatically.
 *
 * @see /ASSETS.md for the full replacement guide.
 */

export type ImageCategory = 'logo' | 'food' | 'interior' | 'gallery'

export type ImageKey =
  | 'logo'
  | 'hero'
  | 'dailyMenu'
  | 'platter'
  | 'offeringDaily'
  | 'offeringPlatters'
  | 'offeringCatering'
  | 'story'
  | 'interior'
  | 'kitchen'
  | 'entrance'
  | 'cateringHero'
  | 'aboutHero'
  | 'gallery1'
  | 'gallery2'
  | 'gallery3'
  | 'gallery4'
  | 'gallery5'
  | 'gallery6'

const LOCAL_PATHS: Record<ImageKey, string> = {
  logo: '/images/logo/logo.png',
  hero: '/images/food/hero-platter.jpg',
  dailyMenu: '/images/food/daily-menu.jpg',
  platter: '/images/food/kajut-tal.jpg',
  offeringDaily: '/images/food/offering-daily.jpg',
  offeringPlatters: '/images/food/offering-platters.jpg',
  offeringCatering: '/images/food/offering-catering.jpg',
  story: '/images/interior/dining-room.jpg',
  interior: '/images/interior/dining-room.jpg',
  kitchen: '/images/interior/kitchen.jpg',
  entrance: '/images/interior/entrance.jpg',
  cateringHero: '/images/food/catering-spread.jpg',
  aboutHero: '/images/interior/about-hero.jpg',
  gallery1: '/images/gallery/gallery-01.jpg',
  gallery2: '/images/gallery/gallery-02.jpg',
  gallery3: '/images/gallery/gallery-03.jpg',
  gallery4: '/images/gallery/gallery-04.jpg',
  gallery5: '/images/gallery/gallery-05.jpg',
  gallery6: '/images/gallery/gallery-06.jpg',
}

const UNSPLASH_FALLBACKS: Record<ImageKey, string> = {
  logo: '',
  hero: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=2400&q=80',
  dailyMenu: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=1200&q=80',
  platter: 'https://images.unsplash.com/photo-1598515214215-89d3c06caa70?w=1200&q=80',
  offeringDaily: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&q=80',
  offeringPlatters: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80',
  offeringCatering: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80',
  story: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80',
  interior: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80',
  kitchen: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&q=80',
  entrance: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80',
  cateringHero: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=2400&q=80',
  aboutHero: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=2400&q=80',
  gallery1: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80',
  gallery2: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&q=80',
  gallery3: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
  gallery4: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80',
  gallery5: 'https://images.unsplash.com/photo-1598515214215-89d3c06caa70?w=800&q=80',
  gallery6: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80',
}

const resolvedCache = new Map<ImageKey, string>()

export function clearImageCache(): void {
  resolvedCache.clear()
}

export function getLocalPath(key: ImageKey): string {
  return LOCAL_PATHS[key]
}

export function getFallbackUrl(key: ImageKey): string {
  return UNSPLASH_FALLBACKS[key]
}

export function getImageCategory(key: ImageKey): ImageCategory {
  const path = LOCAL_PATHS[key]
  if (path.includes('/logo/')) return 'logo'
  if (path.includes('/food/')) return 'food'
  if (path.includes('/interior/')) return 'interior'
  return 'gallery'
}

export async function resolveImageUrl(key: ImageKey): Promise<string> {
  const cached = resolvedCache.get(key)
  if (cached) return cached

  const local = LOCAL_PATHS[key]
  if (local) {
    const { validateImageUrl } = await import('@/lib/imageValidation')
    const valid = await validateImageUrl(local)
    if (valid) {
      resolvedCache.set(key, local)
      return local
    }
  }

  const fallback = UNSPLASH_FALLBACKS[key]
  resolvedCache.set(key, fallback)
  return fallback
}

export const GALLERY_KEYS: ImageKey[] = [
  'gallery1',
  'gallery2',
  'gallery3',
  'gallery4',
  'gallery5',
  'gallery6',
]

export const IMAGE_REPLACEMENT_GUIDE: {
  key: ImageKey
  localPath: string
  description: string
}[] = [
  { key: 'logo', localPath: LOCAL_PATHS.logo, description: 'Primary logo (PNG, transparent)' },
  { key: 'hero', localPath: LOCAL_PATHS.hero, description: 'Hero platter shot, 16:10, steam visible' },
  { key: 'dailyMenu', localPath: LOCAL_PATHS.dailyMenu, description: 'Soup + main pairing' },
  { key: 'platter', localPath: LOCAL_PATHS.platter, description: 'Kajüt tál overhead' },
  { key: 'offeringDaily', localPath: LOCAL_PATHS.offeringDaily, description: 'Daily menu card image' },
  { key: 'offeringPlatters', localPath: LOCAL_PATHS.offeringPlatters, description: 'Family platter spread' },
  { key: 'offeringCatering', localPath: LOCAL_PATHS.offeringCatering, description: 'Catering table spread' },
  { key: 'story', localPath: LOCAL_PATHS.story, description: 'Dining room warm interior' },
  { key: 'kitchen', localPath: LOCAL_PATHS.kitchen, description: 'Kitchen action shot' },
  { key: 'entrance', localPath: LOCAL_PATHS.entrance, description: 'Exterior / entrance with parking context' },
  { key: 'cateringHero', localPath: LOCAL_PATHS.cateringHero, description: 'Catering hero wide shot' },
  { key: 'aboutHero', localPath: LOCAL_PATHS.aboutHero, description: 'About page hero' },
  { key: 'gallery1', localPath: LOCAL_PATHS.gallery1, description: 'Gallery image 1' },
  { key: 'gallery2', localPath: LOCAL_PATHS.gallery2, description: 'Gallery image 2' },
  { key: 'gallery3', localPath: LOCAL_PATHS.gallery3, description: 'Gallery image 3' },
  { key: 'gallery4', localPath: LOCAL_PATHS.gallery4, description: 'Gallery image 4' },
  { key: 'gallery5', localPath: LOCAL_PATHS.gallery5, description: 'Gallery image 5' },
  { key: 'gallery6', localPath: LOCAL_PATHS.gallery6, description: 'Gallery image 6' },
]
