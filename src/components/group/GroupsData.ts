import Link from '../../assets/icons/Link'
import Play from '../../assets/icons/Play'
import Avatar1 from '../../assets/img/avatar1.png'
import Avatar2 from '../../assets/img/avatar2.png'
import Avatar3 from '../../assets/img/avatar3.png'
import Avatar4 from '../../assets/img/avatar4.png'
import Broadcast from '../../assets/img/color_broadcast.svg'
import Document from '../../assets/img/color_document.svg'
import ColorLink from '../../assets/img/color_link.svg'
import People from '../../assets/img/color_people.svg'
import GroupImg from '../../assets/img/groupImg.png'

export const GroupCategoryData = [
  { icon: Link, title: 'Social Groups' },
  { icon: Play, title: 'Classes' },
]

export const GroupListData = [
  {
    state: 'edit',
    title: 'ConU Study Groups and Tips',
    content: 'Cursus at aliquet in ut purus etolmerlor venenatis condimentum facilisi.',
    groupImg: GroupImg,
    avatarList: [Avatar1, Avatar2, Avatar3],
    memberCnt: 23,
  },
  {
    state: 'edit',
    title: 'ConU Study Groups and Tips',
    content: 'Cursus at aliquet in ut purus etolmerlor venenatis condimentum facilisi.',
    avatarList: [Avatar1, Avatar2, Avatar3],
    memberCnt: 23,
  },
  {
    icon: Broadcast,
    state: 'progress',
    title: 'Marketing',
    content: 'Cursus at aliquet in ut purus etolmerlor venenatis condimentum facilisi.',
    total: 10,
    completed: 8,
    avatarList: [Avatar1, Avatar2, Avatar3, Avatar4],
  },
  {
    icon: ColorLink,
    state: 'progress',
    title: 'Social Media',
    content: 'Cursus at aliquet in ut purus etolmerlor venenatis condimentum facilisi.',
    total: 5,
    completed: 1,
    avatarList: [Avatar1, Avatar2, Avatar3],
  },
  {
    icon: Document,
    state: 'progress',
    title: 'Social Media',
    content: 'Cursus at aliquet in ut purus etolmerlor venenatis condimentum facilisi.',
    total: 10,
    completed: 3,
    avatarList: [Avatar1, Avatar2],
  },
  {
    icon: People,
    state: 'progress',
    title: 'Customer Service',
    content: 'Cursus at aliquet in ut purus etolmerlor venenatis condimentum facilisi.',
    total: 10,
    completed: 8,
    avatarList: [Avatar1, Avatar2, Avatar3],
  },
]
