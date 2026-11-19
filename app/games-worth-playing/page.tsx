import fs from 'fs'
import path from 'path'
import EssayPage, { type EssayPageData } from '@/components/EssayPage'

const page: EssayPageData = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), 'content', 'pages', 'games.json'), 'utf-8')
)

export const metadata = {
  title: 'Games Worth Playing',
  description:
    'A game worth playing is not merely one worth winning. It is one worth dedicating a part of your life to. The philosophy behind Lembert Studio.',
  openGraph: {
    title: 'Games Worth Playing — Lembert Studio',
    description: 'An exploration of what we are capable of creating.',
  },
  alternates: {
    canonical: 'https://lembertstudio.com/games-worth-playing',
    languages: {
      'en-GB': 'https://lembertstudio.com/games-worth-playing',
      'de-CH': 'https://lembertstudio.com/de/games-worth-playing',
    },
  },
}

export default function GamesWorthPlaying() {
  return <EssayPage page={page} backHref="/" backLabel="Back to Lembert Studio" />
}
