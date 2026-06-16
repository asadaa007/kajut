import { useTranslation } from 'react-i18next'
import { Phone } from 'lucide-react'
import { useOpenStatus } from '@/hooks/useOpenStatus'
import { siteConfig } from '@/config/site'
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/utils'

export function UtilityBar() {
  const { t } = useTranslation()
  const { status, hoursLabel } = useOpenStatus()

  const statusLabel = {
    open: t('utility.open'),
    closed: t('utility.closed'),
    'pre-lunch': t('utility.preLunch'),
    'closing-soon': t('utility.closingSoon'),
  }[status]

  const badgeVariant = {
    open: 'open' as const,
    closed: 'closed' as const,
    'pre-lunch': 'warning' as const,
    'closing-soon': 'warning' as const,
  }[status]

  const hoursDisplay =
    hoursLabel === 'saturday-preorder'
      ? t('utility.saturdayPreorder')
      : hoursLabel === 'closed'
        ? t('utility.hoursClosed')
        : t('utility.hours', { hours: hoursLabel })

  return (
    <div
      className="border-b border-linen bg-cream text-charcoal"
      role="region"
      aria-label="Restaurant status"
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-5 py-2.5 text-xs md:px-12 lg:px-16">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <Badge variant={badgeVariant} dot>
            {statusLabel}
          </Badge>
          <span className="hidden text-linen sm:inline" aria-hidden>
            |
          </span>
          <span className="font-medium text-stone tabular-nums">{hoursDisplay}</span>
          {siteConfig.acceptsSzep && (
            <>
              <span className="hidden text-linen md:inline" aria-hidden>
                |
              </span>
              <Badge variant="szep" className="hidden md:inline-flex text-[10px]">
                {t('utility.szep')}
              </Badge>
            </>
          )}
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href={siteConfig.phoneHref}
            className={cn(
              'inline-flex items-center gap-1.5 font-semibold text-paprika-700 transition-colors hover:text-paprika-900',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paprika-700',
            )}
            aria-label={t('common.callLabel', { phone: siteConfig.phone })}
          >
            <Phone className="h-3.5 w-3.5 shrink-0" aria-hidden />
            <span className="tabular-nums">{siteConfig.phone}</span>
          </a>
          <span className="hidden h-4 w-px bg-linen sm:block" aria-hidden />
          <LanguageSwitcher variant="light" />
        </div>
      </div>
    </div>
  )
}
