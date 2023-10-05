import Image from 'next/image'
import { BlueButton } from '../UI/Button'
import { CustomInput } from '../UI/CustomInput'

export interface ISettingAccount {
  userName: string
  photoUrl: string
  basicInfo?: string
  detailInfo?: string
  email: string
  bio?: string
  inst?: string
  face?: string
  location: string
  univy: string
}

export const SettingAccount: React.FC<ISettingAccount> = ({
  userName,
  photoUrl,
  basicInfo,
  detailInfo,
  email,
  inst,
  face,
  location,
  univy,
}) => (
  <div className="w-full rounded-[24px] border-[1px] border-solid border-themeBorder1 bg-white py-6 px-4 shadow-eventcard md:px-8 md:py-10">
    <p className="text-[22px] font-bold text-themeBlackText">Account</p>
    <hr className="border-0.5 my-6 border-themeBorder1" />
    {/* User photo Part */}
    <div className="flex flex-col items-center justify-between md:flex-row">
      <div className="flex items-center">
        <img
          alt=""
          src={(photoUrl)}
          className="w-16 rounded-full bg-slate-100 md:w-20"
        />
        <div className="ml-4">
          <p className="text-lg font-bold text-themeBlackText">{userName}</p>
          <p className="text-[14px] text-themeGrey3Text">Profile picture size: 400px x 400px</p>
        </div>
      </div>
      <div className="flex cursor-pointer items-center rounded-[57px] border border-solid border-themeBorder1 bg-white px-6 py-2.5 shadow-3xl hover:bg-opacity-80">
        <label
          htmlFor="file-upload"
          className="relative cursor-pointer rounded-md bg-white font-medium text-themeBlackText focus-within:outline-none  hover:text-indigo-500"
        >
          <span className="text-[12px]">Upload new</span>
          <input id="file-upload" name="file-upload" type="file" className="sr-only" />
        </label>
      </div>
    </div>
    <hr className="border-0.5 my-12 border-themeBorder1" />
    <p className="text-lg font-bold text-themeBlackText">Basic information</p>
    <p className="mt-3 text-sm text-themeGrey3Text">{basicInfo}</p>
    <div className="mt-5 flex flex-col md:grid md:grid-cols-2 md:gap-5">
      <div className="text-sm font-bold text-themeGrey4Text">
        <p>Full name</p>
        <CustomInput placeholder={userName} className="font-normal text-themeGrey3Text" />
      </div>
      <div className="text-sm font-bold text-themeGrey4Text">
        <p>Email Address</p>
        <CustomInput placeholder={email} className="font-normal text-themeGrey3Text" />
      </div>
    </div>
    <p className="mt-5 text-sm font-bold text-themeGrey4Text">About biography</p>
    <textarea
      rows={4}
      name="comment"
      id="comment"
      className="mt-[9px] block w-full rounded-[22px] border-[1px] border-solid border-themeBorder1 p-4 text-themeGrey3Text shadow-eventcard outline-none focus:border-[1px]"
      defaultValue={''}
      placeholder="Say something about you... "
    />
    <hr className="border-0.5 my-12 border-themeBorder1" />
    <p className="text-lg font-bold text-themeBlackText">More information</p>
    <p className="mt-3 text-sm text-themeGrey3Text">{detailInfo}</p>
    <div className="mt-6 flex flex-col md:grid md:grid-cols-2 md:gap-5">
      <div className="text-sm font-bold text-themeGrey4Text">
        <p>Instagram</p>
        <CustomInput placeholder={inst} className="font-normal text-themeGrey3Text" />
      </div>
      <div className="text-sm font-bold text-themeGrey4Text">
        <p>Facebook</p>
        <CustomInput placeholder={face} className="font-normal text-themeGrey3Text" />
      </div>
    </div>
    <div className="mt-6 flex flex-col md:grid md:grid-cols-2 md:gap-5">
      <div className="text-sm font-bold text-themeGrey4Text">
        <p>Location</p>
        <CustomInput placeholder={location} className="font-normal text-themeGrey3Text" />
      </div>
      <div className="text-sm font-bold text-themeGrey4Text">
        <p>University</p>
        <CustomInput placeholder={univy} className="font-normal text-themeGrey3Text" />
      </div>
    </div>
    <div className="mt-8 w-full md:w-[142px]">
      <BlueButton text="Save Changes" />
    </div>
  </div>
)
