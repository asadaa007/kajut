import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Layout } from '@/components/layout/Layout'
import '@/i18n'

const HomePage = lazy(() =>
  import('@/pages/HomePage').then((m) => ({ default: m.HomePage })),
)
const MenuPage = lazy(() =>
  import('@/pages/MenuPage').then((m) => ({ default: m.MenuPage })),
)
const OrderPage = lazy(() =>
  import('@/pages/OrderPage').then((m) => ({ default: m.OrderPage })),
)
const CateringPage = lazy(() =>
  import('@/pages/CateringPage').then((m) => ({ default: m.CateringPage })),
)
const AboutPage = lazy(() =>
  import('@/pages/AboutPage').then((m) => ({ default: m.AboutPage })),
)
const ContactPage = lazy(() =>
  import('@/pages/ContactPage').then((m) => ({ default: m.ContactPage })),
)

function PageLoader() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center bg-cream">
      <div
        className="h-10 w-10 animate-spin rounded-full border-2 border-paprika-700 border-t-transparent"
        role="status"
        aria-label="Loading"
      />
    </div>
  )
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="menu" element={<MenuPage />} />
              <Route path="order" element={<OrderPage />} />
              <Route path="catering" element={<CateringPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="contact" element={<ContactPage />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  )
}
