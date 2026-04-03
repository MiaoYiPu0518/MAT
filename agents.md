# Agents Guide for MAT Project

## Project Overview
MAT (北京摩安迈特技术有限公司) is a modern Next.js-based web application focusing on industrial technology, specifically metal surface self-repair (摩安迈特技术®). The project targets high-end industrial clients and is deployed as a static site hosted on Cloud Object Storage (COS).

## Tech Stack
- **Framework**: Next.js 16+ (App Router)
- **Language**: TypeScript (`zh-CN` primary)
- **Styling**: Tailwind CSS 4+ / Vanilla CSS (Preference for clean, industrial-premium design)
- **Deployment**: Static Site Generation (SSG) with `output: 'export'`
- **Key Configurations**: `trailingSlash: true`, `images.unoptimized: true`

## Coding Standards

### 1. Visual Excellence & Industrial Aesthetics
- **Theme**: "Industrial Premium" — Use a clean, modern, and professional look. 
- **Colors**: Utilize deep professional blues, industrial grays, and high-contrast accents (e.g., orange or vibrant blue).
- **Typography**: Primary font is Inter (latin) / Simplified Chinese system fonts. 
- **Transitions**: Implement smooth transitions for hover states and page navigations.
- **Micro-interactions**: Use subtle animations for menus and interactive elements to provide feedback.

### 2. Component Architecture
- **Modularity**: Keep components small, focused, and reusable within the `/components` directory.
- **Assets**: Use `next/image` with `unoptimized: true` for all assets (JPG, PNG, WebP) to ensure compatibility with static exports.
- **Responsiveness**: All components MUST be mobile-first and fully responsive across all screen sizes.
- **Icons**: Preferred icon library is `lucide-react`.

### 3. Localization & Content
- **Primary Language**: Simplified Chinese (`zh-CN`). 
- **Tone**: Professional, technical, and authoritative. 
- **English usage**: Technical terms and brand names (e.g., MATехнология®) should retain their English forms.

### 4. SEO & Meta Management
- **Headings**: Maintain a single `<h1>` per page. Use `<h2>`-`<h6>` for logical hierarchy.
- **Meta Data**: Every page MUST have a descriptive `title` and `description` in the `metadata` export.
- **Semantic HTML**: Use proper HTML5 elements (`<header>`, `<main>`, `<section>`, `<footer>`, etc.).

### 5. Performance
- **Core Web Vitals**: Focus on LCP (Largest Contentful Paint) and CLS (Cumulative Layout Shift).
- **Static Pre-rendering**: For dynamic routes (e.g., `/app/news/[id]/page.tsx`), always implement `generateStaticParams`.

## Static Site Deployment (COS)
> [!IMPORTANT]
> The site is exported as a static deployment. Features requiring a server (e.g., API routes, `getServerSideProps`) are NOT supported unless handled by external services.

- **Build Workflow**: Use `npm run build` to generate the `out/` directory.
- **Routing**: Ensure all internal links use `next/link` for client-side navigation.
- **Assets path**: Use relative paths or ensures all image paths are correct during the export.

## Agent Behavior & Workflows

### Proactive Design
- **Review UI**: Before completing any task, check for potential UX/UI improvements. 
- **Aesthetic-First**: Prioritize high-quality, modern design patterns. If a component looks "default," improve it.

### Content Generation
- **Industry Context**: When generating content, keep the industrial nature of MAT (heavy equipment, friction management, metal surface repair) in mind.
- **No Placeholders**: Avoid using "Lorem Ipsum." Generate realistic technical content or use the `generate_image` tool for visual assets.

### Testing & Verification
- **Dev Server**: Always verify changes on the local dev server (`npm run dev`).
- **Build Check**: For features involving complex routing or assets, run `npm run build` to ensure the static export remains functional.
