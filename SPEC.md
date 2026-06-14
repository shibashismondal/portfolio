# Portfolio Website Specification

## 1. Project Overview

- **Project Name**: [Your Name] Portfolio
- **Type**: Personal portfolio website (single-page application)
- **Core Functionality**: A professional portfolio showcasing projects, skills, and experience with smooth animations and dark/light mode
- **Target Users**: Potential employers, clients, and collaborators

## 2. Technical Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript (strict mode, no `any` types)
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (body) + Outfit (display headings)
- **Theme**: next-themes for dark/light mode
- **Deployment**: Vercel-ready

## 3. Design Direction

### Visual Style
- **Aesthetic**: Minimalist, clean, professional
- **Color Palette**:
  - Light mode: White (#ffffff), Slate-900 (#0f172a), Slate-500 (#64748b), Accent Blue (#3b82f6)
  - Dark mode: Slate-950 (#020617), Slate-100 (#f1f5f9), Slate-400 (#94a3b8), Accent Blue (#60a5fa)
- **Typography**: Outfit for headings (bold, geometric), Inter for body (clean, readable)
- **Spacing**: 8px base grid, generous whitespace
- **Motion**: Subtle scroll-triggered animations, smooth transitions (300-500ms)

### Layout & Structure
- Single-page layout with sticky navigation
- Mobile-first responsive design
- Sections: Hero, About, Projects, Skills, Contact
- Smooth scroll with active nav highlighting
- Scroll progress indicator at top

### Components
- Reusable UI components: Button, Badge, Card, NavLink
- Section components: Hero, About, Projects, Skills, Contact
- ThemeToggle with sun/moon icons
- Category filter bar for projects

## 4. Pages & Sections

### Navigation
- Sticky header with logo, nav links, theme toggle
- Mobile hamburger menu with slide-in drawer
- Active section highlighting based on scroll position

### Hero Section
- Full viewport height
- Animated greeting (Hello, I'm)
- Name with gradient text effect
- Role/title with typewriter-style animation
- Short tagline
- Two CTA buttons: "View Work" (scroll to projects), "Download CV" (download link)
- Social links: GitHub, LinkedIn, Email (Lucide icons)
- Subtle floating shapes/gradient orbs in background

### About Section
- Two-column layout (stacks on mobile)
- Left: Professional photo placeholder with decorative border
- Right: Bio text + quick stats grid
- Stats: Years of Experience, Projects Completed, Technologies, Coffee Cups ☕

### Projects Section
- Category filter bar (All, Frontend, Full Stack, Mobile)
- Responsive grid (3 cols desktop, 2 tablet, 1 mobile)
- Project cards with:
  - Project image placeholder
  - Title
  - Description
  - Tech stack badges
  - Links: Live Demo, GitHub
- Hover effect: slight lift + shadow

### Skills Section
- Grouped by category: Frontend, Backend, Tools & DevOps
- Animated skill grid with icons + progress indicators
- Each skill: icon, name, proficiency bar
- Staggered entrance animation on scroll

### Contact Section
- Two-column layout
- Left: Direct contact links (Email, LinkedIn, GitHub)
- Right: Contact form (Name, Email, Message)
- Form validation (required fields, email format)
- Submit via mailto fallback (no backend required)
- Social icons with hover effects

## 5. Component Architecture

```
/app
  layout.tsx          # Root layout with providers
  page.tsx            # Main page
  globals.css         # Global styles + Tailwind

/components
  /ui
    Button.tsx        # Variants: primary, secondary, outline, ghost
    Badge.tsx         # Tech stack badges
    Card.tsx          # Project card wrapper
    NavLink.tsx       # Navigation link with active state
  /sections
    Hero.tsx
    About.tsx
    Projects.tsx
    Skills.tsx
    Contact.tsx
    Navigation.tsx    # Sticky nav with mobile menu
    Footer.tsx
  ThemeToggle.tsx     # Dark/light mode switch
  ScrollProgress.tsx  # Top progress bar

/lib
  data.ts             # All portfolio content as typed constants
  types.ts            # TypeScript interfaces

/public
  /images             # Placeholder images (noted in comments)
  /files              # CV resume PDF
```

## 6. Data Structure

All content in `/lib/data.ts` as TypeScript constants:
- `personalInfo`: name, role, tagline, bio, email, social links
- `projects`: array of project objects
- `skills`: grouped by category
- `experience`: timeline data (optional)
- `stats`: quick stats for About section

## 7. Accessibility

- Semantic HTML5 elements (header, nav, main, section, footer)
- ARIA labels on interactive elements
- Keyboard navigation support (tab, enter, escape)
- Focus visible states
- Skip to content link
- Color contrast ratio ≥ 4.5:1

## 8. Animations

- **Page load**: Staggered fade-in for hero content
- **Scroll**: Intersection Observer triggers for each section
- **Hover**: Button/card lift effects
- **Theme toggle**: Smooth color transition (200ms)
- **Mobile menu**: Slide-in from right with backdrop blur

## 9. Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 10. README

Include setup instructions:
1. Clone repo
2. Install dependencies (`npm install`)
3. Run dev server (`npm run dev`)
4. Customize content in `/lib/data.ts`
5. Deploy to Vercel