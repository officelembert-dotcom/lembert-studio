import Image from 'next/image'
import Link from 'next/link'
import { getRetainedAdvisoryPage } from '@/lib/pages'


export const metadata = {
  title: 'Retained Advisory — Lembert Studio',
  description: 'A sustained advisory relationship over months. Strategic decisions and the person making them — both at once.',
  openGraph: {
    title: 'Retained Advisory — Lembert Studio',
    description: 'The question that doesn\'t resolve in a quarter, held over months.',
  },
}

export default function RetainedAdvisory() {
  const page = getRetainedAdvisoryPage()

  return (
    <div className="page-enter">
      <div
        className="w-full relative"
        style={{ height: 'calc(50vh + 72px)', minHeight: '330px', maxHeight: '600px' }}
        aria-hidden="true"
      >
        {page.image ? (
          <Image src={page.image} alt="Retained Advisory" fill sizes="100vw" className="object-cover object-center" priority />
        ) : (
          <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, #0d0d10 0%, #111118 50%, #080810 100%)' }} />
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
          Retained Advisory
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
