import React from 'react';

const Footer = () => {
  // Automatically get current year
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full text-[#fbfbfb] pt-16 pb-8 poppins-regular">
      <div className="container mx-auto flex flex-col items-center justify-center">
        {/* Main title */}
        <h2 className="text-2xl md:text-3xl font-medium mb-8">Pixel Codex</h2>
        
        {/* Horizontal divider */}
        <div className="w-5/6 border-2 bg-white mb-4"></div>
        
        {/* Tagline */}
        <p className="text-md text-gray-300 mb-6">Empowering the next generation of programmers</p>
        
        {/* Copyright with auto-updating year */}
        <p className="flex text-[#66ffff]">P<span><p className='text-[#ffcc00]'>ixel C</p></span>odex © {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;