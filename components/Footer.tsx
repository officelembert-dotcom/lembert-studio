'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
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

export default function Footer() {
  const pathname = usePathname()
  const locale: Locale = pathname.startsWith('/de') ? 'de' : 'en'
  const t = dict[locale]

  return (
    <footer
      className="w-full mt-auto"
      style={{ borderTop: '1px solid rgba(227,217,189,0.12)' }}
    >
      <div className="mx-auto max-w-page px-6 md:px-10 py-8 flex flex-col gap-5">

        {/* Nav links */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 list-none m-0 p-0">
            {baseLinks.map(({ href, key }) => (
              <li key={href}>
                <Link
                  href={withLocale(href, locale)}
                  className="font-inter font-medium uppercase text-birch transition-all duration-300 hover:opacity-80 hover:translate-x-1"
                  style={{ fontSize: '10px', letterSpacing: '0.24em', opacity: 0.55 }}
                >
                  {t.nav[key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div style={{ height: '1px', backgroundColor: 'rgba(227,217,189,0.08)' }} />

        <div className="flex items-center justify-between flex-wrap gap-3">
          <span
            className="font-inter font-medium text-[10px] tracking-label uppercase"
            style={{ opacity: 0.55 }}
          >
            {t.footer.location}
          </span>
          <div className="flex items-center gap-5">
            <Link
              href="/impressum"
              className="font-inter font-medium uppercase text-birch transition-all duration-300 hover:opacity-80 hover:translate-x-1"
              style={{ fontSize: '10px', letterSpacing: '0.22em', opacity: 0.35 }}
            >
              {t.footer.impressum}
            </Link>
            <span
              className="font-fraunces italic text-[11px]"
              style={{ opacity: 0.55 }}
            >
              {t.footer.tagline}
            </span>
          </div>
        </div>

      </div>
    </footer>
  )
}
