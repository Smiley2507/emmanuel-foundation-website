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
  title: "Jeanine and Emmanuel Foundation | Empowering Communities Across Rwanda",
  description: "Jeanine and Emmanuel Foundation works with vulnerable communities across Rwanda — protecting the environment, strengthening livelihoods, and building a more equitable future.",
  icons: {
    icon: '/Vector.png',
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
