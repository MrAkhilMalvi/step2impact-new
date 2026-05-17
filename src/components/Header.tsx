import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to handle shadow/blur on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
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
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#EFE1D1]/90 backdrop-blur-md shadow-sm py-4' 
          : 'bg-[#EFE1D1] py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* LEFT SIDE: Logo */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-9 h-9 bg-[#101828] rounded-xl flex items-center justify-center transition-transform group-hover:rotate-6">
            <span className="text-[#FF7373] font-bold text-xl">S</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl tracking-tight text-[#101828] leading-none">
              Step2Impact
            </span>
            <span className="text-[10px] uppercase tracking-[0.1em] font-semibold text-gray-500">
              Global Network
            </span>
          </div>
        </div>

        {/* CENTER: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[15px] font-semibold text-[#101828]/70 hover:text-[#101828] transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* RIGHT SIDE: Single Action Button */}
        <div className="flex items-center">
          <a 
            href="#contact"
            className="px-6 py-2.5 bg-[#101828] text-white text-sm font-bold rounded-full hover:bg-[#FF7373] transition-all shadow-lg shadow-black/5"
          >
            Contact Us
          </a>

          {/* Mobile Menu Toggle (Only visible on small screens) */}
          <button className="ml-4 md:hidden text-[#101828]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;