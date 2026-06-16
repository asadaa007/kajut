import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  imageClassName?: string
  showText?: boolean
}

/** Official logo from kajutvendeglo.hu */
export function Logo({ className, imageClassName, showText = false }: LogoProps) {
  const { t } = useTranslation()

  return (
    <span className={cn('inline-flex items-center gap-3', className)}>
      <img
        src="/images/logo/logo.png"
        alt={t('common.brandName')}
        className={cn('h-11 w-auto max-w-[180px] object-contain', imageClassName)}
        width={160}
        height={40}
        decoding="async"
      />
      {showText && (
        <span className="font-display text-xl font-semibold text-charcoal sr-only sm:not-sr-only">
          {t('common.brandName')}
        </span>
      )}
    </span>
  )
}

export function LogoLink({
  className,
  onClick,
}: {
  className?: string
  onClick?: () => void
}) {
  const { t } = useTranslation()

  return (
    <Link
      to="/"
      className={cn(
        'inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paprika-700',
        className,
      )}
      aria-label={t('common.brandName')}
      onClick={onClick}
    >
      <Logo />
    </Link>
  )
}
