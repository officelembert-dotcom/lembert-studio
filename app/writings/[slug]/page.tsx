import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllWritings, getWritingBySlug } from '@/lib/writings'

export async function generateStaticParams() {
  const writings = getAllWritings()
  return writings.map((w) => ({ slug: w.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const writing = getWritingBySlug(params.slug)
  if (!writing) return {}
  return { title: `${writing.title} — Lembert Studio` }
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function WritingPage({ params }: { params: { slug: string } }) {
  const writing = getWritingBySlug(params.slug)
  if (!writing) notFound()

  return (
    <div className="page-enter mx-auto max-w-page px-6 md:px-10">
      <div style={{ height: '6rem' }} />

      <time
        className="font-inter block mb-6"
        style={{ fontSize: '12px', opacity: 0.55 }}
        dateTime={writing.date}
      >
        {formatDate(writing.date)}
      </time>

      <h1
        className="font-fraunces font-normal text-birch"
        style={{
          fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
          lineHeight: 1.15,
          letterSpacing: '-0.015em',
          maxWidth: '680px',
        }}
      >
        {writing.title}
      </h1>

      <div
        style={{
          height: '1px',
          backgroundColor: 'rgba(227,217,189,0.12)',
          maxWidth: '680px',
          marginTop: '2.5rem',
          marginBottom: '3rem',
        }}
      />

      <article className="prose-note mx-auto" style={{ maxWidth: '680px' }}>
        <MDXRemote source={writing.content} />
      </article>

      <div style={{ height: '4rem' }} />

      <div style={{ maxWidth: '680px', marginBottom: '6rem' }}>
        <Link
          href="/writings"
          className="font-inter text-birch no-underline"
          style={{ fontSize: '13px', opacity: 0.55 }}
        >
          ← Back to all writings
        </Link>
      </div>
    </div>
  )
}
