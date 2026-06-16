'use client'

import Image from 'next/image'
import { useState } from 'react'
import fs from 'fs'
import path from 'path'
import { dict, type Locale } from '@/lib/i18n'

interface Props {
  name: string
  title?: string
  photo?: string
  quote: string
  hasPhoto: boolean
  locale?: Locale
}

const PREVIEW_LENGTH = 140

export default function VoiceCard({ name, title, photo, quote, hasPhoto, locale = 'en' }: Props) {
  const t = dict[locale]
  const [expanded, setExpanded] = useState(false)
  const isLong = quote.length > PREVIEW_LENGTH
  const preview = isLong ? quote.slice(0, PREVIEW_LENGTH).trimEnd() + '…' : quote

  return (
    <div className="flex flex-col">

      {/* Square photo — capped at 180px on mobile, full width on desktop */}
      <div
        className="relative overflow-hidden mb-5"
        style={{
          width: 'min(180px, 100%)',
          aspectRatio: '1 / 1',
          borderRadius: '2px',
          background: 'rgba(227,217,189,0.06)',
        }}
      >
        {hasPhoto && photo ? (
          <Image
            src={photo}
            alt={`Portrait of ${name}`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover object-top grayscale"
          />
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #0d0d10 0%, #111115 60%, #0a0a0d 100%)' }}
          >
            <span
              className="font-fraunces text-birch"
              style={{ fontSize: '3rem', opacity: 0.25 }}
              aria-hidden="true"
            >
              {name.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Name + title */}
      <p
        className="font-inter font-medium text-birch mb-1"
        style={{ fontSize: '14px', letterSpacing: '0.03em' }}
      >
        {name}
      </p>
      {title && (
        <p
          className="font-inter italic text-birch mb-4"
          style={{ fontSize: '12px', opacity: 0.5 }}
        >
          {title}
        </p>
      )}

      {/* Quote preview / full */}
      <p
        className="font-fraunces font-normal text-birch"
        style={{ fontSize: '1rem', lineHeight: 1.75, opacity: 0.85, flexGrow: 1 }}
      >
        {expanded ? quote : preview}
      </p>

      {/* Expand toggle */}
      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="font-inter font-medium uppercase text-birch self-start mt-4 bg-transparent border-none cursor-pointer p-0"
          style={{
            fontSize: '10px',
            letterSpacing: '0.22em',
            opacity: 0.45,
            borderBottom: '1px solid rgba(227,217,189,0.3)',
            paddingBottom: '1px',
          }}
        >
          {expanded ? t.readLess : t.readMore}
        </button>
      )}
    </div>
  )
}
