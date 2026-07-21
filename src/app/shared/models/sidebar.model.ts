export interface SidebarItem {
  id: string | number;
  label: string;
  icon: string;
  route?: string;
  badge?: number;
  children?: SidebarItem[];
}

export interface SidebarConfig {
  navigation: SidebarItem[];
  account: SidebarItem[];
}

export interface SidebarControlIcon {
  name: string;
}
