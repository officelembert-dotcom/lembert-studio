import type { AboutData } from '@/lib/pages'

const border = '1px solid rgba(227,217,189,0.12)'

const labelClass = 'font-inter font-medium uppercase tracking-label mb-6'
const labelStyle = { fontSize: '11px', opacity: 0.55 } as const

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-none m-0 p-0 space-y-3" role="list">
      {items.map((item) => (
        <li
          key={item}
          className="font-fraunces font-normal text-birch"
          style={{ fontSize: '1rem', lineHeight: 1.6, opacity: 0.85 }}
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

export default function AboutCredentials({ page }: { page: AboutData }) {
  const hasExperience = page.experienceIntro || (page.functions?.length ?? 0) > 0
  const hasCertifications = (page.certifications?.length ?? 0) > 0

  if (!hasExperience && !hasCertifications) return null

  return (
    <section style={{ borderTop: border, paddingTop: '4rem' }}>
      {page.experienceIntro ? (
        <div className="mb-14" style={{ maxWidth: '620px' }}>
          <p className={labelClass} style={labelStyle}>
            {page.experienceLabel}
          </p>
          <p
            className="font-fraunces font-normal text-birch"
            style={{ fontSize: '1.0625rem', lineHeight: 1.8, opacity: 0.85 }}
          >
            {page.experienceIntro}
          </p>
        </div>
      ) : null}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-16" style={{ maxWidth: '720px' }}>
        {(page.functions?.length ?? 0) > 0 ? (
          <div>
            <p className={labelClass} style={labelStyle}>
              {page.functionsLabel}
            </p>
            <List items={page.functions!} />
          </div>
        ) : null}

        {hasCertifications ? (
          <div>
            <p className={labelClass} style={labelStyle}>
              {page.certificationsLabel}
            </p>
            <List items={page.certifications!} />
          </div>
        ) : null}
      </div>
    </section>
  )
}
