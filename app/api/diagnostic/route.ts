import { NextResponse } from 'next/server'
import { getContactPage } from '@/lib/pages'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const AXIS_NAMES = [
  'Contextual Deck & Integrity',
  'Conversational Circuit & Somatics',
  'Cybernetic Architecture & VSM',
]

export async function POST(request: Request) {
  let body: any
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid json' }, { status: 400 })
  }

  const { email, grandTotal, axisScores, band, weakestAxis, newsletter } = body ?? {}

  if (typeof email !== 'string' || !EMAIL_RE.test(email.trim())) {
    return NextResponse.json({ ok: false, error: 'invalid email' }, { status: 400 })
  }
  if (
    typeof grandTotal !== 'number' ||
    grandTotal < 12 ||
    grandTotal > 60 ||
    !Array.isArray(axisScores) ||
    axisScores.length !== 3 ||
    !axisScores.every((s) => typeof s === 'number' && s >= 4 && s <= 20)
  ) {
    return NextResponse.json({ ok: false, error: 'invalid scores' }, { status: 400 })
  }

  const formspreeId = process.env.DIAGNOSTIC_FORMSPREE_ID || getContactPage().formspreeId
  if (!formspreeId) {
    console.error('diagnostic: no Formspree ID configured; lead not delivered', {
      email: email.trim(),
      grandTotal,
    })
    return NextResponse.json({ ok: true, delivered: false })
  }

  const cleanEmail = email.trim()

  try {
    const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        _subject: `Diagnostic: ${band ?? 'result'} (${grandTotal}/60) — ${cleanEmail}`,
        _replyto: cleanEmail,
        Email: cleanEmail,
        'Grand total': `${grandTotal} / 60`,
        Band: String(band ?? ''),
        [AXIS_NAMES[0]]: `${axisScores[0]} / 20`,
        [AXIS_NAMES[1]]: `${axisScores[1]} / 20`,
        [AXIS_NAMES[2]]: `${axisScores[2]} / 20`,
        'Weakest axis': String(weakestAxis ?? ''),
        'Newsletter opt-in': newsletter ? 'yes' : 'no',
        Completed: new Date().toISOString(),
      }),
    })
    if (!res.ok) {
      console.error('diagnostic: formspree returned', res.status, await res.text())
      return NextResponse.json({ ok: true, delivered: false })
    }
    return NextResponse.json({ ok: true, delivered: true })
  } catch (err) {
    console.error('diagnostic: formspree delivery failed', err)
    return NextResponse.json({ ok: true, delivered: false })
  }
}
