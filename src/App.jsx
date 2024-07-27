import React from 'react'
import Intput from './Components/InputLaguage/Intput'
function App() {
  return (
    <>
    <div className='py-10 px-32 h-screen'>
        <div className='flex items-center justify-center m-10'>
          <h1 className=' text-yellow-600 text-[50px] font-semibold  font-Kanit'>Language Translator</h1>
        </div>
        <div className='flex items-center justify-center '>
        <Intput />
      
        </div>
    </div>
    </>
  )
}

export default App
