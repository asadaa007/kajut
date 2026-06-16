import { useTranslation } from 'react-i18next'
import { Phone } from 'lucide-react'
import { cn } from '@/lib/utils'

interface PhoneLinkProps {
  href: string
  phone: string
  className?: string
  showIcon?: boolean
  fullWidth?: boolean
}

export function PhoneLink({
  href,
  phone,
  className,
  showIcon = true,
  fullWidth = false,
}: PhoneLinkProps) {
  const { t } = useTranslation()

  return (
    <a
      href={href}
      className={cn(
        'inline-flex items-center justify-center gap-2 font-semibold text-paprika-700 transition-colors hover:text-paprika-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paprika-700',
        fullWidth && 'w-full',
        className,
      )}
      aria-label={t('common.callLabel', { phone })}
    >
      {showIcon && <Phone className="h-4 w-4 shrink-0" aria-hidden />}
      <span className="tabular-nums">{phone}</span>
    </a>
  )
}
