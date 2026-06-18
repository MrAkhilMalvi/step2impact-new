import React from "react";
import { motion } from "framer-motion";

const CTA: React.FC = () => {
  return (
    <section className="relative w-full bg-white py-32 md:py-40 overflow-hidden flex items-center justify-center min-h-[550px]">
      
      {/* LEFT CRISP ACCENT RING (Centered vertically on the left edge with sharp edges) */}
      <div className="absolute -left-[340px] md:-left-[420px] bottom-[-260px] w-[700px] md:w-[850px] h-[700px] md:h-[650px] pointer-events-none select-none z-0">
        <svg className="w-full h-full" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="pinkWatercolor" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D946EF" />
              <stop offset="60%" stopColor="#EC4899" />
              <stop offset="100%" stopColor="#F43F5E" />
            </linearGradient>
          </defs>
          <circle 
            cx="250" 
            cy="250" 
            r="180" 
            stroke="url(#pinkWatercolor)" 
            strokeWidth="110" 
            fill="none" 
          />
        </svg>
      </div>

      {/* RIGHT CRISP ACCENT RING (Centered vertically on the right edge with sharp edges) */}
      <div className="absolute -right-[340px] md:-right-[420px] bottom-[-260px] w-[700px] md:w-[850px] h-[700px] md:h-[650px] pointer-events-none select-none z-0">
        <svg className="w-full h-full" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="orangeWatercolor" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#EA580C" />
              <stop offset="50%" stopColor="#F43F5E" />
              <stop offset="100%" stopColor="#E11D48" />
            </linearGradient>
          </defs>
          <circle 
            cx="250" 
            cy="250" 
            r="180" 
            stroke="url(#orangeWatercolor)" 
            strokeWidth="110" 
            fill="none" 
          />
        </svg>
      </div>

      {/* Center Content Container */}
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        
        {/* Main Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F172A] tracking-tight leading-[1.15]"
        >
          Make global impact your <br />
          competitive edge
        </motion.h2>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm sm:text-base md:text-lg text-slate-500 font-normal leading-relaxed max-w-2xl mx-auto mt-6"
        >
          Whether you are an entrepreneur, organization, mentor, or changemaker — we are here to help you grow, scale, and create sustainable impact.
        </motion.p>

        {/* Button Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col items-center gap-4"
        >
          <a
            href="#network"
            className="relative overflow-hidden inline-flex items-center justify-center px-10 py-4 bg-[#0A0F1D] hover:bg-black text-white text-sm sm:text-base font-semibold rounded-lg shadow-md transition-all duration-150 active:scale-[0.98]"
          >
            <span>Become a Partner</span>
            
            {/* Crisp Bottom Border Gradient matching image */}
            <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#EA580C] via-[#F43F5E] to-[#D946EF]" />
          </a>


        </motion.div>

      </div>
    </section>
  );
};

export default CTA;