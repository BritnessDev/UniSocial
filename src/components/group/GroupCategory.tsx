import { useState } from 'react'
import { Category } from '../Category'
import { GroupCategoryData } from './GroupsData'

export const GroupCategory: React.FC = () => {
  const [selectCategory, setSelectCategory] = useState(1)
  const clickCategory = (index: number) => setSelectCategory(index)

  return (
    <div className="mt-[24px] flex flex-row gap-[12px]">
      {GroupCategoryData.map((item, i) => (
        <Category
          CustomIcon={item.icon}
          title={item.title}
          selected={selectCategory === i + 1}
          clickCategory={clickCategory}
          index={i + 1}
          key={i}
        />
      ))}
    </div>
  )
}
