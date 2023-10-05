import { z } from 'zod'
import { protectedProcedure, router } from '../trpc'

export const productRouter = router({
  /**
   * Desc :   Api to get products
   * Req  :   ctx
   * Res  :   products
   */
  getAll: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.product.findMany()
  }),

  /**
   * Desc :   Api to get product by Id
   * Req  :   ctx
   * Res  :   product
   */
  getProductById: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      try {
        const product = await ctx.prisma.product.findUnique({
          include: {
            members: true,
            user: true
          },
          where: {
            id: input.id,
          },
        })

        return product
      } catch (err) {
        console.log(err)
        throw new Error('Error get product by Id')
      }
    }),

  /**
   * Desc :   Api to Creat New Product
   * Req  :   ctx, title, description, location, keywords, price, imageUrl, productDate
   * Res  :   product
   */
  createProduct: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        description: z.string(),
        location: z.string(),
        keywords: z.string().array(),
        price: z.number(),
        imageUrls: z.string().array(),
        productDate: z.date(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const { title, description, location, keywords, price, imageUrls, productDate } = input

      try {
        const product = await ctx.prisma.product.create({
          data: {
            userId: ctx.session.user.id,
            title,
            description,
            location,
            price,
            imageUrls,
            keywords,
            productDate,
          },
        })

        return product
      } catch (err) {
        console.log(err)
        throw new Error('Error creating product')
      }
    }),

  /**
   * Desc :   Api to Update Product
   * Req  :   ctx, id, title, description, location, keywords, price, imageUrl, productDate
   * Res  :   product
   */
  updateProduct: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        title: z.string(),
        description: z.string(),
        location: z.string(),
        keywords: z.string().array(),
        price: z.number(),
        imageUrls: z.string().array(),
        productDate: z.date(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const { title, description, location, keywords, price, imageUrls: imageUrls, productDate, id } = input

      try {
        const product = await ctx.prisma.product.update({
          where: {
            id,
          },
          data: {
            title,
            description,
            userId: ctx.session.user.id,
            location,
            price,
            imageUrls,
            keywords,
            productDate,
          },
        })

        return product
      } catch (err) {
        console.log(err)
        throw new Error('Error updating product')
      }
    }),

  /**
   * Desc :   Api to delete product
   * Req  :   ctx, id
   * Res  :   product
   */
  deleteProduct: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      try {
        await ctx.prisma.product.delete({
          where: {
            id: input.id,
          },
        })

        return true
      } catch (err) {
        console.log(err)
        throw new Error('Error deleting product')
      }
    }),
})
