import LeftContent from "./LeftContent"
import RightContent from "./RightContent"

const Page1Content = () => {
  return (
    <div className='px-15 flex justify-between'>
      <LeftContent />
      <RightContent />
    </div>
  )
}

export default Page1Content