import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ cart, setActiveTab }) => {
  return (
    <div className='navbar bg-base-100 shadow-md px-4 lg:px-10 sticky top-0 z-50'>
      <div className='navbar container mx-auto'>
        
        {/* Navbar Start: Logo */}
        <div className='navbar-start'>
          <h1 
            className='text-2xl font-bold text-purple-600 cursor-pointer' 
            onClick={() => setActiveTab('products')}
          >
            DigiTools
          </h1>
        </div>
        
        {/* Navbar Center: */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium text-gray-700 gap-2">
            <li className="cursor-pointer hover:text-purple-600"><a>Products</a></li>
            <li className="cursor-pointer hover:text-purple-600"><a>Features</a></li>
            <li className="cursor-pointer hover:text-purple-600"><a>Pricing</a></li>
            <li className="cursor-pointer hover:text-purple-600"><a>Testimonials</a></li>
            <li className="cursor-pointer hover:text-purple-600"><a>FAQ</a></li>
          </ul>
        </div>
        
        {/* Navbar End: */}
        <div className="navbar-end flex items-center gap-6">
          {/* Cart Icon with Counter */}
          <div 
            onClick={() => setActiveTab('cart')} 
            className="relative cursor-pointer p-2 hover:bg-gray-100 rounded-full flex items-center"
          >
            <FaShoppingCart className="text-xl" />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">
                {cart.length}
              </span>
            )}
          </div>

          {/* Login & Get Started */}
          <div className="flex items-center gap-4">
             <button className="text-sm font-semibold hover:text-purple-600">Login</button>
             <button className="btn btn-sm lg:btn-md bg-purple-600 text-white rounded-full border-none px-6 hover:bg-purple-700 transition">
                Get Started
             </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;