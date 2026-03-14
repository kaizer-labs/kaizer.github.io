# Criticaldeveloper.com Reconstruction Brief for Codex

## What this is
This is a Codex-ready reconstruction brief based on the publicly visible structure, content hierarchy, and motion clues exposed on `criticaldeveloper.com` and its project pages.

It is **not source code reverse engineering**. It is a practical build brief to recreate the **site architecture, interaction model, and motion language** with original code and replaceable content.

## What is clearly observable

### Global information architecture
- Top navigation includes:
  - Brand / wordmark
  - About
  - Projects
  - References
  - Blog
  - Let’s talk / Contact CTA
  - Language switcher (`ES` visible)
- Footer includes:
  - Privacy & Terms
  - Cookie preferences
  - telemetry/essential consent controls

### Home page content structure
1. **Hero / intro**
   - Strong headline
   - Short positioning statement
2. **Now / current focus**
   - Current specialization block
   - Paired CTA buttons
3. **On the radar**
   - Experimental / forward-looking focus area
4. **Listening / music section**
   - Playlist-like block with track metadata
5. **Featured work**
   - Project cards with title, short summary, and tech tags
6. **Final CTA section**
   - “Have a hard problem?” style contact block
7. **Footer and consent controls**

### About page structure
1. Intro heading and short philosophy statement
2. Career timeline / evolving toolchain
3. Personal story narrative
4. Skillset grouped by category
5. Values / principles cards
6. Current focus / what the person is doing now
7. Final CTA

### Projects page structure
1. Intro / overview
2. Featured project cards
3. Additional explorations / secondary projects
4. Collaboration CTA

### Project detail page structure
1. Back link
2. Project year/status
3. Title
4. Category / subtitle
5. Short summary
6. Tech tags
7. Technology breakdown
8. “What makes it special” highlight list
9. Previous / next project navigation

## Motion language inferred from the site’s own descriptions
Use motion as **communication**, not decoration.

### Confirmed motion clues from the public pages
- Route transitions use **View Transitions API** semantics.
- Motion is framed as **micro-interactions** and **shared visual continuity**.
- Styling is **token-driven**.
- Motion system uses **reusable primitives** and **transition choreography**.
- The stated goal is **fast perceived navigation**.
- Animations should **communicate state, not add noise**.

### Rebuild the motion system like this
- Use **document-level page transitions** between routes.
- Keep transitions fast: roughly **180ms–320ms**.
- Prioritize:
  - fade + subtle translate on page entry
  - shared-element continuity for headers, nav, and project cards
  - hover elevation / border emphasis on cards and buttons
  - staggered reveal for section children
  - gentle underline / opacity transitions in nav links
  - focus-visible transitions for keyboard accessibility
- Avoid:
  - springy overshoot everywhere
  - giant parallax effects
  - long cinematic delays
  - motion that blocks content readability

## Visual direction to copy without cloning brand assets

### Layout feel
- Editorial portfolio layout
- Strong typography hierarchy
- Wide breathing room
- Modular vertical rhythm
- Soft grid-based alignment
- High signal-to-noise ratio
- Minimal but polished controls

### Style characteristics to reproduce
- Large H1 hero
- Short, sharp descriptive copy
- Compact tech tags / pills
- Card-based featured work
- Clean monochrome or muted base with one accent family
- Sharp spacing discipline
- Slightly experimental but still professional

### Do not copy literally
- Do not copy the original logo artwork
- Do not copy the original written text verbatim
- Do not copy exact project names unless intentionally using placeholders
- Do not scrape assets

## Recommended implementation stack
- **Astro**
- **TypeScript**
- **SCSS modules or organized global SCSS tokens**
- **View Transitions API** for page transitions
- Minimal client JavaScript
- Content collections or JSON/MD files for project entries

## Suggested file structure
```text
src/
  layouts/
    MainLayout.astro
  pages/
    index.astro
    about.astro
    projects/index.astro
    projects/[slug].astro
    references.astro
    contact.astro
  components/
    Header.astro
    Footer.astro
    Hero.astro
    SectionBlock.astro
    ProjectCard.astro
    TechTag.astro
    Timeline.astro
    ValuesGrid.astro
    MusicPanel.astro
    ConsentBanner.astro
  content/
    projects/
      latency-lab.md
      design-playground.md
      bun-api-toolkit.md
  styles/
    tokens.scss
    globals.scss
    motion.scss
    utilities.scss
```

## Motion spec

### Base easing tokens
```scss
$ease-standard: cubic-bezier(0.2, 0, 0, 1);
$ease-emphasized: cubic-bezier(0.2, 0.8, 0.2, 1);
$ease-exit: cubic-bezier(0.4, 0, 1, 1);

$duration-fast: 160ms;
$duration-base: 220ms;
$duration-slow: 320ms;
```

### Transition rules
- Header/nav: fade in + translateY(6px)
- Hero copy: stagger children by 40ms
- Buttons: background, border, and shadow transition only
- Cards: translateY(-2px) + border/overlay emphasis on hover
- Route change:
  - old page fades to 0.98 opacity
  - new page fades in from 0 and translateY(8px)
- Shared elements:
  - project cards to detail hero
  - nav bar continuity across routes

### Accessibility rules
- Respect `prefers-reduced-motion`
- Remove transforms for reduced motion users
- Keep focus indicators strong
- No autoplay audio
- All motion must preserve readability and orientation

## Component behavior notes

### Header
- Sticky or semi-sticky top bar
- Compact on scroll
- Hover/focus states refined but minimal
- Language toggle visible

### Hero
- Large headline
- Tight supporting paragraph width
- Two CTAs
- Slight reveal on first paint

### Featured work cards
- Clickable full-card targets
- Summary + tech stack + status label
- Smooth hover emphasis
- Shared transition into project detail page

### Timeline / About page
- Visual chronology or grouped skill evolution
- Keep it readable, not gimmicky
- Reveal items as they enter viewport

### Music / side panel section
- Build as a visual module, not an actual streaming integration
- Include track name, duration, and descriptive copy
- Optional progress bar animation on hover only

### Footer / consent
- Minimal legal footer
- Cookie preferences panel or compact banner
- Preferences should feel integrated, not like a third-party widget

## Acceptance criteria for Codex
- Site feels like a premium portfolio built for a senior developer / design-aware engineer
- Multi-page transitions feel instant and deliberate
- Motion is subtle, consistent, and systemized
- The site is responsive across desktop, tablet, and mobile
- Lighthouse-minded implementation: keep JS lean
- Content is data-driven so projects can be added without rewriting page structure
- Styling tokens and motion tokens are centralized
- All animations degrade cleanly for reduced motion

---

# Copy-paste prompt for Codex

```md
Rebuild my portfolio site by taking strong structural and motion inspiration from criticaldeveloper.com, but do not clone its branding, logo, exact copy, or proprietary assets.

Goal:
Create an original multi-page developer portfolio with the same overall feel: editorial layout, polished micro-interactions, fast perceived navigation, shared-element style continuity, project cards, project detail pages, About page, References page, contact CTA, and integrated cookie/preferences UI.

Tech constraints:
- Use Astro
- Use TypeScript
- Use SCSS with centralized design tokens and motion tokens
- Use the View Transitions API for route transitions
- Keep client-side JavaScript minimal
- Build content-driven pages so project entries can live in markdown or content collections

Pages to create:
1. Home
2. About
3. Projects index
4. Dynamic project detail page
5. References
6. Contact / CTA page or section

Required home page structure:
- Sticky top nav with brand, About, Projects, References, Blog placeholder, language toggle, and CTA
- Large hero section with heading, short intro, and 2 CTAs
- “Current focus” section
- “On the radar” experimental section
- Music / playlist-inspired content block
- Featured work grid with 3 highlighted projects
- Final CTA section
- Footer with privacy and cookie preferences controls

Required About page structure:
- Intro philosophy section
- Career timeline / tool evolution section
- Personal story section
- Skillset grouped into frontend, backend, and methodology/tooling
- Values/principles cards
- Current focus section
- Final CTA

Required Projects page structure:
- Intro heading and short description
- Featured projects grid
- Secondary experiments list/grid
- CTA block

Required project detail page structure:
- Back link
- Status/year label
- Large title and subtitle
- Summary paragraph
- Tech tags
- “Built with modern tools” section
- “What makes it special” section
- Previous/next navigation

Motion direction:
- Motion must communicate hierarchy and state, not decorate aimlessly
- Route transitions should feel fast and clean: 180ms–320ms
- Use fade + subtle translate for section reveals
- Use shared-element style continuity where reasonable, especially card-to-detail transitions
- Buttons and links should have subtle border/background/opacity transitions
- Cards should lift very slightly on hover
- Nav interactions should feel refined and quiet
- Respect prefers-reduced-motion

Design direction:
- Editorial, modern, design-aware, minimal, high-end
- Strong typography hierarchy
- Large whitespace and disciplined rhythm
- Card-based project presentation
- Muted base palette with one accent color system
- Clean tags / pills for technologies
- No overly glossy startup look
- No heavy gradients unless restrained
- No noisy backgrounds

Architecture requirements:
- Centralize tokens in SCSS for spacing, type scale, radii, shadows, easing, and durations
- Create reusable layout and section components
- Build project data from content files
- Ensure responsive behavior across breakpoints
- Keep semantics and accessibility solid

Deliverables:
- Complete Astro project structure
- Reusable components
- Global layout
- SCSS token files and motion primitives
- Example content for at least 3 projects
- Working route transitions
- Responsive styling

Quality bar:
This should feel like a premium engineer portfolio that blends frontend craft with product thinking. The result should clearly echo the structure and interaction philosophy of criticaldeveloper.com without being a visual counterfeit.
```

## Public-source basis for this brief
Derived from the visible public structure and page descriptions on the site, especially the home page, About page, Projects page, and project detail pages describing View Transitions, SCSS token-driven styling, motion primitives, micro-interactions, and fast perceived navigation.
