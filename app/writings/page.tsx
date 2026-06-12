import Image from 'next/image'
import Link from 'next/link'
import { getAllWritings } from '@/lib/writings'

export const revalidate = 0

export const metadata = {
  title: 'Writings — Lembert Studio',
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function Writings() {
  const writings = getAllWritings()

  return (
    <div className="page-enter mx-auto max-w-page px-6 md:px-10">
      <div style={{ height: '6rem' }} />

      <p
        className="font-inter font-medium uppercase tracking-label mb-10"
        style={{ fontSize: '11px', opacity: 0.55 }}
      >
        Writings
      </p>

      <h1
        className="font-fraunces font-normal text-birch"
        style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: 1.1, letterSpacing: '-0.025em' }}
      >
        Writings
      </h1>

      <p
        className="font-fraunces italic mt-4 mb-16"
        style={{ fontSize: '1rem', lineHeight: 1.65, opacity: 0.55 }}
      >
        Occasional writing on the work.
      </p>

      {writings.length === 0 ? (
        <p className="font-inter" style={{ fontSize: '0.9375rem', opacity: 0.45 }}>
          No writings yet.
        </p>
      ) : (
        <ul className="list-none m-0 p-0 max-w-[720px]" role="list">
          {writings.map((writing, i) => (
            <li
              key={writing.slug}
              style={{
                borderTop: i === 0 ? '1px solid rgba(227,217,189,0.12)' : undefined,
                borderBottom: '1px solid rgba(227,217,189,0.12)',
                paddingTop: '2.5rem',
                paddingBottom: '2.5rem',
              }}
            >
              <Link
                href={`/writings/${writing.slug}`}
                className="group flex flex-col sm:flex-row items-start gap-6 no-underline"
              >
                {/* Image */}
                <div
                  className="shrink-0 overflow-hidden"
                  style={{
                    width: '200px',
                    height: '140px',
                    borderRadius: '2px',
                    background: 'rgba(227,217,189,0.06)',
                    position: 'relative',
                  }}
                >
                  {writing.coverImage ? (
                    <Image
                      src={writing.coverImage}
                      alt={writing.title}
                      fill
                      sizes="200px"
                      className="object-cover"
                    />
                  ) : (
                    <div
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(135deg, #0d0d10 0%, #111115 60%, #0a0a0d 100%)',
                      }}
                    />
                  )}
                </div>

                {/* Text */}
                <div className="flex flex-col justify-center" style={{ paddingTop: '0.25rem' }}>
                  <time
                    className="font-inter uppercase block mb-3"
                    style={{ fontSize: '11px', letterSpacing: '0.16em', opacity: 0.55 }}
                    dateTime={writing.date}
                  >
                    {formatDate(writing.date)}
                  </time>
                  <span
                    className="font-fraunces font-normal text-birch group-hover:opacity-75 transition-opacity"
                    style={{ fontSize: '1.5rem', lineHeight: 1.3 }}
                  >
                    {writing.title}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}

      <div style={{ height: '8rem' }} />
    </div>
  )
}
