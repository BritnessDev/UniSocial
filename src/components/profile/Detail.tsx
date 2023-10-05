import { useEffect, useState } from 'react'
import { ProfileDetailData } from './ProfileData'

interface InfoItemData {
  name: string
  data: string
  Icon: React.ElementType
}

interface DetailItemData {
  location: string
  website: string
  phonenumber: string
}

const InfoItem: React.FC<InfoItemData> = ({ name, data, Icon }) => (
  <div>
    <p className="text-[11px] text-themeGrey3Text">{name}</p>
    <div className="flex flex-row items-center border-b border-themeBorder1 pt-[10px] pb-6 text-[11px]">
      <Icon className="h-[15px] w-[15px] text-themeBlue" />
      <p className="ml-2 text-[15px] text-themeBlackText">{data}</p>
    </div>
  </div>
)

export const Detail: React.FC<DetailItemData> = ({ location, website, phonenumber }) => {
  const [detailData , setDetailData] = useState(ProfileDetailData)

  useEffect(() => {
    if (ProfileDetailData[0]?.data) ProfileDetailData[0].data = 'email'
    if (ProfileDetailData[1]?.data) ProfileDetailData[1].data = phonenumber
    if (ProfileDetailData[2]?.data) ProfileDetailData[2].data = location
    if (ProfileDetailData[3]?.data) ProfileDetailData[3].data = website

    setDetailData(ProfileDetailData)
  }, [location, website, phonenumber])

  return (
    <div className="bg-profile h-fit w-full rounded-[24px] border border-themeBorder1 bg-white px-8 pt-8 pb-[42px] shadow-eventcard xl:w-[322px]">
      <div>
        <p className="text-lg font-bold">Profile details</p>
      </div>
      <div className="flex flex-col gap-6 pt-5">
        {detailData.map((item, index) => (
          <InfoItem name={item.name} data={item.data} Icon={item.icon} key={index} />
        ))}
      </div>
    </div>
  )
}
