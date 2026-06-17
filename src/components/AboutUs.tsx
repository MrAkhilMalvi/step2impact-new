import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Users, Rocket } from "lucide-react";

const AboutUs: React.FC = () => {
  // 3 Key pillars mapped for the minimalist top row
  const topFeatures = [
    {
      icon: (
      <motion.div
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Users className="w-8 h-8 text-blue-600" />
      </motion.div>
    ),
      // image: "/bulbicon.webp",
      title: "Structured Mentorship",
      desc: "Guiding future-ready leaders through expert corporate ecosystems.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-amber-500" />,
      image: "/images/bulbicon.webp",
      title: "Active Innovation",
      desc: "Transforming strategic intent into highly disruptive, scalable action.",
    },
    {
      icon: <Rocket className="w-8 h-8 text-purple-600" />,
      image: "/images/rocketicon.webp",
      title: "Ventures & Scale",
      desc: "Co-building enduring, institutional-grade global ecosystems.",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-20 lg:py-28 font-sans"
    >
      {/* Wave Decorative Background Accent (Subtle & Clean) */}
      <div className="absolute inset-x-0 bottom-0 h-40 pointer-events-none opacity-25 z-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,192L80,197.3C160,203,320,213,480,197.3C640,181,800,139,960,133.3C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            fill="url(#wave-gradient)"
          />
          <defs>
            <linearGradient
              id="wave-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#f8fafc" />
              <stop offset="100%" stopColor="#f1f5f9" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* TOP ROW: Staggered Minimalist Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {topFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-4 items-start p-2"
            >
              <div className="shrink-0">
                {feature.image ? (
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-14 h-14 rounded-xl object-cover"
                  />
                ) : (
                  <div className="p-3">
                    {feature.icon}
                  </div>
                )}
              </div>

              <div>
                <h4 className="text-base font-medium text-slate-900 mb-1">
                  {feature.title}
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM ROW: Offset Images (Left) & Copy + Progress Indicators (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          {/* Left Column: Offset Double-Image Layout */}
          <div className="lg:col-span-6 relative flex flex-col items-start h-full">
            <div className="relative w-full max-w-md md:max-w-lg">
              {/* Back / Left Image */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="w-[72%] rounded-2xl overflow-hidden shadow-lg border border-slate-100"
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                  alt="Ecosystem Collaboration"
                  className="w-full aspect-[4/5] object-cover"
                />
              </motion.div>

              {/* Front / Right Overlapping Image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="absolute bottom-[-40px] right-4 w-[68%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
              >
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800"
                  alt="Strategic Planning"
                  className="w-full aspect-[4/5] object-cover"
                />
              </motion.div>
            </div>
          </div>

          {/* Right Column: Copywriting & Animated Progress Bars */}
          <div className="lg:col-span-6 font-sans">


            {/* Custom Corporate Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-medium text-[#0F172A] tracking-tight leading-[1.12] mb-6 font-sans"
            >
              Built for meaningful <br />
              corporate transformation.
            </motion.h2>

            {/* Content Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 font-sans"
            >
              Step2Impact Global Network is a purpose-driven ecosystem operating
              at the intersection of leadership, structured growth, and systemic
              impact. We catalyze transformative journeys for institutions and
              pioneers.
            </motion.p>

            {/* Animated Progress Bars Grid */}
            <div className="space-y-6">
              {/* Progress Indicator 1: Systemic Scale */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xl font-medium  text-slate-700">
                    Systemic Scale
                  </span>
                  <span className="text-xs font-bold text-red-600">95%</span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "95%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-red-500 to-orange-400 rounded-full"
                  />
                </div>
              </div>

              {/* Progress Indicator 2: Active Innovation */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xl font-medium  text-slate-700">
                     Active Innovation
                  </span>
                  <span className="text-xs font-bold text-blue-600">85%</span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
