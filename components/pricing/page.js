import React from 'react';

const PricingSection = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'per month',
      description: 'Explore the product and power small, personal projects.',
      features: [
        '500 Encrypts',
        '500 Decrypts',
        '250 Cage Runs'
      ],
      buttonText: 'Get Started',
      buttonStyle: 'bg-white text-gray-900 hover:bg-gray-100'
    },
    {
      name: 'Pro',
      badge: 'Popular',
      price: '$395',
      period: 'per month',
      description: 'Run production apps with full functionality.',
      features: [
        'Unlimited Encrypts',
        '5,000 Decrypts',
        'Then $0.02 per Decrypt',
        '2,500 Cage Runs',
        'Then $0.04 per Cage Run'
      ],
      trial: 'Try Pro for free with a 30-day trial.',
      buttonText: 'Start Free Trial',
      buttonStyle: 'bg-white text-gray-900 hover:bg-gray-100',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom pricing',
      period: '',
      description: 'Run compliant production apps with full functionality, onboarding and support.',
      features: [
        'Unlimited Encrypts',
        'Custom Decrypts',
        'Custom Cage Runs',
        'Fast-tracked PCI & HIPAA'
      ],
      buttonText: 'Contact Sales',
      buttonStyle: 'bg-white text-gray-900 hover:bg-gray-100'
    }
  ];

  return (
    <section className="relative min-h-screen py-16 md:py-20 px-4 md:px-6 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-1/3 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-purple-600/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 left-1/3 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-indigo-600/15 rounded-full blur-[150px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Pricing
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Safely collect, process, and share your data with the plan that&apos;s right for you.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-[#252841]/60 backdrop-blur-sm border rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                plan.popular 
                  ? 'border-purple-500/50 shadow-lg shadow-purple-500/20' 
                  : 'border-gray-700/50'
              }`}
            >
              {/* Popular Badge */}
              {plan.badge && (
                <div className="absolute top-6 right-6">
                  <span className="bg-gray-700/80 text-gray-300 text-xs font-medium px-3 py-1 rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-white mb-6">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-4">
                <span className="text-4xl font-bold text-white">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-gray-400 text-lg ml-2">
                    {plan.period}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg 
                      className="w-5 h-5 text-white mt-0.5 flex-shrink-0" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                        clipRule="evenodd"
                      />
                    </svg>
                    <div className="flex-1">
                      <span className="text-gray-300 text-sm block">
                        {feature.split('\n')[0]}
                      </span>
                      {feature.includes('Then') && (
                        <span className="text-gray-500 text-xs block mt-1">
                          {feature.split('\n')[1] || feature.substring(feature.indexOf('Then'))}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {/* Trial Text */}
              {plan.trial && (
                <p className="text-gray-400 text-sm mb-6 text-center">
                  Try <span className="bg-gray-700 text-white px-2 py-0.5 rounded text-xs">Pro</span> for free with a 30-day trial.
                </p>
              )}

              {/* Button */}
              <button className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${plan.buttonStyle}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
