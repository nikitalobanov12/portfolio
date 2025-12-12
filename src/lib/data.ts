export const intro = {
  name: "Nikita Lobanov",
  description:
    "I'm a 21 year old full stack developer from Vancouver, BC \nI mostly build with Typescript or Go \nI like Linux, terminal tools, vim keybinds on apps, and backend development",
};

export const projects = [
  {
    title: "Panday",
    url: "https://www.github.com/panday-team/panday",
    liveUrl: "https://panday.app",
    description:
      "An AI career guidance platform for skilled trades workers. I led a team of 8 people to build this for my capstone project.",
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
    details: [
      "This was my capstone project where I led a team of 8 people (5 developers and 3 designers). The hardest part wasn't writing code. It was learning how to split up work, give good feedback in code reviews, and make sure everyone understood how the system fit together.",
      "The main feature is a RAG (Retrieval Augmented Generation) pipeline that takes confusing government regulations about trade certifications and turns them into simple visual career paths. We stored all the text as vector embeddings in PostgreSQL using pgvector, so when someone asks a question, we can find the most relevant info really fast.",
      "For embeddings, I originally planned to run sentence-transformers on an EC2 server. But after doing the math, I switched to OpenAI's embedding models instead. For our use case, paying per API call was actually cheaper than keeping an EC2 instance running 24/7 with a model loaded in memory. We still use Python scripts to generate and update the embeddings in batch.",
      "I spent a lot of time tuning the vector search settings to get it working quickly. With 1536-dimensional embeddings (that's how OpenAI represents text), I had to pick the right index parameters so searches would finish in under a second.",
      "I also wrote a Redis proxy in Go. This was my first real Go project. We needed it because Vercel (where we deployed) uses a special HTTP-based Redis, but our local Docker setup uses regular TCP Redis. The proxy translates between them so our code works the same in both places.",
      "The career paths show up as interactive graphs. I used React Flow to draw them, but I wrote my own layout algorithm using physics simulation. When you have 100+ nodes, you need to be smart about how you check for collisions or it gets really slow.",
      "Since we had non-technical designers on the team, I set up Husky for git hooks. I configured it to give helpful guidance when someone runs into merge conflicts or tries to push broken code. It would show them step by step instructions on how to fix common git issues. This saved a lot of time because I wasn't constantly helping people resolve conflicts.",
      "I also wrote detailed documentation for everything because of the mixed technical levels on the team. This actually helped us move faster, not slower. New team members could get up to speed quickly, and we didn't have to repeat explanations in meetings.",
      "We ended up with 515 automated tests. I was worried about the AI parts breaking in weird ways, so I learned how to mock LLM responses in tests. It taught me a lot about how to build AI features that you can actually test reliably.",
    ],
  },
  {
    title: "Dayflow",
    url: "https://github.com/nikitalobanov12/dayflow",
    liveUrl: "https://dayflow.ca",
    description:
      "A desktop task planner with AI that actually schedules your tasks for you. It grew to over 300 users.",
    techStack: ["React 19", "Tauri 2.0", "Supabase", "SQLite", "Stripe"],
    images: [],
    details: [
      "I was frustrated with every task app I tried. I wanted to type something like 'finish the report by Friday' and have it show up on my calendar automatically. So I connected Gemini AI to parse natural language into actual scheduled tasks. It works really well now and I use it every day.",
      "The app works offline because it stores everything in a local SQLite database. When you're back online, it syncs to Supabase in the cloud. Figuring out what to do when the same task gets edited in both places was hard. I ended up using a simple 'last edit wins' approach, but now I understand why some apps use fancier solutions.",
      "I built it with Tauri so it runs as a native app on Windows, Mac, and Linux from one codebase. Each platform has little differences (like where the window close button goes), so I had to write some code to handle each one.",
      "I learned about 'optimistic UI' the hard way. Users expect things to happen instantly when they click. So now when you create a task, it shows up right away, and the actual save to the database happens in the background using React 19's useOptimistic hook.",
      "The React frontend got complicated and started feeling sluggish. I had to learn about useMemo and useCallback to stop unnecessary re-renders. It was my first real experience with React performance optimization, and it made a huge difference in how responsive the app feels.",
      "I added Stripe for payments with a free tier and paid tier. Handling payment webhooks was more complex than I expected. Stripe sends you events when things happen (payment succeeded, subscription cancelled, etc.) and they can arrive out of order. You have to handle like 7 different event types and make sure you don't process the same one twice. This project taught me a lot about billing integration and what it actually takes to launch an app that people pay for.",
      "Connecting to Google Calendar and Google Tasks was painful. You need to do some of the login steps on a server because you can't put secret keys in a desktop app that users download. So I set up Supabase Edge Functions to handle the secure parts. Getting the access tokens to refresh properly took a while to figure out.",
      "The worst part was Google's verification process. To use Calendar and Tasks scopes in a public app, you have to submit your app for review. That meant recording a video walkthrough showing exactly how the app uses Google data, writing up privacy policies, and waiting weeks for approval. It was tedious but necessary to launch publicly.",
    ],
  },
  {
    title: "Circles",
    url: "https://github.com/nikitalobanov12/circle",
    liveUrl: "https://circles.nikitalobanov.com",
    description:
      "A private social app for friend groups with photo sharing, group chat, and live location. I built this with two friends as a school project.",
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
    details: [
      "We wanted something between Instagram and Google Drive. A private space where you and your friends can share photos, chat, and see where everyone is. No algorithm trying to show you ads, just your actual friends.",
      "The database has 17 Prisma models with over 50 relationships between them. The trickiest part was the Follow system, which is self-referential (users follow other users). I also built a polymorphic Activity model that handles different notification types like likes, comments, follows, and circle invites all in one table.",
      "I added 40+ database indexes after noticing slow queries. I learned to look at which columns get filtered, sorted, or joined frequently. Composite indexes for things like 'find all public albums in this circle' made a big difference.",
      "Real-time chat uses Pusher with two channel types. Conversation channels handle messages, typing indicators, and read receipts for people actively chatting. User channels send notifications anywhere in the app, like unread message badges. This dual-channel setup means you get notified even if you're not in the chat.",
      "Messages show up instantly using optimistic updates. When you hit send, the message appears right away with a 'sending' spinner. If the server confirms, it switches to a checkmark. If it fails, you see a retry button. I used a state machine pattern (sending, sent, failed) to keep track of each message.",
      "Typing indicators have a 2-second debounce on the sender side and a 3-second auto-expire on the receiver side. The auto-expire is a safety net in case the 'stopped typing' event gets lost.",
      "Photos upload to Cloudinary using their stream API. I built a batch uploader that shows individual progress for each photo. When you remove a photo from the queue, I call URL.revokeObjectURL to clean up the memory from the preview thumbnails.",
      "Authentication supports both Google OAuth and regular email/password through NextAuth v5. When someone signs up with Google, the app automatically generates a unique username from their email. If 'john' is taken, it tries 'john1', 'john2', and so on.",
      "There's a guest mode that lets people browse public circles and albums without signing up. When they try to do something that needs an account, like liking a photo, a modal pops up with context like 'Sign up to like photos'.",
      "Caching happens at three layers. Redis stores things like user profiles for an hour. There's also an in-memory TTL cache on the client for really hot data. And Prisma Accelerate handles connection pooling and edge caching. If Redis fails, the app falls back to direct database queries instead of crashing.",
      "The registration flow is a 7-step wizard. Each step validates in real-time. Email and username fields check availability with a 500ms debounce so we're not hammering the API on every keystroke. Password requirements show green checkmarks as you meet them.",
    ],
  },
  {
    title: "H2L Design Studio",
    url: "https://github.com/nikitalobanov12/H2L-Design-Studio",
    liveUrl: "https://h2ldesignstudio.com",
    description:
      "A portfolio website for a local freelance designer. This was one of my first real web projects where I learned the basics.",
    techStack: ["HTML", "CSS", "JavaScript"],
    images: ["/projects/h2l-1.png"],
    details: [
      "This was one of my first web projects. A local designer needed a simple portfolio site to show their work, and I built it for them.",
      "Looking back at the code now is a good reminder of how far I've come. No frameworks, no build tools, just HTML, CSS, and plain JavaScript files in a folder. But it taught me the basics and the site still works today.",
    ],
  },
];

export const experience = [
  {
    title: "Software Engineer Intern",
    company: "Seaspan Corp",
    url: "https://www.seaspancorp.com",
    description:
      "Worked on internal tools for a company that manages cargo ships. More details on LinkedIn.",
  },
];

export const contacts = {
  github: "https://github.com/nikitalobanov12",
  linkedin: "https://linkedin.com/in/nikitalobanov",
  email: "nikita@nikitalobanov.com",
};
