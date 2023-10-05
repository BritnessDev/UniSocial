import { Category } from '../Category'
import { FormData } from './SupportData'

interface IForm {
  label: string
  placeholder: string
}

export const Form = ({ label, placeholder }: IForm) => (
  <div>
    <p className="text-sm font-bold text-themeGrey4Text">{label}</p>
    <input
      className="mt-[10px] h-[54px] w-full rounded-full border border-themeBorder1 p-5 text-sm text-themeGrey3Text shadow-[0_2px_12px_rgba(11,22,44,0.05)] outline-none"
      placeholder={placeholder}
    />
  </div>
)

export const SupportFormGroup = () => (
  <div className="w-full rounded-[24px] border border-themeBorder1 bg-white py-10 px-8 shadow-eventcard">
    <div className="grid w-full grid-cols-1 gap-x-5 gap-y-6 sm:grid-cols-2">
      {FormData.map((item, index) => (
        <Form key={index} label={item?.label} placeholder={item?.placeholder} />
      ))}
    </div>
    <div className="mt-6">
      <p className="text-sm font-bold text-themeGrey4Text">Message</p>
      <textarea
        rows={5}
        className="mt-2 w-full resize-none rounded-[22px] border border-themeBorder1 p-4 text-sm text-themeGrey3Text shadow-eventcard outline-none"
        placeholder="Say something about you... "
      />
    </div>
    <div className="mt-5">
      <Category
        title="Submit Form"
        clickCategory={() => {
          // click event
        }}
        customClass="shadow-3xl w-full sm:w-fit"
        textClass="text-sm"
        index={0}
        selected={true}
      />
    </div>
  </div>
)
