import Image from 'next/image'
import Logo from '../assets/img/icons/Logo.svg'
import Lock from '../assets/img/lock.svg'
import { CopyRight } from '../components/signup/CopyRight'
import { BlueButton } from '../components/UI/Button'
import { CustomInput } from '../components/UI/CustomInput'
import { type NextPageWithLayout } from '../types/page'

const ResetPassword: NextPageWithLayout = () => (
  <div className="flex min-h-[100vh] flex-col justify-between bg-themeBg1">
    <div className="flex justify-center">
      <div className="flex w-[1440px] flex-col items-center justify-start pt-[62.66px]">
        <div className="flex flex-row items-center">
          <Image src={Logo} alt="" />
          <div className="ml-[8px] text-[23.1px] font-semibold leading-[25px] tracking-wide text-themeBlackText">
            UniSocial
          </div>
        </div>
        <div className="mt-[73px] flex w-[342px] flex-col items-center justify-between rounded-[30px] bg-white py-[40px] px-[16px] md:mt-[147.34px] md:w-[586px] md:px-[64px]">
          <div className="flex w-[275px] flex-col items-center justify-center text-center">
            <Image src={Lock} alt="" />
            <div className="text-[20px] font-semibold text-themeBlackText">Reset your password</div>
            <div className="mt-[16px] text-[14px] text-themeGrey3Text">
              Vitae turpis viverra a egestas urna sodales neque nunc et dolor sem sociis dictum amet ullamcorper lorem
              facilisi.
            </div>
          </div>
          <div className="mt-[32px] w-[310px] md:w-[458px]">
            <CustomInput placeholder="Email address" type="email" className="border-none focus:border-solid" />
            <BlueButton text="Reset Password" className="mt-[16px]" />
          </div>
        </div>
      </div>
    </div>
    <CopyRight />
  </div>
)

export default ResetPassword
