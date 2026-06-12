import Image from 'next/image'
import Link from 'next/link'
import { getWorkPage } from '@/lib/pages'

export const revalidate = 0

export const metadata = {
  title: 'Work — Lembert Studio',
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

      {/* Atmospheric header image */}
      <div
        className="w-full relative overflow-hidden"
        style={{ height: '50vh', minHeight: '260px', maxHeight: '520px' }}
        aria-hidden="true"
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
        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none"
          style={{ height: '40%', background: 'linear-gradient(to bottom, transparent, #0F0F11)' }}
        />
      </div>

      <div className="mx-auto max-w-page px-6 md:px-10">
        <div style={{ height: '4rem' }} />

        <p
          className="font-inter font-medium uppercase tracking-label mb-10"
          style={{ fontSize: '11px', opacity: 0.55 }}
        >
          Work
        </p>

        <h1
          className="font-fraunces font-normal text-birch mb-16"
          style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: 1.1, letterSpacing: '-0.025em' }}
        >
          {page.headline}
        </h1>

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

        {/* Pricing */}
        <p
          className="font-inter text-birch mt-16 text-center"
          style={{ fontSize: '14px', lineHeight: 1.7, opacity: 0.65, maxWidth: '620px', margin: '4rem auto 0' }}
        >
          Engagements range from CHF 4,500 for a Working Day to CHF 30,000+ for retained advisory. The fit and the work shape the final scope.
        </p>

        <p
          className="font-fraunces italic mt-8 text-center"
          style={{ fontSize: '0.9375rem', lineHeight: 1.7, opacity: 0.4 }}
        >
          {page.closing}
        </p>

        <div style={{ height: '8rem' }} />
      </div>
    </div>
  )
}
