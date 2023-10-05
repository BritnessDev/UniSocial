import Image from 'next/image'
import { useRouter } from 'next/router'
import Business from '../assets/img/cards/Business.svg'
import Docu from '../assets/img/cards/Docu.svg'
import Email from '../assets/img/cards/Email.svg'
import Player from '../assets/img/cards/Player.svg'
import Users from '../assets/img/cards/Users.svg'
import Logo from '../assets/img/icons/Logo.svg'
import WelcomeHand from '../assets/img/welcome-hand.webp'
import type { IInterestedSkill } from '../components/aroundthere/InterestedList'
import { InterestedList } from '../components/aroundthere/InterestedList'
import type { ISelectOption } from '../components/CustomSelect'
import { CustomSelect } from '../components/CustomSelect'
import { BlueButton } from '../components/UI/Button'
import type { NextPageWithLayout } from '../types/page'

const optionsList: ISelectOption[] = [
  {
    name: 'Sales',
    value: 'Sales',
  },
  {
    name: 'Saleh Ahmed',
    value: 'Saleh Ahmed',
  },
  {
    name: 'Enterpreneur',
    value: 'Enterpreneur',
  },
  {
    name: 'Consultant',
    value: 'Consultant',
  },
  {
    name: 'Personal Trainer',
    value: 'Personal Trainer',
  },
  {
    name: 'Educator (teacher, professor, etc)',
    value: 'Educator (teacher, professor, etc)',
  },
  {
    name: 'Creative Professional',
    value: 'Creative Professional',
  },
  {
    name: 'Other',
    value: 'Other',
  },
]
const skillList: IInterestedSkill[] = [
  {
    Icon: Users,
    name: 'City Life',
    clickStatus: false,
  },
  {
    Icon: Users,
    name: 'Party Life',
    clickStatus: false,
  },
  {
    Icon: Business,
    name: 'Business',
    clickStatus: false,
  },
  {
    Icon: Users,
    name: 'Making Friends',
    clickStatus: false,
  },
  {
    Icon: Users,
    name: 'Gaming',
    color: '#FFFFFF',
    clickStatus: false,
  },
  {
    Icon: Users,
    name: 'Studying',
    clickStatus: false,
  },
  {
    Icon: Docu,
    name: 'Music',
    clickStatus: false,
  },
  {
    Icon: Docu,
    name: 'Art',
    clickStatus: false,
  },
  {
    Icon: Users,
    name: 'Fashion',
    clickStatus: false,
  },
  {
    Icon: Player,
    name: 'Courses',
    clickStatus: false,
  },
  {
    Icon: Email,
    name: 'Sports',
    clickStatus: false,
  },
  {
    Icon: Users,
    name: 'Gym',
    clickStatus: false,
  },
]

const AlmostThere: NextPageWithLayout = () => {
  const router = useRouter()

  const onClickDone = () => {
    router.push('/')
  }

  return (
    <div className="mx-auto max-w-screen-2xl px-[15px] md:px-[110px]">
      <div className="flex flex-row items-center pl-[6px] pt-[48px] md:pl-[21px]">
        <Image src={Logo} alt="" />
        <div className="ml-[8px] text-[23.1px] font-semibold leading-[25px] tracking-wide text-themeBlackText">
          UniSocial
        </div>
      </div>
      <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between">
        <div className="mt-[34px] max-w-[416px] md:mt-[96px]">
          <div>
            <p className="flex flex-row text-[24px] font-bold leading-[34px] md:text-[30px]">Almost there 📈</p>
            <p className="mt-[10px] text-base text-[14px] font-medium leading-[30px] text-themeGray1Text md:text-[20px]">
              We just need a few final details.
            </p>
          </div>
          <div>
            <p className="mt-[30px] hidden text-[18px] font-bold leading-[28px] text-themeGray2Text md:flex">
              My major is:
            </p>
            {/* My Major */}
            <CustomSelect optionsList={optionsList} />

            <p className="mt-[30px] text-[18px] font-bold leading-[28px] text-themeGray2Text">
              I am interested in (select all that apply)
            </p>
            <div className="mt-[16px] md:mt-[20px]">
              <InterestedList skillOptions={skillList} />
            </div>

            <BlueButton
              text="Done"
              className="mt-[30px] w-[416px]"
              onClickHandler={() => {
                onClickDone()
              }}
            />
          </div>
        </div>
        <div className="hidden lg:flex">
          <Image src={WelcomeHand} alt="welcome-handimage" className="h-[457px] w-[451px]" />
        </div>
      </div>
    </div>
  )
}

export default AlmostThere
