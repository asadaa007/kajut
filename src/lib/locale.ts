export type AppLocale = 'hu' | 'en'

/** Normalize i18next language codes (e.g. hu-HU, en-US) to hu | en */
export function getAppLocale(language?: string): AppLocale {
  return language?.toLowerCase().startsWith('en') ? 'en' : 'hu'
}

export function syncDocumentLanguage(language: string): void {
  document.documentElement.lang = getAppLocale(language)
}
