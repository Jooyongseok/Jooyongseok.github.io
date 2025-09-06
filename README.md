# HADD SCIENCE - Multilingual Website (Next.js 14)

This is a clean, bilingual (Korean/English) starter for haddscience.com.

## Features
- Next.js 14 App Router + TailwindCSS
- i18n via `next-intl` (default: ko, also en)
- Basic pages: Home, About, Product/ADDGEL, News (JSON-backed), Contact (Formspree)
- Simple language switcher
- Ready for Vercel deployment

## Getting Started
```bash
pnpm i   # or npm i / yarn
pnpm dev # http://localhost:3000
```

## Add News
Edit `content/news/news.json`. Each item needs `{ id, date, title_ko, title_en, excerpt_ko, excerpt_en }`.

## Translations
Edit `messages/ko.json` and `messages/en.json`.

## Deploy (Vercel, free)
1. Push this repo to GitHub.
2. Import to Vercel → Framework **Next.js**.
3. Build command: `next build` (default). No env vars required.
4. Set your domain (e.g., haddscience.com).
5. Contact form: create a Formspree project and replace the form `action` URL in `/app/[locale]/contact/page.tsx`.

## Admin Options
- **Decap (Netlify) CMS (Git-based)**: Add `/admin` with CMS config to edit JSON/Markdown via Git auth.
- **Headless CMS**: Connect to Supabase or Contentful and replace the news data source.
- **NextAuth Admin**: Add protected `/admin` route with credentials from env and CRUD APIs (requires a persistent DB).

## Notes
- Content is placeholder; copy text/images that you own rights to.
- The site is static-friendly and fast. You can add analytics, sitemap, and OG assets later.
