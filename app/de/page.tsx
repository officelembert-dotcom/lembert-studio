import Link from 'next/link'
import Image from 'next/image'
import { getHomePageDe } from '@/lib/pages'
import { getAllVoices } from '@/lib/voices'
import { getAllWritings } from '@/lib/writings'
import { getAllNotes } from '@/lib/notes'
import { dict } from '@/lib/i18n'
import HeroParallax from '@/components/HeroParallax'
import NewsletterSignup from '@/components/NewsletterSignup'

const practiceLinks: Record<string, string> = {
  'partnerschaft':                      '/de/work/outcome-based-coaching',
  'outcome based coaching':             '/de/work/outcome-based-coaching',
  'deep day':                           '/de/work/deep-day',
  'retreats im rheintal':               '/de/work/retreats',
  'retreats in der schweiz und europa': '/de/work/retreats',
}

export const metadata = {
  title: 'Moritz Lembert — Advisor & Executive Coach für Gründer & CEOs, Schweiz',
  description:
    'Games Worth Playing. Ich arbeite mit einem kleinen Kreis von Gründern als Denkpartner, Berater und Executive Coach. Schweiz und DACH.',
  openGraph: {
    title: 'Moritz Lembert — Advisor & Executive Coach für Gründer & CEOs',
    description: 'Die Entwicklung des Gründers. Die Entwicklung des Unternehmens.',
  },
  alternates: {
    canonical: 'https://lembertstudio.com/de',
    languages: {
      'en-GB': 'https://lembertstudio.com',
      'de-CH': 'https://lembertstudio.com/de',
    },
  },
}

const border = '1px solid rgba(227,217,189,0.12)'

export default function HomeDe() {
  const page = getHomePageDe()
  const t = dict.de
  const voices = getAllVoices('de')
  const highlightVoices = voices.filter((v) => v.highlight).slice(0, 2)
  const latestWriting = getAllWritings('de')[0] ?? null
  const latestNote = getAllNotes()[0] ?? null
  const latestItems = [
    latestWriting && { label: 'Essay', title: latestWriting.title, href: `/de/writings/${latestWriting.slug}` },
    latestNote && { label: 'Notiz', title: latestNote.title, href: `/de/notes/${latestNote.slug}` },
  ].filter(Boolean) as { label: string; title: string; href: string }[]

  return (
    <div className="page-enter">

      {/* ── Full-bleed hero ───────────────────────────────────── */}
      <HeroParallax
        src={page.heroImage ?? null}
        studioLine={page.studioLine}
        headlineLines={page.headlineLines}
        headline={page.headline}
        subheadline={page.subheadline}
      />

      <div className="mx-auto max-w-page px-6 md:px-10">

        {/* ── Program announcement (optional, CMS-controlled) ──── */}
        {page.announcementTitle && page.announcementHref && (
          <>
            <div style={{ height: '5rem' }} />
            <Link
              href={page.announcementHref}
              className="group block no-underline"
              style={{ borderTop: border, borderBottom: border, paddingTop: '2rem', paddingBottom: '2rem' }}
            >
              <div className="flex items-center justify-between gap-8">
                <div className="min-w-0">
                  {page.announcementLabel && (
                    <p className="font-inter font-medium uppercase tracking-label mb-4" style={{ fontSize: '11px', color: 'var(--amber)' }}>
                      {page.announcementLabel}
                    </p>
                  )}
                  <p
                    className="font-fraunces font-normal text-birch transition-all duration-300 group-hover:translate-x-2"
                    style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', lineHeight: 1.2, letterSpacing: '-0.015em' }}
                  >
                    {page.announcementTitle}
                  </p>
                  {page.announcementText && (
                    <p className="font-fraunces font-normal text-birch mt-3" style={{ fontSize: '1rem', lineHeight: 1.7, opacity: 0.6, maxWidth: '520px' }}>
                      {page.announcementText}
                    </p>
                  )}
                </div>
                <span className="font-inter text-birch shrink-0 transition-all duration-300 group-hover:translate-x-1" style={{ fontSize: '15px', opacity: 0.45 }} aria-hidden="true">
                  →
                </span>
              </div>
            </Link>
          </>
        )}

        {/* ── The work ──────────────────────────────────────────── */}
        {page.workParagraphs && page.workParagraphs.length > 0 && (
          <section aria-labelledby="work-label" style={{ paddingTop: '7rem' }}>
            <p id="work-label" className="font-inter font-medium uppercase tracking-label mb-8" style={{ fontSize: '11px', opacity: 0.55 }}>
              {page.workLabel}
            </p>
            <div className="space-y-7" style={{ maxWidth: '620px' }}>
              {page.workParagraphs.map((p, i) => (
                <p key={i} className="font-fraunces font-normal text-birch" style={{ fontSize: '1.125rem', lineHeight: 1.85, opacity: 0.88 }}>
                  {p}
                </p>
              ))}
            </div>
          </section>
        )}

        {/* ── Three dimensions ──────────────────────────────────── */}
        {page.dimensions && page.dimensions.length > 0 && (
          <section aria-labelledby="dimensions-label" style={{ paddingTop: '6rem' }}>
            <p id="dimensions-label" className="font-inter font-medium uppercase tracking-label mb-8" style={{ fontSize: '11px', opacity: 0.55 }}>
              {page.dimensionsLabel}
            </p>
            <ul className="list-none m-0 p-0" role="list" style={{ maxWidth: '620px' }}>
              {page.dimensions.map((d, i) => (
                <li
                  key={d.title}
                  style={{
                    borderTop: i === 0 ? border : undefined,
                    borderBottom: border,
                    paddingTop: '1.75rem',
                    paddingBottom: '1.75rem',
                  }}
                >
                  <p className="font-fraunces font-normal text-birch mb-3" style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', lineHeight: 1.3 }}>
                    {d.title}
                  </p>
                  <p className="font-fraunces font-normal text-birch" style={{ fontSize: '1.0625rem', lineHeight: 1.75, opacity: 0.6 }}>
                    {d.body}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* ── The long game ─────────────────────────────────────── */}
        {page.longGame && (
          <section aria-labelledby="longgame-label" style={{ paddingTop: '6rem' }}>
            <p id="longgame-label" className="font-inter font-medium uppercase tracking-label mb-8" style={{ fontSize: '11px', opacity: 0.55 }}>
              {page.longGameLabel}
            </p>
            <p className="font-fraunces font-normal text-birch" style={{ fontSize: '1.125rem', lineHeight: 1.85, opacity: 0.88, maxWidth: '620px' }}>
              {page.longGame}
            </p>
          </section>
        )}

        {/* ── How I work ────────────────────────────────────────── */}
        <section aria-labelledby="practice-label" style={{ paddingTop: '6rem' }}>
          <p id="practice-label" className="font-inter font-medium uppercase tracking-label mb-8" style={{ fontSize: '11px', opacity: 0.55 }}>
            {page.practiceLabel ?? t.practice}
          </p>

          {page.practiceIntro && (
            <p className="font-fraunces font-normal text-birch mb-10" style={{ fontSize: '1.0625rem', lineHeight: 1.8, opacity: 0.7, maxWidth: '620px' }}>
              {page.practiceIntro}
            </p>
          )}

          <ul className="list-none m-0 p-0" role="list" style={{ maxWidth: '620px' }}>
            {page.practiceItems.map((item, i) => (
              <li key={item} style={{ borderTop: i === 0 ? border : undefined, borderBottom: border }}>
                <Link
                  href={practiceLinks[item.toLowerCase()] ?? '/work'}
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

        {/* ── Voice highlights ──────────────────────────────────── */}
        {highlightVoices.length > 0 && (
          <section style={{ paddingTop: '6rem' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-16">
              {highlightVoices.map((voice) => (
                <div key={voice.slug} className="flex flex-col">
                  <p className="font-fraunces italic text-birch" style={{ fontSize: '1.25rem', lineHeight: 1.7 }}>
                    &ldquo;{voice.highlight}&rdquo;
                  </p>
                  <p className="font-inter mt-6 text-birch" style={{ fontSize: '13px', opacity: 0.55 }}>
                    — {voice.name}{voice.title ? `, ${voice.title}` : ''}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Latest ────────────────────────────────────────────── */}
        {latestItems.length > 0 && (
          <section aria-labelledby="latest-label" style={{ paddingTop: '6rem' }}>
            <p id="latest-label" className="font-inter font-medium uppercase tracking-label mb-8" style={{ fontSize: '11px', opacity: 0.55 }}>
              Aktuell
            </p>
            <ul className="list-none m-0 p-0" role="list">
              {latestItems.map((entry, i) => (
                <li key={entry.href} style={{ borderTop: i === 0 ? border : undefined, borderBottom: border }}>
                  <Link
                    href={entry.href}
                    className="group flex items-baseline justify-between gap-6 no-underline"
                    style={{ paddingTop: '1.1rem', paddingBottom: '1.1rem' }}
                  >
                    <span className="flex items-baseline gap-6 min-w-0">
                      <span className="font-inter font-medium uppercase tracking-label shrink-0 hidden sm:inline" style={{ fontSize: '10px', opacity: 0.4, minWidth: '52px' }}>
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
        )}

        {/* ── The human note ────────────────────────────────────── */}
        {page.humanNote && page.humanNote.length > 0 && (
          <section style={{ paddingTop: '7rem' }}>
            <div style={{ borderLeft: '2px solid var(--amber)', paddingLeft: '1.75rem', maxWidth: '620px' }}>
              {page.humanNote.map((p, i) => (
                <p
                  key={i}
                  className="font-fraunces font-normal text-birch"
                  style={{ fontSize: '1.125rem', lineHeight: 1.85, opacity: 0.9, marginTop: i === 0 ? 0 : '1.5rem' }}
                >
                  {p}
                </p>
              ))}
            </div>
          </section>
        )}

        {/* ── Invitation ────────────────────────────────────────── */}
        {page.invitation && (
          <section style={{ paddingTop: '6rem' }}>
            <p
              className="font-fraunces font-normal text-birch mb-10"
              style={{ fontSize: 'clamp(1.375rem, 3vw, 1.75rem)', lineHeight: 1.45, maxWidth: '560px', letterSpacing: '-0.015em' }}
            >
              {page.invitation}
            </p>
            <Link
              href="/de/contact"
              className="inline-block font-inter font-medium uppercase no-underline"
              style={{
                backgroundColor: 'var(--amber)',
                color: 'var(--surface)',
                padding: '0.875rem 2.25rem',
                fontSize: '13px',
                letterSpacing: '0.08em',
              }}
            >
              {page.invitationCta ?? 'Gespräch beginnen'}
            </Link>
          </section>
        )}

        {/* ── Newsletter + portrait ─────────────────────────────── */}
        <section aria-labelledby="newsletter-label" className="flex items-center gap-12" style={{ marginTop: '7rem', paddingTop: '4rem', borderTop: border }}>
          <div className="flex-1">
            <p id="newsletter-label" className="font-inter font-medium uppercase tracking-label mb-6" style={{ fontSize: '11px', opacity: 0.55 }}>
              {t.stayClose}
            </p>
            <p className="font-fraunces font-normal text-birch mb-8" style={{ fontSize: '1.125rem', lineHeight: 1.65, maxWidth: '460px', opacity: 0.85 }}>
              {page.newsletterIntro}
            </p>
            <NewsletterSignup label="" placeholder="deine@email.com" />
          </div>

          <Link href="/de/about" className="hidden md:block shrink-0 no-underline group">
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

        <div style={{ height: '6rem' }} />
      </div>
    </div>
  )
}
