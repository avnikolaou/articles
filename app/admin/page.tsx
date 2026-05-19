import Link from 'next/link';

import { Edit2, Plus, Trash2 } from 'lucide-react';

import { MOCK_ARTICLES } from '@/app/lib/types';
import { ThemeToggle } from '@/app/providers/theme-toggle';

const AdminPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      {/* Navigation */}
      <nav className="border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
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
            <Link href="/articles" className="text-sm text-foreground/70 hover:text-accent transition-colors">
              Articles
            </Link>
            <Link href="/about" className="text-sm text-foreground/70 hover:text-accent transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm text-foreground/70 hover:text-accent transition-colors">
              Contact
            </Link>
            <Link href="/admin" className="text-sm text-accent font-medium">
              Admin
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Dashboard</h1>
            <p className="text-lg text-foreground/70">Manage your articles</p>
          </div>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/90 transition-colors">
            <Plus className="w-5 h-5" />
            New Article
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-lg border border-border bg-secondary/20">
            <p className="text-sm text-foreground/60 mb-2">Total Articles</p>
            <p className="text-3xl font-bold">{MOCK_ARTICLES.length}</p>
          </div>
          <div className="p-6 rounded-lg border border-border bg-secondary/20">
            <p className="text-sm text-foreground/60 mb-2">Published</p>
            <p className="text-3xl font-bold">{MOCK_ARTICLES.length}</p>
          </div>
          <div className="p-6 rounded-lg border border-border bg-secondary/20">
            <p className="text-sm text-foreground/60 mb-2">Drafts</p>
            <p className="text-3xl font-bold">0</p>
          </div>
        </div>

        {/* Articles Table */}
        <div className="border border-border rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-secondary/20">
                <th className="px-6 py-4 text-left text-sm font-semibold">Title</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Category</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Published</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                <th className="px-6 py-4 text-right text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_ARTICLES.map((article) => (
                <tr key={article.id} className="border-b border-border hover:bg-secondary/20 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium">{article.title}</td>
                  <td className="px-6 py-4 text-sm text-foreground/70">
                    <span className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent">{article.category}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-foreground/70">{article.publishedAt}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className="text-xs px-3 py-1 rounded-full bg-green-500/10 text-green-400">Published</span>
                  </td>
                  <td className="px-6 py-4 text-right text-sm space-x-2">
                    <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-secondary transition-colors text-foreground/70 hover:text-foreground">
                      <Edit2 className="w-4 h-4" />
                      Edit
                    </button>
                    <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-secondary transition-colors text-foreground/70 hover:text-red-400">
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-24">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <p className="text-xs text-foreground/50">
            © 2026 Avraam Nikolaou. Built with Next.js, Tailwind CSS, and TypeScript.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default AdminPage;
