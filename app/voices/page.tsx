import fs from 'fs'
import path from 'path'
import { getAllVoices } from '@/lib/voices'
import VoiceCard from '@/components/VoiceCard'

export const metadata = {
  title: 'Stimmen von Klienten — Was Unternehmer über die Arbeit sagen',
  description: 'Erfahrungen von Gründern, Coaches und Führungspersönlichkeiten, die mit Moritz Lembert zusammengearbeitet haben.',
  openGraph: {
    title: 'Klientenstimmen — Lembert Studio',
    description: 'Was Unternehmer und Führungspersönlichkeiten über die Zusammenarbeit sagen.',
  },
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
      <div style={{ height: '6rem' }} />

      <p
        className="font-inter font-medium uppercase tracking-label mb-6"
        style={{ fontSize: '11px', opacity: 0.55 }}
      >
        Voices
      </p>

      <h1
        className="font-fraunces font-normal text-birch mb-4"
        style={{
          fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
          lineHeight: 1.1,
          letterSpacing: '-0.025em',
        }}
      >
        What clients have said
      </h1>

      <p
        className="font-fraunces italic mb-14"
        style={{ fontSize: '1rem', lineHeight: 1.65, opacity: 0.55 }}
      >
        In their own words.
      </p>

      <div
        className="grid gap-10 md:gap-12"
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}
      >
        {voices.map((voice) => (
          <VoiceCard
            key={voice.slug}
            name={voice.name}
            title={voice.title}
            photo={voice.photo}
            quote={voice.quote}
            hasPhoto={!!voice.photo && photoExists(voice.photo)}
          />
        ))}
      </div>

      <div style={{ height: '8rem' }} />
    </div>
  )
}
