import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const NOTES_DIR = path.join(process.cwd(), 'content', 'notes')

export interface NoteMeta {
  title: string
  date: string
  slug: string
}

export interface Note extends NoteMeta {
  content: string
}

export function getAllNotes(): NoteMeta[] {
  if (!fs.existsSync(NOTES_DIR)) return []

  const files = fs.readdirSync(NOTES_DIR).filter((f) => f.endsWith('.mdx'))

  const notes = files.map((filename) => {
    const raw = fs.readFileSync(path.join(NOTES_DIR, filename), 'utf-8')
    const { data } = matter(raw)
    return {
      title: data.title as string,
      date: data.date as string,
      slug: data.slug as string ?? filename.replace(/\.mdx$/, ''),
    }
  })

  // Most recent first
  return notes.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getNoteBySlug(slug: string): Note | null {
  const filePath = path.join(NOTES_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)

  return {
    title: data.title as string,
    date: data.date as string,
    slug: data.slug as string ?? slug,
    content,
  }
}
