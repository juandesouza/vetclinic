# BlueCare Vet Clinic – Landing Page

A professional veterinary clinic website built with Next.js, featuring modern design and full functionality for pet care services.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: lucide-react
- **Email**: Resend API

## Features

- Responsive landing page design
- Service showcase with pricing
- Customer testimonials
- Contact form with email integration
- Professional clinic information
- Google Maps integration

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create `.env.local` with:

```env
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=destination@example.com
```

### 3. Images

Ensure you have the following images in place:
- Service images in `public/images/` (service-*.jpg)
- Review photos in `public/reviews/` (rev*.jpg)

### 4. Development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## Deployment

### GitHub Setup

This repository is ready for deployment to various platforms. Follow these steps:

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

### Deployment Options

#### Option 1: Vercel (Recommended)

1. Import your GitHub repository in [Vercel](https://vercel.com)
2. Add environment variables in Vercel Project Settings:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`
3. Deploy automatically with each push to main branch

#### Option 2: Netlify

1. Connect your GitHub repository to [Netlify](https://netlify.com)
2. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
3. Add environment variables in Netlify site settings

#### Option 3: GitHub Pages (Static Export)

For static hosting, update `next.config.ts`:

```typescript
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}
```

Then build and deploy:
```bash
npm run build
# Deploy the 'out' folder to GitHub Pages
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | API key for Resend email service | Yes |
| `CONTACT_TO_EMAIL` | Email address to receive contact form submissions | Yes |

## Project Structure

```
├── src/
│   ├── app/           # Next.js App Router
│   │   ├── api/       # API routes
│   │   ├── layout.tsx # Root layout
│   │   └── page.tsx   # Home page
│   ├── components/    # Reusable components
│   │   └── ui/        # shadcn/ui components
│   └── lib/           # Utilities
├── public/            # Static assets
│   ├── images/        # Service images
│   └── reviews/       # Review photos
└── package.json       # Dependencies and scripts
```

## SEO Features

- Metadata defined in `src/app/layout.tsx`
- Open Graph tags for social sharing
- Descriptive alt text for all images
- Semantic HTML structure
- Mobile-responsive design

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary to BlueCare Vet Clinic.
