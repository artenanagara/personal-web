import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
    const navlinks = [
        {name: 'Home', href: '/'},
        {name: 'About', href: '/about'},
        {name: 'Work', href: '/work'},
        {name: 'Contact', href: '/contact'},
      ]

      const sociallinks = [
        {
            name: "Instagram",
            url: "https://instagram.com/artenanagara",
            image: "https://cdn.simpleicons.org/instagram/white",
        },
        {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/artena-nagara/",
            image: "https://cdn.simpleicons.org/linkedin/white",
        },
        {
            name: "Dribbble",
            url: "https://dribbble.com/artenanagara",
            image: "https://cdn.simpleicons.org/dribbble/white",
        },
        {
            name: "Github",
            url: "https://www.github.com/artenanagara",
            image: "https://cdn.simpleicons.org/github/white",
        },
      ]

  return (
    <div className='container mx-auto py-6 justify-between flex flex-row'>
        <div className='flex flex-col gap-2'>
            <h1 className='text-2xl font-bold text-primary'>Artena.</h1>
            <p className='text-white text-sm font-medium'>Made with Love <span className='text-red-500'>&hearts;</span></p>
            <p className='text-white text-sm font-medium'>© 2021 Artena. All rights reserved.</p>
        </div>
        <div className='flex flex-col justify justify-between'>
            <div className='flex flex-row gap-9 text-white text-base font-medium'>
                {navlinks.map((link) => (
                    <Link to={link.href} key={link.name} className='hover:text-primary hover:font-semibold'>
                    {link.name}
                    </Link>
                ))}
            </div>
            {/* <div className='flex flex-row gap-8'>
                {sociallinks.map((link) => (
                    <a href={link.url}>
                        <div className='bg-red-500 w-9 h-9'>
                            <svg src={link.image} />
                        </div>
                    </a>
                ))}
            </div> */}


            <div className='flex flex-row gap-8 justify justify-end hover:fill-primary'>
                <a href="https://www.github.com/artenanagara">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="36" height="36" viewBox="0 0 30 30" className='fill-white hover:fill-primary hover:-translate-y-1 transition duration-150'>
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
                </a>
                <a href="https://dribbble.com/artenanagara">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="36" height="36" viewBox="0 0 48 48" className='fill-white hover:fill-primary hover:-translate-y-1 transition duration-150'>
                    <path d="M34.25 26c-1.402 0-2.774.123-4.113.348 1.834 4.728 3.224 9.672 4.127 14.785 4.767-2.867 8.252-7.648 9.356-13.286C40.728 26.66 37.565 26 34.25 26zM26.023 24.245c-.535-1.214-1.103-2.411-1.699-3.591C20.165 22.171 15.678 23 11 23c-2.362 0-4.671-.223-6.918-.627C4.039 22.911 4 23.451 4 24c0 5.405 2.164 10.308 5.661 13.911C13.057 31.433 18.932 26.451 26.023 24.245zM27.105 19.505c.659 1.315 1.289 2.647 1.876 4.003C30.688 23.178 32.448 23 34.25 23c3.416 0 6.687.624 9.712 1.758C43.971 24.504 44 24.256 44 24c0-4.98-1.842-9.531-4.864-13.035C35.724 14.524 31.648 17.436 27.105 19.505zM11.985 39.95C15.335 42.48 19.488 44 24 44c2.641 0 5.159-.527 7.469-1.461-.885-5.378-2.338-10.564-4.286-15.505C20.501 29.028 14.994 33.772 11.985 39.95zM37.015 8.845C33.513 5.834 28.97 4 24 4c-2.181 0-4.276.363-6.243 1.011 2.99 3.687 5.662 7.641 7.963 11.829C29.991 14.918 33.82 12.189 37.015 8.845zM4.552 19.41C6.646 19.791 8.798 20 11 20c4.173 0 8.179-.722 11.909-2.033-2.316-4.167-5.001-8.101-8.026-11.746C9.749 8.864 5.911 13.658 4.552 19.41z"></path>
                </svg>
                </a>
                <a href="https://instagram.com/artenanagara">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="36" height="36" viewBox="0 0 30 30" className='fill-white hover:fill-primary hover:-translate-y-1 transition duration-150'>
                    <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                </svg>
                </a>
                <a href="https://www.linkedin.com/in/artena-nagara/">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="36" height="36" viewBox="0 0 30 30" className='fill-white hover:fill-primary hover:-translate-y-1 transition duration-150'>
                    <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                </svg>
                </a>
            </div>
            </div>
    </div>
  )
}

export default Footer