import { getHomePage } from '@/lib/pages'
import { getAllVoices } from '@/lib/voices'
import HeroParallax from '@/components/HeroParallax'
import NewsletterSignup from '@/components/NewsletterSignup'

export default function Home() {
  const page = getHomePage()
  const voices = getAllVoices()
  const featuredVoice = voices[0] ?? null

  return (
    <div className="page-enter">

      {/* ── Full-bleed hero ───────────────────────────────────── */}
      <HeroParallax
        src={page.heroImage ?? null}
        headline={page.headline}
        subheadline={page.subheadline}
      />

      {/* ── Practice ──────────────────────────────────────────── */}
      <div className="mx-auto max-w-page px-6 md:px-10">
        <div style={{ height: '6rem' }} />

        <section aria-labelledby="practice-label">
          <p
            id="practice-label"
            className="font-inter font-medium uppercase tracking-label mb-8"
            style={{ fontSize: '11px', opacity: 0.55 }}
          >
            Practice
          </p>

          <ul className="list-none m-0 p-0" role="list">
            {page.practiceItems.map((item, i) => (
              <li
                key={item}
                className="font-fraunces font-normal text-birch"
                style={{
                  fontSize: '1.375rem',
                  lineHeight: 1.5,
                  paddingTop: '1.25rem',
                  paddingBottom: '1.25rem',
                  borderTop: i === 0 ? '1px solid rgba(227,217,189,0.12)' : undefined,
                  borderBottom: '1px solid rgba(227,217,189,0.12)',
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* ── One Voice ─────────────────────────────────────────── */}
        {featuredVoice && (
          <>
            <div style={{ height: '6rem' }} />
            <div style={{ borderTop: '1px solid rgba(227,217,189,0.12)', paddingTop: '6rem' }}>
              <div className="flex flex-col items-center text-center mx-auto" style={{ maxWidth: '600px' }}>
                <p
                  className="font-fraunces italic text-birch"
                  style={{ fontSize: '1.375rem', lineHeight: 1.7 }}
                >
                  {featuredVoice.quote}
                </p>
                <p
                  className="font-inter mt-6 text-birch"
                  style={{ fontSize: '13px', opacity: 0.55 }}
                >
                  — {featuredVoice.name}{featuredVoice.title ? `, ${featuredVoice.title}` : ''}
                </p>
              </div>
            </div>
          </>
        )}

        <div style={{ height: '6rem' }} />
        <NewsletterSignup />
        <div style={{ height: '6rem' }} />
      </div>
    </div>
  )
}
