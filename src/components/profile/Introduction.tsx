import Image from 'next/image'
import ProfileAvatar from '../../assets/img/profile-avatar.png'
import ProfileHeader from '../../assets/img/profile-header.png'

export const Introduction = ({description}: {description: string}) => (
  <div className="relative w-full">
    <Image src={ProfileHeader} className="h-[124px] w-full rounded-t-[30px]" alt="" />
    <div className="absolute top-12 left-12 flex h-32 w-32 items-center justify-center rounded-full bg-white">
      <Image src={ProfileAvatar} className="w-30 h-30 rounded-full" alt="" />
    </div>
    <div className="flex w-full flex-row justify-between bg-white pb-[45px]">
      <div className="mt-4 ml-[195px]">
        <h1 className="text-base font-bold text-themeBlackText sm:text-2xl">John Carter</h1>
        <p className="text-xs text-themeGrey3Text sm:text-base">CEO at Dashly X</p>
      </div>
      <div className="mr-4 mt-[60px] flex h-[38px] w-[104px] items-center justify-center rounded-full border border-themeBorder1 shadow-3xl sm:mt-[25px]">
        <p className="text-xs text-themeBlackText">Edit Profile</p>
      </div>
    </div>
    <div className="flex flex-col gap-8 rounded-b-[30px] bg-white px-8 py-8">
      <div className="border-t border-themeBorder1"></div>
      <h1 className="text-[22px] font-bold text-themeBlackText">About me</h1>
      <div className="flex flex-col gap-5">
        <p className="text-sm text-themeGrey3Text">
          {description}
        </p>
      </div>
    </div>
  </div>
)
