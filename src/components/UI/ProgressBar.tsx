export const ProgressBar: React.FC<{ width: number; completed: number; className?: string }> = ({
  width,
  completed,
  className,
}) => {
  const fill = Math.floor(width * completed * 10) / 10

  return (
    <div className={`${className} h-[10px] rounded-[5px] bg-[#E9EAF3]`} style={{ width: width }}>
      <div className={`h-[10px] rounded-[5px] bg-[#14CA74]`} style={{ width: fill }}></div>
    </div>
  )
}
