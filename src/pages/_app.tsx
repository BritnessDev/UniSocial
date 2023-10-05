import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import type { NextComponentType } from 'next/types'
import '../styles/globals.css'
import type { NextPageWithLayout } from '../types/page'
import { trpc } from '../utils/trpc'

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout
}
const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  const componentWithLayout = getLayout(<Component {...pageProps} />)

  return <SessionProvider session={pageProps.session}>{componentWithLayout}</SessionProvider>
}

export default trpc.withTRPC(MyApp as NextComponentType)
