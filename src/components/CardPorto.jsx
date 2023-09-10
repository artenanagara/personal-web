/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import baemin from '../assets/img/baemin.svg'
import baeminscreen from '../assets/img/baemin screen.png'

function CardPorto() {
  return (
    <div className="bg-sky-500 pt-8 px-8 flex flex-col gap-16 rounded-xl md:flex-row md:pt-16 md:px-16">
            <div className="flex flex-col gap-8 md:gap-12 md:w-2/3">
                <div className="flex flex-row gap-8">
                    <div>
                        <img src={baemin} alt="Logo Baemin" className='w-16'/>
                    </div>
                    <div className="flex flex-col justify-between -gap-1 text-white">
                        <h1 className="text-[32px] font-bold md:text-5xl ">Baemin</h1>
                        <p className="text-base md:text-2xl font-medium">2019 &bull; UI/UX Design</p>
                    </div>
                </div>
                <div className="text-gray-200 text-sm md:text-lg">
                    <p>Hello little cute foodie,We're food delivery expert from South Korea. We are here to share the
                        love and passion for food with you by delivering yummy dishes to your doorstep.Try it now! (many
                        hot deals are saved for new users, don't miss it)</p>
                </div>
                <div className="flex flex-row gap-2 items-center md:gap-4">
                    <div>
                        <button className="px-4 py-2 bg-white text-sky-500 text-sm  text-dark-0 font-medium rounded-md md:text-base md:px-6 md:py-4 hover:bg-sky-600 hover:text-white">
                            Read Case Study
                        </button>
                    </div>
                    <div>
                        <button className="px-4 py-2 bg-none text-white text-sm font-medium rounded-lg md:text-base">
                            View Live App 
                        </button>
                    </div>
                </div>
                <div className="hidden md:flex flex-col -gap-2">
                    <h2 className="mb-4 text-2xl text-white font-semibold">Tools</h2>
                    <div className="flex flex-row gap-5">
                        <div className="bg-white px-2 py-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32"
                                viewBox="0 0 48 48">
                                <path fill="#e64a19" d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z">
                                </path>
                                <path fill="#7c4dff" d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z">
                                </path>
                                <path fill="#66bb6a"
                                    d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z">
                                </path>
                                <path fill="#ff7043" d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z">
                                </path>
                                <circle cx="32" cy="24" r="7" fill="#29b6f6"></circle>
                            </svg>
                        </div>
                        <div className="bg-white px-2 py-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32"
                                viewBox="0 0 48 48">
                                <path fill="#43a047"
                                    d="M37,45H11c-1.657,0-3-1.343-3-3V6c0-1.657,1.343-3,3-3h19l10,10v29C40,43.657,38.657,45,37,45z">
                                </path>
                                <path fill="#c8e6c9" d="M40 13L30 13 30 3z"></path>
                                <path fill="#2e7d32" d="M30 13L40 23 40 13z"></path>
                                <path fill="#e8f5e9"
                                    d="M31,23H17h-2v2v2v2v2v2v2v2h18v-2v-2v-2v-2v-2v-2v-2H31z M17,25h4v2h-4V25z M17,29h4v2h-4V29z M17,33h4v2h-4V33z M31,35h-8v-2h8V35z M31,31h-8v-2h8V31z M31,27h-8v-2h8V27z">
                                </path>
                            </svg>
                        </div>
                        <div className="bg-white px-2 py-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 48 48">
                                <circle cx="24" cy="24" r="20" fill="#2196f3"></circle><path fill="#fff" d="M29,31H14c-1.657,0-3-1.343-3-3V17h15c1.657,0,3,1.343,3,3V31z"></path><polygon fill="#fff" points="37,31 31,27 31,21 37,17"></polygon>
                                </svg>
                        </div>
                    </div>

                </div>
            </div>
            <div className="">
                <img className="rounded-t-lg w-[350px] h-[540px] align-items-center" src={baeminscreen} alt=""/>
            </div>
        </div>
  )
}

export default CardPorto