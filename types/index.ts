// ==========================================
// types/utils.ts
// ==========================================

export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type Maybe<T> = T | null | undefined;

export type Dict<T = unknown> = Record<string, T>;

export type AsyncResult<T, E = Error> = 
  | { success: true; data: T; error?: never }
  | { success: false; data?: never; error: E };

export type SearchParams = { [key: string]: string | string[] | undefined };

// ==========================================
// types/site.ts
// ==========================================

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
  author: {
    name: string;
    url: string;
  };
}

export interface EnvConfig {
  NEXT_PUBLIC_APP_URL: string;
  GOOGLE_SHEETS_API_KEY?: string;
  GOOGLE_SHEETS_ID?: string;
  GOOGLE_SERVICE_ACCOUNT_EMAIL?: string;
  GOOGLE_PRIVATE_KEY?: string;
  NODE_ENV: 'development' | 'production' | 'test';
}

// ==========================================
// types/nav.ts
// ==========================================

import { Icons } from "@/components/icons";

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface MainNavItem extends NavItem {}

export interface SidebarNavItem extends NavItem {
  items?: SidebarNavItem[];
  isCollapsed?: boolean;
}

export interface DocsSidebarConfig {
  sidebar: SidebarNavItem[];
}

export interface MarketingConfig {
  mainNav: MainNavItem[];
}

export interface DashboardConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export type FooterItem = {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
};

// ==========================================
// types/doc.ts
// ==========================================

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

// ==========================================
// types/google-sheets.ts
// ==========================================

export interface GoogleSheetConfig {
  spreadsheetId: string;
  range: string;
  apiKey?: string;
}

// Represents a raw row from Google Sheets API
export type RawSheetRow = string[];

// Represents a row converted to a keyed object
export type SheetRowData = Record<string, string | number | boolean | null>;

// Specific domain model for a project/resource fetched from Sheets
export interface ProjectData {
  id: string;
  name: string;
  description: string;
  status: "active" | "archived" | "beta";
  category: string;
  tags: string[];
  websiteUrl?: string;
  githubUrl?: string;
  updatedAt: string;
}

export interface SheetError {
  code: number;
  message: string;
  status: string;
}

// ==========================================
// types/next.ts (App Router)
// ==========================================

import { Metadata } from "next";

export type GenerateMetadataProps = {
  params: Promise<Record<string, string | string[]>>;
  searchParams: Promise<SearchParams>;
};

export type PageProps = {
  params: Promise<Record<string, string | string[]>>;
  searchParams: Promise<SearchParams>;
};

export type LayoutProps = {
  children: React.ReactNode;
  params: Promise<Record<string, string | string[]>>;
};

export type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

// ==========================================
// types/components.ts
// ==========================================

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export interface CalloutProps {
  type?: "default" | "warning" | "danger" | "info";
  title?: string;
  icon?: string;
  children?: React.ReactNode;
}

export interface CodeBlockProps {
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
  value: string;
}

export interface MdxCardProps {
  href?: string;
  className?: string;
  title: string;
  children: React.ReactNode;
}

export interface DocsPagerProps {
  pager: PagerData;
}

export interface DocsSidebarProps {
  items: SidebarNavItem[];
  pathname: string | null;
}

export interface TableOfContentsProps {
  toc: TocEntry[];
}

// ==========================================
// types/api.ts (Server Layer)
// ==========================================

export interface ApiErrorResponse {
  error: {
    code: string;
    message: string;
    details?: unknown;
  };
}

export interface ApiSuccessResponse<T> {
  data: T;
  meta?: {
    page?: number;
    limit?: number;
    total?: number;
  };
}

export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;

// Search specific
export interface SearchResult {
  id: string;
  title: string;
  content: string;
  url: string;
  type: "doc" | "project" | "blog";
  hierarchy?: {
    lvl0: string | null;
    lvl1: string | null;
    lvl2: string | null;
  };
}

export interface SearchRequest {
  query: string;
  limit?: number;
  filters?: Record<string, string>;
}

// Server Actions
export type ServerActionState<T = unknown> = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Record<string, string[]>;
  data?: T;
};

// Revalidation
export interface RevalidatePayload {
  secret: string;
  path?: string;
  tag?: string;
  type: "page" | "layout";
}