import Image from 'next/image'
import iconSearch from '../../assets/img/icon-search.svg'
import iconSocialMedia from '../../assets/img/icon-socialmedia.svg'
import iconStreaming from '../../assets/img/icon-streaming.svg'
import WaveLeftBottom from '../../assets/img/wave-left-bottom.svg'
import WaveRightTop from '../../assets/img/wave-right-top.svg'
import { IconBannerButton } from '../UI/Button'

export const Banner: React.FC = () => (
  <div className="relative z-[1] h-[297px] w-full bg-themeBlue">
    <Image className="absolute top-[-48.84px] right-0" src={WaveRightTop} alt="no image" />
    <Image className="absolute bottom-0" src={WaveLeftBottom} alt="no image" />

    {/* Heading Text */}
    <div className="relative pl-[16px] pt-[63px] md:pl-[48px] md:pt-[70.5px]">
      <h1 className="font-inter text-[24px] text-white md:text-[32px]">Conccordia Local Events</h1>
      <p className="font-inter mt-[8px] text-[13px] text-white md:text-[14px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit seddolom <br />
        eiusmod tempor incididunt ut labore et dolore magn.
      </p>
    </div>

    {/* Banner Buttons */}
    <div className="relative z-[10] mt-[29.5px] ml-[16px] overflow-x-hidden md:ml-[58px]">
      <div className="flex w-[600px] md:w-full">
        <IconBannerButton text="All" />
        <IconBannerButton icon={iconSearch} text="Search Text" />
        <IconBannerButton icon={iconSocialMedia} text="Social Media" />
        <IconBannerButton icon={iconStreaming} text="Streaming" />
      </div>
    </div>
  </div>
)
