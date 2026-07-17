import Image from 'next/image'
import Link from 'next/link'
import { getAllWritings } from '@/lib/writings'
import NewsletterSignup from '@/components/NewsletterSignup'

export const metadata = {
  title: 'Texte — Essays über Führung, das Menschsein und das, was darunter läuft',
  description: 'Essays von Moritz Lembert für Gründerinnen und Inhaber, die an einer Zukunft bauen, in der wir leben wollen. Über Führung, verborgene Dynamiken und das, was unter der Oberfläche wirkt.',
  openGraph: {
    title: 'Texte — Lembert Studio',
    description: 'Essays über die Arbeit und das Leben dahinter.',
  },
  alternates: {
    canonical: 'https://lembertstudio.com/de/writings',
    languages: {
      'en-GB': 'https://lembertstudio.com/writings',
      'de-CH': 'https://lembertstudio.com/de/writings',
    },
  },
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr + 'T00:00:00')
  if (isNaN(d.getTime())) return ''
  return d.toLocaleDateString('de-CH', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function WritingsDe() {
  const writings = getAllWritings('de')

  return (
    <div className="page-enter mx-auto max-w-page px-6 md:px-10">
      <div style={{ height: '6rem' }} />

      <p
        className="font-inter font-medium uppercase tracking-label mb-6"
        style={{ fontSize: '11px', opacity: 0.55 }}
      >
        Texte
      </p>

      <h1
        className="font-fraunces font-normal text-birch mb-4"
        style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: 1.1, letterSpacing: '-0.025em' }}
      >
        Texte
      </h1>

      <p
        className="font-fraunces italic"
        style={{ fontSize: '1rem', lineHeight: 1.65, opacity: 0.55 }}
      >
        Gelegentliche Texte über die Arbeit.
      </p>

      <p className="mt-5">
        <Link
          href="/de/notes"
          className="font-inter font-medium uppercase text-birch no-underline transition-all duration-300 hover:opacity-80 hover:translate-x-1 inline-block"
          style={{ fontSize: '11px', letterSpacing: '0.24em', opacity: 0.55 }}
        >
          Notizen — kürzere Gedanken →
        </Link>
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
            Texte direkt in deinen Posteingang.
          </p>
          <p
            className="font-fraunces italic mt-1"
            style={{ fontSize: '0.9375rem', opacity: 0.5 }}
          >
            Kein Rauschen. Ein Text auf einmal.
          </p>
        </div>
        <div className="shrink-0">
          <NewsletterSignup
            label=""
            placeholder="deine@email.com"
            language="de"
          />
        </div>
      </div>

      {writings.length === 0 ? (
        <p className="font-inter" style={{ fontSize: '0.9375rem', opacity: 0.45 }}>
          Noch keine Texte vorhanden.
        </p>
      ) : (
        <div
          className="grid gap-8 md:gap-10"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}
        >
          {writings.map((writing) => (
            <Link
              key={writing.slug}
              href={`/de/writings/${writing.slug}`}
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
