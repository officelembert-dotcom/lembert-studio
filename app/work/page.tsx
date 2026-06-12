import { getWorkPage } from '@/lib/pages'

export const metadata = {
  title: 'Work — Lembert Studio',
}

export default function Work() {
  const page = getWorkPage()

  return (
    <div className="page-enter mx-auto max-w-page px-6 md:px-10">
      <div style={{ height: '5rem' }} />

      <p
        className="font-inter font-medium uppercase tracking-label mb-10"
        style={{ fontSize: '11px', opacity: 0.55 }}
      >
        Work
      </p>

      <h1
        className="font-fraunces font-normal text-birch mb-16"
        style={{
          fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
          lineHeight: 1.1,
          letterSpacing: '-0.025em',
        }}
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
  )
}
