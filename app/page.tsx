import type { Metadata } from 'next';
import Link from 'next/link';

import Footer from '@/app/components/footer';
import { MOCK_ARTICLES } from '@/app/lib/types';
import { ThemeToggle } from '@/app/providers/theme-toggle';

export const metadata: Metadata = {
  title: 'Avraam Nikolaou | Frontend Developer',
  description:
    'Frontend developer building beautiful, performant web applications. Read articles on modern web development.',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Avraam Nikolaou | Frontend Developer',
    description:
      'Frontend developer building beautiful, performant web applications. Read articles on modern web development.',
    url: '/',
    siteName: 'Avraam Nikolaou',
    type: 'website',
    images: [
      {
        url: '/api/og?title=Building%20beautiful%2C%20performant%20web%20experiences&cta=Read%20articles%20at%20avnikolaou.com',
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
    images: [
      '/api/og?title=Building%20beautiful%2C%20performant%20web%20experiences&cta=Read%20articles%20at%20avnikolaou.com'
    ]
  }
};

const Home = () => {
  return (
    <main className="from-background via-background to-secondary/5 min-h-screen bg-gradient-to-br">
      {/* Navigation */}
      <nav className="border-border/50 border-b">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-6">
          <Link
            href="/"
            className="from-accent to-accent/70 bg-gradient-to-r bg-clip-text text-xl font-bold text-transparent"
          >
            AN
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/articles" className="text-foreground/70 hover:text-accent text-sm transition-colors">
              Articles
            </Link>
            <Link href="/about" className="text-foreground/70 hover:text-accent text-sm transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-foreground/70 hover:text-accent text-sm transition-colors">
              Contact
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>

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
        <p className="text-foreground/70 mb-12 max-w-2xl text-lg leading-relaxed text-balance">
          I&apos;m a frontend developer with over 7 years of experience crafting scalable, user-centric applications.
          Here I share insights on modern web development, performance optimization, and building delightful user
          experiences.
        </p>

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
