import Image from 'next/image'
import { getAboutPage } from '@/lib/pages'


export const metadata = {
  title: 'Über Moritz Lembert — Trusted Advisor & Executive Coach',
  description: 'Moritz Lembert: ICF PCC-zertifizierter Coach und Trusted Advisor für Unternehmer in der Schweiz und dem DACH-Raum. 10+ Jahre als Tänzer, Tausende Stunden Meditationspraxis. Beratung, die den ganzen Menschen einbezieht.',
  openGraph: {
    title: 'Moritz Lembert — Advisor & Coach, St. Gallen, Schweiz',
    description: 'Strategie und die Person dahinter — beides gehört zusammen.',
  },
}

export default function About() {
  const page = getAboutPage()

  return (
    <div className="page-enter mx-auto max-w-page px-6 md:px-10">
      <div style={{ height: "6rem" }} />

      <p
        className="font-inter font-medium uppercase tracking-label mb-10"
        style={{ fontSize: '11px', opacity: 0.55 }}
      >
        About
      </p>

      <div className="flex flex-col md:flex-row md:items-start md:gap-16 lg:gap-24">

        {/* Text column */}
        <div className="flex-1 min-w-0">
          <h1
            className="font-fraunces font-normal text-birch mb-12"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
            }}
          >
            Moritz Lembert
          </h1>

          <div className="space-y-7">
            {page.paragraphs.map((p, i) => (
              <p
                key={i}
                className="font-fraunces font-normal text-birch"
                style={{ fontSize: '1.0625rem', lineHeight: 1.8 }}
              >
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Portrait column */}
        <div
          className="shrink-0 mt-12 md:mt-0 self-start md:self-center md:sticky md:top-16"
          style={{ width: '400px', maxWidth: '100%' }}
        >
          {page.portrait ? (
            <Image
              src={page.portrait}
              alt="Portrait of Moritz Lembert"
              width={400}
              height={500}
              className="w-full object-cover"
              priority
            />
          ) : (
            <div
              aria-hidden="true"
              style={{
                width: '100%',
                aspectRatio: '4 / 5',
                background: 'linear-gradient(160deg, #232b26 0%, #0f0f11 60%, #141a16 100%)',
              }}
            />
          )}
        </div>

      </div>

      <div style={{ height: '8rem' }} />
    </div>
  )
}
