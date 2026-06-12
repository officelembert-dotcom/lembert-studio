import Link from 'next/link'

export const metadata = {
  title: 'Deep Day — Lembert Studio',
}

export default function DeepDay() {
  return (
    <div className="page-enter">

      {/* Header image placeholder — slightly warmer tone */}
      <div
        className="w-full relative"
        style={{ height: '50vh', minHeight: '260px', maxHeight: '520px' }}
        aria-hidden="true"
      >
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(150deg, #110e0a 0%, #181410 50%, #0e0b08 100%)' }}
        />
        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none"
          style={{ height: '40%', background: 'linear-gradient(to bottom, transparent, #0F0F11)' }}
        />
      </div>

      <div className="mx-auto max-w-page px-6 md:px-10">
        <div style={{ height: '1rem' }} />

        <Link href="/work" className="font-inter text-birch no-underline" style={{ fontSize: '12px', opacity: 0.45 }}>
          ← Back to Work
        </Link>

        <div style={{ height: '3rem' }} />

        <p
          className="font-inter font-medium uppercase tracking-label mb-6"
          style={{ fontSize: '11px', opacity: 0.55 }}
        >
          Deep Day
        </p>

        <h1
          className="font-fraunces font-normal text-birch mb-12"
          style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', lineHeight: 1.1, letterSpacing: '-0.025em', maxWidth: '620px' }}
        >
          Deep Day
        </h1>

        <div className="space-y-7" style={{ maxWidth: '620px' }}>
          <p
            className="font-fraunces font-normal text-birch"
            style={{ fontSize: '1.0625rem', lineHeight: 1.8 }}
          >
            Placeholder — your copy goes here. A single focused day on one significant question. You arrive with something you've been circling — a decision, a transition, a situation that isn't resolving. We spend the day with it together.
          </p>
          <p
            className="font-fraunces font-normal text-birch"
            style={{ fontSize: '1.0625rem', lineHeight: 1.8 }}
          >
            Placeholder — second paragraph. The day is structured but not rigid. We work with what's actually present — the question as you bring it, what emerges as we stay with it, where it leads. You leave with clarity on the question and the next move.
          </p>
          <p
            className="font-fraunces font-normal text-birch"
            style={{ fontSize: '1.0625rem', lineHeight: 1.8 }}
          >
            Placeholder — third paragraph. Deep Days take place in Berneck, or by arrangement. They work especially well at threshold moments — a major hire, a significant shift in direction, a personal decision that intersects with the business.
          </p>
        </div>

        <div style={{ height: '5rem' }} />

        <div style={{ borderTop: '1px solid rgba(227,217,189,0.12)', paddingTop: '2.5rem' }}>
          <p className="font-fraunces font-normal text-birch" style={{ fontSize: '1.0625rem' }}>
            To begin,{' '}
            <Link href="/contact" className="text-birch" style={{ textDecoration: 'underline', textDecorationColor: 'var(--amber)', textUnderlineOffset: '3px' }}>
              please get in touch.
            </Link>
          </p>
        </div>

        <div style={{ height: '8rem' }} />
      </div>
    </div>
  )
}
