interface IGroupAboutType {
  title: string
  subtitle: string
}

export const GroupAboutCard: React.FC<IGroupAboutType> = ({ title, subtitle }) => (
  <div className="mt-14 mb-14 h-[450px] w-full rounded-3xl border border-solid border-themeBorder1 bg-white px-8 pt-6 shadow-[0_2_10_rgba(25,93,194,0.07)] lg:h-[366px] xl:h-[318px]">
    <h1 className="text-base font-bold text-themeBlackText">{title}</h1>
    <hr className="mx-auto mt-5 mb-5" />
    <h3 className="text-sm leading-[26px] text-themeBlackText">{subtitle}</h3>
  </div>
)
