// types/doc.ts

export type DocVersion = "v1" | "v2" | "latest";

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