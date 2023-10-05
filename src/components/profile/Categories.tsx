import { Category } from '../Category'
import { CategoryData } from './ProfileData'

interface Categories {
  selectCategory: number
  setSelectCategory: (index: number) => void
}

export const Categories: React.FC<Categories> = ({ selectCategory, setSelectCategory }) => (
  <div className="flex w-full flex-row gap-3">
    {CategoryData.map((item, index) => (
      <Category
        CustomIcon={item.icon}
        title={item.title}
        selected={selectCategory == index}
        clickCategory={() => {
          setSelectCategory(index)
        }}
        index={index}
        key={index}
      />
    ))}
  </div>
)
