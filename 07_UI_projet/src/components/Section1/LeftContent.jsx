import "remixicon/fonts/remixicon.css";
import Herotxt from "./Herotxt";
import ArrowLogo from "./ArrowLogo";

const LeftContent = () => {
  return (
    <div className="py-8 w-1/3 flex flex-col h-[80vh] justify-between">
      <Herotxt />
      <ArrowLogo />
    </div>
  );
};

export default LeftContent;
