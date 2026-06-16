import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { cn } from '@/lib/utils'

export type MenuTabId =
  | 'daily'
  | 'soups'
  | 'mains'
  | 'desserts'
  | 'platters'
  | 'sides'

const tabs: MenuTabId[] = ['daily', 'soups', 'mains', 'desserts', 'platters', 'sides']

interface StickyMenuNavProps {
  activeTab: MenuTabId
  onTabChange: (tab: MenuTabId) => void
}

export function StickyMenuNav({ activeTab, onTabChange }: StickyMenuNavProps) {
  const { t } = useTranslation()

  return (
    <nav
      className={cn(
        'sticky top-[100px] z-20 -mx-5 border-b border-linen bg-cream/95 px-5 backdrop-blur-sm md:top-[108px] md:-mx-0 md:px-0',
      )}
      aria-label="Menu categories"
    >
      <div className="flex gap-1 overflow-x-auto pb-px scrollbar-none">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => {
              onTabChange(tab)
              document.getElementById(tab)?.scrollIntoView({ behavior: 'smooth' })
            }}
            className={cn(
              'shrink-0 border-b-2 px-4 py-3 text-sm font-semibold uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paprika-700',
              activeTab === tab
                ? 'border-paprika-700 text-paprika-700'
                : 'border-transparent text-stone hover:text-charcoal',
            )}
          >
            {t(`menuPage.tabs.${tab}`)}
          </button>
        ))}
      </div>
    </nav>
  )
}

export function useActiveMenuSection() {
  const [activeTab, setActiveTab] = useState<MenuTabId>('daily')

  useEffect(() => {
    const sections = tabs
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target.id) {
          setActiveTab(visible[0].target.id as MenuTabId)
        }
      },
      { rootMargin: '-30% 0px -50% 0px', threshold: [0, 0.25, 0.5] },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return { activeTab, setActiveTab }
}
