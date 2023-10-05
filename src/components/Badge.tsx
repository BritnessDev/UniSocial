interface IBadge {
  text: string | number
  bgcolor: string
}

export const Badge = ({ text, bgcolor }: IBadge) => (
  <span className={`${bgcolor} text-3 h-6 w-[34px] rounded-full text-center text-white`}>{text}</span>
)
