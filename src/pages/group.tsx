import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'
import { GroupCategory } from '../components/group/GroupCategory'
import { GroupListContainer } from '../components/group/groupList/GroupListContainer'
import { GroupHeader } from '../components/group/GroupsHeader'
import { PrimaryLayout } from '../components/layouts/primary/PrimaryLayout'
import type { NextPageWithLayout } from '../types/page'
import { trpc } from '../utils/trpc'
const Groups: NextPageWithLayout = () => {
  const { data: groups, isLoading: isloading } = trpc.group.getAll.useQuery();
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (isloading === false) setLoading(false)
  }, [isloading])
  return (
    loading ? <div>loading...</div> : <div className="relative w-full">
      <div className="w-full bg-themeBg1 pl-[16px] pr-[16px]  pt-[48px] md:pl-[48px] md:pr-[48px]">
        <GroupHeader />
        <GroupCategory />
        <GroupListContainer groups={groups} />
      </div>
    </div>
  )
}

Groups.getLayout = (page: ReactNode) => {
  return <PrimaryLayout title="Projects">{page}</PrimaryLayout>
}

export default Groups
