import Link from 'next/link'

export interface EssayPageData {
  label?: string
  title: string
  standfirst?: string
  paragraphs: string[]
  linkLabel?: string
  linkHref?: string
}

const border = '1px solid rgba(227,217,189,0.12)'

export default function EssayPage({
  page,
  backHref,
  backLabel,
}: {
  page: EssayPageData
  backHref: string
  backLabel: string
}) {
  return (
    <div className="page-enter mx-auto max-w-page px-6 md:px-10">
      <div style={{ height: '7rem' }} />

      {page.label && (
        <p
          className="font-inter font-medium uppercase tracking-label mb-8"
          style={{ fontSize: '11px', opacity: 0.55 }}
        >
          {page.label}
        </p>
      )}

      <h1
        className="font-fraunces font-normal text-birch"
        style={{
          fontSize: 'clamp(2.25rem, 5.5vw, 3.5rem)',
          lineHeight: 1.08,
          letterSpacing: '-0.025em',
          maxWidth: '720px',
        }}
      >
        {page.title}
      </h1>

      {page.standfirst && (
        <p
          className="font-fraunces italic text-birch mt-6"
          style={{ fontSize: '1.25rem', lineHeight: 1.6, opacity: 0.6, maxWidth: '560px' }}
        >
          {page.standfirst}
        </p>
      )}

      <div style={{ height: '4rem' }} />
      <div style={{ borderTop: border, maxWidth: '720px' }} />
      <div style={{ height: '4rem' }} />

      <div className="space-y-7" style={{ maxWidth: '620px' }}>
        {page.paragraphs.map((p, i) => (
          <p
            key={i}
            className="font-fraunces font-normal text-birch"
            style={{ fontSize: '1.0625rem', lineHeight: 1.85, opacity: 0.88 }}
          >
            {p}
          </p>
        ))}
      </div>

      {page.linkHref && page.linkLabel && (
        <div className="mt-14">
          <a
            href={page.linkHref}
            className="group inline-flex items-center gap-3 no-underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span
              className="font-fraunces font-normal text-birch transition-all duration-300 group-hover:translate-x-1"
              style={{ fontSize: '1rem', opacity: 0.85 }}
            >
              {page.linkLabel}
            </span>
            <span
              className="font-inter text-birch transition-all duration-300 group-hover:translate-x-1"
              style={{ fontSize: '13px', opacity: 0.45 }}
              aria-hidden="true"
            >
              →
            </span>
          </a>
        </div>
      )}

      <div style={{ height: '5rem' }} />
      <div style={{ borderTop: border, maxWidth: '720px', paddingTop: '2.5rem' }}>
        <Link
          href={backHref}
          className="font-inter text-birch no-underline"
          style={{ fontSize: '12px', opacity: 0.45 }}
        >
          ← {backLabel}
        </Link>
      </div>

      <div style={{ height: '8rem' }} />
    </div>
  )
}
