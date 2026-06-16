import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Users, Building2, PartyPopper } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { CateringForm } from '@/components/forms/CateringForm'
import { OptimizedImage } from '@/components/ui/OptimizedImage'
import { ExternalButton } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { MotionReveal, MotionStagger, MotionStaggerItem } from '@/components/ui/MotionReveal'
import { siteConfig } from '@/config/site'

const categories = [
  { key: 'family', icon: Users },
  { key: 'corporate', icon: Building2 },
  { key: 'events', icon: PartyPopper },
] as const

export function CateringPage() {
  const { t, i18n } = useTranslation()

  const processSteps = [
    t('cateringPage.process.step1'),
    t('cateringPage.process.step2'),
    t('cateringPage.process.step3'),
    t('cateringPage.process.step4'),
  ]

  const platterFeatures = useMemo(() => {
    const result = t('cateringPage.packages.platters.features', { returnObjects: true })
    return Array.isArray(result) ? (result as string[]) : []
  }, [t, i18n.language])

  const dailyFeatures = useMemo(() => {
    const result = t('cateringPage.packages.daily.features', { returnObjects: true })
    return Array.isArray(result) ? (result as string[]) : []
  }, [t, i18n.language])

  return (
    <>
      <SEO
        titleKey="seo.catering.title"
        descriptionKey="seo.catering.description"
        path="/catering"
      />

      <section className="relative min-h-[40vh] overflow-hidden bg-charcoal">
        <OptimizedImage
          imageKey="cateringHero"
          alt={t('cateringPage.title')}
          priority
          className="absolute inset-0 h-full w-full"
          imgClassName="opacity-60"
        />
        <div className="hero-scrim absolute inset-0" aria-hidden />
        <div className="relative mx-auto flex min-h-[40vh] max-w-7xl flex-col justify-end px-5 py-16 md:px-12 lg:px-16">
          <MotionReveal>
            <h1 className="font-display text-4xl font-semibold text-warm-white md:text-5xl text-balance">
              {t('cateringPage.title')}
            </h1>
            <p className="mt-4 max-w-xl text-lg text-cream/90">{t('cateringPage.subtitle')}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#inquiry-form"
                className="inline-flex min-h-[52px] items-center justify-center rounded-[var(--radius-md)] bg-paprika-700 px-8 py-3 font-semibold text-warm-white hover:bg-paprika-900"
              >
                {t('cateringPage.ctaPrimary')}
              </a>
              <ExternalButton
                href={siteConfig.phoneHref}
                variant="outline"
                className="!border-warm-white/30 !text-warm-white hover:!bg-warm-white/10"
              >
                {t('cateringPage.ctaSecondary')}
              </ExternalButton>
            </div>
          </MotionReveal>
        </div>
      </section>

      <div className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-12 lg:px-16">
          <MotionStagger className="grid gap-6 md:grid-cols-3">
            {categories.map(({ key, icon: Icon }) => (
              <MotionStaggerItem key={key}>
                <article className="rounded-[var(--radius-lg)] bg-warm-white p-6 shadow-[var(--shadow-sm)]">
                  <Icon className="mb-4 h-8 w-8 text-paprika-700" aria-hidden />
                  <h2 className="font-display text-xl font-semibold text-charcoal">
                    {t(`cateringPage.categories.${key}.title`)}
                  </h2>
                  <p className="mt-2 text-sm text-stone">
                    {t(`cateringPage.categories.${key}.description`)}
                  </p>
                </article>
              </MotionStaggerItem>
            ))}
          </MotionStagger>

          <MotionReveal className="mt-16">
            <SectionHeading
              eyebrow={t('cateringPage.packages.eyebrow')}
              title={t('cateringPage.packages.title')}
            />
            <div className="grid gap-6 md:grid-cols-2">
              <article className="rounded-[var(--radius-lg)] border border-linen bg-warm-white p-6">
                <h3 className="font-display text-xl font-semibold text-charcoal">
                  {t('cateringPage.packages.platters.title')}
                </h3>
                <p className="mt-2 tabular-nums text-lg font-semibold text-paprika-700">
                  {t('cateringPage.packages.platters.price')}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-stone">
                  {platterFeatures.map((f) => (
                    <li key={f}>· {f}</li>
                  ))}
                </ul>
              </article>
              <article className="rounded-[var(--radius-lg)] border border-linen bg-warm-white p-6">
                <h3 className="font-display text-xl font-semibold text-charcoal">
                  {t('cateringPage.packages.daily.title')}
                </h3>
                <p className="mt-2 text-lg font-semibold text-paprika-700">
                  {t('cateringPage.packages.daily.price')}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-stone">
                  {dailyFeatures.map((f) => (
                    <li key={f}>· {f}</li>
                  ))}
                </ul>
              </article>
            </div>
          </MotionReveal>

          <MotionReveal className="mt-16">
            <SectionHeading
              eyebrow={t('cateringPage.process.eyebrow')}
              title={t('cateringPage.process.title')}
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, i) => (
                <div
                  key={step}
                  className="rounded-[var(--radius-lg)] bg-warm-white p-5 text-center"
                >
                  <span className="font-display text-3xl font-semibold text-paprika-700">
                    {i + 1}
                  </span>
                  <p className="mt-2 text-sm font-medium text-charcoal">{step}</p>
                </div>
              ))}
            </div>
          </MotionReveal>

          <div className="mt-12 text-center">
            <Badge variant="szep">{t('cateringPage.trust')}</Badge>
          </div>

          <div id="inquiry-form" className="mt-16 scroll-mt-32">
            <CateringForm />
          </div>
        </div>
      </div>
    </>
  )
}
