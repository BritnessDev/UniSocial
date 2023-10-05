import moment from 'moment'
import { useRouter } from 'next/router'
import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'
import type { ISglFeature } from '../../components/feature/single'
import { SingleFeature } from '../../components/feature/single'
import { PrimaryLayout } from '../../components/layouts/primary/PrimaryLayout'
import { type NextPageWithLayout } from '../../types/page'
import { trpc } from '../../utils/trpc'

const singleFeature: ISglFeature = {
  // Description for single feature
  sglCard: {
    title: 'job title',
    summary: 'job summary',
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

const SingleJob: NextPageWithLayout = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true)
  const { id } = router.query;
  const { data: jobData, isLoading: jobLoading } = trpc.job.getJobById.useQuery({
    id: id ? id.toString() : ''
  })

  useEffect(() => {
    if (!jobLoading) {
      setLoading(false)
      singleFeature.sglCard = {
        title: jobData ? jobData.name : '',
        summary: jobData?.description[0] ? jobData?.description[0] : '',
        desc: jobData?.description ? jobData?.description : [],
        website: jobData?.company?.companyEmail ? jobData?.company?.companyEmail : ''
      }
      singleFeature.sglContact = {
        location: jobData?.location ? jobData?.location : '',
        price: jobData?.hourRate ? jobData?.hourRate : 0,
        peopleGoing: jobData?.peopleGoing ? jobData?.peopleGoing : 0,
        website: jobData?.company?.companyWebsite ? jobData?.company?.companyWebsite : '',
        email: jobData?.company?.companyEmail ? jobData?.company?.companyEmail : '',
        date: jobData?.createdAt ? moment(jobData?.createdAt, 'HH:mm:ss a').toString() : moment(moment().format(), 'HH:mm:ss a').toString(),
      }
    }
  }, [jobLoading])
  return (
    loading ? <>loading...</> : <SingleFeature {...singleFeature} />
  )
}

SingleJob.getLayout = (page: ReactNode) => {
  return <PrimaryLayout title="Groups">{page}</PrimaryLayout>
}

export default SingleJob
