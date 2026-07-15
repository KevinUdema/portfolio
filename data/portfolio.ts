export interface HeroContent {
  name: string;
  introText: string;
  imageSrc: string;
  imageAlt: string;
}

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

export interface ExperienceItem {
  id: number;
  title: string;
  timeframe: string;
  where: string;
  details: string;
}

// Skills data - easily extensible with new categories

export const heroContent: HeroContent = {
  name: "Kevin Udema",
  introText:
    "Ik ben een front-end developer die er naar streeft om door middel van een sterk probleemoplossend vermogen en veel aandacht voor User Experience de beste gebruikerservaring te realiseren.",
  imageSrc: "/profile2.jpg",
  imageAlt: "Kevin's profile picture",
}

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

// Experience data
export const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    timeframe: "April 2026 - Heden",
    where: "Eigen project",
    details:
      "Ontwikkeld dit portfolioproject om mijn werk te presenteren. Focus op responsive design, accesibility en een nette gebruikservaring. Gebouwd met Next.js, React en Tailwind CSS.",
  },
  {
    id: 2,
    title: "NextJS website, Front-end development",
    timeframe: "Oktober 2025 - Heden",
    where: "Blizzard Entertainment API project",
    details:
      "Na het afronden van een cursus NextJS een website gebouwd in NextJS. Deze website haalt via een API van het bedrijf ‘Blizzard Entertainment’ data op en laat op basis van deze data een mogelijk te halen ‘achievement’ zien.",
  },
  {
    id: 3,
    title: "Band website, Front-end development",
    timeframe: "Juni 2024 - Heden",
    where: "Eigen bandwebsite",
    details:
      "Na het afronden van een online React cursus besloten om een website te ontwikkelen in React voor mijn eigen band. Zo heb ik de kennis die ik in de cursus heb opgedaan kunnen toepassen.",
  },
  {
    id: 4,
    title: "UX testing, Onderzoek",
    timeframe: "Januari 2022 - Heden",
    where: "User Experience onderzoek",
    details:
      "Via verschillende platforms (o.a. Prolific & Useberry) deelgenomen aan User Experience tests om meer te weten te komen over hoe gebruikers omgaan met websites. Deze tests bestaan uit onder andere: A/B tests, usability testing en surveys.",
  },
  {
    id: 5,
    title: "Cursus NextJS, Front-end development",
    timeframe: "Juni 2025 - Augustus 2025",
    where: "Online cursus",
    details:
      "Als vervolgstap op het leren van JavaScript frameworks een online cursus gedaan voor NextJS, een React framework die nieuwe mogelijkheden toevoegt aan de React stack zoals verschil in server- en client-components voor snellere laadtijden. De standaard implementatie van NextJS gaat vaak samen met TypeScript & Tailwind.",
  },
  {
    id: 6,
    title: "ACS-buildings, Groningen — Android app Development",
    timeframe: "April 2021 - Januari 2022",
    where: "ACS-buildings",
    details:
      "Als afstudeerstage een storingspagina ontwikkeld voor de Climatics app van ACS-buildings. Deze pagina geeft storingen weer en geeft de mogelijkheid te filteren tussen verschillende soorten storingen. Ontwikkeld in React Native.",
  },
  {
    id: 7,
    title: "Minor: Digital Product Lab, Groningen — Science & Engineering",
    timeframe: "September 2019 - Februari 2020",
    where: "Hanzehogeschool Groningen",
    details:
      "Een MVP ontwikkeld voor het platform ‘Move your mind’ waarop zorgprofessionals beter afspraken met patiënten kunnen voorbereiden door middel van ingevulde data van de patiënt. Om dit goed te kunnen realiseren zijn er meerdere interviews en UX studies uitgevoerd in samenwerking met psychologen. De front-end van dit project is ontwikkeld in Angular. Dit project was in samenwerking met Inter-PSY, Inter-fysio, Mobilecare & Transcare-Pijn.",
  },
  {
    id: 8,
    title: "Noorderpoort Groningen, Groningen — stagiair Web Development",
    timeframe: "September 2016 - Februari 2017",
    where: "Noorderpoort Groningen",
    details:
      "Een website voor Talent for Romania, een initiatief vanuit de scholen om in Roemenië studiegebouwen te bouwen met studenten van de opleidingen. CMS systeem & website ontwikkeld met een klasgenoot.",
  },
  {
    id: 9,
    title: "NC-websites, Winschoten — Stagiair Web Development",
    timeframe: "September 2015 - Februari 2016",
    where: "NC-websites",
    details:
      "Stagiair webdesign voor opleiding MBO Applicatieontwikkeling niveau 4.",
  },
  {
    id: 10,
    title: "NC-websites, Winschoten — Front-end developer",
    timeframe: "Februari 2015 - Januari 2019",
    where: "NC-websites",
    details:
      "Front-end development werk verricht voor NC-websites in Winschoten (Groningen). Na mijn stage blijven werken en voornamelijk webbouw opdrachten uitgevoerd met de bijbehorende PHP- en JavaScript werkzaamheden en met behulp van NC-websites hun eigen CMS.",
  }
];

export const educations: ExperienceItem[] = [
  {
    id: 1,
    title: "Hanzehogeschool, Groningen — HBO ICT",
    timeframe: "September 2017 - 2022",
    where: "Hanzehogeschool Groningen",
    details: "HBO Major: Software Engineering.",
  },
  {
    id: 2,
    title: "Noorderpoort, Winschoten — MBO applicatieontwikkeling",
    timeframe: "September 2014 - Juli 2017",
    where: "Noorderpoort Winschoten",
    details: "MBO opleiding Applicatieontwikkeling niveau 4.",
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
