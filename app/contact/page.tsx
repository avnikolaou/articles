import type { Metadata } from 'next';
import Link from 'next/link';

import { ArrowLeft, Github, Linkedin, Mail } from 'lucide-react';

import { ThemeToggle } from '@/app/providers/theme-toggle';

export const metadata: Metadata = {
  title: 'Contact | Avraam Nikolaou',
  description:
    'Get in touch with Avraam Nikolaou for frontend consulting, performance optimization, technical writing, or collaboration opportunities.',
  alternates: {
    canonical: '/contact'
  },
  openGraph: {
    title: 'Contact | Avraam Nikolaou',
    description:
      'Get in touch with Avraam Nikolaou for frontend consulting, performance optimization, technical writing, or collaboration opportunities.',
    url: '/contact',
    siteName: 'Avraam Nikolaou',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Avraam Nikolaou',
    description:
      'Get in touch with Avraam Nikolaou for frontend consulting, performance optimization, technical writing, or collaboration opportunities.'
  }
};

const ContactPage = () => {
  return (
    <main className="from-background via-background to-secondary/5 min-h-screen bg-gradient-to-br">
      {/* Navigation */}
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
            <Link href="/contact" className="text-accent text-sm font-medium">
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
        <div className="mb-16 max-w-2xl">
          <Link href="/" className="text-accent hover:text-accent/80 mb-8 inline-flex items-center gap-2 font-medium">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-balance">Get in Touch</h1>
          <p className="text-foreground/70 text-lg text-balance">
            I&apos;m always interested in hearing about new projects and interesting ideas. Feel free to reach out!
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid max-w-2xl gap-8 md:grid-cols-2">
          {/* Email */}
          <div className="border-border/50 bg-secondary/20 rounded-lg border p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="bg-accent/20 rounded-lg p-2">
                <Mail className="text-accent h-5 w-5" />
              </div>
              <h3 className="text-foreground font-semibold">Email</h3>
            </div>
            <p className="text-foreground/70 mb-4">For general inquiries and project discussions</p>
            <a
              href="mailto:avnikolaou@outlook.com"
              className="bg-accent text-accent-foreground hover:bg-accent/90 inline-flex items-center rounded-lg px-4 py-2 font-medium transition-colors"
            >
              Send Email
            </a>
          </div>

          {/* GitHub */}
          <div className="border-border/50 bg-secondary/20 rounded-lg border p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="bg-accent/20 rounded-lg p-2">
                <Github className="text-accent h-5 w-5" />
              </div>
              <h3 className="text-foreground font-semibold">GitHub</h3>
            </div>
            <p className="text-foreground/70 mb-4">Check out my projects and contributions</p>
            <a
              href="https://github.com/avnikolaou"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-accent-foreground hover:bg-accent/90 inline-flex items-center rounded-lg px-4 py-2 font-medium transition-colors"
            >
              Visit Profile
            </a>
          </div>

          {/* LinkedIn */}
          <div className="border-border/50 bg-secondary/20 rounded-lg border p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="bg-accent/20 rounded-lg p-2">
                <Linkedin className="text-accent h-5 w-5" />
              </div>
              <h3 className="text-foreground font-semibold">LinkedIn</h3>
            </div>
            <p className="text-foreground/70 mb-4">Connect with me on professional network</p>
            <a
              href="https://linkedin.com/in/avraam-nikolaou/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-accent-foreground hover:bg-accent/90 inline-flex items-center rounded-lg px-4 py-2 font-medium transition-colors"
            >
              Connect
            </a>
          </div>

          {/* Response Time */}
          <div className="border-border/50 bg-secondary/20 rounded-lg border p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="bg-accent/20 rounded-lg p-2">
                <span className="text-accent h-5 w-5 font-bold">⏱</span>
              </div>
              <h3 className="text-foreground font-semibold">Response Time</h3>
            </div>
            <p className="text-foreground/70 mb-4">I typically respond within 24-48 hours</p>
            <p className="text-foreground/50 text-xs">Timezone: UTC+2</p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="border-border/50 bg-secondary/20 mt-16 max-w-2xl rounded-lg border p-8">
          <h2 className="text-foreground mb-4 text-xl font-semibold">What I&apos;m interested in</h2>
          <ul className="text-foreground/70 space-y-2">
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
