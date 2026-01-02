// types/components.ts

import { PagerData, TocEntry } from "./doc";
import { SidebarNavItem } from "./nav";

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