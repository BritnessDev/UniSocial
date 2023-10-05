import { Link, Play, Search } from '../../../assets/icons/Index'

import Avatar1 from '../../../assets/img/avatar1.png'
import Avatar2 from '../../../assets/img/avatar2.png'
import Avatar3 from '../../../assets/img/avatar3.png'
import PostImg from '../../../assets/img/PostImg.png'
import PostImg1 from '../../../assets/img/PostImg1.png'

const PostCategoryData = [
  { icon: Search, title: 'Search engine' },
  { icon: Link, title: 'Social Media' },
  { icon: Play, title: 'Streaming' },
]

const PostLikeListData = [
  {
    title: 'ConU Study Groups and Tips',
    content: 'Sapien odio condimentum arcu egestas velitolm sed eleifend erat ipsum porttitor vitae vel.',
    avatarList: [Avatar2, Avatar1],
    messageCnt: 16,
  },
  {
    title: 'ConU Study Groups and Tips',
    content: 'Sapien odio condimentum arcu egestas velitolm sed eleifend erat ipsum porttitor vitae vel.',
    avatarList: [Avatar2, Avatar1],
    messageCnt: 16,
  },
  {
    title: 'ConU Study Groups and Tips',
    content: 'Sapien odio condimentum arcu egestas velitolm sed eleifend erat ipsum porttitor vitae vel.',
    avatarList: [Avatar2, Avatar1],
    messageCnt: 16,
  },
  {
    title: 'ConU Study Groups and Tips',
    content: 'Sapien odio condimentum arcu egestas velitolm sed eleifend erat ipsum porttitor vitae vel.',
    avatarList: [Avatar2, Avatar1],
    messageCnt: 16,
  },
]

const PostListData = [
  {
    avatar: Avatar3,
    name: 'Anthony B',
    role: 'Concordia',
    postImg: PostImg,
    subject: 'Marketing',
    title: 'SEO campaign',
    content:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    avatarList: [Avatar2, Avatar1],
    messageCnt: 16,
  },
  {
    avatar: Avatar3,
    name: 'Anthony B',
    role: 'Concordia',
    postImg: PostImg1,
    content:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    avatarList: [Avatar2, Avatar1],
    messageCnt: 16,
  },
  {
    avatar: Avatar3,
    name: 'Anthony B',
    role: 'Concordia',
    content:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    avatarList: [Avatar2, Avatar1],
    messageCnt: 16,
  },
]

export { PostCategoryData, PostLikeListData, PostListData }
