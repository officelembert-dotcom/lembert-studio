import Image from 'next/image'
import { getWorkPage } from '@/lib/pages'

export const metadata = {
  title: 'Work — Lembert Studio',
}

export default function Work() {
  const page = getWorkPage()

  return (
    <div className="page-enter">

      {/* Header */}
      <div className="mx-auto max-w-page px-6 md:px-10">
        <div style={{ height: '5rem' }} />

        <p
          className="font-inter font-medium uppercase tracking-label mb-10"
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
          }}
        >
          {page.headline}
        </h1>

        <div style={{ height: '4rem' }} />
      </div>

      {/* Atmospheric image */}
      {page.image && (
        <div
          className="w-full relative overflow-hidden"
          style={{ height: '50vh', minHeight: '280px', maxHeight: '560px' }}
        >
          <Image
            src={page.image}
            alt="Alpstein region, Rheintal — Switzerland"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          <div
            className="absolute inset-x-0 bottom-0"
            style={{
              height: '40%',
              background: 'linear-gradient(to bottom, transparent, #1A1F1C)',
              pointerEvents: 'none',
            }}
          />
        </div>
      )}

      {/* Offers */}
      <div className="mx-auto max-w-page px-6 md:px-10">
        <div style={{ height: page.image ? '5rem' : '0' }} />

        <div className="max-w-[680px]">
          {page.offers.map((offer, i) => (
            <div
              key={offer.title}
              style={{
                paddingTop: '2.5rem',
                paddingBottom: '2.5rem',
                borderTop: i === 0 ? '1px solid rgba(229,220,196,0.12)' : undefined,
                borderBottom: '1px solid rgba(229,220,196,0.12)',
              }}
            >
              <h2
                className="font-fraunces font-normal text-birch mb-4"
                style={{ fontSize: '1.75rem', lineHeight: 1.2 }}
              >
                {offer.title}
              </h2>
              <p
                className="font-inter font-normal text-birch"
                style={{ fontSize: '1rem', lineHeight: 1.75, opacity: 0.75 }}
              >
                {offer.body}
              </p>
            </div>
          ))}
        </div>

        <p
          className="font-fraunces italic mt-12"
          style={{ fontSize: '0.9375rem', lineHeight: 1.7, opacity: 0.45 }}
        >
          {page.closing}
        </p>

        <div style={{ height: '8rem' }} />
      </div>
    </div>
  )
}
