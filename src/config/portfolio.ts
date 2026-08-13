/**
 * Single source of truth for all personal information.
 * Replace the PLACEHOLDER values below with real details.
 */

export const profile = {
  name: "Pranjal Mondal",
  monogram: "PM",
  profileImage: "/profile/pranjal-mondal.jpg",
  headline: "Full-Stack Web Developer | Software Developer",
  positioning:
    "Building scalable web applications, exploring AI/ML, and analyzing the intersection of technology, data, and financial economics.",
  university: "Jadavpur University",
  degree: "B.Tech — Computer Science & Engineering",
  graduationYear: "2027",
  status: "Open to internships & software development opportunities",
  location: "India",
};

/** Replace these placeholders with real values. */
export const links = {
  email: "mondalpranjal28@gmail.com",
  phone: "+91-8653928123",
  github: "https://github.com/mondalpranjal28-sketch",
  githubUsername: "mondalpranjal28-sketch",
  linkedin: "https://www.linkedin.com/in/pranjal-mondal-29756428b",
  resume: "/resume/Pranjal-Mondal-Resume.pdf",
};

export const isPlaceholder = (value: string) =>
  /^(YOUR_|GITHUB_|LIVE_)/.test(value);

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Interests", href: "#ai" },
  { label: "Contact", href: "#contact" },
];

export const aboutParagraphs = [
  "Hi, I'm Pranjal Mondal, a Computer Science & Engineering student at Jadavpur University, graduating in 2027. I am passionate about building web applications and software systems, with a particular interest in backend development, scalable architectures, APIs, databases, and modern web technologies.",
  "Alongside software development, I am exploring Artificial Intelligence and Machine Learning and developing my understanding of data-driven systems.",
  "I am also deeply interested in macroeconomics and financial markets — how interest rates, inflation, economic growth and monetary policy influence stock markets. This motivates me to explore the intersection of software engineering, data analytics, economics, and financial technology.",
];

export const identityTags = [
  "Computer Science & Engineering",
  "Jadavpur University",
  "Graduation: 2027",
  "Full-Stack Development",
  "Backend Development",
  "AI/ML",
  "Data Analytics",
  "Financial Economics",
];

export type Proficiency = "Comfortable With" | "Working Knowledge" | "Currently Exploring";

export type Skill = { name: string; note: string; level: Proficiency };

export const skillCategories: { category: string; skills: Skill[] }[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "C", note: "Systems fundamentals & DSA", level: "Comfortable With" },
      { name: "C++", note: "Data structures, algorithms, OOP", level: "Comfortable With" },
      { name: "Java", note: "Object-oriented application code", level: "Working Knowledge" },
      { name: "Python", note: "Scripting, data work, AI/ML", level: "Comfortable With" },
      { name: "JavaScript", note: "Web apps across the stack", level: "Comfortable With" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "HTML", note: "Semantic, accessible markup", level: "Comfortable With" },
      { name: "CSS", note: "Responsive layouts & design systems", level: "Comfortable With" },
      { name: "JavaScript", note: "DOM, async, browser APIs", level: "Comfortable With" },
      { name: "React", note: "Component-driven interfaces", level: "Working Knowledge" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", note: "Server-side JavaScript runtime", level: "Comfortable With" },
      { name: "Express.js", note: "Routing, middleware, services", level: "Comfortable With" },
      { name: "REST APIs", note: "API design & integration", level: "Comfortable With" },
      { name: "Socket.IO", note: "Real-time bidirectional events", level: "Working Knowledge" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", note: "Relational modelling & SQL", level: "Working Knowledge" },
      { name: "PostgreSQL", note: "Queries, constraints, indexes", level: "Working Knowledge" },
      { name: "MongoDB", note: "Document data modelling", level: "Working Knowledge" },
      { name: "Oracle", note: "Coursework-level SQL & PL/SQL", level: "Currently Exploring" },
    ],
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Git", note: "Version control workflows", level: "Comfortable With" },
      { name: "GitHub", note: "Collaboration & code hosting", level: "Comfortable With" },
      { name: "Docker", note: "Containerised environments", level: "Currently Exploring" },
      { name: "Linux", note: "Shell, processes, tooling", level: "Working Knowledge" },
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  tech: string[];
  categories: ("Full Stack" | "Backend" | "AI/ML" | "Data")[];
  /** Replace with the real repository URL. */
  codeUrl: string;
  /** Replace with the real deployment URL. */
  liveUrl: string;
  /** Optional screenshot path, e.g. "/projects/chat.png" */
  image?: string;
  /** Optional downloadable project archive path, e.g. "/projects/multi-client-chat.zip" */
  downloadUrl?: string;
};

export const projects: Project[] = [
  {
    id: "multi-client-chat",
    title: "Multi-Client Chat Application",
    tagline: "Real-time messaging over WebSockets",
    description:
      "A full-stack real-time communication system supporting multiple simultaneous users, chatrooms, private messaging, image/video sharing, and AI-assisted troll detection.",
    features: [
      "Real-time multi-client messaging",
      "Multiple chatrooms and one-to-one private messaging",
      "Image/video upload and distribution",
      "AI-powered troll detection with Gemini/LLM APIs",
      "Concurrent event-driven client/server architecture",
      "Observer, middleware-chain and singleton design patterns",
    ],
    tech: [
      "Node.js",
      "Express",
      "Socket.IO",
      "JavaScript",
      "REST API",
      "Multer",
      "Gemini API",
      "WebSockets",
    ],
    categories: ["Full Stack", "Backend"],
    codeUrl: "https://github.com/mondalpranjal28-sketch/Multi-client-chat-application",
    liveUrl: "",
    downloadUrl: "/projects/multi-client-chat.zip",
  },
];

export const projectFilters = ["All", "Full Stack", "Backend", "AI/ML", "Data"] as const;

export type TimelineEntry = {
  period: string;
  title: string;
  description: string;
  status: "current" | "upcoming";
};

export const timeline: TimelineEntry[] = [
  {
    period: "Present",
    title: "Computer Science & Engineering student",
    description: "Studying core CS at Jadavpur University — algorithms, systems, databases and networks.",
    status: "current",
  },
  {
    period: "Present",
    title: "Full-Stack Web Development",
    description: "Building web applications with JavaScript, React, Node.js and Express, with a focus on backend design.",
    status: "current",
  },
  {
    period: "Present",
    title: "Exploring AI/ML and Data Analytics",
    description: "Learning machine learning fundamentals and working with data-driven applications.",
    status: "current",
  },
  {
    period: "Present",
    title: "Macroeconomics × Financial Markets",
    description: "Studying how macroeconomic conditions shape market behaviour, and how data can model those links.",
    status: "current",
  },
  {
    period: "2027",
    title: "Expected B.Tech graduation",
    description: "Computer Science & Engineering, Jadavpur University.",
    status: "upcoming",
  },
];

export const aiInterests = [
  "Machine Learning",
  "AI systems",
  "Data-driven applications",
  "Generative AI",
  "Intelligent software systems",
  "Applying AI to real-world problems",
];

export const aiPipeline = [
  { label: "Data", detail: "Collection, cleaning, features" },
  { label: "Models", detail: "Training & evaluation" },
  { label: "Intelligence", detail: "Predictions & reasoning" },
  { label: "Applications", detail: "Useful software products" },
];

export const financeChain = [
  { label: "Macroeconomics", detail: "Growth, inflation, policy stance" },
  { label: "Economic Indicators", detail: "CPI, rates, employment, output" },
  { label: "Market Expectations", detail: "Pricing of future conditions" },
  { label: "Stock Market", detail: "Sector and index behaviour" },
];

export const financeTopics = [
  "Macroeconomic indicators",
  "Inflation",
  "Interest rates",
  "Monetary policy",
  "Economic growth",
  "Market behaviour",
  "Stock market analysis",
  "Data analytics",
  "Financial data visualization",
];

export const currentlyLearning = [
  { title: "Advanced Backend Development", detail: "Auth, caching, queues, testing" },
  { title: "Scalable Web Architecture", detail: "System design & performance" },
  { title: "AI/ML", detail: "Model building and evaluation" },
  { title: "Data Analytics", detail: "Analysis pipelines & visualization" },
  { title: "Financial/Economic Data", detail: "Time-series and macro datasets" },
  { title: "Modern Full-Stack Development", detail: "Type-safe, end-to-end apps" },
];
