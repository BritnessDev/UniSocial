import { Banner } from './Banner'
import { EventCard } from './EventCard'

export const Feature: React.ElementType = ({ feature, type }) => {
  return (
    <div className="relative w-full">
      <Banner />

      <div className="w-full bg-themeBg1 pl-[16px] pr-[16px]  pt-[48px] md:pl-[48px] md:pr-[48px]">
        <h1 className="font-inter text-[22px] font-bold text-themeBlackText">Dashboards</h1>
        <h2 className="text-[18px] font-normal text-themeGrey3Text">
          Aliquam suspendisse sed integer egestas. Laoreet.
        </h2>
        <div className="mt-[32.1px] grid justify-center md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {feature &&
            feature?.map((item: any, key: number) => (
              <EventCard
                previewImg={`../../assets/img/products/${item.imageUrls[0]}`}
                title={item.title}
                subtitle="View page"
                key={key}
                eventId={type + item.id}
              />
            ))}
        </div>
      </div>
    </div>
  )
}
