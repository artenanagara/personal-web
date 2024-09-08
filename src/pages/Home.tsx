import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faDribbble, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    <div className='w-full container px-4 p-12'>
        {/* Hero Section */}
        <div className='flex flex-col gap-8'>
            <div className='flex flex-col gap-1'>
                <p className='font-light'>Hello, I'm Artena Nagara</p>
                <h1 className='text-8xl font-bold leading-tight md:text-[100px]'>Helping
                    Brands
                    Achieve
                </h1>
                <h1 className='font-light text-7xl leading-tight italic md:text-[100px]'>Digital
                    Excellence
                </h1>
            </div>
            <div className="gap-8 inline-flex">
                <a href="https://instagram.com/artenanagara" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className="w-8 h-8" />
                </a>
                <a href="https://dribbble.com/artenanagara" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faDribbble} className="w-8 h-8" />
                </a>
                <a href="https://linkedin.com/in/artena-nagara" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="w-8 h-8" />                       
                </a>
            </div>
            <div className='flex justify-between font-light'>
                <p>Located in <br/>Surakarta, Indonesia🇮🇩
                </p>
                <p>Currently available for <br/>freelance worldwide 🌎</p>
            </div>
        </div>

        {/* About Section */}
        <div className='py-20 flex flex-col gap-8'>
            <h1 className='text-5xl font-medium'>About Me</h1>
            <div className='flex gap-10'>
                <div className='w-1/3 font-extralight text-base flex flex-col gap-6 leading-normal pt-2'>
                    <p>I’m freelance web designer and co-founder of Okey Studio, a studio focused on creating tailor-made websites.</p>
                    <a href="">Discover Cicle Studio</a>
                </div>
                <div className='w-3/4 text-3xl leading-normal font-medium'>
                    <p>I prioritize clean and organized layouts, clear and clean typography, and meticulous alignment in all my designs. This focus on user-friendliness stems from my passion for minimalism. I believe in maximizing the impact of a brand's message, story, and visuals  through each creation.
                    <br/><br/>
                    My background in training and designing presentations for domestic enterprises for many years has instilled in me a deep understanding of layout, content handling, and incorporating motion effects. Now, I leverage this expertise, along with my knowledge of front-end programming, to create beautiful and functional websites.
                    </p>
                </div>

                
            </div>
        </div>

    </div>
  )
}
