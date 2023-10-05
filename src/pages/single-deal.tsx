import { useRouter } from 'next/router'
import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'
import type { ISglFeature } from '../components/feature/single'
import { SingleFeature } from '../components/feature/single'
import { PrimaryLayout } from '../components/layouts/primary/PrimaryLayout'
import { type NextPageWithLayout } from '../types/page'
import { trpc } from '../utils/trpc'

const mockFeature: ISglFeature = {
  // Description for single feature
  sglCard: {
    title: '(Event Name)',
    summary: 'Event Name',
    desc: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'],
    website: 'google.com',
  },
  // Contact Info for single feature
  sglContact: {
    location: 'San Francisco, CA',
    price: 300,
    peopleGoing: 260000,
    website: 'google.com',
    email: 'support@google.com',
    date: 'Jan 2, 2021',
  },
  // similar features according to specified feature
  sglList: [
    {
      image: 'event1.svg',
      title: 'Google raises $160B in Series F funding for new technology',
      date: 'Oct 24, 2023',
      link: '#',
    },
    {
      image: 'event2.svg',
      title: 'Google claims to be the #1 player in the analytics industry',
      date: 'March 15, 2023',
      link: '#',
    },
    {
      image: 'event3.svg',
      title: 'Google CEO steps-back, new CEO comes in',
      date: 'Jan 12, 2023',
      link: '#',
    },
  ],
  // Location(City Name)
  location: '/company.svg',
  // Image
  photo: '',
}

const SingleEvent: NextPageWithLayout = () => {
  const [singleFeature, setSingleFeature] = useState(mockFeature)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const { data: deal, isLoading: loading1 } = trpc.deal.getDealById.useQuery({
    id: router.query.did && typeof router.query.did == "string" ? router.query.did : '',
  })

  useEffect(() => {
    if (!loading1) {
      setLoading(false)
      // set Mock Data
      mockFeature['sglCard']['title'] = deal?.title ? deal.title : ''
      mockFeature['sglCard']['desc'][0] = deal?.description ? deal.description : ''
      mockFeature['sglContact']['location'] = deal?.location ? deal.location : ''
      mockFeature['sglContact']['price'] = deal?.price ? deal.price : 0
      mockFeature['photo'] = deal?.imageUrls[0] ? deal.imageUrls[0] : ''
      setSingleFeature(mockFeature)
    }
  }, [loading1])
  return loading ? <div>Loading...</div> : <SingleFeature {...singleFeature} />
}

SingleEvent.getLayout = (page: ReactNode) => {
  return <PrimaryLayout title="Groups">{page}</PrimaryLayout>
}

export default SingleEvent
