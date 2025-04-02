import React from 'react';
import GlowEffect from './GlowEffect';

const HeroSection = () => {
  return (
    <div className="relative h-screen flex flex-col lg:flex-row items-center justify-between xl:px-32 md:px-16 px-8 -mt-8 overflow-hidden">
      {/* Left Side (Text Content) */}
      <div className="w-full lg:w-1/2 z-10 md:pt-0 pt-16">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4 karma-regular leading-12 md:leading-16">
          Is your child or sibling interested in tech or coding?
        </h1>
        <h2 className="text-2xl font-light mb-8 karma-regular">
          Not sure how to guide them?
        </h2>
        <p className="mb-8 poppins-regular text-lg">
          No problem! Book a free consultation session today and by the end of it
          we'll have a well structured roadmap for them to follow
        </p>
        <button className="bg-[#ffcc00] float-end hover:bg-yellow-500 text-[#1e1e1e] font-noraml text-xl py-3 px-8 rounded-md transition-colors cursor-pointer">
          Book Consultation
        </button>
      </div>

      {/* Right side with animation - more expansive on large screens */}
      <div className="w-full h-96 md:h-screen md:w-1/2 md:flex hidden absolute right-0 top-0 lg:top-0">
        <GlowEffect
          width="100%"
          height="100%"
          intensity={0.5}
          color="#66ffff"
          position="center" 
          boxDensity={1}
          className="lg:scale-90 transform-gpu"
        />
      </div>
      <div className="w-full h-80 md:h-screen md:w-1/2 md:hidden flex absolute right-0 top-0 lg:top-0">
        <GlowEffect
          width="100%"
          height="100%"
          intensity={0.1}
          color="#66ffff"
          position="right" 
          boxDensity={0.2}
          className="scale-60 transform-gpu"
        />
      </div>
    </div>
  );
};

export default HeroSection;