import React from 'react';

const ProductHighlight = () => {
  const features = [
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#002E89' }}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          <circle cx="12" cy="8" r="2"/>
          <path d="M12 12v4m-4-2h8"/>
        </svg>
      ),
      title: 'Smart Scheduling Automation',
      description: 'Eliminate the back-and-forth. Automate bookings, reschedules, and cancellations with customizable pages that adapt to your workflow.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#002E89' }}>
          <rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
          <rect x="7" y="7" width="4" height="4" rx="1"/>
          <rect x="13" y="7" width="4" height="4" rx="1"/>
          <rect x="7" y="13" width="4" height="4" rx="1"/>
          <rect x="13" y="13" width="4" height="4" rx="1"/>
        </svg>
      ),
      title: 'Intuitive Dashboard',
      description: 'Enjoy a modern, clutter-free dashboard that makes managing bookings, payments, and team schedules effortless'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#002E89' }}>
          <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
          <circle cx="9" cy="9" r="2" fill="white"/>
          <circle cx="15" cy="9" r="2" fill="white"/>
          <circle cx="12" cy="14" r="2" fill="white"/>
        </svg>
      ),
      title: 'Seamless Integrations',
      description: 'Sync with Google Calendar, Microsoft 365, iCal, Stripe, and PayPal to keep your ecosystem connected.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#002E89' }}>
          <path d="M3 13h2v7H3v-7zm4-6h2v13H7V7zm4 3h2v10h-2V10zm4-4h2v14h-2V6zm4 2h2v12h-2V8z"/>
          <path d="M3 3h18v2H3z"/>
        </svg>
      ),
      title: 'Real-Time Analytics',
      description: 'Track bookings, revenue, and team activity with actionable insights that help you scale smarter.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#002E89' }}>
          <rect x="5" y="4" width="14" height="17" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 2v4m8-4v4M8 7h8"/>
        </svg>
      ),
      title: 'Multi-Platform Access',
      description: 'Manage schedules anytime, anywhere — fully optimized for web, tablet, and mobile.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#002E89' }}>
          <path d="M15 3l6 6-6 6-1.5-1.5L17 10H9v8.5L5.5 22 2 18.5 5.5 15H9V10l-3.5 3.5L4 12l6-6 6 6-1.5 1.5L11 10h6l-3.5 3.5L15 15z"/>
          <path d="M19 19H5V5h14v14z" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Drag-and-Drop Customization',
      description: 'Easily personalize booking pages with your logo, theme colors, and layouts — no coding required.'
    }
  ];

  return (
    <section className="relative min-h-screen py-16 md:py-20 px-4 md:px-6 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-1/4 w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full blur-[150px]" style={{ backgroundColor: 'rgba(0, 46, 137, 0.15)' }} />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full blur-[150px]" style={{ backgroundColor: 'rgba(0, 46, 137, 0.1)' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Product Highlight
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Powerful features designed to streamline your scheduling workflow and boost productivity.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-hover backdrop-blur-sm border rounded-3xl p-8 text-center transition-all duration-300 hover:-translate-y-1"
              style={{ 
                backgroundColor: 'rgba(0, 46, 137, 0.1)', 
                borderColor: 'rgba(0, 46, 137, 0.3)'
              }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                {feature.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductHighlight;
