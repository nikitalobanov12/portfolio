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
  specialization: "Full Stack Developer",
  stack: ["Go", "TypeScript", "Next.js", "AWS", "Tauri", "Postgres"],
  current_focus: "",
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
      " Joined a founding team of 3 to build and launch a B2B SaaS platform that automates partnerships between brands and affiliate marketers, building a Next.js full stack application integrated with Firebase and a Framer landing page.",
    techStack: ["Node.js", "Firebase"],
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
    tagline: "Supplement tracker that catches interactions and timing issues",
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
      "I got really into health optimization and kept finding contradictory info about supplements online. So I built something that tells me when my stack has issues, like if two things compete for absorption or if I'm taking them in the wrong ratio.",
    technicalDetails: [
      "The app has a Next.js frontend on Vercel and a Go backend on Fly.io. They share a Postgres database. I put the heavy math in Go because doing pharmacokinetic calculations in JavaScript would be way too slow.",
      "The Go part figures out how supplements absorb and clear from your body. Most follow simple exponential decay, but things like Vitamin C and Magnesium saturate at high doses, so I had to use different equations for those. I solve them with the Lambert W function instead of just approximating.",
      "For interactions, I have a graph of how supplements relate to each other. It checks timing conflicts (zinc and iron fight for the same transporter), ratio problems (too much zinc depletes copper), and liver enzyme stuff (some supplements mess with how you metabolize others).",
      "I scraped research from Examine.com, broke it into chunks, and made embeddings with OpenAI. When you ask a question, Llama rewrites it with medical terms, we search for relevant chunks, then Llama writes an answer based on what it found. So you get answers backed by actual research instead of made up stuff.",
      "The search bar runs a small AI model right in your browser using Transformers.js. It's in a web worker so it doesn't freeze anything. You can type 'mag' and it knows you mean magnesium, no server needed.",
    ],
  },
  {
    title: "Panday",
    tagline: "Helps trades apprentices figure out their path to certification",
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
      "Built this for my capstone with ConnectHer, an org that helps women and underrepresented groups in trades. The app helps apprentices understand what they need to do to get their Red Seal. You tell it where you're at, and it shows you a roadmap with all the requirements, training info, and common issues people run into.",
    technicalDetails: [
      "The main thing is an AI chat where you can ask questions about your apprenticeship. We took all the official BC program docs, chunked them up, made embeddings, and stored them in Postgres with pgvector. When you ask something, it finds the relevant parts and gives you an answer with sources you can check.",
      "We had a funny problem where we needed Redis but were on Vercel which is serverless. Normal Redis uses TCP but Upstash only does HTTP. Instead of rewriting everything, I made a proxy in Go that translates between the two. The app thinks it's talking to Redis but it's actually going through my proxy.",
      "We saved about 80% on OpenAI costs just by caching. People ask similar questions, so we cache the embeddings and responses for 5 minutes. If someone asks the same thing, we skip the API call.",
      "The roadmap uses React Flow to show your whole journey as a graph. Getting the nodes to not overlap was tricky. The simple approach checks every node against every other node which gets slow fast. I switched to a grid system where you only check nearby nodes, which made it way faster.",
      "Leading 8 people (5 devs, 3 designers) was honestly harder than the code. Figuring out how to split work, give good PR feedback, and keep everyone on the same page took a lot of learning. We ended up with 515 tests passing which I'm pretty proud of.",
    ],
  },
  {
    title: "Dayflow",
    tagline: "Task planner that feels instant",
    url: "https://github.com/nikitalobanov12/dayflow",
    liveUrl: "https://dayflow.ca",
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
    tagline: "Private social app for friend groups",
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
      "Somewhere between Instagram and iMessage. You can share photos, chat in real-time, and see where your friends are. No algorithm, no ads, just your actual friends.",
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
