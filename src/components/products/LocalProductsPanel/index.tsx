import { useRouter } from 'next/router'
import { EventCard } from '../../feature/EventCard'
export const LocalProductsPanel: React.ElementType = ({ products }) => {
  const router = useRouter()
  const onClickHander = () => {
    router.push('single-product?pid=clcxf76fz0005vtqgm5gzp85j')
  }
  return (
    <div className="w-full bg-themeBg1 pt-[44px]">
      <h1 className="font-inter text-[22px] font-bold text-themeBlackText">Local Products</h1>
      <h2 className="text-[18px] font-normal text-themeGrey3Text">Aliquam suspendisse sed integer egestas. Laoreet.</h2>
      <div className="mt-[32.1px] flex flex-col items-center justify-center md:flex-row md:items-center md:justify-between lg:grid-cols-3 lg:gap-4">
        {products &&
          products.map((item: any, i: number) => (
            <EventCard
              previewImg={`../../assets/img/products/${item.imageUrls[0]}`}
              title={item.title}
              subtitle={item.description}
              onClickHandler={() => onClickHander()}
              key={i}
            />
          ))}
      </div>
    </div>
  )
}
