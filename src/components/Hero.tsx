import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";


const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative isolate min-h-[600px] sm:min-h-[680px] md:min-h-[780px] overflow-hidden bg-white"
    >
      {/* Video Background */}
      <div className="absolute inset-0 -z-20">
        <video
          className="h-full w-full object-cover"
          autoPlay muted loop playsInline
          aria-hidden="true"
        >
          <source
            src="https://videos.pexels.com/video-files/3191887/3191887-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/30 to-transparent" />

      <div className="mx-auto flex min-h-[600px] sm:min-h-[680px] md:min-h-[780px] w-full max-w-7xl items-center px-4 sm:px-6 pb-16 md:pb-20">
        <div className="w-full">
          <div className="max-w-[780px]">
            {/* Section tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-5 sm:mb-7"
            >
              <span className="h-[3px] w-8 sm:w-10 bg-[#B91C1C]" />
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-[#1E40AF]">
                Step2Impact Global Network
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-5 sm:mb-7 text-[38px] sm:text-[60px] md:text-[80px] lg:text-[96px] font-black leading-[1.04] tracking-tight text-[#0F172A]"
            >
              Turning Intent <br className="hidden sm:block" />
              into <span className="text-[#B91C1C]">Impact.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 sm:mb-10 max-w-[640px] text-base sm:text-lg md:text-xl font-medium leading-relaxed text-[#64748B]"
            >
              Empowering People. Strengthening Businesses. Uplifting Communities.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <button className="inline-flex h-12 sm:h-14 items-center justify-center gap-2.5 bg-[#1E40AF] px-6 sm:px-8 text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] text-white rounded-lg hover:bg-[#1E3A8A] transition-all shadow-xl shadow-[#1E40AF]/25 active:scale-[0.97]">
                Partner With Us
                <ArrowRight size={16} strokeWidth={2.5} />
              </button>
              <button className="inline-flex h-12 sm:h-14 items-center justify-center gap-2.5 border border-[#E2E8F0] bg-white/90 px-6 sm:px-8 text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] text-[#0F172A] rounded-lg hover:border-[#1E40AF] hover:text-[#1E40AF] transition-all shadow-sm active:scale-[0.97]">
                Join The Network
              </button>
            </motion.div>
          </div>

        
        </div>
      </div>
    </section>
  );
};

export default Hero;
