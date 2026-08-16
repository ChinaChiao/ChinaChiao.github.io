import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { LocaleProvider } from '../i18n/LocaleProvider'
import { Footer } from './Footer'
import { Nav } from './Nav'

export function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <LocaleProvider>
      <div className="page">
        <Nav />
        <Outlet />
        <Footer />
      </div>
    </LocaleProvider>
  )
}
