# Lembert Studio — Website

A static Next.js website for Lembert Studio, deployable to Vercel or Cloudflare Pages.

---

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Adding a new Note

1. Create a new `.mdx` file in `/content/notes/`
2. Add frontmatter at the top:

```mdx
---
title: "Your note title"
date: "2026-06-15"
slug: "your-note-title"
---

Your content here. Markdown works: **bold**, *italic*, ## headings, etc.
```

3. Save the file. The note appears automatically in the index and gets its own page at `/notes/your-note-title`.

**Naming:** The filename should match the slug (e.g. `your-note-title.mdx`). Use lowercase and hyphens, no spaces.

---

## Adding a new Testimonial (Voice)

Open `/content/voices.json` and add a new entry to the array:

```json
{
  "name": "Client Name",
  "title": "Role, Company",
  "image": "/images/voices/client-name.jpg",
  "quote": "The testimonial text goes here.",
  "date": "2026-06"
}
```

Then place the photo at `/public/images/voices/client-name.jpg`.

- `title` is optional — remove the key if not needed
- `date` is optional — for your records, not displayed on the site
- Photos should be square, at least 160×160px (displayed at 80px, retina-ready)

---

## Deploying to Vercel

1. Push the project to a GitHub repository
2. Go to [vercel.com](https://vercel.com), import the repo
3. Vercel detects Next.js automatically — no configuration needed
4. Every push to `main` triggers a new deploy

## Deploying to Cloudflare Pages

1. Push to GitHub
2. In Cloudflare Pages, create a new project, connect the repo
3. Build command: `npm run build`
4. Output directory: `out`
5. Node version: `18` (set in environment variables)

---

## Project structure

```
/app              — Next.js App Router pages
/components       — Nav and Footer (shared across pages)
/content
  voices.json     — Testimonial data
  /notes          — MDX blog posts (one file per note)
/lib
  notes.ts        — Utility functions for reading notes
/public
  /images/voices  — Testimonial photos
```
