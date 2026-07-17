import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

function libraryDir(locale: 'en' | 'de' = 'en') {
  return path.join(process.cwd(), 'content', locale === 'de' ? 'library-de' : 'library')
}

export type LibraryItemType = 'workbook' | 'guide' | 'audio'

export interface LibraryItemMeta {
  slug: string
  title: string
  type: LibraryItemType
  description: string
  file?: string
  date: string
  order: number
}

export interface LibraryItem extends LibraryItemMeta {
  content: string
}

export function getAllLibraryItems(locale: 'en' | 'de' = 'en'): LibraryItemMeta[] {
  const dir = libraryDir(locale)
  if (!fs.existsSync(dir)) return []

  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.mdx'))

  const items = files.map((filename) => {
    const raw = fs.readFileSync(path.join(dir, filename), 'utf-8')
    const { data } = matter(raw)
    return {
      slug: filename.replace(/\.mdx$/, ''),
      title: data.title as string,
      type: (data.type as LibraryItemType) ?? 'guide',
      description: (data.description as string) ?? '',
      file: data.file as string | undefined,
      date: (data.date as string) ?? '',
      order: (data.order as number) ?? 99,
    }
  })

  return items.sort((a, b) => a.order - b.order)
}

export function getLibraryItemBySlug(slug: string, locale: 'en' | 'de' = 'en'): LibraryItem | null {
  const filePath = path.join(libraryDir(locale), `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)

  return {
    slug,
    title: data.title as string,
    type: (data.type as LibraryItemType) ?? 'guide',
    description: (data.description as string) ?? '',
    file: data.file as string | undefined,
    date: (data.date as string) ?? '',
    order: (data.order as number) ?? 99,
    content,
  }
}
