export const metadata = {
  title: 'Impressum — Lembert Studio',
  description: 'Rechtliche Angaben, Datenschutz und eingesetzte Dienste.',
  robots: { index: false },
}

const tools = [
  {
    name: 'Vercel Inc.',
    purpose: 'Website-Hosting und Auslieferung',
    location: 'USA',
    url: 'https://vercel.com/legal/privacy-policy',
    note: 'Beim Aufruf der Website wird Ihre IP-Adresse kurzzeitig verarbeitet.',
  },
  {
    name: 'Formspree',
    purpose: 'Verarbeitung von Kontaktformular-Anfragen',
    location: 'USA',
    url: 'https://formspree.io/legal/privacy-policy',
    note: 'Daten aus dem Kontaktformular (Name, E-Mail, Nachricht) werden über Formspree übermittelt und an moritz@lembertstudio.com weitergeleitet.',
  },
  {
    name: 'GitHub Inc.',
    purpose: 'Code-Verwaltung und CMS-Backend (Keystatic)',
    location: 'USA',
    url: 'https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement',
    note: 'Der Website-Code und alle Inhalte sind in einem privaten GitHub-Repository gespeichert.',
  },
  {
    name: 'Fathom Analytics',
    purpose: 'Datenschutzfreundliche Website-Analyse',
    location: 'Kanada (EU-Serverstandorte verfügbar)',
    url: 'https://usefathom.com/privacy',
    note: 'Fathom erhebt keine personenbezogenen Daten, setzt keine Cookies und ist DSGVO-konform. Es werden keine IP-Adressen gespeichert.',
  },
  {
    name: 'Google Drive (Google LLC)',
    purpose: 'Interne Dokumentenverwaltung und Ablage',
    location: 'USA',
    url: 'https://policies.google.com/privacy',
    note: 'Wird ausschliesslich intern genutzt. Besucher der Website haben keinen Zugriff.',
  },
  {
    name: 'Google Search Console',
    purpose: 'SEO-Monitoring und Suchindexierung',
    location: 'USA',
    url: 'https://policies.google.com/privacy',
    note: 'Aggregierte, anonymisierte Suchdaten. Keine personenbezogenen Besucherdaten.',
  },
  {
    name: 'Abaninja (Accounto AG)',
    purpose: 'Buchhaltung und Rechnungsstellung',
    location: 'Schweiz',
    url: 'https://abaninja.ch/datenschutz/',
    note: 'Wird ausschliesslich intern für die Geschäftsbuchhaltung genutzt.',
  },
  {
    name: 'Claude (Anthropic PBC)',
    purpose: 'KI-gestützte Entwicklung der Website und Textarbeit',
    location: 'USA',
    url: 'https://www.anthropic.com/privacy',
    note: 'Claude wird als KI-Assistent für die Entwicklung und Pflege dieser Website eingesetzt. Keine Besucherdaten werden an Anthropic übermittelt.',
  },
  {
    name: 'World4You Internet Services GmbH',
    purpose: 'Domain-Registrierung (lembertstudio.com)',
    location: 'Österreich',
    url: 'https://www.world4you.com/datenschutz',
    note: 'Technischer Domain-Anbieter. Kein direkter Kontakt zu Besuchern.',
  },
]

export default function Impressum() {
  return (
    <div className="page-enter mx-auto max-w-page px-6 md:px-10">
      <div style={{ height: '6rem' }} />

      <p
        className="font-inter font-medium uppercase tracking-label mb-10"
        style={{ fontSize: '11px', opacity: 0.55 }}
      >
        Rechtliches
      </p>

      <h1
        className="font-fraunces font-normal text-birch mb-16"
        style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', lineHeight: 1.1, letterSpacing: '-0.025em' }}
      >
        Impressum
      </h1>

      {/* Legal entity */}
      <section className="mb-16" style={{ maxWidth: '560px' }}>
        <p
          className="font-inter font-medium uppercase tracking-label mb-6"
          style={{ fontSize: '11px', opacity: 0.55 }}
        >
          Angaben gemäss § 5 TMG / Art. 3 UWG
        </p>
        <div className="space-y-2">
          {[
            'Moritz Lembert',
            'Lembert Studio',
            '(betrieben durch Being Institute GmbH, in Umbenennung)',
            'Berneck, Kanton St. Gallen, Schweiz',
            'moritz@lembertstudio.com',
            'lembertstudio.com',
          ].map((line) => (
            <p key={line} className="font-fraunces font-normal text-birch" style={{ fontSize: '1rem', lineHeight: 1.75 }}>
              {line}
            </p>
          ))}
        </div>

        <div style={{ height: '2rem' }} />

        <p className="font-fraunces font-normal text-birch" style={{ fontSize: '0.9375rem', lineHeight: 1.75, opacity: 0.65 }}>
          Inhaltlich verantwortlich gemäss § 55 Abs. 2 RStV: Moritz Lembert, Anschrift wie oben.
        </p>
        <p className="font-fraunces font-normal text-birch mt-4" style={{ fontSize: '0.9375rem', lineHeight: 1.75, opacity: 0.65 }}>
          Diese Angaben werden aktualisiert, sobald eine neue Geschäftsadresse und die Umbenennung der GmbH abgeschlossen sind.
        </p>
      </section>

      {/* Divider */}
      <div style={{ height: '1px', backgroundColor: 'rgba(227,217,189,0.12)', maxWidth: '720px', marginBottom: '4rem' }} />

      {/* Data & tools */}
      <section style={{ maxWidth: '720px' }}>
        <p
          className="font-inter font-medium uppercase tracking-label mb-6"
          style={{ fontSize: '11px', opacity: 0.55 }}
        >
          Datenschutz & eingesetzte Dienste
        </p>

        <p className="font-fraunces font-normal text-birch mb-10" style={{ fontSize: '1rem', lineHeight: 1.75, opacity: 0.8 }}>
          Diese Website verwendet keine Tracking-Cookies und erstellt keine Benutzerprofile. Die folgende Tabelle listet alle Dienste auf, die im Zusammenhang mit dieser Website und dem Betrieb von Lembert Studio eingesetzt werden.
        </p>

        <div className="space-y-0">
          {tools.map((tool, i) => (
            <div
              key={tool.name}
              style={{
                paddingTop: '1.75rem',
                paddingBottom: '1.75rem',
                borderTop: i === 0 ? '1px solid rgba(227,217,189,0.12)' : undefined,
                borderBottom: '1px solid rgba(227,217,189,0.12)',
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:gap-8">
                <div className="shrink-0 sm:w-48">
                  <p className="font-inter font-medium text-birch" style={{ fontSize: '13px' }}>
                    {tool.name}
                  </p>
                  <p className="font-inter text-birch mt-1" style={{ fontSize: '11px', opacity: 0.45 }}>
                    {tool.location}
                  </p>
                </div>
                <div className="mt-2 sm:mt-0 flex-1">
                  <p className="font-inter font-medium text-birch mb-1" style={{ fontSize: '12px', opacity: 0.7 }}>
                    {tool.purpose}
                  </p>
                  <p className="font-inter text-birch" style={{ fontSize: '12px', lineHeight: 1.65, opacity: 0.5 }}>
                    {tool.note}
                  </p>
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-inter text-birch mt-1 inline-block"
                    style={{ fontSize: '11px', opacity: 0.4, textDecoration: 'underline', textUnderlineOffset: '2px' }}
                  >
                    Datenschutzerklärung →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ height: '3rem' }} />

        <p className="font-fraunces italic text-birch" style={{ fontSize: '0.875rem', lineHeight: 1.75, opacity: 0.45 }}>
          Bei Fragen zum Datenschutz: moritz@lembertstudio.com
        </p>
      </section>

      <div style={{ height: '8rem' }} />
    </div>
  )
}
