import React from "react";
import { motion as motionFramer } from "framer-motion";
import { Check } from "lucide-react";

const AboutUs: React.FC = () => {
  const pillars = [
    "Structured Mentorship Network",
    "Active Corporate Innovation",
    "Global Ventures & Scale",
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-20 lg:py-28 font-sans"
    >
      {/* Decorative Grid Accent in Right Background */}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          {/* LEFT COLUMN: Double Image Layout (Offset & Animated Floating Image) */}
          <div className="lg:col-span-6 flex items-center justify-start relative">
            <motionFramer.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute -top-10 -left-20 w-28 h-28 md:w-24 md:h-24 z-0 pointer-events-none opacity-100"
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
              <img src="/images/aboutusicons1.svg" alt="Decor Left Top" />
            </motionFramer.div>
            <div className="relative w-full max-w-[460px] aspect-[4/4.8]">
              {/* Back / Main Image: Deep rounded corner frame */}
              <motionFramer.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-[85%] h-[90%] rounded-[40px] overflow-hidden shadow-lg border border-slate-100"
              >
                <img
                  src="/images/aboutusimage1.webp"
                  alt="Corporate Mentorship"
                  className="w-full h-full object-cover"
                />
              </motionFramer.div>

              {/* Front / Overlapping Small Image with smooth vertical floating (shaking) animation */}
              <motionFramer.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
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
                className="absolute bottom-0 right-0 w-[55%] aspect-[1.1] rounded-[24px] overflow-hidden shadow-2xl"
              >
                <img
                  src="/images/aboutusimage2.webp"
                  alt="Ecosystem Innovation"
                  className="w-full h-full object-cover"
                />
              </motionFramer.div>
            </div>
          </div>
          {/* RIGHT COLUMN: Watermark, Copywriting, Checklist, & Call Footer */}
          <div className="lg:col-span-6 relative">
            {/* Elegant Giant Text Watermark "About Us" */}
            <div
              className="absolute -top-14 left-0 text-7xl sm:text-8xl md:text-[110px] font-extrabold select-none opacity-[0.04] pointer-events-none z-0 tracking-tight"
              style={{
                WebkitTextStroke: "1px #000",
                color: "transparent",
              }}
            >
              About Us
            </div>

            {/* Subtitle */}
            <motionFramer.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold uppercase tracking-[0.2em] text-[#ea580c] mb-4 block relative z-10"
            >
              More About Us
            </motionFramer.span>

            {/* Heading */}
            <motionFramer.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3.5xl sm:text-4xl md:text-5xl font-medium text-[#111827] tracking-tight leading-[1.15] mb-6 relative z-10"
            >
              Built for meaningful <br /> corporate transformation.
            </motionFramer.h2>

            {/* Paragraph Description */}
            <motionFramer.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base text-gray-500 leading-relaxed mb-8"
            >
              Step2Impact Global Network is a purpose-driven ecosystem operating
              at the intersection of leadership, structured growth, and systemic
              impact. We catalyze transformative journeys for institutions and
              pioneers.
            </motionFramer.p>

            {/* Checkmark Pillars Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-3.5 mb-10">
              {pillars.map((pillar, idx) => (
                <motionFramer.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-[#1c242c] flex items-center justify-center shrink-0">
                    <Check size={11} className="text-white stroke-[3px]" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-gray-700">
                    {pillar}
                  </span>
                </motionFramer.div>
              ))}
            </div>
          </div>
          <motionFramer.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="absolute -bottom-65 -right-10  w-28 h-28 md:w-48  md:h-48 z-0 pointer-events-none opacity-100"
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
            <img src="/images/aboutusicons2.svg" alt="Decor Right Bottom" />
          </motionFramer.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
