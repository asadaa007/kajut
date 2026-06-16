import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ButtonLink } from '@/components/ui/Button'
import { OptimizedImage } from '@/components/ui/OptimizedImage'
import { DailyMenuCard } from '@/components/menu/DailyMenuCard'
import { fadeUp, motionConfig } from '@/config/motion'

export function HeroSection() {
  const { t } = useTranslation()
  const reduceMotion = useReducedMotion()

  const container = reduceMotion
    ? undefined
    : {
        hidden: {},
        visible: { transition: { staggerChildren: motionConfig.stagger.hero } },
      }

  return (
    <section className="bg-cream" aria-labelledby="hero-title">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:px-12 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-16 lg:py-20">
        <motion.div
          initial={reduceMotion ? false : 'hidden'}
          animate="visible"
          variants={container}
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.08em] text-terracotta-700"
          >
            {t('hero.eyebrow')}
          </motion.p>
          <motion.h1
            id="hero-title"
            variants={fadeUp}
            className="font-display text-4xl font-semibold leading-tight text-charcoal md:text-5xl lg:text-[3.5rem] text-balance"
          >
            {t('hero.title')}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-lg leading-relaxed text-stone"
          >
            {t('hero.subtitle')}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <ButtonLink to="/menu#daily" size="lg">
              {t('hero.ctaPrimary')}
            </ButtonLink>
            <ButtonLink to="/order" variant="outline" size="lg">
              {t('hero.ctaSecondary')}
            </ButtonLink>
          </motion.div>
          <motion.p variants={fadeUp} className="mt-4">
            <Link
              to="/catering"
              className="text-sm font-semibold text-paprika-700 hover:text-paprika-900"
            >
              {t('hero.ctaTertiary')}
            </Link>
          </motion.p>
        </motion.div>

        <div className="space-y-6">
          <DailyMenuCard />
          <OptimizedImage
            imageKey="hero"
            alt={t('common.heroImageAlt')}
            priority
            aspectRatio="16/10"
            className="rounded-[var(--radius-lg)] shadow-[var(--shadow-md)]"
          />
        </div>
      </div>
    </section>
  )
}
