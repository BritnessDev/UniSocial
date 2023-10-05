export interface INewsPreviewPanel {
  previewImg: string
  title: string
  content: string
}

export const NewsPreviewPanel: React.FC<INewsPreviewPanel> = ({ previewImg, title, content }) => (
  <div className="w-full rounded-[24px] border border-solid border-themeBorder1 bg-white px-[24px] pb-[32px] shadow-eventcard">
    <div className="mt-[32px] mb-[16px] border-b-[1px] border-themeBorder1 pb-[16px]">
      <p className="h-[16px] text-[14px]">{title}</p>
      <p className="mt-[8px] text-[21px] font-bold">{content}</p>
    </div>
    <img src={previewImg} className=" h-[300px] w-full rounded-tl-[16px] rounded-tr-[16px]" alt="" />
  </div>
)
