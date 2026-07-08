import Image from 'next/image'
import Link from 'next/link'
import { getAllWritings } from '@/lib/writings'
import NewsletterSignup from '@/components/NewsletterSignup'

export const metadata = {
  title: 'Writings — Essays on leadership, human nature, and what runs underneath',
  description: 'Essays by Moritz Lembert for founders and owners building a future we want to live in. Leadership, hidden dynamics, and what runs underneath the work.',
  openGraph: {
    title: 'Writings — Lembert Studio',
    description: 'Essays on the work and the life behind it.',
  },
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr + 'T00:00:00')
  if (isNaN(d.getTime())) return ''
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function Writings() {
  const writings = getAllWritings()

  return (
    <div className="page-enter mx-auto max-w-page px-6 md:px-10">
      <div style={{ height: '6rem' }} />

      <p
        className="font-inter font-medium uppercase tracking-label mb-6"
        style={{ fontSize: '11px', opacity: 0.55 }}
      >
        Writings
      </p>

      <h1
        className="font-fraunces font-normal text-birch mb-4"
        style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: 1.1, letterSpacing: '-0.025em' }}
      >
        Writings
      </h1>

      <p
        className="font-fraunces italic"
        style={{ fontSize: '1rem', lineHeight: 1.65, opacity: 0.55 }}
      >
        Occasional writing on the work.
      </p>

      {/* Subscribe block */}
      <div
        className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 sm:gap-12 py-10 mt-8"
        style={{ borderTop: '1px solid rgba(227,217,189,0.12)', borderBottom: '1px solid rgba(227,217,189,0.12)', marginBottom: '4rem' }}
      >
        <div>
          <p
            className="font-fraunces font-normal text-birch"
            style={{ fontSize: '1.125rem', lineHeight: 1.5 }}
          >
            Receive writings directly into your inbox.
          </p>
          <p
            className="font-fraunces italic mt-1"
            style={{ fontSize: '0.9375rem', opacity: 0.5 }}
          >
            No noise. One piece at a time.
          </p>
        </div>
        <div className="shrink-0">
          <NewsletterSignup
            label=""
            placeholder="your@email.com"
            language="en"
          />
        </div>
      </div>

      {writings.length === 0 ? (
        <p className="font-inter" style={{ fontSize: '0.9375rem', opacity: 0.45 }}>
          No writings yet.
        </p>
      ) : (
        <div
          className="grid gap-8 md:gap-10"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}
        >
          {writings.map((writing) => (
            <Link
              key={writing.slug}
              href={`/writings/${writing.slug}`}
              className="group block no-underline"
            >
              {/* Image */}
              <div
                className="relative overflow-hidden mb-5"
                style={{ aspectRatio: '3 / 2', borderRadius: '2px', background: 'rgba(227,217,189,0.06)' }}
              >
                {writing.coverImage ? (
                  <Image
                    src={writing.coverImage}
                    alt={writing.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover grayscale transition-opacity duration-500 group-hover:opacity-80"
                  />
                ) : (
                  <div
                    className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-70"
                    style={{
                      background: 'linear-gradient(135deg, #0d0d10 0%, #111115 60%, #0a0a0d 100%)',
                    }}
                  />
                )}
              </div>

              {/* Date */}
              {writing.date && formatDate(writing.date) && (
                <time
                  className="font-inter uppercase block mb-2"
                  style={{ fontSize: '11px', letterSpacing: '0.16em', opacity: 0.45 }}
                  dateTime={writing.date}
                >
                  {formatDate(writing.date)}
                </time>
              )}

              {/* Title */}
              <h2
                className="font-fraunces font-normal text-birch transition-all duration-300 group-hover:opacity-75 group-hover:translate-x-1"
                style={{ fontSize: '1.375rem', lineHeight: 1.3 }}
              >
                {writing.title}
              </h2>
            </Link>
          ))}
        </div>
      )}

      <div style={{ height: '8rem' }} />
    </div>
  )
}
