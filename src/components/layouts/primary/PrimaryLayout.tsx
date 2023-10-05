import Head from 'next/head'
import React, { useState } from 'react'
import { SidebarContext } from '../../../contexts/sidebar'
import { Footer } from '../Footer'
import { Sidebar } from '../sidebar/Sidebar'
import { Header } from '../topbar/Header'
export interface IPrimaryLayout {
  children: React.ReactNode
  title?: string
}

export const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children, title = '' }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen)

  return (
    <>
      <Head>
        <title>UniSocial</title>
      </Head>
      <div className="relative flex w-full flex-row">
        {/* Opacity Background For Navbar */}
        <div
          className={`fixed top-0 left-0 z-[1] h-screen w-screen bg-[#00000066] lg:z-[0] lg:hidden ${
            !isSidebarOpen ? 'hidden' : ''
          }`}
          onClick={() => setSidebarOpen(false)}
        />

        <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
          <Sidebar />

          <div className="z-[0] w-full lg:z-[1]">
            <Header title={title} />
            <main className="col-span-2 bg-themeBg1 pb-[100px] md:pb-0">{children}</main>
            <Footer />
          </div>
        </SidebarContext.Provider>
      </div>
    </>
  )
}
