import { NextResponse } from 'next/server'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

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

  const webhookUrl = process.env.DIAGNOSTIC_SHEET_WEBHOOK_URL
  if (!webhookUrl) {
    console.error('diagnostic: DIAGNOSTIC_SHEET_WEBHOOK_URL not configured; lead not stored', {
      email: email.trim(),
      grandTotal,
    })
    return NextResponse.json({ ok: true, stored: false })
  }

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        email: email.trim(),
        grand_total: grandTotal,
        axis1_score: axisScores[0],
        axis2_score: axisScores[1],
        axis3_score: axisScores[2],
        band: String(band ?? ''),
        weakest_axis: String(weakestAxis ?? ''),
        newsletter: newsletter ? 'yes' : 'no',
      }),
    })
    if (!res.ok) {
      console.error('diagnostic: sheet webhook returned', res.status, await res.text())
      return NextResponse.json({ ok: true, stored: false })
    }
    return NextResponse.json({ ok: true, stored: true })
  } catch (err) {
    console.error('diagnostic: sheet webhook failed', err)
    return NextResponse.json({ ok: true, stored: false })
  }
}
