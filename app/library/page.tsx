import Link from 'next/link'
import { getAllLibraryItems } from '@/lib/library'

export const metadata = {
  title: 'Library — Workbooks, guides, and audio',
  description: 'Free workbooks, guides, and audio from Moritz Lembert. For founders and owners building a future we want to live in. Download, share, and pass on.',
  openGraph: {
    title: 'Library — Lembert Studio',
    description: 'Workbooks, guides, and audio. Free to download and pass on.',
  },
}

const typeLabels: Record<string, string> = {
  workbook: 'Workbook',
  guide: 'Guide',
  audio: 'Audio',
}

export default function Library() {
  const items = getAllLibraryItems('en')

  return (
    <div className="page-enter mx-auto max-w-page px-6 md:px-10">
      <div style={{ height: '6rem' }} />

      <p
        className="font-inter font-medium uppercase tracking-label mb-6"
        style={{ fontSize: '11px', opacity: 0.55 }}
      >
        Library
      </p>

      <h1
        className="font-fraunces font-normal text-birch mb-4"
        style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: 1.1, letterSpacing: '-0.025em' }}
      >
        Library
      </h1>

      <p
        className="font-fraunces italic mb-16"
        style={{ fontSize: '1rem', lineHeight: 1.65, opacity: 0.55 }}
      >
        Workbooks, guides, and audio. Free to download, keep, and pass on.
      </p>

      {items.length === 0 ? (
        <p className="font-inter" style={{ fontSize: '0.9375rem', opacity: 0.45 }}>
          Nothing here yet.
        </p>
      ) : (
        <ul className="list-none m-0 p-0 max-w-[680px]" role="list">
          {items.map((item, i) => (
            <li
              key={item.slug}
              style={{
                borderTop: i === 0 ? '1px solid rgba(227,217,189,0.12)' : undefined,
                borderBottom: '1px solid rgba(227,217,189,0.12)',
              }}
            >
              <Link
                href={`/library/${item.slug}`}
                className="group block no-underline"
                style={{ paddingTop: '2rem', paddingBottom: '2rem' }}
              >
                <p
                  className="font-inter font-medium uppercase tracking-label mb-3"
                  style={{ fontSize: '10px', color: 'var(--amber)', opacity: 0.85 }}
                >
                  {typeLabels[item.type] ?? item.type}
                </p>
                <div className="flex items-start justify-between gap-6">
                  <h2
                    className="font-fraunces font-normal text-birch mb-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2"
                    style={{ fontSize: '1.5rem', lineHeight: 1.25, opacity: 0.85 }}
                  >
                    {item.title}
                  </h2>
                  <span
                    className="font-inter text-birch transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 shrink-0 mt-1"
                    style={{ fontSize: '1.125rem', opacity: 0.45 }}
                    aria-hidden="true"
                  >
                    →
                  </span>
                </div>
                <p
                  className="font-inter font-normal text-birch"
                  style={{ fontSize: '0.9375rem', lineHeight: 1.7, opacity: 0.6, maxWidth: '560px' }}
                >
                  {item.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}

      <div style={{ height: '8rem' }} />
    </div>
  )
}
