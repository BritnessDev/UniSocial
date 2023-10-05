import Image from 'next/image'
import BgFeature from '../../../assets/img/bg-feature.png'
import type { IContactInfo } from './ContactInfo'
import { ContactInfo } from './ContactInfo'
import type { IFeatureCard } from './FeatureCard'
import { FeatureCard } from './FeatureCard'
import type { IFeatureItem } from './FeatureList'
import { FeatureList } from './FeatureList'
import { FeatureLocationCard } from './FeatureLocationCard'

export interface ISglFeature {
  sglCard: IFeatureCard
  sglContact: IContactInfo
  sglList: IFeatureItem[]
  location: string
  photo: string
}

export const SingleFeature: React.FC<ISglFeature> = ({ sglCard, sglContact, sglList, location }) => (
  <>
    <div className="w-full overflow-x-hidden">
      <Image src={BgFeature} alt="no feature image" className="min-h-[228px] min-w-[700px]" priority />
    </div>
    <div className="w-full px-4 md:px-12">
      <div className="-mt-7 flex flex-col justify-start gap-5 xl:grid xl:grid-cols-3 2xl:gap-12">
        <div className="col-span-2">
          <FeatureCard {...sglCard} />
          <ContactInfo {...sglContact} className="mt-6 flex w-full xl:hidden" />
          <FeatureLocationCard>
            <Image src={require(`../../../assets/img${location}`)} alt="" className="w-full" />
          </FeatureLocationCard>
          <FeatureList featureList={sglList} />
        </div>
        <ContactInfo {...sglContact} className="hidden w-full xl:flex" />
      </div>
    </div>
  </>
)
