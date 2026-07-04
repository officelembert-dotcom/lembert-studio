export type Locale = 'en' | 'de'

export const dict = {
  en: {
    nav: {
      work: 'Work',
      writings: 'Writings',
      about: 'About',
      voices: 'Voices',
      contact: 'Contact',
    },
    footer: {
      impressum: 'Impressum',
      tagline: 'Coaching & consulting since 2019',
      location: 'Lembert Studio · Berneck',
      est: 'between the Alpstein and the Bodensee',
    },
    practice: 'Practice',
    stayClose: 'Stay close',
    subscribe: 'Subscribe',
    subscribed: "You're on the list.",
    subscribeError: 'Something went wrong. Please try again.',
    getInTouch: 'Get in touch',
    readMore: 'Read more',
    readLess: 'Read less',
    send: 'Send',
    sending: 'Sending…',
    sendSuccess: "Thank you. I'll be in touch shortly.",
    sendError: 'Something went wrong. Please try again or write directly to the email above.',
    formComingSoon: 'Contact form coming soon — for now, write directly to the email above.',
    backToWritings: '← Back to all writings',
    noWritings: 'No writings yet.',
    whatClientsSaid: 'What clients have said',
    inTheirOwnWords: 'In their own words.',
  },
  de: {
    nav: {
      work: 'Arbeit',
      writings: 'Texte',
      about: 'Über mich',
      voices: 'Stimmen',
      contact: 'Kontakt',
    },
    footer: {
      impressum: 'Impressum',
      tagline: 'Coaching & Beratung seit 2019',
      location: 'Lembert Studio · Berneck',
      est: 'zwischen Alpstein und Bodensee',
    },
    practice: 'Praxis',
    stayClose: 'In Verbindung bleiben',
    subscribe: 'Abonnieren',
    subscribed: 'Du bist auf der Liste.',
    subscribeError: 'Etwas ist schiefgelaufen. Bitte versuche es erneut.',
    getInTouch: 'Jetzt Kontakt aufnehmen',
    readMore: 'Weiterlesen',
    readLess: 'Weniger anzeigen',
    send: 'Senden',
    sending: 'Wird gesendet…',
    sendSuccess: 'Danke. Ich melde mich in Kürze bei dir.',
    sendError: 'Etwas ist schiefgelaufen. Bitte versuche es erneut oder schreibe direkt an die obige E-Mail-Adresse.',
    formComingSoon: 'Kontaktformular folgt in Kürze — schreibe in der Zwischenzeit direkt an die obige E-Mail-Adresse.',
    backToWritings: '← Zurück zu allen Texten',
    noWritings: 'Noch keine Texte vorhanden.',
    whatClientsSaid: 'Was Klienten sagen',
    inTheirOwnWords: 'In ihren eigenen Worten.',
  },
} as const

export function t(locale: Locale) {
  return dict[locale]
}
