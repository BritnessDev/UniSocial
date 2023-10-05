import type { ReactNode } from 'react'
import { Banner } from '../components/feature/Banner'
import { PrimaryLayout } from '../components/layouts/primary/PrimaryLayout'
import { PostCategory } from '../components/products/PostContainer/PostCategory'
import { GroupAboutCard } from '../components/singlegroup/GroupAboutCard'
import { GroupCard } from '../components/singlegroup/GroupCard'
import { GroupCardDatas } from '../components/singlegroup/GroupCardDatas'
import { GroupNoteCard } from '../components/singlegroup/GroupNoteCard'
import { GroupNoteDatas } from '../components/singlegroup/GroupNoteDatas'
import { type NextPageWithLayout } from '../types/page'
import Message from './chat'

const SingleGroupMessage: NextPageWithLayout = () => (
  <div className="relative flex w-full justify-center bg-themeBg1 px-[16px] lg:px-2">
    <div className="w-full lg:w-[775px] xl:w-[1066px] 2xl:w-[1140px]">
      <Banner />

      {/* Group Card Data */}
      <div className="mt-14 grid w-full grid-cols-1 justify-between gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {GroupCardDatas.map((item, key) => {
          return (
            <GroupCard
              type={item.type}
              title={item.title}
              subtitle={item.subtitle}
              bgcolor={item.bgcolor}
              icon={item.icon}
              percentage={item.percentage}
              key={key}
            />
          )
        })}
      </div>

      {/* Group About && Group Note */}
      <div className="relative w-full justify-between gap-[24px] lg:flex">
        <GroupAboutCard
          title={'About (Group Name)'}
          subtitle={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit seddolom eiusmod tempor incididunt ut labore et dolore magn.'
          }
        />

        <GroupNoteCard title={'Notes and Files'} noteitems={GroupNoteDatas} />
      </div>

      <h1 className="text-md mb-8 font-bold text-themeBlackText">Home</h1>
      <hr />

      <div className="w-full overflow-x-hidden bg-themeBg1 pt-14">
        <PostCategory />
        <Message />
      </div>
    </div>
  </div>
)

SingleGroupMessage.getLayout = (page: ReactNode) => {
  return <PrimaryLayout title="Dashboard">{page}</PrimaryLayout>
}

export default SingleGroupMessage
