"use client";
import React from 'react';
import { HeroHighlight, Highlight } from '@/app/ui/HeroHighlight';

const WorkflowSection = () => {
  const workflowCards = [
    {
      title: 'Research & Setup',
      position: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2',
      items: [
        'Connect your calendars (Google, Outlook, iCal)',
        'Customize booking pages with logo & brand colors',
        'Define team roles and permissions'
      ]
    },
    {
      title: 'Smart Scheduling',
      position: 'left-0 top-1/2 -translate-y-1/2 -translate-x-1/2',
      items: [
        'Automate bookings, reschedules & reminders',
        'Handle recurring events with AI-powered workflows',
        'Sync payments with Stripe & PayPal'
      ]
    },
    {
      title: 'Collaboration & Management',
      position: 'right-0 top-1/2 -translate-y-1/2 translate-x-1/2',
      items: [
        'Manage shared calendars across teams & clients',
        'Use the intuitive dashboard for bookings & schedules',
        'Access on desktop, tablet & mobile seamlessly'
      ]
    },
    {
      title: 'Insights & Growth',
      position: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2',
      items: [
        'Track revenue, bookings, and team activity',
        'Analyze productivity with real-time analytics',
        'Optimize strategy with actionable insights'
      ]
    }
  ];

  const outerIcons = [
   
  ];

  return (
    <section className="relative min-h-screen px-4 md:px-6 py-[150px] overflow-hidden">
      {/* Background gradient orbs - only around circle */}

      <div className="relative w-full  mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="relative z-20 space-y-6">
            <h2 className="text-[40px] font-bold text-white leading-tight">
              Streamline Your <Highlight>Workflow</Highlight> Process
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Our comprehensive workflow management system helps you organize, track, and optimize every stage of your design process—from initial research to final presentation.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300">
                Get Started
              </button>
              <button className="px-6 py-3 border border-gray-600 text-white rounded-full font-semibold hover:bg-gray-800/50 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side - Circular Workflow */}
          <div className="relative w-full flex items-center justify-center">
            {/* Background gradient orbs - only around circle center */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-600/20 rounded-full blur-[150px]" />
            <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-purple-600/20 rounded-full blur-[150px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[350px] md:h-[350px] bg-pink-600/10 rounded-full blur-[120px]" />
            
        {/* Outer circular ring with dashed border - Hidden on mobile */}
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px]">
          <svg className="w-full h-full -rotate-90">
            <circle
              cx="350"
              cy="350"
              r="330"
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="2"
              strokeDasharray="4 8"
            />
          </svg>
        </div>

        {/* Outer icon buttons - Hidden on mobile */}
        {outerIcons.map((icon, index) => (
          <div
            key={index}
            className={`hidden md:flex absolute ${icon.position} w-10 h-10 md:w-14 md:h-14 ${icon.color} rounded-full items-center justify-center text-xl md:text-2xl shadow-lg backdrop-blur-sm bg-opacity-80 z-20`}
          >
            {icon.icon}
          </div>
        ))}

        {/* Inner circular area */}
        <div className="relative w-full max-w-[500px] h-auto md:h-[500px] mx-auto">
          {/* Large circular glow backdrop - Hidden on mobile */}
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-pink-900/30 rounded-full blur-2xl" />
          
          {/* Circular border - Hidden on mobile */}
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[420px] md:h-[420px] border border-gray-700/30 rounded-full" />

          {/* Center icon - Hidden on mobile */}
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-gray-800/80 backdrop-blur-sm rounded-full items-center justify-center border border-gray-700/50 z-30">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </div>

          {/* Workflow cards */}
          {workflowCards.map((card, index) => (
            <div
              key={index}
              className={`md:absolute ${card.position} w-full md:w-[240px] bg-gray-900/70 backdrop-blur-md border border-gray-700/50 rounded-2xl p-5 z-20 mb-4 md:mb-0`}
            >
              {/* Card header with title and status */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold text-lg">{card.title}</h3>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full opacity-50"></div>
                </div>
              </div>

              {/* Card content - bullet points */}
              <ul className="space-y-2">
                {card.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2 text-gray-400 text-sm">
                    <span className="text-gray-500 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
