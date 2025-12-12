export const intro = {
  name: "Nikita Lobanov",
  // title: "Full Stack Developer",
  description: "I'm a 21 year old full stack developer from Vancouver, BC.",
};

export const projects = [
  {
    title: "Panday",
    url: "https://www.github.com/panday-team/panday",
    liveUrl: "https://panday.app",
    description:
      "AI-powered career roadmap platform for skilled trades. Led a team of 8 for my capstone project - we built a RAG system that turns confusing government regulations into visual, interactive career paths.",
    techStack: ["Next.js 15", "Go", "PostgreSQL", "pgvector", "Redis"],
    images: ["/projects/panday-1.png", "/projects/panday-2.png"],
    details: [
      "This was my capstone project and my first time leading a team of 8 people (5 devs, 3 designers). The hardest part wasn't the code - it was learning how to delegate, run code reviews, and keep everyone aligned on the architecture.",
      "The most interesting technical rabbit hole was building the RAG pipeline. We used pgvector for semantic search and I spent way too many hours tuning HNSW index parameters (m=16, ef_construction=64) to get sub-second queries on 1536-dimensional embeddings.",
      "I wrote a Redis proxy in Go because Vercel's serverless environment uses HTTP-based Redis (Upstash) but our local Docker setup needed TCP. It was my first real Go project and I learned a lot about how Redis protocol actually works under the hood.",
      "The graph visualization was a fun challenge - React Flow for rendering, but I built a custom D3-force physics engine to auto-layout the nodes. Had to optimize collision detection from O(n²) to O(n) using spatial partitioning because it was destroying performance with 100+ nodes.",
      "Ended up with 515 tests because I was paranoid about the RAG pipeline breaking. Mocking LLM responses in tests taught me a lot about designing testable AI systems.",
    ],
  },
  {
    title: "Writeshare",
    url: "https://github.com/nikitalobanov12/writeshare",
    liveUrl: "https://writeshare.nikitalobanov.com",
    description:
      "Real-time collaborative markdown editor. Built this to finally understand how WebSockets work and to learn Docker + AWS deployment.",
    techStack: ["React", "Node.js", "WebSockets", "AWS", "Docker"],
    images: ["/projects/writeshare-1.png"],
    details: [
      "I built this because I wanted to understand how Google Docs-style real-time collaboration actually works. Turns out WebSockets are simpler than I thought, but handling conflicts when two people edit the same line is surprisingly tricky.",
      "This was my first time containerizing an app with Docker and deploying to AWS. Spent a weekend just figuring out EC2, security groups, and why my app wasn't accessible from the internet (forgot to open the port, classic).",
      "The markdown preview was fun - used a library for parsing but had to figure out how to sync the scroll position between the editor and preview panes.",
    ],
  },
  {
    title: "Dayflow",
    url: "https://github.com/nikitalobanov12/dayflow",
    liveUrl: "https://dayflow.ca",
    description:
      "Local-first AI task planner that grew to 300+ users. I built this because I was frustrated with existing planners - I wanted AI to actually schedule my tasks, not just list them.",
    techStack: ["React 19", "Tauri 2.0", "Supabase", "SQLite"],
    images: ["/projects/dayflow-1.png", "/projects/dayflow-2.png"],
    details: [
      "Started this because every task app I tried felt dumb - I wanted to type 'finish the report by Friday' and have it actually appear on my calendar. So I integrated Gemini AI for natural language parsing and it's genuinely useful now.",
      "The 'local-first' architecture was a rabbit hole. I wanted the app to work offline, so I used SQLite locally and sync to Supabase. Implementing last-write-wins conflict resolution taught me why CRDTs exist (and why they're complex).",
      "Built it with Tauri 2.0 so it runs as a native app on Windows, Mac, and Linux from the same codebase. The platform abstraction layer was interesting - had to handle things like window controls that only exist on desktop.",
      "Learned about optimistic UI the hard way. Users expect instant feedback, so I implemented React 19's useOptimistic hook - updates appear immediately while the actual database write happens in the background.",
      "Added Stripe subscriptions with a freemium model. The webhook handling was educational - you have to handle like 7 different event types and they can arrive out of order. Idempotency keys became my friend.",
      "The Google Calendar OAuth flow was painful. Had to do server-side token exchange via Supabase Edge Functions because you can't expose client secrets in a desktop app. Token refresh logic is surprisingly annoying to get right.",
    ],
  },
  {
    title: "Circles",
    url: "https://github.com/nikitalobanov12/circle",
    liveUrl: "https://circles.nikitalobanov.com",
    description:
      "A 'social cloud drive' for friend groups - combines photo sharing, group chat, and live location. Built this with two friends as a school project.",
    techStack: ["Next.js", "Prisma", "PostgreSQL", "S3"],
    images: ["/projects/circles-1.png", "/projects/circles-2.png"],
    details: [
      "We wanted something between Instagram and Google Drive - a private space where friend groups could share photos, chat, and see each other's locations. No algorithms, no ads, just your actual friends.",
      "First time working with S3 for file storage. Learned about presigned URLs, multipart uploads for large files, and why you should never put user uploads in your main bucket.",
      "The real-time chat was my first WebSocket implementation. Had to figure out how to handle users going offline, message ordering, and typing indicators.",
      "We started from a Figma design and I turned it into a component library with consistent spacing/typography tokens. Made it way easier to build new features without things looking inconsistent.",
    ],
  },
  {
    title: "H2L Design Studio",
    url: "https://github.com/nikitalobanov12/H2L-Design-Studio",
    liveUrl: "https://h2ldesignstudio.com",
    description:
      "Portfolio website for a local freelance designer. One of my first real web projects - learned the basics here.",
    techStack: ["HTML", "CSS", "JavaScript"],
    images: ["/projects/h2l-1.png"],
    details: [
      "This was one of my first web dev projects, built for a local designer who needed a portfolio site. Nothing fancy - just HTML, CSS, and vanilla JS.",
      "Looking back at this code is humbling. No frameworks, no build tools, just files in a folder. But it taught me the fundamentals and it still works!",
    ],
  },
];

export const experience = [
  {
    title: "Software Engineer Intern",
    company: "Seaspan Corp",
    url: "https://www.seaspancorp.com",
    description:
      "Worked on internal tooling for company that manages cargo ships, more info on LinkedIn if interested",
  },
  // Add more experiences as needed
];

export const contacts = {
  github: "https://github.com/nikitalobanov12",
  linkedin: "https://linkedin.com/in/nikitalobanov",
  email: "nikita@nikitalobanov.com",
};
