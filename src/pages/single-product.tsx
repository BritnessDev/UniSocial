import { useRouter } from 'next/router'
import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'
import type { ISingleProducts } from '../components/feature/single/Products'
import { Products } from '../components/feature/single/Products'
import { PrimaryLayout } from '../components/layouts/primary/PrimaryLayout'
import { trpc } from '../utils/trpc'

const mockProduct: ISingleProducts = {
  category: 'Technology 💻',
  title: 'Apple iPhone 11 (128GB)',
  keywords: ['Used'],
  price: 90,
  location: 'Concordia University',
  owner: {
    userId: '',
    userName: '@anthonyschbai',
  },
  viewedUsers: [
    {
      userId: '',
      image: 'avatar1.png',
    },
    {
      userId: '',
      image: 'avatar2.png',
    },
    {
      userId: '',
      image: 'avatar3.png',
    },
    {
      userId: '',
      image: 'avatar4.png',
    },
  ],
  images: ['product1.png', 'product2.png', 'product3.png', 'product4.png'],
  desc: `<ul style="list-style:disc;">
              <li>15 cm (6.1-inch) Super Retina XDR display</li>
              <li>Cinematic mode adds shallow depth of field and shifts focus automatically in your videos</li>
              <li>Advanced dual-camera system with 12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR recording</li>
              <li>12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording</li>
              <li>A15 Bionic chip for lightning-fast performance</li>
              <li>Up to 19 hours of video playback</li>
              <li>Durable design with Ceramic Shield</li>
              <li>Industry-leading IP68 water resistance</li>
              <li>iOS 15 packs new features to do more with iPhone than ever before</li>
              <li>Supports MagSafe accessories for easy attachment and faster wireless charging</li>
          </ul>`,
  otherProducts: [
    {
      image: 'signup-preview.png',
      productName: 'Local Product1',
      productId: '#',
    },
    {
      image: 'signup1-preview.png',
      productName: 'Local Product1',
      productId: '#',
    },
    {
      image: 'emailconfirmation-preview.png',
      productName: 'Local Product1',
      productId: '#',
    },
  ],
}

export const SingleProduct = () => {
  const [singleProduct, setSingleProduct] = useState(mockProduct)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const { data: product, isLoading: loading1 } = trpc.product.getProductById.useQuery({
    id: router.query.pid && typeof router.query.pid == 'string' ? router.query.pid : '',
  })

  useEffect(() => {
    if (!loading1) {
      setLoading(false)
      // set Mock Data
      mockProduct['desc'] = product && product.description ? product.description : ''
      mockProduct['images'] = product && product.imageUrls ? product.imageUrls : []
      mockProduct['viewedUsers'] =
        product && product.members
          ? product.members.map((member) => {
              return { userId: member.id, image: member.image ? member.image : '' }
            })
          : []
      mockProduct['owner']['userId'] = product && product.userId ? product.userId : ''
      mockProduct['owner']['userName'] = product && product.user.name ? product.user.name : ''
      mockProduct['price'] = product && product.price ? product.price : 0
      mockProduct['location'] = product && product.location ? product.location : ''
      mockProduct['keywords'] = product && product.keywords ? product.keywords : []
      mockProduct['title'] = product && product.title ? product.title : ''

      setSingleProduct(mockProduct)
    }
  }, [loading1])
  return loading ? <div>Loading...</div> : <Products {...singleProduct} />
}

SingleProduct.getLayout = (page: ReactNode) => {
  return <PrimaryLayout title="Groups">{page}</PrimaryLayout>
}

export default SingleProduct
