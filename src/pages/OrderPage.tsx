import { useTranslation } from 'react-i18next'
import {
  UtensilsCrossed,
  Smartphone,
  Phone,
  MapPin,
  CheckCircle2,
} from 'lucide-react'
import { SEO } from '@/components/SEO'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ExternalButton } from '@/components/ui/Button'
import { PhoneLink } from '@/components/ui/PhoneLink'
import { MotionReveal, MotionStagger, MotionStaggerItem } from '@/components/ui/MotionReveal'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

const channels = [
  {
    key: 'dineIn',
    icon: UtensilsCrossed,
    href: siteConfig.googleMapsDirections,
    external: true,
    phone: false,
  },
  {
    key: 'wolt',
    icon: Smartphone,
    href: siteConfig.social.wolt,
    external: true,
    phone: false,
  },
  {
    key: 'foodora',
    icon: Smartphone,
    href: siteConfig.social.foodora,
    external: true,
    phone: false,
  },
  {
    key: 'phone',
    icon: Phone,
    href: siteConfig.platterPhoneHref,
    external: false,
    phone: true,
  },
] as const

export function OrderPage() {
  const { t } = useTranslation()

  const steps = [
    t('orderPage.steps.step1'),
    t('orderPage.steps.step2'),
    t('orderPage.steps.step3'),
  ]

  const rules = [
    t('orderPage.rules.rule1'),
    t('orderPage.rules.rule2'),
    t('orderPage.rules.rule3'),
    t('orderPage.rules.rule4'),
  ]

  return (
    <>
      <SEO titleKey="seo.order.title" descriptionKey="seo.order.description" path="/order" />

      <div className="bg-cream py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-12 lg:px-16">
          <MotionReveal>
            <h1 className="font-display text-4xl font-semibold text-charcoal md:text-5xl">
              {t('orderPage.title')}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-stone">{t('orderPage.subtitle')}</p>
          </MotionReveal>

          <MotionStagger className="mt-12 grid gap-6 sm:grid-cols-2">
            {channels.map((channel) => {
              const Icon = channel.icon
              return (
                <MotionStaggerItem key={channel.key}>
                  <article className="flex h-full flex-col rounded-[var(--radius-lg)] border border-linen bg-warm-white p-6 shadow-[var(--shadow-sm)] transition-shadow hover:shadow-[var(--shadow-md)]">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold-wash">
                      <Icon className="h-6 w-6 text-paprika-700" aria-hidden />
                    </div>
                    <h2 className="font-display text-xl font-semibold text-charcoal">
                      {t(`orderPage.channels.${channel.key}.title`)}
                    </h2>
                    <p className="mt-2 flex-1 text-sm text-stone">
                      {t(`orderPage.channels.${channel.key}.description`)}
                    </p>
                    {channel.phone ? (
                      <PhoneLink
                        href={siteConfig.platterPhoneHref}
                        phone={siteConfig.platterPhone}
                        className={cn(
                          'mt-5 justify-center rounded-[var(--radius-md)] bg-paprika-700 px-4 py-3 text-sm !text-warm-white hover:bg-paprika-900',
                        )}
                        fullWidth
                      />
                    ) : (
                      <ExternalButton
                        href={channel.href}
                        variant={channel.key === 'dineIn' ? 'outline' : 'primary'}
                        className="mt-5 w-full"
                      >
                        {channel.key === 'dineIn' && (
                          <MapPin className="h-4 w-4" aria-hidden />
                        )}
                        {t(`orderPage.channels.${channel.key}.cta`)}
                      </ExternalButton>
                    )}
                  </article>
                </MotionStaggerItem>
              )
            })}
          </MotionStagger>

          <MotionReveal className="mt-16">
            <SectionHeading
              eyebrow={t('orderPage.steps.eyebrow')}
              title={t('orderPage.steps.title')}
            />
            <ol className="grid gap-6 md:grid-cols-3">
              {steps.map((step, i) => (
                <li
                  key={step}
                  className="flex gap-4 rounded-[var(--radius-lg)] bg-warm-white p-5"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-paprika-700 text-sm font-bold text-warm-white">
                    {i + 1}
                  </span>
                  <p className="text-stone">{step}</p>
                </li>
              ))}
            </ol>
          </MotionReveal>

          <MotionReveal className="mt-12 rounded-[var(--radius-lg)] bg-forest/10 p-6 md:p-8">
            <h2 className="font-display text-xl font-semibold text-charcoal">
              {t('orderPage.payment.title')}
            </h2>
            <p className="mt-2 text-stone">{t('orderPage.payment.description')}</p>
          </MotionReveal>

          <MotionReveal className="mt-12">
            <h2 className="font-display text-xl font-semibold text-charcoal">
              {t('orderPage.rules.title')}
            </h2>
            <ul className="mt-4 space-y-3">
              {rules.map((rule) => (
                <li key={rule} className="flex items-start gap-3 text-stone">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-forest"
                    aria-hidden
                  />
                  {rule}
                </li>
              ))}
            </ul>
          </MotionReveal>
        </div>
      </div>
    </>
  )
}
