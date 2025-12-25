# Emmanuel Foundation Website

A modern, premium website for the Emmanuel Foundation - a Rwanda-based non-profit organization dedicated to community wellbeing, environmental conservation, and sustainable development.

## 🌟 Features

- **Homepage** with hero slideshow, mission section, focus areas, impact stats, and blog preview
- **About Us** page with team section, values, and organizational story
- **Projects/Programs** page showcasing community, environmental, and development initiatives
- **Contact** page with interactive form and contact information
- **Donation** page with RWF currency support and Flutterwave integration ready
- **Blog** system with listing and individual post pages (ready for Sanity CMS)
- **Multilingual support** (English, French, Kinyarwanda) via next-intl
- **Premium animations** using Framer Motion
- **Parallax effects** on CTA sections
- **Fully responsive** design for all devices

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Internationalization**: next-intl
- **Icons**: Lucide React
- **Fonts**: Playfair Display (headings), Inter (body)

## 🎨 Design System

- **Primary Color**: Deep Blue (#1e3e8a)
- **Secondary Color**: Warm Yellow/Amber (#fbbf24)
- **Accent Color**: Light Blue/Cyan (#38bdf8)
- **Typography**: Playfair Display for headings, Inter for body text
- **Spacing**: Generous whitespace with consistent py-48 sections

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Smiley2507/emmanuel-foundation-website.git
cd emmanuel-foundation-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   └── [locale]/          # Internationalized routes
│       ├── about/         # About Us page
│       ├── blog/          # Blog listing and posts
│       ├── contact/       # Contact page
│       ├── donate/        # Donation page
│       ├── projects/      # Projects/Programs page
│       └── page.tsx       # Homepage
├── components/
│   ├── about/             # About page components
│   ├── home/              # Homepage components
│   └── layout/            # Shared layout components
├── i18n/                  # Internationalization config
├── lib/                   # Utilities and helpers
└── messages/              # Translation files (en, fr, rw)
```

## 🌐 Deployment

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Smiley2507/emmanuel-foundation-website)

Or manually:

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will auto-detect Next.js and configure the build
4. Deploy!

### Environment Variables

No environment variables are required for the current version. When integrating Sanity CMS and Flutterwave, add:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
FLUTTERWAVE_PUBLIC_KEY=your_public_key
FLUTTERWAVE_SECRET_KEY=your_secret_key
```

## 🔮 Upcoming Features

- [ ] Sanity CMS integration for blog content
- [ ] Flutterwave payment gateway integration
- [ ] Newsletter subscription functionality
- [ ] Social media sharing
- [ ] SEO optimization
- [ ] Analytics integration

## 📄 License

This project is proprietary and belongs to the Emmanuel Foundation.

## 🤝 Contributing

This is a private project for the Emmanuel Foundation. For inquiries, please contact the organization directly.

## 📧 Contact

Emmanuel Foundation  
Email: info@emmanuelfoundation.org  
Location: Kigali, Rwanda

---

Built with ❤️ for a sustainable future in Rwanda
