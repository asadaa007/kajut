import { useTranslation } from 'react-i18next'
import { MapPin, Clock, ParkingCircle } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ButtonLink, ExternalButton } from '@/components/ui/Button'
import { MotionReveal } from '@/components/ui/MotionReveal'

export function VisitSection() {
  const { t } = useTranslation()

  return (
    <section className="bg-warm-white py-16 md:py-24" aria-labelledby="visit-title">
      <div className="mx-auto max-w-7xl px-5 md:px-12 lg:px-16">
        <MotionReveal>
          <SectionHeading
            eyebrow={t('visit.eyebrow')}
            title={t('visit.title')}
          />
        </MotionReveal>

        <div className="grid gap-8 lg:grid-cols-2">
          <MotionReveal>
            <div className="overflow-hidden rounded-[var(--radius-lg)] border border-linen">
              <iframe
                title={t('contactPage.mapTitle')}
                src={siteConfig.googleMapsEmbed}
                className="h-80 w-full border-0 lg:h-full lg:min-h-[400px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </MotionReveal>

          <MotionReveal delay={0.1} className="space-y-6">
            <div className="flex gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-paprika-700" aria-hidden />
              <div>
                <h3 className="font-semibold text-charcoal">{t('visit.address')}</h3>
                <p className="mt-1 text-stone">{t('common.addressFull')}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-paprika-700" aria-hidden />
              <div>
                <h3 className="font-semibold text-charcoal">{t('visit.hours')}</h3>
                <p className="mt-1 whitespace-pre-line text-stone">{t('visit.hoursDetail')}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <ParkingCircle className="mt-1 h-5 w-5 shrink-0 text-paprika-700" aria-hidden />
              <div>
                <h3 className="font-semibold text-charcoal">{t('contactPage.parking')}</h3>
                <p className="mt-1 text-stone">{t('visit.parking')}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <ExternalButton
                href={siteConfig.googleMapsDirections}
                variant="primary"
              >
                {t('visit.directions')}
              </ExternalButton>
              <ButtonLink to="/contact" variant="outline">
                {t('nav.contact')}
              </ButtonLink>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  )
}
