import fs from 'fs'
import path from 'path'

function voicesDir(locale: 'en' | 'de' = 'en') {
  return path.join(process.cwd(), 'content', locale === 'de' ? 'voices-de' : 'voices')
}

export interface Voice {
  slug: string
  name: string
  title?: string
  photo?: string
  quote: string
  highlight?: string
  order?: number
}

export function getAllVoices(locale: 'en' | 'de' = 'en'): Voice[] {
  const dir = voicesDir(locale)
  if (!fs.existsSync(dir)) return []

  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.json'))

  const voices = files.map((filename) => {
    const raw = fs.readFileSync(path.join(dir, filename), 'utf-8')
    const data = JSON.parse(raw)
    return {
      slug: filename.replace(/\.json$/, ''),
      name: data.name as string,
      title: data.title as string | undefined,
      photo: data.photo as string | undefined,
      quote: data.quote as string,
      highlight: data.highlight as string | undefined,
      order: (data.order as number) ?? 99,
    }
  })

  return voices.sort((a, b) => (a.order ?? 99) - (b.order ?? 99))
}
