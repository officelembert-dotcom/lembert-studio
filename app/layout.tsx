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
    default: 'Moritz Lembert — Advisor & Executive Coach to Founders & CEOs, Switzerland',
    template: '%s — Lembert Studio',
  },

  description:
    'Moritz Lembert works with people building a future we want to live in: climate and impact founders, next-generation Mittelstand successors, mission-driven operators. Advisor and executive coach, Switzerland and DACH.',

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
    'coach for climate founders',
    'impact founder coach',
    'executive coach impact entrepreneurs',
    'Mittelstand Nachfolge Coaching',
    'Coaching Unternehmensnachfolge',
    'purpose-driven founder advisor',
    'Moritz Lembert',
    'Lembert Studio',
  ],

  authors: [{ name: 'Moritz Lembert', url: baseUrl }],
  creator: 'Moritz Lembert',
  publisher: 'Lembert Studio',

  openGraph: {
    type: 'website',
    locale: 'en_GB',
    alternateLocale: ['de_CH'],
    url: baseUrl,
    siteName: 'Lembert Studio',
    title: 'Moritz Lembert — Advisor & Executive Coach to Founders & CEOs, Switzerland',
    description:
      'I work with people building a future we want to live in. Advisory and executive coaching for founders, owners, and senior operators in Switzerland and DACH.',
    images: [
      {
        url: '/images/heroImage.jpg',
        width: 1600,
        height: 900,
        alt: 'Lembert Studio — Moritz Lembert, Advisor & Executive Coach, Switzerland',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Moritz Lembert — Advisor & Executive Coach to Founders & CEOs, Switzerland',
    description:
      'I work with people building a future we want to live in. Advisory for founders, owners, and senior operators.',
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
      'en-GB': baseUrl,
      'de-CH': `${baseUrl}/de`,
      'x-default': baseUrl,
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
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body className="bg-surface text-birch font-inter">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  )
}
