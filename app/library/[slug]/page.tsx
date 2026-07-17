import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllLibraryItems, getLibraryItemBySlug } from '@/lib/library'
import AudioPlayer from '@/components/AudioPlayer'

export const dynamicParams = true

const typeLabels: Record<string, string> = {
  workbook: 'Workbook',
  guide: 'Guide',
  audio: 'Audio',
}

export async function generateStaticParams() {
  return getAllLibraryItems('en').map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const item = getLibraryItemBySlug(params.slug, 'en')
  if (!item) return {}
  return {
    title: `${item.title} — Library`,
    description: item.description,
    openGraph: { title: item.title, description: item.description },
  }
}

export default function LibraryItemPage({ params }: { params: { slug: string } }) {
  const item = getLibraryItemBySlug(params.slug, 'en')
  if (!item) notFound()

  const isAudio = item.type === 'audio'

  return (
    <div className="page-enter mx-auto max-w-page px-6 md:px-10">
      <div style={{ height: '5rem' }} />

      <Link href="/library" className="font-inter text-birch no-underline" style={{ fontSize: '12px', opacity: 0.45 }}>
        ← Back to Library
      </Link>
      <div style={{ height: '3rem' }} />

      <p
        className="font-inter font-medium uppercase tracking-label mb-6"
        style={{ fontSize: '10px', color: 'var(--amber)', opacity: 0.85 }}
      >
        {typeLabels[item.type] ?? item.type}
      </p>

      <h1
        className="font-fraunces font-normal text-birch mb-8"
        style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', lineHeight: 1.1, letterSpacing: '-0.025em', maxWidth: '620px' }}
      >
        {item.title}
      </h1>

      <p
        className="font-fraunces font-normal text-birch mb-12"
        style={{ fontSize: '1.125rem', lineHeight: 1.75, opacity: 0.85, maxWidth: '560px' }}
      >
        {item.description}
      </p>

      {isAudio && item.file && (
        <div className="mb-8">
          <AudioPlayer src={item.file} />
        </div>
      )}

      {item.file && (
        <a
          href={item.file}
          download
          className="inline-block font-inter font-medium uppercase no-underline"
          style={{
            border: '1px solid var(--amber)',
            color: 'var(--amber)',
            padding: '0.75rem 1.75rem',
            fontSize: '13px',
            letterSpacing: '0.08em',
          }}
        >
          {isAudio ? 'Download MP3' : 'Download PDF'}
        </a>
      )}

      {item.content.trim() && (
        <>
          <div
            style={{
              height: '1px',
              backgroundColor: 'rgba(227,217,189,0.12)',
              maxWidth: '620px',
              marginTop: '4rem',
              marginBottom: '3rem',
            }}
          />
          <article className="prose-note" style={{ maxWidth: '620px' }}>
            <MDXRemote source={item.content} />
          </article>
        </>
      )}

      <div style={{ height: '8rem' }} />
    </div>
  )
}
