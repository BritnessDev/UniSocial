import { Chat, Home, Star, User } from '../../../assets/icons/Index'
import type { IMenuItem } from '../../../types/layout'

export const NavbarList: IMenuItem[] = [
  {
    current: false,
    name: 'Home',
    CustomIcon: Home,
    childrenlist: [
      {
        name: 'Dashboard',
        href: '/',
      },
    ],
  },
  {
    current: false,
    name: 'Feature',
    CustomIcon: Star,
    childrenlist: [
      {
        name: 'All Features',
        href: '/local-event',
      },
      {
        name: 'Events',
        href: '/local-event',
      },
      {
        name: 'Products',
        href: '/local-product',
      },
      {
        name: 'Deals',
        href: '/local-deal',
      },
      {
        name: 'Groups',
        href: '/group',
      },
    ],
  },
  {
    current: false,
    name: 'Users',
    CustomIcon: User,
    childrenlist: [
      {
        name: 'Friends',
        href: '/users',
      },
      {
        name: 'My Profile',
        href: '/profile',
      },
    ],
  },
  {
    current: false,
    name: 'Messaging',
    CustomIcon: Chat,
    href: '/chat',
  },
]
