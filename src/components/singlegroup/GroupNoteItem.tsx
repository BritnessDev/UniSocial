import Image from 'next/image'
import AddingFileTrayIcon from '../../assets/img/addingfiletray.svg'
import Document from '../../assets/img/document.svg'
import DownArrowTrayIcon from '../../assets/img/downarrowtray.svg'
export interface IGroupNoteItemType {
  filename: string
  datetime: string
  filepath?: string
}

export const GroupNoteItem: React.FC<IGroupNoteItemType> = ({ filename, datetime }) => (
  <>
    <div className="flex items-center justify-between">
      <div className="flex">
        <Image src={Document} alt="" />
        <div className="ml-[16px] flex flex-col">
          <label className="w-full text-sm font-medium text-themeBlackText">{filename}</label>
          <label className="text-[12px] text-themeGrey3Text">{datetime}</label>
        </div>
      </div>
      <div className="flex h-fit w-fit">
        <Image src={DownArrowTrayIcon} alt="" className="cursor-pointer hover:bg-slate-100" />
        <Image src={AddingFileTrayIcon} alt="" className="ml-1.5 cursor-pointer hover:bg-slate-100" />
      </div>
    </div>
    <hr className="my-5" />
  </>
)
