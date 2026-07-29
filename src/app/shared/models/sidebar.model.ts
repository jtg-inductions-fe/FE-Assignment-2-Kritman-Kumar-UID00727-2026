export interface SidebarNavItem {
  id: string;
  label: string;
  icon: string;
  route?: string;
  badge?: number;
  children?: SidebarNavItem[];
}

export interface SidebarConfig {
  adminNavigation: SidebarNavItem[];
  ownerNavigation: SidebarNavItem[];
  account: SidebarNavItem[];
}

export interface SidebarControlAction {
  name: string;
}
