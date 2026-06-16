'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import Nav from './Nav'
import Footer from './Footer'

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAdmin = pathname.startsWith('/keystatic')

  useEffect(() => {
    document.documentElement.lang = pathname.startsWith('/de') ? 'de' : 'en'
  }, [pathname])

  if (isAdmin) return <>{children}</>

  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
}
