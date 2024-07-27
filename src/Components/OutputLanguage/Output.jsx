import React from 'react'

function Output() {
  return (
    <div className=' border-2 border-black bg-red-700 rounded-lg'>
        <div className='flex flex-col items-center justify-center'>  
        <span className='m-3 font-serif text-[30px] text-white'>Output</span>
            <textarea className='p-3 outline-none w-[600px] m-5 h-[260px] font-mono rounded-xl' name="" id="" placeholder="Type Text Here"></textarea>
        </div>
        <div className="m-5 flex items-center justify-center">
            <button className=" bg-green-600 hover:bg-blue-700 duration-150 px-5 py-3 rounded-xl shadow-xl text-white font-semibold"><span>Reset</span></button>
        </div>
    </div>
  )
}

export default Output
