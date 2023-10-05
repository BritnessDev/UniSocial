import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Avatar from '../../../assets/img/avatar.svg'
import bell from '../../../assets/img/bell.svg'
import downarrow from '../../../assets/img/downarrow.svg'
import RightSearchIcon from '../../../assets/img/rightSearchIcon.svg'

export const UserInfo = () => {
  const { data: session, status } = useSession()
  const router = useRouter()
  return (
    <div className="flex items-center ">
      <Image src={RightSearchIcon} alt="" className="mr-[15.01px] flex md:hidden" />
      <Image src={bell} alt="" className="mr-[15.01px]" />
      <Image src={Avatar} alt="" />
      <div className="ml-[6.87px] hidden cursor-pointer flex-col md:flex">
        <span className="text-[14px] font-medium text-themeBlackText">John Carter</span>
        <span className="text-[12px] font-medium text-themeGrey3Text">Account settings</span>
      </div>

      <div className="group relative w-12">
        <div className="md:text-blue-dark group-hover:border-grey-light flex items-center py-4 text-white no-underline">
          <Image src={downarrow} className="ml-[19.75px] cursor-pointer" alt="" />
        </div>

        <div className="items-left invisible absolute -ml-28 w-auto border bg-white p-2 group-hover:visible">
          <div
            className="hover:bg-grey-lighter block cursor-pointer rounded-md px-4 py-2 hover:bg-slate-100"
            onClick={() => {
              session ? signOut() : router.push('/signin')
            }}
          >
            {session ? 'Logout' : 'Login'}
          </div>
          <hr className="border-grey-ligght mx-2 border-t" />
          <div className="hover:bg-grey-lighter block cursor-pointer rounded-md px-4 py-2 hover:bg-slate-100">
            Logined as administrator
          </div>
        </div>
      </div>
    </div>
  )
}
