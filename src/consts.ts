import type { Site, Page, Links, Socials } from "@types";

// Global
export const SITE: Site = {
  TITLE: "BS",
  DESCRIPTION: "Bob Stoute - Media Programming",
  AUTHOR: "Bob Stoute",
};

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
};

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
};

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
};

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
};

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "About",
    HREF: "/about",
  },
  {
    TEXT: "Contact",
    HREF: "/contact",
  },
  {
    TEXT: "Music",
    HREF: "/music",
  },
  {
    TEXT: "Work",
    HREF: "/work",
    DISABLED: true,
  },
  {
    TEXT: "Blog",
    HREF: "/blog",
    DISABLED: true,
  },
  {
    TEXT: "Projects",
    HREF: "/projects",
    DISABLED: true,
  },
];

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "stoute.bob@gmail.com",
    HREF: "mailto:stoute.bob@gmail.com",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "stoute",
    HREF: "https://github.com/stoute",
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "bob stoute",
    HREF: "https://www.linkedin.com/in/bobstoute/",
  },
  // {
  //   NAME: "Twitter",
  //   ICON: "twitter-x",
  //   TEXT: "markhorn_dev",
  //   HREF: "https://twitter.com/markhorn_dev",
  // },
];
