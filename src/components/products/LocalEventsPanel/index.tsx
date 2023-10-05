import { useRouter } from 'next/router'
import { EventCard } from '../../feature/EventCard'

export const LocalEventsPanel: React.ElementType = ({ events }) => {
  const router = useRouter()
  const onSelectEvent = () => router.push('single-event?eid=clcxf7cfn0006vtqg3xq5rrfq')
  return (
    <div className="w-full bg-themeBg1 pt-[32px]">
      <h1 className="font-inter text-[22px] font-bold text-themeBlackText">Local Events</h1>
      <h2 className="text-[18px] font-normal text-themeGrey3Text">Aliquam suspendisse sed integer egestas. Laoreet.</h2>
      <div className="mt-[32.1px] grid justify-center border-b-[1px] border-[#CACBD7] pb-[45px] md:flex md:justify-between lg:grid-cols-3 lg:gap-4">
        {events &&
          events.map((item: any, i: number) => (
            <EventCard
              previewImg={`../../assets/img/products/${item.imageUrls[0]}`}
              title={item.title}
              subtitle={item.description}
              onClickHandler={() => onSelectEvent()}
              key={i}
            />
          ))}
      </div>
    </div>
  )
}
