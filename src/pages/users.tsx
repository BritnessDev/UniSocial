import type { ReactNode } from 'react'
import { PrimaryLayout } from '../components/layouts/primary/PrimaryLayout'
import { UserCard } from '../components/users/UserCard'
import { UsersData } from '../components/users/UsersData'
import { type NextPageWithLayout } from '../types/page'

const Users: NextPageWithLayout = () => (
  <div className="relative flex w-full flex-col bg-themeBg1 px-12 pt-12">
    <div className="mb-7 flex flex-col gap-3">
      <h1 className="text-[22px] font-bold text-themeBlackText">Users</h1>
      <p className="text-lg text-themeGrey3Text">Lorem ipsum dolor sit amet consectetur adipiscing.</p>
    </div>
    <div className="grid gap-x-6 gap-y-8 lg:grid-cols-2 xl:grid-cols-3">
      {UsersData.map((item, index) => (
        <UserCard
          avatar={item.avatar}
          name={item.name}
          job={item.job}
          instagram={item.instagram}
          phone={item.phone}
          key={index}
        />
      ))}
    </div>
  </div>
)

Users.getLayout = (page: ReactNode) => {
  return <PrimaryLayout>{page}</PrimaryLayout>
}

export default Users
