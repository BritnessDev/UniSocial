import Image from 'next/image'
import { useRouter } from 'next/router'
import NotFoundImage from '../../assets/img/404-page.svg'
import { Button } from '../UI/Button'

export interface IErrorPage {
  statusCode: number
  status?: string
}

export const ErrorPage: React.FC<IErrorPage> = ({ statusCode, status = 'Ooops! Page Not Found' }) => {
  const router = useRouter()

  const handleGoHome = (): void => {
    router.push('/')
  }

  return (
    <div className="flex justify-center py-12 sm:py-[88px]">
      <div className="flex justify-center rounded-3xl bg-white pt-[58px] pb-12 shadow-[0_2px_12px_rgb(11,22,44,0.05)] lg:h-[807px] lg:w-[594px] xl:h-[533px] xl:w-[808px] xl:pt-[84px] 2xl:h-[533px] 2xl:w-[882px]">
        <div className="mx-8 flex w-[402px] flex-col justify-center xl:w-full xl:flex-row-reverse ">
          <div className="w-fit self-center">
            <Image src={NotFoundImage} className="w-[230px] sm:w-[346px]" alt="404_image" />
          </div>
          <div className="mt-6 w-fit xl:mt-0">
            <h1 className="text-[80px] font-bold text-themeBlue sm:text-[124px]">{statusCode}</h1>
            <p className="mb-4 text-xl font-bold text-themeBlackText sm:text-2xl">{status}</p>
            <p className="mb-2 text-sm text-themeGrey3Text">Something went wrong...</p>
            <Button
              className="mt-12 h-[52px] w-[142px] bg-themeBlue text-sm text-white shadow-eventcard"
              onClickHandler={handleGoHome}
            >
              Go back home
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
