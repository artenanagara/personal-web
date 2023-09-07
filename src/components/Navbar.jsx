/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  const navlinks = [
    {name: 'Home', href: '/'},
    {name: 'About', href: '/about'},
    {name: 'Work', href: '/work'},
    {name: 'Contact', href: '/contact'},
  ]

  return (
    <div className='w-[1240px] fixed container mx-auto flex flex-row justify-between py-8'>
      <div className='logo'>
        <h1 className='text-2xl font-bold text-primary'>Artena.</h1>
      </div>
      <div>
        <div className='flex flex-row gap-9 text-white text-base font-medium'>
          {navlinks.map((link) => (
            <Link to={link.href} key={link.name} className='hover:text-primary'>
            {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar
