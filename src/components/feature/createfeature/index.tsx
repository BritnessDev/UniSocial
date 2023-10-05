import { useState } from 'react'
import type { IFeatureItem } from '../../../types/FeatureCreate'
import { SearchBox } from '../../UI/SearchBox'
import { FeatureCreateModal } from './FeatureCreateModal'
import { FeatureTypeItem } from './FeatureTypeItem'
import { featureTypes } from './FeatureTypeList'

export const FeatureTypeList: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [kind, setModalKind] = useState('product')
  const [title, setModalTitle] = useState('Product')

  return (
    <div className="w-full rounded-[20px] border-[1px] border-solid border-[#EFEFEF] bg-white px-6 py-6">
      <div className="heading-base">Chose Name</div>
      <div className="mt-[13px] w-full">
        <SearchBox classnames="h-[54px] flex" placeholder="e.g. Free guide on Creating your.." />
      </div>
      <div className={'heading-base mt-6'}>Chose Type</div>
      <div className="mt-4 flex w-full flex-col gap-4 md:gap-6 lg:grid lg:grid-cols-2">
        {featureTypes.map((item: IFeatureItem, i: number) => {
          return (
            <div
              key={i}
              onClick={() => {
                setOpen(true)
                setModalKind(item.kind ? item.kind : 'product')
                setModalTitle(item.title ? item.title : 'Product')
              }}
            >
              <FeatureTypeItem item={item} />
            </div>
          )
        })}
      </div>
      <FeatureCreateModal
        open={open}
        setOpen={setOpen}
        kind={kind}
        title={`Local ${title}`}
        name={`${title} Title`}
        keywords={['teacher', 'student']}
      />
    </div>
  )
}
