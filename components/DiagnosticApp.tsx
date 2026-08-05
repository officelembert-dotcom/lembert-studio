'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'

interface Question {
  id: string
  name: string
  inquiry: string
  insight: string
}
interface Axis {
  id: string
  title: string
  attribution: string
  framing: string
  questions: Question[]
}
interface Band {
  min: number
  max: number
  title: string
  subtitle: string
  reality: string
  correction: string
}
export interface DiagnosticContent {
  intro: {
    title: string
    subtitle: string
    framing: string[]
    axesSummary: { title: string; text: string }[]
    instruction: string
    startButton: string
    timeEstimate: string
  }
  scale: { min: number; max: number; minLabel: string; maxLabel: string }
  axes: Axis[]
  emailGate: {
    heading: string
    body: string
    privacyNote: string
    button: string
    emailPlaceholder: string
    emailError: string
  }
  bands: Band[]
  results: {
    totalLabel: string
    realityLabel: string
    correctionLabel: string
    subscoresLabel: string
    weakestLabel: string
    weakestTiedLabel: string
    insightsLabel: string
    ctaText: string
    ctaButton: string
    ctaHref: string
  }
  ui: { progressOf: string; back: string; next: string; questionCountNote: string }
}

// Analytics: the site has no analytics provider yet. This forwards to one if
// it ever appears (Vercel Analytics / Plausible / gtag), otherwise it is a no-op.
function track(event: string) {
  if (typeof window === 'undefined') return
  const w = window as any
  try {
    if (typeof w.va === 'function') w.va('event', { name: event })
    else if (typeof w.plausible === 'function') w.plausible(event)
    else if (typeof w.gtag === 'function') w.gtag('event', event)
  } catch {
    /* analytics must never break the flow */
  }
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const border = '1px solid rgba(227,217,189,0.12)'

export default function DiagnosticApp({ content }: { content: DiagnosticContent }) {
  const questions = useMemo(
    () =>
      content.axes.flatMap((axis) =>
        axis.questions.map((q) => ({ ...q, axisId: axis.id, axisTitle: axis.title }))
      ),
    [content]
  )
  const total = questions.length

  const [step, setStep] = useState<'intro' | 'questions' | 'gate' | 'results'>('intro')
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>(Array(total).fill(null))
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const axisScores = content.axes.map((axis) => {
    const idxs = questions
      .map((q, i) => (q.axisId === axis.id ? i : -1))
      .filter((i) => i >= 0)
    return {
      id: axis.id,
      title: axis.title,
      score: idxs.reduce((sum, i) => sum + (answers[i] ?? 0), 0),
    }
  })
  const grandTotal = axisScores.reduce((s, a) => s + a.score, 0)
  const minScore = Math.min(...axisScores.map((a) => a.score))
  const weakestAxes = axisScores.filter((a) => a.score === minScore)
  const band =
    content.bands.find((b) => grandTotal >= b.min && grandTotal <= b.max) ?? content.bands[0]

  const start = () => {
    track('diagnostic_started')
    setStep('questions')
  }

  const answer = (value: number) => {
    const next = [...answers]
    next[index] = value
    setAnswers(next)
    if (index + 1 < total) {
      setIndex(index + 1)
    } else {
      track('diagnostic_completed')
      setStep('gate')
    }
  }

  const submitEmail = (e: React.FormEvent) => {
    e.preventDefault()
    if (!EMAIL_RE.test(email.trim())) {
      setEmailError(true)
      return
    }
    setEmailError(false)
    setSubmitting(true)
    track('diagnostic_email_submitted')

    const payload = {
      email: email.trim(),
      grandTotal,
      axisScores: axisScores.map((a) => a.score),
      band: band.title,
      weakestAxis: weakestAxes.map((a) => a.title).join(' + '),
    }
    fetch('/api/diagnostic', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true,
    }).catch((err) => console.error('diagnostic sheet write failed', err))

    setStep('results')
  }

  const label = (text: string) => (
    <p
      className="font-inter font-medium uppercase tracking-label mb-6"
      style={{ fontSize: '11px', opacity: 0.55 }}
    >
      {text}
    </p>
  )

  /* ── Intro ─────────────────────────────────────────────────── */
  if (step === 'intro') {
    return (
      <div>
        {label(content.ui.questionCountNote + ' · ' + content.intro.timeEstimate)}
        <h1
          className="font-fraunces font-normal text-birch mb-4"
          style={{ fontSize: 'clamp(1.875rem, 4.5vw, 2.75rem)', lineHeight: 1.12, letterSpacing: '-0.025em', maxWidth: '680px' }}
        >
          {content.intro.title}
        </h1>
        <p
          className="font-fraunces italic text-birch mb-10"
          style={{ fontSize: '1.0625rem', lineHeight: 1.6, opacity: 0.6, maxWidth: '560px' }}
        >
          {content.intro.subtitle}
        </p>
        {content.intro.framing.map((p, i) => (
          <p
            key={i}
            className="font-fraunces font-normal text-birch mb-6"
            style={{ fontSize: '1.0625rem', lineHeight: 1.8, opacity: 0.85, maxWidth: '620px' }}
          >
            {p}
          </p>
        ))}
        <div className="space-y-4 mb-10" style={{ maxWidth: '620px' }}>
          {content.intro.axesSummary.map((a) => (
            <p
              key={a.title}
              className="font-fraunces font-normal text-birch"
              style={{ fontSize: '1rem', lineHeight: 1.7, opacity: 0.85 }}
            >
              <span style={{ color: 'var(--amber)' }}>{a.title}.</span>{' '}
              <span style={{ opacity: 0.85 }}>{a.text}</span>
            </p>
          ))}
        </div>
        <p
          className="font-fraunces font-normal text-birch mb-12"
          style={{ fontSize: '1rem', lineHeight: 1.75, opacity: 0.6, maxWidth: '620px' }}
        >
          {content.intro.instruction}
        </p>
        <button
          onClick={start}
          className="inline-block font-inter font-medium uppercase"
          style={{
            backgroundColor: 'var(--amber)',
            color: 'var(--surface)',
            padding: '0.875rem 2.25rem',
            fontSize: '13px',
            letterSpacing: '0.08em',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          {content.intro.startButton}
        </button>
      </div>
    )
  }

  /* ── Questions ─────────────────────────────────────────────── */
  if (step === 'questions') {
    const q = questions[index]
    return (
      <div>
        <div className="flex items-center justify-between mb-10">
          {label(q.axisTitle)}
          <p className="font-inter shrink-0" style={{ fontSize: '12px', opacity: 0.45 }}>
            {index + 1} {content.ui.progressOf} {total}
          </p>
        </div>

        <div
          aria-hidden="true"
          style={{ height: '2px', background: 'rgba(227,217,189,0.1)', marginBottom: '3.5rem' }}
        >
          <div
            style={{
              height: '2px',
              width: `${((index + 1) / total) * 100}%`,
              background: 'var(--amber)',
              transition: 'width 0.3s ease',
            }}
          />
        </div>

        <p
          className="font-inter font-medium uppercase tracking-label mb-4"
          style={{ fontSize: '10px', color: 'var(--amber)', opacity: 0.85 }}
        >
          {q.name}
        </p>
        <p
          className="font-fraunces font-normal text-birch mb-12"
          style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', lineHeight: 1.55, maxWidth: '640px' }}
        >
          {q.inquiry}
        </p>

        <div role="radiogroup" aria-label={q.name} className="mb-4">
          <div className="flex gap-2 sm:gap-3" style={{ maxWidth: '480px' }}>
            {[1, 2, 3, 4, 5].map((v) => {
              const selected = answers[index] === v
              return (
                <button
                  key={v}
                  role="radio"
                  aria-checked={selected}
                  onClick={() => answer(v)}
                  className="font-fraunces flex-1 transition-all duration-200"
                  style={{
                    minHeight: '64px',
                    fontSize: '1.25rem',
                    color: selected ? 'var(--surface)' : 'var(--birch)',
                    background: selected ? 'var(--amber)' : 'transparent',
                    border: selected ? '1px solid var(--amber)' : border,
                    cursor: 'pointer',
                    opacity: selected ? 1 : 0.85,
                  }}
                >
                  {v}
                </button>
              )
            })}
          </div>
          <div
            className="flex justify-between font-inter mt-3"
            style={{ fontSize: '11px', opacity: 0.45, maxWidth: '480px' }}
          >
            <span style={{ maxWidth: '45%' }}>1 — {content.scale.minLabel}</span>
            <span style={{ maxWidth: '45%', textAlign: 'right' }}>5 — {content.scale.maxLabel}</span>
          </div>
        </div>

        <div className="mt-12">
          {index > 0 && (
            <button
              onClick={() => setIndex(index - 1)}
              className="font-inter text-birch"
              style={{ fontSize: '13px', opacity: 0.5, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              ← {content.ui.back}
            </button>
          )}
        </div>
      </div>
    )
  }

  /* ── Email gate ────────────────────────────────────────────── */
  if (step === 'gate') {
    return (
      <div style={{ maxWidth: '480px' }}>
        {label('12 / 12')}
        <h2
          className="font-fraunces font-normal text-birch mb-4"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}
        >
          {content.emailGate.heading}
        </h2>
        <p
          className="font-fraunces font-normal text-birch mb-8"
          style={{ fontSize: '1.0625rem', lineHeight: 1.7, opacity: 0.85 }}
        >
          {content.emailGate.body}
        </p>
        <form onSubmit={submitEmail} noValidate>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={content.emailGate.emailPlaceholder}
            aria-label="Email address"
            className="font-inter block w-full mb-3"
            style={{
              background: 'transparent',
              border,
              color: 'var(--birch)',
              padding: '0.875rem 1rem',
              fontSize: '16px',
              outline: 'none',
            }}
          />
          {emailError && (
            <p className="font-inter mb-3" style={{ fontSize: '12px', color: 'var(--amber)' }}>
              {content.emailGate.emailError}
            </p>
          )}
          <button
            type="submit"
            disabled={submitting}
            className="font-inter font-medium uppercase w-full sm:w-auto"
            style={{
              backgroundColor: 'var(--amber)',
              color: 'var(--surface)',
              padding: '0.875rem 2.25rem',
              fontSize: '13px',
              letterSpacing: '0.08em',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            {content.emailGate.button}
          </button>
        </form>
        <p className="font-inter mt-6" style={{ fontSize: '12px', lineHeight: 1.6, opacity: 0.45 }}>
          {content.emailGate.privacyNote}
        </p>
      </div>
    )
  }

  /* ── Results ───────────────────────────────────────────────── */
  const weakestIds = weakestAxes.map((a) => a.id)
  return (
    <div style={{ maxWidth: '680px' }}>
      {label(content.results.totalLabel)}
      <p className="font-fraunces text-birch mb-2" style={{ fontSize: '3rem', lineHeight: 1 }}>
        {grandTotal}
        <span style={{ fontSize: '1.25rem', opacity: 0.45 }}> / 60</span>
      </p>
      <h2
        className="font-fraunces font-normal text-birch mb-1"
        style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}
      >
        {band.title}
      </h2>
      <p className="font-fraunces italic mb-10" style={{ fontSize: '1.0625rem', opacity: 0.55 }}>
        {band.subtitle}
      </p>

      <p
        className="font-inter font-medium uppercase tracking-label mb-3"
        style={{ fontSize: '10px', color: 'var(--amber)', opacity: 0.85 }}
      >
        {content.results.realityLabel}
      </p>
      <p className="font-fraunces text-birch mb-8" style={{ fontSize: '1.0625rem', lineHeight: 1.8, opacity: 0.85 }}>
        {band.reality}
      </p>
      <p
        className="font-inter font-medium uppercase tracking-label mb-3"
        style={{ fontSize: '10px', color: 'var(--amber)', opacity: 0.85 }}
      >
        {content.results.correctionLabel}
      </p>
      <p className="font-fraunces text-birch mb-14" style={{ fontSize: '1.0625rem', lineHeight: 1.8, opacity: 0.85 }}>
        {band.correction}
      </p>

      <div style={{ borderTop: border, paddingTop: '2.5rem', marginBottom: '3.5rem' }}>
        {label(content.results.subscoresLabel)}
        <div className="space-y-5">
          {axisScores.map((a) => {
            const weakest = weakestIds.includes(a.id)
            return (
              <div key={a.id}>
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <p
                    className="font-fraunces text-birch"
                    style={{ fontSize: '1rem', opacity: weakest ? 1 : 0.7 }}
                  >
                    {a.title}
                    {weakest && (
                      <span
                        className="font-inter font-medium uppercase tracking-label ml-3"
                        style={{ fontSize: '9px', color: 'var(--amber)' }}
                      >
                        {weakestAxes.length > 1
                          ? content.results.weakestTiedLabel
                          : content.results.weakestLabel}
                      </span>
                    )}
                  </p>
                  <p className="font-inter shrink-0" style={{ fontSize: '13px', opacity: 0.55 }}>
                    {a.score} / 20
                  </p>
                </div>
                <div style={{ height: '3px', background: 'rgba(227,217,189,0.1)' }}>
                  <div
                    style={{
                      height: '3px',
                      width: `${(a.score / 20) * 100}%`,
                      background: weakest ? 'var(--amber)' : 'rgba(227,217,189,0.45)',
                    }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div style={{ borderTop: border, paddingTop: '2.5rem', marginBottom: '3.5rem' }}>
        {label(content.results.insightsLabel)}
        <div className="space-y-3">
          {content.axes.map((axis) => (
            <details
              key={axis.id}
              open={weakestIds.includes(axis.id)}
              style={{ border, padding: '1.25rem 1.5rem' }}
            >
              <summary
                className="font-fraunces text-birch"
                style={{ fontSize: '1.0625rem', cursor: 'pointer', opacity: 0.9 }}
              >
                {axis.title}
              </summary>
              <div className="space-y-6 mt-6">
                {axis.questions.map((q) => (
                  <div key={q.id}>
                    <p
                      className="font-inter font-medium uppercase tracking-label mb-2"
                      style={{ fontSize: '10px', color: 'var(--amber)', opacity: 0.85 }}
                    >
                      {q.name}
                    </p>
                    <p
                      className="font-fraunces text-birch"
                      style={{ fontSize: '0.9375rem', lineHeight: 1.75, opacity: 0.75 }}
                    >
                      {q.insight}
                    </p>
                  </div>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>

      <div style={{ borderTop: border, paddingTop: '2.5rem' }}>
        <p className="font-fraunces text-birch mb-6" style={{ fontSize: '1.125rem', opacity: 0.9 }}>
          {content.results.ctaText}
        </p>
        <Link
          href={content.results.ctaHref}
          className="inline-block font-inter font-medium uppercase no-underline"
          style={{
            backgroundColor: 'var(--amber)',
            color: 'var(--surface)',
            padding: '0.875rem 2.25rem',
            fontSize: '13px',
            letterSpacing: '0.08em',
          }}
        >
          {content.results.ctaButton}
        </Link>
      </div>
    </div>
  )
}
