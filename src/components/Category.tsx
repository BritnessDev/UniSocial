export interface ICategory {
  CustomIcon?: any
  title?: string
  selected?: boolean
  clickCategory: (index: number) => void
  index: number
  customClass?: string
  textClass?: string
}

export const Category: React.FC<ICategory> = ({
  CustomIcon,
  title,
  selected,
  clickCategory,
  index,
  customClass,
  textClass,
}) => (
  <div
    className={`flex h-[45px] cursor-pointer items-center justify-center gap-3 border-[1px] border-solid border-themeBorder1 py-[14px] px-4 md:px-[20px] bg-${
      selected ? 'themeBlue' : 'white'
    } text-${selected ? 'white' : 'themeBlackText'} min-w-fit rounded-[57px] ${customClass}`}
    onClick={() => clickCategory(index)}
  >
    {CustomIcon ? (
      <CustomIcon
        selected={selected}
        className={`${selected ? 'text-white' : 'text-themeBlackText'} h-[18px] w-[18px]`}
      />
    ) : (
      ''
    )}
    <h1 className={`text-[14px] text-${selected ? 'white' : 'themeBlackText'} ${textClass}`}>{title}</h1>
  </div>
)
