import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(amount: number, locale: string): string {
  return new Intl.NumberFormat(locale === 'hu' ? 'hu-HU' : 'en-HU', {
    style: 'currency',
    currency: 'HUF',
    maximumFractionDigits: 0,
  }).format(amount)
}

export function getTodayFormatted(locale: string): string {
  return new Intl.DateTimeFormat(locale === 'hu' ? 'hu-HU' : 'en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date())
}
