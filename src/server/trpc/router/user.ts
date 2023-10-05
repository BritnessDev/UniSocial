import { z } from 'zod'
import type { DataItem, IItems, ISimilarItem } from '../../../types/router'
import { protectedProcedure, publicProcedure, router } from '../trpc'

enum DataType {
  JOBS = 'job',
  PRODUCTS = 'product',
  EVENTS = 'event',
  GROUPS = 'group',
}

export const getSortedArrayBySmt = async ({ keywords, ctx, dataType, takenCnt }: IItems): Promise<ISimilarItem[]> => {
  let datas = []
  if (!keywords?.length) return []

  if (dataType !== DataType.GROUPS) datas = await ctx.prisma[dataType].findMany({})
  else
    datas = await ctx.prisma[dataType].findMany({
      include: {
        members: true,
        user: true,
      },
    })
  const similarityResults: ISimilarItem[] = []
  datas.map((item: DataItem, key: number): void => {
    let smt = 0
    let filteredArray
    if (keywords?.length) filteredArray = keywords.filter((value: string) => item?.keywords.includes(value))
    smt = filteredArray.length
    similarityResults[key] = { key, smt, item }
  })

  // sort array
  const recommendedSimilarity = similarityResults.sort(
    (item1: ISimilarItem, item2: ISimilarItem) => item1.smt - item2.smt,
  )

  return recommendedSimilarity.slice(0, takenCnt)
}

export interface ITeamAccount {
  user: {
    name: string
    photo: string
    email: string
  },
  role: string
  date: string
}

export const userRouter = router({
  getUserProfile: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      const profile:any = await ctx.prisma.user.findUnique({
        where: {
          id: input.id,
        },
        include: {
          Profile: true,
          OwnerGroup: true,
          ApiSetting: true
        }
      })
      
      const groupMember = await ctx.prisma.group.findUnique({
        where: {
          id: profile?.OwnerGroup[0]?.id ? profile?.OwnerGroup[0]?.id : ''
        },
        include: {
          members: true
        }
      })
      const teamAccount:ITeamAccount[] = [];
      groupMember?.members.map((item:any) => {
        teamAccount.push({
          user: {
            name: item.name,
            photo: item.image,
            email: item.email
          },
          role: item.role,
          date: profile?.OwnerGroup[0]?.createdAt.toString()
        })
      })
      const notificationSetting = await ctx.prisma.notification.findFirst({
        where: {
          userId: input.id
        }
      })
      const notification = [
        [notificationSetting?.isEmailNewMessage, notificationSetting?.isSmsNewMessage],
        [notificationSetting?.isEmailNewTasks, notificationSetting?.isSmsNewTasks],
        [notificationSetting?.isEmailBillPay, notificationSetting?.isSmsBillPay],
        [notificationSetting?.isEmailUpdateAnn, notificationSetting?.isSmsUpdateAnn]
      ]
      const apiSetting = [
        {
          label: "Facebook Ads Integration",
          token: profile?.ApiSetting[0]?.facebook
        },
        {
          label: "Twitter API Integration",
          token: profile?.ApiSetting[0]?.twitter
        },
        {
          label: "Google Analytics Integration",
          token: profile?.ApiSetting[0]?.google
        },
        {
          label: "YouTube Integration",
          token: profile?.ApiSetting[0]?.youtube
        },
        {
          label: "Stripe Payments Integration",
          token: profile?.ApiSetting[0]?.stripe
        }
      ]
      return {
        profile,
        teamAccount,
        notification,
        apiSetting,
      }
    }),

  /**
   * Desc :   Api for Dashboard Page
   * Req  :   ctx
   * Res  :   { trendNews, events, products }
   */
  getDashboardData: publicProcedure.query(async ({ ctx }) => {
    const trendNews = await ctx.prisma.trendNews.findFirst()
    const events = await ctx.prisma.event.findMany({
      take: 10,
      orderBy: {
        createdAt: 'desc',
      },
    })
    const products = await ctx.prisma.product.findMany({
      take: 10,
      orderBy: {
        createdAt: 'desc',
      },
    })
    const groups = await ctx.prisma.group.findMany({
      include: {
        members: true,
        user: true,
      },
      take: 10,
      orderBy: {
        createdAt: 'desc',
      },
    })
    console.log({trendNews, events, products, groups})
    return { trendNews, events, products, groups }
  }),

  hello: publicProcedure.query(() => {
    return {
      greeting: 'hello world',
    }
  }),

  /**
   * Desc :   Update Profile
   * Req  :   ctx, profile informations, N/A
   * Res  :   user updated
   */
  modifyUserProfile: protectedProcedure
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
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const { university, phoneNumber, location, description, website, degree, age, major, keywords } = input
      // Update the profile on the prisma database using the ctx
      const profile = await ctx.prisma.profile.update({
        where: {
          id: ctx.session.user.id,
        },
        data: {
          university,
          phoneNumber,
          location: ctx.session.user.id,
          description,
          website,
          degree,
          age,
          keywords,
        },
      })

      return profile
    }),

  /**
   * Desc :   For You Similarity Algorithm
   * Req  :   ctx
   * Res  :   {products, jobs, events}
   */
  getRecommendData: protectedProcedure.query(async ({ ctx }) => {
    const profile = await ctx.prisma.profile.findFirst({
      where: {
        id: ctx.session.user.id,
      },
    })
    // get recommend
    const recJobs = await getSortedArrayBySmt({
      keywords: profile?.keywords,
      ctx,
      dataType: DataType.JOBS,
      takenCnt: 5,
    })
    const recProducts = await getSortedArrayBySmt({
      keywords: profile?.keywords,
      ctx,
      dataType: DataType.PRODUCTS,
      takenCnt: 5,
    })
    const recEvents = await getSortedArrayBySmt({
      keywords: profile?.keywords,
      ctx,
      dataType: DataType.EVENTS,
      takenCnt: 5,
    })

    const recGroups = await getSortedArrayBySmt({
      keywords: profile?.keywords,
      ctx,
      dataType: DataType.GROUPS,
      takenCnt: 5,
    })
    // end recommend
    const recommendData = { recJobs, recProducts, recEvents, recGroups }
    return recommendData
  }),
})
