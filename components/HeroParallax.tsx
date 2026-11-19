'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

interface Props {
  src?: string | null
  headline: string
  subheadline: string
  studioLine?: string
  headlineLines?: string[]
}

export default function HeroParallax({
  src,
  headline,
  subheadline,
  studioLine,
  headlineLines,
}: Props) {
  const lines = headlineLines && headlineLines.length > 0 ? headlineLines : [headline]
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current) return
      // Image moves at 30% of scroll speed (70% parallax effect)
      imgRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: '100vh' }}
      aria-label="Hero"
    >
      {/* Image layer — slightly oversized so parallax doesn't reveal edges */}
      <div
        ref={imgRef}
        className="absolute inset-0 will-change-transform"
        style={{ top: '-15%', bottom: '-15%' }}
      >
        {src ? (
          <Image
            src={src}
            alt="Alpine landscape — Alpstein region, Switzerland"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        ) : (
          // Placeholder gradient until a real photo is uploaded
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, #080808 0%, #0d0d10 30%, #111115 55%, #0d0d10 80%, #080808 100%)',
            }}
          />
        )}
      </div>

      {/* Bottom gradient — makes text legible */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{
          height: '60%',
          background:
            'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.55) 100%)',
        }}
      />

      {/* Text — lower-left third */}
      <div
        className="absolute inset-x-0 bottom-0 mx-auto max-w-page px-6 md:px-10"
        style={{ paddingBottom: '5rem' }}
      >
        {studioLine && (
          <p
            className="font-inter font-medium uppercase tracking-label mb-6"
            style={{ fontSize: '11px', opacity: 0.6 }}
          >
            {studioLine}
          </p>
        )}

        <h1
          className="font-fraunces font-normal text-birch"
          style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.75rem)',
            lineHeight: 1.18,
            letterSpacing: '-0.025em',
            maxWidth: '680px',
          }}
        >
          {lines.map((line, i) => (
            <span key={i} style={{ display: 'block' }}>
              {line}
            </span>
          ))}
        </h1>

        <p
          className="font-fraunces italic mt-4"
          style={{
            fontSize: '1rem',
            lineHeight: 1.65,
            opacity: 0.7,
            maxWidth: '440px',
          }}
        >
          {subheadline}
        </p>
      </div>
    </section>
  )
}
