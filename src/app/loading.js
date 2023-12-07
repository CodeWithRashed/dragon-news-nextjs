import { AiOutlineLoading3Quarters } from "react-icons/ai";

const LoadingScreen = () => {
  return (
    <div className="w-full flex justify-center items-center ">
      <AiOutlineLoading3Quarters className="animate-spin" />
    </div>
  )
}

export default LoadingScreen
