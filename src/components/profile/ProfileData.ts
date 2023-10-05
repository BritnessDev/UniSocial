import { EnvelopeIcon, GlobeAltIcon, MapPinIcon, PhoneIcon, UserIcon } from '@heroicons/react/24/outline'
import Link from '../../assets/icons/Link'
import Facebook from '../../assets/img/icons/facebook.svg'
import Google from '../../assets/img/icons/pGoogle.svg'
import Twitter from '../../assets/img/icons/twitter.svg'
import Img from '../../assets/img/PostImg.png'
import Avatar from '../../assets/img/profile-avatar.png'
export const ProfileDetailData = [
  { name: 'EMAIL', data: 'john@dashly.com', icon: EnvelopeIcon },
  { name: 'PHONE NUMBER', data: '+1 (256) 980 1120', icon: PhoneIcon },
  { name: 'LOCATION', data: 'Los Angeles, CA', icon: MapPinIcon },
  { name: 'WEBSITE', data: 'dashly.com', icon: GlobeAltIcon },
]

export const CategoryData = [
  { icon: UserIcon, title: 'Biography' },
  { icon: Link, title: 'Social Feed' },
]

export const ProfileTagsData = [
  'Webflow Development',
  'Branding Design',
  'Web Design',
  'Product Design',
  'No Code',
  'UI/UX Design',
]

export const ExperienceData = [
  {
    icon: Google,
    company: 'Google',
    location: 'Mountain View, CA',
    period: 'Mar 2022 - Present',
    content:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
  {
    icon: Facebook,
    company: 'Facebook',
    location: 'Palo Alto, CA',
    period: 'Apr 2016 - Mar 2022',
    content:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
  {
    icon: Twitter,
    company: 'Twitter',
    location: 'New York, NY',
    period: 'Jun 2012 - Apr 2016',
    content:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
]

export const SocialFeedData = [
  {
    avatar: Avatar,
    name: 'Anthony B',
    past_time: '1 hr',
    content:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    img: Img,
    msgCnt: 50,
    recommend: 12,
  },
  {
    avatar: Avatar,
    name: 'Anthony B',
    past_time: '1 hr',
    content:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    msgCnt: 50,
    recommend: 12,
  },
]
