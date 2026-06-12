import type { Metadata } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import './globals.css'
import SiteChrome from '@/components/SiteChrome'

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

export const metadata: Metadata = {
  title: 'Lembert Studio',
  description: 'An advisory practice held in long form, for the moments that matter.',
  openGraph: {
    title: 'Lembert Studio',
    description: 'An advisory practice held in long form, for the moments that matter.',
    siteName: 'Lembert Studio',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-surface text-birch font-inter">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  )
}
