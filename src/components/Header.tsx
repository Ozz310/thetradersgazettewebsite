// src/components/Header.tsx - FINAL VERSION

import React from 'react';

const Header: React.FC = () => {
  // External link for both login and registration in the app
  const appAuthLink = "https://ozz310.github.io/tradersgazetteterminal/#auth";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md shadow-lg border-b border-gray-700/50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo/Brand Link */}
        <a href="/" className="flex items-center space-x-2">
          <img 
            src="/logo_tg.jpeg" 
            alt="The Traders Gazette Logo"
            className="h-10" 
          />
        </a>

        {/* Navigation Links: HOME, Blog, Features */}
        <nav className="hidden md:flex space-x-8 text-gray-300 font-semibold">
          {/* FIX: Explicit Home link added back to the navigation list */}
          <a href="/" className="hover:text-tg-gold transition duration-300">Home</a> 
          <a href="/blog" className="hover:text-tg-gold transition duration-300">Blog</a>
          <a href="/features" className="hover:text-tg-gold transition duration-300">Features</a>
        </nav>

        {/* Auth Buttons */}
        <div className="space-x-4 flex items-center">
          {/* Login button connects to the external app link */}
          <a 
            href={appAuthLink}
            className="text-gray-300 hover:text-tg-gold font-semibold transition duration-300"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Login
          </a>
          
          {/* Register button also connects to the external app link */}
          <a 
            href={appAuthLink}
            className="bg-tg-gold text-gray-900 font-bold py-2 px-4 rounded-full shadow-lg hover:bg-yellow-500 transition duration-300"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Register
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
