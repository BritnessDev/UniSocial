import Image from 'next/image'
import type { IFeatureItem } from '../../../types/FeatureCreate'

export const FeatureTypeItem = ({ item }: { item: IFeatureItem }) => (
  <div className="flex cursor-pointer select-none items-center rounded-[10px] border-[1px] border-[#F0F0F1] py-3 px-6">
    <Image src={item.Icon} alt="" />
    <div className="ml-4 flex flex-col justify-center">
      <div className="text-[16px] font-semibold text-[#383940]">{item.title}</div>
      <div className="mt-1 max-w-[250px] text-[14px] text-themeGray3Text">{item.desc}</div>
    </div>
  </div>
)
