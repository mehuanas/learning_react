import Herotxt from "./Herotxt";
import ArrowLogo from "./ArrowLogo";
import "remixicon/fonts/remixicon.css";

const LeftContent = () => {
  return (
    <div className="h-full w-1/4 flex flex-col justify-between">
      <Herotxt />
      <ArrowLogo />
    </div>
  );
};

export default LeftContent;
