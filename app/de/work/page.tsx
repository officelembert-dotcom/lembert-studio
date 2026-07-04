import Image from 'next/image'
import Link from 'next/link'
import { getWorkPageDe } from '@/lib/pages'

export const metadata = {
  title: 'Zusammenarbeit — Outcome Based Coaching, Retained Advisory, Deep Day',
  description:
    'Wege der Zusammenarbeit: Outcome Based Coaching, Retained Advisory über mehrere Monate und ein Deep Day für eine entscheidende Frage. Für Gründer und CEOs in der Schweiz und im DACH-Raum.',
  openGraph: {
    title: 'Zusammenarbeiten mit Moritz Lembert — Lembert Studio',
    description: 'Outcome Based Coaching, Retained Advisory und Deep Day.',
  },
  alternates: {
    canonical: 'https://lembertstudio.com/de/work',
    languages: {
      'en-GB': 'https://lembertstudio.com/work',
      'de-CH': 'https://lembertstudio.com/de/work',
    },
  },
}

const offerSlugs: Record<string, string> = {
  'outcome based coaching':             '/de/work/outcome-based-coaching',
  'retained advisory':                  '/de/work/retained-advisory',
  'deep day':                           '/de/work/deep-day',
  'retreats im rheintal':               '/de/work/retreats',
  'retreats in der schweiz und europa': '/de/work/retreats',
  'team trainings & workshops':         '/de/contact',
}

function getOfferHref(title: string): string {
  return offerSlugs[title.trim().toLowerCase()] ?? '/de/work'
}

const MAIN_OFFERS = ['outcome based coaching', 'retained advisory', 'deep day']
const RETREAT_KEYS = ['retreats im rheintal', 'retreats in der schweiz und europa']

export default function WorkDe() {
  const page = getWorkPageDe()

  const mainOffers = page.offers.filter(o =>
    MAIN_OFFERS.includes(o.title.trim().toLowerCase())
  )
  const retreatOffer = page.offers.find(o =>
    RETREAT_KEYS.includes(o.title.trim().toLowerCase())
  )

  return (
    <div className="page-enter">

      {/* Full-bleed header image */}
      <div
        className="w-full relative overflow-hidden"
        style={{ height: '70vh', minHeight: '400px' }}
      >
        {page.image ? (
          <Image
            src={page.image}
            alt="Alpstein-Region, Schweiz"
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
        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none"
          style={{ height: '45%', background: 'linear-gradient(to bottom, transparent, #0F0F11)' }}
        />
        <div
          className="absolute inset-x-0 bottom-0 mx-auto max-w-page px-6 md:px-10"
          style={{ paddingBottom: '4rem' }}
        >
          <p
            className="font-inter font-medium uppercase tracking-label mb-4"
            style={{ fontSize: '11px', opacity: 0.55 }}
          >
            Arbeit
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

      <div className="mx-auto max-w-page px-6 md:px-10">
        <div style={{ height: '5rem' }} />

        {/* Main offers */}
        <div className="max-w-[680px]">
          {mainOffers.map((offer, i) => {
            const [lead, secondary] = offer.body.split('\n')
            return (
              <Link
                key={offer.title}
                href={getOfferHref(offer.title)}
                className="group block no-underline"
                style={{
                  paddingTop: '2.5rem',
                  paddingBottom: '2.5rem',
                  borderTop: i === 0 ? '1px solid rgba(227,217,189,0.12)' : undefined,
                  borderBottom: '1px solid rgba(227,217,189,0.12)',
                }}
              >
                <div className="flex items-start justify-between gap-6">
                  <h2
                    className="font-fraunces font-normal text-birch mb-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2"
                    style={{ fontSize: '1.75rem', lineHeight: 1.2, opacity: 0.85 }}
                  >
                    {offer.title}
                  </h2>
                  <span
                    className="font-inter text-birch transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 shrink-0 mt-1"
                    style={{ fontSize: '1.25rem', opacity: 0.45 }}
                    aria-hidden="true"
                  >
                    →
                  </span>
                </div>
                {lead && (
                  <p
                    className="font-fraunces font-normal text-birch mb-3"
                    style={{ fontSize: '1.0625rem', lineHeight: 1.7, opacity: 0.85 }}
                  >
                    {lead}
                  </p>
                )}
                {secondary && (
                  <p
                    className="font-inter font-normal text-birch"
                    style={{ fontSize: '0.875rem', lineHeight: 1.65, opacity: 0.45 }}
                  >
                    {secondary}
                  </p>
                )}
              </Link>
            )
          })}
        </div>

        {/* Retreats — subordinate */}
        {retreatOffer && (
          <div className="max-w-[680px]" style={{ marginTop: '3rem' }}>
            <p
              className="font-inter font-medium uppercase tracking-label mb-5"
              style={{ fontSize: '11px', opacity: 0.35 }}
            >
              Außerdem
            </p>
            <Link
              href={getOfferHref(retreatOffer.title)}
              className="group flex items-start justify-between gap-6 no-underline"
              style={{
                paddingTop: '1.5rem',
                paddingBottom: '1.5rem',
                borderTop: '1px solid rgba(227,217,189,0.08)',
                borderBottom: '1px solid rgba(227,217,189,0.08)',
              }}
            >
              <div>
                <h3
                  className="font-fraunces font-normal text-birch mb-2 transition-all duration-300 group-hover:translate-x-2"
                  style={{ fontSize: '1.25rem', lineHeight: 1.3, opacity: 0.55 }}
                >
                  {retreatOffer.title}
                </h3>
                <p
                  className="font-inter font-normal text-birch"
                  style={{ fontSize: '0.875rem', lineHeight: 1.65, opacity: 0.4 }}
                >
                  {retreatOffer.body}
                </p>
              </div>
              <span
                className="font-inter text-birch transition-all duration-300 group-hover:opacity-60 group-hover:translate-x-1 shrink-0 mt-1"
                style={{ fontSize: '1rem', opacity: 0.25 }}
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </div>
        )}

        {/* Engagement note */}
        <div
          className="max-w-[560px] mt-16"
          style={{ paddingTop: '3rem', borderTop: '1px solid rgba(227,217,189,0.12)' }}
        >
          <p
            className="font-fraunces font-normal text-birch"
            style={{ fontSize: '1rem', lineHeight: 1.75, opacity: 0.55 }}
          >
            {page.closing}
          </p>
        </div>

        <div style={{ height: '8rem' }} />
      </div>
    </div>
  )
}
