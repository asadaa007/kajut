import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { OptimizedImage } from '@/components/ui/OptimizedImage'
import { MotionReveal, MotionStagger, MotionStaggerItem } from '@/components/ui/MotionReveal'
import type { ImageKey } from '@/lib/images'

const offerings: {
  key: string
  imageKey: ImageKey
  path: string
}[] = [
  { key: 'daily', imageKey: 'offeringDaily', path: '/menu#daily' },
  { key: 'platters', imageKey: 'offeringPlatters', path: '/menu#platters' },
  { key: 'catering', imageKey: 'offeringCatering', path: '/catering' },
]

export function OfferingsSection() {
  const { t } = useTranslation()

  return (
    <section className="bg-cream py-16 md:py-24" aria-labelledby="offerings-title">
      <div className="mx-auto max-w-7xl px-5 md:px-12 lg:px-16">
        <MotionReveal>
          <SectionHeading
            eyebrow={t('offerings.eyebrow')}
            title={t('offerings.title')}
          />
        </MotionReveal>

        <MotionStagger className="grid gap-6 md:grid-cols-3">
          {offerings.map((item) => (
            <MotionStaggerItem key={item.key}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] bg-warm-white shadow-[var(--shadow-sm)] transition-shadow duration-300 hover:shadow-[var(--shadow-md)]">
                <OptimizedImage
                  imageKey={item.imageKey}
                  alt={t(`offerings.${item.key}.title`)}
                  aspectRatio="16/10"
                  className="overflow-hidden"
                  imgClassName="transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <div className="flex flex-1 flex-col p-6">
                  <h3
                    id={item.key === 'daily' ? 'offerings-title' : undefined}
                    className="font-display text-xl font-semibold text-charcoal"
                  >
                    {t(`offerings.${item.key}.title`)}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-stone">
                    {t(`offerings.${item.key}.description`)}
                  </p>
                  <Link
                    to={item.path}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-paprika-700 hover:text-paprika-900"
                  >
                    {t(`offerings.${item.key}.cta`)}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  )
}
