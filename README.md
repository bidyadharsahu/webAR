# Magic Frames XR Website

A modern, responsive website for Magic Frames XR - an augmented reality platform that transforms restaurant visits into interactive memories for customers and immersive marketing tools for restaurants.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Features

- 🎨 Dark theme with gradient accents (EMA.co inspired design)
- 📱 Fully mobile responsive
- 🚀 Server-side rendering for better SEO
- ⚡ Optimized performance
- 🍪 GDPR-compliant cookie consent
- 🔄 Smooth page transitions and animations

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with header, footer
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Global styles
│   ├── product/
│   │   ├── get-your-moment/         # B2C product page
│   │   └── partner-with-restaurants/ # B2B product page
│   ├── resources/
│   │   ├── blog/            # Blog page
│   │   ├── news/            # News & Media page
│   │   ├── videos/          # Videos page
│   │   └── white-papers/    # White Papers page
│   ├── company/
│   │   ├── about/           # About Us page
│   │   └── careers/         # Join the Team page
│   ├── try-now/             # CTA/Contact page
│   └── privacy-policy/      # Privacy Policy page
└── components/
    ├── Header.tsx           # Navigation with dropdowns
    ├── Footer.tsx           # Footer with links
    └── CookieBanner.tsx     # Cookie consent banner
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Pages Overview

### Homepage
- Hero section with animated background
- Products showcase (B2C & B2B)
- Features/Benefits section
- How it works
- Stats section
- Call-to-action

### Product Pages
- **Get Your Moment (B2C)**: AR memories for customers
- **Partner With Restaurants (B2B)**: AR menus and marketing for restaurants

### Resources
- **Blog**: Articles and insights
- **News & Media**: Press coverage and releases
- **Videos**: Product demos and customer stories
- **White Papers**: Research and industry reports

### Company
- **About Us**: Company story, vision, mission
- **Join the Team**: Open positions and culture

### Other
- **Try Now**: Contact form for customers and restaurants
- **Privacy Policy**: Legal page

## Customization

### Colors
Edit `tailwind.config.ts` to customize the color palette:

```typescript
colors: {
  accent: {
    purple: '#a855f7',
    pink: '#ec4899',
    cyan: '#06b6d4',
    orange: '#f97316',
  },
  // ...
}
```

### Content
All content is directly in the page components. Edit the respective page files to update text, images, and data.

## License

MIT License - feel free to use this for your own projects.
