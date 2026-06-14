import type {
  PersonalInfo,
  Project,
  SkillCategory,
  Stat,
  Experience,
} from "./types";

// ============================================
// PERSONAL INFO — Edit this to customize your portfolio
// ============================================
export const personalInfo: PersonalInfo = {
  name: "Shibashis Mondal",
  role: "Electrical Engineer | MEP Project Execution",
  tagline: "Ensuring reliable electrical systems and seamless project delivery",
  bio: `Electrical Engineer with nearly 2 years of professional experience in industrial infrastructure, warehouse expansion, cold storage projects, and metro rail projects. Currently working as Engineer – MEP while independently managing project execution responsibilities in a live operational warehouse environment.

Skilled in electrical project execution, commissioning, preventive maintenance, power distribution systems, and reliability improvement. Strong exposure to CAPEX coordination, SAP inventory management, and cross-functional collaboration with EPC contractors, OEMs, vendors, and client teams.`,
  email: "mailtoshibashis@gmail.com",
  location: "Kolkata, West Bengal",
  availableForWork: true,
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/shibashismondal/",
    instagram: "https://www.instagram.com/bijlee_wale_sahab/",
  },
};

// ============================================
// STATS — Quick stats for About section
// ============================================
export const stats: Stat[] = [
  { label: "Years Experience", value: "2", suffix: "+" },
  { label: "Projects Completed", value: "3", suffix: "+" },
  { label: "Industries Served", value: "2", suffix: "+" },
  { label: "Team Members Led", value: "15", suffix: "+" },
];

// ============================================
// PROJECTS — Update with your own projects
// ============================================
export const projects: Project[] = [
  // MEP Projects
  {
    id: "1",
    title: "MTS Racks Erection",
    description:
      "Managing execution of Material Handling Storage (MTS) racks erection in a live operational Flipkart facility. Coordinating with vendors and contractors while ensuring zero operational disruption.",
    image: "/images/project-1.jpg",
    tags: ["Project Management", "MTS Racks", "Vendor Coordination", "Flipkart"],
    category: "mep",
    demoUrl: "",
    githubUrl: "",
    featured: true,
  },
  {
    id: "2",
    title: "Cold Room Erection",
    description:
      "Executing cold room erection activities as per approved drawings and specifications in an operational warehouse. Handling integration with existing electrical systems.",
    image: "/images/project-2.jpg",
    tags: ["Cold Storage", "MEP Execution", "Electrical Integration", "Construction"],
    category: "mep",
    demoUrl: "",
    githubUrl: "",
    featured: true,
  },
  {
    id: "3",
    title: "FAPA & FSS Installation",
    description:
      "Fire Alarm & Public Addressing (FAPA) and Fire Suppression System (FSS) installation and expansion. Ensuring compliance with safety standards in operational facility.",
    image: "/images/project-3.jpg",
    tags: ["Fire Safety", "FAPA", "FSS", "Safety Compliance"],
    category: "mep",
    demoUrl: "",
    githubUrl: "",
  },
  {
    id: "4",
    title: "Electrical Expansion in MTS & Cold Rooms",
    description:
      "Electrical expansion works including power distribution extension, FAPA expansion, and integration of newly erected cold rooms and racking systems in operational Flipkart facility.",
    image: "/images/project-4.jpg",
    tags: ["Electrical Expansion", "Power Distribution", "MTS", "Cold Rooms"],
    category: "mep",
    demoUrl: "",
    githubUrl: "",
  },
  // Maintenance Projects
  {
    id: "5",
    title: "Kochi Metro Rail Project",
    description:
      "Maintenance and reliability improvement for transformers, MDBs, SMDBs, APFC panels, VCBs, ACBs, DG sets, cranes, and power tools. Reduced downtime through structured preventive maintenance schedules.",
    image: "/images/project-5.jpg",
    tags: ["Metro Rail", "Preventive Maintenance", "Electrical Systems", "Reliability"],
    category: "maintenance",
    demoUrl: "",
    githubUrl: "",
    featured: true,
  },
  {
    id: "6",
    title: "Kanpur Underground Metro Project",
    description:
      "Design review and supervision of 33kV/11kV substations. Commissioning and decommissioning of HT substations. Led electrical operations for TBM (Tunnel Boring Machine) electrical systems.",
    image: "/images/project-6.jpg",
    tags: ["HT Substations", "TBM Operations", "Commissioning", "Metro Rail"],
    category: "maintenance",
    demoUrl: "",
    githubUrl: "",
    featured: true,
  },
];

// ============================================
// SKILLS — Grouped by category
// ============================================
export const skillCategories: SkillCategory[] = [
  {
    category: "Electrical Engineering",
    icon: "Zap",
    skills: [
      { name: "HT/LT Power Distribution", level: 90 },
      { name: "Load Calculation & Cable Sizing", level: 85 },
      { name: "SLD Preparation", level: 85 },
      { name: "Transformer & Switchgear", level: 80 },
      { name: "Earthing System Design", level: 75 },
      { name: "Electrical Troubleshooting", level: 85 },
      { name: "Schematic Diagram Reading", level: 80 },
    ],
  },
  {
    category: "MEP & Project Management",
    icon: "Settings",
    skills: [
      { name: "MEP Project Execution", level: 90 },
      { name: "Vendor & Contractor Coordination", level: 85 },
      { name: "Commissioning & Handover", level: 80 },
      { name: "CAPEX Coordination", level: 75 },
      { name: "Cost Estimation & BOQs", level: 70 },
    ],
  },
  {
    category: "Maintenance & Reliability",
    icon: "Wrench",
    skills: [
      { name: "Preventive Maintenance", level: 90 },
      { name: "Electrical Troubleshooting", level: 85 },
      { name: "Safety & Compliance Audits", level: 80 },
      { name: "Predictive Maintenance", level: 75 },
      { name: "Downtime Reduction", level: 80 },
    ],
  },
  {
    category: "Tools & Software",
    icon: "Monitor",
    skills: [
      { name: "AutoCAD", level: 60 },
      { name: "MS Excel / Project", level: 80 },
    ],
  },
];

// ============================================
// EXPERIENCE — Timeline data
// ============================================
export const experiences: Experience[] = [
  {
    id: "1",
    company: "Bureau Veritas Pvt. Ltd.",
    role: "Engineer – MEP",
    startDate: "Apr 2026",
    endDate: "Present",
    description: [
      "Acting as Project Execution Lead for MEP activities in a running operational warehouse environment (Client: Flipkart)",
      "Managing execution of warehouse expansion and cold room erection activities as per approved drawings",
      "Coordinating with vendors, contractors, and client stakeholders for seamless execution without operational disruption",
      "Handling electrical expansion works including power distribution extension, FAPA expansion, and cold room integration",
      "Monitoring execution quality, safety compliance, work progress, and project coordination activities at site",
    ],
    technologies: ["MEP Coordination", "Cold Storage", "Electrical Expansion", "SAP"],
    logo: "/images/logos/bureau-veritas.png",
  },
  {
    id: "2",
    company: "Afcons Infrastructure Ltd.",
    role: "Electrical Engineer",
    startDate: "Jul 2024",
    endDate: "Apr 2026",
    description: [
      "Kochi Metro (Jul 2025 – Apr 2026): Performed maintenance and reliability improvement for transformers, MDBs, VCBs, ACBs, DG sets. Reduced downtime through structured preventive maintenance schedules",
      "Kanpur Underground Metro (Jul 2024 – Jul 2025): Reviewed design and supervised erection of 33kV/11kV substations. Commissioned and decommissioned HT substations",
      "Conducted electrical safety audits and maintained ISO audit documentation",
      "Designed electrical layouts including load calculations, cable sizing, earthing layouts, and power distribution planning",
      "Managed spare inventory and procurement using SAP MM module",
    ],
    technologies: ["Metro Rail", "HT/LT Systems", "SAP MM", "AutoCAD", "Electrical Safety"],
    logo: "/images/logos/afcons.png",
  },
];

// ============================================
// EDUCATION
// ============================================
export const education = [
  {
    degree: "B.Tech in Electrical Engineering",
    institution: "Budge Budge Institute of Technology",
    year: "2024",
    grade: "CGPA: 7.34",
  },
  {
    degree: "Diploma in Electrical Engineering",
    institution: "APC Roy Polytechnic, Jadavpur",
    year: "2020",
    grade: "CGPA: 8.6",
  },
];

// ============================================
// CERTIFICATIONS
// ============================================
export const certifications = [
  "Autodesk Revit – Beginner to Advanced (Pursuing)",
  "Autodesk AutoCAD – Ultimate Electrical Design (Pursuing)",
];

// ============================================
// LANGUAGES
// ============================================
export const languages = ["English", "Hindi", "Bengali"];

// ============================================
// NAVIGATION LINKS
// ============================================
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

// ============================================
// CV FILE PATH — Place your CV in /public/files/
// ============================================
export const cvFilePath = "/files/cv.pdf";