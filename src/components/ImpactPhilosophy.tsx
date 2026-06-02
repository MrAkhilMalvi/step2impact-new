import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Target, Zap, Globe, Users, HeartHandshake } from "lucide-react";

const ImpactPhilosophy: React.FC = () => {
  const reasons = [
    { title: "Purpose-Driven Ecosystem", icon: <Globe size={18} /> },
    { title: "Strategy + Execution", icon: <Zap size={18} /> },
    { title: "Strong Mentorship Network", icon: <Users size={18} /> },
    { title: "Sustainable Growth", icon: <Target size={18} /> },
    { title: "Global Integration", icon: <HeartHandshake size={18} /> },
    { title: "Measurable Impact", icon: <CheckCircle2 size={18} /> },
  ];

  const steps = [
    { title: "Design", desc: "Strategic blueprinting & innovation." },
    { title: "Enable", desc: "Capability building & mentorship." },
    { title: "Scale", desc: "Sustainable growth & global reach." },
    { title: "Impact", desc: "Measurable social & economic value." },
  ];

  const partners = [
    "Corporates & Businesses", "Educational Institutions", "Startups & Entrepreneurs",
    "Women Leaders", "NGOs & Social Enterprises", "Industry Experts",
  ];

  return (
    <section 
      id="impact" 
      className="relative bg-fixed bg-cover bg-center bg-no-repeat py-20 sm:py-24 overflow-hidden"
      style={{ 
        backgroundImage: "url('/images/impactbg.jpeg')" 
      }}
    >


      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* SECTION 1: WHY STEP2IMPACT — Centered Intro + 3x2 Grid */}
        <div className="mb-24 sm:mb-32">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-3 mb-4"
            >
              <span className="h-[2px] w-8 bg-rose-500" />
              <span className="text-rose-400 font-semibold uppercase tracking-[0.2em] text-xs">The Difference</span>
              <span className="h-[2px] w-8 bg-rose-500" />
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5 tracking-tight"
            >
              Why Step2Impact?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg text-slate-300 font-medium leading-relaxed mb-8 max-w-xl mx-auto"
            >
              We bridge the gap between intent and action, ensuring that every partnership leads to measurable transformation.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <button className="inline-flex h-12 sm:h-14 items-center justify-center gap-2.5 bg-blue-600 px-6 sm:px-8 text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/40 active:scale-[0.97]">
                Learn More <ArrowRight size={18} />
              </button>
            </motion.div>
          </div>

          {/* 3x2 Grid (Dark glassmorphic style replacing the white cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto">
            {reasons.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 sm:p-8 bg-slate-900/70 border border-slate-800/80 rounded-xl hover:border-blue-500/40 hover:bg-slate-900/90 hover:shadow-2xl hover:shadow-blue-950/20 transition-all duration-300 group flex flex-col items-start backdrop-blur-md"
              >
                <div className="w-10 h-10 bg-slate-800 border border-slate-750 rounded-lg flex items-center justify-center text-rose-400 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 20 })}
                </div>
                <h4 className="font-bold text-slate-100 text-base sm:text-lg leading-snug tracking-wide">{item.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION 2: PHILOSOPHY — Connected process */}
        <div className="relative mb-24 sm:mb-32">
          <div className="text-center mb-12 sm:mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-rose-400 font-semibold uppercase tracking-[0.25em] text-[10px] sm:text-xs block mb-3"
            >
              Our Core Philosophy
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight"
            >
              The Journey of Transformation
            </motion.h2>
          </div>

          {/* Connected vertical timeline on mobile, horizontal on desktop */}
          <div className="relative max-w-5xl mx-auto">
            {/* Desktop connecting line */}
            <div className="hidden md:block absolute top-[26px] left-[10%] right-[10%] h-[2px] bg-slate-800 -z-10" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="flex flex-col items-center text-center group relative"
                >
                  {/* Mobile connector */}
                  {i < steps.length - 1 && (
                    <div className="md:hidden absolute top-[52px] left-1/2 -translate-x-1/2 w-[2px] h-8 bg-slate-800" />
                  )}

                  {/* Number circle */}
                  <div className="w-14 h-14 bg-slate-900 border-2 border-slate-700/80 rounded-full flex items-center justify-center text-base font-black text-slate-100 mb-4 group-hover:border-rose-500 group-hover:text-rose-400 transition-all duration-300 shadow-md z-10">
                    0{i + 1}
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-slate-100 mb-2 uppercase tracking-tight italic">
                    {step.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-400 leading-relaxed max-w-[180px]">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quote block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-16 sm:mt-24 p-6 sm:p-12 md:p-16 bg-slate-900/80 border border-slate-800/80 rounded-2xl sm:rounded-3xl text-center relative overflow-hidden shadow-2xl max-w-5xl mx-auto backdrop-blur-md"
          >
            <div className="absolute -top-20 -right-20 w-40 sm:w-72 h-40 sm:h-72 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-40 sm:w-72 h-40 sm:h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <p className="relative z-10 text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white/90 leading-relaxed italic max-w-4xl mx-auto">
              &ldquo;True transformation happens when{" "}
              <span className="text-rose-400">capability, collaboration, and execution</span>{" "}
              come together within the right ecosystem.&rdquo;
            </p>
          </motion.div>
        </div>

        {/* SECTION 3: WHO WE WORK WITH — Badge-style */}
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8"
          >
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-[0.18em]">Our Global Reach</span>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-4">
            {partners.map((partner, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="px-5 py-3.5 bg-slate-900/70 border border-slate-800/80 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-blue-500/30 transition-all duration-300 group flex items-center gap-3 backdrop-blur-sm"
              >
                <span className="w-2 h-2 rounded-full bg-rose-500 group-hover:scale-150 transition-transform shrink-0" />
                <span className="font-semibold text-slate-200 text-xs sm:text-sm uppercase tracking-tight">{partner}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactPhilosophy;