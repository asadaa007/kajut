import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { X } from 'lucide-react'
import { IMAGE_REPLACEMENT_GUIDE } from '@/lib/images'

const STORAGE_KEY = 'kajut-dev-note-dismissed'

export function DevImageNote() {
  const { t } = useTranslation()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY)
    if (!dismissed) setVisible(true)
  }, [])

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, 'true')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-4 left-4 right-4 z-[70] max-h-[70vh] overflow-y-auto rounded-[var(--radius-lg)] border border-linen bg-warm-white p-5 shadow-lg md:left-auto md:max-w-md"
      role="dialog"
      aria-labelledby="dev-note-title"
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <h2 id="dev-note-title" className="font-display text-lg font-semibold text-charcoal">
          {t('devNote.title')}
        </h2>
        <button
          type="button"
          onClick={dismiss}
          className="rounded-[var(--radius-sm)] p-1 text-ash hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paprika-700"
          aria-label={t('common.close')}
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      <p className="mb-4 text-sm text-stone">{t('devNote.description')}</p>
      <ul className="mb-4 space-y-2 text-xs text-stone">
        {IMAGE_REPLACEMENT_GUIDE.map((item) => (
          <li key={item.key} className="border-b border-linen pb-2 last:border-0">
            <code className="font-mono text-paprika-700">{item.localPath}</code>
            <span className="mt-0.5 block">{item.description}</span>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={dismiss}
        className="w-full rounded-[var(--radius-md)] bg-paprika-700 px-4 py-2 text-sm font-semibold text-warm-white hover:bg-paprika-900"
      >
        {t('devNote.dismiss')}
      </button>
    </div>
  )
}
