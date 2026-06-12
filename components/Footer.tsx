import Link from 'next/link'

const footerLinks = [
  { href: '/about',    label: 'About'    },
  { href: '/work',     label: 'Work'     },
  { href: '/voices',   label: 'Voices'   },
  { href: '/writings', label: 'Writings' },
  { href: '/contact',  label: 'Contact'  },
]

export default function Footer() {
  return (
    <footer
      className="w-full mt-auto"
      style={{ borderTop: '1px solid rgba(227,217,189,0.12)' }}
    >
      <div className="mx-auto max-w-page px-6 md:px-10 py-8 flex flex-col gap-5">

        {/* Nav links */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 list-none m-0 p-0">
            {footerLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="font-inter font-medium uppercase text-birch hover:opacity-80 transition-opacity"
                  style={{ fontSize: '10px', letterSpacing: '0.24em', opacity: 0.55 }}
                >
                  {label}
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
            Lembert Studio · Berneck
          </span>
          <span
            className="font-fraunces italic text-[11px]"
            style={{ opacity: 0.55 }}
          >
            Est. 2026 · between the Alpstein and the Bodensee
          </span>
        </div>

      </div>
    </footer>
  )
}
