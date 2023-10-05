import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'
import { Feature } from '../components/feature'
import { PrimaryLayout } from '../components/layouts/primary/PrimaryLayout'
import { type NextPageWithLayout } from '../types/page'
import { trpc } from '../utils/trpc'

const LocalProduct: NextPageWithLayout = () => {
  const { data: events, isLoading: isloading } = trpc.event.getAll.useQuery()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (isloading === false) setLoading(false)
  }, [isloading])
  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="relative flex w-full justify-center bg-themeBg1">
      <div className="w-full">
        <Feature feature={events} type={'single-event/'} />
      </div>
    </div>
  )
}

LocalProduct.getLayout = (page: ReactNode) => {
  return <PrimaryLayout>{page}</PrimaryLayout>
}

export default LocalProduct
