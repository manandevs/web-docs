// types/doc.ts

export type DocVersion = "v1" | "v2" | "latest";

export interface DocFrontmatter {
  title: string;
  description?: string;
  date?: string;
  published: boolean;
  authors?: string[];
  image?: string;
  toc?: boolean;
  radix?: boolean; // Example of specific feature flags
}

export interface Doc extends DocFrontmatter {
  _id: string;
  slug: string;
  slugAsParams: string;
  body: {
    raw: string;
    code: string; // MDX compiled code
  };
  readingTime?: {
    text: string;
    minutes: number;
    time: number;
    words: number;
  };
}

export interface TocEntry {
  title: string;
  url: string;
  depth: number;
  items?: TocEntry[];
}

export interface BreadcrumbItem {
  title: string;
  href: string;
  active?: boolean;
}

export interface PagerItem {
  title: string;
  href: string;
}

export interface PagerData {
  prev: PagerItem | null;
  next: PagerItem | null;
}