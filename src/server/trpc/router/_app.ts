import { router } from '../trpc'
import { authRouter } from './auth'
import { dealRouter } from './deal'
import { eventRouter } from './event'
import { groupRouter } from './group'
import { jobRouter } from './job'
import { productRouter } from './product'
import { profileRouter } from './profile'
import { userRouter } from './user'
export const appRouter = router({
  auth: authRouter,
  user: userRouter,
  event: eventRouter,
  product: productRouter,
  deal: dealRouter,
  group: groupRouter,
  job: jobRouter,
  profile: profileRouter
})

// export type definition of API
export type AppRouter = typeof appRouter
