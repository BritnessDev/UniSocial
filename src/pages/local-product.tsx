import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'
import { Feature } from '../components/feature'
import { PrimaryLayout } from '../components/layouts/primary/PrimaryLayout'
import { type NextPageWithLayout } from '../types/page'
import { trpc } from '../utils/trpc'

const LocalDeal: NextPageWithLayout = () => {
  const { data: product, isLoading: isloading } = trpc.product.getAll.useQuery()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (isloading === false) setLoading(false)
  }, [isloading])
  return loading ? (
    <div>loading...</div>
  ) : (
    <div className="relative flex w-full justify-center bg-themeBg1">
      <div className="w-full">
        <Feature feature={product} type="single-product/" />
      </div>
    </div>
  )
}

LocalDeal.getLayout = (page: ReactNode) => {
  return <PrimaryLayout>{page}</PrimaryLayout>
}

export default LocalDeal
