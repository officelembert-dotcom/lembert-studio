import Link from 'next/link'
import { getAllNotes } from '@/lib/notes'

export const metadata = {
  title: 'Notes — Lembert Studio',
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function Notes() {
  const notes = getAllNotes()

  return (
    <div className="page-enter mx-auto max-w-page px-6 md:px-10">
      <div style={{ height: "6rem" }} />

      {/* Section label */}
      <p
        className="font-inter font-medium uppercase tracking-label mb-10"
        style={{ fontSize: '11px', opacity: 0.55 }}
      >
        Notes
      </p>

      {/* Headline */}
      <h1
        className="font-fraunces font-normal text-birch"
        style={{
          fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
          lineHeight: 1.1,
          letterSpacing: '-0.025em',
        }}
      >
        Notes
      </h1>

      <p
        className="font-fraunces italic mt-4 mb-16"
        style={{ fontSize: '1rem', lineHeight: 1.65, opacity: 0.55 }}
      >
        Occasional writing on the work.
      </p>

      {/* List */}
      {notes.length === 0 ? (
        <p
          className="font-inter"
          style={{ fontSize: '0.9375rem', opacity: 0.45 }}
        >
          No notes yet.
        </p>
      ) : (
        <ul className="list-none m-0 p-0 max-w-[720px]" role="list">
          {notes.map((note, i) => (
            <li
              key={note.slug}
              style={{
                borderTop: i === 0 ? '1px solid rgba(227,217,189,0.12)' : undefined,
                borderBottom: '1px solid rgba(227,217,189,0.12)',
              }}
            >
              <Link
                href={`/notes/${note.slug}`}
                className="group flex items-baseline gap-8 py-6 no-underline"
              >
                <time
                  className="font-inter shrink-0 hidden sm:block"
                  style={{
                    fontSize: '12px',
                    opacity: 0.55,
                    minWidth: '130px',
                  }}
                  dateTime={note.date}
                >
                  {formatDate(note.date)}
                </time>
                <span
                  className="font-fraunces font-normal text-birch group-hover:opacity-75 transition-opacity"
                  style={{ fontSize: '1.5rem', lineHeight: 1.3 }}
                >
                  {note.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}

      <div style={{ height: '8rem' }} />
    </div>
  )
}
