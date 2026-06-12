import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllNotes, getNoteBySlug } from '@/lib/notes'

export async function generateStaticParams() {
  const notes = getAllNotes()
  return notes.map((note) => ({ slug: note.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const note = getNoteBySlug(params.slug)
  if (!note) return {}
  return { title: `${note.title} — Lembert Studio` }
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function NotePage({ params }: { params: { slug: string } }) {
  const note = getNoteBySlug(params.slug)
  if (!note) notFound()

  return (
    <div className="page-enter mx-auto max-w-page px-6 md:px-10">
      <div style={{ height: '4rem' }} />

      {/* Date */}
      <time
        className="font-inter block mb-6"
        style={{ fontSize: '12px', opacity: 0.55 }}
        dateTime={note.date}
      >
        {formatDate(note.date)}
      </time>

      {/* Title */}
      <h1
        className="font-fraunces font-normal text-birch"
        style={{
          fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
          lineHeight: 1.15,
          letterSpacing: '-0.015em',
          maxWidth: '680px',
        }}
      >
        {note.title}
      </h1>

      {/* Divider */}
      <div
        style={{
          height: '1px',
          backgroundColor: 'rgba(229,220,196,0.12)',
          maxWidth: '680px',
          marginTop: '2.5rem',
          marginBottom: '3rem',
        }}
      />

      {/* Body */}
      <article
        className="prose-note mx-auto"
        style={{ maxWidth: '680px' }}
      >
        <MDXRemote source={note.content} />
      </article>

      {/* Bottom space */}
      <div style={{ height: '4rem' }} />

      {/* Back link */}
      <div style={{ maxWidth: '680px', marginBottom: '6rem' }}>
        <Link
          href="/notes"
          className="font-inter text-birch no-underline"
          style={{ fontSize: '13px', opacity: 0.55 }}
        >
          ← Back to all notes
        </Link>
      </div>
    </div>
  )
}
