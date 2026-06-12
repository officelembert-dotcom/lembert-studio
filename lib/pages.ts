import fs from 'fs'
import path from 'path'

function readJson<T>(filePath: string, fallback: T): T {
  try {
    const raw = fs.readFileSync(path.join(process.cwd(), filePath), 'utf-8')
    return JSON.parse(raw) as T
  } catch {
    return fallback
  }
}

export interface HomeData {
  headline: string
  subheadline: string
  practiceItems: string[]
  heroImage?: string | null
}

export interface AboutData {
  paragraphs: string[]
  portrait?: string | null
}

export interface Offer {
  title: string
  body: string
}

export interface WorkData {
  headline: string
  offers: Offer[]
  closing: string
}

export interface ContactQuestion {
  id: string
  label: string
  placeholder?: string
  type: 'text' | 'email' | 'textarea'
  required: boolean
}

export interface ContactData {
  headline: string
  intro: string
  email: string
  formspreeId: string
  questions: ContactQuestion[]
}

export const getHomePage = (): HomeData =>
  readJson('content/pages/home.json', {
    headline: "Build without sacrificing the life you're building it for.",
    subheadline: 'An advisory practice held in long form, for the moments that matter.',
    practiceItems: ['Retained advisory', 'Deep day', 'Retreats in the Rheintal'],
    heroImage: null,
  })

export const getAboutPage = (): AboutData =>
  readJson('content/pages/about.json', {
    paragraphs: [],
    portrait: null,
  })

export const getWorkPage = (): WorkData =>
  readJson('content/pages/work.json', {
    headline: 'Ways to work together',
    offers: [],
    closing: 'For pricing and engagement details, please get in touch.',
  })

export const getContactPage = (): ContactData =>
  readJson('content/settings/contact.json', {
    headline: 'To begin',
    intro: 'A first conversation, no charge.',
    email: 'moritz@lembertstudio.com',
    formspreeId: '',
    questions: [],
  })
