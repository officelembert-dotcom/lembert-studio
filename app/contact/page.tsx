import { getContactPage } from '@/lib/pages'
import ContactForm from '@/components/ContactForm'


export const metadata = {
  title: 'Contact — Lembert Studio',
  description: 'A first conversation to understand what you\'re navigating, and whether I\'m the right person for it.',
  openGraph: {
    title: 'Contact — Lembert Studio',
    description: 'A conversation, not a sales call.',
  },
}

export default function Contact() {
  const page = getContactPage()

  return (
    <div className="page-enter mx-auto max-w-page px-6 md:px-10">
      <div style={{ height: "6rem" }} />

      <p
        className="font-inter font-medium uppercase tracking-label mb-10"
        style={{ fontSize: '11px', opacity: 0.55 }}
      >
        Contact
      </p>

      <h1
        className="font-fraunces font-normal text-birch mb-8"
        style={{
          fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
          lineHeight: 1.1,
          letterSpacing: '-0.025em',
        }}
      >
        {page.headline}
      </h1>

      <p
        className="font-fraunces font-normal text-birch mb-10"
        style={{
          fontSize: '1.0625rem',
          lineHeight: 1.8,
          maxWidth: '500px',
          opacity: 0.8,
        }}
      >
        {page.intro}
      </p>

      {/* Email link */}
      <a
        href={`mailto:${page.email}`}
        className="font-inter font-normal block mb-14"
        style={{
          fontSize: '1.125rem',
          color: 'var(--birch)',
          textDecoration: 'underline',
          textDecorationColor: 'var(--amber)',
          textUnderlineOffset: '4px',
          letterSpacing: '0.01em',
        }}
      >
        {page.email}
      </a>

      {/* Divider before form */}
      <div
        style={{
          height: '1px',
          backgroundColor: 'rgba(227,217,189,0.12)',
          maxWidth: '520px',
          marginBottom: '3rem',
        }}
      />

      {/* Contact form */}
      <ContactForm
        formspreeId={page.formspreeId}
        questions={page.questions}
      />

      <div style={{ height: '10rem' }} />
    </div>
  )
}
