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
  url: string;
  liveUrl?: string;
  techStack: string[];
  images: string[];
  summary: string;
  technicalDetails: string[];
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
    description:
      "Built internal tools for the IT department. Worked on a telemetry dashboard for maritime operators and a microservice for automating accounting file ingestion.",
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
    description:
      "Full stack developer at an influencer marketing startup. Focused on backend performance, API infrastructure, and scaling the analytics engine.",
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
    title: "Stochi",
    tagline: "Bio-optimization platform with pharmacokinetic modeling",
    url: "https://github.com/nikitalobanov12/stochi",
    liveUrl: "https://stochi.vercel.app",
    techStack: [
      "Next.js 16",
      "Go",
      "PostgreSQL",
      "pgvector",
      "Drizzle",
      "Transformers.js",
      "Capacitor",
    ],
    images: [],
    summary:
      "I got really into optimizing my health and kept running into contradictory information about supplements online. So I built something to tell me if my stack has problems—like when two supplements compete for absorption or when I'm taking them in the wrong ratio.",
    technicalDetails: [
      "The app is split into a Next.js frontend on Vercel and a Go backend on Fly.io, both talking to a shared Postgres database. The frontend handles auth and CRUD, while Go handles the heavy computation—pharmacokinetic modeling would be painfully slow in JavaScript.",
      "The Go engine models how supplements absorb and clear from your body using real pharmacokinetic equations. Most supplements follow first-order kinetics (exponential decay), but some like Vitamin C and Magnesium have saturable absorption that follows Michaelis-Menten kinetics. I solve these analytically using the Lambert W function rather than numerical approximation.",
      "The interaction detection walks a graph of known supplement relationships. It checks three things: timing conflicts (zinc and iron compete for DMT1 transporters, so you shouldn't take them together), ratio imbalances (high zinc depletes copper, so you need to maintain an 8-15:1 ratio), and CYP450 enzyme interactions (some supplements affect how your liver metabolizes others).",
      "For the knowledge base, I scraped research summaries from Examine.com, chunked them into ~800 token segments, and generated embeddings with OpenAI's text-embedding-3-small. These live in Postgres with pgvector. When you ask a question, Llama 3.1 rewrites it with medical terminology, we do a cosine similarity search, then Llama generates an answer grounded in the retrieved context.",
      "The command bar needed to feel instant, so I run a small transformer (MiniLM-L6-v2, about 23MB) entirely in the browser via Transformers.js. It runs in a web worker so it doesn't block the UI. You get sub-100ms fuzzy matching on supplement names without any server round-trips—type 'mag' and it knows you mean magnesium.",
    ],
  },
  {
    title: "Panday",
    tagline: "Career navigation for skilled trades apprentices",
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
    summary:
      "A capstone project built in collaboration with ConnectHer to help skilled trades apprentices—particularly women and underrepresented groups—navigate their path to Red Seal certification. Users complete a short onboarding to identify where they are in their apprenticeship, and the app generates a personalized interactive roadmap with curated info about training requirements, eligibility, and common roadblocks.",
    technicalDetails: [
      "The core feature is an AI chat that lets users ask natural language questions about their journey. We built a RAG pipeline that chunks official BC program documentation, embeds it with OpenAI, and stores the vectors in PostgreSQL using pgvector with an HNSW index. Answers are grounded in the actual regulations and include cited sources so users can verify the information.",
      "One interesting problem: we needed Redis for caching but deployed to Vercel, which is serverless. The standard Redis client uses TCP, but Upstash (serverless Redis) only exposes HTTP. Rather than rewrite all our caching code, I built a TCP-to-HTTP proxy in Go that intercepts Redis protocol commands and translates them to Upstash REST calls. The app thinks it's talking to Redis, but it's actually going through my proxy.",
      "We cut OpenAI API costs by about 80% with a simple caching layer. Most users ask similar questions, so we cache both the query embeddings and the generated responses with a 5-minute TTL. Cache hits skip the expensive API calls entirely.",
      "The interactive roadmap is built with React Flow. Users see their full apprenticeship journey as a node graph, with their current stage highlighted. The tricky part was collision detection for node positioning—the naive O(n²) approach was too slow with 100+ nodes. I switched to grid-based spatial partitioning, which brought it down to O(n) by only checking nodes in adjacent grid cells.",
      "Leading a team of 8 (5 developers, 3 designers) was the hardest part. It wasn't the code—it was learning how to split up work effectively, give useful feedback in code reviews, and make sure everyone understood how the pieces fit together. We ended up with 515 passing tests across 26 files.",
    ],
  },
  {
    title: "Dayflow",
    tagline: "Local-first AI planner with 0ms perceived latency",
    url: "https://github.com/nikitalobanov12/dayflow",
    liveUrl: "https://dayflow.ca",
    techStack: ["React 19", "Tauri 2.0", "Supabase", "SQLite", "Stripe"],
    images: [],
    summary:
      "I was frustrated with every task app I tried—I wanted to type 'finish the report by Friday' and have it show up on my calendar automatically. So I built a desktop app that does exactly that, and it grew to over 300 active users.",
    technicalDetails: [
      "The app feels instant because of aggressive optimistic updates. When you create a task, the UI updates immediately while the sync happens in the background. I use React 19's useOptimistic hook for this—if the server request fails, the UI automatically rolls back to the previous state. This gives you 0ms perceived latency even on slow connections.",
      "The AI scheduling uses Gemini 1.5 Flash via Supabase Edge Functions. When you type something like 'finish the report by Friday', it parses the natural language into structured task data—inferring priority, time estimates, and categories based on your existing tasks. It's timezone-aware and handles DST correctly.",
      "I built it with Tauri 2.0, which lets you write a React frontend that compiles to native binaries for Windows, macOS, and Linux. The Rust backend handles platform-specific stuff like native window controls, system tray integration, and local notifications for reminders.",
      "The caching layer uses a bounded LRU cache (25-50MB depending on available memory) with hit counting for eviction decisions. Hot data stays in memory, warm data goes to SQLite, cold data lives only in Supabase.",
      "Monetization is through Stripe subscriptions. The Edge Functions handle 7+ webhook event types for the full subscription lifecycle—creation, renewal, cancellation, payment failures, etc.",
    ],
  },
  {
    title: "Circles",
    tagline: "Real-time social platform for friend groups",
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
    summary:
      "A private social app for friend groups—something between Instagram and iMessage. You can share photos, chat in real-time, and see where everyone is. No algorithm, no ads, just your actual friends.",
    technicalDetails: [
      "Real-time messaging uses Pusher with a dual-channel architecture. Each user subscribes to their own channel for notifications (new messages, friend requests) plus a channel for each active conversation. This scales well because you only get updates for conversations you're currently viewing.",
      "Messages update optimistically with a state machine: sending → sent → failed. If the server request fails, the message shows a retry button instead of disappearing. Typing indicators use a 2-second debounce on the send side and 3-second auto-expire on display, so they feel responsive without spamming the server.",
      "We reduced API calls by 90% through batching and caching. Instead of fetching online status for each friend individually, we have a single endpoint that returns status for all friends at once. The caching is three layers: Redis for shared data (online status, unread counts), in-memory TTL cache for hot data, and Prisma Accelerate at the query level.",
      "The database schema has 17 models with 40+ indexes. Some interesting patterns: the Follow model is self-referential (users follow users), the Activity model is polymorphic (can reference posts, comments, or likes), and we use composite indexes on common query patterns like 'all posts in a circle, ordered by date'.",
      "Auth is NextAuth v5 with both OAuth (Google) and credentials providers. We auto-generate usernames from email addresses and handle the edge cases around duplicate usernames, email verification, and session management.",
    ],
  },
  {
    title: "H2L Design Studio",
    tagline: "Freelance designer portfolio",
    url: "https://github.com/nikitalobanov12/H2L-Design-Studio",
    liveUrl: "https://h2ldesignstudio.com",
    techStack: ["HTML", "CSS", "JavaScript"],
    images: ["/projects/h2l-1.png"],
    summary:
      "One of my first web projects. A local designer needed a simple portfolio site, and I built it for them. No frameworks, no build tools—just HTML, CSS, and JavaScript files in a folder.",
    technicalDetails: [
      "Looking back at the code now is a good reminder of how far I've come. But it taught me the fundamentals: semantic HTML, CSS layouts before flexbox was everywhere, vanilla JavaScript DOM manipulation. The site still works today and the client is still using it.",
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
