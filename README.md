BlueCare Vet Clinic – Landing Page

Tech stack: Next.js (App Router), Tailwind CSS v4, shadcn/ui, lucide-react, Resend.

## Getting Started

1) Install dependencies

```bash
npm install
```

2) Environment variables

Create `.env.local` with:

```
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=destination@example.com
```

3) Images

- Place pet/clinic images in `public/images` (e.g., `hero.jpg`, `service-*.jpg`).
- Place review photos in `public/reviews` (e.g., `rev1.jpg`, `rev2.jpg`, `rev3.jpg`).

4) Run the development server

```bash
npm run dev
```

## Deploy on Vercel

Push to GitHub and import the repo in Vercel. Add the env vars (`RESEND_API_KEY`, `CONTACT_TO_EMAIL`) in Vercel Project Settings.

## SEO

- Metadata defined in `src/app/layout.tsx`
- Provide descriptive `alt` text for images
