import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { useState } from 'react'
import { IconButton } from '../UI/Button'

export interface ICarousel {
  images: string[]
  showCount?: number
}

export const Carousel: React.FC<ICarousel> = ({ images, showCount = 3 }) => {
  const [showImgIndex, setShowImgIndex] = useState<number>(0)
  const [imgIndex, setImgIndex] = useState<number>(0)

  if (images.length <= 0) return <></>
  if (images.length < showCount) showCount = images.length
  const goTo = (step: number) => {
    if (imgIndex + step + showCount > images.length) return
    if (imgIndex + step < 0) return
    setImgIndex(imgIndex + step)
  }
  return (
    <div className="w-full xl:w-[537px]">
      <div className="flex justify-center rounded-3xl border-[1px]">
        <Image
          src={require(`../../assets/img/products/${images[showImgIndex]}`)}
          alt=""
          className="h-[320px] w-[200px] border-[#CCCCCC] py-6 md:h-[463px] md:w-[250px] md:py-16"
        />
      </div>
      <div className="mt-6 flex w-full flex-row items-center justify-between">
        <div onClick={() => goTo(-1)}>
          <IconButton buttonIcon={<ArrowLeftIcon className="text-themeBlueText1" />} className="w-9 bg-themeBg3" />
        </div>
        {images.slice(imgIndex, imgIndex + showCount).map((item, key: number) => {
          return (
            <button
              key={key}
              className="cursor-pointer outline-none"
              onClick={() => {
                setShowImgIndex(imgIndex + key)
              }}
            >
              <Image
                src={require(`../../assets/img/products/${item}`)}
                alt=""
                className="h-[55px] w-[55px] rounded-2xl border-[1px] border-[#CCCCCC] shadow-eventcard md:h-[120px] md:w-[120px]"
              />
            </button>
          )
        })}
        <div onClick={() => goTo(1)}>
          <IconButton buttonIcon={<ArrowRightIcon className="text-themeBlueText1" />} className="w-9 bg-themeBg3" />
        </div>
      </div>
    </div>
  )
}
