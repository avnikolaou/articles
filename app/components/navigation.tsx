'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

import { ThemeToggle } from '@/app/providers/theme-toggle';

const Navigation: FC = () => {
  const pathname = usePathname();

  const getLinkClassName = (href: string) => {
    const isActive = href === '/articles' ? pathname.startsWith('/articles') : pathname === href;

    return isActive
      ? 'text-accent text-sm font-medium transition-colors'
      : 'text-foreground/70 hover:text-accent text-sm transition-colors';
  };

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
          <Link href="/articles" className={getLinkClassName('/articles')}>
            Articles
          </Link>
          <Link href="/about" className={getLinkClassName('/about')}>
            About
          </Link>
          <Link href="/contact" className={getLinkClassName('/contact')}>
            Contact
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
