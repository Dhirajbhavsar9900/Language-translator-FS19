import React from 'react';

function Output({text}) {
  return (
    <div className='border-2 border-black bg-red-700 rounded-lg'>
      <div className='flex flex-col items-center justify-center'>
        <span className='m-3 font-serif text-[30px] text-white'>Output</span>
        <textarea
          className='p-3 outline-none w-[600px] m-5 h-[260px] font-mono rounded-xl'
          name="output-text"
          id="output-textarea"
          placeholder="Translation will appear here"
          value={text}
          readOnly
          aria-label="Translated text"
        />
      </div>
    </div>
  );
}

export default Output;
