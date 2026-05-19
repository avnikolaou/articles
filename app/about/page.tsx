import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { ThemeToggle } from '@/app/providers/theme-toggle';

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      {/* Navigation */}
      <nav className="border-b border-border/50 sticky top-0 bg-background/80 backdrop-blur">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
            AN
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/" className="text-sm text-foreground/70 hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/articles" className="text-sm text-foreground/70 hover:text-accent transition-colors">
              Articles
            </Link>
            <Link href="/about" className="text-sm text-accent font-medium">
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
        <div className="mb-16">
          <h1 className="text-5xl font-bold tracking-tight mb-4 text-balance">About Me</h1>
          <p className="text-xl text-foreground/70 max-w-2xl">
            I&apos;m a frontend engineer passionate about building fast, accessible, and beautiful web experiences.
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-12">
          {/* Bio Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Background</h2>
            <p className="text-foreground/80 leading-relaxed">
              With over 7 years of experience in frontend development, I&apos;ve had the privilege of working on diverse projects
              ranging from early-stage startups to large-scale applications. My journey in web development has shaped my deep appreciation 
              for clean code, performance optimization, and user-centric design.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              I&apos;m particularly interested in how frontend architecture impacts application performance, scalability, and maintainability. 
              Through my work, I&apos;ve learned that great user experiences are built on the foundation of well-engineered code.
            </p>
          </section>

          {/* Skills Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg border border-border/50 bg-secondary/20">
                <h3 className="font-semibold mb-3 text-accent">Frontend Frameworks</h3>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li>• React & Next.js</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Vue.js</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border border-border/50 bg-secondary/20">
                <h3 className="font-semibold mb-3 text-accent">Performance & Optimization</h3>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li>• Core Web Vitals optimization</li>
                  <li>• Code splitting & bundling</li>
                  <li>• Image optimization</li>
                  <li>• Accessibility (WCAG)</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border border-border/50 bg-secondary/20">
                <h3 className="font-semibold mb-3 text-accent">Development Tools</h3>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li>• Webpack & Vite</li>
                  <li>• Git & GitHub</li>
                  <li>• Testing (Jest, Cypress)</li>
                  <li>• CI/CD pipelines</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border border-border/50 bg-secondary/20">
                <h3 className="font-semibold mb-3 text-accent">Best Practices</h3>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li>• Clean code principles</li>
                  <li>• Component architecture</li>
                  <li>• Design systems</li>
                  <li>• Technical documentation</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Experience Highlights</h2>
            <div className="space-y-6">
              <div className="border-l-2 border-accent pl-6 py-2">
                <h3 className="font-semibold text-lg">Senior Frontend Developer</h3>
                <p className="text-sm text-foreground/60 mb-2">2020 - Present</p>
                <p className="text-foreground/80">
                  Led frontend architecture and performance optimization for large-scale React applications serving millions of users.
                </p>
              </div>
              <div className="border-l-2 border-accent pl-6 py-2">
                <h3 className="font-semibold text-lg">Frontend Developer</h3>
                <p className="text-sm text-foreground/60 mb-2">2015 - 2020</p>
                <p className="text-foreground/80">
                  Developed and maintained multiple frontend projects, implemented design systems, and mentored junior developers.
                </p>
              </div>
              <div className="border-l-2 border-accent pl-6 py-2">
                <h3 className="font-semibold text-lg">Junior Developer</h3>
                <p className="text-sm text-foreground/60 mb-2">2010 - 2015</p>
                <p className="text-foreground/80">
                  Started my career working with jQuery and vanilla JavaScript, gradually transitioning to modern frameworks.
                </p>
              </div>
            </div>
          </section>

          {/* Connect Section */}
          <section className="space-y-4 py-12 border-t border-border/50">
            <h2 className="text-2xl font-bold">Let&apos;s Connect</h2>
            <p className="text-foreground/80 leading-relaxed">
              I&apos;m always open to discussing frontend development, performance optimization, or potential collaborations. 
              Feel free to reach out through any of these channels.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://github.com/avraam"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border/50 hover:border-accent/50 text-foreground/70 hover:text-accent transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/avraam-nikolaou/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border/50 hover:border-accent/50 text-foreground/70 hover:text-accent transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="mailto:hello@avraam.dev"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border/50 hover:border-accent/50 text-foreground/70 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
