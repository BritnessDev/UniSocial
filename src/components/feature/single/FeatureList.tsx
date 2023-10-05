import { ArrowUpRightIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'

export interface IFeatureItem {
  image: string
  title: string
  date: string
  link: string
}

export interface IFeatureList {
  featureList: IFeatureItem[]
}

export const FeatureList: React.FC<IFeatureList> = ({ featureList }) => (
  <div className="mt-6 w-full rounded-[24px] bg-white px-4 pt-6 shadow-eventcard">
    <p className="text-[15px] font-bold text-themeBlackText">Similar events</p>
    <hr className="border-0.5 mt-5 border-themeBorder1" />
    <div className="divide-y divide-themeBorder1">
      {featureList.map((item: IFeatureItem, key: number) => {
        return (
          <div className="grid grid-cols-8 items-center py-5" key={key}>
            <Image src={require(`../../../assets/img/events/${item.image}`)} className=" rounded-lg" alt={'no'} />
            <div className="col-span-7 ml-5 flex flex-col justify-between py-1">
              <p className="text-[14px] font-medium text-themeBlackText md:text-lg">{item.title}</p>
              <div className="flex text-[11px] md:text-[14px]">
                <p className="font-medium text-themeGrey3Text">{item.date}</p>
                <Link href={item.link} className="ml-4 flex font-bold text-themeBlue">
                  Read more <ArrowUpRightIcon className="w-3" />{' '}
                </Link>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  </div>
)
