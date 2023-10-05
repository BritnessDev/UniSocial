import MsgAvatar1 from '../../assets/img/messageAvatar1.png'
import MsgAvatar2 from '../../assets/img/messageAvatar2.png'
import MsgAvatar3 from '../../assets/img/messageAvatar3.png'
import MsgAvatar4 from '../../assets/img/messageAvatar4.png'
import MsgAvatar5 from '../../assets/img/messageAvatar5.png'
import MsgFile from '../../assets/img/messageFile.png'
import { EContentType } from './MsgContainer'

const MsgContactData = [
  {
    avatar: MsgAvatar1,
    name: 'Sophie Moore',
    content: 'Hi John! I need your help with...',
    pastTime: '12m',
    status: true,
  },
  {
    avatar: MsgAvatar2,
    name: 'Matt Cannon',
    content: 'Sure, let me know if you need s...',
    pastTime: '32m',
    status: true,
  },
  {
    avatar: MsgAvatar3,
    name: 'Lily Woods',
    content: 'Thanks, I’ll be working on that...',
    pastTime: '1hr',
    status: true,
  },
  {
    avatar: MsgAvatar4,
    name: 'Andy Smith',
    content: 'Do you have any update...',
    pastTime: '2hrs',
    status: false,
  },
  {
    avatar: MsgAvatar5,
    name: 'Rob Stinson',
    content: 'Great! I’ll do that, thank you...',
    pastTime: '4hrs',
    status: false,
  },
  {
    avatar: MsgAvatar1,
    name: 'Sophie Moore',
    content: 'Hi John! I need your help with...',
    pastTime: '6hrs',
    status: true,
  },
]

const MsgHeaderData = {
  avatar: MsgAvatar1,
  name: 'Lily Woods',
  status: true,
}

const MsgListData = [
  {
    avatar: MsgAvatar1,
    msgContentList: [
      {
        content:
          'Hello John! Hope you’re doing well. I need your help with some reports, are your available for a call later today?',
        contentType: EContentType.Text,
      },
      { content: 'Thank you', contentType: EContentType.Text },
    ],
    time: '8:00 AM',
    msgType: false, // 0 received 1 sent
  },
  {
    avatar: MsgAvatar1,
    msgContentList: [
      {
        content:
          'Hello John! Hope you’re doing well. I need your help with some reports, are your available for a call later today?',
        contentType: EContentType.Text,
      },
      { content: 'Thank you', contentType: EContentType.Text },
    ],
    time: '8:00 AM',
    msgType: false, // 0 received 1 sent
  },
  {
    avatar: MsgAvatar2,
    msgContentList: [
      {
        content: 'Hey Sophie! How are you?',
        contentType: EContentType.Text,
      },
      {
        content: 'For sure, I’ll be free after mid-day, let me know what time works for you',
        contentType: EContentType.Text,
      },
    ],
    time: '8:05 AM',
    msgType: true,
  },
  {
    avatar: MsgAvatar1,
    msgContentList: [
      {
        content: 'What about 2:00 PM? Works for you?',
        contentType: EContentType.Text,
      },
    ],
    time: '8:12 AM',
    msgType: false,
  },
  {
    avatar: MsgAvatar2,
    msgContentList: [
      {
        content: MsgFile,
        contentType: EContentType.Image,
      },
    ],
    time: '',
    msgType: true,
  },
  {
    avatar: MsgAvatar1,
    msgContentList: [
      {
        content: 'File name.pdf',
        contentType: EContentType.File,
      },
    ],
    time: '8:12 AM',
    msgType: false,
  },
]

export { MsgContactData, MsgHeaderData, MsgListData }
