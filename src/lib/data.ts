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
  status: "Canadian Citizen | Vancouver, BC",
  specialization: "Software Engineer",
  introduction: `I'm a developer in Vancouver. I like building software that feels fast and solves problems I actually have.

Most of my time right now is spent on Vero Ventures, where I'm working in a team of 5 developing a SaaS app for insurance advisors.



I'm really into systems programming, Optimizing my health, and building tools that respect the user's time. I use Arch and Neovim mostly because I like having control of how my tools work.`,
  stack: ["Go", "TypeScript", "Python", "PostgreSQL", "AWS", "Terraform"],
  current_focus: "Building lead gen infrastructure and DevSecOps pipelines",
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
    title: "Software Engineer, Founding Team",
    company: "Vero Ventures",
    url: "https://veroventures.com",
    duration: "Jan 2026 - Present",
    description:
      "Building InsurFlow, a SaaS platform for American life insurance advisors. Own lead generation infrastructure and DevSecOps architecture.",
    techStack: [
      "Python",
      "Playwright",
      "Cloudflare Workers",
      "Neon",
      "GitHub Actions",
    ],
    highlights: [
      {
        title: "Lead Gen Engine",
        metric: "40k+ leads",
        description:
          "Built distributed Python scrapers injecting 40k+ leads into the sales funnel",
      },
      {
        title: "DevSecOps Architecture",
        metric: "3 min deploys",
        description:
          "Reduced deploy time to 3 minutes with a full CI/CD pipeline (Cloudflare Workers, Neon branching, GitHub Actions)",
      },
      {
        title: "Environment Isolation",
        metric: "Zero conflicts",
        description:
          "Implemented per-PR ephemeral environments to ensure zero-conflict development",
      },
    ],
  },
  {
    title: "Software Engineer",
    company: "Seaspan Corp",
    url: "https://www.seaspancorp.com",
    duration: "May 2024 - Aug 2024",
    description:
      "Built internal tools for the IT department. Automated freight manifest ingestion and architected real-time telemetry dashboards.",
    techStack: ["React", "Spring Boot", "Oracle", "PL/SQL", "PostgreSQL"],
    highlights: [
      {
        title: "Automation",
        metric: "160+ hours/month saved",
        description:
          "Automated freight manifest ingestion with a fault-tolerant Spring Boot microservice",
      },
      {
        title: "Query Optimization",
        metric: "99.8% latency reduction",
        description:
          "Optimized 50M+ row database queries (4min to 500ms) using composite indexing",
      },
      {
        title: "Operational Visibility",
        metric: "500MB+ daily logs",
        description:
          "Architected a real-time telemetry dashboard handling 500MB+ daily logs",
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
      "Pharmacokinetic modeling engine for supplement safety and optimization",
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
      "Prevents dangerous supplement interactions before they happen. Sub-millisecond pharmacokinetic calculations for 1,000+ compounds with hard-coded FDA safety limits bounding all AI suggestions.",
    technicalDetails: [
      "Go microservice performs sub-millisecond pharmacokinetic calculations using exponential decay and Lambert W functions for saturation kinetics. Critical for accurate half-life tracking across 1,000+ supplements.",
      "Enforced toxicological safety with deterministic guardrails. Hard-coded FDA limits (Zinc 40mg, Iron 45mg) override all AI-generated suggestions to prevent overdose recommendations.",
      "Zero-latency client-side search using quantized LLMs (Transformers.js) in Web Workers. Eliminates server costs for 90% of queries while enabling offline PWA support.",
      "RAG pipeline surfaces research-backed answers from embedded Examine.com data. Llama rewrites medical queries, searches relevant chunks, and generates sourced responses.",
      "Next.js frontend on Vercel, Go backend on Fly.io. Shared Postgres with pgvector extension for 1536-dimensional embeddings and HNSW indexes.",
    ],
  },
  {
    title: "Panday",
    tagline:
      "AI-driven career roadmap platform with real-time distributed architecture",
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
      "Architected real-time ingestion pipelines using Redis Streams to handle 3M+ events. Built a Go reverse proxy translating HTTP to TCP, achieving 100% dev/prod parity across serverless environments.",
    technicalDetails: [
      "Go reverse proxy translates HTTP to TCP, bridging serverless/local protocol mismatches. Enables Redis Streams in edge environments where raw TCP is unavailable.",
      "RAG assistant surfaces answers from official BC program documentation. Documents chunked and embedded in Postgres with pgvector for semantic search.",
      "CI/CD pipelines with branch protection enabled 4 junior developers to ship to a 54,000-line codebase. 515+ Vitest tests with zero production regressions.",
      "Reduced roadmap collision detection from O(n^2) to O(n) using grid-based spatial partitioning. Supports 100+ node interactive visualizations with deterministic D3-force physics.",
      "Dual-mode voice transcription. Web Speech API with OpenAI Whisper fallback. 128kbps audio streams with adaptive timeout handling.",
    ],
  },
  {
    title: "Aether",
    tagline:
      "Natural language task manager that converts text to scheduled tasks",
    url: "https://github.com/nikitalobanov12/aether",
    liveUrl: "https://aethertask.com",
    detailPage: "/projects/aether",
    techStack: ["React 19", "Tauri 2.0", "Supabase", "SQLite", "Stripe"],
    images: [],
    summary:
      "Type 'finish the report by Friday' and it appears on your calendar. Gemini AI parses priority, duration, and category. 300+ users across Windows, Mac, and Linux.",
    technicalDetails: [
      "React 19 useOptimistic for instant UI feedback. Actions update immediately, sync in background, and auto-rollback on failure. Zero perceived latency.",
      "Gemini via Supabase Edge Functions parses natural language into structured tasks. Handles timezones, daylight saving, relative dates, and context-aware categorization.",
      "Tauri 2.0 ships native desktop apps from a single React codebase. Rust handles system tray, native notifications, and OS-level integrations.",
      "Three-tier cache architecture. Hot data in memory (25-50MB), warm data in SQLite, cold data in Supabase. Access patterns tracked for automatic promotion.",
      "Stripe subscription billing. Full webhook handling for renewals, cancellations, failed payments, and grace periods.",
    ],
  },
  {
    title: "Circles",
    tagline:
      "Private photo sharing and group chat for close friends without algorithms",
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
];

// =============================================================================
// Contacts
// =============================================================================

export const contacts: Contacts = {
  github: "https://github.com/nikitalobanov12",
  linkedin: "https://linkedin.com/in/nikitalobanov",
  email: "nikita@nikitalobanov.com",
};
