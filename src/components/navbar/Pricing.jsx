import React from 'react';
import { toast } from 'react-toastify';

const Pricing = () => {
    const plans = [
        {
            name: "Starter",
            description: "Perfect for getting started",
            price: "0",
            billing: "/Month",
            features: ["Access to 10 free tools", "Basic templates", "Community support", "1 project per month"],
            buttonText: "Get Started Free",
            isPopular: false
        },
        {
            name: "Pro",
            description: "Best for professionals",
            price: "29",
            billing: "/Month",
            features: ["Access to all premium tools", "Unlimited templates", "Priority support", "Unlimited projects", "Cloud sync", "Advanced analytics"],
            buttonText: "Start Pro Trial",
            isPopular: true
        },
        {
            name: "Enterprise",
            description: "For teams and businesses",
            price: "99",
            billing: "/Month",
            features: ["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "SLA guarantee", "Custom branding"],
            buttonText: "Contact Sales",
            isPopular: false
        }
    ];

    const handlePricingClick = (planName) => {
        toast.success(`${planName} plan selected successfully!`);
    };

    return (
        <div className="bg-white py-20 px-4">
            <div className="container mx-auto max-w-7xl">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
                    <p className="text-gray-500 text-lg">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>

                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {plans.map((plan, index) => (
                        <div 
                            key={index} 
                            className={`relative p-8 rounded-3xl border transition-all duration-300 ${
                                plan.isPopular 
                                ? "bg-purple-600 text-white shadow-2xl scale-105 border-purple-600 z-10" 
                                : "bg-white text-gray-900 border-gray-200 hover:shadow-lg"
                            }`}
                        >
                            {/* Most Popular Badge */}
                            {plan.isPopular && (
                                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-400 text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                                    Most Popular
                                </span>
                            )}

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                <p className={`${plan.isPopular ? "text-purple-100" : "text-gray-500"}`}>{plan.description}</p>
                            </div>

                            <div className="mb-8 flex items-baseline">
                                <span className="text-5xl font-extrabold">${plan.price}</span>
                                <span className={`text-lg ml-1 ${plan.isPopular ? "text-purple-200" : "text-gray-400"}`}>{plan.billing}</span>
                            </div>

                            <ul className="space-y-4 mb-10">
                                {plan.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-center text-sm font-medium">
                                        <svg className={`w-5 h-5 mr-3 ${plan.isPopular ? "text-white" : "text-green-500"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button 
                                onClick={() => handlePricingClick(plan.name)}
                                className={`w-full py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                                    plan.isPopular 
                                    ? "bg-white text-purple-600 hover:bg-gray-100" 
                                    : "bg-purple-600 text-white hover:bg-purple-700"
                                }`}
                            >
                                {plan.buttonText}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Pricing;