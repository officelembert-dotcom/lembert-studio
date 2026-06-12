import Image from 'next/image'
import { getHomePage } from '@/lib/pages'
import NewsletterSignup from '@/components/NewsletterSignup'

export default function Home() {
  const page = getHomePage()

  return (
    <div className="page-enter">

      {/* ── Hero text ─────────────────────────────────────────── */}
      <div className="mx-auto max-w-page px-6 md:px-10">
        <div style={{ height: '7rem' }} />

        <section aria-labelledby="hero-headline">
          <h1
            id="hero-headline"
            className="font-fraunces font-normal text-birch"
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              maxWidth: '680px',
            }}
          >
            {page.headline}
          </h1>

          <p
            className="font-fraunces italic mt-5"
            style={{
              fontSize: '1rem',
              lineHeight: 1.65,
              opacity: 0.55,
              maxWidth: '480px',
            }}
          >
            {page.subheadline}
          </p>
        </section>

        <div style={{ height: '5rem' }} />
      </div>

      {/* ── Atmospheric image zone ─────────────────────────────── */}
      <div
        className="w-full relative overflow-hidden"
        style={{ height: '60vh', minHeight: '340px', maxHeight: '680px' }}
        aria-hidden="true"
      >
        {page.heroImage ? (
          <Image
            src={page.heroImage}
            alt="Alpine landscape — Alpstein region, Switzerland"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, #0e1410 0%, #1a2018 35%, #1e2820 55%, #16201a 80%, #111711 100%)',
            }}
          />
        )}
        <div
          className="absolute inset-x-0 bottom-0"
          style={{
            height: '35%',
            background: 'linear-gradient(to bottom, transparent, #1A1F1C)',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* ── Practice + newsletter ─────────────────────────────── */}
      <div className="mx-auto max-w-page px-6 md:px-10">
        <div style={{ height: '6rem' }} />

        <section aria-labelledby="practice-label">
          <p
            id="practice-label"
            className="font-inter font-medium uppercase tracking-label mb-8"
            style={{ fontSize: '11px', opacity: 0.55 }}
          >
            Practice
          </p>

          <ul className="list-none m-0 p-0 space-y-0" role="list">
            {page.practiceItems.map((item, i) => (
              <li
                key={item}
                className="font-fraunces font-normal text-birch"
                style={{
                  fontSize: '1.375rem',
                  lineHeight: 1.5,
                  paddingTop: '1.25rem',
                  paddingBottom: '1.25rem',
                  borderTop: i === 0 ? '1px solid rgba(229,220,196,0.12)' : undefined,
                  borderBottom: '1px solid rgba(229,220,196,0.12)',
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Newsletter signup */}
        <div style={{ height: '6rem' }} />
        <NewsletterSignup />
        <div style={{ height: '6rem' }} />
      </div>
    </div>
  )
}
