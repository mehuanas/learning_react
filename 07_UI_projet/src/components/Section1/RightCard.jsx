import React from "react";

const RightCard = () => {
  return (
    <div className="h-full w-80 rounded-4xl overflow-hidden relative">
      <img
        className="h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688"
        alt=""
      />
      <div className="absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between">
        <h1 className="bg-white rounded-full h-10 w-10 flex justify-center items-center text-2xl font-semibold">
          1
        </h1>
        <div>
          <p className="text-xl leading-normal text-white mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sunt
            accusantium quidem? Laboriosam, inventore delectus?
          </p>
          <div className="flex justify-between">
            <button className="bg-blue-600 text-white font-medium px-8 py-2 rounded-full">Satisfied</button>
            <button className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-full">
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCard;
