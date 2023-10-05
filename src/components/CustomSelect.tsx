import { Listbox, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment, useState } from 'react'
import { classNames } from '../utils/styling'

export interface ISelectOption {
  name: string
  value: string
}

export const CustomSelect = ({ optionsList }: { optionsList: ISelectOption[] }) => {
  const [selected, setSelected] = useState(false)

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="sr-only"> Change published status </Listbox.Label>
          <div className="relative">
            <Listbox.Button className="mt-[16px] flex w-full items-center justify-between rounded-[52px] border border-solid border-themeBorder1 py-[16px] pl-3 pr-3 text-sm font-medium text-black shadow-[0_2px_12px_rgba(11,22,44,0.05)] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-gray-50">
              <span className="sr-only">Change published status</span>
              <p
                className={
                  !selected ? 'ml-2.5 text-sm font-medium text-themeGray4Text' : 'ml-2.5 text-sm font-medium text-black'
                }
              >
                {!selected ? 'Select Optoin' : selected}
              </p>
              <ChevronDownIcon className="h-5 w-5 text-themeGray4Text" aria-hidden="true" />
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute right-0 z-10 mt-2 w-full origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {optionsList.map((option: ISelectOption) => (
                  <Listbox.Option
                    key={option.value}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-themeBlue1 text-white' : 'text-gray-900',
                        'cursor-default select-none border-none p-4 text-sm transition-colors',
                      )
                    }
                    value={option.name}
                  >
                    {({ selected }) => (
                      <div className="flex flex-col">
                        <div className="flex justify-between">
                          <p className={selected ? 'font-semibold' : 'font-normal'}>{option.name}</p>
                        </div>
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
