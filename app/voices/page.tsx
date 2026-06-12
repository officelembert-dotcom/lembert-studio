import Image from 'next/image'
import fs from 'fs'
import path from 'path'
import { getAllVoices } from '@/lib/voices'

export const revalidate = 0

export const metadata = {
  title: 'Voices — Lembert Studio',
}

function photoExists(photoPath: string) {
  try {
    const relative = photoPath.startsWith('/') ? photoPath.slice(1) : photoPath
    return fs.existsSync(path.join(process.cwd(), 'public', relative))
  } catch {
    return false
  }
}

export default function Voices() {
  const voices = getAllVoices()

  return (
    <div className="page-enter mx-auto max-w-page px-6 md:px-10">
      <div style={{ height: "6rem" }} />

      <p
        className="font-inter font-medium uppercase tracking-label mb-10 text-center"
        style={{ fontSize: '11px', opacity: 0.55 }}
      >
        Voices
      </p>

      <h1
        className="font-fraunces font-normal text-birch mb-16 text-center"
        style={{
          fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
          lineHeight: 1.1,
          letterSpacing: '-0.025em',
        }}
      >
        What clients have said
      </h1>

      <div className="mx-auto" style={{ maxWidth: '720px' }}>
        {voices.map((voice, i) => {
          const hasPhoto = !!voice.photo && photoExists(voice.photo)

          return (
            <div key={voice.slug}>
              <div className="flex flex-col items-center text-center py-14">

                {/* Photo or initial */}
                <div
                  className="relative mb-5 overflow-hidden flex items-center justify-center"
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    flexShrink: 0,
                    background: 'rgba(227,217,189,0.07)',
                  }}
                >
                  {hasPhoto ? (
                    <Image
                      src={voice.photo!}
                      alt={`Portrait of ${voice.name}`}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  ) : (
                    <span
                      className="font-fraunces text-birch"
                      style={{ fontSize: '1.5rem', opacity: 0.4 }}
                      aria-hidden="true"
                    >
                      {voice.name.charAt(0)}
                    </span>
                  )}
                </div>

                <p
                  className="font-inter font-medium text-birch mb-1"
                  style={{ fontSize: '14px', letterSpacing: '0.04em' }}
                >
                  {voice.name}
                </p>

                {voice.title && (
                  <p
                    className="font-inter italic text-birch mb-6"
                    style={{ fontSize: '13px', opacity: 0.55 }}
                  >
                    {voice.title}
                  </p>
                )}

                {!voice.title && <div style={{ height: '1.5rem' }} />}

                <p
                  className="font-fraunces font-normal text-birch"
                  style={{
                    fontSize: '1.125rem',
                    lineHeight: 1.75,
                    maxWidth: '600px',
                    opacity: 0.9,
                  }}
                >
                  {voice.quote}
                </p>
              </div>

              {i < voices.length - 1 && (
                <div
                  className="mx-auto"
                  style={{
                    width: '60px',
                    height: '1px',
                    backgroundColor: 'rgba(227,217,189,0.12)',
                  }}
                />
              )}
            </div>
          )
        })}
      </div>

      <div style={{ height: '8rem' }} />
    </div>
  )
}
