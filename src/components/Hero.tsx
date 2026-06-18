import React, { useState, useEffect, useCallback } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion as motionFramer } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";

const SLIDES = [
  {
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2000&q=80",
    title: "Turning Intent into Impact.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80",
    title: "Empowering People Globally.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2000&q=80",
    title: "Strengthening Communities.",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0.9,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "tween", ease: [0.25, 1, 0.5, 1], duration: 0.8 },
      opacity: { duration: 0.4 },
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0.9,
    transition: {
      x: { type: "tween", ease: [0.25, 1, 0.5, 1], duration: 0.8 },
      opacity: { duration: 0.4 },
    },
  }),
} as const;

const Hero: React.FC = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isHovered, setIsHovered] = useState(false);

  const activeIndex = ((page % SLIDES.length) + SLIDES.length) % SLIDES.length;

  const paginate = useCallback(
    (newDirection: number) => {
      setPage([page + newDirection, newDirection]);
    },
    [page],
  );

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(interval);
  }, [paginate, isHovered]);

  return (
    <section
      id="home"
      className="relative w-full h-[650px] sm:h-[750px] md:h-[850px] overflow-hidden bg-slate-950 flex items-center justify-center text-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. BACKGROUND DECORATIVE WEBPS */}
      {/* heroicons1.webp - Top Left Corner Graphic */}
      <img
        src="/images/heroicons1.webp"
        alt="Top Left Accent"
        className="absolute top-0 left-0 w-44 sm:w-60 h-auto object-contain pointer-events-none z-20 opacity-40 select-none"
      />

      <motionFramer.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="absolute top-2/3 left-6 sm:left-16 md:left-24 -translate-y-1/2 w-28 sm:w-36 md:w-28 h-auto object-contain pointer-events-none z-20 opacity-100 select-none"
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          y: {
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          },
          opacity: { duration: 0.8 },
        }}
      >
        <img src="/images/heroicons2.webp" alt="Left Center Ring Accent" />
      </motionFramer.div>
      <motionFramer.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="absolute top-[40%] right-8 sm:right-20 md:right-32 -translate-y-1/2 w-48 sm:w-56 md:w-20 h-auto object-contain pointer-events-none z-20 opacity-100 select-none"
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          y: {
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          },
          opacity: { duration: 0.8 },
        }}
      >
        {/* heroicons3.webp - Right Center Big Circular Outline */}
        <img src="/images/heroicons3.webp" alt="Right Center Ring Accent" />
      </motionFramer.div>
      {/* heroicons4.webp - Right Bottom Grid Overlay */}
      <img
        src="/images/heroicons4.webp"
        alt="Right Bottom Grid Accent"
        className="absolute bottom-0 right-0 w-60 sm:w-80 md:w-64 h-auto object-contain pointer-events-none z-20 opacity-100 select-none"
      />

      {/* Background Slides with Directional Scrolling */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants as any}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            {/* Dark tinted layer to keep copy readable */}
            <div className="absolute inset-0 bg-slate-950/50 z-10" />
            <img
              src={SLIDES[activeIndex].image}
              alt="Corporate Background"
              className="w-full h-full object-cover select-none"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Center Layout Container */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center justify-center">
        {/* Subtitle / Welcome label */}
        <motion.p
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-white/90 mb-4"
        >
          WELCOME! START GROWING YOUR IMPACT TODAY
        </motion.p>

        {/* Animated Slide Content (Title & Subtitle reset on transition) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            {/* Headline */}
            <h1 className="text-4.5xl sm:text-6xl md:text-7xl font-bold tracking-tight max-w-4xl leading-[1.12] mb-6">
              {SLIDES[activeIndex].title}
            </h1>

            {/* Subheadline */}
            <p className="text-sm sm:text-base md:text-lg text-white/80 font-medium max-w-2xl leading-relaxed mb-10">
              Step2Impact Global Network is a purpose-driven ecosystem operating
              at the intersection of leadership, structured growth, and systemic
              impact.
            </p>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-5 pl-7 pr-2.5 py-2.5 bg-gradient-to-r from-[#E25C3E] to-[#5C2CED] rounded-full text-sm font-semibold tracking-wide text-white hover:shadow-lg hover:shadow-purple-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all group"
          >
            Partner With Us
            <span className="flex items-center justify-center w-9 h-9 bg-white text-slate-900 rounded-full group-hover:translate-x-1 transition-transform duration-200">
              <ArrowRight size={16} className="text-[#5C2CED]" />
            </span>
          </a>
        </motion.div>
      </div>

      {/* Slider Navigation: Standard clean white circles with dark icons */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-4 sm:left-8 z-30 w-12 h-12 rounded-full flex items-center justify-center bg-white text-gray-800 shadow-lg hover:bg-gray-100 transition-all duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={() => paginate(1)}
        className="absolute right-4 sm:right-8 z-30 w-12 h-12 rounded-full flex items-center justify-center bg-white text-gray-800 shadow-lg hover:bg-gray-100 transition-all duration-200"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Slide Navigation Indicator Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex items-center gap-2">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              const diff = idx - activeIndex;
              if (diff !== 0) paginate(diff);
            }}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              activeIndex === idx ? "bg-white w-6" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
