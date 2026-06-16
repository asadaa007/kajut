import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { useLocale } from '@/hooks/useLocale'

interface SEOProps {
  titleKey: string
  descriptionKey: string
  path?: string
}

export function SEO({ titleKey, descriptionKey, path = '' }: SEOProps) {
  const { t } = useTranslation()
  const locale = useLocale()
  const title = t(titleKey)
  const description = t(descriptionKey)
  const url = `https://www.kajutvendeglo.hu${path}`

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: t('common.brandName'),
    description: t('common.tagline'),
    address: {
      '@type': 'PostalAddress',
      streetAddress: t('common.addressStreet'),
      addressLocality: t('common.addressCity'),
      postalCode: '4030',
      addressCountry: 'HU',
    },
    telephone: '+36 70 547 9000',
    email: 'kajutvendeglo@gmail.com',
    servesCuisine: locale === 'hu' ? 'Magyar' : 'Hungarian',
    priceRange: '$$',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 47.545,
      longitude: 21.64,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday'],
        opens: '11:30',
        closes: '15:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Friday',
        opens: '11:30',
        closes: '15:00',
      },
    ],
  }

  return (
    <Helmet>
      <html lang={locale} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content={locale === 'hu' ? 'hu_HU' : 'en_GB'} />
      <meta
        property="og:locale:alternate"
        content={locale === 'hu' ? 'en_GB' : 'hu_HU'}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  )
}
