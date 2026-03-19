"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Smooth Scroll Detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Facilities", path: "/facilities" },
    { name: "Library", path: "/library" },
    { name: "Notice Board", path: "/events" },
    { name: "Reviews", path: "/reviews" },
  ];

  return (
    <>
      {/* Desktop Navbar (Kept the highly refined version) */}
      <nav 
        className={`fixed w-full z-[60] top-0 transition-all duration-500 ease-out no-print ${
          scrolled && !isMobileMenuOpen
            ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] py-0' 
            : 'bg-transparent border-b border-transparent py-2'
        }`}
      >
        {/* Background patch to ensure logo visibility when menu is closed but not scrolled */}
        {!scrolled && !isMobileMenuOpen && (
           <div className="absolute inset-0 bg-white shadow-sm -z-10"></div>
        )}

        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex justify-between items-center h-[72px]">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center relative z-[60]">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className={`text-[22px] font-extrabold flex items-center tracking-tight transition-colors duration-300 ${isMobileMenuOpen ? 'text-white' : 'text-blue-950'}`}>
                <i className="fa-solid fa-building-columns text-yellow-500 mr-2.5 text-xl"></i>
                Sankalp<span className={`font-normal transition-colors duration-300 ${isMobileMenuOpen ? 'text-slate-300' : 'text-slate-500'}`}>Vision</span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link 
                    key={link.name} 
                    href={link.path} 
                    className="relative group px-4 py-2"
                  >
                    <span className={`text-[14px] font-medium tracking-wide transition-colors duration-300 ${
                      isActive ? 'text-blue-700' : 'text-slate-600 hover:text-blue-950'
                    }`}>
                      {link.name}
                    </span>
                    <span className={`absolute bottom-1 left-1/2 h-[2px] bg-blue-600 transition-all duration-300 ease-out -translate-x-1/2 ${
                      isActive ? 'w-[calc(100%-2rem)]' : 'w-0 group-hover:w-[calc(100%-2rem)]'
                    }`}></span>
                  </Link>
                );
              })}
              
              <div className="pl-4 ml-2 border-l border-slate-200">
                <Link 
                  href="/#demo" 
                  className="inline-flex items-center justify-center bg-[#0a192f] text-white px-7 py-2.5 rounded-full text-[14px] font-semibold tracking-wide transition-all duration-300 ease-out hover:bg-blue-600 hover:shadow-[0_8px_20px_rgba(37,99,235,0.25)] hover:-translate-y-[2px]"
                >
                  Book Demo
                </Link>
              </div>
            </div>

            {/* Premium Interactive Hamburger Button (Changes color if menu is open) */}
            <div className="lg:hidden flex items-center relative z-[60]">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-10 h-10 flex flex-col justify-center items-end focus:outline-none group"
                aria-label="Toggle Menu"
              >
                <div className="relative w-6 h-[14px]">
                  <span className={`absolute left-0 w-full h-[2px] rounded-full transition-all duration-400 ease-[cubic-bezier(0.85,0,0.15,1)] ${
                    isMobileMenuOpen ? 'top-[6px] rotate-45 bg-white' : 'top-0 bg-slate-800 group-hover:bg-blue-600'
                  }`}></span>
                  <span className={`absolute left-0 top-[6px] h-[2px] rounded-full transition-all duration-400 ease-[cubic-bezier(0.85,0,0.15,1)] ${
                    isMobileMenuOpen ? 'w-0 opacity-0 bg-white' : 'w-4 opacity-100 bg-slate-800 group-hover:bg-blue-600 group-hover:w-full'
                  }`}></span>
                  <span className={`absolute left-0 w-full h-[2px] rounded-full transition-all duration-400 ease-[cubic-bezier(0.85,0,0.15,1)] ${
                    isMobileMenuOpen ? 'top-[6px] -rotate-45 bg-white' : 'top-[12px] bg-slate-800 group-hover:bg-blue-600'
                  }`}></span>
                </div>
              </button>
            </div>
            
          </div>
        </div>
      </nav>

      {/* =========================================
          PREMIUM FULL-SCREEN CINEMATIC MOBILE MENU 
          ========================================= */}
      <div 
        className={`fixed inset-0 z-50 bg-[#0a192f] flex flex-col justify-center items-center transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] lg:hidden ${
          isMobileMenuOpen 
            ? 'opacity-100 visible clip-path-full' 
            : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Decorative background element */}
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-yellow-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="flex flex-col items-center justify-center space-y-6 w-full px-6 relative z-10">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.path;
            return (
              <div 
                key={link.name}
                className="overflow-hidden w-full text-center"
              >
                <Link 
                  href={link.path} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  // The Staggered Slide-up Animation magic is here:
                  style={{ transitionDelay: isMobileMenuOpen ? `${100 + index * 50}ms` : '0ms' }}
                  className={`inline-block text-3xl font-extrabold tracking-tight transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isMobileMenuOpen 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-full opacity-0'
                  } ${
                    isActive ? 'text-yellow-400' : 'text-slate-200 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && <span className="block w-2 h-2 bg-yellow-400 rounded-full mx-auto mt-2"></span>}
                </Link>
              </div>
            );
          })}

          <div 
            className="overflow-hidden mt-10 w-full flex justify-center"
            style={{ transitionDelay: isMobileMenuOpen ? `${100 + navLinks.length * 50 + 100}ms` : '0ms' }}
          >
            <Link 
              href="/#demo" 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`inline-flex items-center justify-center bg-white text-[#0a192f] px-8 py-4 rounded-full text-lg font-bold tracking-wide transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-[0_10px_30px_rgba(255,255,255,0.15)] hover:scale-105 ${
                isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}
            >
              Book Free Demo <i className="fa-solid fa-arrow-right ml-3"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}