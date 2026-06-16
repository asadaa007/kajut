import { useTranslation } from 'react-i18next'
import { Download, FileText } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { DailyMenuCard } from '@/components/menu/DailyMenuCard'
import { MenuList } from '@/components/menu/MenuList'
import { PlatterShowcase } from '@/components/menu/PlatterShowcase'
import { StickyMenuNav, useActiveMenuSection } from '@/components/menu/StickyMenuNav'
import { ButtonLink, ExternalButton } from '@/components/ui/Button'
import { MotionReveal } from '@/components/ui/MotionReveal'
import { menu, getLocalizedName } from '@/data'
import { siteConfig } from '@/config/site'
import { useLocale } from '@/hooks/useLocale'

export function MenuPage() {
  const { t } = useTranslation()
  const locale = useLocale()
  const { activeTab, setActiveTab } = useActiveMenuSection()

  const soups = menu.categories.find((c) => c.id === 'soups')!
  const mains = menu.categories.find((c) => c.id === 'mains')!
  const desserts = menu.categories.find((c) => c.id === 'desserts')!

  return (
    <>
      <SEO titleKey="seo.menu.title" descriptionKey="seo.menu.description" path="/menu" />

      <div className="bg-cream py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-12 lg:px-16">
          <MotionReveal>
            <h1 className="font-display text-4xl font-semibold text-charcoal md:text-5xl">
              {t('menuPage.title')}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-stone">{t('menuPage.subtitle')}</p>
          </MotionReveal>

          <div className="mt-10 lg:grid lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-8">
              <StickyMenuNav activeTab={activeTab} onTabChange={setActiveTab} />

              <div className="mt-8 space-y-16">
                <section id="daily" aria-labelledby="daily-heading">
                  <h2 id="daily-heading" className="sr-only">
                    {t('menuPage.tabs.daily')}
                  </h2>
                  <DailyMenuCard />
                </section>

                <section id="soups" aria-labelledby="soups-heading">
                  <h2
                    id="soups-heading"
                    className="mb-4 font-display text-2xl font-semibold text-charcoal"
                  >
                    {getLocalizedName(soups, locale)}
                  </h2>
                  <MenuList items={soups.items} />
                </section>

                <section id="mains" aria-labelledby="mains-heading">
                  <h2
                    id="mains-heading"
                    className="mb-4 font-display text-2xl font-semibold text-charcoal"
                  >
                    {getLocalizedName(mains, locale)}
                  </h2>
                  <MenuList items={mains.items} />
                </section>

                <section id="desserts" aria-labelledby="desserts-heading">
                  <h2
                    id="desserts-heading"
                    className="mb-4 font-display text-2xl font-semibold text-charcoal"
                  >
                    {getLocalizedName(desserts, locale)}
                  </h2>
                  <MenuList items={desserts.items} />
                </section>

                <section id="platters" aria-labelledby="platters-heading">
                  <h2
                    id="platters-heading"
                    className="mb-6 font-display text-2xl font-semibold text-charcoal"
                  >
                    {t('menuPage.tabs.platters')}
                  </h2>
                  <PlatterShowcase />
                </section>

                <section id="sides" aria-labelledby="sides-heading">
                  <h2
                    id="sides-heading"
                    className="mb-2 font-display text-2xl font-semibold text-charcoal"
                  >
                    {getLocalizedName(menu.sides, locale)}
                  </h2>
                  <p className="mb-4 text-sm text-terracotta-700">
                    {t('menuPage.sidesNote')}
                  </p>
                  <MenuList items={menu.sides.items} />
                </section>

                <section
                  className="rounded-[var(--radius-lg)] border border-linen bg-warm-white p-6"
                  aria-labelledby="pdf-heading"
                >
                  <h2
                    id="pdf-heading"
                    className="flex items-center gap-2 font-display text-xl font-semibold text-charcoal"
                  >
                    <FileText className="h-5 w-5 text-paprika-700" aria-hidden />
                    {t('menuPage.pdf')}
                  </h2>
                  <p className="mt-2 text-sm text-stone">{t('menuPage.allergen')}</p>
                  <ExternalButton
                    href={siteConfig.menuPdf}
                    variant="outline"
                    className="mt-4"
                  >
                    <Download className="h-4 w-4" aria-hidden />
                    {t('menuPage.pdf')}
                  </ExternalButton>
                </section>
              </div>
            </div>

            <aside className="mt-10 hidden lg:col-span-4 lg:block">
              <div className="sticky top-32 space-y-6">
                <h2 className="font-display text-lg font-semibold text-charcoal">
                  {t('menuPage.sidebarTitle')}
                </h2>
                <DailyMenuCard />
                <div className="space-y-2">
                  <ButtonLink to="/order" className="w-full">
                    {t('dailyCard.order')}
                  </ButtonLink>
                  <ExternalButton
                    href={siteConfig.social.wolt}
                    variant="outline"
                    className="w-full"
                  >
                    {t('ctaBand.wolt')}
                  </ExternalButton>
                  <ExternalButton
                    href={siteConfig.social.foodora}
                    variant="outline"
                    className="w-full"
                  >
                    {t('ctaBand.foodora')}
                  </ExternalButton>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}
