import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Always Have Clients: 6 Weeks Practice Dojo — Lembert Studio',
  description: 'Always Have Clients, the 6 weeks practice dojo: a group programme for coaches, consultants, and therapists who want a system that creates clients continuously.',
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
  'mailto:moritz@lembertstudio.com' +
  '?subject=' + encodeURIComponent('Always Have Clients — I would like to join') +
  '&body=' + encodeURIComponent('Hi Moritz,\n\nI would like to join the September cohort.\n\nMy name is: \nMy practice is: \n')

const GUIDE_HREF =
  'https://docs.google.com/document/d/1HePBs6Epah2c-Rc3A_piF9KgVmRlKwnA7VRqOrL62-k/preview'

const testimonials = [
  {
    quote:
      'My practice is full. Instead of teaching scattered 6 days a week, I now teach 3 complete days, and doubled my income without working more. I even have more time for the projects that are close to my heart.',
    name: 'Alina Jacobs',
    role: 'Dance artist & pedagogue (LPDC®), Gyrotonic & Gyrokinesis trainer',
  },
  {
    quote:
      "I was a bodywork practitioner scrambling for a mediocre hourly rate. Fear of money and not having enough was, for 30 years, my biggest concern. I got tenfold out of the investment, and I'm still running.",
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
  {
    quote:
      'I earned back all the money I invested and more, with 15 to 20 clients a week. What I loved most is the combination of concrete business advice and deep personal work. Moritz walks his talk, and the playfulness makes reaching out to people much more lighthearted.',
    name: 'Lukas Teml',
    role: 'Grinberg Practitioner & Lebens- und Sozialberater',
  },
]

const pricing = [
  {
    label: 'Solo',
    price: 'CHF 640',
    description: null,
  },
  {
    label: 'With a friend',
    price: 'CHF 450 each',
    description: 'Bring a friend; you both pay only 450.',
  },
  {
    label: 'Programme + 1:1 coaching',
    price: 'CHF 2,500',
    description: 'Add me as your business coach: the programme plus 4 one-to-one sessions.',
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
          Free guidebook
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
          Want to start already?
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
        Get the free guidebook
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
            Always Have Clients · 6 Weeks Practice Dojo
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
            Build a system that creates clients, continuously.
          </h1>
          <p
            className="font-fraunces font-normal text-birch mb-12"
            style={{ fontSize: '1.1875rem', lineHeight: 1.7, maxWidth: '560px', opacity: 0.75 }}
          >
            This is the actual practice that successful clients and I apply, and what I used to
            grow my coaching business from 2k in the first year to 130k last year.
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
              "I called 70 people I had worked with, in one week, and gained 7 new clients.
              In 4 months I earned more from my business than in the whole last year."
            </p>
            <p className="font-inter text-birch" style={{ fontSize: '12px', opacity: 0.5 }}>
              — Lukas Teml, Grinberg Practitioner & Lebens- und Sozialberater
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
              Limited to 12 places · Starting 23 September
            </p>
          </div>

          {/* Guarantee, right at the decision */}
          <p
            className="font-fraunces italic text-birch mb-12"
            style={{ fontSize: '1rem', lineHeight: 1.6, opacity: 0.6 }}
          >
            Sign a new client within the programme, or your money back.
          </p>

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
              communication, share their service. They land the client. They serve that client well, because that is what they are trained to do. And in serving them, they stop doing
              what created them. Then the client ends. And the scramble begins again.
            </p>
            <p
              className="font-fraunces font-normal text-birch"
              style={{ fontSize: '1.0625rem', lineHeight: 1.8, opacity: 0.85 }}
            >
              This is not a discipline problem. It is a structural one. You never built a practice
              and system; you built a series of individual clients. And it somehow seems mysterious
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
            practice: a small number of things you do consistently, that create the conditions for
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

        {/* ── What you will learn ───────────────────────────────── */}
        <section style={{ paddingTop: '5rem', paddingBottom: '5rem', maxWidth: '620px' }}>
          <p
            className="font-inter font-medium uppercase tracking-label mb-8"
            style={{ fontSize: '11px', opacity: 0.55 }}
          >
            What you will learn
          </p>
          <div className="space-y-5">
            {[
              'Create an offer you can sell.',
              'The activities that lead to clients, learned together in a group.',
              'Build your own client creation system, one that works with how you work.',
              'Shatter the beliefs and stories that keep you from building a practice with the income you want and the clients you love.',
              'Become clear on who to work with and how to reach them.',
              'Create the right context around you, in an environment of people who all work towards the same goal: a sustainable practice.',
            ].map((item) => (
              <p
                key={item}
                className="font-fraunces font-normal text-birch"
                style={{ fontSize: '1.0625rem', lineHeight: 1.7, opacity: 0.85 }}
              >
                {item}
              </p>
            ))}
          </div>
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

        {/* ── The outcome ───────────────────────────────────────── */}
        <section style={{ paddingTop: '0', paddingBottom: '5rem', maxWidth: '620px' }}>
          <p
            className="font-inter font-medium uppercase tracking-label mb-8"
            style={{ fontSize: '11px', opacity: 0.55 }}
          >
            The outcome
          </p>
          <p
            className="font-fraunces font-normal text-birch"
            style={{ fontSize: '1.1875rem', lineHeight: 1.75, opacity: 0.9 }}
          >
            New clients. A system that works with how you work. Clarity on who you serve and how
            to reach them, and daily actions to take.
          </p>
        </section>

        {/* ── The guarantee ─────────────────────────────────────── */}
        <section
          style={{
            marginBottom: '5rem',
            padding: '2rem 2.25rem',
            border: '1px solid var(--amber)',
            maxWidth: '560px',
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
              fontSize: '1.0625rem',
              lineHeight: 1.7,
              opacity: 0.95,
            }}
          >
            Apply what you learn in this programme, and if you do not sign a new client, I will
            refund you the money.
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
          <p
            className="font-fraunces font-normal text-birch mb-10"
            style={{ fontSize: '1.0625rem', lineHeight: 1.8, opacity: 0.85, maxWidth: '620px' }}
          >
            Everything included: six live calls, one assignment each week, tracking and
            accountability between calls, the group thread, every call recorded, and the
            money-back guarantee.
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
          <p
            className="font-fraunces italic text-birch mt-10"
            style={{ fontSize: '1rem', lineHeight: 1.7, opacity: 0.7, maxWidth: '520px' }}
          >
            "It's an investment that came back and was really worth doing."
          </p>
          <p className="font-inter text-birch mt-3" style={{ fontSize: '12px', opacity: 0.45 }}>
            — Alice Shido, Founder Panta Rhei Studio
          </p>
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
                I have worked as a professional dancer and trainer, run 15 retreats, worked with
                50 practitioners one-to-one and over 100 people in my groups. I have helped
                coaches, massage therapists, and consultants double or triple their income; three
                clients went from 30k to 120k, one to 250k. And I have generated over 500k in my
                own coaching practice, 80% of it in the last four years.
              </p>
              <p
                className="font-fraunces font-normal text-birch"
                style={{ fontSize: '1.0625rem', lineHeight: 1.8, opacity: 0.85 }}
              >
                I did this through conversations and very little conventional marketing. If you
                would like to create this yourself, this programme is for you.
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
