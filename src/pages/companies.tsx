import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'
import { CompaniesHeader } from '../components/company/CompaniesHeader'
import { CompaniesListContainer } from '../components/company/CompaniesListContainer'
import { PrimaryLayout } from '../components/layouts/primary/PrimaryLayout'
import type { NextPageWithLayout } from '../types/page'
import { trpc } from '../utils/trpc'
const Companies: NextPageWithLayout = () => {
  const { data: jobs, isLoading: isloading } = trpc.job.getAll.useQuery();
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (isloading === false) setLoading(false)
  }, [isloading])
  return (
    loading ? <div>loading...</div> : <div className="relative w-full">
      <div className="w-full bg-themeBg1 pl-[16px] pr-[16px]  pt-[48px] md:pl-[48px] md:pr-[48px]">
        <CompaniesHeader />
        <CompaniesListContainer jobs={jobs} />
      </div>
    </div>
  )
}

Companies.getLayout = (page: ReactNode) => {
  return <PrimaryLayout title="Companies">{page}</PrimaryLayout>
}

export default Companies
