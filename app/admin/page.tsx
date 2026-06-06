import Link from 'next/link';

import { Edit2, Plus, Trash2 } from 'lucide-react';

import { MOCK_ARTICLES } from '@/app/lib/types';
import { ThemeToggle } from '@/app/providers/theme-toggle';

const AdminPage = () => {
  return (
    <main className="from-background via-background to-secondary/5 min-h-screen bg-gradient-to-br">
      {/* Navigation */}
      <nav className="border-border/50 border-b">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
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
            <Link href="/admin" className="text-accent text-sm font-medium">
              Admin
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h1 className="mb-2 text-4xl font-bold md:text-5xl">Dashboard</h1>
            <p className="text-foreground/70 text-lg">Manage your articles</p>
          </div>
          <button className="bg-accent text-accent-foreground hover:bg-accent/90 inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium transition-colors">
            <Plus className="h-5 w-5" />
            New Article
          </button>
        </div>

        {/* Stats */}
        <div className="mb-12 grid grid-cols-3 gap-6">
          <div className="border-border bg-secondary/20 rounded-lg border p-6">
            <p className="text-foreground/60 mb-2 text-sm">Total Articles</p>
            <p className="text-3xl font-bold">{MOCK_ARTICLES.length}</p>
          </div>
          <div className="border-border bg-secondary/20 rounded-lg border p-6">
            <p className="text-foreground/60 mb-2 text-sm">Published</p>
            <p className="text-3xl font-bold">{MOCK_ARTICLES.length}</p>
          </div>
          <div className="border-border bg-secondary/20 rounded-lg border p-6">
            <p className="text-foreground/60 mb-2 text-sm">Drafts</p>
            <p className="text-3xl font-bold">0</p>
          </div>
        </div>

        {/* Articles Table */}
        <div className="border-border overflow-hidden rounded-lg border">
          <table className="w-full">
            <thead>
              <tr className="border-border bg-secondary/20 border-b">
                <th className="px-6 py-4 text-left text-sm font-semibold">Title</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Category</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Published</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                <th className="px-6 py-4 text-right text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_ARTICLES.map((article) => (
                <tr key={article.id} className="border-border hover:bg-secondary/20 border-b transition-colors">
                  <td className="px-6 py-4 text-sm font-medium">{article.title}</td>
                  <td className="text-foreground/70 px-6 py-4 text-sm">
                    <span className="bg-accent/10 text-accent rounded-full px-3 py-1 text-xs">{article.category}</span>
                  </td>
                  <td className="text-foreground/70 px-6 py-4 text-sm">{article.publishedAt}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-400">Published</span>
                  </td>
                  <td className="space-x-2 px-6 py-4 text-right text-sm">
                    <button className="hover:bg-secondary text-foreground/70 hover:text-foreground inline-flex items-center gap-2 rounded-lg px-3 py-2 transition-colors">
                      <Edit2 className="h-4 w-4" />
                      Edit
                    </button>
                    <button className="hover:bg-secondary text-foreground/70 inline-flex items-center gap-2 rounded-lg px-3 py-2 transition-colors hover:text-red-400">
                      <Trash2 className="h-4 w-4" />
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
      <footer className="border-border/50 mt-24 border-t">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <p className="text-foreground/50 text-xs">
            © 2026 Avraam Nikolaou. Built with Next.js, Tailwind CSS, and TypeScript.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default AdminPage;
