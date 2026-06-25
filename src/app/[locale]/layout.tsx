import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  display: 'swap',
});

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  display: 'swap',
});


export const metadata: Metadata = {
  metadataBase: new URL('https://www.jef-foundation.org'),
  title: {
    default: 'Jeannine and Emmanuel Foundation | Empowering Communities Across Rwanda',
    template: '%s | JEF Rwanda',
  },
  description:
    'Jeannine and Emmanuel Foundation (JEF) works with Rwanda\'s most vulnerable communities — protecting the environment, strengthening livelihoods, and building a more equitable future in Rusizi District and beyond.',
  keywords: [
    'Jeannine and Emmanuel Foundation',
    'JEF Rwanda',
    'Rwanda NGO',
    'community development Rwanda',
    'environmental conservation Rwanda',
    'nonprofit Rwanda',
    'humanitarian aid Rwanda',
    'Rusizi District',
    'youth empowerment Rwanda',
    'Rwanda education foundation',
  ],
  authors: [{ name: 'Jeannine and Emmanuel Foundation', url: 'https://www.jef-foundation.org' }],
  creator: 'Jeannine and Emmanuel Foundation',
  publisher: 'Jeannine and Emmanuel Foundation',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['fr_FR', 'rw_RW'],
    url: 'https://www.jef-foundation.org',
    siteName: 'Jeannine and Emmanuel Foundation',
    title: 'Jeannine and Emmanuel Foundation | Empowering Communities Across Rwanda',
    description:
      'JEF works with Rwanda\'s most vulnerable communities — protecting the environment, strengthening livelihoods, and building an equitable future.',
    images: [
      {
        url: '/images/og-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'JEF staff team at a community field event in Rwanda',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jeannine and Emmanuel Foundation | Rwanda',
    description:
      'JEF works with Rwanda\'s most vulnerable communities — protecting the environment and building equitable futures.',
    images: ['/images/og-preview.jpg'],
  },
  icons: {
    icon: '/Vector.png',
    shortcut: '/Vector.png',
    apple: '/Vector.png',
  },
};

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  const locale = params.locale;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${dmSans.variable} ${fraunces.variable} antialiased bg-[var(--color-bg-white)] text-[var(--color-text-primary)]`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main className="min-h-screen">
            {props.children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
