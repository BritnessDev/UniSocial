import type { StaticImageData } from 'next/image'
import Image from 'next/image'

interface IBannerButton {
  text: string
  icon?: StaticImageData
}

export const IconBannerButton: React.FC<IBannerButton> = ({ text, icon }) => (
  <button className="ml-[6px] mr-[6px] flex cursor-pointer items-center rounded-[57px] border border-solid border-themeBorder1 bg-white pl-[24px] pr-[24px] pt-[14px] pb-[14px] shadow-3xl hover:bg-opacity-80">
    {icon && <Image src={icon} width={18} height={18} className="mr-[7.5px]" alt="" />}
    <span className="text-[14px] font-[500] text-themeBlackText">{text}</span>
  </button>
)

export interface IIconButton {
  buttonIcon: React.ReactNode
  className?: string
}

export const IconButton: React.FC<IIconButton> = ({ buttonIcon, className }) => (
  <button
    type="button"
    className={`inline-flex items-center rounded-full border border-transparent p-1 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
  >
    {buttonIcon}
  </button>
)

export interface ButtonInterface {
  text: string
  className?: string
  onClickHandler?: () => void
}

export const BlueButton: React.FC<ButtonInterface> = ({ text, className, onClickHandler }) => (
  <button
    type="button"
    className={`${className} mt-[10px] h-[52px] w-full rounded-[46px] bg-themeBlue px-5 py-2.5 text-sm font-medium text-white shadow-[0_4px_10px_rgba(2,87,251,0.19)] transition-colors hover:bg-blue-600 focus:outline-none focus:ring-themeBlue`}
    onClick={() => (onClickHandler ? onClickHandler() : null)}
  >
    <div className="flex flex-row items-center justify-center text-white">{text}</div>
  </button>
)

export interface ISocialButton {
  text: string
  icon: string
  className?: string
  onClickHandler?: (e?: string) => void
  type?: string
}

export const SocialButton = ({ text, icon, className, onClickHandler, type }: ISocialButton) => (
  <button
    type="button"
    className={`${className} mt-[18px] flex h-[54px] w-full items-center justify-center rounded-[46px] border border-solid border-themeBorder1 bg-white px-5 py-2.5 text-sm font-medium text-black shadow-eventcard transition-colors hover:border-2 hover:bg-[#e2ebf7] focus:outline-none focus:ring-themeBlue`}
    onClick={() => (onClickHandler ? onClickHandler(type) : '')}
  >
    <Image src={icon} className="inline-block" alt="" />
    <span className="ml-[8px] flex flex-row items-center justify-center text-[14px] text-themeBlackText">{text}</span>
  </button>
)

export interface IButton {
  children?: React.ReactNode
  className: string
  onClickHandler?: (e?: string) => void
  type?: string
}

export const Button: React.FC<IButton> = ({ children, className, onClickHandler, type }) => {
  return (
    <button
      type="button"
      onClick={() => {
        onClickHandler ? (type ? onClickHandler(type) : onClickHandler()) : null
      }}
      className={`${className} flex items-center justify-center rounded-[46px] border border-solid border-themeBorder1 px-5 py-2.5 text-sm font-medium shadow-eventcard transition-colors hover:border-2 focus:outline-none focus:ring-themeBlue`}
    >
      {children}
    </button>
  )
}

export interface IRoundButton {
  className?: string
  icon: string
}

export const RoundButton = ({ className, icon }: IRoundButton) => (
  <button
    type="button"
    className={`${className} flex h-[34px] w-[34px] items-center justify-center rounded-[20px] border border-solid border-[#E9EAF3] bg-white shadow-[0_2px_10px_rgba(25,93,194,0.07)] hover:bg-[#E9EAF3]`}
  >
    <Image src={icon} className="inline-block" alt="" />
  </button>
)
