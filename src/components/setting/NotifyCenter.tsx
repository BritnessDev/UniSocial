import { CreditCardIcon, CurrencyDollarIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { EMsgType } from '../../components/setting'
import { Button } from '../UI/Button'

export interface INotifyCenter {
  unread: number
  today: INotification[]
  yesterday: INotification[]
  last_week: INotification[]
}
// "message" | "opened_email" | "invoice_send" | "product_solid" | "call"

export interface INotification {
  msgType: number
  Icon?: string
  time_stamp: string
  label: string
  desc: string
  read?: boolean
}

export const Notification: React.FC<INotification> = ({ msgType, Icon, time_stamp, label, desc, read }) => (
  <div className="flex items-center justify-between gap-5 px-2.5 py-5">
    <div className="flex">
      {(msgType === EMsgType.message || msgType === EMsgType.call) && (
        <div>
          <Image
            src={require('../../assets/img/photos/' + Icon)}
            className="h-10 w-10 rounded-full bg-themeBg2"
            alt=""
          />
        </div>
      )}
      {msgType === EMsgType.opened_email && (
        <div className="w-fit rounded-full bg-[#FFF7E8] p-2.5">
          <EnvelopeIcon className="h-4.5 w-5 text-[#FFB016]" />
        </div>
      )}
      {msgType === EMsgType.invoice_send && (
        <div className="w-fit rounded-full bg-themeBg4 p-2.5">
          <CreditCardIcon className="h-4.5 w-5 text-themeBlue" />
        </div>
      )}
      {msgType === EMsgType.product_sold && (
        <div className="w-fit rounded-full bg-[#E4FAED] p-2.5">
          <CurrencyDollarIcon className="h-4.5 w-5 text-[#11D05E]" />
        </div>
      )}
      <div className="ml-3 flex flex-col justify-center text-[12px]">
        <p className="font-bold text-themeBlackText">{label}</p>
        <p className="mt-1 font-medium text-themeGrey3Text">{desc}</p>
      </div>
    </div>
    <div className="flex items-center px-1 text-[10px] font-medium text-themeGrey3Text">
      <p>{time_stamp}</p>
      {read === false && <span className="ml-2 h-1.5 w-1.5 rounded-full bg-red-500"></span>}
    </div>
  </div>
)

export const NotifyCenter: React.FC<INotifyCenter> = ({ unread, today, yesterday, last_week }) => (
  <div className="w-full rounded-[24px] border-[1px] border-solid border-themeBorder1 bg-white py-6 px-4 shadow-eventcard md:px-8 md:py-9">
    <div className="flex items-center justify-between">
      <p className="text-base font-bold text-themeBlackText md:text-2xl">Notifications</p>
      <div className="flex items-center justify-center">
        <Button className="h-9 bg-themeBlue text-white">All</Button>
        <Button className="ml-1 h-9 bg-white text-themeBlackText">
          <div className="flex">
            <span>Unread</span>
            <span className="ml-2 flex w-5 items-center justify-center rounded-full bg-red-500 text-white">
              {unread}
            </span>
          </div>
        </Button>
      </div>
    </div>
    <hr className="mt-8 border-[1px] border-themeBorder1" />
    <div className="mt-8">
      <p className="text-[14px] font-medium text-themeBlackText">Today</p>
      <div className="divide-y">
        {today?.map((item, key) => (
          <Notification {...item} key={key} />
        ))}
      </div>
      <hr className="border-.5 border-themeBorder1" />
      <p className="mt-5 text-[14px] font-medium text-themeBlackText md:mt-8">Yesterday</p>
      <div className="divide-y">
        {yesterday?.map((item, key) => (
          <Notification {...item} key={key} />
        ))}
      </div>
      <hr className="border-.5 border-themeBorder1" />
      <p className="mt-5 text-[14px] font-medium text-themeBlackText md:mt-8">Last week</p>
      <div className="divide-y">
        {last_week?.map((item, key) => (
          <Notification {...item} key={key} />
        ))}
      </div>
    </div>
  </div>
)
