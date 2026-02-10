import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Ryan Dudley — Student Developer",
  author: "Ryan Dudley",
  description:
    "Software Engineer based in San Francisco, USA. I specialize in UI design, web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/channel.png",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
    { text: "Notes", href: "#notes" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/ryan-dudley-08753b24b/" },
    { text: "Github", href: "https://github.com/rpdudley" },
    { text: "Youtube", href: "https://www.youtube.com/@Ocedition" },
  ],
  socialImage: "/preview.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Ryan Dudley",
    specialty: "Student Software Developer",
    summary:
      "Developer based in Michigan, USA. Working on Master's degree in Computer Science at Oakland University. ",
    email: "oceditionbuisness@gmail.com",
  },
  experience: [
    {
      company: "New Wave Software",
      position: "Software Engineer Internship",
      startDate: "August 2023",
      endDate: "March 2024",
      summary: [
         "Upgraded 8 .NET APIs to the latest framework, improving performance and security.",
         "Developed & maintained 3 client websites, implementing new features and optimizing UX.",
         "Migrated a TypeScript API to .NET, improving system compatibility and efficiency.",  
         "Implemented unit tests using xUnit and Moq, increasing API reliability.",
      ],
    },
  ],
  projects: [
    {
      name: "Ocedtionapi",
      summary: "Moniters at least 20 stocks. Sends notifications to users when a stock reaches a certain price or percentage change. Built with .NET and C#. Has more added features like a database and runs on virtual machine. The database runs on a debian 13 on in home network.",
      date: "2024 - Present",
      linkPreview: "/",
      linkSource: "https://github.com/rpdudley/OcStockAPI",
    },
    {
      name: "Ocedition Website",
      summary: "A personal portfolio website built with Astro, showcasing projects and experience as well as some notes. Future enchancemnet would be getting some API calls working on it.",
      date: "2025 - Present",
      linkPreview: "/",
      linkSource: "https://ocedtion.com",
    },
    {
      name: "Survey of the Integration of AI in Military Applications",
      summary: "A research paper exploring the current and potential applications of artificial intelligence in military contexts, including ethical considerations and future implications.",
      date: "Fall 2025",
      linkPreview: "/",
      linkSource: "",
    }, 
    {
      name: "Enhanced Encryption Algorithm",
      summary: "Encrypts a message with an enhanced encryption algorithm using 8 different ciphers.",
      date: "Fall 2025",
      linkPreview: "/",
      linkSource: "https://github.com/rpdudley/ProjectCode",
    },
    {
      name: "Iceberg Odyssey Game using pygame",
      summary: "A game where you play as an iceberg and try to avoid getting hit by boats and other objects. The game gets faster and more difficult as you progress.",
      date: "Winter 2025",
      linkPreview: "/",
      linkSource: "https://github.com/rpdudley/iceberg_game",
    },
    {
      name: "Anaylsis of three different unit testing frameworks for C#",
      summary: "A research paper comparing the features, performance, and usability of three popular unit testing frameworks for C#: NUnit, xUnit, and MSTest.",
      date: "Winter 2025",
      linkPreview: "/",
      linkSource: "",
    },
    {
      name:"Pointer anayslsis",
      summary: "A research paper analyzing the use of pointers in C and C++, including their advantages, disadvantages, and best practices for safe usage.",
      date: "Fall 2024",
      linkPreview: "/",
      linkSource: "",
    },
  ],
  about: {
    description: `
      My name is Ryan, I am a student softtware developer working on Master's degree in Computer Science at Oakland University. 
      I have a passion for learning new technologies and building things that people use. I am currently working as a freelance developer and looking for new opportunities.
    `,
    image: "/IMG_3121.png",
  },
};

// #5755ff
