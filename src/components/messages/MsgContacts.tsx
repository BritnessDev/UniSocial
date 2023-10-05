import Image from 'next/image'
import { useState } from 'react'
import PlusIcon from '../../assets/img/blackplus.svg'
import downarrow from '../../assets/img/downarrow.svg'
import Pencil from '../../assets/img/pencil.svg'
import { Badge } from '../Badge'
import { RoundButton } from '../UI/Button'
import { SearchBox } from '../UI/SearchBox'
import { MsgContactData } from './MsgData'

interface IMsgContact {
  clickWriteMsg: (selectedIndex: number) => void
  showMsgContainer: boolean
}

const MsgContactHeader: React.FC = () => {
  const [unreadCnt, setUnreadCnt] = useState(12)
  return (
    <div className="flex flex-row justify-between border-b border-themeBorder1 lg:mt-2 xl:mt-0 xl:w-[375px]">
      <div className="justify-left mx-4 my-7 flex flex-row items-center gap-1.5">
        <p className="text-4 font-bold leading-4">Messages</p>
        <Image src={downarrow} className="h-4 w-4" alt="" />
        <Badge bgcolor="bg-themeBlue" text={unreadCnt} />
      </div>
      <div>
        <RoundButton className="mx-4 my-7" icon={PlusIcon} />
      </div>
    </div>
  )
}

const MsgContactSearch: React.FC = () => (
  <div className=" border-x border-themeBorder1 p-4">
    <SearchBox classnames="flex h-11 pl-[18px] pr-[18px] py-[13px] " placeholder="Search messages" />
  </div>
)

export const MsgContact: React.FC<IMsgContact> = ({ clickWriteMsg, showMsgContainer }) => {
  const [selectUser, setSelectUser] = useState(0)
  return (
    <div
      className={`${showMsgContainer ? 'hidden' : 'block'} w-full  bg-white sm:block xl:w-[375px] xl:rounded-br-[24px]`}
    >
      <MsgContactHeader />
      <MsgContactSearch />
      <div className="overflow-y-auto xl:h-[calc(100vh-480px)]">
        {MsgContactData.map(
          (
            item,
            index, // message contact list of users
          ) => (
            <div
              className={`flex cursor-pointer flex-row justify-between gap-4 p-4 hover:bg-slate-100 ${
                selectUser == index ? 'bg-themeBorder1' : ''
              }`}
              key={index}
              onClick={() => setSelectUser(index)}
            >
              <div className="flex flex-row gap-4">
                <Image src={item?.avatar} className="h-12 w-12" alt="" />
                <div className="mt-1.25 flex flex-col gap-1.5">
                  <p className="text-sm text-themeBlackText">{item?.name}</p>
                  <p className="text-sm text-[#989AAD]">{item?.content}</p>
                </div>
              </div>
              <p className="text-sm text-[#989AAD]">{item?.pastTime}</p>
            </div>
          ),
        )}
      </div>

      <div className="xl:pb-autolg:pb-auto border-x border-x-themeBorder1 px-4 pt-8 pb-40">
        <div
          className="cursor-pointer rounded-full border border-themeBorder1 py-[18px] shadow-3xl hover:bg-slate-100"
          onClick={() => clickWriteMsg(selectUser)}
        >
          <div className="flex flex-row items-center justify-center gap-1.5">
            <Image src={Pencil} alt="" />
            <p className="t text-sm text-themeBlackText">Write messsage</p>
          </div>
        </div>
      </div>
    </div>
  )
}
