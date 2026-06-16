import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Share2 } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { PhoneLink } from '@/components/ui/PhoneLink'

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-cream">
      <div className="cta-gradient px-5 py-12 md:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="font-display text-2xl font-semibold text-warm-white md:text-3xl">
            {t('ctaBand.title')}
          </h2>
          <p className="mt-2 text-cream/80">{t('ctaBand.subtitle')}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={siteConfig.social.wolt}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[var(--radius-md)] bg-warm-white px-6 py-3 text-sm font-semibold text-charcoal transition hover:bg-cream"
            >
              {t('ctaBand.wolt')}
            </a>
            <a
              href={siteConfig.social.foodora}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[var(--radius-md)] bg-warm-white px-6 py-3 text-sm font-semibold text-charcoal transition hover:bg-cream"
            >
              {t('ctaBand.foodora')}
            </a>
            <a
              href={siteConfig.phoneHref}
              className="rounded-[var(--radius-md)] border border-warm-white/30 px-6 py-3 text-sm font-semibold text-warm-white transition hover:bg-warm-white/10"
            >
              {t('ctaBand.call')}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-12 md:px-12 lg:px-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gold">
              {t('footer.visit')}
            </h3>
            <address className="not-italic text-sm leading-relaxed text-cream/80">
              {t('common.addressFull')}
            </address>
            <p className="mt-2 text-sm text-cream/70">{t('visit.parking')}</p>
          </div>
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gold">
              {t('footer.order')}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/order" className="text-cream/80 hover:text-cream">
                  {t('footer.dineIn')}
                </Link>
              </li>
              <li>
                <a
                  href={siteConfig.social.wolt}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/80 hover:text-cream"
                >
                  {t('ctaBand.wolt')}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.foodora}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/80 hover:text-cream"
                >
                  {t('ctaBand.foodora')}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.platterPhoneHref}
                  className="text-cream/80 hover:text-cream"
                  aria-label={t('common.callLabel', { phone: siteConfig.platterPhone })}
                >
                  {t('footer.platterPhone')}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gold">
              {t('footer.catering')}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/catering" className="text-cream/80 hover:text-cream">
                  {t('footer.quote')}
                </Link>
              </li>
              <li>
                <Link to="/menu#platters" className="text-cream/80 hover:text-cream">
                  {t('footer.platters')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gold">
              {t('footer.connect')}
            </h3>
            <ul className="space-y-2 text-sm text-cream/80">
              <li>
                <PhoneLink
                  href={siteConfig.phoneHref}
                  phone={siteConfig.phone}
                  className="!text-cream/80 hover:!text-cream"
                />
              </li>
              <li>
                <a href={siteConfig.emailHref} className="hover:text-cream">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-cream"
                  aria-label={t('common.facebook')}
                >
                  <Share2 className="h-4 w-4" />
                  {t('common.facebook')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream/50 sm:flex-row">
          <p>{t('footer.rights', { year })}</p>
          <p>{t('footer.privacy')}</p>
        </div>
      </div>
    </footer>
  )
}
