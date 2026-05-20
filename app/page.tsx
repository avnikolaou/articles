import type { Metadata } from 'next';
import Link from 'next/link';

import Footer from '@/app/components/footer';
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
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Avraam Nikolaou | Frontend Developer',
    description:
      'Frontend developer building beautiful, performant web applications. Read articles on modern web development.'
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
            {/*<Link href="/articles" className="text-sm text-foreground/70 hover:text-accent transition-colors">*/}
            {/*  Articles*/}
            {/*</Link>*/}
            <Link href="/about" className="text-foreground/70 hover:text-accent text-sm transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-foreground/70 hover:text-accent text-sm transition-colors">
              Contact
            </Link>
            {/*<Link href="/admin" className="text-sm text-foreground/70 hover:text-accent transition-colors">*/}
            {/*  Admin*/}
            {/*</Link>*/}
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
          {/*<Link*/}
          {/*  href="/articles"*/}
          {/*  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/90 transition-colors group"*/}
          {/*>*/}
          {/*  Read Articles*/}
          {/*  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />*/}
          {/*</Link>*/}
          <Link
            href="/about"
            className="border-border bg-secondary/20 hover:bg-secondary/40 text-foreground inline-flex items-center justify-center rounded-lg border px-6 py-3 font-medium transition-colors"
          >
            About Me
          </Link>
        </div>

        {/* Featured Articles Preview - Coming Soon */}
        <div className="space-y-6">
          <p className="text-foreground/60 text-sm font-semibold tracking-wide uppercase">Featured Articles</p>

          <div className="border-border/50 bg-secondary/20 flex items-center justify-center rounded-lg border py-12">
            <div className="space-y-3 text-center">
              <p className="text-foreground font-medium">Articles coming soon</p>
              <p className="text-foreground/70 text-sm">
                Check back soon for in-depth articles on frontend development, performance optimization, and web
                technologies.
              </p>
              {/*<Link*/}
              {/*  href="/articles"*/}
              {/*  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors mt-4"*/}
              {/*>*/}
              {/*  View all articles*/}
              {/*  <ArrowRight className="w-4 h-4" />*/}
              {/*</Link>*/}
            </div>
          </div>

          {/* Commented out featured articles section - uncomment when articles are available
          <div className="grid gap-4">
            {[
              { slug: 'building-high-performance-react-applications', title: 'Building High-Performance React Applications', desc: 'Techniques and best practices for optimizing React performance at scale', category: 'React', date: '3 days ago', time: '8 min' },
              { slug: 'future-of-web-development-web-components', title: 'The Future of Web Development: Web Components', desc: 'Exploring the rise of web components and their impact on modern frontend development', category: 'Web APIs', date: '1 week ago', time: '12 min' },
              { slug: 'optimizing-core-web-vitals', title: 'Optimizing Core Web Vitals for Better UX', desc: 'A comprehensive guide to improving your site\'s Core Web Vitals scores', category: 'Performance', date: '2 weeks ago', time: '10 min' },
            ].map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group p-5 rounded-lg border border-border/50 hover:border-accent/50 bg-secondary/30 hover:bg-secondary/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-foreground/60">
                      {article.desc}
                    </p>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-accent/20 text-accent whitespace-nowrap">
                    {article.category}
                  </span>
                </div>
                <p className="text-xs text-foreground/50 mt-4">
                  {article.time} read • {article.date}
                </p>
              </Link>
            ))}
          </div>
          */}
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Home;
