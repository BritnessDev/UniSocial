import moment from 'moment'
import { useRouter } from 'next/router'
export interface INewsLikeListItem {
  color: string
  title: string
  date: Date
  price: string
}

const NewsLikeListItem: React.FC<INewsLikeListItem> = ({ color, title, date, price }) => {
  const endTime = moment(moment().format(), 'HH:mm:ss a')
  const startTime = moment(date, 'HH:mm:ss a')
  const duration = moment.duration(endTime.diff(startTime))
  return (
    <div className={`flex flex-row justify-between border-b border-themeBorder1 py-[16px] last:border-b-0`}>
      <div className="flex flex-row">
        <div className={`h-[60px] w-[60px] rounded-[11px] ${color}`}></div>
        <div className="ml-[12px] flex flex-col justify-center">
          <h1 className="text-[14px] font-bold text-themeBlackText">{title}</h1>
          <h1 className="text-[14px] text-themeGray4Text">In&nbsp;{Math.round(duration.asDays())}&nbsp;days</h1>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <h1 className="text-[13px] font-bold text-[#14CA74]">{price}</h1>
      </div>
    </div>
  )
}

const ItemsContainer: React.ElementType = ({ PostLikeData }) => {
  return (
    <div className="mt-[24px] w-full">
      {PostLikeData &&
        PostLikeData.map((event: any, i: number) => (
          // <div key={i}>{event}</div>
          <NewsLikeListItem
            key={i}
            color={'bg-[#F6F1FF]'}
            title={event?.item?.description}
            date={event?.item?.createdAt}
            price={event?.item?.price}
          />
        ))}
    </div>
  )
}

export const NewsLikeList: React.ElementType = ({ events }) => {
  const router = useRouter()

  const onSeeAll = () => {
    router.push('/local-event')
  }

  return (
    <div className="w-full rounded-[24px] border border-solid border-themeBorder1 bg-white px-[24px] pb-[32px] shadow-eventcard">
      <div className="flex flex-row justify-between border-b-[1px] border-themeBorder1 pt-[28px] pb-[24px]">
        <h1 className="text-[16px] font-bold">Events you might like</h1>
        <h1 className="cursor-pointer text-[14px] font-bold text-themeBlue" onClick={onSeeAll}>
          See all
        </h1>
      </div>
      <ItemsContainer PostLikeData={events} />
    </div>
  )
}
