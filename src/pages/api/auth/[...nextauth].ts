import NextAuth, { type NextAuthOptions } from 'next-auth'
import GooogleProvider from 'next-auth/providers/google'
// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from '@next-auth/prisma-adapter'

import { env } from '../../../env/server.mjs'
import { prisma } from '../../../server/db/client'

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id
      }
      return session
    },
    signIn({ user, account, profile }) {
      return true
    },
  },
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  secret: env.JWT_SECRET,
  providers: [
    GooogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  debug: true,
  pages: {
    signIn: '/signin',
    signOut: '/',
    error: '/error', // Error code passed in query string as ?error=
    verifyRequest: '/confirmation', // (used for check email message)
    newUser: '/almost-there', // New users will be directed here on first sign in (leave the property out if not of interest)
  },
}

export default NextAuth(authOptions)
