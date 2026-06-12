import Link from 'next/link'

export const metadata = {
  title: 'Retained Advisory — Lembert Studio',
}

export default function RetainedAdvisory() {
  return (
    <div className="page-enter">

      {/* Header image placeholder */}
      <div
        className="w-full relative"
        style={{ height: '50vh', minHeight: '260px', maxHeight: '520px' }}
        aria-hidden="true"
      >
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(160deg, #0d0d10 0%, #111118 50%, #080810 100%)' }}
        />
        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none"
          style={{ height: '40%', background: 'linear-gradient(to bottom, transparent, #0F0F11)' }}
        />
      </div>

      <div className="mx-auto max-w-page px-6 md:px-10">
        <div style={{ height: '1rem' }} />

        {/* Back link */}
        <Link
          href="/work"
          className="font-inter text-birch no-underline"
          style={{ fontSize: '12px', opacity: 0.45 }}
        >
          ← Back to Work
        </Link>

        <div style={{ height: '3rem' }} />

        <p
          className="font-inter font-medium uppercase tracking-label mb-6"
          style={{ fontSize: '11px', opacity: 0.55 }}
        >
          Retained Advisory
        </p>

        <h1
          className="font-fraunces font-normal text-birch mb-12"
          style={{
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.025em',
            maxWidth: '620px',
          }}
        >
          Retained Advisory
        </h1>

        <div className="space-y-7" style={{ maxWidth: '620px' }}>
          <p
            className="font-fraunces font-normal text-birch"
            style={{ fontSize: '1.0625rem', lineHeight: 1.8 }}
          >
            Placeholder — your copy goes here. This is a sustained advisory relationship held over six months. We meet regularly, work with the decisions as they arrive, and stay with the questions that don't resolve quickly.
          </p>
          <p
            className="font-fraunces font-normal text-birch"
            style={{ fontSize: '1.0625rem', lineHeight: 1.8 }}
          >
            Placeholder — second paragraph. The work moves between strategy and the person doing the strategy. What decisions are on the table, how you're holding them, what's getting in the way. We look at both.
          </p>
          <p
            className="font-fraunces font-normal text-birch"
            style={{ fontSize: '1.0625rem', lineHeight: 1.8 }}
          >
            Placeholder — third paragraph. Retained advisory is for founders and owners who are operating at the edge of what they know — building something that hasn't existed before, and wanting a trusted partner to think with.
          </p>
        </div>

        <div style={{ height: '5rem' }} />

        <div style={{ borderTop: '1px solid rgba(227,217,189,0.12)', paddingTop: '2.5rem' }}>
          <p className="font-fraunces font-normal text-birch" style={{ fontSize: '1.0625rem' }}>
            To begin,{' '}
            <Link
              href="/contact"
              className="text-birch"
              style={{
                textDecoration: 'underline',
                textDecorationColor: 'var(--amber)',
                textUnderlineOffset: '3px',
              }}
            >
              please get in touch.
            </Link>
          </p>
        </div>

        <div style={{ height: '8rem' }} />
      </div>
    </div>
  )
}
