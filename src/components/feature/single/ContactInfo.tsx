import {
  CalendarIcon,
  CurrencyDollarIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  MapPinIcon,
  UserIcon,
} from '@heroicons/react/20/solid'
import React from 'react'

export interface IContactInfo {
  location: string
  price: number
  peopleGoing: number
  website: string
  email: string
  date: string
  className?: string
}

interface IContactInfoItem {
  label: string
  value: string | number
  Icon: React.FC<{ className: string }>
}

export const ContactInfo: React.FC<IContactInfo> = ({
  location,
  price,
  peopleGoing,
  website,
  email,
  date,
  className,
}) => {
  const ContactInfoItem: React.FC<IContactInfoItem> = ({ label, value, Icon }) => (
    <>
      <p className="mt-5 text-[11px] font-medium uppercase text-themeGrey3Text">{label}</p>
      <div className="mt-2.5 flex">
        <Icon className="w-5 text-themeBlue" />
        <p className="ml-2 text-[15px] text-themeBlackText">{value}</p>
      </div>
    </>
  )
  const constInfoItems: IContactInfoItem[] = [
    {
      label: 'Location',
      Icon: MapPinIcon,
      value: location,
    },
    {
      label: 'Price',
      Icon: CurrencyDollarIcon,
      value: price,
    },
    {
      label: 'Employees',
      Icon: UserIcon,
      value: peopleGoing,
    },
    {
      label: 'Website',
      Icon: GlobeAltIcon,
      value: website,
    },
    {
      label: 'Email',
      Icon: EnvelopeIcon,
      value: email,
    },
    {
      label: 'TIME/DATE',
      Icon: CalendarIcon,
      value: date,
    },
  ]

  return (
    <div className={`${className} h-fit`}>
      <div className="w-full rounded-3xl border-[1px] border-solid border-themeBorder1 bg-white px-8 py-6 shadow-eventcard">
        <p className="text-[15px] font-bold leading-4 text-themeBlackText">Event details</p>
        <hr className="mt-5 border-[1px] border-themeBorder1" />
        {constInfoItems?.map((item, key) => {
          return <ContactInfoItem label={item.label} Icon={item.Icon} value={item.value} key={key} />
        })}
      </div>
    </div>
  )
}
