import type { ReactNode } from 'react'
import { FeatureTypeList } from '../components/feature/createfeature'
import { PrimaryLayout } from '../components/layouts/primary/PrimaryLayout'
import type { NextPageWithLayout } from '../types/page'

const CreateFeature: NextPageWithLayout = () => (
  <div className="relative w-full px-[17px] pt-[50px] pb-[35px] md:px-12">
    <div>
      <div className="text-[22px] font-bold leading-7 text-themeBlackText">Create on UniSocial</div>
      <div className="mt-3 text-[18px] text-themeGrey3Text">Lorem ipsum dolor sit amet consectetur adipiscing.</div>
    </div>
    <div className="mt-[38px]">
      <FeatureTypeList />
    </div>
  </div>
)

CreateFeature.getLayout = (page: ReactNode) => {
  return <PrimaryLayout title="Groups">{page}</PrimaryLayout>
}

export default CreateFeature
