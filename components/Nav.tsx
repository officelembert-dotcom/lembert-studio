'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const links = [
  { href: '/about',   label: 'About'   },
  { href: '/work',    label: 'Work'    },
  { href: '/voices',  label: 'Voices'  },
  { href: '/notes',   label: 'Notes'   },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // On home page: transparent until scrolled past hero
  // On other pages: always has subtle background
  const showBackground = !isHome || scrolled

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: showBackground
          ? 'rgba(26, 31, 28, 0.92)'
          : 'transparent',
        backdropFilter: showBackground ? 'blur(8px)' : 'none',
        WebkitBackdropFilter: showBackground ? 'blur(8px)' : 'none',
      }}
    >
      <div className="mx-auto max-w-page px-6 md:px-10 flex items-center justify-between py-7">

        <Link
          href="/"
          className="font-inter font-medium text-[11px] tracking-label uppercase text-birch hover:opacity-80 transition-opacity"
        >
          Lembert Studio
        </Link>

        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-7 md:gap-9 list-none m-0 p-0">
            {links.map(({ href, label }) => {
              const isActive =
                href === '/'
                  ? pathname === '/'
                  : pathname === href || pathname.startsWith(href + '/')
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`font-inter font-medium text-[11px] tracking-nav uppercase transition-opacity ${
                      isActive ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
