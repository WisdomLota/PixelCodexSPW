import React from 'react';
import GlowEffect from './GlowEffect';
import joinWhatsapp from '../assets/joinWhatsapp.png';
import joinTelegram from '../assets/joinTelegram.png';

const JoinCommunity = () => {
  return (
    <div className="w-full bg-[#1e1e1e] text-[#fbfbfb] py-16 xl:px-32 md:px-16 px-8 mt-32 overflow-x-hidden min-h-screen">

      <div className="flex flex-col md:flex-row justify-between items-center relative mt-8 md:mt-28">
        {/* Header */}
        <div className="mb-12 relative text-start">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 karma-regular">Join Our Community !!!</h2>
          <p className="poppins-regular mb-8">
            Join the Pixel Codex Academy Incubator Community and take your programming journey to the next level!
          </p>
        </div>
        {/* Small glow effect */}
        <div className="md:flex hidden absolute right-0 top-0 pointer-events-none pt-12">
          <GlowEffect
            width="60%"
            height="60%"
            intensity={0.08}
            color="#66ffff"
            position="right" 
            boxDensity={0.2}
            className="lg:scale-60 pr-28 transform-gpu"
          />
        </div>  
        <div className="absolute md:hidden flex right-0 top-0 pointer-events-none w-full h-full">
          <GlowEffect
            width="100%"
            height="100%"
            intensity={0.05}
            color="#66ffff"
            position="top-right" 
            boxDensity={0.2}
            className="transform-gpu"
          />
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-between items-center gap-16 poppins-regular'>
 
         <div className='flex border-t-2 border-l-2 border-b-2 rounded-tl-xl rounded-bl-xl p-4 justify-center items-center'>
           <div className='space-y-8'>
             <p className='text-2xl font-medium'>Whatsapp</p>
             <button className='md:text-xl text-[#ffcc00] border rounded-md p-2 border-[#ffcc00] hover:text-[#ffff00] hover:border-[#ffff00] cursor-pointer text-nowrap'>Join Community</button>
           </div>
           <div className=''>
             <img src={joinWhatsapp} alt="join-whatsapp" className='w-72 h-64'/>
           </div>
         </div>
         <div className='flex border-t-2 border-l-2 border-b-2 rounded-tl-xl rounded-bl-xl p-4 justify-center items-center'>
           <div className='space-y-8'>
             <p className='text-2xl font-medium'>Telegram</p>
             <button className='md:text-xl text-[#ffcc00] border rounded-md p-2 border-[#ffcc00] hover:text-[#ffff00] hover:border-[#ffff00] cursor-pointer text-nowrap'>Join Community</button>
           </div>
           <div>
             <img src={joinTelegram} alt="join-telegram"className='w-72 h-64' />
           </div>
         </div>
 
       </div>
      
      
    </div>
  );
};

export default JoinCommunity;