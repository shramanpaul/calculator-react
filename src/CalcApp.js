import React from 'react'

function CalcApp() {
  return (
    <>
    <div className=''>
      
      <div className=' flex flex-col h-44 md:h-56 align-middle -mb-11 md:justify-center justify-start  '>
        <div className=' flex justify-center'>
          <button className='w-1/4 border-2 border-black'>C</button>
          <button className='w-1/4 border-2 border-black'>%</button>
          <button className='w-1/4 border-2 border-black'>back</button>
          <button className='w-1/4 border-2 border-black'>/</button>
        </div>
        <div className=' flex justify-center '>
          <button className='w-1/4 border-2 border-black'>7</button>
          <button className='w-1/4 border-2 border-black'>8</button>
          <button className='w-1/4 border-2 border-black'>9</button>
          <button className='w-1/4 border-2 border-black'>X</button>
        </div>
        <div className=' flex justify-center '>
          <button className='w-1/4 border-2 border-black'>4</button>
          <button className='w-1/4 border-2 border-black'>5</button>
          <button className='w-1/4 border-2 border-black'>6</button>
          <button className='w-1/4 border-2 border-black'>-</button>
        </div>
        <div className=' flex justify-center '>
          <button className='w-1/4 border-2 border-black'>1</button>
          <button className='w-1/4 border-2 border-black'>2</button>
          <button className='w-1/4 border-2 border-black'>3</button>
          <button className='w-1/4 border-2 border-black'>+</button>
        </div>
        <div className=' flex justify-center '>
          <button className='w-1/4 h-6 md:h-full border-2 border-black'>00</button>
          <button className='w-1/4 h-6 md:h-full border-2 border-black'>0</button>
          <button className='w-1/4 h-6 md:h-full border-2 border-black'>.</button>
          <button className='w-1/4 h-6 md:h-full border-2 border-black'>=</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default CalcApp;