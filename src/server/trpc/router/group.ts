import { z } from 'zod'
import { protectedProcedure, router } from '../trpc'

export const groupRouter = router({
  /**
   * Desc :   Api to get groups
   * Req  :   ctx
   * Res  :   groups
   */
  getAll: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.group.findMany({
      include: {
        members: true
      }
    })
  }),
  /**
   * Desc :   Api to get deal by Id
   * Req  :   ctx
   * Res  :   deal
   */
  getGroupById: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      try {
        const group = await ctx.prisma.group.findUnique({
          include: {
            user: true,
            members: true,
          },
          where: {
            id: input.id,
          },
        })
        return group
      } catch (err) {
        console.log(err)
        throw new Error('Error get single group by Id')
      }
    }),
  /**
   * Desc :   Api to Create New Group
   * Req  :   ctx, name, classCode, description, location, type, isPrivated, photo, files, keywords, userId
   * Res  :   group
   */
  createGroup: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        classCode: z.string(),
        description: z.string(),
        location: z.string(),
        type: z.string(),
        isPrivated: z.boolean(),
        photos: z.string(),
        files: z.string().array(),
        keywords: z.string().array(),
        userId: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const { name, files, classCode, description, location, keywords, type, isPrivated, photos } = input

      try {
        const group = await ctx.prisma.group.create({
          data: {
            userId: ctx.session.user.id,
            name,
            classCode,
            description,
            location,
            type,
            isPrivated,
            keywords,
            files,
            photos,
          },
        })

        return group
      } catch (err) {
        console.log(err)
        throw new Error('Error creating group')
      }
    }),

  /**
   * Desc :   Api to Update Group
   * Req  :   ctx, id, name, classCode, description, location, type, isPrivated, photos, files, keywords, userId
   * Res  :   group
   */
  updateGroup: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string(),
        classCode: z.string(),
        description: z.string(),
        location: z.string(),
        type: z.string(),
        isPrivated: z.boolean(),
        photos: z.string(),
        files: z.string().array(),
        keywords: z.string().array(),
        userId: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const { id, name, files, classCode, description, location, keywords, type, isPrivated, photos } = input

      try {
        const group = await ctx.prisma.group.update({
          where: {
            id,
          },
          data: {
            name,
            classCode,
            description,
            location,
            type,
            isPrivated,
            keywords,
            files,
            photos,
          },
        })

        return group
      } catch (err) {
        console.log(err)
        throw new Error('Error updating group')
      }
    }),

  /**
   * Desc :   Api to delete group
   * Req  :   ctx, id
   * Res  :   group
   */
  deleteGroup: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      try {
        await ctx.prisma.group.delete({
          where: {
            id: input.id,
          },
        })

        return true
      } catch (err) {
        console.log(err)
        throw new Error('Error deleting group')
      }
    }),
})
