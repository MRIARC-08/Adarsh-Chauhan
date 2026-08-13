export const impactItems = [
  { value: "136", label: "Pull Requests", detail: "Reviewed for VidyaSetu · GSSoC 2026" },
  { value: "87",  label: "Merged Contributions", detail: "Across active open-source repositories" },
  { value: "29",  label: "Contributors", detail: "Guided across frontend, backend & AI" },
  { value: "7.68", label: "CGPA", detail: "Newton School Of Technology · 2029" }
];

export const experience = [
  {
    label: "Wondrr · NCR Delhi",
    role: "Frontend SDE Intern",
    period: "January 2026 – March 2026",
    description: "Migrated legacy React-based admin panel to Next.js production architecture, improving routing structure and performance. Integrated frontend with existing backend services via REST APIs, ensuring seamless data flow across dashboards and management tools. Refactored components into reusable modular structure using modern React + Next.js patterns. Implemented optimized page rendering using SSR/CSR strategies.",
    stack: ["Next.js", "React", "JavaScript", "REST APIs", "TailwindCSS", "Zustand", "Axios"]
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
    tech: ["Next.js", "Prisma", "Tailwind CSS", "React"],
    coverImage: "https://opengraph.githubassets.com/1/MRIARC-08/busss",
    contentImage: "/projects/bus.png"
  },
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
    tech: ["Next.js", "Supabase", "FastAPI", "Langchain", "Groq"],
    coverImage: "https://opengraph.githubassets.com/1/MRIARC-08/VidyaSetu",
    contentImage: "/projects/vidyasetu.png"
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
    tech: ["HTML5", "CSS3", "JavaScript"],
    coverImage: "https://opengraph.githubassets.com/1/MRIARC-08/League-of-Legends-Cap",
    contentImage: "/projects/league.png"
  }
];

export const skills = {
  languages: ["Python", "TypeScript", "JavaScript"],
  frameworks: ["Express JS", "Next.js", "Node.js", "React", "Redux", "Tailwind CSS", "Zustand", "Prisma ORM"]
};
