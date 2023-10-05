import { z } from 'zod'
import { protectedProcedure, router } from '../trpc'

export const profileRouter = router({
  /**
   * Desc :   Api to get profile
   * Req  :   ctx, id
   * Res  :   profile
   */
  getProfile: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      const profile = await ctx.prisma.profile.findUnique({
        where: {
          id: input.id,
        },
      })

      return profile
    }),

  /**
   * Desc :   Api to Creat New Profile
   * Req  :   ctx, university, phoneNumber, location, description, website, degree, age, major, keywords
   * Res  :   profile
   */
  createProfile: protectedProcedure
    .input(
      z.object({
        university: z.string(),
        phoneNumber: z.string(),
        location: z.string(),
        description: z.string(),
        website: z.string(),
        degree: z.string(),
        age: z.number(),
        major: z.string(),
        keywords: z.string().array(),
        bio: z.string(),
        instagram: z.string(),
        facebook: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const { university, phoneNumber, location, description, website, degree, age, major, keywords, bio, instagram, facebook } = input

      try {
        const profile = await ctx.prisma.profile.create({
          data: {
            university,
            phoneNumber,
            location,
            description,
            website,
            degree,
            age,
            major,
            keywords,
            bio,
            instagram,
            facebook
          },
        })

        return profile
      } catch (err) {
        console.log(err)
        throw new Error('Error creating profile')
      }
    }),

  /**
   * Desc :   Api to Update profile
   * Req  :   ctx, university, phoneNumber, location, description, website, degree, age, major, keywords
   * Res  :   profile
   */
  updateProfile: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        university: z.string(),
        phoneNumber: z.string(),
        location: z.string(),
        description: z.string(),
        website: z.string(),
        degree: z.string(),
        age: z.number(),
        major: z.string(),
        keywords: z.string().array(),
        bio: z.string(),
        instagram: z.string(),
        facebook: z.string(), 
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const { id, university, phoneNumber, location, description, website, degree, age, major, keywords, bio, instagram, facebook } = input
      try {
        const profile = await ctx.prisma.profile.update({
          where: {
            id,
          },
          data: {
            id: ctx.session.user.id,
            university,
            phoneNumber,
            location,
            description,
            website,
            degree,
            age,
            major,
            keywords,
            bio,
            instagram,
            facebook
          },
        })

        return profile
      } catch (err) {
        console.log(err)
        throw new Error('Error updating profile')
      }
    }),

  /**
   * Desc :   Api to delete profile
   * Req  :   ctx, id
   * Res  :   profile
   */
  deleteProfile: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      try {
        await ctx.prisma.profile.delete({
          where: {
            id: input.id,
          },
        })

        return true
      } catch (err) {
        console.log(err)
        throw new Error('Error deleting profile')
      }
    }),
})
