import React from 'react';
import { Link } from 'react-router-dom';

const Navbar= () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Custom Tailor
        </Link>
        
        <div className="space-x-4">
          <Link 
            to="/customize" 
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Customize
          </Link>
          <Link 
            to="/track-order" 
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Track Order
          </Link>
          <Link 
            to="/cart" 
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
