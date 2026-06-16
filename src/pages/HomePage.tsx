import { SEO } from '@/components/SEO'
import { HeroSection } from '@/components/sections/HeroSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { OfferingsSection } from '@/components/sections/OfferingsSection'
import { GalleryPreviewSection } from '@/components/sections/GalleryPreviewSection'
import { StorySection } from '@/components/sections/StorySection'
import { PlattersSection } from '@/components/sections/PlattersSection'
import { ReviewsSection } from '@/components/sections/ReviewsSection'
import { VisitSection } from '@/components/sections/VisitSection'

export function HomePage() {
  return (
    <>
      <SEO titleKey="seo.home.title" descriptionKey="seo.home.description" path="/" />
      <HeroSection />
      <StatsSection />
      <OfferingsSection />
      <GalleryPreviewSection />
      <StorySection />
      <PlattersSection />
      <ReviewsSection />
      <VisitSection />
    </>
  )
}
