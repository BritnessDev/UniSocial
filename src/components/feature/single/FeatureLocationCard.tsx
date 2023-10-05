export interface IFeatureLocationCard {
  children?: React.ReactNode
}

export const FeatureLocationCard: React.FC<IFeatureLocationCard> = ({ children }) => {
  return <div className="rounded-6 mt-6 w-full rounded-[24px] bg-white p-8 shadow-eventcard">{children}</div>
}
