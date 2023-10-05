import { ArrowRightIcon, GlobeAltIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { Google } from '../../../assets/img/icons'

export interface IFeatureCard {
  title: string
  summary: string
  desc: string[]
  website: string
}

export const FeatureCard: React.FC<IFeatureCard> = ({ title, summary, desc, website }) => (
  <div className="w-full rounded-[24px] bg-white p-8 shadow-eventcard">
    <div className="flex w-full justify-between">
      <div className="flex">
        <div className="h-[100px] w-[100px] rounded-2xl border-[1px] border-solid border-themeBorder1 p-6 shadow-eventcard">
          <Image src={Google} alt="no google icon" />
        </div>
        <div className="ml-4 flex flex-col justify-between py-4">
          <div className="text-[18px] font-bold text-themeBlackText md:text-[32px]">{title}</div>
          <div className="mt-1 flex items-center">
            {/* <Image src={Web} alt="no web image" /> */}
            <GlobeAltIcon className="w-5 text-themeBlue" />
            <p className="ml-1 rounded-[40px] text-[13px] text-themeGrey3Text">{website}</p>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="rounded-[40px] bg-themeBg1 px-3 py-2 text-[10px] text-themeGrey4Text">CREC</div>
      </div>
    </div>
    <div className="mt-8 w-full divide-themeBorder1"></div>
    <div className="mt-16 w-full">
      <div className="text-[18px] font-bold text-themeBlackText md:text-[22px]">About ({summary})</div>
      <div className="mt-4 text-[13px] leading-[26px] text-themeGrey3Text md:text-[14px]">{desc.map(item => (item))}</div>
    </div>
    <div className="mt-8 flex justify-center md:justify-start">
      <button
        type="button"
        className={`mt-[10px] h-[52px] rounded-[46px] bg-themeBlue px-20 py-2.5 text-sm font-medium text-white shadow-[0_4px_10px_rgba(2,87,251,0.19)] transition-colors hover:bg-blue-600 focus:outline-none focus:ring-themeBlue`}
      >
        <div className="flex flex-row items-center justify-center text-white">
          Get tickets <ArrowRightIcon className="ml-1 w-4" />
        </div>
      </button>
    </div>
  </div>
)
