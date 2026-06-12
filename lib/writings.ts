import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const WRITINGS_DIR = path.join(process.cwd(), 'content', 'writings')

export interface WritingMeta {
  title: string
  date: string
  slug: string
  image?: string
}

export interface Writing extends WritingMeta {
  content: string
}

export function getAllWritings(): WritingMeta[] {
  if (!fs.existsSync(WRITINGS_DIR)) return []

  const files = fs.readdirSync(WRITINGS_DIR).filter((f) => f.endsWith('.mdx'))

  const writings = files.map((filename) => {
    const raw = fs.readFileSync(path.join(WRITINGS_DIR, filename), 'utf-8')
    const { data } = matter(raw)
    return {
      title: data.title as string,
      date: data.date as string,
      slug: (data.slug as string) ?? filename.replace(/\.mdx$/, ''),
      image: (data.image as string) || undefined,
    }
  })

  return writings.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getWritingBySlug(slug: string): Writing | null {
  const filePath = path.join(WRITINGS_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)

  return {
    title: data.title as string,
    date: data.date as string,
    slug: (data.slug as string) ?? slug,
    image: (data.image as string) || undefined,
    content,
  }
}
