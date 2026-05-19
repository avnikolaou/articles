import Link from 'next/link';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { ThemeToggle } from '@/app/providers/theme-toggle';
import Footer from '@/app/components/footer';

const Home = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      {/* Navigation */}
      <nav className="border-b border-border/50">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent"
          >
            AN
          </Link>
          <div className="flex items-center gap-8">
            {/*<Link href="/articles" className="text-sm text-foreground/70 hover:text-accent transition-colors">*/}
            {/*  Articles*/}
            {/*</Link>*/}
            <Link href="/about" className="text-sm text-foreground/70 hover:text-accent transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm text-foreground/70 hover:text-accent transition-colors">
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
      <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
        {/* Greeting Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-xs font-medium text-accent mb-8">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
          Welcome to my digital space
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
          Building beautiful,{' '}
          <span className="text-transparent bg-gradient-to-r from-accent via-accent/80 to-accent/60 bg-clip-text">
            performant
          </span>{' '}
          web experiences
        </h1>

        {/* Subheading */}
        <p className="text-lg text-foreground/70 max-w-2xl mb-12 leading-relaxed text-balance">
          I&apos;m a frontend developer with over 14 years of experience crafting scalable, user-centric applications.
          Here I share insights on modern web development, performance optimization, and building delightful user
          experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          {/*<Link*/}
          {/*  href="/articles"*/}
          {/*  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/90 transition-colors group"*/}
          {/*>*/}
          {/*  Read Articles*/}
          {/*  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />*/}
          {/*</Link>*/}
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-6 py-3 border border-border bg-secondary/20 hover:bg-secondary/40 text-foreground font-medium rounded-lg transition-colors"
          >
            Learn More
          </Link>
        </div>

        {/* Featured Articles Preview - Coming Soon */}
        <div className="space-y-6">
          <p className="text-sm font-semibold text-foreground/60 uppercase tracking-wide">Featured Articles</p>

          <div className="flex items-center justify-center py-12 rounded-lg border border-border/50 bg-secondary/20">
            <div className="text-center space-y-3">
              <p className="text-foreground font-medium">Articles coming soon</p>
              <p className="text-sm text-foreground/70">
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
