import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Ritesh Kumar Singh",
  initials: "RS",
  url: "https://riteshkumarsing.com",
  location: "Kolkata, India",
  locationLink: "https://www.google.com/maps/place/kolkata",
  description:
    "Full-Stack & DevOps Engineer | Competitive Programmer | Open Source Contributor.",
  summary:
    "I build from scratch. I create interactive web apps using TypeScript, React, Node.js, Go, and PostgreSQL. As a full-stack and DevOps engineer, I focus on **[scalable systems](#projects)**, **[clean code](#projects)**, and **[robust architectures](#projects)** to ship maintainable products that solve complex problems.\n\nWhen I'm not coding, you'll find me solving problems on **[LeetCode](https://leetcode.com/u/neutron420)**, participating in **[hackathons](#hackathons)**, or **[contributing to open source](https://github.com/neutron420)**. I thrive in competitive environments and enjoy pushing my limits.\n\nWon **[3 Hackathons](#hackathons)** & **[2x Finalist](#hackathons)**.",
  avatarUrl: "/download%20(8).png",
  skills: [
    { name: "Go", icon: Golang, color: "#00ADD8" },
    { name: "Java", icon: Java, color: "#F89820" },
    { name: "TypeScript", icon: Typescript, color: "#3178C6" },
    { name: "JavaScript", icon: Icons.javascript, color: "#F7DF1E" },
    { name: "C++", icon: Csharp, color: "#00599C" },
    { name: "React", icon: ReactLight, color: "#61DAFB" },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Tailwind CSS", icon: Icons.tailwindcss, color: "#06B6D4" },
    { name: "React Native", icon: ReactLight, color: "#61DAFB" },
    { name: "PWA Builder", icon: Icons.pwa, color: "#5A0FC8" },
    { name: "Vite", icon: Icons.vite, color: "#646CFF" },
    { name: "Framer Motion", icon: Icons.framermotion, color: "#FF008C" },
    { name: "HTML5 & CSS3", icon: Icons.html5, color: "#E34F26" },
    { name: "Node.js", icon: Nodejs, color: "#339933" },
    { name: "Express", icon: Icons.express },
    { name: "Bun", icon: Icons.bun, color: "#F472B6" },
    { name: "PostgreSQL", icon: Postgresql, color: "#4169E1" },
    { name: "Prisma", icon: Icons.prisma },
    { name: "Redis", icon: Icons.redis, color: "#DC382D" },
    { name: "gRPC", icon: Icons.zap, color: "#2DA44E" },
    { name: "Docker", icon: Docker, color: "#2496ED" },
    { name: "Kubernetes", icon: Kubernetes, color: "#326CE5" },
    { name: "Helm", icon: Icons.helm, color: "#0F1689" },
    { name: "AWS", icon: Icons.aws, color: "#FF9900" },
    { name: "Terraform", icon: Icons.terraform, color: "#7B42BC" },
    { name: "ArgoCD", icon: Icons.argocd, color: "#EF7B4D" },
    { name: "Jenkins", icon: Icons.jenkins, color: "#D24939" },
    { name: "Kafka", icon: Icons.kafka },
    { name: "Cloudflare", icon: Icons.cloudflare, color: "#F38020" },
    { name: "Linux", icon: Icons.linux, color: "#FCC624" },
    { name: "Git", icon: Icons.git, color: "#F05032" },
    { name: "GitHub Actions", icon: Icons.githubActions, color: "#2088FF" },
    { name: "Jest", icon: Icons.jest, color: "#C21325" },
    { name: "Cypress", icon: Icons.cypress },
    { name: "Prometheus", icon: Icons.prometheus, color: "#E6522C" },
    { name: "Grafana", icon: Icons.grafana, color: "#F46800" },
    { name: "Bash", icon: Icons.bash, color: "#4EAA25" },
    { name: "Turborepo", icon: Icons.turborepo, color: "#EF4444" },
    { name: "Elasticsearch", icon: Icons.elasticsearch, color: "#005571" },
    { name: "Debezium", icon: Icons.database, color: "#DB3331" },
    { name: "Vercel / Render", icon: Icons.vercel },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "fnaticritesh2004@gmail.com",
    tel: "+919002132340",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/neutron420",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ritesh-singh1/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/RiteshS18572143",
        icon: Icons.x,
        navbar: true,
      },
      LeetCode: {
        name: "LeetCode",
        url: "https://leetcode.com/u/neutron420",
        icon: Icons.leetcode,
        navbar: true,
      },
      Codeforces: {
        name: "Codeforces",
        url: "https://codeforces.com/profile/Coder-04Rit",
        icon: Icons.codeforces,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:fnaticritesh2004@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Zomind.ai",
      href: "https://zomind.ai",
      badges: [],
      location: "Remote",
      title: "Frontend Engineer",
      logoUrl: "/zomind_logo.jpg",
      start: "2026",
      end: "Present",
      description:
        "Building modern, responsive frontend interfaces for Zomind.ai's AI-powered platform using Next.js, TypeScript, Tailwind CSS, and React. Focused on performance optimization, accessibility, and shipping pixel-perfect, production-grade UI components that scale.",
    },
    {
      company: "GirlScript Summer of Code (GSSoC) 2025",
      href: "https://gssoc.girlscript.tech/",
      badges: [],
      location: "Remote",
      title: "Open Source Contributor",
      logoUrl: "/girlscriptsoc_logo (1).jpg",
      start: "2025",
      end: "Present",
      description:
        "Selected as an open source contributor in GSSoC 2025. Merged 30+ PRs across 3 repositories, built end-to-end automation pipelines, and shipped the stack to AWS using Kubernetes for scalable, production-grade deployments.",
    },
  ],
  education: [
    {
      school: "CV Raman Global University",
      href: "https://cgu-odisha.ac.in/",
      degree: "BTech in CSE & Data Science",
      logoUrl: "/download%20(16).jpg",
      logoClassName: "p-2.5 bg-white",
      start: "2023",
      end: "2027",
    },
    {
      school: "Guru Teg Bahadur Public School, Durgapur",
      href: "https://gtbps.edu.in/",
      degree: "Class 11-12",
      logoUrl: "/gtpbs.png",
      logoClassName: "p-2.5 bg-white",
      start: "Class 11",
      end: "Class 12",
    },
    {
      school: "St. Xavier's High School, Durgapur",
      href: "https://www.stxaviersdgp.in/",
      degree: "Class 1-10",
      logoUrl: "/download%20(9).png",
      logoClassName: "p-2.5 bg-white",
      start: "Class 1",
      end: "Class 10",
    },
  ],
  projects: [
    {
      title: "Swaraj Desk",
      href: "https://github.com/neutron420",
      dates: "Project 01",
      active: true,
      description:
        "Grievance management portal for government offices, built for Smart India Hackathon. Backend optimized for 10k+ concurrent requests with Redis caching, real-time WebSocket updates, role-based access control, and automated workload distribution.",
      technologies: [
        "Next.js",
        "Node.js",
        "Bun",
        "PostgreSQL",
        "Prisma",
        "Redis",
        "WebSockets",
        "Docker",
        "Kubernetes",
        "ArgoCD",
        "Tailwind CSS",
        "AWS",
        "GCP",
        "Cloudflare",
      ],
      links: [
        {
          type: "Code",
          href: "https://github.com/neutron420",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "User Panel",
          href: "https://github.com/neutron420",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Admin Panel",
          href: "https://github.com/neutron420",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "RakshaSetu",
      href: "https://github.com/neutron420",
      dates: "Project 02",
      active: true,
      description:
        "Intelligent disaster management & emergency response system with AI triage and real-time SOS reporting. Offline SOS via BLE mesh relay, sub-second geospatial volunteer routing with PostGIS, and Kafka-powered priority alert queues.",
      technologies: [
        "React Native",
        "Expo",
        "Bun",
        "Express",
        "PostgreSQL",
        "PostGIS",
        "Redis",
        "Apache Kafka",
        "TypeScript",
        "WebSockets",
        "Docker",
        "Kubernetes",
        "AWS",
      ],
      links: [
        {
          type: "Code",
          href: "https://github.com/neutron420",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "ShareBite",
      href: "https://github.com/neutron420",
      dates: "Project 03",
      active: true,
      description:
        "Full-stack food rescue platform connecting donors, NGOs, and riders to fight food waste. Mapbox-powered route optimization, Groq AI for automated food validation & donor matching, and a karma-based engagement system to drive consistent donations.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Prisma",
        "PostgreSQL",
        "Redis",
        "WebSockets",
        "Groq",
        "Mapbox",
        "Docker",
        "Terraform",
        "AWS",
      ],
      links: [
        {
          type: "Code",
          href: "https://github.com/neutron420",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Lineo",
      href: "https://github.com/neutron420",
      dates: "Project 04",
      active: true,
      description:
        "Multi-tenant queue & appointment platform for clinics and service centers. High-concurrency Go + Gin backend with Redis and RabbitMQ, secure Razorpay payments with webhook verification, and real-time queue tracking with notifications.",
      technologies: [
        "Next.js",
        "Go",
        "Gin",
        "PostgreSQL",
        "GORM",
        "Redis",
        "RabbitMQ",
        "Razorpay",
        "Google Maps API",
        "Tailwind CSS",
        "TypeScript",
        "Docker",
      ],
      links: [
        {
          type: "Code",
          href: "https://github.com/neutron420",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "APK",
          href: "https://github.com/neutron420",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "API Link",
          href: "https://github.com/neutron420",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "CodeConnect",
      href: "https://github.com/neutron420",
      dates: "Project 05",
      active: true,
      description:
        "High-performance online code compiler with a Rust + Actix Web backend. Multi-language sandboxed execution, real-time output streaming, and blazing-fast compile times secure isolation for every run.",
      technologies: [
        "Rust",
        "TypeScript",
        "Actix Web",
        "React",
        "SQLx",
        "PostgreSQL",
        "Docker",
        "Vercel",
      ],
      links: [
        {
          type: "Code",
          href: "https://github.com/neutron420",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Live",
          href: "https://github.com/neutron420",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "StackAudit",
      href: "https://github.com/neutron420",
      dates: "Project 06",
      active: true,
      description:
        "Local-first Go CLI for backend project audits. Interactive TUI, secrets scanner for hardcoded keys, deep Docker & Kubernetes manifest analysis, and an extensible YAML plugin system runs offline so secrets never leave your machine.",
      technologies: [
        "Go",
        "Docker",
        "Kubernetes",
        "PostgreSQL",
        "Redis",
        "NPM Package",
      ],
      links: [
        {
          type: "Code",
          href: "https://github.com/neutron420",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Live",
          href: "https://github.com/neutron420",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Devix",
      href: "https://github.com/neutron420",
      dates: "Project 07",
      active: true,
      description:
        "Production-grade modular monolith backend in Go for a developer-centric knowledge sharing platform. Clean architecture, GORM-managed schemas, JWT refresh token rotation, Argon2id password hashing, and Cloudflare R2 storage.",
      technologies: [
        "Go",
        "Gin",
        "PostgreSQL",
        "GORM",
        "WebSockets",
        "Cloudflare R2",
        "JWT",
        "ArgoCD",
        "Docker",
        "Kubernetes",
        "AWS",
      ],
      links: [
        {
          type: "Code",
          href: "https://github.com/neutron420",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://cdn.magicui.design/bento-grid.mp4",
    },
  ],
  hackathons: [
    {
      title: "AWS AI for Bharat Semi-Finalist",
      dates: "2025",
      location: "India",
      description:
        "Semi-Finalist at AWS AI for Bharat hackathon. Built innovative AI-powered solutions to solve real-world challenges across India. Leveraged AWS cloud services, machine learning, and generative AI to create impactful applications focused on learning faster and building better.",
      image: "/aws.webp",
      links: [],
    },
    {
      title: "Google Solution Challenge Top 100",
      dates: "2025",
      location: "India",
      description:
        "Secured a Top 100 spot globally in the Google Solution Challenge, a worldwide competition for Google Developer Student Clubs members to solve real-world problems using Google technologies. Built an innovative solution addressing one of the United Nations' 17 Sustainable Development Goals using Google Cloud, Firebase, and AI/ML tools.",
      image: "/download%20(7).png",
      links: [],
    },
    {
      title: "Cardano Hackathon Asia",
      dates: "IBW Edition 2025",
      location: "Bengaluru, India",
      description:
        "Participated in the Cardano Hackathon Asia (IBW Edition 2025) held in Bengaluru, building a decentralized application on the Cardano blockchain. Worked on smart contracts and Web3 integrations to solve real-world problems using blockchain technology.",
      image: "/cardano.jpg",
      links: [],
    },
    {
      title: "Smart India Hackathon",
      dates: "2024",
      location: "IIT ISM Dhanbad, India",
      description:
        "Competed in India's largest national-level hackathon organized by the Government of India, hosted at IIT ISM Dhanbad. Built innovative solutions to real-world problem statements provided by ministries and industries, focusing on impactful tech for societal challenges.",
      image: "/download%20(4).png",
      links: [],
    },
    {
      title: "Hack The Stack",
      dates: "2024",
      location: "Bhubaneswar, India",
      description:
        "Participated in a 36-hour full-stack hackathon focused on building scalable web applications. Designed and shipped a production-ready full-stack project using modern technologies like Next.js, TypeScript, and PostgreSQL.",
      image: "/download%20(3).png",
      links: [],
    },
    {
      title: "Code Relay 4.0",
      dates: "2024",
      location: "Bhubaneswar, India",
      description:
        "Participated in Code Relay 4.0, a coding and development hackathon. Collaborated with a team to build innovative solutions under tight deadlines, demonstrating skills in problem-solving, system design, and rapid prototyping.",
      image: "/coderelay.jpg",
      links: [],
    },
    {
      title: "Hack Odisha 5.0",
      dates: "2024",
      location: "Bhubaneswar, Odisha, India",
      description:
        "Participated in Hack Odisha 5.0, one of Odisha's largest student hackathons held in Bhubaneswar. Built a full-stack project from scratch within 36 hours, focusing on user experience, scalable architecture, and clean code.",
      image: "/download%20(6).png",
      links: [],
    },
  ],
} as const;
