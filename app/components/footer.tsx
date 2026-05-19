import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => (
  <footer className="border-t border-border/50 mt-24">
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="flex flex-col gap-8">
        <div>
          <p className="text-sm font-semibold text-foreground/60 uppercase tracking-wide mb-4">Connect</p>
          <div className="flex gap-4">
            <a
              href="https://github.com/avnikolaou"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-border/50 hover:border-accent/50 text-foreground/70 hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/avraam-nikolaou/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-border/50 hover:border-accent/50 text-foreground/70 hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:avnikolaou@outlook.com"
              className="p-2.5 rounded-lg border border-border/50 hover:border-accent/50 text-foreground/70 hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8">
          <p className="text-xs text-foreground/50">
            © 2026 Avraam Nikolaou. Built with Next.js, Tailwind CSS, and TypeScript.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
