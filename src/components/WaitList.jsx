import React from 'react';
import GlowEffect from './GlowEffect';
import { useState } from 'react';

const WaitList = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Reset errors
        setEmailError('');
        
        // Validate inputs
        let isValid = true;
        
        if (!email) {
          setEmailError('Email address is required');
          isValid = false;
        } else if (!validateEmail(email)) {
          setEmailError('Please enter a valid email address');
          isValid = false;
        }
        
        if (isValid) {
          setIsSubmitting(true);
          
          // Simulate form submission
          setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            // console.log('Email:', email);
            setEmail('');
            
            // Reset success message after 3 seconds
            setTimeout(() => {
              setIsSubmitted(false);
            }, 2000);
          }, 1000);
        }
    
      };

  return (
    <div className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between xl:px-32 md:px-16 px-8 overflow-x-hidden">
      {/* Left Side (Text Content) */}
      <div className="w-full lg:w-1/2 z-10 md:pt-0 pt-32">
        <h1 className="text-5xl font-bold mb-4 karma-regular leading-12 md:leading-16">
          Be the first person We tell !!!
        </h1>
        
        <p className="mb-4 poppins-regular">
        Our journey to empowering at least 1 million aspiring programmers by providing a holistic ecosystem has just begun and we would love for you to be a part of it. 
        </p>
        <p className="mb-4 poppins-regular">
        Subscribe and be the first we tell whenever we reach a major milestone or stumbling block or host an event.
        </p>
        <p className="mb-8 poppins-regular">
        The current major milestone we are building towards is setting up our web based ecosystem. Look forward to that :) 
        </p>

        <form onSubmit={handleSubmit}>
            <div className='mb-4 text-[#fbfbfb]'>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' 
                    className={`w-full px-6 rounded-md py-4 border-2 border-[#fbfbfb] focus:outline-none ${emailError ? 'border-red-500' : ''}`}/>
                {emailError && <p className="mt-1 text-red-500 text-sm">{emailError}</p>}
            </div>

            <button disabled={isSubmitting} onClick={handleSubmit}
             className="bg-[#ffcc00] float-end hover:bg-yellow-500 text-[#1e1e1e] font-noraml text-xl py-3 px-8 rounded-md transition-colors cursor-pointer">
              Join The Codices
            </button>
            {isSubmitted && (
              <div className="mt-20 p-4 bg-[#66ffff] text-green-800 rounded-md w-fit">
                Your message has been sent successfully!
              </div>
            )}
        </form>
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
          className="md:scale-80 transform-gpu"
        />
      </div>
      <div className="w-full h-96 md:h-screen md:w-1/2 md:hidden flex absolute right-0 top-0 lg:top-0">
        <GlowEffect
          width="100%"
          height="100%"
          intensity={0.1}
          color="#66ffff"
          position="bottom-right" 
          boxDensity={0.2}
          className="scale-60 transform-gpu"
        />
      </div>
    </div>
  );
};

export default WaitList;