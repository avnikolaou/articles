import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ReactNode } from 'react';

import AnalyticsLoader from '@/app/components/analytics-loader';
import CookieConsent from '@/app/components/cookie-consent';
import { Providers } from '@/app/providers/theme-provider';

import './globals.css';

const _geist = Geist({ subsets: ['latin'] });
const _geistMono = Geist_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: 'Avraam Nikolaou | Frontend Developer',
  description:
    'Frontend developer building beautiful, performant web applications. Read articles on modern web development.',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any'
      },
      {
        url: '/favicon.svg',
        type: 'image/svg+xml'
      },
      {
        url: '/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png'
      }
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      }
    ]
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? ''
  }
};

const RootLayout = ({
  children
}: Readonly<{
  children: ReactNode;
}>) => (
  <html lang="en" suppressHydrationWarning>
    <body className="bg-background text-foreground font-sans antialiased">
      <Providers>
        {children}
        <CookieConsent />
        <AnalyticsLoader />
      </Providers>
    </body>
  </html>
);

export default RootLayout;
