import { z } from 'zod'
import { protectedProcedure, router } from '../trpc'

export const dealRouter = router({
  /**
   * Desc :   Api to get deals
   * Req  :   ctx
   * Res  :   deals
   */
  getAll: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.deal.findMany()
  }),
  /**
   * Desc :   Api to get deal by Id
   * Req  :   ctx
   * Res  :   deal
   */
  getDealById: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      try {
        const deal = await ctx.prisma.deal.findUnique({
          include: {
            user: true,
          },
          where: {
            id: input.id,
          },
        })

        return deal
      } catch (err) {
        console.log(err)
        throw new Error('Error get deal by Id')
      }
    }),
  /**
   * Desc :   Api to Creat New Deal
   * Req  :   ctx, description, location, keywords, price, imageUrl, dealDate, peopleGoing
   * Res  :   deal
   */
  createDeal: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        description: z.string(),
        location: z.string(),
        keywords: z.string().array(),
        price: z.number(),
        peopleGoing: z.number(),
        imageUrls: z.string().array(),
        dealDate: z.date(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const { title, description, location, keywords, price, peopleGoing, imageUrls, dealDate } = input

      try {
        const deal = await ctx.prisma.deal.create({
          data: {
            userId: ctx.session.user.id,
            title,
            description,
            location,
            price,
            peopleGoing,
            imageUrls,
            keywords,
            dealDate,
          },
        })

        return deal
      } catch (err) {
        console.log(err)
        throw new Error('Error creating deal')
      }
    }),

  /**
   * Desc :   Api to Update Deal
   * Req  :   ctx, id, description, location, keywords, price, imageUrl, dealDate, peopleGoing
   * Res  :   deal
   */
  updateDeal: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        title: z.string(),
        description: z.string(),
        location: z.string(),
        keywords: z.string().array(),
        price: z.number(),
        peopleGoing: z.number(),
        imageUrls: z.string().array(),
        dealDate: z.date(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const { title, description, location, keywords, price, peopleGoing, imageUrls, dealDate, id } = input
      try {
        const deal = await ctx.prisma.deal.update({
          where: {
            id,
          },
          data: {
            userId: ctx.session.user.id,
            title,
            description,
            location,
            price,
            peopleGoing,
            imageUrls,
            keywords,
            dealDate,
          },
        })

        return deal
      } catch (err) {
        console.log(err)
        throw new Error('Error updating deal')
      }
    }),

  /**
   * Desc :   Api to delete Deal
   * Req  :   ctx, id
   * Res  :   deal
   */
  deleteDeal: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      try {
        await ctx.prisma.deal.delete({
          where: {
            id: input.id,
          },
        })

        return true
      } catch (err) {
        console.log(err)
        throw new Error('Error deleting deal')
      }
    }),
})
