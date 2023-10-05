import Image from 'next/image'
import { useRouter } from 'next/router'
import Edit from '../../../assets/img/icons/Edit.svg'
import MessageIcon from '../../../assets/img/message.svg'

interface IPostLikeListItem {
  title: string
  content: string
  avatarList: string[]
  messageCnt: number
}

const PostLikeHeader: React.FC = () => {
  const router = useRouter()
  const onGroupClicked = () => {
    router.push('/group')
  }

  return (
    <div className="flex h-[80px] w-full items-center rounded-[24px] border-[1px] border-themeBorder1 bg-[white] pl-[24px]">
      <h1
        className="cursor-pointer text-[16px] font-bold text-themeBlackText hover:text-themeBlueText1"
        onClick={onGroupClicked}
      >
        Groups you might like
      </h1>
    </div>
  )
}

const PostLikeListItem: React.FC<IPostLikeListItem> = ({ title, content, avatarList, messageCnt }) => {
  const router = useRouter()
  const onSingleGroupClicked = () => {
    router.push('single-group')
  }
  return (
    <div
      className="cursor-pointer rounded-[16px] border-[1px] border-themeBorder1 bg-white p-[24px] shadow-eventcard"
      onClick={onSingleGroupClicked}
    >
      <div className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-[14px] bg-themeBg2 hover:bg-[#eceef3]">
        <Image src={Edit} alt="" className="rounded-full" />
      </div>
      <h1 className="mt-[16px] text-[15px] font-bold text-themeBlackText">{title}</h1>
      <p className="mt-[8px] text-[12px] text-themeGrey3Text">{content}</p>
      <div className="mt-[10px] flex flex-row justify-between">
        <div className="ml-[12px] flex flex-row">
          {avatarList &&
            avatarList.map((item: string, i: number) => {
              return <img src={item} className="ml-[-12px] h-[32px] w-[32px] rounded-full" key={i} alt="" />
            })}
        </div>
        <div className="flex flex-row items-center justify-center gap-[7.5px]">
          <Image src={MessageIcon} className="h-[15px] w-[15px]" alt="" />
          <p className="text-[14px] text-themeGrey3Text">{messageCnt}</p>
        </div>
      </div>
    </div>
  )
}

const PostLikeList: React.ElementType = ({ recGroup }) => {
  return (
    <div className="mt-[24px] grid grid-cols-2 gap-[16px] lg:grid-cols-2 xl:grid-cols-1">
      {recGroup &&
        recGroup.map((group: any, i: number) => {
          const avatarList = group?.item.members?.map((member: any) => member?.image)
          return (
            <PostLikeListItem
              title={group.item.name}
              content={group.item.description}
              avatarList={avatarList}
              messageCnt={avatarList?.length}
              key={i}
            />
          )
        })}
    </div>
  )
}

export const PostLikeListContainer: React.ElementType = ({ recGroups }) => {
  return (
    <div className="mt-[24px] lg:mt-[0px] lg:w-full xl:w-[338px]">
      <PostLikeHeader />
      <PostLikeList recGroup={recGroups} />
    </div>
  )
}
