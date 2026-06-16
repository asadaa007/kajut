import { Outlet } from 'react-router-dom'
import { SkipLink } from '@/components/layout/SkipLink'
import { UtilityBar } from '@/components/layout/UtilityBar'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { DevImageNote } from '@/components/DevImageNote'

export function Layout() {
  return (
    <>
      <SkipLink />
      <UtilityBar />
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
      <DevImageNote />
    </>
  )
}
