import React from 'react';
import Image from 'next/image';

const IntegrationSection = () => {
 

  return (
    <section className="relative min-h-[600px] md:min-h-screen py-16 md:py-20 px-4 md:px-6 overflow-hidden flex items-center justify-center">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full blur-[150px]" style={{ backgroundColor: 'rgba(0, 46, 137, 0.1)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full blur-[150px]" style={{ backgroundColor: 'rgba(0, 46, 137, 0.15)' }} />
      
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <span className="bg-gray-700/50 text-gray-300 text-sm font-medium px-6 py-2 rounded-full border border-gray-600/30">
              Start Syncing
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight px-4">
            Simplify Scheduling With<br className="hidden md:block" />Seamless Connections
          </h2>
          
          {/* Description */}
          <p className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mb-8 md:mb-10 px-4">
            The essential tools you already use, integrated into a single, powerful scheduling platform
          </p>

          {/* CTA Button */}
          <button 
            className="group px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm md:text-base text-black transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center gap-2 md:gap-3 mx-auto"
            style={{ backgroundColor: '#C4FF61' }}
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

        {/* Integration Icons Section */}
        <div className="relative px-4">
          {/* Microsoft 365 Integration Image */}
          <div className="mb-8 md:mb-16">
            <Image
              src="/images/Group 17 (1).png"
              alt="Microsoft 365 Integration"
              width={1200}
              height={300}
              className="w-full h-auto max-w-full"
              priority
            />
          </div>

          {/* Additional Integration Logos Grid */}
          
        </div>

        {/* Trust Badge */}
        
      </div>
    </section>
  );
};

export default IntegrationSection;

