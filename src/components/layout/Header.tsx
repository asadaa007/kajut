import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'
import { navItems } from '@/config/site'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'
import { LogoLink } from '@/components/ui/Logo'
import { cn } from '@/lib/utils'

export function Header() {
  const { t } = useTranslation()
  const scrolled = useScrollPosition()
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMobile = () => setMobileOpen(false)

  return (
    <header
      className={cn(
        'sticky top-0 z-40 border-b border-charcoal/20 bg-charcoal transition-shadow duration-200',
        scrolled && 'shadow-[var(--shadow-md)]',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-12 lg:px-16">
        <LogoLink onClick={closeMobile} className="focus-visible:ring-cream" />

        <nav className="hidden items-center gap-8 lg:flex" aria-label={t('common.menu')}>
          {navItems.map((item) => (
            <NavLink
              key={item.key}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  'text-sm font-semibold uppercase tracking-wider transition-colors',
                  isActive
                    ? 'text-gold'
                    : 'text-cream/80 hover:text-cream',
                )
              }
            >
              {t(`nav.${item.key}`)}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] text-cream lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? t('common.close') : t('common.menu')}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-nav"
          className="fixed inset-0 top-[calc(36px+60px)] z-30 bg-cream px-5 py-8 lg:hidden"
          aria-label={t('common.menu')}
        >
          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                className="block font-display text-2xl text-charcoal"
                onClick={closeMobile}
              >
                {t('nav.home')}
              </Link>
            </li>
            {navItems.map((item) => (
              <li key={item.key}>
                <Link
                  to={item.path}
                  className="block font-display text-2xl text-charcoal hover:text-paprika-700"
                  onClick={closeMobile}
                >
                  {t(`nav.${item.key}`)}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 border-t border-linen pt-6">
            <LanguageSwitcher variant="light" />
          </div>
        </nav>
      )}
    </header>
  )
}
