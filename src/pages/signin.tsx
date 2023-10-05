import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import GoogleIcon from '../assets/img/googleicon.svg'
import Logo from '../assets/img/icons/Logo.svg'
import { BlueButton, SocialButton } from '../components/UI/Button'
import { CustomInput } from '../components/UI/CustomInput'
import { type NextPageWithLayout } from '../types/page'

const SignIn: NextPageWithLayout = () => {
  const router = useRouter()
  const { data: session, status } = useSession()
  if (session) router.push('/')
  return (
    <div className="signup flex min-h-[100vh] min-w-[100vw] flex-col bg-themeBg1">
      <div className="ml-[20px] mt-[48px] flex flex-row items-center lg:ml-[130px]">
        <Image src={Logo} alt="" />
        <div className="ml-[8px] text-[23.1px] font-semibold leading-[25px] tracking-wide text-themeBlackText">
          UniSocial
        </div>
      </div>

      <div className="mt-[42.5px] ml-auto mr-auto flex w-full flex-col pr-[20px] pl-[20px] lg:mt-[124.34px] lg:flex lg:w-[1012px] lg:flex-row lg:justify-between lg:pr-0 lg:pl-0">
        <div className="left-form-container flex w-full justify-center lg:w-[416px]">
          <div className="flex w-full flex-col ">
            <label className="text-center text-[24px] font-bold leading-[34px] md:text-[30px]">👋 Welcome Back</label>
            <label className="mt-[10px] text-center text-[14px] font-medium leading-[24px] text-themeGray1Text lg:text-[20px] lg:leading-[30px]">
              Log in
            </label>
            <SocialButton
              text="Sign up with Google"
              icon={GoogleIcon}
              className="mt-[30px]"
              onClickHandler={signIn}
              type="google"
            />
            {/* <SocialButton text="Sign up with Facebook" icon={FaceBookIcon} onClickHandler={signIn} type="facebook" /> */}
            <span className="mt-[30px] hidden cursor-pointer text-center text-[14px] font-medium leading-[20px] text-themeGray1Text hover:text-black lg:block">
              or with other services
            </span>
          </div>
        </div>

        <div className="relative mt-[32px] mb-[32px] h-[41px] lg:mt-0 lg:mb-0 lg:h-auto">
          <div className="absolute left-[calc(50%-0.5px)] hidden h-[403px] border-l border-solid border-themeBorder2 lg:block"></div>
          <hr className="absolute top-[20px] block w-full border border-solid border-themeBorder2 lg:hidden" />
          <div className="absolute left-[calc(50%-20.5px)] flex h-[41px] w-[41px] items-center justify-center rounded-[33px] bg-themeBorder2 lg:top-[75px]">
            <label className="text-[16px] font-bold leading-[22px] text-[#3D474D]">or</label>
          </div>
        </div>

        <div className="right-banner-container flex w-full justify-center lg:flex lg:w-[428px] ">
          <div className="flex w-full flex-col">
            <label className="text-[20px] font-medium leading-[34px] text-themeBlackText">
              With your email address
            </label>
            <div className="mt-[30px] w-full">
              <label className="font-inter text-[14px] font-bold leading-[16px]">Email</label>
              <CustomInput
                placeholder="Email address"
                type="text"
                className="mt-[10px] border-none focus:border-solid"
              />
              <label className="font-inter mt-[16px] text-[14px] font-bold leading-[16px]">Password</label>
              <CustomInput
                placeholder="Password"
                type="password"
                className="mt-[10px] border-none focus:border-solid"
              />
              <span className="mt-[16px] cursor-pointer text-[13px] font-medium leading-[20px] text-themeBlue1">
                Forgot password
              </span>
              <BlueButton text="Log in" className="mt-[30px]" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[32px] mb-[105px] flex justify-center lg:mt-[105px]">
        <label className="text-[14px] font-medium leading-[20px] text-themeGray1Text">New to workstream</label>
        <label className="ml-[13px] cursor-pointer text-[14px] font-semibold leading-[22px] text-themeBlue1">
          Create an account
        </label>
      </div>
    </div>
  )
}

export default SignIn
