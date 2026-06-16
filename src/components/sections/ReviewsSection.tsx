import { useTranslation } from 'react-i18next'
import { useMemo } from 'react'
import { useLocale } from '@/hooks/useLocale'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { MotionReveal, MotionStagger, MotionStaggerItem } from '@/components/ui/MotionReveal'

export function ReviewsSection() {
  const { t, i18n } = useTranslation()
  useLocale()

  const items = useMemo(() => {
    const result = t('reviews.items', { returnObjects: true })
    if (!Array.isArray(result)) return []
    return result as { quote: string; author: string; source: string }[]
  }, [t, i18n.language])

  return (
    <section className="bg-cream py-16 md:py-24" aria-labelledby="reviews-title">
      <div className="mx-auto max-w-7xl px-5 md:px-12 lg:px-16">
        <MotionReveal>
          <SectionHeading
            eyebrow={t('reviews.eyebrow')}
            title={t('reviews.title')}
            align="center"
            className="mx-auto"
          />
        </MotionReveal>

        <MotionStagger className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((review) => (
            <MotionStaggerItem key={review.author}>
              <blockquote className="flex h-full flex-col rounded-[var(--radius-lg)] bg-warm-white p-6 shadow-[var(--shadow-sm)]">
                <p className="flex-1 font-display text-lg italic leading-relaxed text-charcoal">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <footer className="mt-4 flex items-center justify-between border-t border-linen pt-4 text-sm">
                  <cite className="not-italic font-semibold text-charcoal">
                    {review.author}
                  </cite>
                  <span className="text-ash">{review.source}</span>
                </footer>
              </blockquote>
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  )
}
