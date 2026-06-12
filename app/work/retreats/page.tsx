import Link from 'next/link'

export const metadata = {
  title: 'Retreats in the Rheintal — Lembert Studio',
}

export default function Retreats() {
  return (
    <div className="page-enter">

      {/* Header image placeholder — cooler, more alpine */}
      <div
        className="w-full relative"
        style={{ height: '50vh', minHeight: '260px', maxHeight: '520px' }}
        aria-hidden="true"
      >
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(170deg, #08100d 0%, #0d1510 50%, #080e0b 100%)' }}
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
          Retreats in the Rheintal
        </p>

        <h1
          className="font-fraunces font-normal text-birch mb-12"
          style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', lineHeight: 1.1, letterSpacing: '-0.025em', maxWidth: '620px' }}
        >
          Retreats in the Rheintal
        </h1>

        <div className="space-y-7" style={{ maxWidth: '620px' }}>
          <p
            className="font-fraunces font-normal text-birch"
            style={{ fontSize: '1.0625rem', lineHeight: 1.8 }}
          >
            Placeholder — your copy goes here. Small group retreats held a few times each year in the Alpstein region, between the Bodensee and the mountains. The setting is deliberate — away from the desk, in landscape that makes space for thinking differently.
          </p>
          <p
            className="font-fraunces font-normal text-birch"
            style={{ fontSize: '1.0625rem', lineHeight: 1.8 }}
          >
            Placeholder — second paragraph. Each retreat works with a specific theme — often around leadership, decision-making, or the person behind the work. Groups are kept intentionally small so the work can go deep.
          </p>
          <p
            className="font-fraunces font-normal text-birch"
            style={{ fontSize: '1.0625rem', lineHeight: 1.8 }}
          >
            Placeholder — third paragraph. Dates are announced a few months in advance. If you'd like to be informed of upcoming retreats, write to the address below.
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
