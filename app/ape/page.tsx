import fs from 'fs'
import path from 'path'
import EssayPage, { type EssayPageData } from '@/components/EssayPage'

const page: EssayPageData = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), 'content', 'pages', 'ape.json'), 'utf-8')
)

export const metadata = {
  title: 'An Ape in Infinity',
  description: 'An open inquiry into the strange experience of being human.',
  robots: { index: false, follow: false },
}

export default function Ape() {
  return <EssayPage page={page} backHref="/" backLabel="Back to Lembert Studio" />
}
