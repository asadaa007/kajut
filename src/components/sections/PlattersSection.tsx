import { useTranslation } from 'react-i18next'
import { useLocale } from '@/hooks/useLocale'
import { Link } from 'react-router-dom'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { PhoneLink } from '@/components/ui/PhoneLink'
import { siteConfig } from '@/config/site'
import { menu, getLocalizedName } from '@/data'
import { formatPrice } from '@/lib/utils'
import { MotionReveal, MotionStagger, MotionStaggerItem } from '@/components/ui/MotionReveal'

export function PlattersSection() {
  const { t } = useTranslation()
  const locale = useLocale()
  const featured = menu.platters.filter((p) => p.featured).concat(
    menu.platters.filter((p) => !p.featured),
  ).slice(0, 4)

  return (
    <section className="bg-warm-white py-16 md:py-24" aria-labelledby="platters-title">
      <div className="mx-auto max-w-7xl px-5 md:px-12 lg:px-16">
        <MotionReveal className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow={t('platters.eyebrow')}
            title={t('platters.title')}
            className="mb-0"
          />
          <Badge variant="preorder">{t('platters.note')}</Badge>
        </MotionReveal>

        <MotionStagger className="mt-10 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-4 md:overflow-visible md:pb-0">
          {featured.map((platter) => (
            <MotionStaggerItem
              key={platter.id}
              className="min-w-[260px] shrink-0 snap-start md:min-w-0"
            >
              <article className="flex h-full flex-col rounded-[var(--radius-lg)] border border-linen bg-cream p-5 transition-shadow hover:shadow-[var(--shadow-md)]">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-charcoal">
                    {getLocalizedName(platter, locale)}
                  </h3>
                  {platter.featured && (
                    <Badge variant="default" className="shrink-0 text-[10px]">
                      {t('common.featured')}
                    </Badge>
                  )}
                </div>
                <p className="mt-2 tabular-nums text-lg font-semibold text-paprika-700">
                  {formatPrice(platter.price, locale)}
                </p>
                <ul className="mt-3 flex-1 space-y-1 text-xs text-stone">
                  {(locale === 'hu' ? platter.itemsHu : platter.itemsEn)
                    .slice(0, 4)
                    .map((item) => (
                      <li key={item}>· {item}</li>
                    ))}
                </ul>
                <PhoneLink
                  href={siteConfig.platterPhoneHref}
                  phone={siteConfig.platterPhone}
                  className="mt-4 justify-center rounded-[var(--radius-md)] bg-paprika-700 px-4 py-3 text-sm text-warm-white hover:bg-paprika-900 hover:!text-warm-white"
                  fullWidth
                />
                <span className="mt-2 block text-center text-xs text-stone">
                  {t('platters.preorder')}
                </span>
              </article>
            </MotionStaggerItem>
          ))}
        </MotionStagger>

        <div className="mt-8 text-center">
          <Link
            to="/menu#platters"
            className="text-sm font-semibold text-paprika-700 hover:text-paprika-900"
          >
            {t('platters.viewAll')} →
          </Link>
        </div>
      </div>
    </section>
  )
}
