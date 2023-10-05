import type { IGroupNoteItemType } from './GroupNoteItem'
import { GroupNoteItem } from './GroupNoteItem'
interface IGroupNoteType {
  title: string
  noteitems: IGroupNoteItemType[]
}

export const GroupNoteCard: React.FC<IGroupNoteType> = ({ title, noteitems }) => (
  <div className="mt-14 mb-14 h-[450px] w-full rounded-3xl border  border-solid border-themeBorder1 bg-white px-8 pt-6 shadow-[0_2_10_rgba(25,93,194,0.07)] lg:h-[366px] xl:h-[318px]">
    <h1 className="text-base font-bold text-themeBlackText">{title}</h1>
    <hr className="mx-auto mt-5 mb-5" />
    {noteitems.map((note, key) => {
      return <GroupNoteItem key={key} filename={note.filename} datetime={note.datetime} filepath={note.filepath} />
    })}
  </div>
)
