import Router from 'next/router'
interface IEventCard {
  previewImg: string
  title: string
  subtitle: string
  onClickHandler?: () => void
  eventId?: string
}

export const EventCard: React.FC<IEventCard> = ({ previewImg, title, subtitle, onClickHandler, eventId }) => (
  <div
    className="my-3 w-fit cursor-pointer rounded-[16px] border border-solid border-themeBorder1 bg-white shadow-eventcard"
    onClick={onClickHandler}
  >
    <img src={previewImg} width={335} height={400} className=" rounded-tl-[16px] rounded-tr-[16px]" alt="" />
    <div className="pt-[32px] pl-[32px] pb-[51.9px]">
      <h1 className="font-inter text-[22px] font-bold">{title}</h1>
      <span
        className="font-inter mt-[8px] cursor-pointer text-[16px] font-medium text-themeBlue hover:underline"
        onClick={() => {
          eventId ? Router.push(eventId) : Router.push('')
        }}
      >
        {subtitle}
      </span>
    </div>
  </div>
)
