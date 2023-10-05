import Image from 'next/image'
import { useRouter } from 'next/router'
import Logo from '../assets/img/icons/Logo.svg'
import { BlueButton } from '../components/UI/Button'
import type { NextPageWithLayout } from '../types/page'

const Confirmation: NextPageWithLayout = () => {
  const router = useRouter()
  const codeInputValues = [0, 1, 2, 3, 4, 5]

  const onClickConfirm = () => router.push('/welcome')

  const nextstep = (e: any): void => {
    e.preventDefault()

    if ((e.key >= 0 && e.key <= 9) || e.key === 'Backspace') {
      if (e.key === 'Backspace') {
        e.target.value = ''
      } else {
        e.target.value = e.key
      }
      const target = e.srcElement || e.target
      const myLength = target.value.length

      if (myLength >= 1) {
        let next = target.nextElementSibling
        while (next) {
          if (next.tagName.toLowerCase() === 'input') {
            next.focus()
            break
          }
          next = target.nextElementSibling
        }
      } else if (myLength === 0) {
        let previous = target.previousElementSibling
        while (previous) {
          if (previous.tagName.toLowerCase() === 'input') {
            previous.focus()
            break
          }
          previous = target.previousElementSibling
        }
      }
    }
  }

  return (
    <div className="signup flex min-h-[100vh] min-w-[100vw] flex-col bg-white">
      {/* Logo Part */}
      <div className="mt-[48px] flex flex-row items-center ph:ml-[40px] sm:ml-[111px] md:ml-[121px] lg:ml-[131px]">
        <Image src={Logo} alt="" />
        <div className="ml-[8px] text-[23.1px] font-semibold leading-[25px] tracking-wide text-themeBlackText">
          UniSocial
        </div>
      </div>

      <div className="mt-[34.5px] w-full md:mt-[96px]">
        <div className="ml-auto mr-auto w-[343px] md:w-[429px]">
          <div className="flex w-full justify-center">
            <div className="w-[219px] md:w-full">
              <h1 className="title font-inter text-center text-[24px] font-bold text-themeBlackText">
                Confirmation Code
              </h1>
              <p className="subtitle mt-[10px] w-full text-center text-[18px] font-normal text-themeGrey3Text">
                Enter the 6-digit confirmation code you’ve just received on your email address
              </p>
            </div>
          </div>

          <div className="mt-[33px] flex h-[90px] w-full items-center justify-between rounded-[10px] border border-solid border-[#BBC1C9] p-[20px] md:mt-[30px]">
            {codeInputValues.map((item, key) => (
              <input
                key={key}
                id={`code${key}`}
                type="text"
                onKeyUp={nextstep}
                className="font-inter h-[50px] w-[40px] rounded-[6px] bg-[#F2F2F2] text-center text-[20px] font-medium text-[#3D474D] md:w-[48.17px]"
                maxLength={1}
              />
            ))}
          </div>

          <div className="mt-[48px] flex cursor-pointer items-center justify-center text-themeBlue1 hover:underline md:mt-[30px]">
            <span className="font-medium">
              Resend Code &nbsp;
              <svg
                className="inline"
                width="5"
                height="8"
                viewBox="0 0 5 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.226889 1.21255C-0.0739372 0.937833 -0.0739372 0.492599 0.216862 0.208407C0.367275 0.0663114 0.557798 0 0.758349 0C0.948872 0 1.1394 0.0663114 1.27978 0.208407L4.77939 3.49556C4.91978 3.62818 5 3.80817 5 3.99763C5 4.18709 4.91978 4.36708 4.77939 4.4997L1.27978 7.78686C0.988982 8.07105 0.517688 8.07105 0.216862 7.78686C-0.0739372 7.51214 -0.0739372 7.05743 0.226889 6.78271L3.18501 3.99763L0.226889 1.21255Z"
                  fill="#4170FF"
                />
              </svg>
            </span>
          </div>

          <BlueButton text="Next" className="mt-[24px] md:mt-[30px]" onClickHandler={onClickConfirm} />
        </div>
      </div>
    </div>
  )
}

export default Confirmation
