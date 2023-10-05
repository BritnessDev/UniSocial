import Image from 'next/image'
import { useRouter } from 'next/router'
import Logo from '../assets/img/icons/Logo.svg'
import WelcomeHand from '../assets/img/welcome-hand.webp'
import { CustomCheckbox } from '../components/CustomCheckbox'
import { BlueButton } from '../components/UI/Button'
import { type NextPageWithLayout } from '../types/page'

const checkOptions = [
  'keep my sessions on track and on time',
  'make my sessions more interactive and engaging',
  'make my sessions more interactive and engaging',
  'do all of the above',
]

const Welcome: NextPageWithLayout = () => {
  const router = useRouter()

  const onClickContinue = () => router.push('/almost-there')

  return (
    <div className="mx-auto max-w-screen-2xl px-[15px] md:px-[110px]">
      <div className="flex flex-row items-center pl-[21px] pt-[48px]">
        <Image src={Logo} alt="logo" />
        <div className="ml-[8px] text-[23.1px] font-semibold leading-[25px] tracking-wide text-themeBlackText">
          UniSocial
        </div>
      </div>
      <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between">
        <div className="mt-[34px] max-w-[416px] md:mt-[96px]">
          <div>
            <p className="flex flex-row text-[24px] font-bold leading-[34px] md:text-[30px]">
              👋 Welcome,
              <span className="hidden md:flex">(Name) !</span>
              <span className="flex md:hidden">Saleh!</span>
            </p>
            <p className="mt-[10px] text-base text-[14px] font-medium leading-[30px] text-themeGray1Text md:text-[20px]">
              We want you to get the most out of <br />
              Sessions. Please tell us a little more about yourself.
            </p>
          </div>
          <div>
            <p className="text-[18px mt-[30px] hidden font-bold leading-[28px] text-themeGray2Text md:flex">
              Why are you using UniSocial?
            </p>
            <p className="text-[18px mt-[30px] flex font-bold leading-[28px] text-themeGray2Text md:hidden">
              I would like to:
            </p>

            {checkOptions.map((item, key) => (
              <CustomCheckbox key={key} value={key} text={item} className="bg-[#F5F5F5] py-[14px] pl-[14px]" />
            ))}
            <BlueButton text="Continue" className="mt-[30px]" onClickHandler={onClickContinue} />
          </div>
        </div>
        <div className="hidden lg:flex">
          <Image src={WelcomeHand} alt="welcome-handimage" className="h-[457px] w-[451px]" />
        </div>
      </div>
    </div>
  )
}

export default Welcome
