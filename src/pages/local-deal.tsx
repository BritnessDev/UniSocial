import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'
import { Feature } from '../components/feature'
import { PrimaryLayout } from '../components/layouts/primary/PrimaryLayout'
import { type NextPageWithLayout } from '../types/page'
import { trpc } from '../utils/trpc'

export const LocalDeal: NextPageWithLayout = () => {
  const { data: deal, isLoading: isloading } = trpc.deal.getAll.useQuery()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (isloading === false) setLoading(false)
  }, [isloading])
  return loading ? (
    <div>loading...</div>
  ) : (
    <div className="relative flex w-full justify-center bg-themeBg1">
      <div className="w-full">
        <Feature feature={deal} type={'single-deal/'} />
      </div>
    </div>
  )
}

LocalDeal.getLayout = (page: ReactNode) => {
  return <PrimaryLayout title="Contracts">{page}</PrimaryLayout>
}

export default LocalDeal
