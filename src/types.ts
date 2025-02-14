export type Page = {
  TITLE: string;
  DESCRIPTION: string;
};

export interface Site extends Page {
  AUTHOR: string;
}

export type Link = {
  TEXT: string;
  HREF: string;
  DISABLED?: boolean;
};

export type Links = {
  TEXT: string;
  HREF: string;
  DISABLED?: boolean;
}[];

export type Social = {
  NAME: string;
  ICON: string;
  TEXT: string;
  HREF: string;
};

export type Socials = {
  NAME: string;
  ICON: string;
  TEXT: string;
  HREF: string;
}[];
