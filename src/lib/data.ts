export const intro = {
  name: "Nikita Lobanov",
  description:
    "I'm a 21 year old full stack developer from Vancouver, BC.\nI like Linux, terminal tools, vim keybinds on apps, and backend development",
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
    techStack: ["React 19", "Tauri 2.0", "Supabase", "SQLite"],
    images: ["/projects/dayflow-1.png", "/projects/dayflow-2.png"],
    details: [
      "I was frustrated with every task app I tried. I wanted to type something like 'finish the report by Friday' and have it show up on my calendar automatically. So I connected Gemini AI to parse natural language into actual scheduled tasks. It works really well now and I use it every day.",
      "The app works offline because it stores everything in a local SQLite database. When you're back online, it syncs to Supabase in the cloud. Figuring out what to do when the same task gets edited in both places was hard. I ended up using a simple 'last edit wins' approach, but now I understand why some apps use fancier solutions.",
      "I built it with Tauri so it runs as a native app on Windows, Mac, and Linux from one codebase. Each platform has little differences (like where the window close button goes), so I had to write some code to handle each one.",
      "I learned about 'optimistic UI' the hard way. Users expect things to happen instantly when they click. So now when you create a task, it shows up right away, and the actual save to the database happens in the background using React 19's useOptimistic hook.",
      "I added Stripe for payments with a free tier and paid tier. Handling payment webhooks was more complex than I expected. Stripe sends you events when things happen (payment succeeded, subscription cancelled, etc.) and they can arrive out of order. You have to handle like 7 different event types and make sure you don't process the same one twice.",
      "Connecting to Google Calendar was painful. You need to do some of the login steps on a server because you can't put secret keys in a desktop app that users download. So I set up Supabase Edge Functions to handle the secure parts. Getting the access tokens to refresh properly took a while to figure out.",
    ],
  },
  {
    title: "Circles",
    url: "https://github.com/nikitalobanov12/circle",
    liveUrl: "https://circles.nikitalobanov.com",
    description:
      "A private social app for friend groups with photo sharing, group chat, and live location. I built this with two friends as a school project.",
    techStack: ["Next.js", "Prisma", "PostgreSQL", "S3"],
    images: ["/projects/circles-1.png", "/projects/circles-2.png"],
    details: [
      "We wanted something between Instagram and Google Drive. A private space where you and your friends can share photos, chat, and see where everyone is. No algorithm trying to show you ads, just your actual friends.",
      "This was my first time using Amazon S3 for file storage. I learned about presigned URLs (so users can upload directly to S3), multipart uploads for big files, and why you should keep user uploads in a separate bucket from your main app files.",
      "The real-time chat was my first WebSocket project. I had to figure out what happens when someone's internet cuts out, how to make sure messages show up in the right order, and how to show 'typing...' indicators.",
      "We started with designs in Figma and I turned them into reusable React components. Having consistent spacing and font sizes from the start made it way easier to build new features without everything looking messy.",
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
