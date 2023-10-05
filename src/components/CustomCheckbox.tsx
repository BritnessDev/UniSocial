export interface ICustomCheckbox {
  text: string
  className?: string
  value?: number
}

export const CustomCheckbox: React.FC<ICustomCheckbox> = ({ text, className, value }) => (
  <div className={`${className} mt-[20px] w-full rounded-lg text-themeGray1Text`}>
    <div className="flex items-center">
      <input
        id={'default-checkbox' + value}
        type="checkbox"
        className="h-4 w-4 rounded-lg bg-gray-100 text-blue-600 focus:ring-blue-500"
      />
      <label htmlFor={`default-checkbox${value}`} className="ml-2 cursor-pointer text-[14px] font-medium">
        {text}
      </label>
    </div>
  </div>
)
