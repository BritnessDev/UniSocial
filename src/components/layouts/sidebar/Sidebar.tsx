import { Cross as Hamburger } from 'hamburger-react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Setting } from '../../../assets/icons/Index'
import Logo from '../../../assets/img/icons/Logo.svg'
import Plus from '../../../assets/img/icons/Plus.svg'
import { useSidebarContext } from '../../../contexts/sidebar'
import type { IHeaderSection, IMenuItemWithChildren } from '../../../types/layout'
import { Accordion } from './Accordion'
import { NavbarList } from './MenuItemsData'

const settingAccordion: IMenuItemWithChildren = {
  name: 'Settings',
  CustomIcon: Setting,
  current: false,
  childrenlist: [
    {
      name: 'Settings',
      href: '/settings',
    },
    {
      name: 'Notification Center',
      href: '/settings/notifications',
    },
    {
      name: 'Support',
      href: '/settings/support',
    },
  ],
}

const CreateButton: React.FC = () => {
  const router = useRouter()

  return (
    <div className="px-3.5">
      <button
        type="button"
        className="mt-2 mr-2 mb-2 flex h-[52px] w-full items-center justify-center rounded-[44px] bg-themeBlue px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-themeBlue dark:hover:bg-themeBlue dark:focus:ring-themeBlue"
        onClick={() => {
          router.push('/create-feature')
        }}
      >
        <Image src={Plus} alt="Create" />
        <span className="ml-[8px] text-[14px] font-bold">Create</span>
      </button>
    </div>
  )
}

const HeaderSection: React.FC<IHeaderSection> = ({ sidebarOpen, toggleSidebar }) => (
  <div
    className={`flex h-[78px] flex-row items-center px-[21px] pt-[28px] ${
      sidebarOpen ? 'justify-between' : 'justify-center'
    }`}
  >
    <div className="flex flex-row items-center">
      <Image src={Logo} alt="" />
      {sidebarOpen && (
        <div className="ml-[8px] text-[18px] font-medium tracking-wide text-themeBlackText">UniSocial</div>
      )}
    </div>
    {sidebarOpen && <Hamburger duration={0.3} size={22} toggled={sidebarOpen} onToggle={() => toggleSidebar()} />}
  </div>
)

const SettingsSection: React.FC = () => (
  <div className="flex flex-grow flex-col overflow-y-auto bg-white px-[14px] pb-4">
    <div className="flex w-full flex-grow flex-col items-center">
      <div className="w-full flex-1 space-y-1 bg-white" aria-label="Sidebar">
        <Accordion item={settingAccordion} />
      </div>
    </div>
  </div>
)

const NavigationItems: React.FC = () => (
  <div className="mb-1 flex flex-grow flex-col items-center overflow-y-auto bg-white px-[14px]">
    <div className="flex w-full flex-grow flex-col items-center">
      <div className="w-full flex-1 space-y-1 bg-white" aria-label="Sidebar">
        {NavbarList.map((item, index) => (
          <Accordion item={item} key={index} />
        ))}
      </div>
    </div>
  </div>
)

export const Sidebar: React.FC = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebarContext()

  return (
    <div
      className={`invisible fixed z-10 h-full border-r border-[#E9EAF3] bg-white duration-200 ease-in lg:visible lg:relative ${
        isSidebarOpen ? '!visible w-[247px] xl:w-[300px]' : 'w-[83px]'
      }`}
    >
      <HeaderSection sidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <hr className="color-themeBorder1 mx-4 mt-4 mb-8" />

      <NavigationItems />

      {isSidebarOpen && <CreateButton />}

      <hr className="color-themeBorder1 my-10 mx-3" />

      <SettingsSection />
    </div>
  )
}
