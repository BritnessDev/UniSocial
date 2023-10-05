import type { ReactNode } from 'react'
import { PrimaryLayout } from '../../components/layouts/primary/PrimaryLayout'
import { SupportFormGroup } from '../../components/support/SupportFormGroup'
import { SupportHeader } from '../../components/support/SupportHeader'
import { SupportInfo } from '../../components/support/SupportInfo'
import { type NextPageWithLayout } from '../../types/page'

const Support: NextPageWithLayout = () => (
  <div className="mx-4 py-12 sm:mx-[93px] sm:py-[88px]">
    <SupportHeader />
    <div className="mt-10 flex flex-col gap-[38px] xl:flex-row xl:gap-12">
      <SupportFormGroup />
      <SupportInfo />
    </div>
  </div>
)
Support.getLayout = (page: ReactNode) => {
  return <PrimaryLayout>{page}</PrimaryLayout>
}

export default Support
