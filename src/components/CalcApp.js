import React  from 'react'
// import CalcScreen from './CalcScreen';
function CalcApp({ count, addPercentage  }) {
  
  function addPercentage1() {
    addPercentage(count + "/100");
  }
  function addC1() {
    count='0';
    addPercentage(count);
  }
  function addback1() {
    // let count =;
    addPercentage( count.slice(0,-1));
  }
  function addDivide1() {
    addPercentage(count + '/');
  }
  function add9_1(){
    addPercentage(count + '9');
  }
  function add8_1(){
    addPercentage(count + '8');
  }
  function add7_1(){
    addPercentage(count + '7');
  }
  function add6_1(){
    addPercentage(count + '6');
  }
  function add5_1(){
    addPercentage(count + '5');
  }
  function add4_1(){
    addPercentage(count + '4');
  }
  function add3_1(){
    addPercentage(count + '3');
  }
  function add2_1(){
    addPercentage(count + '2');
  }
  function add1_1(){
    addPercentage(count + '1');
  }
  function add0_1(){
    addPercentage(count + '0');
  }
  function add00_1(){
    addPercentage(count + '00');
  }
  function addDot_1(){
    addPercentage(count + '.');
  }
  function addMul_1(){
    addPercentage(count + '*');
  }
  function addAdd_1(){
    addPercentage(count + '+');
  }
  function addSub_1(){
    addPercentage(count + '-');
  }
  
  function addEqual_1(){
    // eslint-disable-next-line
    let equal= eval(count)
    addPercentage(equal.toString());
    // console.log(count);
  }
  // function enter(event){
  //   if(event.keyCode===13||event.which===13){
  //     addEqual_1();
  //   }
  // }
  // useEffect(() => {
  //   document.addEventListener('keydown', enter);
  //   // Remove the event listener when the component unmounts
  //   return () => {
  //     document.removeEventListener('keydown', enter);
  //   };
  // }, []);
  console.log(count);
  return (
    <>
    <div className=''>
      
      <div className=' flex flex-col h-44 md:h-56 align-middle -mb-11 md:justify-center justify-start  '>
        <div className=' flex justify-center'>
          <button className='w-1/4 border-2 border-black' onClick={addC1}>C</button>
          <button className='w-1/4 border-2 border-black' onClick={addPercentage1} >%</button>
          <button className='w-1/4 border-2 border-black' onClick={addback1}>back</button>
          <button className='w-1/4 border-2 border-black' onClick={addDivide1}>/</button>
        </div>
        <div className=' flex justify-center '>
          <button className='w-1/4 border-2 border-black' onClick={add7_1}>7</button>
          <button className='w-1/4 border-2 border-black' onClick={add8_1}>8</button>
          <button className='w-1/4 border-2 border-black' onClick={add9_1}>9</button>
          <button className='w-1/4 border-2 border-black' onClick={addMul_1}>X</button>
        </div>
        <div className=' flex justify-center '>
          <button className='w-1/4 border-2 border-black' onClick={add4_1}>4</button>
          <button className='w-1/4 border-2 border-black' onClick={add5_1}>5</button>
          <button className='w-1/4 border-2 border-black' onClick={add6_1}>6</button>
          <button className='w-1/4 border-2 border-black' onClick={addSub_1}>-</button>
        </div>
        <div className=' flex justify-center '>
          <button className='w-1/4 border-2 border-black' onClick={add1_1}>1</button>
          <button className='w-1/4 border-2 border-black' onClick={add2_1}>2</button>
          <button className='w-1/4 border-2 border-black' onClick={add3_1}>3</button>
          <button className='w-1/4 border-2 border-black' onClick={addAdd_1}>+</button>
        </div>
        <div className=' flex justify-center '>
          <button className='w-1/4 h-6 md:h-full border-2 border-black' onClick={add00_1}>00</button>
          <button className='w-1/4 h-6 md:h-full border-2 border-black' onClick={add0_1}>0</button>
          <button className='w-1/4 h-6 md:h-full border-2 border-black' onClick={addDot_1}>.</button>
          <button className='w-1/4 h-6 md:h-full border-2 border-black' onClick={addEqual_1} >=</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default CalcApp;