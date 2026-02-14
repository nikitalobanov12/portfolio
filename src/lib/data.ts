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
  introduction: `
I'm a Computer Science student at BCIT graduating in April 2026, currently looking for new grad opportunities.

I use arch, btw

Feel free to reach out via email or LinkedIn 
`,
  stack: ["Go", "TypeScript", "Python", "PostgreSQL", "AWS", "Terraform"],
  current_focus: "Building systems that move and process data efficiently",
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
      "Building <a href='https://insurflow.biz' target='_blank' rel='noopener noreferrer' class='underline hover:text-primary transition-colors'>InsurFlow</a>, a SaaS platform that helps American life insurance advisors find and connect with potential clients. I joined as one of the first engineers and own the systems that bring in new leads and keep our deployment process smooth.",
    techStack: [
      "Python",
      "Playwright",
      "Cloudflare Workers",
      "Neon",
      "GitHub Actions",
    ],
    highlights: [
      {
        title: "Automated Lead Collection",
        metric: "40k+ leads gathered",
        description:
          "Built automated data collection systems that find potential insurance clients from public sources. These feed directly into the sales process, giving advisors qualified leads to work with.",
      },
      {
        title: "Faster, Safer Deployments",
        metric: "3 minutes to deploy",
        description:
          "Set up automated testing and deployment pipelines that catch issues before they reach users. What used to take manual coordination now happens automatically in under 3 minutes.",
      },
      {
        title: "Developer Experience",
        metric: "No more 'works on my machine'",
        description:
          "Created isolated test environments for every code change. Developers can test their work in a production-like environment before merging, preventing bugs from reaching users.",
      },
    ],
  },
  {
    title: "Software Engineer",
    company: "Seaspan Corp",
    url: "https://www.seaspancorp.com",
    duration: "May 2024 - Aug 2024",
    description:
      "Seaspan is one of the world's largest shipping companies. I worked in IT building tools that helped the operations team track cargo and manage logistics. Think of it as building software that keeps track of millions of shipping containers moving across oceans.",
    techStack: ["React", "Spring Boot", "Oracle", "PL/SQL", "PostgreSQL"],
    highlights: [
      {
        title: "Automated Paperwork Processing",
        metric: "160+ hours saved monthly",
        description:
          "Shipping generates tons of paperwork. I built a system that automatically reads and processes freight documents—cargo lists, customs forms, delivery receipts—eliminating the need for manual data entry.",
      },
      {
        title: "Speeding Up Slow Queries",
        metric: "4 minutes → 500 milliseconds",
        description:
          "The operations dashboard was painfully slow because it was searching through 50 million shipping records. I restructured how the database stores and searches data, making it nearly instant.",
      },
      {
        title: "Real-Time Operations Dashboard",
        metric: "Tracks 500MB of data daily",
        description:
          "Built a live dashboard that shows the IT team what's happening across all systems—server health, error rates, API performance. It's like a mission control center for the company's technology.",
      },
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Affistash",
    url: "https://affistash.com",
    duration: "March 2023 - April 2024",
    description:
      "Affistash is a platform that connects brands with affiliate marketers—people who promote products and earn commissions on sales. Think of it like a matchmaking service for companies looking to grow through word-of-mouth marketing. I was one of three engineers building this from the ground up.",
    techStack: ["Node.js", "Express", "Redis", "PostgreSQL"],
    highlights: [
      {
        title: "Fair Usage System",
        metric: "99.9% uptime maintained",
        description:
          "Built a system that prevents any single user from overloading the platform. Different users get different limits based on their plan, ensuring everyone gets reliable service even during busy periods.",
      },
      {
        title: "Lightning-Fast Search",
        metric: "Results in under 50 milliseconds",
        description:
          "Created a search system that lets brands quickly find relevant affiliates from a database of over 1,000 companies. Users get instant results as they type, like Google but for finding marketing partners.",
      },
      {
        title: "Smarter Data Processing",
        metric: "22% faster, 30% cheaper",
        description:
          "Rewrote how the system processes large batches of data. Instead of handling tasks one by one, it now does many at once. This cut wait times and reduced server costs significantly.",
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
      "A tool that helps you avoid dangerous supplement combinations and optimize your health regimen",
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
      "Many people take multiple supplements, but some combinations can be dangerous or cancel each other out. Stochi helps you understand how supplements interact, when to take them for best absorption, and ensures you stay within safe dosage limits. It processes information on over 1,000 compounds instantly.",
    technicalDetails: [
      "Built a calculation engine that models how supplements are absorbed and processed by the body. This lets the app predict interactions and optimal timing—for example, knowing that calcium blocks iron absorption, so you shouldn't take them together.",
      "Added safety guardrails that override AI suggestions. Even if the AI thinks a high dose might help, the system enforces FDA safety limits (like maximum 40mg of zinc daily) to prevent harmful recommendations.",
      "Made the app work offline by running the search and AI models directly in the browser. This eliminates server costs for most searches and means users can access their data without an internet connection.",
      "Created a research assistant that answers questions using actual scientific studies. The system searches through embedded medical research from sources like Examine.com to provide evidence-based answers.",
      "Deployed as a modern web app with the frontend on Vercel and the calculation backend on Fly.io, sharing a PostgreSQL database that stores 1,536-dimensional embeddings for semantic search.",
    ],
  },
  {
    title: "Panday",
    tagline:
      "An interactive career planning tool that helps students map out their education path",
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
      "Planning your education and career is overwhelming—there are courses, prerequisites, programs, and job requirements to keep track of. Panday visualizes this as an interactive map where students can see how different paths connect, understand what they need to take next, and get AI-powered guidance based on actual BC program requirements.",
    technicalDetails: [
      "Built a real-time sync system that keeps the interactive map updated as users make changes. This required creating a special bridge to make real-time data work in serverless environments where traditional connections aren't supported.",
      "Created an AI assistant that answers questions about BC education programs using official documentation. Students can ask things like 'What courses do I need for computer science?' and get accurate, sourced answers.",
      "Set up development workflows that let a team of junior developers contribute safely to a large codebase (54,000+ lines). Automated testing catches issues before they reach production—we've had zero production bugs.",
      "Optimized the interactive visualization to handle complex roadmaps with 100+ nodes. The map uses spatial partitioning (like how video games optimize collision detection) to keep interactions smooth and responsive.",
      "Added voice input so students can talk to the app instead of typing. It uses the browser's built-in speech recognition with OpenAI as a backup, handling different audio quality and network conditions gracefully.",
    ],
  },
  {
    title: "Aether",
    tagline: "A smart to-do app that understands natural language",
    url: "https://github.com/nikitalobanov12/aether",
    liveUrl: "https://aethertask.com",
    detailPage: "/projects/aether",
    techStack: ["React 19", "Tauri 2.0", "Supabase", "SQLite", "Stripe"],
    images: [],
    summary:
      "Instead of filling out forms to create a task, you just type what you need to do in plain English. 'Call mom tomorrow at 3pm' or 'Submit the report by Friday end of day'—the app figures out the details automatically. It's a native desktop app for Windows, Mac, and Linux with 300+ users who appreciate not having to think about task management.",
    technicalDetails: [
      "Made the app feel instant. When you add a task, it appears immediately while syncing in the background. If something goes wrong, it rolls back gracefully—you never see loading spinners or error messages.",
      "Taught the app to understand human language. Using Google's Gemini AI, it extracts dates, times, priorities, and categories from whatever you type. It handles timezones, daylight saving changes, and context (knowing that 'next Friday' means different things on different days).",
      "Built as a true desktop app using Tauri, which combines a web frontend with native OS integration. This means native notifications, system tray access, and proper desktop performance—not just a website in a window.",
      "Implemented smart caching that stores frequently used data in memory for instant access, less-used data in a local database, and archives old data to the cloud. The system learns your usage patterns and adjusts automatically.",
      "Added subscription billing with Stripe, handling all the edge cases: renewals, cancellations, failed payments, and grace periods so users never lose access unexpectedly.",
    ],
  },
  {
    title: "Circles",
    tagline:
      "A private space for sharing photos and chatting with your closest friends",
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
      "Social media today is about broadcasting to everyone. Circles is the opposite—it's a private space just for your close friends to share photos and chat. No algorithms deciding what you see, no ads, no influencers. Just your actual friends in a shared photo album that updates in real-time.",
    technicalDetails: [
      "Built real-time messaging that feels instant. When someone sends a photo or message, it appears immediately on everyone's devices. Each person gets their own notification channel plus channels for conversations they're in, so you only receive updates for things you care about.",
      "Made messages feel reliable even on spotty connections. Messages show up instantly on your screen while sending in the background. If sending fails, you see a clear status and can retry. Little touches like typing indicators that don't fire too often keep the experience smooth.",
      "Optimized for performance by reducing server requests 90%. Instead of constantly checking things one by one, the app batches requests and uses smart caching at multiple levels—keeping commonly needed data in memory, using a fast cache for shared data, and querying the database efficiently.",
      "Designed a database structure that handles complex relationships. Users can follow each other, activities can reference different types of content (posts, comments, likes), and everything is indexed for fast queries. The system handles thousands of relationships without slowing down.",
      "Implemented secure authentication with multiple options—Google sign-in for convenience or email/password for privacy. The system auto-generates usernames and handles edge cases like duplicate names gracefully.",
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
