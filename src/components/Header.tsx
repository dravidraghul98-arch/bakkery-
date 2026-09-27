import React, { useState } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Bread', href: '#bread' },
    { name: 'Cakes', href: '#cakes' },
    { name: 'Specialty Cakes', href: '#specialty' },
    { name: 'Pastry', href: '#pastry' },
    { name: 'Cookies', href: '#cookies' },
    { name: 'Special Events', href: '#consultation' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#location' },
  ];

  return (
    <header className="w-full bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Header Container */}
        <div className="pt-5 pb-3 flex flex-col items-center justify-center relative">
          
          {/* Logo Container - Matching Reference Image Exactly */}
          <a href="#" className="flex items-center justify-center gap-3 sm:gap-4 group">
            {/* Logo Text: Bakkings Elite */}
            <div className="flex flex-col items-center sm:items-end leading-none">
              <span className="font-script text-4xl sm:text-5xl lg:text-6xl text-[#1E3A5F] tracking-wide font-normal leading-none drop-shadow-xs">
                Bakkings
              </span>
              <span className="font-sans text-[11px] sm:text-xs tracking-[0.3em] font-bold text-[#1E3A5F] uppercase pt-0.5 pr-1">
                ELITE
              </span>
            </div>

            {/* Custom 3-Tier Cake Icon matching the uploaded screenshot */}
            <div className="relative shrink-0">
              <svg
                viewBox="0 0 120 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-14 sm:w-20 sm:h-16 text-[#20436B]"
              >
                {/* Swooping Base Line */}
                <path d="M 5 78 C 35 92 85 92 115 72" stroke="#20436B" strokeWidth="2.5" strokeLinecap="round" />
                
                {/* Cake Pedestal Stand */}
                <ellipse cx="60" cy="74" rx="32" ry="4" fill="#D6E4F0" stroke="#20436B" strokeWidth="2" />
                <path d="M 60 74 L 60 82 M 48 82 L 72 82" stroke="#20436B" strokeWidth="2.5" strokeLinecap="round" />

                {/* Tier 1 - Bottom */}
                <path d="M 32 50 C 32 46 88 46 88 50 L 88 72 C 88 76 32 76 32 72 Z" fill="#EFF5FA" stroke="#20436B" strokeWidth="2.2" />
                <path d="M 32 62 Q 60 67 88 62" stroke="#20436B" strokeWidth="1.5" />
                <path d="M 32 56 Q 60 61 88 56" stroke="#20436B" strokeWidth="1.2" strokeDasharray="3 3" />

                {/* Tier 2 - Middle */}
                <path d="M 38 30 C 38 27 82 27 82 30 L 82 50 C 82 53 38 53 38 50 Z" fill="#D6E4F0" stroke="#20436B" strokeWidth="2.2" />
                <path d="M 38 40 Q 60 44 82 40" stroke="#20436B" strokeWidth="1.5" />
                
                {/* Tier 3 - Top */}
                <path d="M 44 14 C 44 12 76 12 76 14 L 76 30 C 76 32 44 32 44 30 Z" fill="#EFF5FA" stroke="#20436B" strokeWidth="2.2" />
                <path d="M 44 22 Q 60 25 76 22" stroke="#20436B" strokeWidth="1.5" />

                {/* Decorative Top Bow / Ribbon */}
                <circle cx="60" cy="10" r="3" fill="#20436B" />
                <path d="M 54 8 C 50 4 48 10 56 10 M 66 8 C 70 4 72 10 64 10" stroke="#20436B" strokeWidth="1.8" fill="none" />
              </svg>
            </div>
          </a>

          {/* Mobile Menu Button - Right aligned on mobile */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1E3A5F] hover:bg-slate-50 rounded-lg transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Centered Desktop Navigation Bar - Matching Reference Image */}
        <nav className="hidden lg:flex items-center justify-center gap-7 sm:gap-9 py-3 border-t border-slate-100 text-sm font-medium text-slate-700">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#1E3A5F] transition-colors py-1 relative font-normal text-[15px]"
            >
              {link.name}
            </a>
          ))}
        </nav>

      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-6 py-4 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-700 hover:text-[#1E3A5F] py-2 border-b border-slate-50"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

