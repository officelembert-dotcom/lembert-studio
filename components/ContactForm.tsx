'use client'

import { useState } from 'react'
import type { ContactQuestion } from '@/lib/pages'

interface Props {
  formspreeId: string
  questions: ContactQuestion[]
}

export default function ContactForm({ formspreeId, questions }: Props) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!formspreeId) return

    setStatus('sending')
    const data = new FormData(e.currentTarget)

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        ;(e.target as HTMLFormElement).reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  // Formspree not configured yet
  if (!formspreeId) {
    return (
      <p
        className="font-inter"
        style={{ fontSize: '0.875rem', opacity: 0.4, fontStyle: 'italic' }}
      >
        Contact form coming soon — for now, write directly to the email above.
      </p>
    )
  }

  if (status === 'success') {
    return (
      <p
        className="font-fraunces text-birch"
        style={{ fontSize: '1rem', lineHeight: 1.75, opacity: 0.8 }}
      >
        Thank you. I'll be in touch shortly.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full" style={{ maxWidth: '520px' }} noValidate>
      <div className="flex flex-col gap-7">
        {questions.map((q) => (
          <div key={q.id} className="flex flex-col gap-2">
            <label
              htmlFor={q.id}
              className="font-inter font-medium uppercase tracking-label"
              style={{ fontSize: '10px', opacity: 0.55 }}
            >
              {q.label}
              {q.required && (
                <span style={{ opacity: 0.4, marginLeft: '0.25rem' }}>*</span>
              )}
            </label>

            {q.type === 'textarea' ? (
              <textarea
                id={q.id}
                name={q.id}
                required={q.required}
                placeholder={q.placeholder ?? ''}
                rows={4}
                className="font-inter text-birch bg-transparent resize-none"
                style={{
                  fontSize: '0.9375rem',
                  lineHeight: 1.7,
                  borderBottom: '1px solid rgba(229,220,196,0.25)',
                  padding: '0.5rem 0',
                  outline: 'none',
                }}
              />
            ) : (
              <input
                id={q.id}
                name={q.id}
                type={q.type}
                required={q.required}
                placeholder={q.placeholder ?? ''}
                className="font-inter text-birch bg-transparent"
                style={{
                  fontSize: '0.9375rem',
                  lineHeight: 1.7,
                  borderBottom: '1px solid rgba(229,220,196,0.25)',
                  padding: '0.5rem 0',
                  outline: 'none',
                }}
              />
            )}
          </div>
        ))}

        {status === 'error' && (
          <p
            className="font-inter"
            style={{ fontSize: '0.875rem', opacity: 0.5 }}
          >
            Something went wrong. Please try again or write directly to the email above.
          </p>
        )}

        <button
          type="submit"
          disabled={status === 'sending'}
          className="font-inter font-medium uppercase tracking-label text-birch self-start"
          style={{
            fontSize: '11px',
            paddingBottom: '2px',
            opacity: status === 'sending' ? 0.4 : 1,
            background: 'none',
            border: 'none',
            borderBottom: '1px solid rgba(229,220,196,0.35)',
            cursor: status === 'sending' ? 'wait' : 'pointer',
            letterSpacing: '0.24em',
          }}
        >
          {status === 'sending' ? 'Sending…' : 'Send'}
        </button>
      </div>
    </form>
  )
}
