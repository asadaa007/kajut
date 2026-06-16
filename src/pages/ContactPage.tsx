import { useTranslation } from 'react-i18next'
import { MapPin, Clock, Mail, ParkingCircle, Share2 } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { ContactForm } from '@/components/forms/ContactForm'
import { OptimizedImage } from '@/components/ui/OptimizedImage'
import { PhoneLink } from '@/components/ui/PhoneLink'
import { ExternalButton } from '@/components/ui/Button'
import { MotionReveal } from '@/components/ui/MotionReveal'
import { siteConfig } from '@/config/site'

export function ContactPage() {
  const { t } = useTranslation()

  return (
    <>
      <SEO
        titleKey="seo.contact.title"
        descriptionKey="seo.contact.description"
        path="/contact"
      />

      <div className="bg-cream py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-12 lg:px-16">
          <MotionReveal>
            <h1 className="font-display text-4xl font-semibold text-charcoal md:text-5xl">
              {t('contactPage.title')}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-stone">{t('contactPage.subtitle')}</p>
          </MotionReveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <MotionReveal>
              <div className="overflow-hidden rounded-[var(--radius-lg)] border border-linen">
                <iframe
                  title={t('contactPage.mapTitle')}
                  src={siteConfig.googleMapsEmbed}
                  className="h-80 w-full border-0 lg:h-[400px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </MotionReveal>

            <MotionReveal delay={0.1} className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-paprika-700" aria-hidden />
                <div>
                  <h2 className="font-semibold text-charcoal">{t('contactPage.address')}</h2>
                  <p className="mt-1 text-stone">{t('common.addressFull')}</p>
                  <ExternalButton
                    href={siteConfig.googleMapsDirections}
                    variant="ghost"
                    size="sm"
                    className="mt-2 !px-0"
                  >
                    {t('contactPage.openMaps')}
                  </ExternalButton>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-paprika-700" aria-hidden />
                <div>
                  <h2 className="font-semibold text-charcoal">{t('contactPage.hours')}</h2>
                  <p className="mt-1 whitespace-pre-line text-stone">{t('visit.hoursDetail')}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div>
                  <h2 className="font-semibold text-charcoal">{t('contactPage.phone')}</h2>
                  <p className="mt-1 text-sm text-stone">{t('contactPage.phoneGeneral')}</p>
                  <PhoneLink href={siteConfig.phoneHref} phone={siteConfig.phone} />
                  <p className="mt-3 text-sm text-stone">{t('contactPage.phonePlatters')}</p>
                  <PhoneLink
                    href={siteConfig.platterPhoneHref}
                    phone={siteConfig.platterPhone}
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-paprika-700" aria-hidden />
                <div>
                  <h2 className="font-semibold text-charcoal">{t('contactPage.email')}</h2>
                  <a
                    href={siteConfig.emailHref}
                    className="mt-1 text-stone hover:text-paprika-700"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <ParkingCircle className="mt-1 h-5 w-5 shrink-0 text-paprika-700" aria-hidden />
                <div>
                  <h2 className="font-semibold text-charcoal">{t('contactPage.parking')}</h2>
                  <p className="mt-1 text-stone">{t('visit.parking')}</p>
                </div>
              </div>

              <OptimizedImage
                imageKey="entrance"
                alt={siteConfig.address.full}
                aspectRatio="16/10"
                className="rounded-[var(--radius-lg)]"
              />

              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-paprika-700 hover:text-paprika-900"
              >
                <Share2 className="h-4 w-4" aria-hidden />
                {t('contactPage.social')}
              </a>
            </MotionReveal>
          </div>

          <div className="mt-16 max-w-2xl">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  )
}
