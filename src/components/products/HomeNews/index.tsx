import { NewsLikeList } from './NewsLikeList'
import { NewsPreviewPanel } from './NewsPreviewPanel'

export const HomeNews: React.ElementType = ({ news, events }) => (
  <div className="w-full bg-themeBg1 pt-[48px]">
    <h1 className="font-inter h-[28px] text-[22px] font-bold text-themeBlackText">Home</h1>
    <h2 className="mt-[7px] h-[28px] text-[18px] font-normal text-themeGrey3Text">September 24, 2022</h2>
    <div className="mt-[32px] grid grid-cols-1 gap-[24px] xl:grid-cols-2">
      <NewsPreviewPanel previewImg={news?.photos[0]} title={news?.title} content={news?.news} />
      <NewsLikeList events={events} />
    </div>
  </div>
)
