import React, { useState, useEffect, useCallback } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Award,
  ShieldCheck,
} from "lucide-react";
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

// Animation configurations for horizontal swipe transition
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
  // Using an array state to track both the current index and transition direction
  const [[page, direction], setPage] = useState([0, 0]);
  const [isHovered, setIsHovered] = useState(false);

  const activeIndex = ((page % SLIDES.length) + SLIDES.length) % SLIDES.length;

  const paginate = useCallback(
    (newDirection: number) => {
      setPage([page + newDirection, newDirection]);
    },
    [page],
  );

  // Automatic slide rotation
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
            <div className="absolute inset-0 bg-slate-950/45 z-10" />
            <img
              src={SLIDES[activeIndex].image}
              alt="Corporate Background"
              className="w-full h-full object-cover select-none"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Spotlight Central Circular Overlay */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-slate-950/40 backdrop-blur-[1.5px] border border-white/5" />
      </div>

      {/* Center Layout Container */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 mb-6"
        >
          <Award size={14} className="text-orange-400" />
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-100">
            Step2Impact Global Network
          </span>
        </motion.div>

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
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight max-w-3xl leading-[1.1] mb-6">
              {SLIDES[activeIndex].title}
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-slate-200 font-medium max-w-2xl leading-relaxed mb-10">
              Empowering People. Strengthening Businesses. Uplifting
              Communities.
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Gradient Action Button */}
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

        {/* Trusted Floating Badge */}
        <div className="absolute top-[-50px] right-0 md:right-10 lg:right-[-40px] hidden sm:block">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="w-20 h-20 bg-indigo-600/90 backdrop-blur-md rounded-full border border-white/20 flex flex-col items-center justify-center shadow-lg text-center p-2"
          >
            <ShieldCheck size={20} className="text-white mb-1" />
            <span className="text-[9px] font-bold tracking-widest text-white leading-none uppercase">
              Trusted <br /> Impact
            </span>
          </motion.div>
        </div>
      </div>

      {/* Slider Left Arrow */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-4 sm:left-8 z-30 w-12 h-12 rounded-full border border-white/25 flex items-center justify-center bg-black/15 hover:bg-white/20 text-white transition-all duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Slider Right Arrow */}
      <button
        onClick={() => paginate(1)}
        className="absolute right-4 sm:right-8 z-30 w-12 h-12 rounded-full border border-white/25 flex items-center justify-center bg-black/15 hover:bg-white/20 text-white transition-all duration-200"
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
