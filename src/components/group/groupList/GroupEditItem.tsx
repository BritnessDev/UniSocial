import Image from 'next/image'
import Detail from '../../../assets/img/detail.svg'
import Edit from '../../../assets/img/icons/Edit.svg'

export interface EditGroup {
  title: string
  content: string
  groupImg: string
  avatarList: any
  memberCnt: number
}

export interface groupItem {
  title: string
  content: string
}

interface groupEditItemMember {
  avatarList: any
  memberCnt: number
}

const GroupEditItemHeader = () => (
  <div className="flex flex-row items-center justify-between">
    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[14px] bg-themeBg4">
      <Image src={Edit} alt="" />
    </div>
    <Image src={Detail} alt="" />
  </div>
)

const GroupEditItemText = ({ title, content }: groupItem) => (
  <div>
    <h1 className="text-[18px] font-bold text-themeBlackText">{title}</h1>
    <p className="mt-[11px] text-[12px] text-themeGrey3Text">{content}</p>
  </div>
)

const GroupEditItemMember: React.FC<groupEditItemMember> = ({ avatarList, memberCnt }) => (
  <div className="ml-[12px] flex flex-row items-center">
    {avatarList.map((item: any, i: number) => (
      <img src={item} className="ml-[-12px] h-[32px] w-[32px] rounded-full" key={i} alt="" />
    ))}
    <p className="ml-[12px] text-[13px] text-themeGrey3Text">{`${memberCnt} members`}</p>
  </div>
)

export const GroupEditItem: React.FC<{ data: EditGroup }> = ({ data }) => {
  const { title, content, groupImg, avatarList, memberCnt } = data

  return (
    <div className="grid grid-cols-1 gap-[16px] rounded-[30px] bg-[white] px-[24px] pt-[32px] pb-[24px]">
      <GroupEditItemHeader />
      <GroupEditItemText title={title} content={content} />
      <div className="h-[1px] w-full border-b-[1px] border-themeBorder1"></div>
      {groupImg ? <img src={groupImg} className="h-[144px] w-full" alt="" /> : <div className="h-[144px]" />}
      <GroupEditItemMember avatarList={avatarList.map((item: any) => item.image)} memberCnt={memberCnt} />
    </div>
  )
}
