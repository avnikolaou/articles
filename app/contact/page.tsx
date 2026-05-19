import Link from 'next/link';
import { Github, Linkedin, Mail, ArrowLeft } from 'lucide-react';
import { ThemeToggle } from '@/app/providers/theme-toggle';

const ContactPage = () => {
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
            <Link href="/" className="text-sm text-foreground/70 hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/articles" className="text-sm text-foreground/70 hover:text-accent transition-colors">
              Articles
            </Link>
            <Link href="/about" className="text-sm text-foreground/70 hover:text-accent transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm text-accent font-medium">
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
        <div className="max-w-2xl mb-16">
          <Link href="/" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <h1 className="text-5xl font-bold tracking-tight mb-6 text-balance">Get in Touch</h1>
          <p className="text-lg text-foreground/70 text-balance">
            I&apos;m always interested in hearing about new projects and interesting ideas. Feel free to reach out!
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl">
          {/* Email */}
          <div className="p-8 rounded-lg border border-border/50 bg-secondary/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-accent/20">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground">Email</h3>
            </div>
            <p className="text-foreground/70 mb-4">For general inquiries and project discussions</p>
            <a
              href="mailto:avnikolaou@outlook.com"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors"
            >
              Send Email
            </a>
          </div>

          {/* GitHub */}
          <div className="p-8 rounded-lg border border-border/50 bg-secondary/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-accent/20">
                <Github className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground">GitHub</h3>
            </div>
            <p className="text-foreground/70 mb-4">Check out my projects and contributions</p>
            <a
              href="https://github.com/avnikolaou"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors"
            >
              Visit Profile
            </a>
          </div>

          {/* LinkedIn */}
          <div className="p-8 rounded-lg border border-border/50 bg-secondary/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-accent/20">
                <Linkedin className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground">LinkedIn</h3>
            </div>
            <p className="text-foreground/70 mb-4">Connect with me on professional network</p>
            <a
              href="https://linkedin.com/in/avraam-nikolaou/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors"
            >
              Connect
            </a>
          </div>

          {/* Response Time */}
          <div className="p-8 rounded-lg border border-border/50 bg-secondary/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-accent/20">
                <span className="w-5 h-5 text-accent font-bold">⏱</span>
              </div>
              <h3 className="font-semibold text-foreground">Response Time</h3>
            </div>
            <p className="text-foreground/70 mb-4">I typically respond within 24-48 hours</p>
            <p className="text-xs text-foreground/50">Timezone: UTC+2</p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 p-8 rounded-lg border border-border/50 bg-secondary/20 max-w-2xl">
          <h2 className="text-xl font-semibold text-foreground mb-4">What I&apos;m interested in</h2>
          <ul className="space-y-2 text-foreground/70">
            <li>Frontend development projects and consulting</li>
            <li>Performance optimization for web applications</li>
            <li>Technical writing and speaking opportunities</li>
            <li>Open source contributions and collaborations</li>
            <li>Mentoring and knowledge sharing</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
