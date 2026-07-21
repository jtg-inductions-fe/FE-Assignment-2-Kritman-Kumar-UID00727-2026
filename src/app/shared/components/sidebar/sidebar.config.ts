import { SidebarConfig, SidebarControlIcon } from '@shared/models/sidebar.model';

export const sidebarLinks: SidebarConfig = {
  navigation: [
    {
      id: crypto.randomUUID(),
      label: 'overview',
      icon: 'pie_chart',
      route: '/dashboard',
    },

    {
      id: crypto.randomUUID(),
      label: 'Restaurants',
      icon: 'restaurant',
      route: '/restaurant',
    },

    {
      id: crypto.randomUUID(),
      label: 'message',
      icon: 'move_to_inbox',
      badge: 1,
      route: '/message',
    },

    {
      id: crypto.randomUUID(),
      label: 'Access',
      icon: 'lock',
      children: [
        {
          id: crypto.randomUUID(),
          label: 'login',
          icon: 'login',
          route: '/login',
        },
        {
          id: crypto.randomUUID(),
          label: 'register',
          icon: 'person_add',
          route: '/register',
        },
      ],
    },
  ],
  account: [
    {
      id: crypto.randomUUID(),
      label: 'My Profile',
      icon: 'assignment',
      route: '/profile',
    },
    {
      id: crypto.randomUUID(),
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

export const sidebarControlIcons: SidebarControlIcon[] = [
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
