import { SidebarConfig, SidebarControlAction } from '@shared/models/sidebar.model';
import { APP_ROUTES } from '@shared/constants/routes.constants';

export const sidebarLinks: SidebarConfig = {
  adminNavigation: [
    {
      id: 'overview',
      label: 'overview',
      icon: 'pie_chart',
      route: APP_ROUTES.DASHBOARD,
    },
    {
      id: 'Restaurants',
      label: 'Restaurants',
      icon: 'restaurant',
      route: 'restaurant',
    },
    {
      id: 'message',
      label: 'message',
      icon: 'move_to_inbox',
      badge: 1,
      route: '/message',
    },
    {
      id: 'Access',
      label: 'Access',
      icon: 'lock',
      children: [
        {
          id: 'logout',
          label: 'logout',
          icon: 'logout',
          route: APP_ROUTES.AUTH,
        },
        {
          id: 'register',
          label: 'register',
          icon: 'person_add',
          route: APP_ROUTES.AUTH,
        },
      ],
    },
  ],
  ownerNavigation: [
    {
      id: 'overview',
      label: 'overview',
      icon: 'dashboard',
      route: APP_ROUTES.DASHBOARD,
    },
    {
      id: 'menu',
      label: 'Menu',
      icon: 'restaurant_menu',
      route: 'menu',
    },
    {
      id: 'billing_history',
      label: 'Billing history',
      icon: 'receipt_long',
      children: [
        {
          id: 'invoices',
          label: 'Invoices',
          icon: 'receipt',
          route: 'invoices',
        },
        {
          id: 'payment_methods',
          label: 'Payment Methods',
          icon: 'credit_card',
          route: 'transactions',
        },
      ],
    },
    {
      id: 'inventory',
      label: 'Inventory',
      icon: 'inventory_2',
      children: [
        {
          id: 'stock_levels',
          label: 'Stock Levels',
          icon: 'format_list_bulleted',
          route: 'stock',
        },
        {
          id: 'suppliers',
          label: 'Suppliers',
          icon: 'local_shipping',
          route: 'suppliers',
        },
      ],
    },
    {
      id: 'messages',
      label: 'Messages',
      icon: 'chat_bubble_outline',
      route: 'message',
      badge: 1,
    },
    {
      id: 'access',
      label: 'Access',
      icon: 'lock',
      route: 'access',
    },
  ],
  account: [
    {
      id: 'register',
      label: 'My Profile',
      icon: 'assignment',
      route: '/profile',
    },
    {
      id: 'gallery',
      label: 'gallery',
      icon: 'photo_library',
      route: '/gallery',
    },
    {
      id: 'help',
      label: 'help',
      icon: 'support',
      route: '/help',
    },
  ],
};

export const sidebarControlIcons: SidebarControlAction[] = [
  {
    name: 'tune',
  },
  {
    name: 'public',
  },
  {
    name: 'settings',
  },
];
