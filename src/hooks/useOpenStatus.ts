import { useMemo } from 'react'
import { openingHours } from '@/config/site'

export type OpenStatus = 'open' | 'closed' | 'pre-lunch' | 'closing-soon'

function parseTime(time: string): number {
  const [h, m] = time.split(':').map(Number)
  return h * 60 + m
}

function getNowMinutes(): number {
  const now = new Date()
  return now.getHours() * 60 + now.getMinutes()
}

export function useOpenStatus() {
  return useMemo(() => {
    const day = new Date().getDay()
    const now = getNowMinutes()
    const lunchDays = openingHours.lunch.days as readonly number[]
    const schedule = openingHours.lunch.tueFri
    const hoursLabel = `${schedule.open}–${schedule.close}`

    if (day === 6) {
      return {
        status: 'closed' as OpenStatus,
        isOpen: false,
        hoursLabel: 'saturday-preorder',
      }
    }

    if (!lunchDays.includes(day)) {
      return {
        status: 'closed' as OpenStatus,
        isOpen: false,
        hoursLabel: 'closed',
      }
    }

    const openMin = parseTime(schedule.open)
    const closeMin = parseTime(schedule.close)
    const closingSoonThreshold = closeMin - 30

    if (now < openMin) {
      return {
        status: 'pre-lunch' as OpenStatus,
        isOpen: false,
        hoursLabel,
      }
    }

    if (now >= openMin && now < closingSoonThreshold) {
      return {
        status: 'open' as OpenStatus,
        isOpen: true,
        hoursLabel,
      }
    }

    if (now >= closingSoonThreshold && now < closeMin) {
      return {
        status: 'closing-soon' as OpenStatus,
        isOpen: true,
        hoursLabel,
      }
    }

    return {
      status: 'closed' as OpenStatus,
      isOpen: false,
      hoursLabel,
    }
  }, [])
}
