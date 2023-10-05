interface ITitle {
  title: string
  subtitle: string
}
export const Title: React.FC<ITitle> = ({ title, subtitle }) => (
  <>
    {/* Title & SubTitle Part */}
    <div className="form-container mt-[78.34px]">
      <h1 className="title font-inter text-[24px] font-bold text-themeBlackText">{title}</h1>
      <p className="subtitle mt-[9px] w-full text-[18px] font-normal text-themeGrey3Text lg:w-[429px] lg:text-[14px]">
        {subtitle}
      </p>
    </div>
  </>
)
