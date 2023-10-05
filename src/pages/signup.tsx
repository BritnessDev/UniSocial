import Image from 'next/image'
import { useRouter } from 'next/router'
import FaceBookIcon from '../assets/img/facebookicon.svg'
import GoogleIcon from '../assets/img/googleicon.svg'
import Logo from '../assets/img/icons/Logo.svg'
import SignupBanner from '../assets/img/signup_banner.png'
import { CustomCheckbox } from '../components/CustomCheckbox'
import { CopyRight } from '../components/signup/CopyRight'
import { Title } from '../components/signup/Title'
import { BlueButton, SocialButton } from '../components/UI/Button'
import { CustomInput } from '../components/UI/CustomInput'
import { type NextPageWithLayout } from '../types/page'

const SignUp: NextPageWithLayout = () => {
  const router = useRouter()

  const onClickSignUp = () => router.push('/confirmation')

  return (
    <div className="signup flex min-h-[100vh] min-w-[100vw] flex-col bg-themeBg1">
      <div className="flex h-[calc(100vh-74px)]">
        <div className="left-form-container flex h-full w-[100vw] justify-center lg:w-[61vw] lg:pl-[110px] lg:pr-[162px] xl:w-[49vw]">
          <div className="w-full px-[32px] lg:w-[434px] lg:px-[0px]">
            <div className="flex flex-row items-center pl-[6px] pt-[48px] md:pl-[21px]">
              <Image src={Logo} alt="" />
              <div className="ml-[8px] text-[23.1px] font-semibold leading-[25px] tracking-wide text-themeBlackText">
                UniSocial
              </div>
            </div>

            <div className="w-full">
              <Title
                title="Create an account"
                subtitle="Connect with your classmates, lorem epsum fund and the world around you on UniSocial"
              />

              <CustomInput placeholder="Full Name" type="text" className="mt-[10px] border-none focus:border-solid" />
              <CustomInput placeholder="Email address" type="email" className="border-none focus:border-solid" />
              <CustomInput placeholder="Password" type="password" className="border-none focus:border-solid" />
              <BlueButton text="Sign up" onClickHandler={onClickSignUp} />

              <CustomCheckbox text="Accept terms and conditions." />

              <SocialButton text="Sign up with Google" icon={GoogleIcon} className="" />
              <SocialButton text="Sign up with Facebook" icon={FaceBookIcon} className="" />
            </div>
          </div>
        </div>

        <div className="right-banner-container hidden items-center justify-center bg-[#E0ECFC] lg:flex lg:h-full lg:w-[39vw] xl:w-[51vw]">
          <Image src={SignupBanner} alt="" className="h-[502px] w-[325px] xl:h-[736px] xl:w-[477px]" />
        </div>
      </div>

      <CopyRight />
    </div>
  )
}

export default SignUp
