export interface IMenu {
  item: IMenuItemWithChildren | IMenuItemWithoutChildren
}

interface IAccordionChild {
  name: string
  href: string
}

interface IMenuItemBase {
  name: string
  current: boolean
  CustomIcon: typeof React.ComponentType<{ className?: string }>
}
export interface IHeaderSection {
  sidebarOpen: boolean
  toggleSidebar: () => void
}

export interface IMenuItemWithChildren extends IMenuItemBase {
  childrenlist: IAccordionChild[]
  href?: never
}

export interface IMenuItemWithoutChildren extends IMenuItemBase {
  href: string
  childrenlist?: never
}

export type IMenuItem = IMenuItemWithChildren | IMenuItemWithoutChildren
