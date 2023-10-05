import Image from 'next/image'
import { ExperienceData } from './ProfileData'

export const Experience: React.FC = () => (
  <div className="rounded-[24px] border border-themeBorder1 bg-white px-10 py-8 shadow-eventcard xl:w-[calc(100%_-_290px)]">
    <h1 className="pb-6 text-[22px] font-bold text-themeBlackText">Experience</h1>
    <div className="flex flex-col gap-8">
      {ExperienceData.map((item, index) => (
        <>
          <hr className="border-t border-themeBorder1" key={index} />
          <div className="flex flex-row gap-4">
            <Image src={item.icon} className="h-[52px] w-[52px] self-start" alt="" />
            <div>
              <div className="flex flex-row items-center justify-between">
                <div>
                  <p className="text-base font-bold text-themeBlackText">{item.company}</p>
                  <p className="mt-[6px] text-[14px] text-[#989AAD]">{item.location}</p>
                </div>
                <p className="text-[14px] font-bold text-themeBlackText">{item.period}</p>
              </div>
              <p className="mt-[14px]">{item.content}</p>
            </div>
          </div>
        </>
      ))}
    </div>
  </div>
)
