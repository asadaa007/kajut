import { useTranslation } from 'react-i18next'
import { setAppLanguage } from '@/i18n'
import { useLocale } from '@/hooks/useLocale'
import { cn } from '@/lib/utils'

interface LanguageSwitcherProps {
  className?: string
  variant?: 'light' | 'dark'
}

export function LanguageSwitcher({ className, variant = 'dark' }: LanguageSwitcherProps) {
  const { t } = useTranslation()
  const locale = useLocale()

  const toggle = () => {
    setAppLanguage(locale === 'hu' ? 'en' : 'hu')
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className={cn(
        'rounded-[var(--radius-sm)] px-2 py-1 text-xs font-semibold uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paprika-700',
        variant === 'dark'
          ? 'text-cream/80 hover:text-cream'
          : 'text-stone hover:text-paprika-700',
        className,
      )}
      aria-label={locale === 'hu' ? t('common.switchToEn') : t('common.switchToHu')}
    >
      {locale === 'hu' ? 'EN' : 'HU'}
    </button>
  )
}
