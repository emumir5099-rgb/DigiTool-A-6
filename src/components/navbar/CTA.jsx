import React from 'react';

const CTA = () => {
  return (
    <div className="bg-purple-600 text-white py-20 px-4 lg:px-10">
      <div className="container mx-auto max-w-7xl">
        
        {/* Title & Description */}
        <div className="text-center mb-10 space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Ready To Transform Your Workflow?
          </h2>
          <p className="text-purple-100 text-lg max-w-2xl mx-auto font-medium">
            Join thousands of professionals who are already using Digitools to work smarter. 
            Start your free trial today.
          </p>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
            <button 
              className="px-10 py-3 bg-white text-purple-600 rounded-full font-bold hover:bg-gray-100 transition-colors"
            >
              Explore Products
            </button>

            <button 
              className="px-10 py-3 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-purple-600 transition-all"
            >
              View Pricing
            </button>
        </div>
        
        {/* Bottom Small Text */}
        <div className="text-center">
            <p className="text-purple-200 text-sm md:text-base font-medium opacity-90">
                14-day free trial • No credit card required • Cancel anytime
            </p>
        </div>
      </div>
    </div>
  );
};

export default CTA;