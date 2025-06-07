import React from 'react';

const Navbar = () => {
  return (
    <nav className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm fixed w-full z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-500">ExcelAnalytics</div>
          <div className="space-x-6">
            <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-blue-400 transition-colors">How It Works</a>
            <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 