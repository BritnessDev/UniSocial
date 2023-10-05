import { Dialog, Transition } from '@headlessui/react'
import { ArrowUpTrayIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Fragment, useState } from 'react'
import type { IFeatureCreateModal } from '../../../types/FeatureCreate'
import { trpc } from '../../../utils/trpc'
import { Category } from '../../Category'
import { CustomInput } from '../../UI/CustomInput'
import { CoinBox } from '../../UI/PriceBox'

export const FeatureCreateModal: React.FC<IFeatureCreateModal> = ({ open, setOpen, title, name, keywords, kind }) => {
  const [keywordInedex, setKeywordIndex] = useState(0)
  const [inputTitle, setTitle] = useState('')
  const [inputDescription, setDescription] = useState('')
  const [inputCoinValue, setCoinValue] = useState('')

  const mutationCreatProduct = trpc.product.createProduct.useMutation()
  const mutationCreatEvent = trpc.event.createEvent.useMutation()

  const onClickPublish = async () => {
    const arrKeywords = keywords ? keywords[keywordInedex] : ''
    let newItem
    if (kind == 'product') {
      newItem = await mutationCreatProduct.mutateAsync({
        title: inputTitle,
        description: inputDescription,
        location: 'location',
        keywords: arrKeywords ? [arrKeywords] : [],
        price: Number(inputCoinValue),
        imageUrls: ['product1.png'],
        productDate: new Date(),
      })
    } else if (kind == 'event') {
      newItem = await mutationCreatEvent.mutateAsync({
        title: inputTitle,
        description: inputDescription,
        location: 'location',
        imageUrls: ['product1.png'],
        peopleGoing: 0,
        keywords: arrKeywords ? [arrKeywords] : [],
        eventDate: new Date(),
        price: Number(inputCoinValue),
      })
    }

    if (newItem) setOpen(false)
    else alert('failed creating new product')
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative max-h-[80vh] max-w-[343px] transform overflow-y-auto rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:w-full sm:p-6 md:max-w-[637px]">
                <div className="absolute top-0 right-0 pt-4 pr-4">
                  <button
                    type="button"
                    className="rounded-[28px] bg-[#F0F0F1] p-2 text-gray-400 hover:text-gray-500 focus:outline-none"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
                <div className="w-full sm:flex sm:items-start">
                  <div className="mt-3 w-full sm:mt-0">
                    <Dialog.Title className="text-[20px] font-bold leading-7 text-[#383940]">{title}</Dialog.Title>
                    <div className="mt-[36px] text-[14px] font-bold text-themeGrey4Text">{name}</div>
                    <CustomInput
                      placeholder="Figma UI UX Design Essentials"
                      className="h-[54px] w-full border-[1px] border-solid border-themeBorder1 text-[14px] text-[#34353F]"
                      type="text"
                      value={inputTitle}
                      onHandlerSetTitle={setTitle}
                    />
                    <div className="mt-2.5 text-[12px] text-themeGray3Text">
                      Maximum 140 characters. No HTML or Emoji allowed
                    </div>
                    <div className="mt-[36px] text-[14px] font-bold text-themeGrey4Text">Description</div>
                    <textarea
                      rows={4}
                      name="comment"
                      id="comment"
                      className="mt-[9px] block w-full rounded-[22px] border-[1px] border-solid border-themeBorder1 p-4 shadow-[0_2px_12px_rgba(11,22,44,0.05)] outline-none focus:border-[1px]"
                      placeholder="Say something about you... "
                      value={inputDescription}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                    <div className="mt-3.5 text-[12px] text-themeGray3Text">
                      A short description of the product. This will be displayed on the product welcome page
                    </div>
                    <div className="mt-[36px] text-[14px] font-bold text-themeGrey4Text">Price and Keywords</div>
                    <div className="mt-1 text-[15px] font-medium text-themeGray3Text">
                      Set your price and select the tags closest to your product.
                    </div>
                    <div className="mt-[23px] text-[14px] font-bold text-themeGrey4Text">Price is</div>
                    <CoinBox
                      placeholder="0.00"
                      classnames="w-full flex h-[54px] mt-2.5"
                      value={inputCoinValue}
                      onHandlerCoinValue={setCoinValue}
                    />
                    <div className="mt-6 flex max-w-[343px] flex-wrap gap-x-2 gap-y-3">
                      {keywords?.map((item, key) => (
                        <div className=" w-fit" key={key}>
                          <Category
                            title={item}
                            key={key}
                            selected={keywordInedex === key}
                            clickCategory={(index) => setKeywordIndex(index)}
                            index={key}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="mt-[23px] text-[14px] font-bold text-themeGrey4Text">Product Thumbnail/Images</div>
                    <div className="flex w-full justify-center sm:items-center sm:border-gray-200 sm:pt-5">
                      <div className="mt-1 w-full bg-themeBg1 sm:col-span-2 sm:mt-0">
                        <div className="flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                          <div className="space-y-1 text-center">
                            <ArrowUpTrayIcon className="mx-auto h-[41px] w-[42px] text-[#9D9DA1]" />
                            <div className="flex text-sm text-gray-600">
                              <label
                                htmlFor="file-upload"
                                className="relative cursor-pointer rounded-md font-medium focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                              >
                                <span>Drag and drop</span>
                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                              </label>
                              <p className="pl-1">or browse to choose a file</p>
                            </div>
                            <p className="text-xs text-themeGray3Text">PNG, JPG, GIF are allowed</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 text-[12px] text-themeGray3Text">
                      This image will be used to display this product when your members view their Library. Recommended
                      dimensions of 1280x720.
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex gap-2">
                  <div
                    className={`py-4.5 flex h-[52px] w-1/2 min-w-fit cursor-pointer items-center justify-center gap-3 rounded-[44px] border-[1px] border-solid
                                    border-themeBorder1 bg-white text-themeBlackText shadow-[0_2px_12px_rgba(11,22,44,0.05)]`}
                  >
                    <h1 className={`text-[14px] text-themeBlackText`}>Discard</h1>
                  </div>

                  <div
                    className={`py-4.5 flex h-[52px] w-1/2 min-w-fit cursor-pointer items-center justify-center gap-3 rounded-[44px] border-[1px] border-solid
                                    border-themeBorder1 bg-themeBlue text-white shadow-[0_2px_12px_rgba(11,22,44,0.05)]`}
                    onClick={() => onClickPublish()}
                  >
                    <h1 className={`text-[14px] text-white`}>Publish</h1>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
