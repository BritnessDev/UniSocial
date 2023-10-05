export const CustomInput: React.FC<any> = ({ placeholder, type, className, value, onHandlerSetTitle }) => {
  return (
    <input
      className={`${className} my-[8px] h-[54px] w-full rounded-[52px] border-[1px] border-themeBorder1 pl-[20px] pr-[20px] text-[14px] text-black shadow-[0_2px_12px_rgba(11,22,44,0.05)] outline-none focus:border-[1px] focus:border-blue-100`}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={(e) => onHandlerSetTitle(e.target.value)}
    />
  )
}
