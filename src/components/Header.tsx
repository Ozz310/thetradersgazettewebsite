// src/components/Header.tsx - FINAL RESPONSIVE VERSION
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // 🔗 UPDATED: Professional Subdomain Link (Same-tab redirect)
  const appAuthLink = "https://app.thetradersgazette.com/#auth";

  const navItems = (
    <>
      <a href="/" className="hover:text-tg-gold transition duration-300 block py-2 px-4 md:p-0">Home</a>
      <a href="/blog" className="hover:text-tg-gold transition duration-300 block py-2 px-4 md:p-0">Blog</a>
      <a href="/features" className="hover:text-tg-gold transition duration-300 block py-2 px-4 md:p-0">Features</a>
    </>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md shadow-lg border-b border-gray-700/50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="/" className="flex items-center space-x-2">
          <img src="/logo_tg.jpeg" alt="The Traders Gazette Logo" className="h-10" />
        </a>

        <nav className="hidden md:flex space-x-8 text-gray-300 font-semibold">
          {navItems}
        </nav>

        <div className="space-x-4 flex items-center">
          <button 
            className="text-white md:hidden p-2 focus:outline-none z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
          
          <a href={appAuthLink} className="hidden md:inline-block text-gray-300 hover:text-tg-gold font-semibold transition duration-300">
            Login
          </a>
          
          <a href={appAuthLink} className="hidden md:inline-block bg-gradient-gold text-gray-900 font-bold py-2 px-4 rounded-full shadow-lg hover:brightness-110 transition duration-300">
            Register
          </a>
        </div>
      </div>
      
      <nav className={`md:hidden absolute top-full left-0 right-0 bg-black/95 border-t border-gray-700/50 transform transition-all duration-330 ease-in-out ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'} flex flex-col items-start p-4 text-gray-300 font-semibold`}>
        {navItems}
        <div className="w-full mt-4 pt-4 border-t border-gray-700/50 flex flex-col space-y-3">
          <a href={appAuthLink} className="text-gray-300 hover:text-tg-gold font-semibold py-2 w-full text-left">Login</a>
          <a href={appAuthLink} className="bg-gradient-gold text-gray-900 font-bold py-2 px-4 rounded-lg shadow-lg hover:brightness-110 transition duration-300 w-full text-center">Register</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
