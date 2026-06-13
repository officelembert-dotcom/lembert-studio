import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email, language = 'en' } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
    }

    const apiKey = process.env.MAILERLITE_API_KEY
    const groupId =
      language === 'de'
        ? process.env.MAILERLITE_GROUP_DE
        : process.env.MAILERLITE_GROUP_EN

    if (!apiKey || !groupId) {
      return NextResponse.json({ error: 'Not configured' }, { status: 500 })
    }

    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email,
        groups: [groupId],
      }),
    })

    if (response.ok || response.status === 200 || response.status === 201) {
      return NextResponse.json({ success: true })
    }

    const error = await response.json()
    // Already subscribed is not an error from the user's perspective
    if (response.status === 422) {
      return NextResponse.json({ success: true })
    }

    return NextResponse.json({ error: error.message ?? 'Subscription failed' }, { status: 400 })
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
