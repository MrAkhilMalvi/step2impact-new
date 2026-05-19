import React, { useState, useEffect } from "react";
import { ChevronRight, Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // FIX 1: Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "About", link: "#about" },
    { name: "Impact", link: "#impact" },
    { name: "Offerings", link: "#offerings" },
    { name: "Leadership", link: "#leadership" },
    { name: "Contact Us", link: "#contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 z-[100] w-full border-b border-gray-100 bg-white py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* LOGO: Scaled down to prevent crashing into text */}
          <div className="flex items-center relative z-[120]">
            <img
              src="/logos/step2impactlogo.png"
              alt="Step2Impact Logo"
              className="h-7 md:h-10 w-auto object-contain scale-[1.5] md:scale-[2.5] origin-left transition-transform"
            />
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((item) => (
              <a key={item.name} href={item.link} className="text-sm font-bold text-[#101828]/70 hover:text-[#FF7373] transition-colors">
                {item.name}
              </a>
            ))}
          </nav>

          {/* DESKTOP ACTIONS */}
          <div className="hidden md:flex items-center gap-4">
            <button className="px-5 py-2 border border-gray-200 rounded-full text-sm font-bold">Join Network</button>
            <button className="px-5 py-2 bg-[#FF7373] text-white rounded-full text-sm font-bold flex items-center gap-2">
              Get in Touch <ChevronRight size={14} />
            </button>
          </div>

          {/* MOBILE TOGGLE: Z-index 120 keeps it above EVERYTHING */}
          <button 
            className="lg:hidden p-2 text-[#101828] relative z-[120] border border-gray-200 rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU OVERLAY: FIXING THE OVERLAP */}
        <div 
          className={`fixed inset-0 bg-white z-[110] transition-all duration-500 ease-in-out ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
          }`}
        >
          {/* Main content of mobile menu */}
          <div className="flex flex-col h-full pt-32 px-8 pb-10 bg-white">
            <nav className="flex flex-col gap-6">
              {navLinks.map((item, idx) => (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className={`text-4xl font-black text-[#101828] tracking-tighter transition-all duration-500 ${
                    isOpen ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <div className="mt-12 space-y-4">
              <button className="w-full py-5 bg-[#101828] text-white rounded-2xl font-black uppercase tracking-widest text-xs">
                Get in Touch
              </button>
              <button className="w-full py-5 border-2 border-gray-100 text-[#101828] rounded-2xl font-black uppercase tracking-widest text-xs">
                Join Network
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* HEADER SPACER: Important so section content doesn't hide behind header */}
      <div className="h-[68px] md:h-[80px]"></div>
    </>
  );
};

export default Header;