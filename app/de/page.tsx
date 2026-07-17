import Link from 'next/link'
import Image from 'next/image'
import { getHomePageDe } from '@/lib/pages'
import { getAllVoices } from '@/lib/voices'
import { getAllWritings } from '@/lib/writings'
import { getAllNotes } from '@/lib/notes'
import { dict } from '@/lib/i18n'
import HeroParallax from '@/components/HeroParallax'
import NewsletterSignup from '@/components/NewsletterSignup'

export const metadata = {
  title: 'Moritz Lembert — Advisor & Executive Coach für Gründer & CEOs, Schweiz',
  description:
    'Ich arbeite mit Menschen, die an einer Zukunft bauen, in der wir leben wollen. Advisor und Executive Coach für Gründer, Inhaber und erfahrene Führungsleute, Schweiz und DACH.',
  openGraph: {
    title: 'Moritz Lembert — Advisor & Executive Coach für Gründer & CEOs',
    description: 'Ich arbeite mit Menschen, die an einer Zukunft bauen, in der wir leben wollen.',
  },
  alternates: {
    canonical: 'https://lembertstudio.com/de',
    languages: {
      'en-GB': 'https://lembertstudio.com',
      'de-CH': 'https://lembertstudio.com/de',
    },
  },
}

const practiceLinks: Record<string, string> = {
  'outcome based coaching':             '/de/work/outcome-based-coaching',
  'retained advisory':                  '/de/work/retained-advisory',
  'deep day':                           '/de/work/deep-day',
  'retreats im rheintal':               '/de/work/retreats',
  'retreats in der schweiz und europa': '/de/work/retreats',
}

export default function HomeDe() {
  const page = getHomePageDe()
  const voices = getAllVoices('de')
  const highlightVoices = voices.filter((v) => v.highlight).slice(0, 2)
  const latestWriting = getAllWritings('de')[0] ?? null
  const latestNote = getAllNotes()[0] ?? null
  const latestItems = [
    latestWriting && { label: 'Essay', title: latestWriting.title, href: `/de/writings/${latestWriting.slug}` },
    latestNote && { label: 'Notiz', title: latestNote.title, href: `/de/notes/${latestNote.slug}` },
  ].filter(Boolean) as { label: string; title: string; href: string }[]
  const t = dict.de

  return (
    <div className="page-enter">

      {/* ── Full-bleed hero ───────────────────────────────────── */}
      <HeroParallax
        src={page.heroImage ?? null}
        headline={page.headline}
        subheadline={page.subheadline}
      />

      {/* ── Newsletter + portrait ─────────────────────────────── */}
      <div className="mx-auto max-w-page px-6 md:px-10">
        <div style={{ height: '6rem' }} />

        <section
          aria-labelledby="newsletter-label"
          className="flex items-center gap-12"
        >
          <div className="flex-1">
            <p
              id="newsletter-label"
              className="font-inter font-medium uppercase tracking-label mb-6"
              style={{ fontSize: '11px', opacity: 0.55 }}
            >
              {t.stayClose}
            </p>
            <p
              className="font-fraunces font-normal text-birch mb-8"
              style={{ fontSize: '1.125rem', lineHeight: 1.65, maxWidth: '460px', opacity: 0.85 }}
            >
              {page.newsletterIntro}
            </p>
            <NewsletterSignup label="" placeholder="deine@email.com" language="de" />
          </div>

          {/* Portrait — fades into background via mask, links to About */}
          <Link
            href="/de/about"
            className="hidden md:block shrink-0 no-underline group"
          >
            <span className="block relative" style={{ width: '200px', height: '260px' }}>
              <Image
                src="/images/portrait.jpeg"
                alt="Moritz Lembert"
                fill
                sizes="200px"
                className="object-cover object-top"
                style={{
                  maskImage: 'radial-gradient(ellipse 85% 85% at 50% 45%, black 30%, transparent 75%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 85% 85% at 50% 45%, black 30%, transparent 75%)',
                }}
              />
            </span>
            <span
              className="block text-center font-fraunces font-normal text-birch transition-all duration-300 group-hover:opacity-100"
              style={{ fontSize: '1rem', opacity: 0.7, marginTop: '-0.5rem' }}
            >
              Moritz Lembert
            </span>
          </Link>
        </section>

        {/* ── Latest ────────────────────────────────────────────── */}
        {latestItems.length > 0 && (
          <>
            <div style={{ height: '5rem' }} />
            <section
              aria-labelledby="latest-label"
              style={{ borderTop: '1px solid rgba(227,217,189,0.12)', paddingTop: '3rem' }}
            >
              <p
                id="latest-label"
                className="font-inter font-medium uppercase tracking-label mb-8"
                style={{ fontSize: '11px', opacity: 0.55 }}
              >
                Aktuell
              </p>
              <ul className="list-none m-0 p-0" role="list">
                {latestItems.map((entry, i) => (
                  <li
                    key={entry.href}
                    style={{
                      borderTop: i === 0 ? '1px solid rgba(227,217,189,0.12)' : undefined,
                      borderBottom: '1px solid rgba(227,217,189,0.12)',
                    }}
                  >
                    <Link
                      href={entry.href}
                      className="group flex items-baseline justify-between gap-6 no-underline"
                      style={{ paddingTop: '1.1rem', paddingBottom: '1.1rem' }}
                    >
                      <span className="flex items-baseline gap-6 min-w-0">
                        <span
                          className="font-inter font-medium uppercase tracking-label shrink-0 hidden sm:inline"
                          style={{ fontSize: '10px', opacity: 0.4, minWidth: '52px' }}
                        >
                          {entry.label}
                        </span>
                        <span
                          className="font-fraunces font-normal text-birch transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2 truncate"
                          style={{ fontSize: '1.1875rem', lineHeight: 1.5, opacity: 0.85 }}
                        >
                          {entry.title}
                        </span>
                      </span>
                      <span
                        className="font-inter text-birch transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 shrink-0"
                        style={{ fontSize: '1rem', opacity: 0.45 }}
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </>
        )}

        {/* ── Practice ──────────────────────────────────────────── */}
        <div style={{ height: '5rem' }} />

        <section
          aria-labelledby="practice-label"
          style={{ borderTop: '1px solid rgba(227,217,189,0.12)', paddingTop: '3rem' }}
        >
          <p
            id="practice-label"
            className="font-inter font-medium uppercase tracking-label mb-8"
            style={{ fontSize: '11px', opacity: 0.55 }}
          >
            {t.practice}
          </p>

          <ul className="list-none m-0 p-0" role="list">
            {page.practiceItems.map((item, i) => (
              <li
                key={item}
                style={{
                  borderTop: i === 0 ? '1px solid rgba(227,217,189,0.12)' : undefined,
                  borderBottom: '1px solid rgba(227,217,189,0.12)',
                }}
              >
                <Link
                  href={practiceLinks[item.toLowerCase()] ?? '/de/work'}
                  className="group flex items-center justify-between no-underline"
                  style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem' }}
                >
                  <span
                    className="font-fraunces font-normal text-birch transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2"
                    style={{ fontSize: '1.375rem', lineHeight: 1.5, opacity: 0.85 }}
                  >
                    {item}
                  </span>
                  <span
                    className="font-inter text-birch transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 ml-6 shrink-0"
                    style={{ fontSize: '1rem', opacity: 0.45 }}
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* ── One Voice ─────────────────────────────────────────── */}
        {highlightVoices.length > 0 && (
          <>
            <div style={{ height: '6rem' }} />
            <div style={{ borderTop: '1px solid rgba(227,217,189,0.12)', paddingTop: '6rem' }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-16">
                {highlightVoices.map((voice) => (
                  <div key={voice.slug} className="flex flex-col">
                    <p
                      className="font-fraunces italic text-birch"
                      style={{ fontSize: '1.25rem', lineHeight: 1.7 }}
                    >
                      "{voice.highlight}"
                    </p>
                    <p
                      className="font-inter mt-6 text-birch"
                      style={{ fontSize: '13px', opacity: 0.55 }}
                    >
                      — {voice.name}{voice.title ? `, ${voice.title}` : ''}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        <div style={{ height: '6rem' }} />
      </div>
    </div>
  )
}
