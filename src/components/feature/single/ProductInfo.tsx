import { AcademicCapIcon, ArrowLeftIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { BlueButton, IconButton } from '../../UI/Button'
import { Carousel } from '../../UI/Carousel'
import type { ISingleProducts } from './Products'

export const ProductInfo: React.FC<ISingleProducts> = ({
  category,
  title,
  keywords,
  price,
  location,
  owner,
  viewedUsers,
  images,
  desc,
}) => (
  <div className="rounded-[24px] bg-white px-6 py-7 shadow-eventcard md:px-8">
    <div className="flex flex-row items-center">
      <IconButton buttonIcon={<ArrowLeftIcon className="text-themeBlueText1" />} className="w-9 bg-themeBg3" />
      <p className="text-md ml-6 font-medium text-themeDarkText1">Back to previous page | Listed in category: </p>
      <p className="text-md ml-2 font-medium text-themeBlueText1 underline">{category}</p>
    </div>
    <div className="mt-8 flex w-full flex-col justify-around xl:flex-row xl:gap-8">
      <Carousel images={images} />
      <div className="mt-8 md:mt-6 xl:mt-0">
        <p className="text-[24px] font-medium text-black md:text-[32px]">{title}</p>
        <div className="mt-4 flex gap-1 md:mt-6">
          {keywords?.map((item, key) => {
            return (
              <div
                key={key}
                className="flex items-center justify-center rounded-xl bg-themeBg3 px-4 py-2 text-themeBlueText1"
              >
                {item}
              </div>
            )
          })}
        </div>
        <div className="flex items-center font-medium text-black">
          <p className="text-[24px] opacity-70">$</p>
          <p className="ml-0.5 text-[44px]">{price}</p>
        </div>
        <div className="mt-4 md:mt-6">
          <div className="flex flex-row items-start gap-x-3">
            <AcademicCapIcon className="w-6" />
            <div className="text-themeDarkText1">
              <p>{location}</p>
              <p>{owner.userName}</p>
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center md:mt-6">
          {viewedUsers?.map((item, key) => {
            return (
              <img
                src={item.image}
                className="ml-[-12px] h-10 w-10 rounded-[50%]"
                key={key}
                alt=""
              />
            )
          })}
          <p className="ml-2 font-semibold text-themeBlueText1">{viewedUsers?.length} people viewed</p>
        </div>
        <div className="mt-4 md:mt-8">
          <BlueButton text="Message" />
        </div>
      </div>
    </div>
    <div className="mt-8">
      <p className="font-bold text-[#1E1F4B]">Description</p>
      <div
        dangerouslySetInnerHTML={{ __html: desc }}
        className="mt-8 px-4 text-[14px] text-themeDarkText1 md:mt-5"
      ></div>
    </div>
  </div>
)
