import { z } from 'zod'
import { protectedProcedure, router } from '../trpc'

export const eventRouter = router({
  /**
   * Desc :   Api to get events
   * Req  :   ctx
   * Res  :   events
   */
  getAll: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.event.findMany()
  }),

  /**
   * Desc :   Api to get event by Id
   * Req  :   ctx
   * Res  :   event
   */
  getEventById: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      try {
        const event = await ctx.prisma.event.findUnique({
          include: {
            user: true,
          },
          where: {
            id: input.id,
          },
        })

        return event
      } catch (err) {
        console.log(err)
        throw new Error('Error get event by Id')
      }
    }),

  /**
   * Desc :   Api to Creat New Event
   * Req  :   ctx, description, location, keywords, price, imageUrl, eventDate, peopleGoing
   * Res  :   event
   */
  createEvent: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        description: z.string(),
        location: z.string(),
        keywords: z.string().array(),
        price: z.number(),
        peopleGoing: z.number(),
        imageUrls: z.string().array(),
        eventDate: z.date(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const { title, description, location, keywords, price, peopleGoing, imageUrls, eventDate } = input

      try {
        const event = await ctx.prisma.event.create({
          data: {
            userId: ctx.session.user.id,
            title,
            description,
            location,
            price,
            peopleGoing,
            imageUrls,
            keywords,
            eventDate,
          },
        })

        return event
      } catch (err) {
        console.log(err)
        throw new Error('Error creating event')
      }
    }),

  /**
   * Desc :   Api to Update Event
   * Req  :   ctx, id, description, location, keywords, price, imageUrl, eventDate, peopleGoing
   * Res  :   event
   */
  updateEvent: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        description: z.string(),
        location: z.string(),
        keywords: z.string().array(),
        price: z.number(),
        peopleGoing: z.number(),
        imageUrls: z.string().array(),
        eventDate: z.date(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const { description, location, keywords, price, peopleGoing, imageUrls, eventDate, id } = input
      try {
        const event = await ctx.prisma.event.update({
          where: {
            id,
          },
          data: {
            userId: ctx.session.user.id,
            description,
            location,
            price,
            peopleGoing,
            imageUrls,
            keywords,
            eventDate,
          },
        })

        return event
      } catch (err) {
        console.log(err)
        throw new Error('Error updating event')
      }
    }),

  /**
   * Desc :   Api to delete event
   * Req  :   ctx, id
   * Res  :   event
   */
  deleteEvent: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      try {
        await ctx.prisma.event.delete({
          where: {
            id: input.id,
          },
        })

        return true
      } catch (err) {
        console.log(err)
        throw new Error('Error deleting event')
      }
    }),
})
