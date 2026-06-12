import fs from 'fs'
import path from 'path'

const VOICES_DIR = path.join(process.cwd(), 'content', 'voices')

export interface Voice {
  slug: string
  name: string
  title?: string
  photo?: string
  quote: string
  order?: number
}

export function getAllVoices(): Voice[] {
  if (!fs.existsSync(VOICES_DIR)) return []

  const files = fs.readdirSync(VOICES_DIR).filter((f) => f.endsWith('.json'))

  const voices = files.map((filename) => {
    const raw = fs.readFileSync(path.join(VOICES_DIR, filename), 'utf-8')
    const data = JSON.parse(raw)
    return {
      slug: filename.replace(/\.json$/, ''),
      name: data.name as string,
      title: data.title as string | undefined,
      photo: data.photo as string | undefined,
      quote: data.quote as string,
      order: (data.order as number) ?? 99,
    }
  })

  return voices.sort((a, b) => (a.order ?? 99) - (b.order ?? 99))
}
