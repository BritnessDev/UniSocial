import { ExclamationCircleIcon } from '@heroicons/react/24/outline'
import { ToggleButton } from '../UI/Toggle'

export interface ISettingNotification {
  setting: boolean[][]
}

export const notificationSettings = [
  {
    label: 'New messages',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  },
  {
    label: 'New tasks',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  },
  {
    label: 'Billing and payments',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  },
  {
    label: 'Updates and announcements',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  },
]

export const SettingNotification: React.FC<ISettingNotification> = ({ setting }) => (
  <div className="w-full divide-y rounded-[24px] border-[1px] border-solid border-themeBorder1 bg-white shadow-eventcard">
    <div className="flex justify-between px-4 py-6 md:px-8">
      <p className="text-base font-bold text-themeBlackText md:text-2xl">Notification Settings</p>
      <div className="flex items-center justify-center">
        <p className="px-6 font-bold">Email</p>
        <p className="px-6 font-bold">SMS</p>
      </div>
    </div>
    {setting?.map((item, key) => (
      <div key={key} className="flex justify-between px-4 py-6 md:px-8">
        <div className="flex flex-col justify-center">
          <div className="flex items-center font-bold text-themeBlackText">
            {notificationSettings[key]?.label} <ExclamationCircleIcon className="ml-2 w-5 text-themeGray4Text" />
          </div>
          <div className="mt-1 text-[14px] text-themeGrey3Text">{notificationSettings[key]?.desc}</div>
        </div>
        <div className="flex items-center justify-center">
          <div className="px-3.5 md:pr-6">
            <ToggleButton enabled={item[0] ? item[0] : false} />
          </div>
          <div className="px-3.5 md:px-6">
            <ToggleButton enabled={item[1] ? item[1] : false} />
          </div>
        </div>
      </div>
    ))}
  </div>
)
