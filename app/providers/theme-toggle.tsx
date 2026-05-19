'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { Moon, Sun } from 'lucide-react';

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative inline-flex h-9 w-16 items-center rounded-full bg-muted p-1" aria-hidden="true">
        <div className="absolute inset-1 rounded-full bg-accent" />

        <div className="relative z-10 flex w-full items-center justify-between px-1">
          <Sun size={16} className="opacity-30" />
        </div>

        <div className="absolute right-1 top-1 h-7 w-7 rounded-full bg-background" />
      </div>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative inline-flex h-9 w-16 items-center rounded-full bg-muted p-1 transition-colors hover:bg-muted/80"
      aria-label="Toggle theme"
    >
      {/* Slider background */}
      <div
        className={`absolute inset-1 rounded-full transition-all duration-300 ${
          theme === 'dark' ? 'bg-accent' : 'bg-accent'
        }`}
      />

      {/* Icons container */}
      <div className="relative z-10 flex w-full items-center justify-between px-1">
        {/* Sun icon for light mode */}
        <Sun
          size={16}
          className={`transition-all duration-300 ${
            theme === 'light' ? 'text-accent-foreground opacity-100' : 'opacity-30'
          }`}
        />

        {/* Moon icon for dark mode */}
        <Moon
          size={16}
          className={`transition-all duration-300 ${
            theme === 'dark' ? 'text-accent-foreground opacity-100' : 'opacity-30'
          }`}
        />
      </div>

      {/* Moving slider */}
      <div
        className={`absolute top-1 h-7 w-7 rounded-full bg-background transition-all duration-300 ${
          theme === 'dark' ? 'right-1' : 'left-1'
        }`}
      />
    </button>
  );
};
