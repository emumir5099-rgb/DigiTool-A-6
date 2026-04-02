import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ cart, setActiveTab }) => {
  return (
    <div className='navbar bg-base-100 shadow-md px-4 lg:px-10 sticky top-0 z-50'>
      <div className='navbar container mx-auto'>
        <div className='navbar-start'>
          <h1 className='text-2xl font-bold text-purple-600 cursor-pointer' onClick={() => setActiveTab('products')}>DigiTools</h1>
        </div>
        
        <div className="navbar-end flex items-center gap-4">
         
          <div onClick={() => setActiveTab('cart')} className="relative cursor-pointer p-2 hover:bg-gray-100 rounded-full">
            <FaShoppingCart className="text-2xl" />
            <span className="absolute top-0 -right-1 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">
              {cart.length}
            </span>
          </div>
          <button className="btn bg-purple-600 text-white rounded-full border-none">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;