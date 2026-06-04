export interface Skill {
  category: string;
  items: { name: string; logo: string }[];
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
    items: [
      { name: "React", logo: "icons/react.svg" },
      { name: "Bootstrap", logo: "icons/bootstrap.svg" },
      { name: "Next.js", logo: "icons/nextdotjs.svg" },
      { name: "TypeScript", logo: "icons/typescript.svg" },
      { name: "JavaScript", logo: "icons/javascript.svg" },
      { name: "HTML5", logo: "icons/html5.svg" },
    ],
  },
  {
    category: "UI/UX",
    items: [
    { name: "Tailwind CSS", logo: "icons/tailwindcss.svg" },
    { name: "CSS3", logo: "icons/css3.svg" },
    { name: "Mobile-First Design", logo: "icons/mobile.svg" },
    { name: "Responsive Design", logo: "icons/responsive.svg" },
    { name: "Accessibility", logo: "icons/accessibility.svg" },
    { name: "Figma", logo: "icons/figma.svg" },
    { name: "Progressive Web Apps", logo: "icons/pwa.svg" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Github", logo: "icons/github.svg" },
      { name: "Github Copilot", logo: "icons/github.svg" },
      { name: "VS Code", logo: "icons/visualstudiocode.svg" },
      { name: "Postman", logo: "icons/postman.svg" },
        { name: "Node.JS", logo: "icons/nodejs.svg" },
      { name: "MySQL", logo: "icons/mysql.svg" },
      
    ],
  },
  {
    category: "Softskills",
    items: [
    { name: "Solution oriented", logo: "icons/idea.svg" },
    { name: "Collaboration", logo: "icons/collaboration.svg" },
    { name: "Eager to learn", logo: "icons/learning.svg" },
    { name: "Customer-oriented", logo: "icons/customer.svg" },
    ],
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
