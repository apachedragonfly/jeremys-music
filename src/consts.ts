import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Jeremy Craig Saunders",
  EMAIL: "",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Nano is a minimal and lightweight blog and portfolio.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "twitter-x",
    HREF: "https://x.com/JeremyOnX"
  },
  { 
    NAME: "instagram",
    HREF: "https://instagram.com/jeremyspictures"
  },
  { 
    NAME: "tiktok",
    HREF: "https://tiktok.com/@jeremystoks"
  },
  { 
    NAME: "spotify",
    HREF: "https://open.spotify.com/artist/6LgLJCfIgQ5VDL8J9F1sfv?si=drTkTADhQNeUb5cf2hii1A"
  },
  { 
    NAME: "music",
    HREF: "https://music.apple.com/ca/artist/jeremy-craig-saunders/1715078505"
  },
];
