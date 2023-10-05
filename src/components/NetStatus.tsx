export const NetStatus = ({ status }: { status?: boolean }) => (
  <span className={`${status ? 'bg-[#14CA74]' : 'bg-themeBorder1'} h-[5px] w-[5px] rounded-full text-themeGrey3Text`} />
)
