import { Disclosure } from '@headlessui/react'
import Link from 'next/link'
import { useSidebarContext } from '../../../contexts/sidebar'
import type { IMenu } from '../../../types/layout'
import { classNames } from '../../../utils/styling'

export const Accordion: React.FC<IMenu> = ({ item }) => {
  const { isSidebarOpen } = useSidebarContext()
  const { CustomIcon, name, childrenlist, current, href } = item
  
  return !childrenlist ? (
    <Link
      key={name}
      href={href}
      className={classNames(
        current
          ? 'bg-themeBg2 text-themeGrey4Text'
          : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-themeGrey4Text',
        'flex items-center justify-center rounded-md py-3 px-2 text-base font-medium',
      )}
    >
      <CustomIcon
        className={classNames(
          current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
          'mr-3 h-6 w-6 flex-shrink-0',
        )}
        aria-hidden="true"
      />
      {isSidebarOpen && <span className="ml-2.5 flex-1">{name}</span>}
    </Link>
  ) : (
    <Disclosure as="div" key={name}>
      {({ open }) => (
        <>
          <Disclosure.Button
            className={classNames(
              'flex justify-center bg-white text-gray-600 hover:bg-gray-50 hover:text-themeGrey4Text',
              'group flex w-full items-center rounded-md px-2 py-3 text-left text-base font-medium focus:outline-none',
            )}
          >            
            <Link
              key={name}
              href={childrenlist[0]?.href || ''}
              className={classNames(
                current
                  ? 'bg-themeBg2 text-themeGrey4Text'
                  : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-themeGrey4Text',
                'flex items-center justify-center rounded-md py-3 px-2 text-base font-medium',
              )}
            >
              <CustomIcon
                className={classNames(
                  current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                  'mr-3 h-6 w-6 flex-shrink-0',
                )}
                aria-hidden="true"
              />
            </Link>
            {isSidebarOpen && (
              <>
                <span className={classNames('ml-[11px] flex-1', open ? 'text-themeBlue' : 'text-themeGrey4Text')}>
                  {name}
                </span>
                <svg
                  className={classNames(
                    !open ? '-rotate-90 text-gray-400' : 'text-gray-300',
                    'ml-3 h-4 w-4 flex-shrink-0 transform transition-colors duration-150 ease-in-out group-hover:text-gray-400',
                  )}
                  viewBox="0 0 14 8"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1.1665 1.08301L6.99984 6.91634L12.8332 1.08301"
                    stroke={open ? '#1476FF' : '#303350'}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </>
            )}
          </Disclosure.Button>
          <Disclosure.Panel className="space-y-1">
            {isSidebarOpen &&
              childrenlist.map(({ name, href }, index) => (
                <Disclosure.Button
                  as={Link}
                  key={index}
                  href={href}
                  className="group flex w-full items-center rounded-[47px] py-[10px] px-[42px] text-base font-medium text-themeGrey4Text hover:bg-themeBg2 hover:text-themeBlue"
                >
                  {name}
                </Disclosure.Button>
              ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
