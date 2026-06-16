import { useTranslation } from 'react-i18next'
import { Heart, Users, Clock, Home } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { OptimizedImage } from '@/components/ui/OptimizedImage'
import { ButtonLink } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { MotionReveal, MotionStagger, MotionStaggerItem } from '@/components/ui/MotionReveal'
import { GALLERY_KEYS } from '@/lib/images'

const values = [
  { key: 'homestyle', icon: Heart },
  { key: 'generosity', icon: Users },
  { key: 'reliability', icon: Clock },
  { key: 'community', icon: Home },
] as const

export function AboutPage() {
  const { t } = useTranslation()

  return (
    <>
      <SEO titleKey="seo.about.title" descriptionKey="seo.about.description" path="/about" />

      <section className="relative min-h-[40vh] overflow-hidden">
        <OptimizedImage
          imageKey="aboutHero"
          alt={t('aboutPage.title')}
          priority
          className="absolute inset-0 h-full w-full"
        />
        <div className="hero-scrim absolute inset-0" aria-hidden />
        <div className="relative mx-auto flex min-h-[40vh] max-w-7xl items-end px-5 py-16 md:px-12 lg:px-16">
          <MotionReveal>
            <h1 className="font-display text-4xl font-semibold text-warm-white md:text-5xl">
              {t('aboutPage.title')}
            </h1>
            <p className="mt-2 text-lg text-cream/90">{t('aboutPage.heroSubtitle')}</p>
          </MotionReveal>
        </div>
      </section>

      <div className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-12">
          <MotionReveal>
            <p className="text-lg leading-relaxed text-stone md:text-xl">
              {t('aboutPage.intro')}
            </p>
          </MotionReveal>
        </div>

        <div className="mx-auto mt-16 max-w-7xl px-5 md:px-12 lg:px-16">
          <MotionReveal>
            <SectionHeading
              eyebrow={t('aboutPage.values.eyebrow')}
              title={t('aboutPage.values.title')}
              align="center"
              className="mx-auto"
            />
          </MotionReveal>

          <MotionStagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ key, icon: Icon }) => (
              <MotionStaggerItem key={key}>
                <article className="rounded-[var(--radius-lg)] bg-warm-white p-6 text-center shadow-[var(--shadow-sm)]">
                  <Icon className="mx-auto mb-4 h-8 w-8 text-paprika-700" aria-hidden />
                  <h2 className="font-display text-lg font-semibold text-charcoal">
                    {t(`aboutPage.values.${key}.title`)}
                  </h2>
                  <p className="mt-2 text-sm text-stone">
                    {t(`aboutPage.values.${key}.description`)}
                  </p>
                </article>
              </MotionStaggerItem>
            ))}
          </MotionStagger>

          <MotionReveal className="mt-16 grid items-center gap-10 lg:grid-cols-2">
            <OptimizedImage
              imageKey="kitchen"
              alt={t('aboutPage.kitchen.title')}
              aspectRatio="4/3"
              className="rounded-[var(--radius-lg)] shadow-[var(--shadow-md)]"
            />
            <div>
              <h2 className="font-display text-2xl font-semibold text-charcoal">
                {t('aboutPage.kitchen.title')}
              </h2>
              <p className="mt-4 leading-relaxed text-stone">
                {t('aboutPage.kitchen.description')}
              </p>
            </div>
          </MotionReveal>

          <section id="gallery" className="mt-16 scroll-mt-32">
            <MotionReveal>
              <SectionHeading
                eyebrow={t('gallery.eyebrow')}
                title={t('gallery.title')}
              />
            </MotionReveal>
            <MotionStagger className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
              {GALLERY_KEYS.map((key, i) => (
                <MotionStaggerItem key={key}>
                  <OptimizedImage
                    imageKey={key}
                    alt={t('common.galleryImageAlt', { n: i + 1 })}
                    aspectRatio="4/3"
                    className="rounded-[var(--radius-lg)]"
                  />
                </MotionStaggerItem>
              ))}
            </MotionStagger>
          </section>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <ButtonLink to="/menu" size="lg">
              {t('aboutPage.ctaMenu')}
            </ButtonLink>
            <ButtonLink to="/catering" variant="outline" size="lg">
              {t('aboutPage.ctaCatering')}
            </ButtonLink>
          </div>
        </div>
      </div>
    </>
  )
}
