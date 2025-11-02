const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between inset-0 bg-black/40">
      <h2 className="bg-white rounded-full h-10 w-10 flex justify-center items-center font-semibold">
        {props.id + 1}
      </h2>
      <div>
        <p className="text-white text-lg font-semibold  leading-relaxed mb-10">
          {props.intro}
        </p>
        <div className="flex justify-between">
          <button className="bg-blue-600 text-white font-semibold px-7 py-2 rounded-full">
            {props.tag}
          </button>
          <button className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-full">
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
