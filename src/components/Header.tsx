import React, { useState, useEffect } from "react";
import { 
  Clock, 
  X
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin } from "react-icons/fa6";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "About", link: "#about" },
    { name: "Impact", link: "#impact" },
    { name: "Offerings", link: "#offerings" },
    { name: "Leadership", link: "#leadership" },
    { name: "Contact", link: "#contact" },
  ];

  const handleClick = (link: string) => {
    setIsOpen(false);
    const element = document.querySelector(link);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full z-[100] font-sans">
      
      {/* 1. TOP STRIPE: Redesigned with precise diagonal split (not sticky) */}
      <div className="w-full bg-white text-slate-700 text-[13px] border-b border-gray-100 hidden md:block relative h-11 overflow-hidden">
        
        {/* Slanted Dark Left Pane Background overlay */}
        <div 
          className="absolute inset-y-0 left-0 bg-[#1c242c] z-0 transition-all duration-300"
          style={{ 
            width: "50%", 
            clipPath: "polygon(0 0, 100% 0, calc(100% - 28px) 100%, 0 100%)" 
          }} 
        />
        
        {/* Content alignment */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-full flex items-center justify-between relative z-10">
          
          {/* Left Side (Dark background section content) */}
          <div className="flex items-center text-white/95">
            <p className="font-medium tracking-wide">
              Are you ready to grow your impact?{" "}
              <a 
                href="#contact" 
                onClick={(e) => { e.preventDefault(); handleClick("#contact"); }}
                className="text-[#ea580c] hover:text-white font-semibold inline-flex items-center gap-1 transition-colors ml-1"
              >
                Contact Us <span className="text-sm">→</span>
              </a>
            </p>
          </div>

          {/* Right Side (White background section content) */}
          <div className="flex items-center gap-5 text-[#1c242c]">
            <div className="flex items-center gap-2 font-medium">
              <Clock size={14} className="text-[#ea580c]" />
              <span>Working: 8.00am - 5.00pm</span>
            </div>
            
            {/* Elegant light slash divider */}
            <span className="text-gray-300 font-light select-none transform skew-x-[-15deg] mx-1">/</span>
            
            <div className="flex items-center gap-3">
              <span className="font-semibold text-gray-500 mr-1">Visit Us:</span>
              <div className="flex items-center gap-3 text-[#1c242c]">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#ea580c] transition-colors">
                  <FaFacebookF size={14} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#ea580c] transition-colors">
                  <FaTwitter size={14} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#ea580c] transition-colors">
                  <FaLinkedin size={14} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#ea580c] transition-colors">
                  <FaInstagram size={14} />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 2. MAIN NAV BAR: Sticky Navigation */}
      <header
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "fixed top-0 left-0 right-0 bg-white shadow-md border-b border-gray-100 z-[100]"
            : "relative bg-white border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-24">
          
          {/* Left Side: Logo */}
          <div className="flex items-center shrink-0">
            <a href="#home" className="flex items-center">
              <img
                src="/logos/step2impactlogo.png"
                alt="Step2Impact"
                className="h-11 sm:h-12 w-auto object-contain transition-transform scale-[3.5] origin-left mt-2"
              />
            </a>
          </div>

          {/* Center: Desktop Menu Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(item.link);
                }}
                className="relative py-2 text-[15px] font-bold tracking-wide text-[#111827] hover:text-[#ea580c] transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Side: Button & Responsive Controls */}
          <div className="flex items-center gap-3">
            
            {/* Get in Touch Button (Styled identically to "Get Quote") */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleClick("#contact");
              }}
              className="hidden sm:inline-flex items-center justify-center px-7 py-4 text-sm font-bold text-white bg-[#1c242c] hover:bg-[#ea580c] rounded-2xl shadow-sm transition-all duration-300"
            >
              Get in Touch
            </a>

            {/* Menu Trigger Button with Unique Offset Line Design */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-4 bg-gray-100 text-[#1c242c] hover:bg-[#ea580c] hover:text-white rounded-2xl transition-all duration-300 flex flex-col justify-center items-end gap-1.5 w-[52px] h-[52px]"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={20} className="self-center" />
              ) : (
                <>
                  <span className="w-6 h-[2px] bg-current rounded" />
                  <span className="w-4 h-[2px] bg-current rounded" />
                  <span className="w-5 h-[2px] bg-current rounded" />
                </>
              )}
            </button>

          </div>
        </div>
      </header>

      {/* 3. MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150]"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/45 backdrop-blur-sm" 
              onClick={() => setIsOpen(false)} 
            />
            
            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="absolute top-0 right-0 bottom-0 w-full max-w-xs sm:max-w-sm bg-white shadow-2xl flex flex-col"
            >
              {/* Header inside Panel */}
              <div className="p-6 flex items-center justify-between border-b border-gray-100">
                <span className="text-lg font-bold text-[#111827]">Navigation</span>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2.5 bg-gray-100 text-gray-800 rounded-xl hover:bg-gray-200 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Navigation Links inside Panel */}
              <div className="flex-1 overflow-y-auto p-6">
                <nav className="flex flex-col gap-2">
                  {navLinks.map((item, idx) => (
                    <motion.a
                      key={item.name}
                      href={item.link}
                      onClick={(e) => {
                        e.preventDefault();
                        handleClick(item.link);
                      }}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="px-4 py-3.5 text-base font-bold text-gray-800 hover:text-[#ea580c] rounded-xl hover:bg-gray-50 transition-all"
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </nav>
              </div>

              {/* Footer CTA inside Panel */}
              <div className="p-6 border-t border-gray-100 bg-gray-50/50">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick("#contact");
                  }}
                  className="block w-full py-4 bg-[#1c242c] text-white rounded-2xl text-center font-bold text-sm hover:bg-[#ea580c] transition-colors"
                >
                  Get in Touch
                </a>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;