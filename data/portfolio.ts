export interface Skill {
  category: string;
  items: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface ContactLink {
  label: string;
  url: string;
  icon: string;
}

// Skills data - easily extensible with new categories
export const skills: Skill[] = [
  {
    category: "Frontend",
    items: ["React", "Vue.js", "Next.js", "TypeScript", "JavaScript"],
  },
  {
    category: "UI/UX",
    items: ["Tailwind CSS", "CSS3", "Responsive Design", "Accessibility", "Design Systems"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Mobile-First Design", "Touch Optimization", "Progressive Web Apps"],
  },
  {
    category: "TypeScript",
    items: ["Type Safety", "Interfaces", "Generics", "Advanced Types"],
  },
];

// Projects data - easily extensible with new projects
export const projects: Project[] = [
  {
    id: 1,
    title: "Project One",
    description: "A modern web application built with React and TypeScript, showcasing responsive design and clean code practices.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 2,
    title: "Project Two",
    description: "Full-stack Next.js application demonstrating server-side rendering, API routes, and database integration.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 3,
    title: "Project Three",
    description: "Interactive dashboard with real-time data visualization and smooth animations using React and D3.js.",
    technologies: ["React", "D3.js", "Node.js", "WebSockets"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 4,
    title: "Project Four",
    description: "E-commerce platform with advanced filtering, cart management, and payment integration.",
    technologies: ["React", "TypeScript", "Stripe API", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 5,
    title: "Project Five",
    description: "Content management system with drag-and-drop interface and real-time collaboration features.",
    technologies: ["Next.js", "React", "Firebase", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 6,
    title: "Project Six",
    description: "Progressive web app focused on performance optimization and offline functionality with a native-like experience.",
    technologies: ["React", "Service Workers", "TypeScript", "Webpack"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

// Contact links
export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    url: "mailto:your.email@example.com",
    icon: "✉",
  },
  {
    label: "LinkedIn",
    url: "https://linkedin.com/in/yourprofile",
    icon: "in",
  },
  {
    label: "GitHub",
    url: "https://github.com/yourprofile",
    icon: "gh",
  },
];

// About content
export const about = {
  intro: "I'm a web developer with a passion for creating beautiful, user-centered digital experiences. With expertise in modern frontend technologies and a meticulous eye for detail, I build responsive, accessible web applications that users love.",
  highlights: [
    "Performance-focused development",
    "Pixel-perfect UI implementation",
    "Accessible design practices",
  ],
};
