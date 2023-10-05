import type { ReactNode } from 'react'
import { PrimaryLayout } from '../../components/layouts/primary/PrimaryLayout'
import { EMsgType } from '../../components/setting'
import { NotifyCenter } from '../../components/setting/NotifyCenter'
import { type NextPageWithLayout } from '../../types/page'

const notifyCenterList = {
  unread: 5,
  today: [
    {
      msgType: EMsgType.message,
      Icon: 'jhon.png',
      time_stamp: '1h',
      label: 'Sophie Moore',
      desc: 'Sent you a message',
      read: false,
    },
    {
      msgType: EMsgType.opened_email,
      time_stamp: '2h',
      label: 'Email opened',
      desc: 'John Carter has opened the email you sent',
      read: true,
    },
    {
      msgType: EMsgType.invoice_send,
      time_stamp: '3h',
      label: 'Invoice sent',
      desc: 'The invoice for Google, Inc has been sent',
      read: true,
    },
  ],
  yesterday: [
    {
      msgType: EMsgType.message,
      Icon: 'jhon.png',
      time_stamp: '16h',
      label: 'Sophie Moore',
      desc: 'Sent you a message',
      read: true,
    },
    {
      msgType: EMsgType.product_sold,
      time_stamp: '18h',
      label: '3 product sold!',
      desc: 'Sent you a message',
      read: true,
    },
  ],
  last_week: [
    {
      msgType: EMsgType.message,
      Icon: 'jhon.png',
      time_stamp: 'Oct 26, 2022',
      label: 'Sophie Moore',
      desc: 'Sent you a message',
      read: true,
    },
    {
      msgType: EMsgType.opened_email,
      time_stamp: 'Oct 23, 2022',
      label: 'Email opened',
      desc: 'John Carter has opened the email you sent',
      read: false,
    },
    {
      msgType: EMsgType.invoice_send,
      time_stamp: 'Oct 24, 2022',
      label: 'Invoice sent',
      desc: 'The invoice for Google, Inc has been sent',
      read: false,
    },
  ],
}

const Setting: NextPageWithLayout = () => (
  <div className="flex px-4 py-6 md:p-12">
    <NotifyCenter {...notifyCenterList} />
  </div>
)

Setting.getLayout = (page: ReactNode) => {
  return <PrimaryLayout title="Groups">{page}</PrimaryLayout>
}

export default Setting
