import React from "react";

function Intput() {
  return (
    <div className=" border-2 border-black bg-blue-700 rounded-lg">
      <div className="flex flex-col items-center justify-center">
        <span className="m-3 font-serif text-[30px] text-white">Input</span>
        <textarea placeholder="Your Output Will be here" className="font-mono  outline-none p-3 rounded-xl h-[260px] w-[600px] m-5" name="" id=""></textarea>
      </div>
      <div className="m-5 flex justify-between">
            <button className=" bg-green-600 hover:bg-red-500 duration-150 px-5 py-3 rounded-xl shadow-xl text-white font-semibold"><span>Translate</span></button>
            <button className=" bg-red-600 hover:bg-green-500 duration-150 px-5 py-3 rounded-xl shadow-xl text-white font-semibold"><span>Reset</span></button>
        </div>
    </div>
  );
}

export default Intput;
