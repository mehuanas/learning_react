import LeftContent from "./LeftContent"
import RightContent from "./RightContent"

const Page1Content = () => {
  return (
    <div className='h-[80vh] px-16 flex justify-between gap-8'>
        <LeftContent />
        <RightContent/>
    </div>
  )
}

export default Page1Content