// =============================================================================
// Type Definitions
// =============================================================================

export interface Engineer {
  name: string;
  status: string;
  specialization: string;
  introduction: string;
  stack: string[];
  current_focus: string;
}

export interface ExperienceHighlight {
  title: string;
  metric: string;
  description: string;
}

export interface Experience {
  title: string;
  company: string;
  url: string;
  duration: string;
  description: string;
  techStack: string[];
  highlights: ExperienceHighlight[];
}

export interface ProjectStats {
  [key: string]: string | number | string[];
}

export interface ProjectBullet {
  category: string;
  description: string;
}

export interface TechDocsHighlight {
  category: string;
  items: {
    achievement: string;
    metric: string;
    method: string;
  }[];
}

export interface Project {
  title: string;
  tagline: string;
  url: string;
  liveUrl?: string;
  techStack: string[];
  images: string[];
  summary: string;
  technicalDetails: string[];
  // Link to detailed project page (e.g., "/projects/panday")
  detailPage?: string;
  // Legacy fields for backward compatibility
  content?: string[];
  role?: string;
  architecture?: string[];
  stats?: ProjectStats;
  bullets?: ProjectBullet[];
  techDocsHighlights?: TechDocsHighlight[];
  description?: string;
  details?: string[];
}

export interface Contacts {
  github: string;
  linkedin: string;
  email: string;
}

// =============================================================================
// Engineer Identity
// =============================================================================

export const engineer: Engineer = {
  name: "Nikita Lobanov",
  status:
    "Canadian Citizen | Full Stack Web Development @ BCIT (Grad April 2026)",
  specialization: "Software Engineer",
  introduction:
    "I use Arch, Neovim, and a Lily58 btw. I like to build full stack apps to solve inconveniences I have. Currently learning how to ship production software at a small startup. Into distributed systems, automation, and making complex things feel simple.",
  stack: ["Go", "TypeScript", "Python", "PostgreSQL", "AWS", "Terraform"],
  current_focus: "Building web scrapers and CI/CD at Vero Ventures",
};

// Legacy export for backward compatibility
export const intro = {
  name: engineer.name,
  description: `${engineer.status}\n${engineer.specialization}`,
};

// =============================================================================
// Experience
// =============================================================================

export const experience: Experience[] = [
  {
    title: "Software Engineer Intern",
    company: "Vero Ventures",
    url: "https://veroventures.com",
    duration: "Jan 2026 -- Present",
    description:
      "Joining the founding team building InsurFlow, a SaaS platform for American life insurance advisors. Developing lead generation infrastructure and production CI/CD pipelines.",
    techStack: [
      "Next.js 16",
      "Bun",
      "Python",
      "Playwright",
      "Cloudflare Workers",
      "Neon",
      "GitHub Actions",
    ],
    highlights: [
      {
        title: "Lead Generation",
        metric: "40,000+ leads ingested",
        description:
          "Built distributed Python web scraper using Playwright and AsyncIO to extract insurance advisor leads from 6 major directories for cold email marketing campaigns",
      },
      {
        title: "CI/CD Architecture",
        metric: "3 min to production",
        description:
          "Architected complete DevSecOps pipeline with Cloudflare Workers, Neon database branching, ephemeral preview environments, and automated quality gates (ESLint, Vitest, SonarCloud)",
      },
      {
        title: "Cost Optimization",
        metric: "100% environment isolation",
        description:
          "Implemented PR-based ephemeral Workers with isolated Neon database branches, auto-cleanup on merge, and security scanning (CodeQL, SAST) on every code change",
      },
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Seaspan Corp",
    url: "https://www.seaspancorp.com",
    duration: "May 2024 -- Aug 2024",
    description:
      "Built internal tools for the IT department. Worked on a telemetry dashboard for maritime operators and a microservice for automating accounting file ingestion.",
    techStack: ["React", "Spring Boot", "Oracle", "PL/SQL", "PostgreSQL"],
    highlights: [
      {
        title: "Visualization",
        metric: "10x faster anomaly detection",
        description:
          "Architected real-time telemetry dashboard processing 500+ MB/daily logs via WebSockets",
      },
      {
        title: "Backend",
        metric: "160+ hours/month saved",
        description:
          "Engineered Spring Boot microservice with circuit breakers to ingest 1,400+ EDI/CSV freight manifests",
      },
      {
        title: "Optimization",
        metric: "4 min → under 500ms",
        description:
          "Designed composite B-tree indexes and PostgreSQL materialized views on 50M+ row tables",
      },
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Affistash",
    url: "https://affistash.com",
    duration: "March 2023 -- April 2024",
    description:
      "Joined a founding team of 3 to build and launch a B2B SaaS platform that automates partnerships between brands and affiliate marketers, building a Next.js full stack application integrated with Firebase.",
    techStack: ["Node.js", "Express", "Redis", "PostgreSQL"],
    highlights: [
      {
        title: "Rate Limiting",
        metric: "99.9% availability",
        description:
          "Engineered distributed sliding-window rate limiter using Redis Lua scripts for tiered API quotas",
      },
      {
        title: "Search",
        metric: "sub-50ms response",
        description:
          "Scaled analytics engine to 1,000+ brands with PostgreSQL full-text search and trigram indexes",
      },
      {
        title: "Performance",
        metric: "22% p95 latency ↓",
        description:
          "Refactored sequential batch processing into concurrent Promise pools with 30% cost reduction",
      },
    ],
  },
];

// =============================================================================
// Projects
// =============================================================================

export const projects: Project[] = [
  {
    title: "Stochi",
    tagline:
      "Tracks supplements and warns about dangerous interactions, timing conflicts, and dosage limits",
    url: "https://github.com/nikitalobanov12/stochi",
    liveUrl: "https://stochi.vercel.app",
    detailPage: "/projects/stochi",
    techStack: [
      "Next.js 16",
      "Go",
      "PostgreSQL",
      "pgvector",
      "Web Workers",
      "Transformers.js",
    ],
    images: [],
    summary:
      "Track your supplements, get warnings about dangerous combinations, and search health research with AI. Built because I was taking too many pills without knowing how they interact.",
    technicalDetails: [
      "The app has a Next.js frontend on Vercel and a Go backend on Fly.io. They share a Postgres database with pgvector extension for 1536-dimensional embeddings and HNSW indexes for semantic search.",
      "The Go microservice performs sub-millisecond pharmacokinetic calculations for 1,000+ supplements. Most follow exponential decay, but supplements like Vitamin C and Magnesium saturate at high doses, requiring different equations solved with the Lambert W function.",
      "Implemented zero-latency client-side search engine running quantized LLMs (Transformers.js) in Web Workers for fuzzy matching, eliminating server costs for 90% of queries while enabling offline PWA support.",
      "Enforced toxicological safety across 1,000+ supplements with deterministic guardrails and hard-coded FDA limits (Zinc 40mg, Iron 45mg) bounding all AI-generated suggestions.",
      "Built RAG pipeline using Llama to rewrite medical queries, search relevant research chunks from scraped Examine.com data, and generate answers backed by actual research with automatic safety guardrails.",
    ],
  },
  {
    title: "Panday",
    tagline:
      "Career roadmap platform for BC trades apprentices with interactive visualizations and AI guidance",
    url: "https://www.github.com/panday-team/panday",
    liveUrl: "https://panday.app",
    detailPage: "/projects/panday",
    techStack: [
      "Next.js",
      "Go",
      "PostgreSQL",
      "Redis Streams",
      "D3.js",
      "React Flow",
    ],
    images: ["/projects/panday-1.png", "/projects/panday-2.png"],
    summary:
      "Shows BC trades apprentices exactly what steps to take to advance their career. Interactive roadmaps, AI chat that answers questions about programs, and a team of 8 shipping it.",
    technicalDetails: [
      "Architected a Redis reverse proxy in Go translating HTTP to TCP to bridge serverless/local protocol mismatches, achieving 100% dev/prod parity across environments using Redis Streams.",
      "The main AI chat uses RAG with official BC program docs chunked and embedded in Postgres with pgvector. When users ask questions, it finds relevant parts and provides sourced answers.",
      "Established GitHub Actions CI/CD pipelines with branch protection rules, enabling 4 junior developers to effectively contribute to the 54,000-line codebase and ship 515+ Vitest tests with zero production regressions.",
      "Reduced roadmap collision detection complexity from O(n²) to O(n) using grid-based spatial partitioning, supporting 100+ node interactive visualizations with deterministic D3-force physics layouts.",
      "Shipped dual-mode voice transcription using Web Speech API with OpenAI Whisper fallback, optimizing 128kbps audio streams with adaptive timeout handling for hands-free career guidance.",
    ],
  },
  {
    title: "Aether",
    tagline: "Task manager that converts natural language into scheduled tasks",
    url: "https://github.com/nikitalobanov12/aether",
    liveUrl: "https://aethertask.com",
    detailPage: "/projects/aether",
    techStack: ["React 19", "Tauri 2.0", "Supabase", "SQLite", "Stripe"],
    images: [],
    summary:
      "I couldn't find a task app I liked. I wanted to type 'finish the report by Friday' and have it just show up on my calendar. So I built one that does that, and it got to 300+ users.",
    technicalDetails: [
      "The app feels instant because it doesn't wait for the server. When you do something, the UI updates right away and syncs in the background. If the sync fails, it rolls back automatically. React 19 has a hook for this that makes it pretty easy.",
      "The AI part uses Gemini through Supabase Edge Functions. You type something like 'finish the report by Friday' and it figures out the priority, how long it'll take, and what category it belongs in based on your other tasks. It handles timezones and daylight saving correctly which was annoying to get right.",
      "I used Tauri so I could write React but ship native apps for Windows, Mac, and Linux. The Rust part handles stuff like the system tray and native notifications.",
      "There's a cache that keeps hot data in memory (25-50MB depending on your RAM), puts warm data in SQLite, and only goes to Supabase for cold data. It tracks what gets accessed a lot and keeps that stuff close.",
      "I charge through Stripe. The backend handles all the webhook stuff for subscriptions, renewals, cancellations, failed payments, etc.",
    ],
  },
  {
    title: "Circles",
    tagline: "Private photo sharing and group chat for close friends without algorithms",
    url: "https://github.com/nikitalobanov12/circle",
    liveUrl: "https://circles.nikitalobanov.com",
    detailPage: "/projects/circles",
    techStack: [
      "Next.js",
      "NextAuth v5",
      "Prisma",
      "PostgreSQL",
      "Pusher",
      "Redis",
      "Cloudinary",
      "Zod",
    ],
    images: ["/projects/circles-1.png"],
    summary:
      "Private photo sharing and group chat for close friends. Real-time messaging, location sharing, no algorithm. Like a group chat but with photos.",
    technicalDetails: [
      "Real-time stuff uses Pusher. Each person has their own channel for notifications plus a channel for each conversation they're in. This way you only get updates for chats you're actually looking at.",
      "Messages show up instantly before the server confirms them. They go through states: sending, sent, or failed. If something fails you get a retry button. Typing indicators have a 2 second delay before sending and disappear after 3 seconds so they're not annoying.",
      "We cut API calls by 90% by batching things together. Instead of checking if each friend is online separately, one endpoint returns everyone's status at once. Caching is three layers: Redis for stuff everyone needs, in-memory for hot data, and Prisma Accelerate for queries.",
      "The database has 17 tables with 40+ indexes. Some fun patterns: users can follow other users (self-referential), activities can point to posts or comments or likes (polymorphic), and we have indexes set up for common queries like 'all posts in this circle sorted by date'.",
      "Auth is NextAuth with Google login and regular email/password. We auto-generate usernames from emails and handle all the edge cases like duplicate names and email verification.",
    ],
  },
  {
    title: "H2L Design Studio",
    tagline: "Portfolio site for a local designer",
    url: "https://github.com/nikitalobanov12/H2L-Design-Studio",
    liveUrl: "https://h2ldesignstudio.com",
    detailPage: "/projects/h2l",
    techStack: ["HTML", "CSS", "JavaScript"],
    images: ["/projects/h2l-1.png"],
    summary:
      "One of my first projects. A designer needed a portfolio and I made one. No frameworks, no build step, just HTML, CSS, and JavaScript.",
    technicalDetails: [
      "Looking at this code now is funny. But it taught me the basics: proper HTML structure, CSS layouts before flexbox was everywhere, vanilla JS for interactions. The site still works and they still use it.",
    ],
  },
];

// =============================================================================
// Contacts
// =============================================================================

export const contacts: Contacts = {
  github: "https://github.com/nikitalobanov12",
  linkedin: "https://linkedin.com/in/nikitalobanov",
  email: "nikita@nikitalobanov.com",
};
