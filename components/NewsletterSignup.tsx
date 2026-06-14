'use client'

import { useState } from 'react'

interface Props {
  label?: string
  placeholder?: string
  language?: 'en' | 'de'
}

export default function NewsletterSignup({
  label = 'Receive writings by email',
  placeholder = 'your@email.com',
  language = 'en',
}: Props) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus('sending')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, language }),
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
        htmlFor={`newsletter-email-${language}`}
        className="font-inter font-medium uppercase tracking-label"
        style={{ fontSize: '10px', opacity: 0.55 }}
      >
        {label}
      </label>

      <div className="flex items-end gap-5">
        <input
          id={`newsletter-email-${language}`}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder={placeholder}
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
          disabled={status === 'sending'}
          className="font-inter font-medium uppercase tracking-label text-birch shrink-0 transition-all duration-300 hover:translate-x-1"
          style={{
            fontSize: '10px',
            letterSpacing: '0.24em',
            borderBottom: '1px solid rgba(227,217,189,0.35)',
            paddingBottom: '2px',
            background: 'none',
            cursor: status === 'sending' ? 'wait' : 'pointer',
            opacity: status === 'sending' ? 0.4 : 1,
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
