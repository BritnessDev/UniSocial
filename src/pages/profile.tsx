import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'
import { PrimaryLayout } from '../components/layouts/primary/PrimaryLayout'
import { Categories } from '../components/profile/Categories'
import { Detail } from '../components/profile/Detail'
import { Experience } from '../components/profile/Experience'
import { Introduction } from '../components/profile/Introduction'
import { SocialFeed } from '../components/profile/SocialFeed'
import { Tags } from '../components/profile/Tags'
import { type NextPageWithLayout } from '../types/page'
import { trpc } from '../utils/trpc'

const Profile: NextPageWithLayout = () => {
  const [selectCategory, setSelectCategory] = useState(0)
  const [loading, setLoading] = useState(true)
  const { data: profile, isLoading: loading1 } = trpc.profile.getProfile.useQuery({
    id: '',
  })

  useEffect(() => {
    if (!loading1) {
      setLoading(false)
    }
  }, [loading1])

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="relative flex w-full flex-col gap-9 bg-themeBg1 px-12 pt-12">
      <div className="flex flex-col gap-9 xl:flex-row xl:gap-6">
        <Introduction description={profile?.description ? profile.description : ''} />
        <Detail 
          phonenumber={profile?.phoneNumber ? profile.phoneNumber : ''} 
          location={profile?.location ? profile.location : ''} 
          website={profile?.website ? profile.website : ''}/>
      </div>
      <Categories selectCategory={selectCategory} setSelectCategory={setSelectCategory} />
      {!selectCategory ? (
        <>
          <Tags />
          <Experience />
        </>
      ) : (
        <SocialFeed />
      )}
    </div>
  )
}
Profile.getLayout = (page: ReactNode) => {
  return <PrimaryLayout>{page}</PrimaryLayout>
}

export default Profile
