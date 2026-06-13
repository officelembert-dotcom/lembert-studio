import Image from 'next/image'
import Link from 'next/link'
import { getWorkPage } from '@/lib/pages'

export const metadata = {
  title: 'Advisory & Coaching — Retained Advisory, Deep Day, Retreats',
  description: 'Drei Wege zusammenzuarbeiten: Retained Advisory für 6 Monate, Deep Day für eine entscheidende Frage, und Retreats im Rheintal. Für Unternehmer in der Schweiz und dem DACH-Raum.',
  openGraph: {
    title: 'Zusammenarbeiten mit Moritz Lembert — Lembert Studio',
    description: 'Retained Advisory, Deep Day und Retreats im Alpstein.',
  },
}

const offerSlugs: Record<string, string> = {
  'retained advisory':         '/work/retained-advisory',
  'deep day':                  '/work/deep-day',
  'retreats in the rheintal':  '/work/retreats',
}

function getOfferHref(title: string): string {
  return offerSlugs[title.toLowerCase()] ?? '/work'
}

export default function Work() {
  const page = getWorkPage()

  return (
    <div className="page-enter">

      {/* Full-bleed header image — same style as home hero */}
      <div
        className="w-full relative overflow-hidden"
        style={{ height: '70vh', minHeight: '400px' }}
      >
        {page.image ? (
          <Image
            src={page.image}
            alt="Alpstein region, Switzerland"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(160deg, #0a0a0d 0%, #111115 40%, #0d0d12 100%)' }}
          />
        )}

        {/* Bottom fade into page background */}
        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none"
          style={{ height: '45%', background: 'linear-gradient(to bottom, transparent, #0F0F11)' }}
        />

        {/* Page title overlaid bottom-left — same as home hero */}
        <div
          className="absolute inset-x-0 bottom-0 mx-auto max-w-page px-6 md:px-10"
          style={{ paddingBottom: '4rem' }}
        >
          <p
            className="font-inter font-medium uppercase tracking-label mb-4"
            style={{ fontSize: '11px', opacity: 0.55 }}
          >
            Work
          </p>
          <h1
            className="font-fraunces font-normal text-birch"
            style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              maxWidth: '560px',
            }}
          >
            {page.headline}
          </h1>
        </div>
      </div>

      {/* Offers */}
      <div className="mx-auto max-w-page px-6 md:px-10">
        <div style={{ height: '5rem' }} />

        <div className="max-w-[680px]">
          {page.offers.map((offer, i) => (
            <div
              key={offer.title}
              style={{
                paddingTop: '2.5rem',
                paddingBottom: '2.5rem',
                borderTop: i === 0 ? '1px solid rgba(227,217,189,0.12)' : undefined,
                borderBottom: '1px solid rgba(227,217,189,0.12)',
              }}
            >
              <Link href={getOfferHref(offer.title)} className="group block no-underline">
                <h2
                  className="font-fraunces font-normal text-birch mb-4 transition-opacity group-hover:opacity-100"
                  style={{ fontSize: '1.75rem', lineHeight: 1.2, opacity: 0.85 }}
                >
                  {offer.title}
                </h2>
              </Link>
              <p
                className="font-inter font-normal text-birch"
                style={{ fontSize: '1rem', lineHeight: 1.75, opacity: 0.65 }}
              >
                {offer.body}
              </p>
            </div>
          ))}
        </div>

        {/* Pricing + CTA */}
        <div
          className="max-w-[560px] mt-16"
          style={{ paddingTop: '3rem', borderTop: '1px solid rgba(227,217,189,0.12)' }}
        >
          <p
            className="font-inter font-medium uppercase tracking-label mb-6"
            style={{ fontSize: '11px', opacity: 0.45 }}
          >
            Pricing
          </p>

          <p
            className="font-fraunces font-normal text-birch mb-4"
            style={{ fontSize: '1.25rem', lineHeight: 1.5 }}
          >
            Every engagement is custom-made.
          </p>

          <p
            className="font-inter text-birch mb-6"
            style={{ fontSize: '0.9375rem', lineHeight: 1.75, opacity: 0.65 }}
          >
            Each piece of work is individually designed around the specific situation of the business and the person leading it. There is no off-the-shelf format.
          </p>

          <p
            className="font-inter text-birch mb-10"
            style={{ fontSize: '0.9375rem', lineHeight: 1.75, opacity: 0.55 }}
          >
            Engagements start at CHF&nbsp;4,500. Retained advisory starts at CHF&nbsp;25,000 over a minimum of six months.
          </p>

          <Link
            href="/contact"
            className="inline-block font-inter font-medium uppercase text-birch hover:opacity-80 transition-opacity"
            style={{
              fontSize: '11px',
              letterSpacing: '0.24em',
              borderBottom: '1px solid rgba(227,217,189,0.5)',
              paddingBottom: '3px',
            }}
          >
            Get in touch
          </Link>
        </div>

        <div style={{ height: '8rem' }} />
      </div>
    </div>
  )
}
