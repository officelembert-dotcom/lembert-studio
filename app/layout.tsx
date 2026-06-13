import type { Metadata } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import './globals.css'
import SiteChrome from '@/components/SiteChrome'
import StructuredData from '@/components/StructuredData'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

const baseUrl = 'https://lembertstudio.com'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: {
    default: 'Moritz Lembert — Trusted Advisor & Executive Coach, Switzerland',
    template: '%s — Lembert Studio',
  },

  description:
    'Moritz Lembert ist Trusted Advisor und Executive Coach für Unternehmer und Eigentümer in der Schweiz und dem DACH-Raum. Begleitung bei strategischen Entscheidungen, Führung und dem, was dahinter steht.',

  keywords: [
    'trusted advisor Switzerland',
    'executive coach DACH',
    'advisor für Unternehmer',
    'leadership advisor St. Gallen',
    'business coach Schweiz',
    'Unternehmensberatung Rheintal',
    'executive advisor Schweiz',
    'coach für Unternehmer',
    'Führungsberatung Ostschweiz',
    'trusted advisor DACH',
    'Moritz Lembert',
    'Lembert Studio',
  ],

  authors: [{ name: 'Moritz Lembert', url: baseUrl }],
  creator: 'Moritz Lembert',
  publisher: 'Lembert Studio',

  openGraph: {
    type: 'website',
    locale: 'de_CH',
    alternateLocale: ['en_GB'],
    url: baseUrl,
    siteName: 'Lembert Studio',
    title: 'Moritz Lembert — Trusted Advisor & Executive Coach, Switzerland',
    description:
      'Advisory für Unternehmer und Eigentümer im DACH-Raum. Strategische Begleitung für die Entscheidungen, die wirklich zählen.',
    images: [
      {
        url: '/images/heroImage.jpg',
        width: 1600,
        height: 900,
        alt: 'Lembert Studio — Moritz Lembert, Trusted Advisor, Switzerland',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Moritz Lembert — Trusted Advisor & Executive Coach, Switzerland',
    description:
      'Advisory für Unternehmer und Eigentümer im DACH-Raum.',
    images: ['/images/heroImage.jpg'],
  },

  verification: {
    google: 'WXMLzzLSOidHlYv4JD22JP8llPy00SSqkFuqXM5SSY4',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: baseUrl,
    languages: {
      'de-CH': baseUrl,
      'en-GB': baseUrl,
    },
  },

  category: 'business',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body className="bg-surface text-birch font-inter">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  )
}
