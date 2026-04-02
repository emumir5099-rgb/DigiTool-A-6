import React from 'react';
import User from "../../assets/user.png";
import Box from "../../assets/package.png";
import Rocket from "../../assets/rocket.png";

const GetStarted = () => {
  
  const steps = [
    {
      id: "01",
      icon: User,
      title: "Create Account",
      description: "Sign up for free in seconds. No credit card required to get started.",
    },
    {
      id: "02",
      icon: Box,
      title: "Choose Products",
      description: "Browse our catalog and select the tools that fit your needs.",
    },
    {
      id: "03",
      icon: Rocket, 
      title: "Start Creating",
      description: "Download and start using your premium tools immediately.",
    },
  ];

  return (
    <div className="bg-white py-16 px-4 lg:px-10 mt-16">
      <div className="container mx-auto max-w-7xl">
        
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-950">
            Get Started In 3 Steps
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto font-medium">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {steps.map((step) => {
            return (
              <div 
                key={step.id} 
                className="bg-white p-8 lg:p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center relative h-full hover:shadow-lg transition-all duration-300"
              >
            
                <span className="absolute top-5 right-5 bg-purple-600 text-white text-xs font-bold w-7 h-7 flex items-center justify-center rounded-full">
                  {step.id}
                </span>

                <div className="w-24 h-24 rounded-full bg-purple-50 flex items-center justify-center mb-8 border border-purple-100">
                  <img src={step.icon} alt={step.title} className="w-12 h-12 object-contain" />
                </div>

                <div className="flex-grow space-y-3">
                  <h3 className="text-2xl font-bold text-gray-950">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GetStarted;