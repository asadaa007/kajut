import { useTranslation } from 'react-i18next'
import { useLocale } from '@/hooks/useLocale'
import { useOpenStatus } from '@/hooks/useOpenStatus'
import { menu, getLocalizedName } from '@/data'
import { formatPrice } from '@/lib/utils'
import { ButtonLink } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/utils'

export function DailyMenuCard({ className }: { className?: string }) {
  const { t } = useTranslation()
  const locale = useLocale()
  const { isOpen } = useOpenStatus()
  const { dailyMenu } = menu

  const updatedDate = new Intl.DateTimeFormat(locale === 'hu' ? 'hu-HU' : 'en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(dailyMenu.updatedAt))

  return (
    <div
      className={cn(
        'rounded-[var(--radius-lg)] border-2 bg-warm-white p-6 shadow-[var(--shadow-sm)]',
        isOpen ? 'border-gold' : 'border-linen',
        className,
      )}
      aria-live="polite"
    >
      <div className="mb-4 flex items-center justify-between gap-2">
        <h2 className="font-display text-xl font-semibold text-charcoal">
          {t('dailyCard.title')}
        </h2>
        {isOpen ? (
          <Badge variant="open" dot>
            {t('utility.open')}
          </Badge>
        ) : (
          <Badge variant="closed" dot>
            {t('utility.closed')}
          </Badge>
        )}
      </div>

      {isOpen ? (
        <dl className="space-y-3 text-sm">
          <div className="flex justify-between gap-4 border-b border-linen pb-3">
            <dt className="text-stone">{t('dailyCard.soup')}</dt>
            <dd className="text-right font-medium text-charcoal">
              {getLocalizedName(dailyMenu.soup, locale)}
              <span className="ml-2 tabular-nums text-paprika-700">
                {formatPrice(dailyMenu.soup.price, locale)}
              </span>
            </dd>
          </div>
          <div className="flex justify-between gap-4 border-b border-linen pb-3">
            <dt className="text-stone">{t('dailyCard.main')}</dt>
            <dd className="text-right font-medium text-charcoal">
              {getLocalizedName(dailyMenu.main, locale)}
              <span className="ml-2 tabular-nums text-paprika-700">
                {formatPrice(dailyMenu.main.price, locale)}
              </span>
            </dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="font-semibold text-charcoal">{t('dailyCard.menu')}</dt>
            <dd className="tabular-nums text-lg font-semibold text-paprika-700">
              {formatPrice(dailyMenu.menuPrice, locale)}
            </dd>
          </div>
        </dl>
      ) : (
        <p className="text-sm text-stone">{t('dailyCard.closedMessage')}</p>
      )}

      <p className="mt-4 text-xs text-ash">
        {t('dailyCard.updated', { date: updatedDate })}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        <ButtonLink to="/order" size="sm" className="flex-1 sm:flex-none">
          {t('dailyCard.order')}
        </ButtonLink>
        <ButtonLink to="/menu#daily" variant="outline" size="sm">
          {t('dailyCard.fullMenu')}
        </ButtonLink>
      </div>
    </div>
  )
}
