import type { ReactNode } from 'react'
import { useState } from 'react'
import { PrimaryLayout } from '../components/layouts/primary/PrimaryLayout'
import { MsgContact } from '../components/messages/MsgContacts'
import { MsgContainer } from '../components/messages/MsgContainer'
import { type NextPageWithLayout } from '../types/page'

const Message: NextPageWithLayout = () => {
  const [selectUser, setSelectUser] = useState(0)
  const [showMsgContainer, setShowMsgContainer] = useState(false)
  const clickWriteMsg = (index: number) => {
    setSelectUser(index)
    setShowMsgContainer(true)
  }
  const clickBackBtn = () => {
    setShowMsgContainer(false)
  }
  return (
    <div className="relative mt-10 w-full bg-themeBg1 xl:flex">
      <MsgContact clickWriteMsg={clickWriteMsg} showMsgContainer={showMsgContainer} />
      <MsgContainer selectUser={selectUser} clickBackBtn={clickBackBtn} showMsgContainer={showMsgContainer} />
    </div>
  )
}
Message.getLayout = (page: ReactNode) => {
  return <PrimaryLayout>{page}</PrimaryLayout>
}

export default Message
