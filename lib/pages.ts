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
  newsletterIntro?: string
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
  image?: string | null
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
    newsletterIntro:
      "I write when something is worth saying — about decisions, leadership, and what I notice in the work. Leave your email if you'd like it in your inbox.",
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
    closing: 'Engagements are scoped to the situation and what is most important to you. We agree on that together before any proposal.',
  })

export interface WorkDetailData {
  headline: string
  paragraphs: string[]
  image?: string | null
}

export const getOutcomeBasedCoachingPage = (): WorkDetailData =>
  readJson('content/work-pages/outcome-based-coaching.json', {
    headline: 'We agree on outcomes. Then we build your program around them.',
    paragraphs: [],
    image: null,
  })

export const getRetainedAdvisoryPage = (): WorkDetailData =>
  readJson('content/work-pages/retained-advisory.json', {
    headline: 'Retained Advisory',
    paragraphs: [],
    image: null,
  })

export const getDeepDayPage = (): WorkDetailData =>
  readJson('content/work-pages/deep-day.json', {
    headline: 'Deep Day',
    paragraphs: [],
    image: null,
  })

export const getRetreatsPage = (): WorkDetailData =>
  readJson('content/work-pages/retreats.json', {
    headline: 'Retreats in the Rheintal',
    paragraphs: [],
    image: null,
  })

export const getContactPage = (): ContactData =>
  readJson('content/settings/contact.json', {
    headline: 'To begin',
    intro: 'A first conversation, no charge.',
    email: 'moritz@lembertstudio.com',
    formspreeId: '',
    questions: [],
  })

// ── German (DE) ──────────────────────────────────────────────

export const getHomePageDe = (): HomeData =>
  readJson('content/pages/home-de.json', {
    headline: 'Bauen, ohne das Leben zu opfern, für das du es baust.',
    subheadline: 'Eine Beratungspraxis in langer Form, für die Momente, die zählen.',
    practiceItems: ['Retained Advisory', 'Deep Day', 'Retreats im Rheintal'],
    heroImage: null,
    newsletterIntro:
      'Ich schreibe, wenn etwas wirklich zu sagen ist — über Entscheidungen, Führung und das, was mir in der Arbeit auffällt. Lass deine E-Mail hier, wenn du es in deinem Posteingang haben möchtest.',
  })

export const getAboutPageDe = (): AboutData =>
  readJson('content/pages/about-de.json', {
    paragraphs: [],
    portrait: null,
  })

export const getWorkPageDe = (): WorkData =>
  readJson('content/pages/work-de.json', {
    headline: 'Wege der Zusammenarbeit',
    offers: [],
    closing: 'Der Umfang einer Zusammenarbeit richtet sich nach deiner Situation und dem, was dir am wichtigsten ist. Das klären wir gemeinsam, bevor es ein Angebot gibt.',
  })

export const getOutcomeBasedCoachingPageDe = (): WorkDetailData =>
  readJson('content/work-pages-de/outcome-based-coaching.json', {
    headline: 'Wir vereinbaren Ergebnisse. Dann bauen wir dein Programm darum.',
    paragraphs: [],
    image: null,
  })

export const getRetainedAdvisoryPageDe = (): WorkDetailData =>
  readJson('content/work-pages-de/retained-advisory.json', {
    headline: 'Retained Advisory',
    paragraphs: [],
    image: null,
  })

export const getDeepDayPageDe = (): WorkDetailData =>
  readJson('content/work-pages-de/deep-day.json', {
    headline: 'Deep Day',
    paragraphs: [],
    image: null,
  })

export const getRetreatsPageDe = (): WorkDetailData =>
  readJson('content/work-pages-de/retreats.json', {
    headline: 'Retreats im Rheintal',
    paragraphs: [],
    image: null,
  })

export const getContactPageDe = (): ContactData =>
  readJson('content/settings/contact-de.json', {
    headline: 'Erster Schritt',
    intro: 'Ein erstes Gespräch, ohne Kosten.',
    email: 'moritz@lembertstudio.com',
    formspreeId: '',
    questions: [],
  })
