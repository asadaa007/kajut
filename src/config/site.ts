export const siteConfig = {
  name: 'Kajüt Vendéglő',
  tagline: {
    hu: 'Debrecen otthona a házias magyar ízeknek.',
    en: "Debrecen's home of authentic Hungarian comfort food.",
  },
  phone: '+36 70 547 9000',
  phoneHref: 'tel:+36705479000',
  platterPhone: '+36 70 608 2516',
  platterPhoneHref: 'tel:+36706082516',
  email: 'kajutvendeglo@gmail.com',
  emailHref: 'mailto:kajutvendeglo@gmail.com',
  address: {
    street: 'Kishegyesi út 29',
    city: 'Debrecen',
    postalCode: '4030',
    country: 'Hungary',
    full: '4030 Debrecen, Kishegyesi út 29',
  },
  coordinates: {
    lat: 47.545,
    lng: 21.64,
  },
  googleMapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2724.8!2d21.64!3d47.545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDMyJzQyLjAiTiAyMcKwMzgnMjQuMCJF!5e0!3m2!1shu!2shu!4v1700000000000!5m2!1shu!2shu',
  googleMapsDirections:
    'https://www.google.com/maps/dir/?api=1&destination=Kishegyesi+%C3%BAt+29,+4030+Debrecen,+Hungary',
    social: {
    facebook: 'https://www.facebook.com/',
    wolt: 'https://wolt.com/hu/hun/debrecen/restaurant/kajt-vendgl',
    foodora: 'https://www.foodora.hu/restaurant/l9dq/kajut-vendeglo',
    sultek: 'https://www.sultek.hu',
  },
  menuPdf: '/menu.pdf',
  parking: {
    hu: 'Ingyenes parkolás a vendéglő előtt (3–4 autó)',
    en: 'Free parking in front of the restaurant (3–4 cars)',
  },
  acceptsSzep: true,
} as const

export const openingHours = {
  lunch: {
    days: [2, 3, 4, 5] as const,
    tueFri: { open: '11:30', close: '15:00' },
  },
  saturday: 'preorder' as const,
} as const

export type NavKey = 'home' | 'menu' | 'order' | 'catering' | 'about' | 'contact'

export const navItems: { key: NavKey; path: string }[] = [
  { key: 'menu', path: '/menu' },
  { key: 'order', path: '/order' },
  { key: 'catering', path: '/catering' },
  { key: 'about', path: '/about' },
  { key: 'contact', path: '/contact' },
]

export const stats = [
  { key: 'years', value: '15+', labelKey: 'stats.years' },
  { key: 'platters', value: '6', labelKey: 'stats.platters' },
  { key: 'lunchDays', value: '4', labelKey: 'stats.lunchDays' },
  { key: 'rating', value: '4.8', labelKey: 'stats.rating' },
] as const
