export interface IItems {
  keywords: Profile['keywords']
  ctx: Context
  dataType: DataType
  takenCnt: number
}

export type DataItem = Job | Product | Event

interface ISimilarItem {
  key: number
  smt: number
  item: DataItem
}
