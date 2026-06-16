import { useTranslation } from 'react-i18next'
import { useLocale } from '@/hooks/useLocale'
import { Badge } from '@/components/ui/Badge'
import { PhoneLink } from '@/components/ui/PhoneLink'
import { siteConfig } from '@/config/site'
import { menu, getLocalizedName } from '@/data'
import { formatPrice } from '@/lib/utils'
import type { Platter } from '@/types/menu'
import { cn } from '@/lib/utils'

function PlatterCard({ platter }: { platter: Platter }) {
  const { t } = useTranslation()
  const locale = useLocale()
  const items = locale === 'hu' ? platter.itemsHu : platter.itemsEn

  return (
    <article
      className={cn(
        'rounded-[var(--radius-lg)] border bg-warm-white p-6',
        platter.featured ? 'border-gold shadow-[var(--shadow-sm)]' : 'border-linen',
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-display text-xl font-semibold text-charcoal">
          {getLocalizedName(platter, locale)}
        </h3>
        {platter.featured && (
          <Badge variant="default">{t('common.featured')}</Badge>
        )}
      </div>
      <p className="mt-2 tabular-nums text-xl font-semibold text-paprika-700">
        {formatPrice(platter.price, locale)}
      </p>
      <ul className="mt-4 space-y-1.5 text-sm text-stone">
        {items.map((item) => (
          <li key={item}>· {item}</li>
        ))}
      </ul>
      <PhoneLink
        href={siteConfig.platterPhoneHref}
        phone={siteConfig.platterPhone}
        className="mt-5 justify-center rounded-[var(--radius-md)] bg-paprika-700 px-4 py-3 text-sm !text-warm-white hover:bg-paprika-900"
        fullWidth
      />
      <span className="mt-2 block text-center text-xs text-stone">
        {t('platters.preorder')}
      </span>
    </article>
  )
}

export function PlatterShowcase() {
  const { t } = useTranslation()

  return (
    <div>
      <div className="mb-6 rounded-[var(--radius-md)] border border-terracotta-700/30 bg-gold-wash px-4 py-3 text-center text-sm font-semibold text-charcoal">
        {t('menuPage.preorderBanner')}
      </div>
      <p className="mb-6 text-sm text-stone">{t('platters.note')}</p>
      <div className="grid gap-6 md:grid-cols-2">
        {menu.platters.map((platter) => (
          <PlatterCard key={platter.id} platter={platter} />
        ))}
      </div>
    </div>
  )
}
