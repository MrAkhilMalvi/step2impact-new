import React, { useState, useEffect } from "react";
import { ChevronRight, Menu, X } from "lucide-react";
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
        className={`fixed  left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-brandBorder/50"
            : "bg-white/80 backdrop-blur-sm border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center shrink-0">
            <img
              src="/logos/step2impactlogo.png"
              alt="Step2Impact"
              className="h-7 sm:h-9 w-auto object-contain mt-3 scale-[2.7] sm:scale-[3] origin-left transition-transform"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={(e) => { e.preventDefault(); handleClick(item.link); }}
                className="px-3 xl:px-4 py-2 text-sm font-bold text-brandMuted hover:text-brandBlue rounded-lg hover:bg-brandBlue/5 transition-all"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 text-sm font-medium text-brandNavy border border-brandBorder rounded-lg hover:border-brandBlue/30 hover:text-brandBlue transition-all">
              Join Network
            </button>
            <button className="px-5 py-2 text-sm font-semibold text-white bg-brandBlue rounded-lg hover:bg-brandDeepBlue transition-all shadow-lg shadow-brandBlue/20 flex items-center gap-2">
              Get in Touch <ChevronRight size={14} />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-brandNavy border border-brandBorder rounded-lg"
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
            <div className="absolute inset-0 bg-black/30" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute top-[calc(36px+56px)] sm:top-[calc(40px+64px)] left-0 right-0 mx-4 sm:mx-6 bg-white rounded-2xl shadow-2xl border border-brandBorder overflow-hidden"
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
                      className="px-4 py-3 text-lg font-semibold text-brandNavy hover:text-brandBlue rounded-xl hover:bg-brandLight transition-all"
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </nav>
                <div className="mt-5 pt-5 border-t border-brandBorder space-y-3">
                  <button className="w-full py-3.5 bg-brandBlue text-white rounded-xl font-semibold text-sm hover:bg-brandDeepBlue transition-all shadow-lg shadow-brandBlue/20">
                    Get in Touch
                  </button>
                  <button className="w-full py-3.5 border-2 border-brandBorder text-brandNavy rounded-xl font-semibold text-sm hover:border-brandBlue hover:text-brandBlue transition-all">
                    Join Network
                  </button>
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
