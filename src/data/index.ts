import menuData from '@/data/menu.json'
import type { MenuData } from '@/types/menu'

export const menu: MenuData = menuData as MenuData

export function getLocalizedName(
  item: { nameHu: string; nameEn: string },
  locale: string,
): string {
  return locale === 'hu' ? item.nameHu : item.nameEn
}

export function getLocalizedDescription(
  item: { descriptionHu?: string; descriptionEn?: string },
  locale: string,
): string | undefined {
  return locale === 'hu' ? item.descriptionHu : item.descriptionEn
}
