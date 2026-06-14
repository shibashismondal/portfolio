# Portfolio Website

A professional personal portfolio built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🌓 Dark/Light mode with next-themes
- ✨ Smooth scroll animations with Framer Motion
- 📱 Fully responsive (mobile-first design)
- ♿ Accessible (semantic HTML, ARIA labels, keyboard navigation)
- 🎨 Clean, minimalist design
- 📊 Dynamic content from a single data file

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## Customization

### 1. Update Personal Information

Edit `/lib/data.ts` to customize:

- Your name, role, and tagline
- Bio and location
- Social links (GitHub, LinkedIn)
- Availability status

### 2. Add Projects

Update the `projects` array in `/lib/data.ts`:

```typescript
export const projects: Project[] = [
  {
    id: "1",
    title: "Your Project",
    description: "Description here",
    image: "/images/project-1.jpg",
    tags: ["React", "TypeScript"],
    category: "fullstack", // "frontend" | "fullstack" | "mobile"
    demoUrl: "https://demo.com",
    githubUrl: "https://github.com/you/project",
  },
];
```

### 3. Update Skills

Modify the `skillCategories` array in `/lib/data.ts`:

```typescript
export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    icon: "Layout", // Lucide icon name
    skills: [
      { name: "React", level: 90 },
    ],
  },
];
```

### 4. Add Profile Photo

Place your photo at `/public/images/profile.jpg` and update `About.tsx`.

### 5. Add Project Images

Place images at `/public/images/project-{id}.jpg` matching the project IDs in `/lib/data.ts`.

### 6. Add CV/Resume

Place your PDF at `/public/files/cv.pdf` or update the path in `/lib/data.ts`:

```typescript
export const cvFilePath = "/files/your-cv.pdf";
```

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with providers
│   ├── page.tsx        # Main page
│   └── globals.css     # Global styles
├── components/
│   ├── ui/             # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── Card.tsx
│   │   └── NavLink.tsx
│   ├── sections/       # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Contact.tsx
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── ThemeProvider.tsx
│   ├── ThemeToggle.tsx
│   └── ScrollProgress.tsx
├── lib/
│   ├── data.ts         # All portfolio content
│   └── types.ts        # TypeScript interfaces
├── public/
│   ├── images/         # Project & profile images
│   └── files/          # CV, resume PDFs
├── tailwind.config.ts
└── package.json
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

```bash
npm run build
```

Then deploy the `.next` folder according to your platform's instructions.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Next/font (Inter, Outfit)
- **Theme**: next-themes

## License

MIT - feel free to use this for your own portfolio!