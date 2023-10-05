import Image from 'next/image'
import Location from '../../assets/img/location.svg'

interface ICompany {
  title: string
  company: string
  content: string
  city: string
  price: number
}

const CompaniesItemHeader: React.FC<{ title: string; company: string }> = ({ title, company }) => (
  <div>
    <h1 className="text-[22px] font-bold text-themeBlackText">{title}</h1>
    <p className="text-#0B0E2C text-[16px]">{company}</p>
  </div>
)

const CompaniesItemContent: React.FC<{ content: any }> = ({ content }) => (
  <ul className="ml-[20px] list-disc leading-[21px]">
    {content.map((item: string, i: number) => (
      <li className="" key={i}>
        {item}
      </li>
    ))}
  </ul>
)

const CompaniesItemCity: React.FC<{ city: any }> = ({ city }) => (
  <div>
    <p className="text-[11px] font-medium text-themeGrey3Text">LOCATION</p>
    <div className="mt-[10px] flex flex-row">
      <Image src={Location} alt="" />
      <p className="ml-[8px]">{city}</p>
    </div>
  </div>
)

const CompaniesItemJobType: React.FC = () => (
  <div className="flex flex-row">
    <div className="cursor-pointer rounded-[57px] border-[1px] border-themeBorder1 px-[24px] py-[8px] shadow-3xl">
      <p className="w-[58px] text-[14px]">Part-time</p>
    </div>
    <div className="ml-[8px] cursor-pointer rounded-[57px] border-[1px] border-themeBorder1 px-[24px] py-[8px] shadow-3xl">
      <p className="w-[95px] text-[14px]">Urgently Hiring</p>
    </div>
  </div>
)

const CompaniesItemAction: React.FC<{ price: any }> = ({ price }) => (
  <div className="flex">
    <div className="flex h-[38px] cursor-pointer items-center justify-center rounded-[26px] bg-[#1476FF] px-[22px] py-[12px] font-bold shadow-3xl">
      <p className="text-[14px] text-[white]">Apply</p>
    </div>
    <div className="ml-[8px] flex h-[38px] cursor-pointer items-center justify-center rounded-[26px] border-[1px] border-themeBorder1 bg-[white] px-[22px] py-[12px] underline shadow-3xl">
      <p className="w-[125px] text-[14px] text-themeBlackText">Starting at ${price}/hour</p>
    </div>
  </div>
)

export const CompaninesItem: React.FC<{ data: ICompany }> = ({ data }) => {
  const { title, company, content, city, price } = data

  return (
    <div className="grid grid-cols-1 gap-[22px] rounded-[30px] bg-[white] p-[24px]">
      <CompaniesItemHeader title={title} company={company} />
      <div className="h-[1px] w-full border-b-[1px] border-themeBorder1"></div>
      <CompaniesItemContent content={content} />
      <CompaniesItemCity city={city} />
      <CompaniesItemJobType />
      <div className="h-[1px] w-full border-b-[1px] border-themeBorder1"></div>
      <CompaniesItemAction price={price} />
    </div>
  )
}
