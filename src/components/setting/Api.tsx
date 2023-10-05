import { ChevronUpDownIcon, DocumentDuplicateIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline'
import { BlueButton } from '../UI/Button'
import { CustomInput } from '../UI/CustomInput'

export interface ISettingApiKey {
  keys: {
    label: string
    token: string
  }[]
}

export const SettingApi: React.FC<ISettingApiKey> = ({ keys }) => (
  <div className="w-full divide-y rounded-[24px] border-[1px] border-solid border-themeBorder1 bg-white shadow-eventcard">
    <div className="flex items-center justify-between px-4 py-6 md:px-8 md:py-10">
      <p className="text-base font-bold text-themeBlackText md:text-2xl">API settings</p>
      <div className="">
        <BlueButton text="Create API" />
      </div>
    </div>
    <div className="overflow-hidden rounded-b-[24px] shadow ring-1 ring-black ring-opacity-5">
      <table className="min-w-full divide-gray-300">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6">
              <div className="flex flex-row items-center">
                <input
                  id="link-checkbox"
                  type="checkbox"
                  value=""
                  className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 outline-none"
                />
                <span className="ml-3 flex text-themeGrey3Text">NAME</span>
                <ChevronUpDownIcon className="ml-2 w-4 cursor-pointer" />
              </div>
            </th>
            <th
              scope="col"
              className="hidden px-3 py-3.5 text-left text-sm font-semibold text-themeGrey3Text md:table-cell"
            >
              <div className="flex flex-row items-center">
                TOKEN
                <ChevronUpDownIcon className="ml-2 w-4 cursor-pointer" />
              </div>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {keys.map((api, key) => (
            <tr key={key}>
              <td className="whitespace-nowrap py-8 pl-4 pr-3 text-sm sm:pl-6 md:py-4">
                <div className="flex items-center">
                  <input
                    id="link-checkbox"
                    type="checkbox"
                    value=""
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 outline-none"
                  />
                  <div className="ml-4 text-sm font-medium text-themeBlackText">{api.label}</div>
                </div>
              </td>
              <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 md:table-cell">
                <div className="relative mt-1 flex items-center">
                  <CustomInput
                    type="password"
                    placeholder={api.token}
                    className="bg-themeBorder1 text-themeGray4Text"
                  />
                  <div className="absolute inset-y-0 right-0 flex justify-center p-5">
                    <DocumentDuplicateIcon className="sha inline-flex cursor-pointer items-center rounded-full border-[1px] border-themeBorder1 bg-white p-1.5 font-sans text-sm font-medium text-gray-400" />
                  </div>
                </div>
              </td>
              <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-themeGrey3Text md:table-cell">
                <div className="flex font-medium">
                  <a href="#" className="w-5 text-themeGray4Text hover:text-indigo-900">
                    <PencilIcon />
                  </a>
                  <a href="#" className="ml-3 w-5 text-themeGray4Text hover:text-indigo-900">
                    <TrashIcon />
                  </a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)
