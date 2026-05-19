import Link from 'next/link';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { MOCK_ARTICLES } from '@/app/lib/types';
import { notFound } from 'next/navigation';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

const ArticleDetail = ({ params }: ArticlePageProps) => {
  const article = MOCK_ARTICLES.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

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
            <Link href="/articles" className="text-sm text-foreground/70 hover:text-accent transition-colors">
              Articles
            </Link>
            <Link href="/about" className="text-sm text-foreground/70 hover:text-accent transition-colors">
              About
            </Link>
            <Link
              href="mailto:avnikolaou@outlook.com"
              className="text-sm text-foreground/70 hover:text-accent transition-colors"
            >
              Contact
            </Link>
            <Link href="/admin" className="text-sm text-foreground/70 hover:text-accent transition-colors">
              Admin
            </Link>
          </div>
        </div>
      </nav>

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to articles
        </Link>

        {/* Header */}
        <div className="space-y-6 mb-12">
          <div className="space-y-3">
            <div className="inline-block">
              <span className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent font-medium">
                {article.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-balance">{article.title}</h1>
          </div>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-foreground/60 border-t border-b border-border/50 py-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {article.publishedAt}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {article.readTime} min read
            </div>
          </div>

          {/* Tags */}
          {article.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span key={tag} className="text-xs px-3 py-1 rounded-full bg-secondary/50 text-foreground/70">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Article Content */}
        <div className="prose prose-invert max-w-none text-foreground">
          <article className="space-y-6 text-lg leading-relaxed">
            {article.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('#')) {
                const level = paragraph.match(/^#+/)?.[0].length || 1;
                const text = paragraph.replace(/^#+\s*/, '');
                const HeadingTag = `h${Math.min(level + 1, 6)}` as keyof JSX.IntrinsicElements;
                return (
                  <HeadingTag
                    key={index}
                    className={`font-bold mt-8 mb-4 ${level === 1 ? 'text-3xl' : level === 2 ? 'text-2xl' : 'text-xl'}`}
                  >
                    {text}
                  </HeadingTag>
                );
              }

              if (paragraph.startsWith('```')) {
                const lines = paragraph.split('\n');
                const code = lines.slice(1, -1).join('\n');
                return (
                  <pre key={index} className="bg-secondary/50 p-4 rounded-lg overflow-x-auto border border-border/50">
                    <code className="text-sm text-foreground/80">{code}</code>
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
        <div className="mt-16 pt-12 border-t border-border/50">
          <h2 className="text-2xl font-bold mb-6">More Articles</h2>
          <div className="grid gap-4">
            {MOCK_ARTICLES.filter((a) => a.id !== article.id)
              .slice(0, 2)
              .map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  href={`/articles/${relatedArticle.slug}`}
                  className="group p-4 rounded-lg border border-border hover:border-accent/50 hover:bg-secondary/40 transition-all"
                >
                  <h3 className="font-semibold group-hover:text-accent transition-colors">{relatedArticle.title}</h3>
                  <p className="text-sm text-foreground/60 mt-1">{relatedArticle.excerpt}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-24">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <p className="text-xs text-foreground/50">
            © 2026 Avraam Nikolaou. Built with Next.js, Tailwind CSS, and TypeScript.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default ArticleDetail;
