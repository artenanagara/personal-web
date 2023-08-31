/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import image from '../assets/img/memoji.png'


function Hero() {
  return (
    <div className="container mx-auto flex flex-col gap-8 pt-12">
        <div>
            <img src={image} alt="memoji" />
        </div>
        <div className="text-[80px] text-white font-black">
            <h1>Hey, I'm <span className="text-primary">Artena Nagara.</span></h1>
        </div>
        <div className="flex flex-col gap-4 text-4xl text-neutral-400">
            <p>I'm a product designer,</p>
            <p>and occasional developer</p>
        </div>
        <div>
            <button
                className="mt-4 px-6 py-4 bg-primary text-base text-dark-0 font-semibold rounded-md hover:bg-white hover:text-black">
                See what i do &rarr;
            </button>
        </div>
    </div>
  )
}

export default Hero
