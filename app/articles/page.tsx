'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Search } from 'lucide-react';
import { ThemeToggle } from '@/app/providers/theme-toggle';
import { MOCK_ARTICLES } from '@/app/lib/types';

const ArticlesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', ...Array.from(new Set(MOCK_ARTICLES.map((article) => article.category)))];

  const filteredArticles = MOCK_ARTICLES.filter((article) => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      {/* Navigation */}
      <nav className="border-b border-border/50 sticky top-0 bg-background/80 backdrop-blur">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent"
          >
            AN
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/" className="text-sm text-foreground/70 hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/articles" className="text-sm text-accent font-medium">
              Articles
            </Link>
            <Link href="/about" className="text-sm text-foreground/70 hover:text-accent transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm text-foreground/70 hover:text-accent transition-colors">
              Contact
            </Link>
            <Link href="/admin" className="text-sm text-foreground/70 hover:text-accent transition-colors">
              Admin
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="space-y-8 mb-16">
          <div>
            <h1 className="text-5xl font-bold tracking-tight mb-4 text-balance">Articles</h1>
            <p className="text-lg text-foreground/70">
              Insights on modern web development, performance optimization, and building beautiful user experiences.
            </p>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-foreground/40" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-10 py-3 rounded-lg border border-border/50 bg-secondary/20 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
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
                className="group block p-6 rounded-lg border border-border hover:border-accent/50 hover:bg-secondary/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
                style={{
                  transitionDelay: `${index * 50}ms`
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent font-medium group-hover:bg-accent/20 transition-colors duration-300">
                        {article.category}
                      </span>
                      <span className="text-xs text-foreground/50">{article.publishedAt}</span>
                      <span className="text-xs text-foreground/50">•</span>
                      <span className="text-xs text-foreground/50">{article.readTime} min read</span>
                    </div>
                    <h2 className="text-xl font-bold group-hover:text-accent transition-colors duration-300">
                      {article.title}
                    </h2>
                    <p className="text-foreground/70 leading-relaxed text-sm">{article.excerpt}</p>
                  </div>
                  <div className="ml-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0">
                    <span className="text-lg font-medium">→</span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="flex items-center justify-center py-20">
              <div className="text-center space-y-6 max-w-md">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">No articles found</h3>
                  <p className="text-foreground/70">
                    {searchQuery
                      ? "We couldn't find any articles matching your search."
                      : 'No articles available in this category.'}
                  </p>
                </div>
                <div className="space-y-4 pt-4">
                  {searchQuery && (
                    <div className="space-y-2">
                      <p className="text-sm text-foreground/60">
                        Try adjusting your search terms or browse by category.
                      </p>
                      <button
                        onClick={() => setSearchQuery('')}
                        className="px-4 py-2 rounded-lg bg-accent/10 text-accent hover:bg-accent/20 transition-colors text-sm font-medium"
                      >
                        Clear search
                      </button>
                    </div>
                  )}
                  {!searchQuery && selectedCategory !== 'All' && (
                    <div className="space-y-2">
                      <p className="text-sm text-foreground/60">Try selecting a different category.</p>
                      <button
                        onClick={() => setSelectedCategory('All')}
                        className="px-4 py-2 rounded-lg bg-accent/10 text-accent hover:bg-accent/20 transition-colors text-sm font-medium"
                      >
                        View all categories
                      </button>
                    </div>
                  )}
                  {!searchQuery && selectedCategory === 'All' && (
                    <p className="text-sm text-foreground/60">Check back soon for new content!</p>
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
