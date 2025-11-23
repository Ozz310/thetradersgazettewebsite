// src/components/Header.tsx
// Using React and TypeScript

import React from 'react';

const NAV_LINKS = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'Features', href: '/features' },
];

interface NavItemProps {
    name: string;
    href: string;
    isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ name, href, isActive }) => (
    <a
        href={href}
        className={`
            text-sm font-medium transition-colors duration-200 
            ${isActive 
                ? 'text-tg-gold border-b-2 border-tg-gold' 
                : 'text-gray-300 hover:text-white hover:border-b-2 hover:border-gray-500'
            }
            py-1 px-3
        `}
    >
        {name}
    </a>
);

const Header: React.FC = () => {
    // This is a placeholder for the current path in a static environment
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';
    const isLinkActive = (href: string) => currentPath === href || (href === '/' && currentPath === '/index.html');

    return (
        <header className="bg-tg-dark border-b border-tg-gray/50 shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                
                {/* Logo / Brand Title */}
                <div className="flex items-center space-x-2">
                    <span className="text-xl font-extrabold text-tg-gold tracking-wider">
                        T<span className="text-gray-100">'G</span>
                    </span>
                    <h1 className="text-sm text-gray-400 font-light hidden sm:block">
                        The Trader's Gazette
                    </h1>
                </div>

                {/* Central Navigation */}
                <nav className="hidden md:flex space-x-8">
                    {NAV_LINKS.map((link) => (
                        <NavItem 
                            key={link.href}
                            name={link.name}
                            href={link.href}
                            isActive={isLinkActive(link.href)}
                        />
                    ))}
                </nav>

                {/* Login / Register Buttons (High Signal CTAs) */}
                <div className="flex items-center space-x-3">
                    {/* Login - Muted/Secondary CTA */}
                    <a
                        href="/auth/login"
                        className="text-sm font-semibold text-gray-300 hover:text-white transition-colors duration-200 py-1 px-3 hidden sm:block"
                    >
                        Login
                    </a>
                    
                    {/* Register - Primary CTA (Using TG Gold) */}
                    <a
                        href="/auth/register"
                        className="
                            bg-tg-gold text-gray-900 font-bold text-sm 
                            py-1.5 px-4 rounded-md shadow-md 
                            hover:bg-yellow-500 transition-all duration-300
                            whitespace-nowrap
                        "
                    >
                        Register
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
