import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

function writingsDir(locale: 'en' | 'de' = 'en') {
  return path.join(process.cwd(), 'content', locale === 'de' ? 'writings-de' : 'writings')
}

export interface WritingMeta {
  title: string
  date: string
  slug: string
  coverImage?: string
}

export interface Writing extends WritingMeta {
  content: string
}

export function getAllWritings(locale: 'en' | 'de' = 'en'): WritingMeta[] {
  const dir = writingsDir(locale)
  if (!fs.existsSync(dir)) return []

  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.mdx'))

  const writings = files.map((filename) => {
    const raw = fs.readFileSync(path.join(dir, filename), 'utf-8')
    const { data } = matter(raw)
    const slug = (data.slug as string) ?? filename.replace(/\.mdx$/, '')
    return {
      title: data.title as string,
      date: data.date as string,
      slug,
      // support both 'coverImage' (new) and 'image' (old) field names
      coverImage: (data.coverImage as string) || (data.image as string) || undefined,
    }
  })

  return writings.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getWritingBySlug(slug: string, locale: 'en' | 'de' = 'en'): Writing | null {
  const filePath = path.join(writingsDir(locale), `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)

  return {
    title: data.title as string,
    date: data.date as string,
    slug: (data.slug as string) ?? slug,
    coverImage: (data.coverImage as string) || (data.image as string) || undefined,
    content,
  }
}
