// types/nav.ts

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