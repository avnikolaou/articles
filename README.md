# Avraam's Portfolio

A modern, minimal portfolio website built with Next.js 15, TypeScript, and Tailwind CSS v4. Includes a static admin dashboard for managing articles.

## Features

- **Modern Design**: Dark theme with teal accents, minimal and clean aesthetic
- **Article Management**: View and manage articles from an admin dashboard
- **Static Data**: All articles are stored as static data with mock data (ready for database integration)
- **Responsive Design**: Mobile-first approach, fully responsive
- **Performance Optimized**: Built with performance in mind - semantic HTML, efficient rendering
- **Arrow Functions**: All components use modern arrow function syntax

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5.7.3
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **UUID**: uuid v10.0.0
- **Content**: React Markdown

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (or npm/yarn)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/avnikolaou/articles.git
cd articles
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
app/
├── page.tsx              # Home page
├── articles/
│   ├── page.tsx         # Articles listing
│   └── [slug]/page.tsx  # Article detail page
├── about/
│   └── page.tsx         # About page
├── admin/
│   └── page.tsx         # Admin dashboard
└── layout.tsx           # Root layout

lib/
├── types.ts             # Type definitions and mock data
└── utils.ts             # Utility functions

components/
└── ui/                  # shadcn UI components
```

## Features

### Home Page

- Hero section with call-to-action
- Featured articles preview
- Social links

### Articles

- Full article listing with search
- Category filtering
- Individual article pages with metadata
- Read time calculations

### Admin Dashboard

- Article management table
- Statistics overview
- Action buttons for edit/delete (UI ready)

## Customization

### Add Articles

Edit `lib/types.ts` to add new articles to the `MOCK_ARTICLES` array:

```typescript
{
  id: uuidv4(),
  title: 'Your Article Title',
  slug: 'your-article-slug',
  excerpt: 'Short description',
  content: '# Markdown content here',
  category: 'React',
  tags: ['tag1', 'tag2'],
  publishedAt: '2024-01-15',
  readTime: 8,
}
```

### Styling

Global styles are in `app/globals.css`. The design uses Tailwind CSS v4 with custom color tokens:

- `--background`: Main background color
- `--foreground`: Text color
- `--accent`: Teal accent color
- `--secondary`: Secondary backgrounds

## Build for Production

```bash
pnpm build
pnpm start
```

## Future Enhancements

- [ ] Supabase integration for dynamic articles
- [ ] Database-backed authentication
- [ ] Article image uploads to Vercel Blob
- [ ] Comment system
- [ ] Article search with Algolia
- [ ] Analytics integration

## License

MIT
