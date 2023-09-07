import React from 'react'

function Shot() {
  return (
    <div className='flex flex-col gap-8'>
        <div>
          <h1 className='text-4xl text-white font-bold'>Dribbble Shot</h1>
        </div>
        <div className='w-full flex flex-row gap-5 h-full'>
          <div className='w-3/4'>
            <img src="/src/assets/img/shots/Shot 1.png" alt="" className='w-full' />
          </div>
          <div className='w-1/4 flex flex-col gap-5'>
              <img src="/src/assets/img/shots/Shot 2.png" alt="" className='w-full h-full'/>
              <img src="/src/assets/img/shots/Shot 3.png" alt="" className='w-full h-full'/>
          </div>
        </div>
        <div className='w-full flex flex-row gap-5 h-full'>
          <div className='w-1/4 flex flex-col gap-5'>
              <img src="/src/assets/img/shots/Shot 5.png" alt="" className='w-full h-full'/>
              <img src="/src/assets/img/shots/Shot 6.png" alt="" className='w-full h-full'/>
          </div>
          <div className='w-3/4'>
            <img src="/src/assets/img/shots/Shot 4.png" alt="" className='w-full' />
          </div>
        </div>
    </div>
  )
}

export default Shot