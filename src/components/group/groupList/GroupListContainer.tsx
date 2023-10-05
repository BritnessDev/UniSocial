import { GroupEditItem } from './GroupEditItem'
import { GroupProgressItem } from './GroupPrgressItem'

export const GroupListContainer: React.ElementType = ({ groups }) => (
  <div className="grid gap-[24px] pt-[24px] lg:grid-cols-2 xl:grid-cols-3">
    {groups && groups.map((item: any, i: number) =>
      item.type === 'edit' ? <GroupEditItem data={{ title: item.name, content: item.description, groupImg: '../../assets/img/' + item.photos[0], avatarList: item.members, memberCnt: item.members.length }} key={i} /> : <GroupProgressItem data={item} key={i} />,
    )}
  </div>
)
