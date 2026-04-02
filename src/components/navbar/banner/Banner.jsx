import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';
// তোমার ফোল্ডার স্ট্রাকচার অনুযায়ী সঠিক পাথ
import bannerImg from '../../../assets/banner.png'; 

const Banner = () => {
    return (
        <section className="bg-white py-10 md:py-20">
            <div className="container mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                
                {/* Left Side: Content */}
                <div className="space-y-6">
                    {/* Badge */}
                    <div className="flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full w-fit">
                        <div className="w-2 h-2 rounded-full bg-purple-600"></div>
                        <p className="text-purple-600 text-sm font-bold">New: AI-Powered Tools Available</p>
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                        Supercharge Your <br /> Digital Workflow
                    </h1>

                    {/* Description */}
                    <p className="text-gray-500 text-lg">
                        Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
                    </p>
                    
                    <p className="text-gray-400 font-medium cursor-pointer hover:underline">Explore Products</p>

                    {/* Buttons */}
                    <div className="flex gap-4 pt-4">
                        <button className="btn bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 border-none normal-case font-bold">
                            Explore Products
                        </button>
                        
                        <button className="btn btn-outline border-purple-600 text-purple-600 hover:bg-purple-50 rounded-full px-8 font-bold normal-case gap-2">
                            <FaPlayCircle className="text-xl" />
                            Watch Demo
                        </button>
                    </div>
                </div>

                {/* Right Side: Image */}
                <div className="flex justify-center items-center">
                    <img 
                        src={bannerImg} 
                        alt="Banner Illustration" 
                        className="w-full max-w-lg object-contain"
                    />
                </div>
                
            </div>
        </section>
    );
};

export default Banner;