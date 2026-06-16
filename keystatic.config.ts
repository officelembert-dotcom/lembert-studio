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
      'English — Pages': ['homePage', 'aboutPage', 'workPage', 'contactPage'],
      'English — Content': ['writings', 'voices', 'workDetailPages'],
      'Deutsch — Seiten': ['homePageDe', 'aboutPageDe', 'workPageDe', 'contactPageDe'],
      'Deutsch — Inhalte': ['writingsDe', 'voicesDe', 'workDetailPagesDe'],
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

    workDetailPages: collection({
      label: 'Work — Detail pages',
      slugField: 'title',
      path: 'content/work-pages/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({
          name: { label: 'Page name' },
          slug: { label: 'Slug (do not change)', description: 'retained-advisory, deep-day, or retreats' },
        }),
        headline: fields.text({ label: 'Headline' }),
        paragraphs: fields.array(
          fields.text({ label: 'Paragraph', multiline: true }),
          { label: 'Body paragraphs', itemLabel: (props) => props.value.slice(0, 60) + '…' }
        ),
        image: fields.image({
          label: 'Header image',
          description: 'Each page gets its own folder — uploads will not overwrite each other.',
          directory: 'public/images/work-pages',
          publicPath: '/images/work-pages/',
          validation: { isRequired: false },
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

    writingsDe: collection({
      label: 'Writings (DE)',
      slugField: 'title',
      path: 'content/writings-de/*',
      format: { contentField: 'body' },
      entryLayout: 'form',
      schema: {
        title: fields.slug({
          name: { label: 'Titel' },
          slug: { label: 'URL-Slug', description: 'Wird automatisch aus dem Titel erzeugt. Nach Veröffentlichung nicht ändern.' },
        }),
        date: fields.date({
          label: 'Datum',
          defaultValue: { kind: 'today' },
          validation: { isRequired: true },
        }),
        coverImage: fields.image({
          label: 'Titelbild',
          description: 'Wird oben im Beitrag und als Vorschaubild in der Übersicht gezeigt.',
          directory: 'public/images/writings-de',
          publicPath: '/images/writings-de/',
          validation: { isRequired: false },
        }),
        body: fields.mdx({
          label: 'Inhalt',
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

    workDetailPagesDe: collection({
      label: 'Work — Detailseiten (DE)',
      slugField: 'title',
      path: 'content/work-pages-de/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({
          name: { label: 'Seitenname' },
          slug: { label: 'Slug (nicht ändern)', description: 'retained-advisory, deep-day oder retreats' },
        }),
        headline: fields.text({ label: 'Überschrift' }),
        paragraphs: fields.array(
          fields.text({ label: 'Absatz', multiline: true }),
          { label: 'Textabsätze', itemLabel: (props) => props.value.slice(0, 60) + '…' }
        ),
        image: fields.image({
          label: 'Kopfbild',
          description: 'Jede Seite hat ihren eigenen Ordner — Uploads überschreiben sich nicht gegenseitig.',
          directory: 'public/images/work-pages-de',
          publicPath: '/images/work-pages-de/',
          validation: { isRequired: false },
        }),
      },
    }),

    voicesDe: collection({
      label: 'Stimmen (DE)',
      slugField: 'name',
      path: 'content/voices-de/*',
      format: { data: 'json' },
      schema: {
        name: fields.slug({
          name: { label: 'Vollständiger Name' },
          slug: { label: 'ID', description: 'Automatisch erzeugt. Nicht ändern.' },
        }),
        title: fields.text({
          label: 'Rolle & Unternehmen',
          description: 'z.B. "Gründer & CEO, Acme AG" — leer lassen, falls nicht benötigt',
          validation: { isRequired: false },
        }),
        photo: fields.image({
          label: 'Foto',
          description: 'Quadratisches Foto empfohlen, mindestens 200×200px',
          directory: 'public/images/voices-de',
          publicPath: '/images/voices-de/',
          validation: { isRequired: false },
        }),
        quote: fields.text({
          label: 'Zitat',
          multiline: true,
          validation: { isRequired: true },
        }),
        order: fields.integer({
          label: 'Anzeigereihenfolge',
          description: 'Niedrigere Zahl = wird zuerst angezeigt. 1, 2, 3…',
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
        newsletterIntro: fields.text({
          label: 'Newsletter intro text',
          description: 'Shown above the email field in the "Stay close" section',
          multiline: true,
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

    homePageDe: singleton({
      label: 'Home page (DE)',
      path: 'content/pages/home-de',
      format: { data: 'json' },
      schema: {
        headline: fields.text({
          label: 'Haupt-Überschrift',
          validation: { isRequired: true },
        }),
        subheadline: fields.text({
          label: 'Unter-Überschrift (kursiv, unterhalb der Headline)',
          validation: { isRequired: true },
        }),
        practiceItems: fields.array(
          fields.text({ label: 'Eintrag' }),
          {
            label: 'Praxis-Punkte',
            description: 'Die drei Zeilen unter PRAXIS',
            itemLabel: (props) => props.value,
          }
        ),
        heroImage: fields.image({
          label: 'Hero-Bild',
          description: 'Querformat-Foto, mindestens 1600px breit. Füllt beim Laden den gesamten Bildschirm.',
          directory: 'public/images',
          publicPath: '/images/',
          validation: { isRequired: false },
        }),
        newsletterIntro: fields.text({
          label: 'Newsletter-Einleitungstext',
          description: 'Wird über dem E-Mail-Feld im Abschnitt "In Verbindung bleiben" angezeigt',
          multiline: true,
          validation: { isRequired: false },
        }),
      },
    }),

    aboutPageDe: singleton({
      label: 'About page (DE)',
      path: 'content/pages/about-de',
      format: { data: 'json' },
      schema: {
        paragraphs: fields.array(
          fields.text({ label: 'Absatz', multiline: true }),
          {
            label: 'Bio-Absätze',
            description: 'Jeder Eintrag ist ein Absatz deiner Biografie',
            itemLabel: (props) => props.value.slice(0, 60) + '…',
          }
        ),
        portrait: fields.image({
          label: 'Portraitfoto',
          description: 'Hochformat empfohlen, ca. 400×500px oder größer.',
          directory: 'public/images',
          publicPath: '/images/',
          validation: { isRequired: false },
        }),
      },
    }),

    workPageDe: singleton({
      label: 'Work page (DE)',
      path: 'content/pages/work-de',
      format: { data: 'json' },
      schema: {
        headline: fields.text({
          label: 'Seitenüberschrift',
          defaultValue: 'Wege der Zusammenarbeit',
        }),
        offers: fields.array(
          fields.object({
            title: fields.text({ label: 'Angebotstitel' }),
            body: fields.text({ label: 'Beschreibung', multiline: true }),
          }),
          {
            label: 'Angebote',
            description: 'Die Wege der Zusammenarbeit',
            itemLabel: (props) => props.fields.title.value,
          }
        ),
        closing: fields.text({
          label: 'Abschlusszeile',
          description: 'Ruhige, kursive Zeile am Ende',
          defaultValue: 'Für Preise und Details zur Zusammenarbeit, melde dich gerne.',
        }),
        image: fields.image({
          label: 'Kopfbild',
          description: 'Querformat-Foto. Füllt den oberen Seitenbereich wie der Home-Hero.',
          directory: 'public/images',
          publicPath: '/images/',
          validation: { isRequired: false },
        }),
      },
    }),

    contactPageDe: singleton({
      label: 'Contact page (DE)',
      path: 'content/settings/contact-de',
      format: { data: 'json' },
      schema: {
        headline: fields.text({ label: 'Überschrift', defaultValue: 'Erster Schritt' }),
        intro: fields.text({
          label: 'Einleitungstext',
          multiline: true,
          defaultValue: 'Ein erstes Gespräch, ohne Kosten. Im Studio in Berneck oder per Anruf.',
        }),
        email: fields.text({
          label: 'Kontakt-E-Mail',
          defaultValue: 'moritz@lembertstudio.com',
        }),
        formspreeId: fields.text({
          label: 'Formspree Formular-ID',
          description: 'Kostenlos registrieren auf formspree.io → Formular erstellen → ID hier einfügen (z.B. xpzgkqbd)',
          defaultValue: '',
        }),
        questions: fields.array(
          fields.object({
            id: fields.text({ label: 'Feld-ID (ohne Leerzeichen, z.B. "ihr_name")' }),
            label: fields.text({ label: 'Fragetext für den Besucher' }),
            placeholder: fields.text({ label: 'Platzhaltertext im Feld' }),
            type: fields.select({
              label: 'Feldtyp',
              options: [
                { label: 'Kurztext', value: 'text' },
                { label: 'E-Mail-Adresse', value: 'email' },
                { label: 'Langtext (Textarea)', value: 'textarea' },
              ],
              defaultValue: 'text',
            }),
            required: fields.checkbox({ label: 'Pflichtfeld', defaultValue: false }),
          }),
          {
            label: 'Formularfragen',
            description: 'Fragen im Kontaktformular hinzufügen, entfernen oder neu ordnen',
            itemLabel: (props) => props.fields.label.value,
          }
        ),
      },
    }),
  },
})
