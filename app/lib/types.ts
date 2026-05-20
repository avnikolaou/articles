import { v4 as uuidv4 } from 'uuid';

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: number;
}

export const MOCK_ARTICLES: Article[] = [
  {
    id: uuidv4(),
    title: 'Building High-Performance React Applications',
    slug: 'building-high-performance-react-applications',
    excerpt: 'Techniques and best practices for optimizing React performance at scale',
    content: `# Building High-Performance React Applications

React is one of the most popular JavaScript libraries for building user interfaces. However, without proper optimization techniques, your React application can become slow and sluggish.

## Key Performance Optimization Techniques

### 1. Memoization
Use React.memo to prevent unnecessary re-renders of components that receive the same props.

### 2. Code Splitting
Implement code splitting with React.lazy and Suspense to reduce initial bundle size.

### 3. Virtual Scrolling
For large lists, use virtual scrolling to render only visible items, significantly improving performance.

### 4. Avoiding Inline Functions
Inline functions create new references on every render, causing child components to re-render unnecessarily.

### 5. Using useCallback and useMemo
These hooks help you memoize functions and expensive computations to avoid recreating them on every render.

## Conclusion
By implementing these optimization techniques, you can build React applications that are not only faster but also provide a better user experience.`,
    category: 'React',
    tags: ['performance', 'optimization', 'react'],
    publishedAt: '2024-01-15',
    readTime: 8
  },
  {
    id: uuidv4(),
    title: 'The Future of Web Development: Web Components',
    slug: 'future-of-web-development-web-components',
    excerpt: 'Exploring the rise of web components and their impact on modern frontend development',
    content: `# The Future of Web Development: Web Components

Web Components represent a paradigm shift in how we build web applications. They provide a standard way to encapsulate HTML, CSS, and JavaScript.

## What Are Web Components?

Web Components are a set of web platform APIs that allow you to create new, reusable, encapsulated HTML tags for use in web pages and web apps.

## Benefits of Web Components

- **Encapsulation**: Shadow DOM provides style and markup encapsulation
- **Reusability**: Components can be easily shared across projects
- **Framework Agnostic**: Works with any framework or no framework at all
- **Standards Based**: Based on web standards, not proprietary technology

## Building Your First Web Component

Creating a web component is straightforward using the Custom Elements API and Shadow DOM.

## Conclusion
Web Components are poised to become a major part of web development, offering a standards-based approach to component development.`,
    category: 'Web APIs',
    tags: ['web-components', 'standards', 'future'],
    publishedAt: '2024-01-08',
    readTime: 12
  },
  {
    id: uuidv4(),
    title: 'Optimizing Core Web Vitals for Better UX',
    slug: 'optimizing-core-web-vitals',
    excerpt: "A comprehensive guide to improving your site's Core Web Vitals scores",
    content: `# Optimizing Core Web Vitals for Better UX

Core Web Vitals are three key metrics that Google uses to measure user experience. Understanding and optimizing for these metrics is crucial for your website's success.

## The Three Core Web Vitals

### 1. Largest Contentful Paint (LCP)
LCP measures the time it takes for the largest element in the viewport to render. Target: < 2.5 seconds

### 2. First Input Delay (FID)
FID measures the time from a user's first interaction to the browser's response. Target: < 100ms

### 3. Cumulative Layout Shift (CLS)
CLS measures visual stability by tracking unexpected layout shifts. Target: < 0.1

## Optimization Strategies

- Optimize images and lazy load where possible
- Minimize JavaScript execution time
- Improve server response time
- Use CSS containment for better performance
- Implement resource hints like prefetch and preconnect

## Monitoring Core Web Vitals

Use tools like Google PageSpeed Insights, Lighthouse, and Web Vitals library to monitor your metrics.

## Conclusion
Optimizing Core Web Vitals is not just about performance; it's about providing a better user experience.`,
    category: 'Performance',
    tags: ['core-web-vitals', 'ux', 'performance'],
    publishedAt: '2023-12-28',
    readTime: 10
  }
];
