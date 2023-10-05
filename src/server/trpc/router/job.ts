import { z } from 'zod'
import { protectedProcedure, router } from '../trpc'

export const jobRouter = router({
  /**
   * Desc :   Api to get jobs
   * Req  :   ctx
   * Res  :   jobs
   */
  getAll: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.job.findMany({
      include: {
        company: true
      }
    })
  }),
  /**
   * Desc :   Api to get single job by Id
   * Req  :   ctx
   * Res  :   deal
   */
  getJobById: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      try {
        const job = await ctx.prisma.job.findUnique({
          include: {
            user: true,
            company: true
          },
          where: {
            id: input.id,
          },
        })
        return job
      } catch (err) {
        console.log(err)
        throw new Error('Error get single job by Id')
      }
    }),

  /**
   * Desc :   Api to Creat New Job
   * Req  :   ctx, name, description, userId, type, workTime, location, companyId, hourRate, keywords
   * Res  :   job
   */
  createJob: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string(),
        location: z.string(),
        keywords: z.string().array(),
        hourRate: z.number(),
        companyId: z.string(),
        workTime: z.number(),
        type: z.boolean(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const { name, description, location, keywords, hourRate, companyId, workTime, type } = input

      try {
        const job = await ctx.prisma.job.create({
          data: {
            userId: ctx.session.user.id,
            name,
            description,
            location,
            hourRate,
            keywords,
            companyId,
            workTime,
            type,
          },
        })

        return job
      } catch (err) {
        console.log(err)
        throw new Error('Error creating job')
      }
    }),

  /**
   * Desc :   Api to Update Job
   * Req  :   ctx, name, description, userId, type, workTime, location, companyId, hourRate, keywords
   * Res  :   job
   */
  updateJob: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string(),
        description: z.string(),
        location: z.string(),
        keywords: z.string().array(),
        hourRate: z.number(),
        companyId: z.string(),
        workTime: z.number(),
        type: z.boolean(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const { id, name, description, location, keywords, hourRate, companyId, workTime, type } = input
      try {
        const job = await ctx.prisma.job.update({
          where: {
            id,
          },
          data: {
            userId: ctx.session.user.id,
            name,
            description,
            location,
            hourRate,
            keywords,
            companyId,
            workTime,
            type,
          },
        })

        return job
      } catch (err) {
        console.log(err)
        throw new Error('Error updating job')
      }
    }),

  /**
   * Desc :   Api to delete job
   * Req  :   ctx, id
   * Res  :   job
   */
  deleteJob: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      try {
        await ctx.prisma.job.delete({
          where: {
            id: input.id,
          },
        })

        return true
      } catch (err) {
        console.log(err)
        throw new Error('Error deleting job')
      }
    }),
})
