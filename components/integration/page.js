import React from 'react';
import Image from 'next/image';

const IntegrationSection = () => {
 

  return (
    <section className="relative py-16 md:py-20 px-4 md:px-6 overflow-hidden flex items-center justify-center">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full blur-[150px]" style={{ backgroundColor: 'rgba(0, 46, 137, 0.1)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full blur-[150px]" style={{ backgroundColor: 'rgba(0, 46, 137, 0.15)' }} />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center px-4">
          {/* Left Side - Image */}
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/images/Group 17 (1).png"
              alt="Microsoft 365 Integration"
              width={600}
              height={400}
              className="w-full h-auto max-w-xl"
              priority
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="flex justify-start">
              <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-6 py-2 rounded-full border border-gray-600/30">
                Start Syncing
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-[40px] font-bold text-white leading-tight">
              Simplify Scheduling With Seamless Connections
            </h2>
            
            {/* Description */}
            <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
              The essential tools you already use, integrated into a single, powerful scheduling platform
            </p>

            {/* CTA Button */}
            <button 
              className="group px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm md:text-base text-white transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center gap-2 md:gap-3"
              style={{ backgroundColor: '#002E89' }}
            >
              Explore All Integration
              <svg 
                className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;

