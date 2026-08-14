export const impactItems = [
  { value: "136", label: "Pull Requests", detail: "Reviewed for VidyaSetu · GSSoC 2026" },
  { value: "87",  label: "Merged Contributions", detail: "Across active open-source repositories" },
  { value: "29",  label: "Contributors", detail: "Guided across frontend, backend & AI" },
  { value: "7.68", label: "CGPA", detail: "Newton School Of Technology · 2029" }
];

export const experience = [

  {
    label: "Modelsuite AI",
    role: "Software Engineering Intern",
    period: "July 2026 – Present",
    description: "Engineered core architectural features across FrameX and the Talent Portal. In FrameX, developed the Prompt Template Library and Guided Image Studio modes, and resolved critical data integrity and security vulnerabilities. In the Talent Portal, optimized database performance by eliminating severe N+1 query bottlenecks during complex user tagging interactions, and architected an admin-controlled video resolution system to optimize platform bandwidth.",
    stack: ["React", "Express.js", "MongoDB", "Performance Tuning", "Security"]
  },
  {
    label: "GirlScript Summer of Code 2026",
    role: "Project Admin",
    period: "May 2026 – Present",
    description: "Maintained VidyaSetu during GSSoC 2026 and coordinated open-source contributors. Reviewed pull requests, assigned issues, resolved merge conflicts, and enforced CI/build standards. Guided 29 contributors across frontend, backend, authentication, analytics, and AI-related features, resulting in 87 merged contributions.",
    stack: ["Open Source", "CI/CD", "GitHub", "Code Review", "Team Leadership"]
  }
];

export const education = [
  {
    school: "Newton School Of Technology, Rishihood University",
    degree: "Bachelor of Technology (Artificial Intelligence)",
    period: "2025 - 2029",
    grade: "7.68 / 10.0"
  },
  {
    school: "Gyanti devi Inter College",
    degree: "Intermediate (Class XII)",
    period: "2024 - 2025",
    grade: "67.0%"
  },
  {
    school: "Sunbeam School, Ballia",
    degree: "Matriculation (Class X)",
    period: "2021 - 2022",
    grade: "84.0%"
  }
];

export const projects = [
  {
    slug: "vidyasetu",
    label: "AI-powered NCERT Study Platform",
    title: "VidyaSetu",
    subtitle: "Full-stack AI assessment & analytics",
    description: "An adaptive study platform generating quizzes from NCERT content, evaluating subjective answers via AI, and providing a robust student dashboard with analytics.",
    longDescription: [
      "VidyaSetu was built to democratize high-quality education by transforming standard NCERT textbooks into highly interactive, AI-driven study sessions.",
      "The platform relies on a Next.js (React Server Components) frontend powered by Supabase (PostgreSQL + pgvector) for database and authentication.",
      "The heavy lifting for subjective evaluation and document querying is offloaded to a standalone Python FastAPI AI backend that orchestrates Sentence Transformers and Langchain (with Groq models)."
    ],
    role: "Full-Stack Developer",
    timeline: "2026",
    href: "https://github.com/MRIARC-08/VidyaSetu",
    liveUrl: "https://vidya-setu-pi.vercel.app/",
    tech: ["Next.js", "Supabase", "FastAPI", "Langchain", "Groq"],
    coverImage: "https://opengraph.githubassets.com/1/MRIARC-08/VidyaSetu",
    contentImage: "/projects/vidyasetu.png"
  },
  {
    slug: "lakshya-ias",
    label: "EdTech Mentorship Platform",
    title: "Lakshya IAS",
    subtitle: "AI-Powered Mentorship Booking System",
    description: "An AI-powered, multi-agent mentorship booking system for civil service aspirants handling complex session management and Google Workspace integrations.",
    longDescription: [
      "Lakshya Scheduling required a robust architecture to handle high concurrency and reasoning capabilities for session triage.",
      "The platform is divided into three distinct services working in perfect synchronization. The Frontend is a stunning, high-performance UI built with Next.js App Router, TailwindCSS, and GSAP.",
      "The cognitive core ('Arjun') utilizes a LangGraph multi-agent state machine hosted on FastAPI. Finally, the 'Corsair Bridge' serves as a secure Express.js microservice executing Google Workspace integrations (Calendar, Gmail) using a custom SDK."
    ],
    role: "Full-Stack & AI Systems",
    timeline: "2026",
    href: "https://github.com/MRIARC-08/lakshya-scheduling",
    liveUrl: "https://lakshya-scheduling.vercel.app",
    tech: ["Next.js", "GSAP", "LangGraph", "FastAPI", "Express.js"],
    coverImage: "https://opengraph.githubassets.com/1/MRIARC-08/lakshya-scheduling",
    contentImage: "/projects/lakshya.png"
  },
  {
    slug: "where-is-my-bus",
    label: "Smart Public Transport",
    title: "Where is My Bus",
    subtitle: "Real-time Bus Tracking Navigator",
    description: "A smart transport navigator focused on the SMART principles (Security, Maintenance, Accountability, Reliability, Tracking) providing real-time geolocation mapping of city buses.",
    longDescription: [
      "Public transportation in rapidly growing cities suffers from unpredictability. 'Where is My Bus' was engineered to solve this through real-time mapping and route recommendations.",
      "The architecture consists of a Next.js full-stack application (React + Tailwind for the frontend, API Routes for the backend).",
      "Behind the scenes, a custom Route Recommendation and Simulation Engine interfaces with a Prisma ORM (SQLite/Postgres) and Mock JSON datasets to simulate and display live fleet telemetry."
    ],
    role: "Lead Engineer",
    timeline: "2026",
    href: "https://github.com/MRIARC-08/busss",
    liveUrl: "https://busss-five.vercel.app",
    tech: ["Next.js", "Prisma", "Tailwind CSS", "React"],
    coverImage: "https://opengraph.githubassets.com/1/MRIARC-08/busss",
    contentImage: "/projects/bus.png"
  },
  {
    slug: "devlens",
    label: "AI Code Intelligence",
    title: "DevLens",
    subtitle: "AI-powered codebase explorer",
    description: "A sophisticated, AI-first code intelligence platform designed to transform abstract file trees into an interactive dependency map using static analysis.",
    longDescription: [
      "DevLens aims to solve the onboarding crisis in large engineering teams. It parses codebases and creates dynamic node layouts powered by `dagre` and React Flow.",
      "The architecture uses a custom Babel pipeline to traverse source code and map dependencies. These relationships are stored via Prisma in a Neon Postgres database.",
      "When a user clicks on an edge, the context is sent to an LLM via the Groq SDK (Llama 3), instantly providing an architectural explanation of how the microservices or files interact."
    ],
    role: "Frontend & AI Systems",
    timeline: "2025",
    href: "https://github.com/MRIARC-08/DevLens",
    liveUrl: "https://hong-meng.vercel.app",
    tech: ["Next.js", "React Flow", "Groq SDK", "Babel", "Prisma"],
    coverImage: "https://opengraph.githubassets.com/1/MRIARC-08/DevLens",
    contentImage: "/projects/devlens.png"
  },
  {
    slug: "league-of-legends",
    label: "Game Marketing Platform",
    title: "League of Legends",
    subtitle: "High-fidelity promotional landing page",
    description: "A visually stunning, high-performance web experience designed to showcase game features, champion rosters, and patch updates.",
    longDescription: [
      "This project pushed the boundaries of standard DOM rendering by integrating heavy multimedia assets and complex CSS animations while maintaining a 60fps frame rate.",
      "Rather than relying on heavy JavaScript frameworks, the architecture intentionally leverages pure Vanilla HTML5, CSS3, and native JavaScript.",
      "This approach ensured maximum performance and SEO capabilities while executing highly complex, scroll-linked animations directly in the browser's native rendering engine."
    ],
    role: "Frontend Developer",
    timeline: "2025",
    href: "https://github.com/MRIARC-08/League-of-Legends-Cap",
    liveUrl: "https://league-of-legends-cap.vercel.app",
    tech: ["HTML5", "CSS3", "JavaScript"],
    coverImage: "https://opengraph.githubassets.com/1/MRIARC-08/League-of-Legends-Cap",
    contentImage: "/projects/league.png"
  }
];

export const skills = {
  languages: ["Python", "TypeScript", "JavaScript"],
  frameworks: ["Express JS", "Next.js", "Node.js", "React", "Redux", "Tailwind CSS", "Zustand", "Prisma ORM"]
};

export const githubActivityData = {
  topRepos: [
    { name: "DevLens", description: "A highly visual IDE extension for real-time code analytics.", stars: 12, forks: 3 },
    { name: "Lakshya-IAS", description: "Learning management system for competitive exam preparation.", stars: 8, forks: 2 },
    { name: "Vidyasetu", description: "Educational platform for bridging the learning gap.", stars: 5, forks: 1 },
    { name: "Where-is-my-Bus", description: "Real-time bus tracking application.", stars: 4, forks: 1 }
  ],
  keyContributions: [
    { repo: "GirlScript Summer of Code", pr: "2024", status: "Contributor", title: "Active participant and contributor in open source projects." },
    { repo: "MRIARC-08/DevLens", pr: "Core", status: "Maintainer", title: "Lead developer and maintainer of the project." }
  ],
  languages: [
    { name: "JavaScript", percentage: 45, color: "#f1e05a" },
    { name: "TypeScript", percentage: 30, color: "#3178c6" },
    { name: "Python", percentage: 15, color: "#3572A5" },
    { name: "CSS", percentage: 10, color: "#563d7c" }
  ]
};

export const thoughts = [
  {
    id: 1,
    title: "The Illusion of Complexity in Frontend",
    date: "Aug 12, 2026",
    readTime: "4 min read",
    category: "Engineering"
  },
  {
    id: 2,
    title: "Designing for Motion: Physics in UI",
    date: "Jul 28, 2026",
    readTime: "6 min read",
    category: "Design"
  },
  {
    id: 3,
    title: "Why Minimalist Architecture Wins",
    date: "Jun 15, 2026",
    readTime: "5 min read",
    category: "Architecture"
  }
];

export const resumeData = {
  header: {
    name: "Adarsh Chauhan",
    phone: "+919170819871",
    email: "adarsh.c25622@nst.rishihood.edu.in",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/adarsh-chauhan-yug" },
      { label: "Github", url: "https://github.com/MRIARC-08" }
    ]
  },
  education: [
    {
      degree: "Bachelor of Technology (Artificial intelligence)",
      institution: "Newton School Of Technology, Rishihood University",
      period: "2025 - 2029",
      grade: "7.68/10.0"
    },
    {
      degree: "Intermediate (Class XII)",
      institution: "Gyanti devi Inter College",
      period: "2024 - 2025",
      grade: "67.0%"
    },
    {
      degree: "Matriculation (Class X)",
      institution: "Sunbeam School, Ballia",
      period: "2021 - 2022",
      grade: "84.0%"
    }
  ],
  experience: [
    {
      role: "Software Engineering Intern",
      company: "Modelsuite AI",
      period: "July 2026 – Present",
      tech: "React, MongoDB, Express.js, System Architecture, Performance Tuning",
      bullets: [
        "Engineered the core Prompt Template Library and Guided Modes for the FrameX Image Studio, enabling complex prompt persistence and reusability.",
        "Resolved critical security vulnerabilities and data integrity issues identified during final code audits in FrameX.",
        "Architected an admin-controlled video resolution restriction system in the Talent Portal, optimizing storage efficiency and playback performance.",
        "Resolved severe N+1 query bottlenecks in the Talent Portal backend, significantly reducing database load during user mentioning and tagging.",
        "Implemented cross-app keyboard shortcut navigation and interactive comment tagging to streamline complex user workflows."
      ]
    }
  ],
  projects: [
    {
      name: "Vidyasetu",
      github: "https://github.com/MRIARC-08/VidyaSetu",
      demo: "https://vidya-setu-pi.vercel.app/",
      period: "March 2026",
      description: "Developing a full-stack AI-powered study platform for generating quizzes from NCERT content and user notes",
      bullets: [
        "Built features to evaluate subjective answers using AI-based assessment",
        "Designed analytics dashboards to track user performance and learning progress",
        "Integrated structured content pipelines for personalized learning experiences",
        "Implemented AI-powered chat functionality to interact with and query NCERT PDFs for contextual learning"
      ],
      techStack: "Next.js, Prisma, Supabase, Tailwind CSS, JWT, Next-Auth, AI APIs"
    },
    {
      name: "Lakshya IAS",
      github: "https://github.com/MRIARC-08/lakshya-scheduling",
      demo: "https://lakshya-scheduling.vercel.app",
      period: "2026",
      description: "An AI-powered, multi-agent mentorship booking system for civil service aspirants handling complex session management and Google Workspace integrations.",
      bullets: [
        "Architecture designed to handle high concurrency and reasoning capabilities for session triage.",
        "Frontend built with Next.js App Router, TailwindCSS, and GSAP for high-performance UI.",
        "Cognitive core utilizes a LangGraph multi-agent state machine hosted on FastAPI.",
        "Executed Google Workspace integrations (Calendar, Gmail) using a custom SDK."
      ],
      techStack: "Next.js, GSAP, LangGraph, FastAPI, Express.js"
    },
    {
      name: "Where is My Bus",
      github: "https://github.com/MRIARC-08/busss",
      demo: "https://busss-five.vercel.app",
      period: "2026",
      description: "A smart transport navigator focused on the SMART principles providing real-time geolocation mapping of city buses.",
      bullets: [
        "Engineered real-time mapping and route recommendations for public transportation.",
        "Built a Next.js full-stack application with React + Tailwind for the frontend and API Routes for the backend.",
        "Simulated and displayed live fleet telemetry using a custom Route Recommendation Engine and Prisma ORM."
      ],
      techStack: "Next.js, Prisma, Tailwind CSS, React"
    },
    {
      name: "DevLens",
      github: "https://github.com/MRIARC-08/DevLens",
      demo: "https://hong-meng.vercel.app",
      period: "2025",
      description: "A sophisticated, AI-first code intelligence platform designed to transform abstract file trees into an interactive dependency map using static analysis.",
      bullets: [
        "Parsed codebases and created dynamic node layouts powered by dagre and React Flow.",
        "Traversed source code and mapped dependencies using a custom Babel pipeline.",
        "Provided architectural explanation of microservices interaction using Llama 3 via Groq SDK."
      ],
      techStack: "Next.js, React Flow, Groq SDK, Babel, Prisma"
    },
    {
      name: "League of Legends",
      github: "https://github.com/MRIARC-08/League-of-Legends-Cap",
      demo: "https://league-of-legends-cap.vercel.app",
      period: "2025",
      description: "A visually stunning, high-performance web experience designed to showcase game features, champion rosters, and patch updates.",
      bullets: [
        "Integrated heavy multimedia assets and complex CSS animations while maintaining a 60fps frame rate.",
        "Leveraged pure Vanilla HTML5, CSS3, and native JavaScript for maximum performance and SEO.",
        "Executed highly complex, scroll-linked animations directly in the browser's native rendering engine."
      ],
      techStack: "HTML5, CSS3, JavaScript"
    }
  ],
  skills: {
    languages: "Python, TypeScript",
    frameworks: "Express JS, Next.js, Node.js, Prisma ORM, React, Redux, Tailwind, Tailwind CSS, Zustand"
  },
  extraCurricular: [
    {
      title: "Project Admin — GirlScript Summer of Code 2026",
      project: "VidyaSetu",
      period: "May 2026 – Present",
      bullets: [
        "Maintained VidyaSetu during GSSoC 2026 and coordinated open-source contributors.",
        "Reviewed pull requests, assigned issues, resolved merge conflicts, and enforced CI/build standards.",
        "Guided contributors across frontend, backend, authentication, analytics, and AI-related features.",
        "Managed 29 contributors, reviewed 136 PRs, and merged 87 contributions."
      ]
    }
  ]
};
