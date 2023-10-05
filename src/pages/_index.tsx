import { signIn, signOut, useSession } from 'next-auth/react'
import { PrimaryLayout } from '../components/layouts/primary/PrimaryLayout'
import { type NextPageWithLayout } from '../types/page'

const Home: NextPageWithLayout = () => {
  const { data: session, status } = useSession()

  const handleLogInOut = (): void => {
    session ? signOut() : signIn()
  }

  if (status === 'loading') {
    return (
      <section>
        <h1>Loading...</h1>
      </section>
    )
  }

  const header: React.ReactElement = session ? (
    <h1>
      Welcome {session?.user?.email} to <a href="https://nextjs.org">Next.js!</a>
    </h1>
  ) : (
    <h1>Not logged in</h1>
  )

  return (
    <>
      {header}
      <button
        type="button"
        className="m-2 inline-flex items-center rounded border border-transparent bg-indigo-100 px-2.5 py-1.5 text-xs font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={handleLogInOut}
      >
        {session ? 'Sign Out' : 'Sign In'}
      </button>
    </>
  )
}

export default Home

Home.getLayout = (page) => {
  return <PrimaryLayout title="Home">{page}</PrimaryLayout>
}
