import React from 'react'
import { Shot1,Shot2, Shot3, Shot4, Shot5, Shot6 } from '../assets/img/shots'


function Shot() {
  return (
    <div className='flex flex-col'>
        <div className='my-8'>
          <h1 className='text-4xl text-white font-bold'>Dribbble Shot</h1>
        </div>
        <div className='w-full mb-0 flex flex-col gap-0 h-full md:flex-row md:gap-5 md:mb-5'>
          <div className='md:w-3/4'>
            <img src={Shot1} alt="" className='w-full' />
          </div>
          <div className='w-2/4 flex flex-row gap-0 md:flex-col md:gap-5 md:w-1/4'>
              <img src= {Shot2} alt="" className='w-full h-full'/>
              <img src= {Shot3} alt="" className='w-full h-full'/>
          </div>
        </div>
        <div className='w-full flex flex-col gap-0 h-full md:flex-row md:gap-5'>
          <div className='w-2/4 flex flex-row gap-0 md:flex-col md:w-1/4 md:gap-5'>
              <img src={Shot5} alt="" className='w-full h-full'/>
              <img src={Shot6} alt="" className='w-full h-full'/>
          </div>
          <div className='md:w-3/4'>
            <img src={Shot4} alt="" className='w-full' />
          </div>
        </div>
    </div>
  )
}

export default Shot