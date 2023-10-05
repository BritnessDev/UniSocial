import { createContext, useContext } from 'react'

export type SidebarContext = {
  toggleSidebar: () => void
  isSidebarOpen: boolean
}

const initialState = {
  toggleSidebar: () => {
    return
  },
  isSidebarOpen: false,
}

export const SidebarContext = createContext<SidebarContext>(initialState)
export const useSidebarContext = () => useContext(SidebarContext)
