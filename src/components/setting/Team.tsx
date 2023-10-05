import { ChevronUpDownIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export interface ISettingsUser {
  photo: string
  name: string
  email: string
}
export interface ITeamAccount {
  user: ISettingsUser
  role: string
  date: string
}

export interface ITeam {
  team: ITeamAccount[]
}

export const TeamAccount: React.FC<ITeam> = ({ team }) => (
  <div className="w-full rounded-[24px] border-[1px] border-solid border-themeBorder1 bg-white py-6 px-4 shadow-eventcard md:px-8 md:py-10">
    <div className="px-4 sm:px-6 lg:px-8">
      <p className="text-[22px] font-bold text-themeBlackText">Account</p>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
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
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-themeGrey3Text">
                      <div className="flex flex-row items-center">
                        ROLE
                        <ChevronUpDownIcon className="ml-2 w-4 cursor-pointer" />
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="hidden px-3 py-3.5 text-left text-sm font-semibold text-themeGrey3Text md:table-cell"
                    >
                      <div className="flex flex-row items-center">
                        DATE ADDED
                        <ChevronUpDownIcon className="ml-2 w-4 cursor-pointer" />
                      </div>
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {team.map((person, key) => (
                    <tr key={key}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                        <div className="flex items-center">
                          <input
                            id="link-checkbox"
                            type="checkbox"
                            value=""
                            className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 outline-none"
                          />
                          <div className="ml-3 h-10 w-10 flex-shrink-0">
                            <Image
                              className="h-10 w-10 rounded-full"
                              src={require('../../assets/img/photos/' + person.user.photo)}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-bold text-themeBlackText">{person.user.name}</div>
                            <div className="text-[12px] font-medium text-themeGrey3Text">{person.user.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="w-fit rounded-[40px] bg-themeBg4 py-2.5 px-3 text-themeBlue">{person.role}</div>
                      </td>
                      <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-themeGrey3Text md:table-cell">
                        {person.date}
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
        </div>
      </div>
    </div>
  </div>
)
