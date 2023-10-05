import { CompaninesItem } from "./CompaniesItem"
export const CompaniesListContainer: React.ElementType = ({ jobs }) => (
  <div className="grid gap-[24px]  pt-[24px]  lg:grid-cols-2 xl:grid-cols-3">
    {jobs.map((item: any, i: number) => (
      <CompaninesItem data={{ title: item.name, company: "google", content: item.description, city: item.location, price: item.hourRate }} key={i} />
    ))}
  </div>
)
