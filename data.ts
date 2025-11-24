
import { AppData } from './types';

export const portfolioData: AppData = {
  profile: {
    name: "Alex Morgan",
    title: "Senior Full Stack Developer",
    bio: "I craft digital experiences with a focus on motion, aesthetic, and performance. With over 5 years of experience in the industry, I bridge the gap between design and engineering.",
    avatar: "https://picsum.photos/400/400",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "alex@example.com"
    },
    stats: {
      yearsExperience: 5,
      projectsCompleted: 42,
      happyClients: 30
    }
  },
  skills: [
    { name: "React / Next.js", level: 95, icon: "React" },
    { name: "TypeScript", level: 90, icon: "Code" },
    { name: "Tailwind CSS", level: 98, icon: "Palette" },
    { name: "Node.js", level: 85, icon: "Server" },
    { name: "UI/UX Design", level: 80, icon: "Figma" },
    { name: "Cloud Architecture", level: 75, icon: "Cloud" },
  ],
  projects: [
    {
      id: 1,
      title: "FinTech Dashboard",
      description: "A comprehensive financial analytics platform providing real-time data visualization and asset management tools.",
      image: "https://picsum.photos/600/400?random=1",
      tags: ["React", "D3.js", "TypeScript"],
      link: "#",
      role: "Lead Frontend Engineer",
      timeline: "Jan 2023 - Jun 2023",
      client: "Nova Finance",
      longDescription: "This project involved creating a high-performance dashboard for financial analysts. The main challenge was handling high-frequency data updates via WebSockets while maintaining 60fps animations on charts. We implemented a custom data layer using RxJS and optimized React re-renders to ensure a buttery smooth experience.",
      features: [
        "Real-time stock tickers with WebSocket integration",
        "Custom interactive charts built with D3.js",
        "Dark/Light mode with theme persistence",
        "Exportable PDF reports for portfolio performance"
      ],
      gallery: [
        "https://picsum.photos/800/500?random=11",
        "https://picsum.photos/800/500?random=12",
        "https://picsum.photos/800/500?random=13"
      ]
    },
    {
      id: 2,
      title: "E-Commerce Mobile App",
      description: "A cross-platform shopping experience with AR product preview features and seamless checkout integration.",
      image: "https://picsum.photos/600/400?random=2",
      tags: ["React Native", "Redux", "Node.js"],
      link: "#",
      role: "Full Stack Developer",
      timeline: "Aug 2022 - Dec 2022",
      client: "StyleHive",
      longDescription: "StyleHive wanted to bridge the gap between physical and digital shopping. I developed a React Native application that allows users to visualize furniture in their home using ARKit/ARCore. The backend was built on Node.js with a microservices architecture to handle high traffic during flash sales.",
      features: [
        "Augmented Reality product preview",
        "One-click checkout with Apple Pay/Google Pay",
        "Personalized recommendation engine",
        "Offline mode for browsing without internet"
      ],
      gallery: [
        "https://picsum.photos/800/500?random=21",
        "https://picsum.photos/800/500?random=22"
      ]
    },
    {
      id: 3,
      title: "AI Content Generator",
      description: "SaaS platform leveraging LLMs to help marketers generate blog posts and social media content instantly.",
      image: "https://picsum.photos/600/400?random=3",
      tags: ["Next.js", "OpenAI API", "Tailwind"],
      link: "#",
      role: "Solo Founder & Developer",
      timeline: "Mar 2023 - Present",
      client: "Internal Tool",
      longDescription: "Built as a tool to streamline content creation, this SaaS platform integrates directly with OpenAI's GPT-4. It features a prompt engineering layer that abstracts complexity for non-technical users, allowing them to generate SEO-optimized blog posts in seconds.",
      features: [
        "Streamed responses for instant feedback",
        "Rich text editor with markdown support",
        "Team collaboration spaces",
        "Usage analytics and quota management"
      ],
      gallery: [
        "https://picsum.photos/800/500?random=31",
        "https://picsum.photos/800/500?random=32",
        "https://picsum.photos/800/500?random=33"
      ]
    },
    {
      id: 4,
      title: "Smart Home Hub",
      description: "IoT interface for managing smart home devices with voice control capabilities.",
      image: "https://picsum.photos/600/400?random=4",
      tags: ["Vue.js", "Firebase", "IoT"],
      link: "#",
      role: "UI Designer & Developer",
      timeline: "Sep 2021 - Feb 2022",
      client: "HomeSync",
      longDescription: "A unified interface for controlling various smart home protocols (Zigbee, Z-Wave, Wi-Fi). The project focused heavily on accessibility and ease of use for elderly users. We implemented large touch targets, high contrast modes, and voice command integration.",
      features: [
        "Voice control integration via Web Speech API",
        "Automated routine scheduler",
        "Energy consumption monitoring dashboard",
        "Local network control for privacy"
      ],
      gallery: [
        "https://picsum.photos/800/500?random=41",
        "https://picsum.photos/800/500?random=42"
      ]
    }
  ]
};
