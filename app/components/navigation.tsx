import Link from 'next/link';
import { FC } from 'react';

import { ThemeToggle } from '@/app/providers/theme-toggle';

const Navigation: FC = () => {
  return (
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
  );
};

export default Navigation;
