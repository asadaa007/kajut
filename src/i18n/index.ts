import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { getAppLocale, syncDocumentLanguage } from '@/lib/locale'

import hu from '@/locales/hu/translation.json'
import en from '@/locales/en/translation.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      hu: { translation: hu },
      en: { translation: en },
    },
    fallbackLng: 'hu',
    supportedLngs: ['hu', 'en'],
    nonExplicitSupportedLngs: true,
    load: 'languageOnly',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'kajut-vendeglo-lang',
    },
    react: {
      useSuspense: false,
      bindI18n: 'languageChanged loaded',
      bindI18nStore: 'added removed',
    },
  })

i18n.on('initialized', () => {
  syncDocumentLanguage(i18n.language)
})

i18n.on('languageChanged', (lng) => {
  syncDocumentLanguage(lng)
})

/** Ensure stored / detected codes map to supported resource bundles */
export function setAppLanguage(locale: 'hu' | 'en'): void {
  void i18n.changeLanguage(locale)
}

export function getCurrentAppLanguage(): 'hu' | 'en' {
  return getAppLocale(i18n.language)
}

export default i18n
