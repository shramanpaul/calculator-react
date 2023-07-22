import React from 'react'
import CalcScreen from './CalcScreen'
import CalcApp from './CalcApp'

function Calculator() {
  return (
    <>
    <div className=' bg-blue-100 border-2 border-black mt-4 mb-4 mr-1 ml-1 md:-mb-14'>
    <CalcScreen/>
    <CalcApp/>
    </div>
    </>
  )
}

export default Calculator