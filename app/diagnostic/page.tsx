import fs from 'fs'
import path from 'path'
import DiagnosticApp, { type DiagnosticContent } from '@/components/DiagnosticApp'

const content: DiagnosticContent = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), 'content', 'diagnostic.json'), 'utf-8')
)

export const metadata = {
  title: 'The Lembert Method™ Diagnostic',
  description:
    'A 12-question stress-test for executives and family-owned enterprises: structural architecture, linguistic circuit, somatic base. About 5 minutes.',
  robots: { index: false, follow: false },
  openGraph: {
    title: 'The Lembert Method™ Diagnostic',
    description:
      'Where does your organization actually stand? 12 inquiries, 3 axes, about 5 minutes.',
  },
}

export default function DiagnosticPage() {
  return (
    <div className="page-enter mx-auto max-w-page px-6 md:px-10">
      <div style={{ height: '7rem' }} />
      <DiagnosticApp content={content} />
      <div style={{ height: '8rem' }} />
    </div>
  )
}
