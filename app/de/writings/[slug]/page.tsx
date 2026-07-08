import Image from 'next/image'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllWritings, getWritingBySlug } from '@/lib/writings'

export const dynamicParams = true

export async function generateStaticParams() {
  const writings = getAllWritings('de')
  return writings.map((w) => ({ slug: w.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const writing = getWritingBySlug(params.slug, 'de')
  if (!writing) return {}
  const excerpt = writing.content.replace(/#{1,6}\s/g, '').replace(/\n/g, ' ').slice(0, 155).trim()
  return {
    title: `${writing.title} — Moritz Lembert`,
    description: excerpt,
    openGraph: {
      title: writing.title,
      description: excerpt,
      type: 'article',
      publishedTime: writing.date,
      authors: ['Moritz Lembert'],
      ...(writing.coverImage ? { images: [{ url: writing.coverImage }] } : {}),
    },
  }
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('de-CH', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function WritingPageDe({ params }: { params: { slug: string } }) {
  const writing = getWritingBySlug(params.slug, 'de')
  if (!writing) notFound()

  return (
    <div className="page-enter">

      {/* Cover image */}
      {writing.coverImage && (
        <div
          className="w-full relative overflow-hidden"
          style={{ height: '55vh', minHeight: '300px', maxHeight: '600px' }}
        >
          <Image
            src={writing.coverImage}
            alt={writing.title}
            fill
            sizes="100vw"
            className="object-cover grayscale object-center"
            priority
          />
          <div
            className="absolute inset-x-0 bottom-0 pointer-events-none"
            style={{ height: '35%', background: 'linear-gradient(to bottom, transparent, #0F0F11)' }}
          />
        </div>
      )}

      <div className="mx-auto max-w-page px-6 md:px-10">
        <div style={{ height: writing.coverImage ? '3rem' : '6rem' }} />

        {/* Back link */}
        <Link
          href="/de/writings"
          className="font-inter text-birch no-underline block mb-8"
          style={{ fontSize: '12px', opacity: 0.45 }}
        >
          ← Zurück zu allen Texten
        </Link>

        {/* Date */}
        <time
          className="font-inter block mb-5"
          style={{ fontSize: '12px', opacity: 0.55 }}
          dateTime={writing.date}
        >
          {formatDate(writing.date)}
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
          {writing.title}
        </h1>

        {/* Divider */}
        <div
          style={{
            height: '1px',
            backgroundColor: 'rgba(227,217,189,0.12)',
            maxWidth: '680px',
            marginTop: '2.5rem',
            marginBottom: '3rem',
          }}
        />

        {/* Body */}
        <article className="prose-note mx-auto" style={{ maxWidth: '680px' }}>
          <MDXRemote source={writing.content} />
        </article>

        <div style={{ height: '6rem' }} />
      </div>
    </div>
  )
}
