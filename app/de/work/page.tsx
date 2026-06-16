import Image from 'next/image'
import Link from 'next/link'
import { getWorkPageDe } from '@/lib/pages'

export const metadata = {
  title: 'Advisory & Coaching — Retained Advisory, Deep Day, Retreats',
  description:
    'Vier Wege zusammenzuarbeiten: Retained Advisory über mindestens 6 Monate, Deep Day für eine entscheidende Frage, Retreats im Rheintal und Team Trainings & Workshops. Für Gründer & CEOs in der Schweiz und dem DACH-Raum.',
  openGraph: {
    title: 'Zusammenarbeiten mit Moritz Lembert — Lembert Studio',
    description: 'Retained Advisory, Deep Day und Retreats im Alpstein.',
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
  'retained advisory':          '/de/work/retained-advisory',
  'deep day':                   '/de/work/deep-day',
  'retreats im rheintal':       '/de/work/retreats',
  'team trainings & workshops': '/de/contact',
}

function getOfferHref(title: string): string {
  return offerSlugs[title.trim().toLowerCase()] ?? '/de/work'
}

export default function WorkDe() {
  const page = getWorkPageDe()

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

      {/* Offers */}
      <div className="mx-auto max-w-page px-6 md:px-10">
        <div style={{ height: '5rem' }} />

        <div className="max-w-[680px]">
          {page.offers.map((offer, i) => (
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
                  className="font-fraunces font-normal text-birch mb-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2"
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
              <p
                className="font-inter font-normal text-birch"
                style={{ fontSize: '1rem', lineHeight: 1.75, opacity: 0.65 }}
              >
                {offer.body}
              </p>
            </Link>
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
            Preise
          </p>

          <p
            className="font-fraunces font-normal text-birch mb-4"
            style={{ fontSize: '1.25rem', lineHeight: 1.5 }}
          >
            Jede Zusammenarbeit ist individuell gestaltet.
          </p>

          <p
            className="font-inter text-birch mb-6"
            style={{ fontSize: '0.9375rem', lineHeight: 1.75, opacity: 0.65 }}
          >
            Jede Arbeit wird individuell um die konkrete Situation des Unternehmens und der Person, die es führt, gestaltet. Es gibt kein Format von der Stange.
          </p>

          <p
            className="font-inter text-birch mb-10"
            style={{ fontSize: '0.9375rem', lineHeight: 1.75, opacity: 0.55 }}
          >
            Engagements beginnen bei CHF&nbsp;4'500. Retained Advisory beginnt bei CHF&nbsp;18'000 über mindestens sechs Monate.
          </p>

          <Link
            href="/de/contact"
            className="inline-block font-inter font-medium uppercase text-birch transition-all duration-300 hover:opacity-80 hover:translate-x-2"
            style={{
              fontSize: '11px',
              letterSpacing: '0.24em',
              borderBottom: '1px solid rgba(227,217,189,0.5)',
              paddingBottom: '3px',
            }}
          >
            Jetzt Kontakt aufnehmen
          </Link>
        </div>

        <div style={{ height: '8rem' }} />
      </div>
    </div>
  )
}
