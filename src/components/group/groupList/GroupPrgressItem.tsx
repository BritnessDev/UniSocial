import Image from 'next/image'
import Detail from '../../../assets/img/detail.svg'
import { ProgressBar } from '../../UI/ProgressBar'

const GroupProgressItemHeader = ({ icon }: { icon: string }) => {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[14px] bg-themeBg4">
        <Image src={icon} alt="" />
      </div>
      <Image src={Detail} alt="" />
    </div>
  )
}

const GroupProgressItemText = ({ title, content }: { title: string; content: string }) => {
  return (
    <div>
      <h1 className="text-[18px] font-bold text-themeBlackText">{title}</h1>
      <p className="mt-[11px] text-[12px] text-themeGrey3Text">{content}</p>
    </div>
  )
}

const GroupProgressItemTask = ({ completed, total }: { completed: number; total: number }) => {
  return (
    <>
      <div>
        <p className="text-[14px] font-bold text-themeBlackText">Tasks</p>
        <p className="text-[14px] text-themeGrey3Text">{`${completed} of ${total} completed`}</p>
      </div>
      <div>
        <p className="text-[14px] font-bold text-themeBlackText">Progress</p>
        <div className="mt-[5px] flex flex-row items-center">
          <ProgressBar width={159.5} completed={completed / total} />
          <p className="ml-[12px] text-[14px] text-themeGrey3Text">{Math.floor((completed / total) * 100)}%</p>
        </div>
      </div>
    </>
  )
}

const GroupProgressItemAvatar = ({ avatarList }: { avatarList: any }) => {
  return (
    <div className="ml-[12px] flex flex-row items-center">
      {avatarList && avatarList.map((item: any, i: number) => {
        return <Image src={item} className="ml-[-12px] h-[32px] w-[32px]" key={i} alt="" />
      })}
    </div>
  )
}
export interface GroupProgressItem {
  title: string
  content: string
  icon: string
  avatarList: any
  total: number
  completed: number
}

export const GroupProgressItem = ({ data }: { data: GroupProgressItem }) => {
  const { icon, title, content, total, completed, avatarList } = data
  return (
    <div className="grid grid-cols-1 gap-[22px] rounded-[30px] bg-[white] px-[24px] pt-[32px] pb-[45px]">
      <GroupProgressItemHeader icon={icon} />
      <GroupProgressItemText title={title} content={content} />
      <div className="h-[1px] w-full border-b-[1px] border-themeBorder1"></div>
      <GroupProgressItemTask completed={completed} total={total} />
      <GroupProgressItemAvatar avatarList={avatarList} />
    </div>
  )
}
