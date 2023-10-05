import { ChatBubbleOvalLeftEllipsisIcon, HeartIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from '../../assets/icons/Link'
import Detail from '../../assets/img/detail.svg'
import Pencil from '../../assets/img/greyPencil.svg'
import { SocialFeedData } from './ProfileData'

export const SocialFeed: React.FC = () => (
  <div className="flex flex-col gap-9">
    {SocialFeedData.map((item, index) => (
      <div
        key={index}
        className="flex flex-col gap-5 rounded-[24px] border border-themeBorder1 bg-white px-8 py-6 shadow-eventcard xl:w-[calc(100%_-_290px)]"
      >
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-3">
            <Image src={item.avatar} className="h-12 w-12" alt="profile avatar" />
            <div>
              <p className="text-base text-themeBlackText">{item.name}</p>
              <p className="text-xs text-themeGrey3Text">{item.past_time}</p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-[9px]">
            <div className="flex h-[26px] w-[26px] items-center justify-center rounded-[8px] border border-themeBorder1 bg-themeBg1">
              <Image src={Pencil} className="text-themeGrey3Text" alt="" />
            </div>
            <Image src={Detail} className="h-[26px] w-[26px]" alt="" />
          </div>
        </div>
        <p className="text-[13px] text-themeGrey3Text">{item.content}</p>
        {item.img && <Image src={item.img} alt="" />}
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-4">
            <div className="flex flex-row gap-2">
              <ChatBubbleOvalLeftEllipsisIcon className="h-[18px] w-[18px]" />
              <p className="text-sm text-themeGrey3Text">{item.msgCnt}</p>
            </div>
            <div className="flex flex-row gap-2">
              <HeartIcon className="h-[20px] w-[20px]" />
              <p className="text-sm text-themeGrey3Text">{item.recommend}</p>
            </div>
          </div>
          <Link />
        </div>
      </div>
    ))}
  </div>
)
