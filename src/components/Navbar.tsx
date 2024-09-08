import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";   
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faInstagram, faDribbble, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

  return (
    <div className="w-full">
        <div className="md:py-6  md:border-none  container p-4 flex flex-auto justify-between items-center border-b-[1px] w-full">
            {/* Dekstop Menu */}
            <Link to='/' className="text-2xl">Artena.</Link>
            <div className="hidden md:flex gap-10 font-light items-center">
                <Link to='/about'>About</Link>
                <Link to='/works'>Works</Link>
            </div>
        
            {/* Mobile Menu Button*/}
            <div className="md:hidden">
                <button
                onClick={toggleMenu}
                className="focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"} />
                    </svg>
                </button>
            </div>
        </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${isOpen ? 'flex' : 'hidden' } w-full h-screen flex-col`}>
                <div className="flex flex-col font-light">
                    <Link to='/about' className="p-20 justify-center flex items-center text-4xl border-b-[1px]">About</Link>
                    <Link to='/works' className="p-20 justify-center flex items-center text-4xl border-b-[1px]">Works</Link>
                </div>
                
                <div className="flex flex-col items-center justify-center mt-auto p-4 space-y-4">
                    <a href="mailto:artenanagara22@gmail.com" className="font-thin">
                    artenanagara22@gmail.com
                    </a>
                    <div className="justify-center items-center gap-6 inline-flex">
                        <a href="https://instagram.com/artenanagara" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
                        </a>
                        <a href="https://dribbble.com/artenanagara" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faDribbble} className="w-6 h-6" />
                        </a>
                        <a href="https://linkedin.com/in/artena-nagara" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>
    </div>
  );
};

export default Navbar;