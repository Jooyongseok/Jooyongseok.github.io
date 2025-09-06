import "../globals.css";
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { locales, Locale } from '@/lib/i18n';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children, params
}: { children: ReactNode; params: { locale: Locale } }) {
  const messages = useMessages();
  if (!locales.includes(params.locale)) notFound();

  return (
    <html lang={params.locale}>
      <body className="min-h-screen flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
