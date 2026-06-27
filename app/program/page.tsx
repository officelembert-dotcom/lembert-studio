import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Practitioners Programme — Lembert Studio',
  description: 'A 6-week group programme for coaches, consultants, and therapists ready to build a system that creates clients continuously.',
  robots: { index: false, follow: false },
}

const weeks = [
  { n: 1, title: 'The two numbers that predict your income, and how to move them.' },
  { n: 2, title: 'Reaching out: who to contact, what to say, how to do it from service.' },
  { n: 3, title: 'Context: the idea that changed my earnings more than any other.' },
  { n: 4, title: 'The conversation: trust, help, and turning interest into clients.' },
  { n: 5, title: 'The daily practice that keeps creating clients.' },
  { n: 6, title: "Sustaining it. You leave with a system you've already proven works for you." },
]

const CTA_HREF =
  'mailto:moritz@lembertstudio.com?subject=Programme%20%E2%80%94%20I%E2%80%99d%20like%20to%20join'

const GUIDE_HREF =
  'https://docs.google.com/document/d/1HePBs6Epah2c-Rc3A_piF9KgVmRlKwnA7VRqOrL62-k/preview'

const testimonials = [
  {
    quote:
      'My practice is full. Instead of teaching scattered 6 days a week, I now teach 3 complete days — and doubled my income without working more. I even have more time for the projects that are close to my heart.',
    name: 'Alina Jacobs',
    role: 'Dance artist & pedagogue (LPDC®), Gyrotonic & Gyrokinesis trainer',
  },
  {
    quote:
      "I was a bodywork practitioner scrambling for a mediocre hourly rate. Fear of money and not having enough was, for 30 years, my biggest concern. I got tenfold out of the investment — and I'm still running.",
    name: 'Bart Vanderbruggen',
    role: 'Neuro Bodywork educator, Founder WOBA Academie',
  },
  {
    quote:
      'If you are looking for a powerful coach who is grounded in Being and helps you achieve your goals, look no further. He takes a stand for his clients to be the best version of themselves. He holds you accountable. He helps you get results. He serves powerfully.',
    name: 'Rani Bora',
    role: 'Consultant Psychiatrist (FRCPsych), Co-Founder Holistic Psychiatry Clinic',
  },
  {
    quote:
      "In 4 months, with Moritz's help, I achieved most goals I had planned for a full year. There are very few people in my life with a level of commitment to continuous growth that this man has.",
    name: 'Felipe Bernardo',
    role: 'Leadership Coach & Founder, Servify Studios',
  },
]

const pricing = [
  {
    label: 'Solo',
    price: 'CHF 690',
    description: null,
  },
  {
    label: 'With a partner',
    price: 'CHF 550 each',
    description: 'Bring a friend — you both pay only 550.',
  },
  {
    label: 'Group of three or more',
    price: 'CHF 450 each',
    description: 'Bring colleagues so you can practice together long after.',
  },
]

function GuideBlock() {
  return (
    <div
      className="flex flex-col md:flex-row md:items-center justify-between gap-8"
      style={{
        padding: '2.5rem 3rem',
        background: 'rgba(227,217,189,0.04)',
        border: '1px solid rgba(227,217,189,0.12)',
        maxWidth: '720px',
      }}
    >
      <div>
        <p
          className="font-inter font-medium uppercase tracking-label mb-3"
          style={{ fontSize: '11px', opacity: 0.45 }}
        >
          Free guide
        </p>
        <p
          className="font-fraunces font-normal text-birch mb-2"
          style={{ fontSize: '1.25rem', lineHeight: 1.3 }}
        >
          Always Have Clients
        </p>
        <p
          className="font-fraunces font-normal text-birch"
          style={{ fontSize: '0.9375rem', lineHeight: 1.6, opacity: 0.6 }}
        >
          Not ready to join yet? Start here — the guide behind the programme.
        </p>
      </div>
      <a
        href={GUIDE_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block font-inter font-medium no-underline shrink-0"
        style={{
          border: '1px solid var(--amber)',
          color: 'var(--amber)',
          padding: '0.75rem 1.75rem',
          fontSize: '13px',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        }}
      >
        Get the guide
      </a>
    </div>
  )
}

export default function ProgramPage() {
  return (
    <div className="page-enter">
      <div className="mx-auto max-w-page px-6 md:px-10">

        {/* ── Hero ──────────────────────────────────────────────── */}
        <div style={{ paddingTop: '7rem', paddingBottom: '4rem' }}>
          <p
            className="font-inter font-medium uppercase tracking-label mb-8"
            style={{ fontSize: '11px', opacity: 0.55 }}
          >
            Six weeks · Starting 23 September
          </p>
          <h1
            className="font-fraunces font-normal text-birch mb-6"
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              maxWidth: '760px',
            }}
          >
            Build a system that creates clients — continuously.
          </h1>
          <p
            className="font-fraunces font-normal text-birch mb-12"
            style={{ fontSize: '1.1875rem', lineHeight: 1.7, maxWidth: '560px', opacity: 0.75 }}
          >
            This is the actual practice I and my most successful clients apply ourselves. Not
            marketing theory. The work, done together, until it works.
          </p>

          {/* Hero testimonial */}
          <div
            className="mb-12"
            style={{
              borderLeft: '2px solid var(--amber)',
              paddingLeft: '1.5rem',
              maxWidth: '520px',
            }}
          >
            <p
              className="font-fraunces italic text-birch mb-3"
              style={{ fontSize: '1.0625rem', lineHeight: 1.7, opacity: 0.9 }}
            >
              "My practice is full. Instead of teaching scattered 6 days a week, I now teach 3
              complete days — and doubled my income without working more."
            </p>
            <p className="font-inter text-birch" style={{ fontSize: '12px', opacity: 0.5 }}>
              — Alina Jacobs, Gyrotonic & Gyrokinesis trainer
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-12">
            <a
              href={CTA_HREF}
              className="inline-block font-inter font-medium no-underline"
              style={{
                backgroundColor: 'var(--amber)',
                color: 'var(--surface)',
                padding: '0.875rem 2rem',
                fontSize: '13px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              Write to me to join
            </a>
            <p className="font-inter text-birch" style={{ fontSize: '12px', opacity: 0.5 }}>
              Limited to 12 places
            </p>
          </div>

          {/* Guide — top */}
          <GuideBlock />
        </div>

        <div style={{ borderTop: '1px solid rgba(227,217,189,0.12)' }} />

        {/* ── The cost of staying where you are ─────────────────── */}
        <section style={{ paddingTop: '5rem', paddingBottom: '5rem', maxWidth: '620px' }}>
          <p
            className="font-inter font-medium uppercase tracking-label mb-8"
            style={{ fontSize: '11px', opacity: 0.55 }}
          >
            The cost of staying where you are
          </p>
          <div className="space-y-5">
            <p
              className="font-fraunces font-normal text-birch"
              style={{ fontSize: '1.0625rem', lineHeight: 1.8, opacity: 0.85 }}
            >
              Here is what most practitioners do: they need a client, so they reach out, get in
              communication, share their service. They land the client. They serve that client well
              — because that is what they are trained to do. And in serving them, they stop doing
              what created them. Then the client ends. And the scramble begins again.
            </p>
            <p
              className="font-fraunces font-normal text-birch"
              style={{ fontSize: '1.0625rem', lineHeight: 1.8, opacity: 0.85 }}
            >
              This is not a discipline problem. It is a structural one. You never built a practice
              and system — you built a series of individual clients. And it somehow seems mysterious
              how you ever got that client, and why now they aren't flowing in.
            </p>
            <p
              className="font-fraunces font-normal text-birch"
              style={{ fontSize: '1.0625rem', lineHeight: 1.8, opacity: 0.85 }}
            >
              Meanwhile, income swings. Some months are full. You are good at what you do. You
              genuinely want to help. You just don't have a reliable way to do it continuously.
            </p>
          </div>
        </section>

        <div style={{ borderTop: '1px solid rgba(227,217,189,0.12)' }} />

        {/* ── What this is ──────────────────────────────────────── */}
        <section style={{ paddingTop: '5rem', paddingBottom: '5rem', maxWidth: '620px' }}>
          <p
            className="font-inter font-medium uppercase tracking-label mb-8"
            style={{ fontSize: '11px', opacity: 0.55 }}
          >
            What this is
          </p>
          <p
            className="font-fraunces font-normal text-birch mb-5"
            style={{ fontSize: '1.0625rem', lineHeight: 1.8, opacity: 0.85 }}
          >
            Everything in this programme comes down to one thing: conversations. New clients come
            from conversations. Trust is built in conversations. The question "Can I help this
            person?" is answered in a conversation.
          </p>
          <p
            className="font-fraunces font-normal text-birch mb-5"
            style={{ fontSize: '1.0625rem', lineHeight: 1.8, opacity: 0.85 }}
          >
            What we build here is not a marketing funnel, 15 webpages, a secret system. It is a
            practice — a small number of things you do consistently, that create the conditions for
            clients to come. You learn exactly what I did to grow my practice past six figures, and
            what my clients have done to do the same.
          </p>
          <p
            className="font-fraunces font-normal text-birch"
            style={{ fontSize: '1.0625rem', lineHeight: 1.8, opacity: 0.85 }}
          >
            Every cohort I've run, participants created new clients before the six weeks were out.
          </p>
        </section>

        <div style={{ borderTop: '1px solid rgba(227,217,189,0.12)' }} />

        {/* ── What we cover ─────────────────────────────────────── */}
        <section style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
          <p
            className="font-inter font-medium uppercase tracking-label mb-10"
            style={{ fontSize: '11px', opacity: 0.55 }}
          >
            What we cover
          </p>
          <ul className="list-none m-0 p-0">
            {weeks.map((week, i) => (
              <li
                key={week.n}
                style={{
                  borderTop: i === 0 ? '1px solid rgba(227,217,189,0.12)' : undefined,
                  borderBottom: '1px solid rgba(227,217,189,0.12)',
                  padding: '1.5rem 0',
                  display: 'flex',
                  gap: '2rem',
                  alignItems: 'flex-start',
                }}
              >
                <span
                  className="font-inter font-medium shrink-0"
                  style={{
                    fontSize: '11px',
                    opacity: 0.4,
                    paddingTop: '0.2rem',
                    minWidth: '4.5rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                  }}
                >
                  Week {week.n}
                </span>
                <span
                  className="font-fraunces font-normal text-birch"
                  style={{ fontSize: '1.0625rem', lineHeight: 1.6, opacity: 0.9 }}
                >
                  {week.title}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <div style={{ borderTop: '1px solid rgba(227,217,189,0.12)' }} />

        {/* ── How it runs ───────────────────────────────────────── */}
        <section style={{ paddingTop: '5rem', paddingBottom: '5rem', maxWidth: '620px' }}>
          <p
            className="font-inter font-medium uppercase tracking-label mb-8"
            style={{ fontSize: '11px', opacity: 0.55 }}
          >
            How it runs
          </p>
          <p
            className="font-fraunces font-normal text-birch"
            style={{ fontSize: '1.0625rem', lineHeight: 1.8, opacity: 0.85 }}
          >
            Six Tuesdays, 19:00–20:30, live, starting 23 September; one assignment each week;
            tracking and accountability between calls; a group thread for momentum; every call
            recorded; limited to 12 people, to keep it personal.
          </p>
        </section>

        {/* ── The guarantee ─────────────────────────────────────── */}
        <section
          style={{
            marginBottom: '5rem',
            padding: '3rem',
            border: '1px solid var(--amber)',
            maxWidth: '720px',
          }}
        >
          <p
            className="font-inter font-medium uppercase tracking-label mb-6"
            style={{ fontSize: '11px', color: 'var(--amber)' }}
          >
            The guarantee
          </p>
          <p
            className="font-fraunces font-normal text-birch"
            style={{
              fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
              lineHeight: 1.65,
              opacity: 0.95,
            }}
          >
            Show up to the calls, do the assignments, and do the outreach — and if you don't create
            at least one new client within the six weeks, I will refund you in full. No questions
            asked.
          </p>
        </section>

        <div style={{ borderTop: '1px solid rgba(227,217,189,0.12)' }} />

        {/* ── Who it's for / who it isn't ───────────────────────── */}
        <section style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <p
                className="font-inter font-medium uppercase tracking-label mb-8"
                style={{ fontSize: '11px', opacity: 0.55 }}
              >
                Who this is for
              </p>
              <p
                className="font-fraunces font-normal text-birch"
                style={{ fontSize: '1rem', lineHeight: 1.8, opacity: 0.85 }}
              >
                You are earning between CHF 35–120k and are ready to grow; you are early in your
                practice, determined, and want to fast-track your learning and get a working system
                in place; or you are already experienced and want to master the art of client
                creation. A master has mastered the basics and never stops doing the basics.
              </p>
            </div>
            <div>
              <p
                className="font-inter font-medium uppercase tracking-label mb-8"
                style={{ fontSize: '11px', opacity: 0.55 }}
              >
                Who it isn't for
              </p>
              <p
                className="font-fraunces font-normal text-birch"
                style={{ fontSize: '1rem', lineHeight: 1.8, opacity: 0.45 }}
              >
                People looking for a passive marketing system that works without your personal
                input; those who won't make time for the weekly calls and assignments; anyone
                looking for fast hacks rather than a practice that works over time.
              </p>
            </div>
          </div>
        </section>

        <div style={{ borderTop: '1px solid rgba(227,217,189,0.12)' }} />

        {/* ── Testimonials ──────────────────────────────────────── */}
        <section style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
          <p
            className="font-inter font-medium uppercase tracking-label mb-10"
            style={{ fontSize: '11px', opacity: 0.55 }}
          >
            What participants have said
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                style={{ padding: '2rem', border: '1px solid rgba(227,217,189,0.12)' }}
              >
                <p
                  className="font-fraunces italic text-birch mb-6"
                  style={{ fontSize: '1rem', lineHeight: 1.75, opacity: 0.85 }}
                >
                  "{t.quote}"
                </p>
                <p className="font-inter text-birch" style={{ fontSize: '12px', opacity: 0.45 }}>
                  — {t.name}, {t.role}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div style={{ borderTop: '1px solid rgba(227,217,189,0.12)' }} />

        {/* ── Pricing ───────────────────────────────────────────── */}
        <section style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
          <p
            className="font-inter font-medium uppercase tracking-label mb-10"
            style={{ fontSize: '11px', opacity: 0.55 }}
          >
            Investment
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {pricing.map((tier, i) => (
              <div
                key={tier.label}
                style={{
                  padding: '2.5rem 2rem',
                  borderTop: '1px solid rgba(227,217,189,0.12)',
                  borderBottom: '1px solid rgba(227,217,189,0.12)',
                  borderLeft: i === 0 ? '1px solid rgba(227,217,189,0.12)' : undefined,
                  borderRight: '1px solid rgba(227,217,189,0.12)',
                }}
              >
                <p
                  className="font-inter font-medium uppercase tracking-label mb-4 text-birch"
                  style={{ fontSize: '10px', opacity: 0.45 }}
                >
                  {tier.label}
                </p>
                <p
                  className="font-fraunces font-normal text-birch mb-3"
                  style={{ fontSize: '1.75rem', lineHeight: 1.2 }}
                >
                  {tier.price}
                </p>
                {tier.description && (
                  <p
                    className="font-fraunces font-normal text-birch"
                    style={{ fontSize: '0.875rem', lineHeight: 1.6, opacity: 0.5 }}
                  >
                    {tier.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        <div style={{ borderTop: '1px solid rgba(227,217,189,0.12)' }} />

        {/* ── About ─────────────────────────────────────────────── */}
        <section style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
          <p
            className="font-inter font-medium uppercase tracking-label mb-8"
            style={{ fontSize: '11px', opacity: 0.55 }}
          >
            About Moritz
          </p>
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="shrink-0 relative" style={{ width: '120px', height: '150px' }}>
              <Image
                src="/images/portrait.jpeg"
                alt="Moritz Lembert"
                fill
                sizes="120px"
                className="object-cover object-top grayscale"
                style={{
                  maskImage:
                    'radial-gradient(ellipse 90% 90% at 50% 40%, black 40%, transparent 80%)',
                  WebkitMaskImage:
                    'radial-gradient(ellipse 90% 90% at 50% 40%, black 40%, transparent 80%)',
                }}
              />
            </div>
            <div style={{ maxWidth: '520px' }}>
              <p
                className="font-fraunces font-normal text-birch mb-4"
                style={{ fontSize: '1.0625rem', lineHeight: 1.8, opacity: 0.85 }}
              >
                I built my own practice from near-zero to six figures. Before that: professional
                dancer and choreographer across Europe, somatic teacher, martial artist, and several
                thousand hours of meditation. I am ICF PCC-certified and have worked alongside
                coaches, consultants, therapists, and founders for over seven years.
              </p>
              <p
                className="font-fraunces font-normal text-birch"
                style={{ fontSize: '1.0625rem', lineHeight: 1.8, opacity: 0.85 }}
              >
                What I teach here is what I did and what I have watched my clients do.
              </p>
            </div>
          </div>
        </section>

        <div style={{ borderTop: '1px solid rgba(227,217,189,0.12)' }} />

        {/* ── Guide — bottom ────────────────────────────────────── */}
        <section style={{ paddingTop: '5rem', paddingBottom: '3rem' }}>
          <GuideBlock />
        </section>

        <div style={{ borderTop: '1px solid rgba(227,217,189,0.12)' }} />

        {/* ── Final CTA ─────────────────────────────────────────── */}
        <section style={{ paddingTop: '6rem', paddingBottom: '9rem', textAlign: 'center' }}>
          <h2
            className="font-fraunces font-normal text-birch mb-4"
            style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
            }}
          >
            Six weeks. Starting 23 September.
          </h2>
          <p
            className="font-fraunces font-normal text-birch mb-10"
            style={{ fontSize: '1.0625rem', opacity: 0.5 }}
          >
            Limited to 12 places.
          </p>
          <a
            href={CTA_HREF}
            className="inline-block font-inter font-medium no-underline"
            style={{
              backgroundColor: 'var(--amber)',
              color: 'var(--surface)',
              padding: '0.875rem 2.5rem',
              fontSize: '13px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            Write to me to join
          </a>
        </section>

      </div>
    </div>
  )
}
