import EllipsisHorizontalIcon from '@heroicons/react/20/solid/EllipsisHorizontalIcon'
import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import { ProgressBar } from '../UI/ProgressBar'

interface IGroupCardType {
  title: string
  subtitle: string
  type: string
  bgcolor?: string
  icon?: StaticImageData
  percentage?: number
}

export const GroupCard: React.FC<IGroupCardType> = ({ title, subtitle, type, bgcolor, icon, percentage }) => (
  <div className="relative mt-4 flex h-[110px] w-full flex-row rounded-3xl border border-solid border-themeBorder1 bg-white px-4 shadow-[0_2px_10px_rgba(25,93,194,0.07)] xl:mt-0">
    {type == 'icon' && icon ? (
      <Image src={icon} alt="icon" width={58} />
    ) : (
      <div className={`mt-[26px] h-[58px] w-[58px] rounded-[11px] ${bgcolor}`}></div>
    )}
    <div className="ml-[16px]">
      <div className="mt-[26px] w-full text-base font-bold leading-[18px] text-themeBlackText">{title}</div>
      {type == 'icon' && percentage ? <ProgressBar width={187} completed={0.8} className="mt-[8px]" /> : <></>}
      <div className="mt-2 w-[186px] text-sm font-medium leading-[16px] text-themeGrey3Text">{subtitle}</div>
    </div>
    <EllipsisHorizontalIcon className="absolute right-4 top-3 h-[18px] w-[18px] cursor-pointer rounded-[50%] text-[#6F7182] transition-colors delay-75 hover:bg-slate-300" />
  </div>
)
