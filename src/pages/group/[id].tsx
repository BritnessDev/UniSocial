import { useRouter } from 'next/router'
import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'
import Broadcast from '../../assets/img/color_broadcast.svg'
import { Banner } from '../../components/feature/Banner'
import { PrimaryLayout } from '../../components/layouts/primary/PrimaryLayout'
import { PostContainer } from '../../components/products/PostContainer'
import { GroupAboutCard } from '../../components/singlegroup/GroupAboutCard'
import { GroupCard } from '../../components/singlegroup/GroupCard'
import { GroupNoteCard } from '../../components/singlegroup/GroupNoteCard'
import type { IGroupNoteItemType } from '../../components/singlegroup/GroupNoteDatas'
import { type NextPageWithLayout } from '../../types/page'
import { trpc } from '../../utils/trpc'

const SingleGroup: NextPageWithLayout = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true)
  const { id } = router.query;

const { data: dashData, isLoading: loading1 } = trpc.user.getDashboardData.useQuery()
  const { data: recData, isLoading: loading2 } = trpc.user.getRecommendData.useQuery()
  const { data: sinGroup, isLoading: loading3 } = trpc.group.getGroupById.useQuery({
    id: id ? id.toString() : ''
  })
  useEffect(() => {
    if (!loading1 && !loading2 && !loading3) setLoading(false)
  }, [loading1, loading2, loading3, id])
  const filePaths: IGroupNoteItemType[] = [];
  if (sinGroup)
    sinGroup?.files.map(item => filePaths.push({
      filename: item,
      datetime: sinGroup.createdAt.toString(),
      filepath: ''
    }))
  return (
    loading ? <>loading...</> : <div className="relative flex w-full justify-center bg-themeBg1 px-[16px] lg:px-2">
      <div className="w-full lg:w-[775px] xl:w-[1066px] 2xl:w-[1140px]">
        <Banner />

        {/* Group Card Data */}
        <div className="mt-14 grid w-full grid-cols-1 justify-between gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {sinGroup &&
            (
              <>
                <GroupCard
                  type={'color'}
                  title={sinGroup.name}
                  subtitle={sinGroup.description}
                  bgcolor={'bg-[#f4f7ff]'}
                />
                <GroupCard
                  type={'color'}
                  title={(sinGroup.isPrivated ? 'Private' : 'Public') + ' Group'}
                  subtitle={sinGroup.isPrivated ? "Only members can see who's in the gorup and what they post." : "Anyone can see everything"}
                  bgcolor={'bg-[#f6f1ff]'}
                />
                <GroupCard
                  type={'icon'}
                  icon={Broadcast}
                  title={"Marketing Tasks"}
                  subtitle={"8 of 10 completed"}
                  percentage={80}
                />
              </>
            )

          }</div>

        {/* Group About && Group Note */}
        {
          sinGroup && <>
            <div className="relative w-full justify-between gap-[24px] lg:flex">
              <GroupAboutCard
                title={sinGroup.name}
                subtitle={
                  sinGroup.description
                }
              />

              <GroupNoteCard title={'Notes and Files'} noteitems={filePaths} />
            </div></>
        }

        <h1 className="text-md mb-8 font-bold text-themeBlackText">Home</h1>
        <hr />

        <PostContainer groups={dashData?.groups} recGroups={recData?.recGroups} />
      </div>
    </div>
  )
}

SingleGroup.getLayout = (page: ReactNode) => {
  return <PrimaryLayout title="Dashboard">{page}</PrimaryLayout>
}

export default SingleGroup
