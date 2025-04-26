import type { LucideIcon } from "lucide-react"

export interface SubMenuItem {
  title: string;
  href: string;
}

export interface MenuItem {
  title: string;
  icon: string;
  href?: string;
  subItems?: SubMenuItem[];
}

export interface SidebarProps {
  items: MenuItem[];
}

