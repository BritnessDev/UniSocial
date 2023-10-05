import { z } from 'zod'
import { protectedProcedure, router } from '../trpc'

export const settingRouter = router({
  /**
   * Desc :   Api to get notification
   * Req  :   ctx, userId
   * Res  :   notification
   */
  getNotification: protectedProcedure.query(async ({ ctx }) => {
    const notification = await ctx.prisma.notification.findUnique({
      where: {
        id: ctx.session.user.id,
      },
    })

    return notification
  }),

  /**
   * Desc :   Api to get notification
   * Req  :   ctx, isEmailNewMessage, isSmsNewMessage, isEmailNewTasks, isSmsNewTasks, isEmailBillPay, isSmsBillPay, isEmailUpdateAnn, isSmsUpdateAnn
   * Res  :   notification
   */
  updateNotification: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        isEmailNewMessage: z.boolean(),
        isSmsNewMessage: z.boolean(),
        isEmailNewTasks: z.boolean(),
        isSmsNewTasks: z.boolean(),
        isEmailBillPay: z.boolean(),
        isSmsBillPay: z.boolean(),
        isEmailUpdateAnn: z.boolean(),
        isSmsUpdateAnn: z.boolean(),
      }),
    )
    .query(async ({ input, ctx }) => {
      const {
        id,
        isEmailNewMessage,
        isSmsNewMessage,
        isEmailNewTasks,
        isSmsNewTasks,
        isEmailBillPay,
        isSmsBillPay,
        isEmailUpdateAnn,
        isSmsUpdateAnn,
      } = input
      const notification = await ctx.prisma.notification.update({
        where: {
          id,
        },
        data: {
          isEmailNewMessage,
          isSmsNewMessage,
          isEmailNewTasks,
          isSmsNewTasks,
          isEmailBillPay,
          isSmsBillPay,
          isEmailUpdateAnn,
          isSmsUpdateAnn,
        },
      })

      return notification
    }),

  /**
   * Desc :   Api to Add New Api
   * Req  :   ctx,
   * Res  :   pro
   */
  createApi: protectedProcedure
    .input(
      z.object({
        facebook: z.string(),
        twitter: z.string(),
        google: z.string(),
        youtube: z.string(),
        stripe: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const { facebook, twitter, google, youtube, stripe } = input
      
      try {
        const apiSetting = await ctx.prisma.userApiToken.create({
          data: {
            userId: ctx.session.user.id,
            facebook,
            twitter,
            google,
            youtube,
            stripe
          },
        })

        return apiSetting
      } catch (err) {
        console.log(err)
        throw new Error('Error creating apiSetting')
      }
    }),

  /**
   * Desc :   Api to Update ApiSetting
   * Req  :   ctx, id
   * Res  :   ApiSetting
   */
  updateApi: protectedProcedure
    .input(
      z.object({
        facebook: z.string(),
        twitter: z.string(),
        google: z.string(),
        youtube: z.string(),
        stripe: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const { facebook, twitter, google, youtube, stripe } = input
      try {
        const apiSetting = await ctx.prisma.userApiToken.update({
          where: {
            id: ctx.session.user.id,
          },
          data: {
            facebook,
            twitter,
            google,
            youtube,
            stripe
          },
        })

        return apiSetting
      } catch (err) {
        console.log(err)
        throw new Error('Error updating apiSetting')
      }
    }),

  /**
   * Desc :   Api to delete apiSetting
   * Req  :   ctx, id
   * Res  :   apiSetting
   */
  deleteApiSetting: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      try {
        await ctx.prisma.userApiToken.delete({
          where: {
            id: ctx.session.user.id,
          },
        })

        return true
      } catch (err) {
        console.log(err)
        throw new Error('Error deleting apiSetting')
      }
    }),
})
