import Image from 'next/image'
import Coin from '../../assets/img/coin.svg'

export interface ICoinBox {
  classnames?: string
  placeholder?: string
  value : string
  onHandlerCoinValue : (inputCoinValue: string) => void
}

export const CoinBox: React.FC<ICoinBox> = ({ classnames = '', placeholder = '', value, onHandlerCoinValue }) => (
  <div
    className={`items-center rounded-[50px] border border-solid border-themeBorder1 bg-white pl-[19.5px] pr-[19.5px] ${classnames}`}
  >
    <Image src={Coin} alt="coin icon" />
    <input
      type="number"
      className="font-inter ml-[8px] w-full text-[14px] font-medium text-themeGrey3Text outline-none"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onHandlerCoinValue(e.target.value)}
    />
  </div>
)
