'use client'

import { useState } from 'react'

// ─── TO ACTIVATE ─────────────────────────────────────────────────────────────
// 1. Log into MailerLite → Forms → copy your form's "Action URL"
//    It looks like: https://assets.mailerlite.com/jsonp/XXXXXX/forms/YYYYYY/subscribe
// 2. Paste it below as MAILERLITE_URL
// 3. The form will work immediately — no other changes needed
const MAILERLITE_URL = process.env.NEXT_PUBLIC_MAILERLITE_URL ?? ''

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!MAILERLITE_URL || !email) return

    setStatus('sending')
    try {
      const res = await fetch(MAILERLITE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fields: { email } }),
      })
      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <p
        className="font-fraunces italic text-birch"
        style={{ fontSize: '0.9375rem', opacity: 0.65 }}
      >
        You're on the list.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" style={{ maxWidth: '360px' }}>
      <label
        htmlFor="newsletter-email"
        className="font-inter font-medium uppercase tracking-label"
        style={{ fontSize: '10px', opacity: 0.55 }}
      >
        Receive notes by email
      </label>

      <div className="flex items-end gap-5">
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="your@email.com"
          className="font-inter text-birch bg-transparent flex-1"
          style={{
            fontSize: '0.9375rem',
            borderBottom: '1px solid rgba(227,217,189,0.25)',
            padding: '0.4rem 0',
            outline: 'none',
          }}
        />
        <button
          type="submit"
          disabled={status === 'sending' || !MAILERLITE_URL}
          className="font-inter font-medium uppercase tracking-label text-birch shrink-0"
          style={{
            fontSize: '10px',
            letterSpacing: '0.24em',
            borderBottom: '1px solid rgba(227,217,189,0.35)',
            paddingBottom: '2px',
            background: 'none',
            cursor: 'pointer',
            opacity: !MAILERLITE_URL ? 0.3 : 1,
          }}
        >
          {status === 'sending' ? '…' : 'Subscribe'}
        </button>
      </div>

      {status === 'error' && (
        <p className="font-inter" style={{ fontSize: '0.8rem', opacity: 0.45 }}>
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  )
}
