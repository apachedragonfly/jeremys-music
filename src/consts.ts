import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Jeremy Craig Saunders",
  EMAIL: "",
  NUM_POSTS_ON_HOMEPAGE: 6,
  NUM_PROJECTS_ON_HOMEPAGE: 2,
  NUM_WORKS_ON_HOMEPAGE: 2,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "A collection of my thoughts, projects, and music.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Some thoughts on my life and work.",
};

export const WORK: Metadata = {
  TITLE: "Lyrics",
  DESCRIPTION: "A collection of my lyrics.",
};

export const PROJECTS: Metadata = {
  TITLE: "Music",
  DESCRIPTION: "A collection of my music, with links to streaming platforms.",
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
  { 
    NAME: "youtube",
    HREF: "https://www.youtube.com/@jeremycraigsaunders"
  },
];
