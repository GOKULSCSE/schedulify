import React from 'react';

const WorkflowSection = () => {
  const workflowCards = [
    {
      title: 'UX Design',
      position: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2',
      items: ['User Interviews', 'Persona', 'User Journey Map']
    },
    {
      title: 'Research',
      position: 'left-0 top-1/2 -translate-y-1/2 -translate-x-1/2',
      items: ['User Interviews', 'Persona', 'User Journey Map']
    },
    {
      title: 'UI Design',
      position: 'right-0 top-1/2 -translate-y-1/2 translate-x-1/2',
      items: ['User Interviews', 'Persona', 'User Journey Map']
    },
    {
      title: 'Presentation',
      position: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2',
      items: ['User Interviews', 'Persona', 'User Journey Map']
    }
  ];

  const outerIcons = [
    { icon: '🎨', color: 'bg-purple-600', position: 'top-[10%] right-[20%]' },
    { icon: '⭐', color: 'bg-yellow-600', position: 'bottom-[20%] right-[15%]' },
    { icon: '📊', color: 'bg-blue-600', position: 'bottom-[20%] left-[15%]' },
    { icon: '💾', color: 'bg-teal-600', position: 'top-[10%] left-[20%]' },
    { icon: '↑', color: 'bg-gray-700', position: 'left-[8%] top-1/2 -translate-y-1/2' },
    { icon: '↓', color: 'bg-gray-700', position: 'right-[8%] top-1/2 -translate-y-1/2' },
    { icon: '⚙️', color: 'bg-gray-700', position: 'top-[5%] left-1/2 -translate-x-1/2' }
  ];

  return (
    <section className="relative min-h-screen py-16 md:py-20 px-4 md:px-6 overflow-hidden flex items-center justify-center">
      {/* Background gradient orbs */}
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-600/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 right-1/3 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-purple-600/20 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-pink-600/10 rounded-full blur-[120px]" />

      <div className="relative w-full max-w-5xl mx-auto px-4">
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
    </section>
  );
};

export default WorkflowSection;
