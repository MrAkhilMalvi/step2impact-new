import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; // Optional: Install lucide-react for better icons

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Effect to handle shadow/blur on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Who We Are', href: '#about' },
    { name: 'Our Offerings', href: '#offerings' },
    { name: 'Impact Philosophy', href: '#impact' },
    { name: 'Our Leadership', href: '#founders' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-[#EFE1D1]/80 backdrop-blur-lg border-b border-[#101828]/5 py-3' 
          : 'bg-[#EFE1D1] py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        
        {/* LEFT SIDE: Logo */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 bg-[#101828] rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:rotate-6 shadow-md">
            <span className="text-[#FF7373] font-bold text-xl">S</span>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg md:text-xl tracking-tight text-[#101828] leading-none">
              Step2Impact
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#101828]/60">
              Global Network
            </span>
          </div>
        </div>

        {/* CENTER: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[14px] font-bold text-[#101828]/70 hover:text-[#FF7373] transition-colors duration-200 uppercase tracking-wide"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* RIGHT SIDE: Action Button */}
        <div className="flex items-center gap-4">
          <a 
            href="#contact"
            className="hidden sm:inline-block px-7 py-2.5 bg-[#101828] text-white text-[13px] font-bold rounded-full hover:bg-[#FF7373] hover:scale-105 transition-all active:scale-95 shadow-lg shadow-black/10"
          >
            Contact Us
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-[#101828]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div className={`
        absolute top-full left-0 w-full bg-[#EFE1D1] border-b border-black/5 flex flex-col items-center gap-6 py-10 transition-all duration-300 md:hidden
        ${isMobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-5 invisible pointer-events-none'}
      `}>
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-bold text-[#101828]"
          >
            {item.name}
          </a>
        ))}
        <a 
          href="#contact"
          className="px-8 py-3 bg-[#101828] text-white font-bold rounded-full"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Contact Us
        </a>
      </div>
    </header>
  );
};

export default Header;