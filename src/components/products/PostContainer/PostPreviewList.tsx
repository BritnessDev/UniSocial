import Image from 'next/image'
import { useRouter } from 'next/router'
import Detail from '../../../assets/img/detail.svg'
import MessageIcon from '../../../assets/img/message.svg'

interface IPostPreviewListItemHeader {
  avatar: string
  name: string
  role: string
}
const PostPreviewListItemHeader: React.FC<IPostPreviewListItemHeader> = ({ avatar, name, role }) => {
  const router = useRouter()
  const onProfileClicked = () => {
    router.push('/profile')
  }

  return (
    <div className="flex flex-row border-b-[1px] border-themeBorder1 pb-[20px]">
      <img src={avatar} alt="" className="w-16 rounded-full" />
      <div className="ml-[16px]">
        <h1
          className="cursor-pointer text-[20px] font-bold text-themeBlackText hover:text-themeBlueText1"
          onClick={onProfileClicked}
        >
          {name}
        </h1>
        <p className="text-[13px] text-themeGrey3Text">{role}</p>
      </div>
    </div>
  )
}

const PostPreviewListItemImg: React.FC<{ img: string }> = ({ img }) => {
  return (
    <div>
      <img src={img} className="w-full rounded-[16px]" alt="" />
    </div>
  )
}

const PostPreviewListItemSubject: React.ElementType = ({ subject }) => (
  <>
    {subject &&
      subject.map((item: string, i: number) => (
        <div
          className="mx-1 flex h-[32px] w-fit items-center justify-center rounded-[40px] bg-themeBg2 px-[10px] py-[10px] text-[12px] text-themeBlue"
          key={i}
        >
          {item}
        </div>
      ))}
  </>
)

const PostPreviewListItemText: React.FC<{ title: string; content: string }> = ({ title, content }) => (
  <div>
    {title && <h1 className="text-[14px] font-bold text-themeBlackText">{title}</h1>}
    <p className="mt-[8px] text-[13px] text-themeGrey3Text">{content}</p>
  </div>
)

const PostPreviewListItemFooter: React.FC<{ avatarList: string[]; messageCnt: number }> = ({
  avatarList,
  messageCnt,
}) => (
  <div className="flex flex-row justify-between">
    <div className="flex flex-row">
      {avatarList?.map((item: string, i: number) => {
        return <img src={item} className="ml-[-12px] h-[32px] w-[32px] rounded-full" key={i} alt="" />
      })}
      <div className="flex flex-row items-center  pl-[7.5px]">
        <Image src={MessageIcon} className="h-[18px] w-[18px]" alt="" />
        <p className="ml-[7.5px] text-[14px] text-themeGrey3Text">{messageCnt}</p>
      </div>
    </div>
    <Image src={Detail} alt="" />
  </div>
)

const PostPreviewListItem: React.ElementType = ({ previewData }) => {
  const avatarList = previewData.members.map((item: any) => item.image)
  return (
    <div className="flex flex-col gap-[20px] rounded-[24px] border-[1px] border-themeBorder1 bg-white p-[32px] shadow-eventcard">
      <PostPreviewListItemHeader avatar={previewData.user.image} name={previewData.user.name} role={previewData.role} />
      {previewData.photos[0] && <PostPreviewListItemImg img={previewData.photos[0]} />}
      {previewData.keywords && <PostPreviewListItemSubject subject={previewData.keywords} />}
      <PostPreviewListItemText title={previewData.name} content={previewData.description} />
      <PostPreviewListItemFooter avatarList={avatarList} messageCnt={avatarList?.length} />
    </div>
  )
}

export const PostPreviewList: React.ElementType = ({ groups }) => {
  return (
    <div className="flex flex-col gap-[32px] lg:w-full xl:w-[607px] 2xl:w-[686px]">
      {groups && groups.map((item: any, i: number) => <PostPreviewListItem previewData={item} key={i} />)}
    </div>
  )
}
