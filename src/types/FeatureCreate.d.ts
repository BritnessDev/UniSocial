import type { StaticImageData } from 'next/image'
export interface IFeatureItem {
  Icon: StaticImageData
  title: string
  desc: string
  kind?: string
}

export interface IFeatureCreateModal {
  open: boolean
  setOpen: (boolean) => void
  kind: string
  title?: string
  name?: string
  price?: number
  keywords?: string[]
}
