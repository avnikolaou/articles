import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { JSX } from 'react/jsx-runtime';

import { ArrowLeft, Calendar, Clock } from 'lucide-react';

import { MOCK_ARTICLES } from '@/app/lib/types';
import IntrinsicElements = JSX.IntrinsicElements;

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const generateMetadata = async ({ params }: ArticlePageProps): Promise<Metadata> => {
  const { slug } = await params;
  const article = MOCK_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: 'Article not found | Avraam Nikolaou',
      description: 'The requested article could not be found.'
    };
  }

  const title = `${article.title} | Avraam Nikolaou`;
  const description = article.excerpt;
  const url = `/articles/${article.slug}`;
  const image = '/web-app-manifest-512x512.png';

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Avraam Nikolaou',
      type: 'article',
      publishedTime: article.publishedAt,
      authors: ['Avraam Nikolaou'],
      tags: article.tags,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: article.title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image]
    }
  };
};

const ArticleDetail = async ({ params }: ArticlePageProps) => {
  const { slug } = await params;
  const article = MOCK_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

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
            <Link
              href="mailto:avnikolaou@outlook.com"
              className="text-foreground/70 hover:text-accent text-sm transition-colors"
            >
              Contact
            </Link>
            <Link href="/admin" className="text-foreground/70 hover:text-accent text-sm transition-colors">
              Admin
            </Link>
          </div>
        </div>
      </nav>

      {/* Article Content */}
      <div className="mx-auto max-w-4xl px-6 py-16">
        <Link
          href="/articles"
          className="text-accent hover:text-accent/80 mb-8 inline-flex items-center gap-2 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to articles
        </Link>

        {/* Header */}
        <div className="mb-12 space-y-6">
          <div className="space-y-3">
            <div className="inline-block">
              <span className="bg-accent/10 text-accent rounded-full px-3 py-1 text-xs font-medium">
                {article.category}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-balance md:text-5xl">{article.title}</h1>
          </div>

          {/* Meta Information */}
          <div className="text-foreground/60 border-border/50 flex flex-wrap items-center gap-6 border-t border-b py-4 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {article.publishedAt}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {article.readTime} min read
            </div>
          </div>

          {/* Tags */}
          {article.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span key={tag} className="bg-secondary/50 text-foreground/70 rounded-full px-3 py-1 text-xs">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Article Content */}
        <div className="prose prose-invert text-foreground max-w-none">
          <article className="space-y-6 text-lg leading-relaxed">
            {article.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('#')) {
                const level = paragraph.match(/^#+/)?.[0].length || 1;
                const text = paragraph.replace(/^#+\s*/, '');
                const HeadingTag = `h${Math.min(level + 1, 6)}` as keyof IntrinsicElements;
                return (
                  <HeadingTag
                    key={index}
                    className={`mt-8 mb-4 font-bold ${level === 1 ? 'text-3xl' : level === 2 ? 'text-2xl' : 'text-xl'}`}
                  >
                    {text}
                  </HeadingTag>
                );
              }

              if (paragraph.startsWith('```')) {
                const lines = paragraph.split('\n');
                const code = lines.slice(1, -1).join('\n');
                return (
                  <pre key={index} className="bg-secondary/50 border-border/50 overflow-x-auto rounded-lg border p-4">
                    <code className="text-foreground/80 text-sm">{code}</code>
                  </pre>
                );
              }

              return (
                <p key={index} className="text-foreground/80">
                  {paragraph}
                </p>
              );
            })}
          </article>
        </div>

        {/* Related Articles */}
        {/*<div className="border-border/50 mt-16 border-t pt-12">*/}
        {/*  <h2 className="mb-6 text-2xl font-bold">More Articles</h2>*/}
        {/*  <div className="grid gap-4">*/}
        {/*    {MOCK_ARTICLES.filter((a) => a.id !== article.id)*/}
        {/*      .slice(0, 2)*/}
        {/*      .map((relatedArticle) => (*/}
        {/*        <Link*/}
        {/*          key={relatedArticle.id}*/}
        {/*          href={`/articles/${relatedArticle.slug}`}*/}
        {/*          className="group border-border hover:border-accent/50 hover:bg-secondary/40 rounded-lg border p-4 transition-all"*/}
        {/*        >*/}
        {/*          <h3 className="group-hover:text-accent font-semibold transition-colors">{relatedArticle.title}</h3>*/}
        {/*          <p className="text-foreground/60 mt-1 text-sm">{relatedArticle.excerpt}</p>*/}
        {/*        </Link>*/}
        {/*      ))}*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>

      {/* Footer */}
      <footer className="border-border/50 mt-24 border-t">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <p className="text-foreground/50 text-xs">
            © 2026 Avraam Nikolaou. Built with Next.js, Tailwind CSS, and TypeScript.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default ArticleDetail;
