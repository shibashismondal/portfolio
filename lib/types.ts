export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  email: string;
  location: string;
  availableForWork: boolean;
  socialLinks: {
    linkedin: string;
    instagram: string;
  };
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: "mep" | "maintenance";
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
  logo?: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  grade: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}