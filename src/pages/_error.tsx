import type { ReactNode } from 'react'
import { ErrorPage } from '../components/error/ErrorPage'
import { PrimaryLayout } from '../components/layouts/primary/PrimaryLayout'
import { type NextPageWithLayout } from '../types/page'

const Error: NextPageWithLayout = ({ statusCode, status }) => <ErrorPage status={status} statusCode={statusCode} />
Error.getLayout = (page: ReactNode) => {
  return <PrimaryLayout>{page}</PrimaryLayout>
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode, status: err?.message }
}

export default Error
