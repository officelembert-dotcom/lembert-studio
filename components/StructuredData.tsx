export default function StructuredData() {
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Moritz Lembert',
    jobTitle: 'Advisor & Executive Coach to Founders & CEOs',
    url: 'https://lembertstudio.com',
    sameAs: [
      'https://www.linkedin.com/in/moritzlembert/',
      'https://lembertstudio.com',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Berneck',
      addressRegion: 'St. Gallen',
      addressCountry: 'CH',
    },
    areaServed: ['Switzerland', 'Germany', 'Austria'],
    knowsAbout: [
      'Executive Coaching',
      'Leadership Advisory',
      'Business Strategy',
      'Founder Coaching',
      'Unternehmensberatung',
      'Trusted Advisor',
      'Transition Management',
      'Impact Entrepreneurship',
      'Mittelstand Succession',
      'Climate Founder Coaching',
    ],
    knowsLanguage: ['de', 'en'],
    description:
      'Moritz Lembert works with people building a future we want to live in: climate and impact founders, next-generation Mittelstand successors, mission-driven operators. He works with the hidden dynamics and the person doing the leading.',
    image: 'https://lembertstudio.com/images/portrait.jpeg',
    email: 'moritz@lembertstudio.com',
  }

  const professionalService = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Lembert Studio',
    alternateName: 'Lembert Studio Advisory',
    url: 'https://lembertstudio.com',
    logo: 'https://lembertstudio.com/images/portrait.jpeg',
    description:
      'An advisory practice for people building a future we want to live in: climate and impact founders, next-generation Mittelstand successors, mission-driven operators. Retained advisory, deep working days, and retreats.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Berneck',
      addressRegion: 'St. Gallen',
      postalCode: '9442',
      addressCountry: 'CH',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '47.4167',
      longitude: '9.6500',
    },
    areaServed: [
      { '@type': 'Country', name: 'Switzerland' },
      { '@type': 'Country', name: 'Germany' },
      { '@type': 'Country', name: 'Austria' },
    ],
    serviceType: [
      'Executive Coaching',
      'Trusted Advisory',
      'Leadership Coaching',
      'Founder Coaching',
      'Business Retreats',
    ],
    founder: { '@type': 'Person', name: 'Moritz Lembert' },
    sameAs: ['https://www.linkedin.com/in/moritzlembert/'],
    telephone: null,
    email: 'moritz@lembertstudio.com',
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Lembert Studio',
    url: 'https://lembertstudio.com',
    description:
      'Moritz Lembert — Advisor & Executive Coach to Founders & CEOs, St. Gallen region, Switzerland',
    inLanguage: ['de-CH', 'en-GB'],
    author: { '@type': 'Person', name: 'Moritz Lembert' },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  )
}
