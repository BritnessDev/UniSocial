import Image from 'next/image'

interface ISkill {
  Icon: any
  name: string
  bgColor: string
}

export const SkillList: React.FC<{ skillOptions: ISkill[] }> = ({ skillOptions = [] }) => (
  <div className={`flex max-w-[350px] flex-col`}>
    {skillOptions.map((item: any, key) => (
      <div
        key={key}
        className={`my-[6px] flex w-fit cursor-pointer flex-row rounded-[6px] bg-[#4170FF44] px-[8px] py-[6px] text-[14px] font-medium leading-[20px] text-[#3D474D]`}
      >
        <Image src={item.Icon} alt="" />
        <div className={`ml-[8px] text-black`}>{item.name}</div>
      </div>
    ))}
  </div>
)
