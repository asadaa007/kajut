import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { OptimizedImage } from '@/components/ui/OptimizedImage'
import { MotionReveal, MotionStagger, MotionStaggerItem } from '@/components/ui/MotionReveal'
import { GALLERY_KEYS } from '@/lib/images'

export function GalleryPreviewSection() {
  const { t } = useTranslation()

  return (
    <section className="bg-warm-white py-16 md:py-24" aria-labelledby="gallery-title">
      <div className="mx-auto max-w-7xl px-5 md:px-12 lg:px-16">
        <MotionReveal>
          <SectionHeading
            eyebrow={t('gallery.eyebrow')}
            title={t('gallery.title')}
          />
        </MotionReveal>

        <MotionStagger className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {GALLERY_KEYS.slice(0, 6).map((key, i) => (
            <MotionStaggerItem
              key={key}
              className={i === 0 ? 'col-span-2 row-span-2 md:col-span-2 md:row-span-2' : ''}
            >
              <OptimizedImage
                imageKey={key}
                alt={t('common.galleryImageAlt', { n: i + 1 })}
                aspectRatio={i === 0 ? '1/1' : '4/3'}
                className="rounded-[var(--radius-lg)]"
              />
            </MotionStaggerItem>
          ))}
        </MotionStagger>

        <div className="mt-8 text-center">
          <Link
            to="/about#gallery"
            className="text-sm font-semibold text-paprika-700 hover:text-paprika-900"
          >
            {t('gallery.cta')} →
          </Link>
        </div>
      </div>
    </section>
  )
}
