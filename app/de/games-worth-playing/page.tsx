import fs from 'fs'
import path from 'path'
import EssayPage, { type EssayPageData } from '@/components/EssayPage'

const page: EssayPageData = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), 'content', 'pages', 'games-de.json'), 'utf-8')
)

export const metadata = {
  title: 'Games Worth Playing',
  description:
    'Ein Spiel, das es wert ist, ist nicht einfach eines, das zu gewinnen sich lohnt. Es ist eines, dem einen Teil des eigenen Lebens zu widmen sich lohnt. Die Philosophie hinter Lembert Studio.',
  openGraph: {
    title: 'Games Worth Playing — Lembert Studio',
    description: 'Eine Erkundung dessen, was wir zu schaffen vermögen.',
  },
  alternates: {
    canonical: 'https://lembertstudio.com/de/games-worth-playing',
    languages: {
      'en-GB': 'https://lembertstudio.com/games-worth-playing',
      'de-CH': 'https://lembertstudio.com/de/games-worth-playing',
    },
  },
}

export default function GamesWorthPlayingDe() {
  return <EssayPage page={page} backHref="/de" backLabel="Zurück zu Lembert Studio" />
}
