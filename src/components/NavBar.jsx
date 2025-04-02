import React, { useState } from 'react';
import pixelMenu from '../assets/pixelMenu.svg';
import pixelX from '../assets/pixelX.svg';
import PClogo from '../assets/PClogo.svg';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-4 text-[#fbfbfb] poppins-regular w-full relative top-0 z-50">
      <div className="xl:px-32 md:px-16 px-8 flex justify-between space-x-4 items-center">
        {/* Logo */}
        <div className="flex items-center -ml-6">
          <img src={PClogo} alt="PixelCodexLogo" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 text-lg">
          <a href="/consultation" className="hover:text-[#66ffff] transition-colors">
            Consultation
          </a>
          <a href="/about" className="hover:text-[#66ffff] transition-colors">
            About
          </a>
          <a href="/community" className="hover:text-[#66ffff] transition-colors">
            Community
          </a>
          <a href="/services" className="hover:text-[#66ffff] transition-colors">
            Services
          </a>
          <a href="/newsletter" className="hover:text-[#66ffff] transition-colors">
            Newsletter
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <img onClick={toggleMenu} src={isMenuOpen ? pixelX : pixelMenu} alt="menu-bar" className='md:hidden p-2 cursor-pointer'/>
        </div>
      </div>

      {/* Mobile Menu - Absolute positioning so it doesn't push content down */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1c1c1c] max-w-96 absolute mt-2 py-4 right-4 top-20 px-12 rounded-xl shadow-lg z-50">
          <div className="flex flex-col text-lg space-y-4">
            <a 
              href="/consultation" 
              className=" py-2 hover:text-[#66ffff] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Consultation
            </a>
            <a 
              href="/about" 
              className="py-2 hover:text-[#66ffff] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="/community" 
              className="py-2 hover:text-[#66ffff] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Community
            </a>
            <a 
              href="/services" 
              className="py-2 hover:text-[#66ffff] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="/newsletter" 
              className="py-2 hover:text-[#66ffff] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Newsletter
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;