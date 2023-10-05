import Image from 'next/image'
import SearchIcon from '../../assets/img/search.svg'

interface ISearchBox {
  classnames?: string
  placeholder?: string
}

export const SearchBox: React.FC<ISearchBox> = ({ classnames = '', placeholder = '' }) => (
  <div
    className={`items-center rounded-[50px] border border-solid border-themeBorder1 bg-white pl-[19.5px] pr-[19.5px] ${classnames}`}
  >
    <Image src={SearchIcon} alt="seach icon" />
    <input
      type="text"
      className="font-inter ml-[8px] w-full text-[14px] font-medium text-themeGrey3Text outline-none"
      placeholder={placeholder}
    />
  </div>
)
