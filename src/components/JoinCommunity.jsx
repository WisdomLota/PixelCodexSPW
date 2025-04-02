import React from 'react';
import GlowEffect from './GlowEffect';

const JoinCommunity = () => {
  return (
    <div className="relative w-full bg-[#1e1e1e] text-white py-16 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Join the our Community !!!</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Join the Pixel Codex Academy Incubator Community and take your programming journey to the next level!
          </p>
        </div>

        {/* Community platforms */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 mt-16">
          {/* WhatsApp */}
          <div className="relative bg-[#1c1c1c] rounded-xl p-8 border border-gray-800 flex-1 max-w-lg mx-auto">
            <div className="flex flex-col h-full">
              <h3 className="text-3xl font-bold mb-6">Whatsapp</h3>
              
              <div className="flex-grow my-8 flex justify-center">
                <div className="relative h-64 w-48">
                  {/* WhatsApp phone illustration */}
                  <div className="absolute inset-0">
                    {/* Simple phone outline and content would go here */}
                  </div>
                </div>
              </div>
              
              <button className="mt-auto w-full py-3 px-6 bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-colors duration-300 rounded-md font-bold">
                Join Community
              </button>
            </div>
            
            {/* Small glow effect */}
            {/* <div className="absolute inset-0 pointer-events-none">
              <GlowEffect
                width="100%"
                height="100%"
                intensity={0.1}
                color="#66ffff"
                position="top-right"
                boxDensity={0.4}
              />
            </div> */}
          </div>

          {/* Telegram */}
          <div className="relative bg-[#1c1c1c] rounded-xl p-8 border border-gray-800 flex-1 max-w-lg mx-auto">
            <div className="flex flex-col h-full">
              <h3 className="text-3xl font-bold mb-6">Telegram</h3>
              
              <div className="flex-grow my-8 flex justify-center">
                <div className="relative h-64 w-48">
                  {/* Telegram illustration would go here */}
                </div>
              </div>
              
              <button className="mt-auto w-full py-3 px-6 bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-colors duration-300 rounded-md font-bold">
                Join Community
              </button>
            </div>
            
            {/* Small glow effect */}
            <div className="absolute inset-0 pointer-events-none">
              <GlowEffect
                width="50%"
                height="50%"
                intensity={0.08}
                color="#66ffff"
                position="top-right"
                boxDensity={0.2}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Background glow - larger and more subtle */}
      {/* <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <GlowEffect
          width="100%"
          height="100%"
          intensity={0.05}
          color="#66ffff"
          position="top-right"
          boxDensity={0.2}
        />
      </div> */}
    </div>
  );
};

export default JoinCommunity;