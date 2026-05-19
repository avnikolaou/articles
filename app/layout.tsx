import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ReactNode } from 'react';

import { Analytics } from '@vercel/analytics/next';

import { Providers } from '@/app/providers/theme-provider';

import './globals.css';

const _geist = Geist({ subsets: ['latin'] });
const _geistMono = Geist_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: 'Avraam Nikolaou | Frontend Developer',
  description:
    'Frontend developer building beautiful, performant web applications. Read articles on modern web development.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)'
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)'
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml'
      }
    ],
    apple: '/apple-icon.png'
  }
};

const RootLayout = ({
  children
}: Readonly<{
  children: ReactNode;
}>) => (
  <html lang="en" suppressHydrationWarning>
    <body className="font-sans antialiased bg-background text-foreground">
      <Providers>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </Providers>
    </body>
  </html>
);

export default RootLayout;
