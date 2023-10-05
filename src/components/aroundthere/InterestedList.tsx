import Image from 'next/image'
import { useEffect, useState } from 'react'

export interface IInterestedSkill {
  Icon: any
  name: string
  clickStatus: boolean
  color?: string
}

export const InterestedList: React.FC<{ skillOptions: IInterestedSkill[] }> = ({ skillOptions = [] }) => {
  const [options, setOptions] = useState<IInterestedSkill[] | undefined>()

  useEffect(() => {
    setOptions(skillOptions)
  }, [skillOptions])

  const onClickItem = (index: number): void => {
    const newOptions: any = [...skillOptions]
    newOptions[index].clickStatus = !newOptions[index].clickStatus
    setOptions(newOptions)
  }

  return (
    <div className={'flex flex-wrap'}>
      {options?.map((item: any, key: number) => (
        <div
          key={key}
          className={`mr-[8px] mt-[12px] flex w-fit cursor-pointer items-center rounded-[6px] px-[8px] py-[6px] ${
            !item.clickStatus ? 'bg-[#52525220]' : 'bg-[#4170FF44]'
          }`}
          onClick={() => {
            onClickItem(key)
          }}
        >
          <Image src={item.Icon} alt="" />
          <span className="ml-[9.5px] text-[14px] font-medium text-[#3D474D]">{item.name}</span>
        </div>
      ))}
    </div>
  )
}
