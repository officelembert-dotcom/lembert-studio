'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/about',   label: 'About'   },
  { href: '/work',    label: 'Work'    },
  { href: '/voices',  label: 'Voices'  },
  { href: '/notes',   label: 'Notes'   },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <header className="w-full">
      <div
        className="
          mx-auto max-w-page
          px-6 md:px-10
          flex items-center justify-between
          pt-8 pb-8
        "
      >
        {/* Wordmark */}
        <Link
          href="/"
          className="
            font-inter font-medium text-[11px] tracking-label uppercase
            text-birch
            hover:opacity-80 transition-opacity
          "
        >
          Lembert Studio
        </Link>

        {/* Nav links */}
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
                    className={`
                      font-inter font-medium text-[11px] tracking-nav uppercase
                      transition-opacity
                      ${isActive ? 'opacity-100' : 'opacity-40 hover:opacity-70'}
                    `}
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
