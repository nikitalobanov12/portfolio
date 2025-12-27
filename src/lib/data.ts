// =============================================================================
// Type Definitions
// =============================================================================

export interface Engineer {
  name: string;
  status: string;
  specialization: string;
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
  role: string;
  architecture: string[];
  url: string;
  liveUrl?: string;
  techStack: string[];
  images: string[];
  stats: ProjectStats;
  bullets: ProjectBullet[];
  techDocsHighlights?: TechDocsHighlight[];
  // Legacy fields for backward compatibility
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
  status: "Canadian Citizen | CS @ BCIT (Grad 2026)",
  specialization: "Full Stack Web Development",
  stack: ["Go", "TypeScript", "Next.js", "AWS", "Tauri", "Postgres"],
  current_focus: "Building Stochi (Bio-optimization platform)",
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
    company: "Seaspan Corp",
    url: "https://www.seaspancorp.com",
    duration: "May '24 - Aug '24",
    description: "Built internal tools for the IT department. Worked on a telemetry dashboard for maritime operators and a microservice for automating accounting file ingestion.",
    techStack: ["React", "Spring Boot", "Oracle", "Docker"],
    highlights: [
      {
        title: "Visualization",
        metric: "10x faster anomaly detection",
        description:
          "Architected real-time telemetry dashboard processing 500+ MB/daily logs",
      },
      {
        title: "Backend",
        metric: "160+ hours/month saved",
        description:
          "Engineered Spring Boot microservice to ingest 1,400+ accounting files/month",
      },
      {
        title: "Optimization",
        metric: "Minutes → sub-seconds",
        description: "Optimized SQL queries with materialized views",
      },
    ],
  },
  {
    title: "Software Developer",
    company: "Affistash",
    url: "https://affistash.com",
    duration: "Mar '23 - Apr '24",
    description: "Full stack developer at an influencer marketing startup. Focused on backend performance, API infrastructure, and scaling the analytics engine.",
    techStack: ["Node.js", "Redis", "Lua"],
    highlights: [
      {
        title: "Performance",
        metric: "22% p95 latency ↓, 30% cost ↓",
        description:
          "Refactored sequential batch processing into concurrent Promise pools",
      },
      {
        title: "Distributed Systems",
        metric: "99.9% availability",
        description:
          "Engineered distributed sliding window rate limiter using Redis/Lua",
      },
      {
        title: "Search",
        metric: "sub-50ms response",
        description:
          "Scaled analytics engine to 1,000+ brands with server-side faceted search",
      },
    ],
  },
];

// =============================================================================
// Projects
// =============================================================================

export const projects: Project[] = [
  {
    title: "Panday",
    tagline: "RAG platform with custom Go TCP/HTTP Proxy",
    role: "Tech Lead (Team of 8)",
    architecture: ["Go Proxy", "RAG Pipeline", "pgvector"],
    url: "https://www.github.com/panday-team/panday",
    liveUrl: "https://panday.app",
    techStack: [
      "Next.js",
      "Go",
      "Python",
      "PostgreSQL",
      "pgvector",
      "Redis",
      "Bun",
    ],
    images: ["/projects/panday-1.png", "/projects/panday-2.png"],
    stats: {
      team_size: 8,
      uptime: "100%",
      rag_cost_reduction: "80%",
      tests_passing: 515,
      lines_of_code: "~54,000",
    },
    bullets: [
      {
        category: "Custom Go Proxy",
        description:
          "Engineered Redis Proxy in Go to intercept TCP requests and translate to HTTP, bridging Docker/Serverless gaps",
      },
      {
        category: "RAG Optimization",
        description:
          "Implemented 5-minute TTL in-memory caching for queries, reducing OpenAI API costs by ~80%",
      },
      {
        category: "Algorithmic",
        description:
          "Optimized graph collision detection from O(n²) to O(n) via grid-based spatial partitioning",
      },
    ],
    techDocsHighlights: [
      {
        category: "AI/ML & RAG Systems",
        items: [
          {
            achievement: "Reduced embedding API calls",
            metric: "~80% reduction",
            method: "5-minute TTL in-memory cache for RAG query results",
          },
          {
            achievement: "Sub-second semantic search",
            metric: "1536-dimensional vectors",
            method: "HNSW index (m=16, ef_construction=64) on pgvector",
          },
          {
            achievement: "Fault-tolerant RAG pipeline",
            metric: "100% uptime",
            method: "Hybrid JSON/PostgreSQL backend with auto-switching",
          },
        ],
      },
      {
        category: "Backend Infrastructure",
        items: [
          {
            achievement: "Optimized message persistence",
            metric: "Buffered writes via Redis Streams",
            method: "XREADGROUP/XACK pattern with parallel cron flush",
          },
          {
            achievement: "Prevented API abuse",
            metric: "30 req/min rate limiting",
            method: "Upstash sliding window with user-scoped limits",
          },
        ],
      },
      {
        category: "Frontend & Visualization",
        items: [
          {
            achievement: "Reduced collision detection complexity",
            metric: "O(n²) → O(n)",
            method: "Grid-based spatial partitioning",
          },
          {
            achievement: "Interactive career roadmap",
            metric: "7 custom node types, 100+ nodes",
            method: "React Flow with selection-based visibility",
          },
        ],
      },
      {
        category: "Testing & Quality",
        items: [
          {
            achievement: "Comprehensive test coverage",
            metric: "515 passing tests, 26 files",
            method: "Vitest suite with vi.mock() patterns",
          },
        ],
      },
    ],
    // Legacy fields
    description:
      "An AI career guidance platform for skilled trades workers. I led a team of 8 people to build this for my capstone project.",
    details: [
      "This was my capstone project where I led a team of 8 people (5 developers and 3 designers). The hardest part wasn't writing code. It was learning how to split up work, give good feedback in code reviews, and make sure everyone understood how the system fit together.",
      "The main feature is a RAG (Retrieval Augmented Generation) pipeline that takes confusing government regulations about trade certifications and turns them into simple visual career paths. We stored all the text as vector embeddings in PostgreSQL using pgvector, so when someone asks a question, we can find the most relevant info really fast.",
    ],
  },
  {
    title: "Dayflow",
    tagline: "Local-first AI planner with 0ms perceived latency",
    role: "Solo Developer",
    architecture: ["Tauri 2.0", "Rust", "Supabase Edge"],
    url: "https://github.com/nikitalobanov12/dayflow",
    liveUrl: "https://dayflow.ca",
    techStack: ["React 19", "Tauri 2.0", "Supabase", "SQLite", "Stripe"],
    images: [],
    stats: {
      latency: "0ms (Optimistic)",
      active_users: "300+",
      platforms: ["Windows", "macOS", "Linux"],
    },
    bullets: [
      {
        category: "Local-First Sync",
        description:
          "Achieved 0ms perceived latency using optimistic UI state management with automatic rollback on failure",
      },
      {
        category: "Cross-Platform",
        description:
          "Built unified architecture using Tauri 2.0, compiling to native binaries for Windows, macOS, and Linux from one codebase",
      },
      {
        category: "AI Agent",
        description:
          "Integrated Gemini 1.5 Flash via Edge Functions to autonomously schedule tasks based on historical velocity",
      },
    ],
    techDocsHighlights: [
      {
        category: "AI & Machine Learning",
        items: [
          {
            achievement: "Intelligent task scheduling",
            metric: "DST-aware timezone handling",
            method: "Gemini 1.5 Flash via Supabase Edge Functions",
          },
          {
            achievement: "Natural language task creation",
            metric: "Infers priority, estimates, categories",
            method: "Board pattern learning from existing tasks",
          },
        ],
      },
      {
        category: "Database & Sync",
        items: [
          {
            achievement: "Multi-layer caching",
            metric: "25-50MB memory bounded",
            method: "LRU eviction with hit counting",
          },
          {
            achievement: "0ms perceived latency",
            metric: "Instant UI feedback",
            method: "React 19 useOptimistic with automatic rollback",
          },
        ],
      },
      {
        category: "Cross-Platform",
        items: [
          {
            achievement: "Single codebase deployment",
            metric: "3 desktop platforms",
            method: "Tauri 2.0 with platform abstraction layer",
          },
          {
            achievement: "Native window controls",
            metric: "Sprint/Focus modes",
            method: "Platform-conditional rendering with web fallbacks",
          },
        ],
      },
      {
        category: "Integrations",
        items: [
          {
            achievement: "Google Calendar OAuth",
            metric: "Server-side token handling",
            method: "Supabase Edge Functions with auto-refresh",
          },
          {
            achievement: "Stripe subscription",
            metric: "7+ webhook event types",
            method: "Full lifecycle management with usage tracking",
          },
        ],
      },
    ],
    // Legacy fields
    description:
      "A desktop task planner with AI that actually schedules your tasks for you. It grew to over 300 users.",
    details: [
      "I was frustrated with every task app I tried. I wanted to type something like 'finish the report by Friday' and have it show up on my calendar automatically. So I connected Gemini AI to parse natural language into actual scheduled tasks. It works really well now and I use it every day.",
    ],
  },
  {
    title: "Circles",
    tagline: "Real-time social platform with 3-layer caching",
    role: "Team of 3",
    architecture: ["Next.js", "Pusher", "Redis", "Prisma"],
    url: "https://github.com/nikitalobanov12/circle",
    liveUrl: "https://circles.nikitalobanov.com",
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
    stats: {
      prisma_models: 17,
      database_indexes: "40+",
      api_call_reduction: "90%",
      cache_layers: 3,
    },
    bullets: [
      {
        category: "Data Modeling",
        description:
          "Designed scalable schema with 17 interconnected models and 40+ indexes to support granular RBAC",
      },
      {
        category: "Real-Time Engine",
        description:
          "Architected dual-channel (User/Conversation) messaging using Pusher with cursor-based pagination",
      },
      {
        category: "Performance",
        description:
          "Reduced API calls by 90% via batch status endpoints and 3-layer caching (Redis/In-Memory/Prisma)",
      },
    ],
    techDocsHighlights: [
      {
        category: "Authentication & Security",
        items: [
          {
            achievement: "Dual OAuth/Credentials auth",
            metric: "2 providers supported",
            method: "NextAuth v5 with JWT sessions, auto username generation",
          },
          {
            achievement: "Route protection",
            metric: "61+ API routes secured",
            method: "Middleware with JSON 401 vs redirects",
          },
        ],
      },
      {
        category: "Database & Data Layer",
        items: [
          {
            achievement: "Complex data architecture",
            metric: "17 models, 50+ relationships",
            method: "Self-referential Follow, polymorphic Activity",
          },
          {
            achievement: "Query optimization",
            metric: "40+ indexes",
            method: "Composite indexes for complex queries",
          },
        ],
      },
      {
        category: "Real-Time Features",
        items: [
          {
            achievement: "Dual-channel Pusher",
            metric: "Unlimited concurrent conversations",
            method: "User + Conversation channels with observable callbacks",
          },
          {
            achievement: "Optimistic messaging",
            metric: "Zero perceived latency",
            method: "Status state machine (sending/sent/failed) with retry",
          },
          {
            achievement: "Typing indicators",
            metric: "Multi-user support",
            method: "2s debounce send, 3s auto-expire display",
          },
        ],
      },
      {
        category: "Performance",
        items: [
          {
            achievement: "3-layer caching",
            metric: "Sub-ms reads on hot data",
            method: "Redis + In-Memory TTL + Prisma Accelerate",
          },
          {
            achievement: "Eliminated N+1 queries",
            metric: "O(1) lookups",
            method: "DataLoader-style batch loaders with Set/Map",
          },
        ],
      },
    ],
    // Legacy fields
    description:
      "A private social app for friend groups with photo sharing, group chat, and live location. I built this with two friends as a school project.",
    details: [
      "We wanted something between Instagram and Google Drive. A private space where you and your friends can share photos, chat, and see where everyone is. No algorithm trying to show you ads, just your actual friends.",
    ],
  },
  {
    title: "H2L Design Studio",
    tagline: "Freelance designer portfolio",
    role: "Solo Developer",
    architecture: ["Vanilla JS"],
    url: "https://github.com/nikitalobanov12/H2L-Design-Studio",
    liveUrl: "https://h2ldesignstudio.com",
    techStack: ["HTML", "CSS", "JavaScript"],
    images: ["/projects/h2l-1.png"],
    stats: {},
    bullets: [],
    // Legacy fields
    description:
      "A portfolio website for a local freelance designer. This was one of my first real web projects where I learned the basics.",
    details: [
      "This was one of my first web projects. A local designer needed a simple portfolio site to show their work, and I built it for them.",
      "Looking back at the code now is a good reminder of how far I've come. No frameworks, no build tools, just HTML, CSS, and plain JavaScript files in a folder. But it taught me the basics and the site still works today.",
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
