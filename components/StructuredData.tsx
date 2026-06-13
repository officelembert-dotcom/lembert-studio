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
      'Ontological Coaching',
    ],
    knowsLanguage: ['de', 'en'],
    description:
      'Moritz Lembert works as an advisor and executive coach to founders & CEOs in Switzerland and the DACH region. He works with the strategic decisions and the person making them at the same time.',
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
      'An advisory practice for founders and owners of 10–100 person businesses in Switzerland and the DACH region. Retained advisory, deep working days, and retreats in the Rheintal.',
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
    priceRange: 'CHF 4,500–30,000+',
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
