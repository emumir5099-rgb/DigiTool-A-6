import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({cart}) => {
  return (
    <div className='navbar bg-base-100 shadow-md px-4 lg:px-10'>
      <div className='navbar container mx-auto px-0'>
        {/* Navbar Left */}
        <div className='navbar-start'>
          <h1 className='text-2xl font-bold text-purple-600'> DigiTools</h1>
        </div>
        
        {/* Center */}
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1 font-medium'>
            <li><a>Products</a></li>
            <li><a>Features</a></li>
            <li><a>Pricing</a></li>
            <li><a>Testimonials</a></li>
            <li><a>FAQ</a></li>
          </ul>
        </div>

        {/* Right*/}
        <div className="navbar-end flex items-center gap-4">
          <div className="relative cursor-pointer mr-2">
            <FaShoppingCart className="text-2xl" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
              {cart.length}
            </span>
          </div>

          <button className="btn btn-ghost">Login</button>

          <button className="btn bg-purple-600 text-white rounded-full px-6 border-none">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;