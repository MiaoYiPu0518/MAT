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

### 1. MAT Visual System — Precision Engineering

The approved design direction is **technical, confident, cold, and expensive**. The site should feel like a proprietary engineering company serving critical industrial infrastructure—not a generic corporate template or a consumer technology startup.

#### Design Character
- **Core mood**: Precision engineering, controlled power, scientific authority, and long-term industrial reliability.
- **Visual restraint**: Prefer disciplined grids, exact alignment, strong typography, thin rules, and generous negative space over decoration.
- **Geometry**: Use square or minimally rounded components. Avoid excessive pills, large soft radii, bubbly cards, playful shapes, and decorative gradients.
- **Depth**: Create depth with tonal contrast, subtle glass, fine borders, controlled shadows, and desaturated photography. Avoid loud glow effects.
- **Avoid**: Orange accents, highly saturated cyan, generic sci-fi interfaces, floating dashboard graphics, gratuitous neon, playful illustrations, and default SaaS-style cards.

#### Approved Color Language
- **Graphite black**: `#03070C` / `#03080D` for primary dark surfaces.
- **Deep engineering navy**: `#07111C`, `#0B1B29`, and `#172F40`.
- **Machined steel blue**: `#426F8D` for technical emphasis and interaction states.
- **Icy highlight**: `#9BC6DF` or `#B9D0DD`, used sparingly.
- **Technical paper**: `#EEF2F4` / `#F7F9FA` for light sections.
- **Body copy**: dark blue-gray on light surfaces and muted steel-gray on dark surfaces.
- Use high contrast for headings, but keep supporting text deliberately quieter.

#### Typography
- **Primary stack**: Inter for Latin characters; `"Noto Sans SC"`, `"Microsoft YaHei"`, `"PingFang SC"`, and system sans-serif fallbacks for Simplified Chinese.
- Headlines should be large, compact, and authoritative with tight negative letter spacing.
- Use lighter weight or muted steel color to create contrast within a headline instead of outlines or bright color.
- Use uppercase English micro-labels with wide tracking for technical context.
- Use a restrained monospace stack such as Consolas / SFMono for coordinates, system states, model names, and engineering references.
- Maintain clear hierarchy and never use more than one `<h1>` per page.

#### Layout & Spacing
- The homepage uses a maximum content shell of `1320px`; inner content pages use approximately `1180px`.
- Desktop sections should normally use `120–132px` vertical spacing. Mobile sections should use approximately `64–90px`.
- Maintain deliberate asymmetry where it strengthens hierarchy, but keep all content locked to the underlying grid.
- Fixed header height is `82px` on desktop and `70px` on mobile. Inner pages must clear the fixed header; the homepage hero may sit behind it intentionally.
- Prevent grid children from escaping their columns. Use `min-width: 0` and explicit responsive widths for diagrams and absolutely positioned visual systems.
- Application cards use a responsive `4 / 2 / 1` column pattern across desktop, tablet, and mobile.

#### Components & Interaction
- Buttons should be rectangular, compact, and mechanically precise.
- Use 1px borders, restrained steel highlights, and small directional arrows for interaction cues.
- Hover effects should use subtle translation, tonal change, or controlled image scaling. Avoid dramatic bounce, rotation, or glowing pulses.
- Motion should be slow, smooth, and purposeful. Respect `prefers-reduced-motion`.
- Navigation, banners, sidebars, tables, and content cards must share the same cold engineering palette.

#### Photography & Generated Imagery
- Prefer technically credible, cinematic industrial photography focused on real friction interfaces: gearboxes, bearings, wheelsets, transmissions, and powertrains.
- Approved imagery should use graphite, gunmetal, desaturated steel blue, and controlled icy highlights.
- Imagery should feel monumental and precise, with realistic materials and machinery—not fantasy equipment.
- Preserve darker negative space for text overlays when an image is used in a card or hero.
- Avoid embedded text, logos, watermarks, television marks, UI overlays, neon effects, and orange color grading.
- Generate separate images for distinct application sectors rather than reusing generic banners.
- Store production imagery as optimized WebP whenever practical. Use `next/image`, accurate `sizes`, meaningful `alt` text, and avoid shipping uncompressed generation outputs.

#### Content Tone
- Simplified Chinese copy should be concise, technical, and declarative.
- Prefer confident engineering language such as “原位重构”, “在线摩擦治理”, and “全寿命周期工程”.
- Avoid exaggerated marketing claims, vague superlatives, and consumer-style slogans.
- English labels should clarify technical structure rather than decorate the page.

### 2. Component Architecture
- **Modularity**: Keep components small, focused, and reusable within the `/components` directory.
- **Assets**: Use `next/image` with `unoptimized: true` for all raster assets. Prefer optimized WebP for production photography and generated imagery, with accurate `sizes` and meaningful `alt` text.
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
- **Aesthetic-First**: Preserve the approved precision-engineering visual system. If a component looks generic, overly soft, saturated, playful, or like a default template, refine it.
- **Cross-page Consistency**: Reuse the same header offsets, page banners, inner-page widths, cold palette, typography hierarchy, borders, and responsive spacing across every route.
- **Responsive QA**: Check desktop, tablet, and mobile layouts. Specifically verify fixed-header clearance, horizontal overflow, responsive grids, tables, application tabs, and absolutely positioned diagrams.

### Content Generation
- **Industry Context**: When generating content, keep the industrial nature of MAT (heavy equipment, friction management, metal surface repair) in mind.
- **No Placeholders**: Avoid using "Lorem Ipsum." Generate realistic technical content or use the `imagegen` workflow for production visual assets.

### Testing & Verification
- **Dev Server**: Always verify changes on the local dev server (`npm run dev`).
- **Build Check**: For features involving complex routing or assets, run `npm run build` to ensure the static export remains functional.
