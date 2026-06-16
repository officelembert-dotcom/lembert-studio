'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { dict, type Locale } from '@/lib/i18n'

const baseLinks = [
  { href: '/work',     key: 'work'     as const },
  { href: '/writings', key: 'writings' as const },
  { href: '/about',    key: 'about'    as const },
  { href: '/voices',   key: 'voices'   as const },
  { href: '/contact',  key: 'contact'  as const },
]

function withLocale(href: string, locale: Locale) {
  if (locale === 'en') return href
  return href === '/' ? '/de' : `/de${href}`
}

export default function Nav() {
  const pathname = usePathname()
  const locale: Locale = pathname.startsWith('/de') ? 'de' : 'en'
  const labels = dict[locale].nav
  const isHome = pathname === '/' || pathname === '/de'
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const showBackground = !isHome || scrolled

  // Compute the equivalent path in the other language for the toggle
  const otherLocale: Locale = locale === 'en' ? 'de' : 'en'
  const otherPath =
    locale === 'en'
      ? `/de${pathname === '/' ? '' : pathname}`
      : pathname.replace(/^\/de/, '') || '/'

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: showBackground ? 'rgba(15,15,17,0.92)' : 'transparent',
        backdropFilter: showBackground ? 'blur(8px)' : 'none',
        WebkitBackdropFilter: showBackground ? 'blur(8px)' : 'none',
      }}
    >
      <div className="mx-auto max-w-page px-6 md:px-10 flex items-center justify-between py-7">
        <Link
          href={withLocale('/', locale)}
          className="font-inter font-medium tracking-label uppercase text-birch transition-all duration-300 hover:opacity-80 hover:-translate-y-px"
          style={{ fontSize: '13px' }}
        >
          Lembert Studio
        </Link>

        <div className="flex items-center gap-5 md:gap-9 ml-6 md:ml-0">
          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-5 md:gap-9 list-none m-0 p-0">
              {baseLinks.map(({ href, key }) => {
                const localizedHref = withLocale(href, locale)
                const isActive =
                  pathname === localizedHref || pathname.startsWith(localizedHref + '/')
                return (
                  <li key={href}>
                    <Link
                      href={localizedHref}
                      className={`font-inter font-medium text-[11px] tracking-nav uppercase transition-all duration-300 hover:-translate-y-px ${
                        isActive ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {labels[key]}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Language switcher */}
          <Link
            href={otherPath}
            className="font-inter font-medium text-[11px] tracking-nav uppercase text-birch transition-all duration-300 hover:-translate-y-px"
            style={{ opacity: 0.4 }}
            aria-label={`Switch to ${otherLocale === 'de' ? 'German' : 'English'}`}
          >
            {otherLocale.toUpperCase()}
          </Link>
        </div>
      </div>
    </header>
  )
}
