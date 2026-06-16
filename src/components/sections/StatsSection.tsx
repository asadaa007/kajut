import { useTranslation } from 'react-i18next'
import { stats } from '@/config/site'
import { MotionStagger, MotionStaggerItem } from '@/components/ui/MotionReveal'

export function StatsSection() {
  const { t } = useTranslation()

  return (
    <section className="border-y border-linen bg-warm-white py-10" aria-label="Statistics">
      <div className="mx-auto max-w-7xl px-5 md:px-12 lg:px-16">
        <MotionStagger className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <MotionStaggerItem key={stat.key} className="text-center">
              <p className="font-display text-4xl font-semibold text-paprika-700 tabular-nums md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-stone">{t(stat.labelKey)}</p>
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  )
}
