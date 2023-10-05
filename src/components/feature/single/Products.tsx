import Image from 'next/image'
import BgFeature from '../../../assets/img/bg-feature.png'
import { EventCard } from '../../feature/EventCard'
import { ProductInfo } from './ProductInfo'

export interface IUser {
  userId: string
  image?: string
  userName?: string
}

export interface IRelatedProduct {
  image: string
  productId: string
  productName: string
}

export interface ISingleProducts {
  category?: string
  title: string
  keywords?: string[]
  price: number
  location: string
  owner: IUser
  viewedUsers?: IUser[]
  images: string[]
  desc: string
  otherProducts?: IRelatedProduct[]
}

export const Products: React.FC<ISingleProducts> = ({
  category,
  title,
  keywords,
  price,
  location,
  owner,
  viewedUsers,
  images,
  desc,
  otherProducts,
}) => (
  <>
    <div className="w-full overflow-x-hidden">
      <Image src={BgFeature} alt="no feature image" className="min-h-[228px] min-w-[800px]" priority />
    </div>
    <div className="relative -mt-7 px-4 md:px-12">
      <ProductInfo
        category={category}
        title={title}
        keywords={keywords}
        price={price}
        location={location}
        owner={owner}
        viewedUsers={viewedUsers}
        images={images}
        desc={desc}
      />
      <div className="mt-8 md:mt-12">
        <p className="text-[22px] font-bold text-themeBlackText">Other products you might like</p>
        <div className="mt-8 grid justify-center gap-4 border-[#CACBD7] md:flex md:justify-between lg:grid-cols-3">
          {otherProducts?.map((item, key) => {
            return (
              <div key={key}>
                <EventCard
                  previewImg={'../../../assets/img/' + item.image}
                  title={item.productName}
                  subtitle="View page"
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  </>
)
