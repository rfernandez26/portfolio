# Rachel Fernandez — Personal Portfolio

A responsive personal portfolio built with Next.js, React, TypeScript, and Lucide icons.

## Pages

- **Home** — introduction, profile photo, and links to explore the portfolio
- **About** — biography, values, and learning interests
- **Education** — academic background and areas of study
- **Hobbies** — singing, music, and dancing
- **Contact** — contact details and an email composition form

## Getting Started

Install dependencies and start the development server:

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Editing the portfolio

- `app/page.tsx` — home page
- `app/about.tsx` — biography and interests
- `app/education.tsx` — schools and qualifications
- `app/hobbies.tsx` — hobbies
- `app/contact.tsx` — contact details and message form
- `app/portfolio.css` — shared styling and responsive layouts
- `public/profile.jpg` — profile photo

The Contact form opens the visitor’s email app with a prepared message. The visitor sends the email from that app; the site does not send email directly.

## Production build

```bash
npm run build
npm start
```

## Checks

```bash
npx eslint app
npm run build
```

The application uses the Next.js App Router and Geist fonts.
