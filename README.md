# Kaizer Charania Portfolio

Multi-page Astro portfolio rebuilt from the design direction in [criticaldeveloper_codex_rebuild_brief.md](/Users/kaizer/Desktop/kaizer-portfolio/criticaldeveloper_codex_rebuild_brief.md).

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Edit content

Shared site copy and section content:

- [src/data/site.ts](/Users/kaizer/Desktop/kaizer-portfolio/src/data/site.ts)

Project entries:

- [src/content/projects/dynamic-scheduling-engine.md](/Users/kaizer/Desktop/kaizer-portfolio/src/content/projects/dynamic-scheduling-engine.md)
- [src/content/projects/platform-modernization.md](/Users/kaizer/Desktop/kaizer-portfolio/src/content/projects/platform-modernization.md)
- [src/content/projects/routing-optimization.md](/Users/kaizer/Desktop/kaizer-portfolio/src/content/projects/routing-optimization.md)
- [src/content/projects/rag-knowledge-retrieval.md](/Users/kaizer/Desktop/kaizer-portfolio/src/content/projects/rag-knowledge-retrieval.md)

## Architecture

- Layout: [src/layouts/MainLayout.astro](/Users/kaizer/Desktop/kaizer-portfolio/src/layouts/MainLayout.astro)
- Components: [src/components/Header.astro](/Users/kaizer/Desktop/kaizer-portfolio/src/components/Header.astro), [src/components/Footer.astro](/Users/kaizer/Desktop/kaizer-portfolio/src/components/Footer.astro), [src/components/ProjectCard.astro](/Users/kaizer/Desktop/kaizer-portfolio/src/components/ProjectCard.astro), [src/components/SectionBlock.astro](/Users/kaizer/Desktop/kaizer-portfolio/src/components/SectionBlock.astro), [src/components/MusicPanel.astro](/Users/kaizer/Desktop/kaizer-portfolio/src/components/MusicPanel.astro), [src/components/ConsentBanner.astro](/Users/kaizer/Desktop/kaizer-portfolio/src/components/ConsentBanner.astro)
- Pages: [src/pages/index.astro](/Users/kaizer/Desktop/kaizer-portfolio/src/pages/index.astro), [src/pages/about.astro](/Users/kaizer/Desktop/kaizer-portfolio/src/pages/about.astro), [src/pages/projects/index.astro](/Users/kaizer/Desktop/kaizer-portfolio/src/pages/projects/index.astro), [src/pages/projects/[slug].astro](/Users/kaizer/Desktop/kaizer-portfolio/src/pages/projects/[slug].astro), [src/pages/references.astro](/Users/kaizer/Desktop/kaizer-portfolio/src/pages/references.astro), [src/pages/blog.astro](/Users/kaizer/Desktop/kaizer-portfolio/src/pages/blog.astro), [src/pages/contact.astro](/Users/kaizer/Desktop/kaizer-portfolio/src/pages/contact.astro)
- Content schema: [src/content.config.ts](/Users/kaizer/Desktop/kaizer-portfolio/src/content.config.ts)

## Styling and motion

- [src/styles/tokens.scss](/Users/kaizer/Desktop/kaizer-portfolio/src/styles/tokens.scss)
- [src/styles/globals.scss](/Users/kaizer/Desktop/kaizer-portfolio/src/styles/globals.scss)
- [src/styles/motion.scss](/Users/kaizer/Desktop/kaizer-portfolio/src/styles/motion.scss)
- [src/styles/utilities.scss](/Users/kaizer/Desktop/kaizer-portfolio/src/styles/utilities.scss)

## Deploy

This is a static Astro build. Deploy the generated `dist/` directory to Vercel, Netlify, Cloudflare Pages, GitHub Pages, or any static host.

## Assumptions

- The brief asked for a playlist-style section, but the factual source material did not include actual listening data. The implemented module keeps the playlist visual language while grounding it in real focus areas.
- Public profile links now point to the provided GitHub Pages site, LinkedIn, GitHub profile, and hosted resume.
