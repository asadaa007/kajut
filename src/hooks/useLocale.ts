import { useTranslation } from 'react-i18next'
import { getAppLocale, type AppLocale } from '@/lib/locale'

/** Reactive app locale — always use this instead of reading i18n.language directly */
export function useLocale(): AppLocale {
  const { i18n } = useTranslation()
  return getAppLocale(i18n.language)
}
