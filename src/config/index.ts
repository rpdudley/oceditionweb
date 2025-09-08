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
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/ryan-dudley-08753b24b/" },
    { text: "Github", href: "https://github.com/rpdudley" },
    { text: "Youtube", href: "https://www.youtube.com/@Ocedition" },
  ],
  socialImage: "/zen-og.png",
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
      name: "TBD",
      summary: "TBD",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
    {
      name: "TBD",
      summary: "TBD",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
    {
      name: "TBD",
      summary: "TBD",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
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
