import { Cross as Hamburger } from 'hamburger-react'
import { useSidebarContext } from '../../../contexts/sidebar'
import { SearchBox } from '../../UI/SearchBox'
import { UserInfo } from './UserInfo'

interface HeaderProps {
  title: string
}

export const Header: React.FC<HeaderProps> = ({ title = 'Title' }) => {
  const { isSidebarOpen, toggleSidebar } = useSidebarContext()

  return (
    <div className="relative z-10 flex h-[70px] w-full items-center justify-between bg-white px-[10px] shadow-[0_2px_12px_rgba(11,22,44,0.05)] md:px-[30px]">
      <div className="flex items-center">
        <div className="flex lg:hidden">
          <Hamburger size={22} toggled={isSidebarOpen} onToggle={() => toggleSidebar()} />
        </div>
        <div className="hidden lg:flex">
          {!isSidebarOpen && <Hamburger size={22} toggled={isSidebarOpen} onToggle={toggleSidebar} />}
        </div>
        <span className="font-inter text-[18px] font-medium">{title}</span>
        <SearchBox classnames="ml-6 h-[44px] md:flex hidden w-[300px]" placeholder="Search for..." />
      </div>
      <UserInfo />
    </div>
  )
}
