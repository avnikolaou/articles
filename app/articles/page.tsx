'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Search } from 'lucide-react';

import { MOCK_ARTICLES } from '@/app/lib/types';
import { ThemeToggle } from '@/app/providers/theme-toggle';

const SEARCH_DEBOUNCE_DELAY = 300;

const ArticlesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState<string>('');

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, SEARCH_DEBOUNCE_DELAY);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [searchQuery]);

  const categories = ['All', ...Array.from(new Set(MOCK_ARTICLES.map((article) => article.category)))];

  const normalizedSearchQuery = debouncedSearchQuery.toLowerCase();

  const filteredArticles = MOCK_ARTICLES.filter((article) => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(normalizedSearchQuery) ||
      article.excerpt.toLowerCase().includes(normalizedSearchQuery);

    return matchesCategory && matchesSearch;
  });

  const handleClearSearch = () => {
    setSearchQuery('');
    setDebouncedSearchQuery('');
  };

  return (
    <main className="from-background via-background to-secondary/5 min-h-screen bg-gradient-to-br">
      {/* Navigation */}
      <nav className="border-border/50 bg-background/80 sticky top-0 border-b backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-6">
          <Link
            href="/"
            className="from-accent to-accent/70 bg-gradient-to-r bg-clip-text text-xl font-bold text-transparent"
          >
            AN
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/" className="text-foreground/70 hover:text-accent text-sm transition-colors">
              Home
            </Link>
            <Link href="/articles" className="text-accent text-sm font-medium">
              Articles
            </Link>
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

      <div className="mx-auto max-w-4xl px-6 py-24">
        {/* Header */}
        <div className="mb-16 space-y-8">
          <div>
            <h1 className="mb-4 text-5xl font-bold tracking-tight text-balance">Articles</h1>
            <p className="text-foreground/70 text-lg">
              Insights on modern web development, performance optimization, and building beautiful user experiences.
            </p>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="text-foreground/40 absolute top-3.5 left-4 h-5 w-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              className="border-border/50 bg-secondary/20 text-foreground placeholder:text-foreground/40 focus:border-accent/50 focus:ring-accent/20 w-full rounded-lg border px-10 py-3 transition-all focus:ring-1 focus:outline-none"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-secondary/30 text-foreground/70 hover:text-foreground hover:bg-secondary/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Articles List */}
        <div className="space-y-6">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article, index) => (
              <Link
                key={article.id}
                href={`/articles/${article.slug}`}
                className="group border-border hover:border-accent/50 hover:bg-secondary/40 hover:shadow-accent/5 block rounded-lg border p-6 transition-all duration-300 hover:shadow-lg"
                style={{
                  transitionDelay: `${index * 50}ms`
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="bg-accent/10 text-accent group-hover:bg-accent/20 rounded-full px-3 py-1 text-xs font-medium transition-colors duration-300">
                        {article.category}
                      </span>
                      <span className="text-foreground/50 text-xs">{article.publishedAt}</span>
                      <span className="text-foreground/50 text-xs">•</span>
                      <span className="text-foreground/50 text-xs">{article.readTime} min read</span>
                    </div>
                    <h2 className="group-hover:text-accent text-xl font-bold transition-colors duration-300">
                      {article.title}
                    </h2>
                    <p className="text-foreground/70 text-sm leading-relaxed">{article.excerpt}</p>
                  </div>
                  <div className="text-accent ml-4 flex-shrink-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="text-lg font-medium">→</span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="flex items-center justify-center py-20">
              <div className="max-w-md space-y-6 text-center">
                <div className="space-y-2">
                  <h3 className="text-foreground text-2xl font-bold">No articles found</h3>
                  <p className="text-foreground/70">
                    {debouncedSearchQuery
                      ? "We couldn't find any articles matching your search."
                      : 'No articles available in this category.'}
                  </p>
                </div>
                <div className="space-y-4 pt-4">
                  {debouncedSearchQuery && (
                    <div className="space-y-2">
                      <p className="text-foreground/60 text-sm">
                        Try adjusting your search terms or browse by category.
                      </p>
                      <button
                        onClick={handleClearSearch}
                        className="bg-accent/10 text-accent hover:bg-accent/20 rounded-lg px-4 py-2 text-sm font-medium transition-colors"
                      >
                        Clear search
                      </button>
                    </div>
                  )}
                  {!debouncedSearchQuery && selectedCategory !== 'All' && (
                    <div className="space-y-2">
                      <p className="text-foreground/60 text-sm">Try selecting a different category.</p>
                      <button
                        onClick={() => setSelectedCategory('All')}
                        className="bg-accent/10 text-accent hover:bg-accent/20 rounded-lg px-4 py-2 text-sm font-medium transition-colors"
                      >
                        View all categories
                      </button>
                    </div>
                  )}
                  {!debouncedSearchQuery && selectedCategory === 'All' && (
                    <p className="text-foreground/60 text-sm">Check back soon for new content!</p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default ArticlesPage;
