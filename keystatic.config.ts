import { config, collection, singleton, fields } from '@keystatic/core'

const githubOwner = process.env.NEXT_PUBLIC_GITHUB_OWNER
const githubRepo  = process.env.NEXT_PUBLIC_GITHUB_REPO

export default config({
  storage:
    githubOwner && githubRepo
      ? {
          kind: 'github',
          repo: { owner: githubOwner, name: githubRepo },
        }
      : { kind: 'local' },

  ui: {
    brand: { name: 'Lembert Studio' },
    navigation: {
      Pages: ['homePage', 'aboutPage', 'workPage', 'retainedAdvisoryPage', 'deepDayPage', 'retreatsPage', 'contactPage'],
      Content: ['writings', 'voices'],
    },
  },

  collections: {

    writings: collection({
      label: 'Writings',
      slugField: 'title',
      path: 'content/writings/*',
      format: { contentField: 'body' },
      entryLayout: 'form',
      schema: {
        title: fields.slug({
          name: { label: 'Title' },
          slug: { label: 'URL slug', description: 'Auto-generated from title. Do not change after publishing.' },
        }),
        date: fields.date({
          label: 'Date',
          defaultValue: { kind: 'today' },
          validation: { isRequired: true },
        }),
        coverImage: fields.image({
          label: 'Cover image',
          description: 'Shown at the top of the writing and as thumbnail in the index.',
          directory: 'public/images/writings',
          publicPath: '/images/writings/',
          validation: { isRequired: false },
        }),
        body: fields.mdx({
          label: 'Body',
          options: {
            bold: true,
            italic: true,
            heading: [2, 3],
            blockquote: true,
            link: true,
            divider: true,
          },
        }),
      },
    }),

    voices: collection({
      label: 'Voices',
      slugField: 'name',
      path: 'content/voices/*',
      format: { data: 'json' },
      schema: {
        name: fields.slug({
          name: { label: 'Full name' },
          slug: { label: 'ID', description: 'Auto-generated. Do not change.' },
        }),
        title: fields.text({
          label: 'Role & company',
          description: 'e.g. "Founder & CEO, Acme AG" — leave blank if not needed',
          validation: { isRequired: false },
        }),
        photo: fields.image({
          label: 'Photo',
          description: 'Square photo recommended, minimum 200×200px',
          directory: 'public/images/voices',
          publicPath: '/images/voices/',
          validation: { isRequired: false },
        }),
        quote: fields.text({
          label: 'Quote',
          multiline: true,
          validation: { isRequired: true },
        }),
        order: fields.integer({
          label: 'Display order',
          description: 'Lower number = shown first. 1, 2, 3…',
          defaultValue: 99,
          validation: { isRequired: false },
        }),
      },
    }),
  },

  singletons: {

    homePage: singleton({
      label: 'Home page',
      path: 'content/pages/home',
      format: { data: 'json' },
      schema: {
        headline: fields.text({
          label: 'Main headline',
          validation: { isRequired: true },
        }),
        subheadline: fields.text({
          label: 'Sub-headline (italic, below headline)',
          validation: { isRequired: true },
        }),
        practiceItems: fields.array(
          fields.text({ label: 'Item' }),
          {
            label: 'Practice items',
            description: 'The three lines listed under PRACTICE',
            itemLabel: (props) => props.value,
          }
        ),
        heroImage: fields.image({
          label: 'Hero image',
          description: 'Landscape photo, at least 1600px wide. Fills the full screen on load.',
          directory: 'public/images',
          publicPath: '/images/',
          validation: { isRequired: false },
        }),
      },
    }),

    aboutPage: singleton({
      label: 'About page',
      path: 'content/pages/about',
      format: { data: 'json' },
      schema: {
        paragraphs: fields.array(
          fields.text({ label: 'Paragraph', multiline: true }),
          {
            label: 'Bio paragraphs',
            description: 'Each entry is one paragraph of your bio',
            itemLabel: (props) => props.value.slice(0, 60) + '…',
          }
        ),
        portrait: fields.image({
          label: 'Portrait photo',
          description: 'Portrait orientation recommended, approx 400×500px or larger.',
          directory: 'public/images',
          publicPath: '/images/',
          validation: { isRequired: false },
        }),
      },
    }),

    workPage: singleton({
      label: 'Work page',
      path: 'content/pages/work',
      format: { data: 'json' },
      schema: {
        headline: fields.text({
          label: 'Page headline',
          defaultValue: 'Ways to work together',
        }),
        offers: fields.array(
          fields.object({
            title: fields.text({ label: 'Offer title' }),
            body: fields.text({ label: 'Description', multiline: true }),
          }),
          {
            label: 'Offers',
            description: 'The three ways to work together',
            itemLabel: (props) => props.fields.title.value,
          }
        ),
        closing: fields.text({
          label: 'Closing line',
          description: 'Quiet italic line at the bottom',
          defaultValue: 'For pricing and engagement details, please get in touch.',
        }),
        image: fields.image({
          label: 'Header image',
          description: 'Landscape photo. Fills the top of the page like the home hero.',
          directory: 'public/images',
          publicPath: '/images/',
          validation: { isRequired: false },
        }),
      },
    }),

    retainedAdvisoryPage: singleton({
      label: 'Work — Retained Advisory',
      path: 'content/pages/retained-advisory',
      format: { data: 'json' },
      schema: {
        headline: fields.text({ label: 'Headline', defaultValue: 'Retained Advisory' }),
        paragraphs: fields.array(
          fields.text({ label: 'Paragraph', multiline: true }),
          { label: 'Body paragraphs', itemLabel: (props) => props.value.slice(0, 60) + '…' }
        ),
        image: fields.image({
          label: 'Header image',
          description: 'Atmospheric photo for the top of this page.',
          directory: 'public/images',
          publicPath: '/images/',
          validation: { isRequired: false },
        }),
      },
    }),

    deepDayPage: singleton({
      label: 'Work — Deep Day',
      path: 'content/pages/deep-day',
      format: { data: 'json' },
      schema: {
        headline: fields.text({ label: 'Headline', defaultValue: 'Deep Day' }),
        paragraphs: fields.array(
          fields.text({ label: 'Paragraph', multiline: true }),
          { label: 'Body paragraphs', itemLabel: (props) => props.value.slice(0, 60) + '…' }
        ),
        image: fields.image({
          label: 'Header image',
          description: 'Atmospheric photo for the top of this page.',
          directory: 'public/images',
          publicPath: '/images/',
          validation: { isRequired: false },
        }),
      },
    }),

    retreatsPage: singleton({
      label: 'Work — Retreats in the Rheintal',
      path: 'content/pages/retreats',
      format: { data: 'json' },
      schema: {
        headline: fields.text({ label: 'Headline', defaultValue: 'Retreats in the Rheintal' }),
        paragraphs: fields.array(
          fields.text({ label: 'Paragraph', multiline: true }),
          { label: 'Body paragraphs', itemLabel: (props) => props.value.slice(0, 60) + '…' }
        ),
        image: fields.image({
          label: 'Header image',
          description: 'Atmospheric photo for the top of this page.',
          directory: 'public/images',
          publicPath: '/images/',
          validation: { isRequired: false },
        }),
      },
    }),

    contactPage: singleton({
      label: 'Contact page',
      path: 'content/settings/contact',
      format: { data: 'json' },
      schema: {
        headline: fields.text({ label: 'Headline', defaultValue: 'To begin' }),
        intro: fields.text({
          label: 'Intro text',
          multiline: true,
          defaultValue: 'A first conversation, no charge. Either at the studio in Berneck or by call.',
        }),
        email: fields.text({
          label: 'Contact email',
          defaultValue: 'moritz@lembertstudio.com',
        }),
        formspreeId: fields.text({
          label: 'Formspree form ID',
          description: 'Sign up free at formspree.io → create a form → paste the ID here (e.g. xpzgkqbd)',
          defaultValue: '',
        }),
        questions: fields.array(
          fields.object({
            id: fields.text({ label: 'Field ID (no spaces, e.g. "your_name")' }),
            label: fields.text({ label: 'Question label shown to visitor' }),
            placeholder: fields.text({ label: 'Placeholder text inside the field' }),
            type: fields.select({
              label: 'Field type',
              options: [
                { label: 'Short text', value: 'text' },
                { label: 'Email address', value: 'email' },
                { label: 'Long text (textarea)', value: 'textarea' },
              ],
              defaultValue: 'text',
            }),
            required: fields.checkbox({ label: 'Required field', defaultValue: false }),
          }),
          {
            label: 'Form questions',
            description: 'Add, remove, or reorder the questions in your contact form',
            itemLabel: (props) => props.fields.label.value,
          }
        ),
      },
    }),
  },
})
