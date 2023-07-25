import React, { useState } from 'react'
import CalcApp from './CalcApp';
function CalcScreen() {
  const [count, setCount] = useState('');

  function addPercentage_value(newValue)  {
    setCount(newValue);
  };

  return (
    <>
    <div className='md:max-w-screen-lg md:flex-col md:align-middle md:justify-center md:-ml-44 lg:ml-80'>
    <div className=' text-center font-extrabold font-mono text-2xl  bg-blue-100 border-2 border-black mt-4 mb-4 mr-1 ml-1 md:-mb-14'>Calculator</div>
    <div className='flex flex-col h-full -mb-28 pt-60  md:justify-start justify-start  bg-blue-100 border-2 border-black mt-4 mb-4 mr-1 ml-1 md:-mb-14'>
        
        <input className=' w-full -mt-44 h-11' id='screen' value={count} onChange={(e) => setCount(e.target.value)}/> 
        <CalcApp count={count} addPercentage={addPercentage_value} />
    </div>
    </div>
    </>
  )
}

export default CalcScreen