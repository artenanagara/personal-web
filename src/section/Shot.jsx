import React from 'react'
import { Shot1,Shot2, Shot3, Shot4, Shot5, Shot6 } from '../assets/img/shots'


function Shot() {
  return (
    <div className='flex flex-col gap-8'>
        <div>
          <h1 className='text-4xl text-white font-bold'>Dribbble Shot</h1>
        </div>
        <div className='w-full flex flex-row gap-5 h-full'>
          <div className='w-3/4'>
            <img src={Shot1} alt="" className='w-full' />
          </div>
          <div className='w-1/4 flex flex-col gap-5'>
              <img src= {Shot2} alt="" className='w-full h-full'/>
              <img src= {Shot3} alt="" className='w-full h-full'/>
          </div>
        </div>
        <div className='w-full flex flex-row gap-5 h-full'>
          <div className='w-1/4 flex flex-col gap-5'>
              <img src={Shot5} alt="" className='w-full h-full'/>
              <img src={Shot6} alt="" className='w-full h-full'/>
          </div>
          <div className='w-3/4'>
            <img src={Shot4} alt="" className='w-full' />
          </div>
        </div>
    </div>
  )
}

export default Shot