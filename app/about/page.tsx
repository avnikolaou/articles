import type { Metadata } from 'next';

import { Github, Linkedin, Mail } from 'lucide-react';

import Navigation from '@/app/components/navigation';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000');

export const metadata: Metadata = {
  title: 'About | Avraam Nikolaou',
  description:
    'Learn more about Avraam Nikolaou, a frontend engineer focused on scalable architecture, performance, and user-centric product development.',
  alternates: {
    canonical: `${siteUrl}/about`
  },
  openGraph: {
    title: 'About | Avraam Nikolaou',
    description:
      'Learn more about Avraam Nikolaou, a frontend engineer focused on scalable architecture, performance, and user-centric product development.',
    url: `${siteUrl}/about`,
    siteName: 'Avraam Nikolaou',
    type: 'profile',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'About | Avraam Nikolaou'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Avraam Nikolaou',
    description:
      'Learn more about Avraam Nikolaou, a frontend engineer focused on scalable architecture, performance, and user-centric product development.',
    images: [`${siteUrl}/og-image.png`]
  }
};

const AboutPage = () => {
  return (
    <main className="from-background via-background to-secondary/5 min-h-screen bg-gradient-to-br">
      <Navigation />

      <div className="mx-auto max-w-4xl px-6 py-24">
        {/* Header */}
        <div className="mb-16">
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-balance">About Me</h1>
          <p className="text-foreground/70 max-w-2xl text-xl">
            I&apos;m a frontend engineer with experience across product development, integrations, quality assurance,
            and scalable web applications.
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-12">
          {/* Bio Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Background</h2>
            <p className="text-foreground/80 leading-relaxed">
              With over 7 years of experience in frontend development, I&apos;ve had the privilege of working on diverse
              projects ranging from early-stage startups to large-scale applications. My journey in web development has
              shaped my deep appreciation for clean code, performance optimization, and user-centric design.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              I&apos;m particularly interested in how frontend architecture impacts application performance,
              scalability, and maintainability. Through my work, I&apos;ve learned that great user experiences are built
              on the foundation of well-engineered code.
            </p>
          </section>

          {/* Skills Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Skills & Expertise</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="border-border/50 bg-secondary/20 rounded-lg border p-6">
                <h3 className="text-accent mb-3 font-semibold">Frontend Frameworks</h3>
                <ul className="text-foreground/80 space-y-2 text-sm">
                  <li>• React & Next.js</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                </ul>
              </div>
              <div className="border-border/50 bg-secondary/20 rounded-lg border p-6">
                <h3 className="text-accent mb-3 font-semibold">Performance & Optimization</h3>
                <ul className="text-foreground/80 space-y-2 text-sm">
                  <li>• Core Web Vitals optimization</li>
                  <li>• Code splitting & bundling</li>
                  <li>• Image optimization</li>
                  <li>• Accessibility (WCAG)</li>
                </ul>
              </div>
              <div className="border-border/50 bg-secondary/20 rounded-lg border p-6">
                <h3 className="text-accent mb-3 font-semibold">Development Tools</h3>
                <ul className="text-foreground/80 space-y-2 text-sm">
                  <li>• Webpack & Vite</li>
                  <li>• Git & GitHub</li>
                  <li>• Testing (Jest, Cypress)</li>
                  <li>• CI/CD pipelines</li>
                </ul>
              </div>
              <div className="border-border/50 bg-secondary/20 rounded-lg border p-6">
                <h3 className="text-accent mb-3 font-semibold">Best Practices</h3>
                <ul className="text-foreground/80 space-y-2 text-sm">
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
              <div className="border-accent border-l-2 py-2 pl-6">
                <h3 className="text-lg font-semibold">Senior Front-End Developer at Power Factors</h3>
                <p className="text-foreground/60 mb-2 text-sm">Remote, April 2023 - Present</p>
                <ul className="text-foreground/80 ml-5 list-disc space-y-2">
                  <li>
                    Led development of a core application for renewable asset integration into the main APM platform,
                    reducing onboarding time from days to hours and improving operational efficiency.
                  </li>
                  <li>
                    Built scalable front-end workflows for asset configuration, validation, and management using React
                    and TypeScript.
                  </li>
                  <li>
                    Collaborated with cross-functional teams to deliver enterprise features for large-scale renewable
                    energy operations.
                  </li>
                </ul>
              </div>
              <div className="border-accent border-l-2 py-2 pl-6">
                <h3 className="text-lg font-semibold">Front-End Developer at Zizoo</h3>
                <p className="text-foreground/60 mb-2 text-sm">Remote, August 2022 - December 2022</p>
                <ul className="text-foreground/80 ml-5 list-disc space-y-2">
                  <li>
                    Developed and launched the new homepage, improving the booking platform&apos;s user experience and
                    visual consistency.
                  </li>
                  <li>
                    Enhanced listing pages by implementing interactive image galleries for boat cards, improving
                    browsing and user engagement.
                  </li>
                  <li>Delivered responsive UI improvements for a high-traffic travel marketplace.</li>
                </ul>
              </div>
              <div className="border-accent border-l-2 py-2 pl-6">
                <h3 className="text-lg font-semibold">Front-End Developer at Ordereze</h3>
                <p className="text-foreground/60 mb-2 text-sm">Remote, December 2020 - July 2022</p>
                <ul className="text-foreground/80 ml-5 list-disc space-y-2">
                  <li>
                    Developed reusable and accessible UI components to support a scalable online ordering platform for
                    restaurants.
                  </li>
                  <li>Integrated payment solutions including Square, Heartland, and Stripe into checkout workflows.</li>
                  <li>
                    Delivered UI enhancements, bug fixes, and UX improvements across customer-facing web applications.
                  </li>
                  <li>
                    Worked closely with backend engineers to integrate APIs and ensure smooth end-to-end functionality.
                  </li>
                </ul>
              </div>
              <div className="border-accent border-l-2 py-2 pl-6">
                <h3 className="text-lg font-semibold">Software Development Engineer at Avlos</h3>
                <p className="text-foreground/60 mb-2 text-sm">Remote, May 2019 - October 2020</p>
                <ul className="text-foreground/80 ml-5 list-disc space-y-2">
                  <li>Developed web applications using React and Ruby on Rails.</li>
                  <li>Investigated production issues and delivered timely fixes for customer-reported defects.</li>
                  <li>Contributed to feature development across both frontend and backend systems.</li>
                  <li>Participated in deployment and maintenance of client-facing business applications.</li>
                </ul>
              </div>
              <div className="border-accent border-l-2 py-2 pl-6">
                <h3 className="text-lg font-semibold">Freelance Front-End Developer</h3>
                <p className="text-foreground/60 mb-2 text-sm">Freelance, September 2018 - April 2019</p>
                <ul className="text-foreground/80 ml-5 list-disc space-y-2">
                  <li>Delivered custom websites and web pages for clients using HTML, CSS, JavaScript, and PHP.</li>
                  <li>Built responsive interfaces tailored to client business requirements.</li>
                </ul>
              </div>
              <div className="border-accent border-l-2 py-2 pl-6">
                <h3 className="text-lg font-semibold">QA Engineer at FoodTec Solutions</h3>
                <p className="text-foreground/60 mb-2 text-sm">Thessaloniki, Greece, October 2016 - October 2017</p>
                <ul className="text-foreground/80 ml-5 list-disc space-y-2">
                  <li>
                    Identified 10-20 bugs/flaws per week and provided detailed quality reports with recommended fixes.
                  </li>
                  <li>
                    Performed system, unit, performance, regression, and data interface testing for both mobile and web
                    applications.
                  </li>
                  <li>Added features to an existing desktop application written in Java.</li>
                  <li>Enhanced a vendor integration system reading and writing files from SFTP endpoints.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Connect Section */}
          <section className="border-border/50 space-y-4 border-t py-12">
            <h2 className="text-2xl font-bold">Let&apos;s Connect</h2>
            <p className="text-foreground/80 leading-relaxed">
              I&apos;m always open to discussing frontend development, performance optimization, or potential
              collaborations. Feel free to reach out through any of these channels.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://github.com/avnikolaou"
                target="_blank"
                rel="noopener noreferrer"
                className="border-border/50 hover:border-accent/50 text-foreground/70 hover:text-accent inline-flex items-center gap-2 rounded-lg border px-4 py-2 transition-colors"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/avraam-nikolaou/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-border/50 hover:border-accent/50 text-foreground/70 hover:text-accent inline-flex items-center gap-2 rounded-lg border px-4 py-2 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="mailto:avnikolaou@outlook.com"
                className="border-border/50 hover:border-accent/50 text-foreground/70 hover:text-accent inline-flex items-center gap-2 rounded-lg border px-4 py-2 transition-colors"
              >
                <Mail className="h-4 w-4" />
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
