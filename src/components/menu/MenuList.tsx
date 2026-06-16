import { useLocale } from '@/hooks/useLocale'
import { cn, formatPrice } from '@/lib/utils'
import type { MenuItem } from '@/types/menu'
import { getLocalizedName, getLocalizedDescription } from '@/data'

interface MenuListProps {
  items: MenuItem[]
  className?: string
}

export function MenuList({ items, className }: MenuListProps) {
  const locale = useLocale()

  return (
    <ul className={cn('divide-y divide-linen', className)}>
      {items.map((item) => {
        const description = getLocalizedDescription(item, locale)
        return (
          <li key={item.id} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-charcoal">
                {getLocalizedName(item, locale)}
              </h3>
              {description && (
                <p className="mt-0.5 text-sm text-stone">{description}</p>
              )}
            </div>
            <span className="shrink-0 tabular-nums font-semibold text-paprika-700 sm:pl-4 sm:text-right">
              {formatPrice(item.price, locale)}
            </span>
          </li>
        )
      })}
    </ul>
  )
}
