// src/components/Header.tsx
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const appAuthLink = "https://app.thetradersgazette.com/#auth";

  const navItems = (
    <>
      <a href="/" className="hover:text-[#DDAA33] transition duration-300 block py-2 px-4 md:p-0">Home</a>
      <a href="/blog" className="hover:text-[#DDAA33] transition duration-300 block py-2 px-4 md:p-0">Blog</a>
      <a href="/features" className="hover:text-[#DDAA33] transition duration-300 block py-2 px-4 md:p-0">Features</a>
    </>
  );

  return (
    // 🛠️ FIX: Enforced Neutral Obsidian Background & Neutral Border (No Blue/Gray)
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/90 backdrop-blur-md shadow-lg border-b border-[#222]">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="/" className="flex items-center space-x-2">
          <img src="/logo_tg.jpeg" alt="The Traders Gazette Logo" className="h-10 rounded-full border border-[#DDAA33]/20" />
        </a>

        {/* Desktop Nav - Using Institutional Grey (#8B949E) */}
        <nav className="hidden md:flex space-x-8 text-[#8B949E] font-semibold tracking-wide">
          {navItems}
        </nav>

        <div className="space-x-4 flex items-center">
          {/* Mobile Toggle */}
          <button className="text-[#f1f1f1] md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
          
          <a href={appAuthLink} className="hidden md:inline-block text-[#8B949E] hover:text-[#DDAA33] font-semibold transition duration-300">
            Login
          </a>
          
          {/* REGISTER BUTTON WITH TERMINAL GOLD GRADIENT */}
          <a 
            href={appAuthLink} 
            style={{ background: 'linear-gradient(145deg, #F0D788, #DDAA33)' }}
            className="hidden md:inline-block text-[#0D0D0D] font-bold py-2 px-6 rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_15px_rgba(221,170,51,0.4)] hover:brightness-110 transition duration-300 transform hover:-translate-y-0.5"
          >
            Register
          </a>
        </div>
      </div>
      
      {/* Mobile Menu - Enforced Obsidian Background */}
      <nav className={`md:hidden absolute top-full left-0 right-0 bg-[#050505] border-b border-[#222] transform transition-all duration-300 ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'} p-4 text-[#8B949E] font-semibold`}>
        {navItems}
        <div className="w-full mt-4 pt-4 border-t border-[#222] flex flex-col space-y-3">
          <a href={appAuthLink} className="text-[#8B949E] hover:text-[#DDAA33] py-2">Login</a>
          <a 
            href={appAuthLink} 
            style={{ background: 'linear-gradient(145deg, #F0D788, #DDAA33)' }}
            className="text-[#0D0D0D] font-bold py-2 px-4 rounded-lg text-center shadow-lg"
          >
            Register
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
