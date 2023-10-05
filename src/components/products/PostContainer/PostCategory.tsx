import Image from 'next/image'
import { useState } from 'react'
import Plus from '../../../assets/img/icons/Plus.svg'
import { Category } from '../../Category'
import { PostCategoryData } from './PostData'
export const PostCategory: React.FC = () => {
  const [selectCategory, setSelectCategory] = useState(0)
  const clickCategory = (index: number): void => {
    setSelectCategory(index)
  }

  return (
    <div className="items-center justify-between lg:flex">
      <div className="flex flex-row items-center gap-3 ">
        <Category title="All" selected={selectCategory === 0} index={0} clickCategory={clickCategory} />
        {PostCategoryData.map((item, i) => {
          return (
            <Category
              CustomIcon={item.icon}
              title={item.title}
              selected={selectCategory === i + 1}
              clickCategory={clickCategory}
              index={i + 1}
              key={i}
            />
          )
        })}
      </div>

      {/* Create Button */}
      <div className="hidden w-[116px] lg:block">
        <button
          type="button"
          className="mt-2 mr-2 mb-2 flex h-[52px] w-full items-center justify-center rounded-[44px] bg-themeBlue px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-themeBlue dark:hover:bg-themeBlue dark:focus:ring-themeBlue"
        >
          <Image src={Plus} alt="Create" />
          <span className="ml-2 text-sm font-bold">Create</span>
        </button>
      </div>
    </div>
  )
}
