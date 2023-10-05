import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'
import { PrimaryLayout } from '../components/layouts/primary/PrimaryLayout'
import { HomeNews } from '../components/products/HomeNews'
import { LocalEventsPanel } from '../components/products/LocalEventsPanel'
import { LocalProductsPanel } from '../components/products/LocalProductsPanel'
import { PostContainer } from '../components/products/PostContainer'
import { type NextPageWithLayout } from '../types/page'
import { trpc } from '../utils/trpc'

const Home: NextPageWithLayout = () => {
  const [loading, setLoading] = useState(true)
  const { data: dashData, isLoading: loading1 } = trpc.user.getDashboardData.useQuery()
  const { data: recData, isLoading: loading2 } = trpc.user.getRecommendData.useQuery()
  useEffect(() => {
    if (!loading1 && !loading2) setLoading(false)
  }, [loading1, loading2])
  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="relative flex w-full justify-center bg-themeBg1 px-[16px] lg:px-2">
      <div className="w-full lg:w-[845px] xl:w-[1094px]">
        <HomeNews news={dashData?.trendNews} events={recData?.recEvents} />
        <LocalProductsPanel products={dashData?.products} />
        <LocalEventsPanel events={dashData?.events} />
        <PostContainer groups={dashData?.groups} recGroups={recData?.recGroups} />
      </div>
    </div>
  )
}

Home.getLayout = (page: ReactNode) => {
  return <PrimaryLayout>{page}</PrimaryLayout>
}

export default Home
