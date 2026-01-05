// types/doc.ts

export type DocVersion = "v1" | "v2" | "latest";

export interface BreadcrumbItem {
  title: string;
  href: string;
  active?: boolean;
}

export interface DocHeaderItem {
  title: string;
  description: string;
}

export interface DocContent {
  title: string;
  description: string;
  points: string[];
  code?: string;
} 

export interface PagerItem {
  title: string;
  href: string;
}

export interface PageData {
  
  prev: PagerItem | null;
  next: PagerItem | null;
}