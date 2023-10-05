import { BellIcon, Cog6ToothIcon, PencilIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import type { ESettingOpt } from '.'
const settingList = [
  {
    label: 'Account',
    Icon: PencilIcon,
  },
  {
    label: 'Team',
    Icon: UserGroupIcon,
  },
  {
    label: 'Notifications',
    Icon: BellIcon,
  },
  {
    label: 'API',
    Icon: Cog6ToothIcon,
  },
]

export interface ISettingPanel {
  settingOpt: ESettingOpt
  setSettingOpt: (opt: number) => void
}

export const SettingPanel: React.FC<ISettingPanel> = ({ settingOpt, setSettingOpt }) => (
  <div className="h-fit w-full rounded-[24px] border-[1px] border-solid border-themeBorder1 bg-white p-6 pb-20 shadow-eventcard xl:w-[272px] xl:min-w-[272px]">
    <p className="text-lg font-bold text-themeBlackText">Settings</p>
    <hr className="border-0.5 my-6 border-themeBorder1" />
    {settingList.map((item, key) => (
      <div
        key={key}
        className={`flex cursor-pointer flex-row rounded-lg p-[13px] font-medium ${
          key === settingOpt ? 'bg-themeBg2 text-themeBlue' : 'bg-white text-themeGrey3Text'
        }`}
        onClick={() => {
          setSettingOpt(key)
        }}
      >
        <item.Icon className="w-5" />
        <p className="ml-[11px]">{item.label}</p>
      </div>
    ))}
  </div>
)
