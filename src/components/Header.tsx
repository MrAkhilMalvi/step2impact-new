import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
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
    const el = document.querySelector(link);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-[100] transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-sm border-b border-gray-100"
            : "bg-white border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20 relative">
          
          {/* Left Side: Logo */}
          <div className="flex items-center shrink-0 z-10">
            <a href="#home" className="flex items-center">
              <img
                src="/logos/step2impactlogo.png"
                alt="Step2Impact"
                className="h-12 sm:h-14 w-auto object-contain transition-transform scale-[3.0] mt-2 origin-left"
              />
            </a>
          </div>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2 z-0">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={(e) => { e.preventDefault(); handleClick(item.link); }}
                className="px-1 py-2 text-[17px] font-sans font-medium tracking-wide text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Side: Professional Corporate "Get in Touch" Button */}
          <div className="hidden lg:flex items-center z-10">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleClick("#contact"); }}
              className="px-6 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-blue-700 rounded-sm shadow-sm transition-all duration-200 uppercase tracking-wider"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="lg:hidden p-2 text-gray-800 border border-gray-200 rounded-lg z-10"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150]"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/35 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
            
            {/* Mobile Menu Card */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute top-24 left-4 right-4 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
            >
              <div className="p-5 sm:p-6 max-h-[70vh] overflow-y-auto">
                <nav className="flex flex-col gap-1">
                  {navLinks.map((item, idx) => (
                    <motion.a
                      key={item.name}
                      href={item.link}
                      onClick={(e) => { e.preventDefault(); handleClick(item.link); }}
                      initial={{ x: -16, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="px-4 py-3 text-lg font-semibold text-gray-800 hover:text-blue-600 rounded-xl hover:bg-gray-50 transition-all"
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </nav>
                <div className="mt-5 pt-5 border-t border-gray-100">
                  <a
                    href="#contact"
                    onClick={(e) => { e.preventDefault(); handleClick("#contact"); }}
                    className="block w-full py-3.5 bg-slate-900 text-white rounded-xl text-center font-bold text-sm uppercase tracking-wider hover:bg-blue-700 transition-colors"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;