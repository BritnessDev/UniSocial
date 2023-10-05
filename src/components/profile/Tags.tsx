import { Category } from '../Category'
import { ProfileTagsData } from './ProfileData'

export const Tags: React.FC = () => {
  return (
    <div className="flex w-full flex-col gap-8 rounded-[24px] border border-themeBorder1 bg-white py-6 px-10 shadow-eventcard xl:w-[calc(100%_-_290px)]">
      <div>
        <h1 className="text-[22px] font-bold text-themeBlackText">Tags</h1>
      </div>
      <div className="border-t border-t-themeBorder1"></div>
      <div className="flex flex-wrap gap-x-3 gap-y-4">
        {ProfileTagsData.map((item, index) => (
          <Category
            customClass="px-[10px] py-[16px] min-w-fit bg-themeBg1 border-0"
            textClass="text-themeGrey3Text"
            title={item}
            clickCategory={() => {
              // click event
            }}
            index={0}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}
