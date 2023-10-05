import { EnvelopeIcon, PhoneIcon, Square2StackIcon } from '@heroicons/react/24/outline'
import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import Trash from '../../assets/img/icons/trash.svg'
import { Category } from '../Category'

interface IUserCard {
  avatar: StaticImageData
  name: string
  job: string
  instagram: string
  phone: string
}

export const UserCard: React.FC<IUserCard> = ({ avatar, name, job, instagram, phone }) => (
  <div className="flex flex-col rounded-[24px] border border-themeBorder1 bg-white px-6 pt-10 pb-8 shadow-eventcard">
    <div className="flex flex-col gap-[28px]">
      <div className="flex flex-col items-center">
        <Image src={avatar} className="w-30 h-30" alt="" />
        <h1 className="pt-6 text-[22px] font-bold">{name}</h1>
        <p className="pt-1 text-base">{job}</p>
      </div>
      <div className="border-t border-themeBorder1"></div>
      <div className="flex flex-col gap-8">
        <div>
          <p className="text-[11px] text-themeGrey3Text">INSTAGRAM</p>
          <div className="flex flex-row gap-2 pt-[10px]">
            <EnvelopeIcon className="w-[15px] text-themeBlue" />
            <p className="text-[15px] text-themeBlackText">{instagram}</p>
          </div>
        </div>
        <div>
          <p className="text-[11px] text-themeGrey3Text">PHONE NUMBER</p>
          <div className="flex flex-row gap-2 pt-[10px]">
            <PhoneIcon className="w-[15px] text-themeBlue" />
            <p className="text-[15px] text-themeBlackText">{phone}</p>
          </div>
        </div>
        <hr className="border-t border-themeBorder1" />
      </div>
    </div>
    <div className="mt-4 flex flex-row items-center gap-8">
      <Category
        CustomIcon={Square2StackIcon}
        title="Send friend request"
        selected={true}
        clickCategory={() => {
          // click event
        }}
        index={0}
        customClass="h-[52px] w-full"
        textClass="text-white text-sm"
      />
      <Image src={Trash} className="h-5 w-5" alt="delete" />
    </div>
  </div>
)
