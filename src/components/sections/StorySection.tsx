import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { OptimizedImage } from '@/components/ui/OptimizedImage'
import { MotionReveal } from '@/components/ui/MotionReveal'

export function StorySection() {
  const { t } = useTranslation()

  return (
    <section className="bg-cream py-16 md:py-24" aria-labelledby="story-title">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-12 lg:grid-cols-2 lg:px-16">
        <MotionReveal>
          <OptimizedImage
            imageKey="story"
            alt={t('story.title')}
            aspectRatio="4/3"
            className="rounded-[var(--radius-lg)] shadow-[var(--shadow-md)]"
          />
        </MotionReveal>

        <MotionReveal delay={0.1}>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.08em] text-terracotta-700">
            {t('story.eyebrow')}
          </p>
          <h2
            id="story-title"
            className="font-display text-3xl font-semibold leading-tight text-charcoal md:text-4xl text-balance"
          >
            {t('story.title')}
          </h2>
          <p className="mt-6 leading-relaxed text-stone">{t('story.p1')}</p>
          <p className="mt-4 leading-relaxed text-stone">{t('story.p2')}</p>
          <Link
            to="/about"
            className="mt-6 inline-block text-sm font-semibold text-paprika-700 hover:text-paprika-900"
          >
            {t('story.cta')} →
          </Link>
        </MotionReveal>
      </div>
    </section>
  )
}
