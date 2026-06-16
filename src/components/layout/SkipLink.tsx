import { useTranslation } from 'react-i18next'

export function SkipLink() {
  const { t } = useTranslation()

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[var(--radius-md)] focus:bg-paprika-700 focus:px-4 focus:py-2 focus:text-warm-white focus:outline-none"
    >
      {t('common.skipToContent')}
    </a>
  )
}
