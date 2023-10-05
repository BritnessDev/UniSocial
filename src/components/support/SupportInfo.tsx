import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import { InfoData } from './SupportData'

interface IInfoItem {
  icon: StaticImageData
  label: string
  info: string
}

export const InfoItem = ({ icon, label, info }: IInfoItem) => (
  <div className="rounded-6 flex min-w-fit flex-row items-center gap-8 border border-themeBorder1 bg-white px-10 py-5 shadow-eventcard">
    <div className="flex w-full flex-col gap-2">
      <p className="text-base font-bold text-themeBlackText">{label}</p>
      <p className="text-base text-themeBlue">{info}</p>
    </div>
    <Image src={icon} alt={`${label}-icon`} />
  </div>
)

export const SupportInfo = () => (
  <div className="mt-0 flex flex-col gap-4 xl:w-[600px]">
    {InfoData.map((item, index) => (
      <InfoItem key={index} icon={item.icon} label={item.label} info={item.info} />
    ))}
  </div>
)
