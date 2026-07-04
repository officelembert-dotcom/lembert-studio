import Image from 'next/image'
import Link from 'next/link'
import { getOutcomeBasedCoachingPage } from '@/lib/pages'


export const metadata = {
  title: 'Outcome Based Coaching — Lembert Studio',
  description: 'A custom coaching program built around the outcomes we agree on together. For founders and CEOs who want change they can measure.',
  openGraph: {
    title: 'Outcome Based Coaching — Lembert Studio',
    description: 'We agree on outcomes. Then we build your program around them.',
  },
}

export default function OutcomeBasedCoaching() {
  const page = getOutcomeBasedCoachingPage()

  return (
    <div className="page-enter">
      <div
        className="w-full relative"
        style={{ height: 'calc(50vh + 72px)', minHeight: '330px', maxHeight: '600px' }}
        aria-hidden="true"
      >
        {page.image ? (
          <Image src={page.image} alt="Outcome Based Coaching" fill sizes="100vw" className="object-cover object-center" priority />
        ) : (
          <div className="absolute inset-0" style={{ background: 'linear-gradient(155deg, #0d100e 0%, #12161a 50%, #0a0d10 100%)' }} />
        )}
        <div className="absolute inset-x-0 bottom-0 pointer-events-none" style={{ height: '40%', background: 'linear-gradient(to bottom, transparent, #0F0F11)' }} />
      </div>

      <div className="mx-auto max-w-page px-6 md:px-10">
        <div style={{ height: '1rem' }} />
        <Link href="/work" className="font-inter text-birch no-underline" style={{ fontSize: '12px', opacity: 0.45 }}>
          ← Back to Work
        </Link>
        <div style={{ height: '3rem' }} />

        <p className="font-inter font-medium uppercase tracking-label mb-6" style={{ fontSize: '11px', opacity: 0.55 }}>
          Outcome Based Coaching
        </p>
        <h1 className="font-fraunces font-normal text-birch mb-12" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', lineHeight: 1.1, letterSpacing: '-0.025em', maxWidth: '620px' }}>
          {page.headline}
        </h1>

        <div className="space-y-7" style={{ maxWidth: '620px' }}>
          {page.paragraphs.map((p, i) => (
            <p key={i} className="font-fraunces font-normal text-birch" style={{ fontSize: '1.0625rem', lineHeight: 1.8 }}>{p}</p>
          ))}
        </div>

        <div style={{ height: '5rem' }} />
        <div style={{ borderTop: '1px solid rgba(227,217,189,0.12)', paddingTop: '2.5rem' }}>
          <p className="font-fraunces font-normal text-birch" style={{ fontSize: '1.0625rem' }}>
            If this is the work you're looking for,{' '}
            <Link href="/contact" className="text-birch" style={{ textDecoration: 'underline', textDecorationColor: 'var(--amber)', textUnderlineOffset: '3px' }}>
              the next step is a conversation.
            </Link>
          </p>
        </div>
        <div style={{ height: '8rem' }} />
      </div>
    </div>
  )
}
