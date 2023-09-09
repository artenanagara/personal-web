/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import image from '../assets/img/memoji.png'


function Hero() {
  return (
    <div className="container mx-auto flex flex-col gap-4 mt-8 md:gap-8">
        <div>
            <img src={image} alt="memoji" className='w-[100px] mb-4 md:w-[100px]'/>
        </div>
        <div>
            <h1 className='text-white font-black text-5xl leading-tight md:text-[80px]'>Hey, I'm <span className="text-primary">Artena Nagara<span className='text-white'>.</span></span></h1>
        </div>
        <div className="flex flex-col gap-4 text-lg text-neutral-400 leading-3 md:text-4xl">
            <p>I'm a product designer,</p>
            <p>and occasional developer</p>
        </div>
        <div>
            <button
                className="mt-4 px-4 py-2 bg-primary text-sm  text-dark-0 font-semibold rounded-md md:text-base md:px-6 md:py-4  hover:bg-white hover:text-black">
                See what i do &rarr;
            </button>
        </div>
    </div>
  )
}

export default Hero
