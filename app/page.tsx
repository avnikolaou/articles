import type { Metadata } from 'next';
import Link from 'next/link';

import Footer from '@/app/components/footer';
import Navigation from '@/app/components/navigation';
import { MOCK_ARTICLES } from '@/app/lib/types';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000');

export const metadata: Metadata = {
  title: 'Avraam Nikolaou | Frontend Developer',
  description:
    'Frontend developer building beautiful, performant web applications. Read articles on modern web development.',
  alternates: {
    canonical: `${siteUrl}/`
  },
  openGraph: {
    title: 'Avraam Nikolaou | Frontend Developer',
    description:
      'Frontend developer building beautiful, performant web applications. Read articles on modern web development.',
    url: `${siteUrl}/`,
    siteName: 'Avraam Nikolaou',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Avraam Nikolaou | Frontend Developer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Avraam Nikolaou | Frontend Developer',
    description:
      'Frontend developer building beautiful, performant web applications. Read articles on modern web development.',
    images: [`${siteUrl}/og-image.png`]
  }
};

const Home = () => {
  return (
    <main className="from-background via-background to-secondary/5 min-h-screen bg-gradient-to-br">
      <Navigation />

      {/* Hero Section */}
      <div className="mx-auto max-w-4xl px-6 py-24 md:py-32">
        {/* Greeting Badge */}
        <div className="bg-accent/10 border-accent/30 text-accent mb-8 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium">
          <span className="bg-accent h-2 w-2 animate-pulse rounded-full"></span>
          Welcome to my digital space
        </div>

        {/* Main Headline */}
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-balance md:text-6xl">
          Building beautiful,{' '}
          <span className="from-accent via-accent/80 to-accent/60 bg-gradient-to-r bg-clip-text text-transparent">
            performant
          </span>{' '}
          web experiences
        </h1>

        {/* Subheading */}
        <h2 className="text-foreground/70 mb-12 max-w-2xl text-lg leading-relaxed text-balance">
          I&apos;m a frontend developer with over 7 years of experience crafting scalable, user-centric applications.
          Here I share insights on modern web development, performance optimization, and building delightful user
          experiences.
        </h2>

        {/* CTA Buttons */}
        <div className="mb-20 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/articles"
            className="bg-accent text-accent-foreground hover:bg-accent/90 group inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium transition-colors"
          >
            Read Articles
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/about"
            className="border-border bg-secondary/20 hover:bg-secondary/40 text-foreground inline-flex items-center justify-center rounded-lg border px-6 py-3 font-medium transition-colors"
          >
            About Me
          </Link>
        </div>

        {/* Featured Articles Preview */}
        <div className="space-y-6">
          <p className="text-foreground/60 text-sm font-semibold tracking-wide uppercase">Featured Articles</p>

          <div className="grid gap-4">
            {MOCK_ARTICLES.slice(0, 3).map((article) => (
              <Link
                key={article.id}
                href={`/articles/${article.slug}`}
                className="border-border/50 bg-secondary/30 hover:border-accent/50 hover:bg-secondary/50 group rounded-lg border p-5 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-foreground group-hover:text-accent mb-2 font-semibold transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-foreground/60 text-sm">{article.excerpt}</p>
                  </div>
                  <span className="bg-accent/20 text-accent rounded-full px-3 py-1 text-xs whitespace-nowrap">
                    {article.category}
                  </span>
                </div>
                <p className="text-foreground/50 mt-4 text-xs">
                  {article.readTime} min read • {article.publishedAt}
                </p>
              </Link>
            ))}
          </div>

          <Link
            href="/articles"
            className="text-accent hover:text-accent/80 mt-2 inline-flex items-center gap-2 text-sm font-medium transition-colors"
          >
            View all articles
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Home;
