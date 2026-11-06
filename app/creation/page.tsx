import fs from 'fs'
import path from 'path'

interface CreationContent {
  label: string
  title: string
  pairs: string[]
  opening: string[]
  questions: string[]
  callToQuestion: string
  qualificationsLabel: string
  qualifications: string[]
  notForLabel: string
  notFor: string[]
  logisticsLabel: string
  logistics: string[]
  promiseLabel: string
  promise: string
  voicesLabel: string
  voices: { quote: string; name: string; title: string }[]
  closing: string
  details: { label: string; value: string }[]
  ctaButton: string
  email: string
}

const content: CreationContent = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), 'content', 'creation.json'), 'utf-8')
)

export const metadata = {
  title: 'A Year of Creation — Lembert Studio Program 2027',
  description:
    'Ten months creating what you actually want, and letting go of what is no longer needed, with a group of business owners playing full out. Max 10 spots. Starts February 2027.',
  robots: { index: false, follow: false },
  openGraph: {
    title: 'A Year of Creation',
    description: 'Results and peace. Wealth and presence. Max 8 places, 2027.',
  },
}

const CTA_HREF =
  `mailto:${content.email}` +
  '?subject=' + encodeURIComponent('A Year of Creation — let us talk') +
  '&body=' + encodeURIComponent(
    'Hi Moritz,\n\nSomething in this resonates.\n\nMy name is: \nMy business is: \nWhat I want to create next year: \n'
  )

const border = '1px solid rgba(227,217,189,0.12)'

export default function CreationPage() {
  return (
    <div className="page-enter mx-auto max-w-page px-6 md:px-10">
      <div style={{ height: '7rem' }} />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <p
        className="font-inter font-medium uppercase tracking-label mb-8"
        style={{ fontSize: '11px', opacity: 0.55 }}
      >
        {content.label}
      </p>

      <h1
        className="font-fraunces font-normal text-birch mb-14"
        style={{
          fontSize: 'clamp(2.25rem, 5.5vw, 3.75rem)',
          lineHeight: 1.08,
          letterSpacing: '-0.025em',
          maxWidth: '720px',
        }}
      >
        {content.title}
      </h1>

      {/* ── Both, fully ───────────────────────────────────────── */}
      <ul className="list-none m-0 p-0 mb-16" role="list" style={{ maxWidth: '520px' }}>
        {content.pairs.map((item, i) => (
          <li
            key={item}
            style={{
              borderTop: i === 0 ? border : undefined,
              borderBottom: border,
              paddingTop: '1.05rem',
              paddingBottom: '1.05rem',
            }}
          >
            <span
              className="font-fraunces font-normal text-birch"
              style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', lineHeight: 1.3 }}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>

      {/* ── Opening ───────────────────────────────────────────── */}
      <div className="space-y-6 mb-14" style={{ maxWidth: '620px' }}>
        {content.opening.map((p, i) => (
          <p
            key={i}
            className="font-fraunces font-normal text-birch"
            style={{ fontSize: '1.0625rem', lineHeight: 1.8, opacity: 0.85 }}
          >
            {p}
          </p>
        ))}
      </div>

      {/* ── Questions ─────────────────────────────────────────── */}
      <div
        className="space-y-6 mb-10"
        style={{ maxWidth: '620px', borderLeft: '2px solid var(--amber)', paddingLeft: '1.75rem' }}
      >
        {content.questions.map((q, i) => (
          <p
            key={i}
            className="font-fraunces italic text-birch"
            style={{ fontSize: '1.125rem', lineHeight: 1.75, opacity: 0.9 }}
          >
            {q}
          </p>
        ))}
      </div>

      <p
        className="font-fraunces font-normal text-birch mb-16"
        style={{ fontSize: 'clamp(1.375rem, 3vw, 1.625rem)', lineHeight: 1.4, maxWidth: '620px' }}
      >
        {content.callToQuestion}
      </p>

      <div style={{ borderTop: border, maxWidth: '720px' }} />

      {/* ── Qualifications ────────────────────────────────────── */}
      <section style={{ paddingTop: '4rem', paddingBottom: '4rem', maxWidth: '620px' }}>
        <p
          className="font-inter font-medium uppercase tracking-label mb-8"
          style={{ fontSize: '11px', opacity: 0.55 }}
        >
          {content.qualificationsLabel}
        </p>
        <div className="space-y-5">
          {content.qualifications.map((p, i) => (
            <p
              key={i}
              className="font-fraunces font-normal text-birch"
              style={{ fontSize: '1.0625rem', lineHeight: 1.8, opacity: 0.85 }}
            >
              {p}
            </p>
          ))}
        </div>
      </section>

      <div style={{ borderTop: border, maxWidth: '720px' }} />

      {/* ── Not for you if ────────────────────────────────────── */}
      <section style={{ paddingTop: '4rem', paddingBottom: '4rem', maxWidth: '620px' }}>
        <p
          className="font-inter font-medium uppercase tracking-label mb-8"
          style={{ fontSize: '11px', opacity: 0.55 }}
        >
          {content.notForLabel}
        </p>
        <ul className="list-none m-0 p-0 space-y-4" role="list">
          {content.notFor.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span
                className="font-inter shrink-0"
                style={{ opacity: 0.25, marginTop: '0.35rem' }}
                aria-hidden="true"
              >
                —
              </span>
              <span
                className="font-fraunces font-normal text-birch"
                style={{ fontSize: '1rem', lineHeight: 1.75, opacity: 0.45 }}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <div style={{ borderTop: border, maxWidth: '720px' }} />

      {/* ── Logistics + promise ───────────────────────────────── */}
      <section style={{ paddingTop: '4rem', paddingBottom: '4rem', maxWidth: '620px' }}>
        <p
          className="font-inter font-medium uppercase tracking-label mb-8"
          style={{ fontSize: '11px', opacity: 0.55 }}
        >
          {content.logisticsLabel}
        </p>

        <ul className="list-none m-0 p-0" role="list" style={{ maxWidth: '520px' }}>
          {content.logistics.map((item, i) => (
            <li
              key={item}
              style={{
                borderTop: i === 0 ? border : undefined,
                borderBottom: border,
                paddingTop: '0.9rem',
                paddingBottom: '0.9rem',
              }}
            >
              <span
                className="font-fraunces font-normal text-birch"
                style={{ fontSize: '1.0625rem', lineHeight: 1.6, opacity: 0.85 }}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>

        <div
          className="mt-10"
          style={{ borderLeft: '2px solid var(--amber)', paddingLeft: '1.75rem' }}
        >
          <p
            className="font-inter font-medium uppercase tracking-label mb-3"
            style={{ fontSize: '10px', opacity: 0.55 }}
          >
            {content.promiseLabel}
          </p>
          <p
            className="font-fraunces font-normal text-birch"
            style={{ fontSize: '1.0625rem', lineHeight: 1.8, opacity: 0.9 }}
          >
            {content.promise}
          </p>
        </div>
      </section>

      <div style={{ borderTop: border, maxWidth: '720px' }} />

      {/* ── Voices ────────────────────────────────────────────── */}
      <section style={{ paddingTop: '4rem', paddingBottom: '4rem', maxWidth: '620px' }}>
        <p
          className="font-inter font-medium uppercase tracking-label mb-10"
          style={{ fontSize: '11px', opacity: 0.55 }}
        >
          {content.voicesLabel}
        </p>
        <div className="space-y-12">
          {content.voices.map((v) => (
            <figure key={v.name} className="m-0">
              <blockquote className="m-0 p-0">
                <p
                  className="font-fraunces font-normal text-birch"
                  style={{ fontSize: '1.0625rem', lineHeight: 1.8, opacity: 0.85 }}
                >
                  {v.quote}
                </p>
              </blockquote>
              <figcaption
                className="font-inter font-medium uppercase tracking-label mt-5"
                style={{ fontSize: '10px', opacity: 0.45 }}
              >
                {v.name}
                {v.title ? ` · ${v.title}` : ''}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <div style={{ borderTop: border, maxWidth: '720px' }} />

      {/* ── Closing + details + CTA ───────────────────────────── */}
      <section style={{ paddingTop: '4.5rem', paddingBottom: '9rem' }}>
        <p
          className="font-fraunces font-normal text-birch mb-12"
          style={{
            fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
            lineHeight: 1.55,
            maxWidth: '560px',
          }}
        >
          {content.closing}
        </p>

        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 mb-12"
          style={{ maxWidth: '620px' }}
        >
          {content.details.map((d) => (
            <div key={d.label}>
              <p
                className="font-inter font-medium uppercase tracking-label mb-2"
                style={{ fontSize: '10px', opacity: 0.45 }}
              >
                {d.label}
              </p>
              <p
                className="font-fraunces font-normal text-birch"
                style={{ fontSize: '1.125rem', lineHeight: 1.4 }}
              >
                {d.value}
              </p>
            </div>
          ))}
        </div>

        <a
          href={CTA_HREF}
          className="inline-block font-inter font-medium uppercase no-underline"
          style={{
            backgroundColor: 'var(--amber)',
            color: 'var(--surface)',
            padding: '0.875rem 2.25rem',
            fontSize: '13px',
            letterSpacing: '0.08em',
          }}
        >
          {content.ctaButton}
        </a>

        <p className="font-inter text-birch mt-6" style={{ fontSize: '13px', opacity: 0.5 }}>
          {content.email}
        </p>
      </section>
    </div>
  )
}
