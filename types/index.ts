export interface NavItem {
  title: string;
  icon?: string;
  external?: boolean;
}

export interface NavItemWithChildren extends NavItem {
  href: string;
  items: NavItemWithChildren[];
}

export interface ModuleNavItem extends NavItem {
  href: string;
  src: string;
  description: string;
}

export type FooterItem = {
  title: string;
  items: NavItem[];
};
