'use client'
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto py-4 flex justify-between items-center">
        
        <div className="flex items-center">
          <img src="/KoinX.svg" alt="KoinX Logo" className="h-6" />
        </div>

        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">
            Crypto Taxes
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">
            Free Tools
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">
            Resource Center
          </a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700">
            Get Started
          </button>
        </div>

        <div className="md:hidden">
          <FiMenu
            size={24}
            className="text-gray-600 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>

      
      {isOpen && (
        <div className="md:hidden bg-white shadow-md py-4 px-4">
          <a
            href="#"
            className="block text-gray-600 hover:text-blue-600 font-medium mb-2"
          >
            Crypto Taxes
          </a>
          <a
            href="#"
            className="block text-gray-600 hover:text-blue-600 font-medium mb-2"
          >
            Free Tools
          </a>
          <a
            href="#"
            className="block text-gray-600 hover:text-blue-600 font-medium mb-2"
          >
            Resource Center
          </a>
          <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
