import Picker from '@emoji-mart/react'
import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import type { KeyboardEvent } from 'react'
import { useEffect, useRef, useState } from 'react'
import Emotion from '../../assets/img/emotion.svg'
import File from '../../assets/img/file.svg'
import backBtn from '../../assets/img/icons/backBtn.svg'
import MsgAvatar2 from '../../assets/img/messageAvatar2.png'
import Phone from '../../assets/img/phone.svg'
import Pin from '../../assets/img/pin.svg'
import Send from '../../assets/img/send.svg'
import { NetStatus } from '../NetStatus'

import { MsgContactData, MsgListData } from './MsgData'

export enum EContentType {
  Image = 'Image',
  File = 'File',
  Text = 'Text',
}

interface IMsgHeaderData {
  avatar: StaticImageData
  name: string
  status?: boolean
}

interface IMsgHeader {
  headerData: IMsgHeaderData
  clickBackBtn: () => void
}

const MsgHeader: React.FC<IMsgHeader> = (
  { headerData, clickBackBtn }, // message list header
) => (
  <div className="border-b border-[#DEDEDE] px-6 py-4">
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-2.5">
        <Image src={backBtn} className="block h-8 w-8 sm:hidden" alt="" onClick={() => clickBackBtn()} />
        <Image src={headerData?.avatar} className="h-12 w-12" alt="" />
        <div>
          <p className="text-sm text-themeBlackText">{headerData?.name}</p>
          <div className="mt-1 flex flex-row items-center gap-1 ">
            <NetStatus status={headerData?.status} />
          </div>
        </div>
      </div>
      <div className="flex h-[38px] cursor-pointer flex-row items-center gap-1 rounded-full bg-themeBlue px-[14px] py-2 shadow-[0_4px_10px_rgba(2,87,251,0.19)] hover:bg-themeBlue1">
        <Image src={Phone} alt="" />
        <p className="w-[51px] text-xs text-white">Call now</p>
      </div>
    </div>
  </div>
)

interface IMsgContentData {
  content: string | StaticImageData | Blob | MediaSource | any
  contentType?: EContentType
  msgType?: boolean
}

const MsgTextContent: React.FC<IMsgContentData> = (
  { content, msgType }, // message view of text
) => (
  <div
    className={`${
      msgType ? 'bg-themeBlue' : 'bg-themeBg1'
    } w-fit rounded-[10px] lg:max-w-[379px] xl:max-w-[295px] 2xl:max-w-[369px]`}
  >
    <p className={`px-4 py-3 text-sm ${msgType ? 'text-white' : 'text-themeBlackText'}`}>{content.toString()}</p>
  </div>
)

const MsgImageContent: React.FC<IMsgContentData> = (
  { content }, // message view of Image
) => <Image src={content} alt="" width="376" height="293" />

const MsgFileContent: React.FC<IMsgContentData> = (
  { content }, // message view of file
) => (
  <div className="flex flex-row gap-2 rounded-[10px] bg-themeBg1 px-4  py-3">
    <Image src={File} alt="" />
    <p className="text-sm text-themeBlackText">{content.toString()}</p>
  </div>
)

interface IMsgData {
  avatar: StaticImageData
  msgContentList: IMsgContentData[]
  time: string
  msgType?: boolean
}

const MsgPanel: React.FC<IMsgData> = (
  { avatar, msgContentList, time, msgType }, // contain sent and received messages of same minutes
) => (
  <div className={`flex w-full flex-row ${msgType ? 'flex-row-reverse' : ''} gap-3`}>
    <Image src={avatar} className="h-10 w-10" alt="" />
    <div className={`flex flex-col gap-3 ${msgType ? 'items-end' : ''}`}>
      {msgContentList.map((item: IMsgContentData, i) => {
        const { content, contentType } = item
        return contentType === EContentType.Text ? ( // when message content is text
          <MsgTextContent content={content} msgType={msgType} key={i} />
        ) : contentType === EContentType.Image ? ( // when message content is image
          <MsgImageContent content={content} key={i} />
        ) : (
          // when message content is file
          <MsgFileContent content={content} key={i} />
        )
      })}
      <div>
        <p className="text-[12px] text-[#989AAD]">{time}</p>
      </div>
    </div>
  </div>
)

interface IMsgList {
  msgList: IMsgData[]
}

const MsgList: React.FC<IMsgList> = ({ msgList }) => {
  // message view lists
  //  history of messages
  useEffect(() => {
    msgListRef.current?.scrollTo(0, msgListRef.current?.scrollHeight)
  }, [msgList])
  const msgListRef = useRef<HTMLDivElement>(null)
  return (
    <div className="h-[calc(100vh-290px)] overflow-y-auto border-b border-themeBorder1 p-6" ref={msgListRef}>
      {msgList.map((item, i) => (
        <MsgPanel
          avatar={item?.avatar}
          msgContentList={item?.msgContentList}
          time={item?.time}
          msgType={item?.msgType}
          key={i}
        />
      ))}
      <div className="h-[50px] sm:h-[160px]"></div>
    </div>
  )
}

interface IMsgAction {
  sendMsg: (msg: string, type: EContentType) => void
  sendImage: (image: Blob | MediaSource, type: string) => void
}

interface IEmotionEventData {
  native: string
}

const MsgAction: React.FC<IMsgAction> = ({ sendMsg, sendImage }) => {
  // contain message action buttons
  // action btn container upload image add emotion and input text
  const [msg, setMsg] = useState('')
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)

  const clickSendBtn = () => {
    // call when send button press
    if (msg.length != 0) {
      sendMsg(msg, EContentType.Text)
      setMsg('')
    }
  }

  const keyDownInput = (e: KeyboardEvent<HTMLInputElement>) => {
    // when press enter key, send message and empty value of input
    if (e.key === 'Enter') {
      sendMsg(msg, EContentType.Text)
      setMsg('')
    }
  }

  const uploadFile = (e: any) => {
    // upload files and images
    if (!e.target.files) return
    if (e.target.files?.[0].type.indexOf('image') != -1) {
      sendImage(e.target.files?.[0], EContentType.Image)
      return
    }
    sendMsg(e.target.files?.[0].name, EContentType.File)
  }

  const addEmotion = (e: IEmotionEventData) => {
    // add emotion to input tag
    setMsg((msg) => msg + e.native)
  }

  const inputFileRef = useRef<HTMLInputElement | null>(null)
  return (
    <div className="flex flex-row px-4 py-6">
      <div className="flex cursor-pointer flex-row items-center gap-1 md:gap-4">
        <Image src={Pin} alt="" onClick={() => inputFileRef.current?.click()} />
        <input type="file" className="hidden" ref={inputFileRef} onChange={(e) => uploadFile(e)} />
        <div>
          <Image src={Emotion} onClick={() => setShowEmojiPicker(!showEmojiPicker)} alt="" />
          <div className={`${showEmojiPicker ? 'block' : 'hidden'} absolute bottom-[60px]`}>
            <Picker onEmojiSelect={addEmotion} />
          </div>
        </div>
      </div>
      <div className="w-[calc(100%_-_120px)] md:ml-14 md:w-[calc(100%_-_190px)]">
        <div className="flex h-11 items-center rounded-full border border-solid border-themeBorder1 bg-white px-[18px] py-[13px]">
          <input
            type="text"
            className="font-inter ml-[8px] w-full text-sm font-medium text-themeGrey3Text outline-none"
            placeholder="Search messages"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            onKeyDown={(e) => keyDownInput(e)}
          />
        </div>
      </div>
      <div
        className="shadow-[0_2.75px_6.875px_rgba(2, 87, 251, 0.19)] ml-3.5 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-themeBlue hover:bg-themeBlue1"
        onClick={() => clickSendBtn()}
      >
        <Image src={Send} alt="" />
      </div>
    </div>
  )
}

interface IMsgContainer {
  selectUser: number
  clickBackBtn: () => void
  showMsgContainer: boolean
}

export const MsgContainer: React.FC<IMsgContainer> = ({ selectUser, clickBackBtn, showMsgContainer }) => {
  const initialList: IMsgData[] = MsgListData

  const defaultHeaderData = { avatar: MsgAvatar2, name: 'Sophie Moore', status: true }

  const HeaderData = MsgContactData[selectUser] ?? defaultHeaderData

  const [msgList, setMsgList] = useState(initialList)

  const sendMsg = (msg: string, type: EContentType) => {
    // when message content is text and file
    const newMsgList: IMsgData[] = [...msgList]
    newMsgList.push({
      avatar: MsgAvatar2,
      msgContentList: [
        {
          content: msg,
          contentType: type,
        },
      ],
      time: type == EContentType.Image ? '' : '8:00 AM',
      msgType: true,
    })
    setMsgList(newMsgList)
  }

  const sendImage = (image: Blob | MediaSource) => {
    // when message content is image
    const newMsgList: IMsgData[] = [...msgList]
    newMsgList.push({
      avatar: MsgAvatar2,
      msgContentList: [
        {
          content: URL.createObjectURL(image),
          contentType: EContentType.Image,
        },
      ],
      time: '',
      msgType: true,
    })
    setMsgList(newMsgList)
  }

  return (
    <div
      className={`${
        showMsgContainer ? 'block' : 'hidden'
      } w-full bg-white sm:mx-12 sm:mt-10 sm:block sm:rounded-[30px] sm:border sm:border-themeBorder1 sm:shadow-eventcard`}
      style={{ width: '-webkit-fill-available' }}
    >
      <MsgHeader headerData={HeaderData} clickBackBtn={clickBackBtn} />
      <MsgList msgList={msgList} />
      <MsgAction sendMsg={sendMsg} sendImage={sendImage} />
    </div>
  )
}
