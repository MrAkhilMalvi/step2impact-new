import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Target, Zap, Globe, Users, HeartHandshake, Sparkles } from "lucide-react";

const ImpactPhilosophy: React.FC = () => {
  const reasons = [
    { title: "Purpose-Driven Ecosystem", icon: <Globe size={20} />, desc: "Unifying mission-aligned pioneers to drive scalable change." },
    { title: "Strategy + Execution", icon: <Zap size={20} />, desc: "Translating high-level intent into highly structured outcomes." },
    { title: "Strong Mentorship Network", icon: <Users size={20} />, desc: "Guiding leaders through deep, institutional-grade expertise." },
    { title: "Sustainable Growth", icon: <Target size={20} />, desc: "Ensuring long-term stability and resilience for communities." },
    { title: "Global Integration", icon: <HeartHandshake size={20} />, desc: "Connecting local initiatives with worldwide development networks." },
    { title: "Measurable Impact", icon: <CheckCircle2 size={20} />, desc: "Tracking quantifiable performance metrics to secure growth." },
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
    <section id="impact" className="relative overflow-hidden bg-white py-20 lg:py-28 font-sans">
      
      {/* Ambient background corporate lights */}
      <div className="absolute top-1/3 left-0 -translate-x-1/2 w-96 h-96 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 translate-x-1/2 w-96 h-96 rounded-full bg-rose-500/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* SECTION 1: WHY STEP2IMPACT — Clean Centered Intro + 3x2 Corporate Grid */}
        <div className="mb-24 sm:mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-4"
            >
              <Sparkles size={13} className="text-blue-600" />
              <span className="text-blue-600 font-bold uppercase tracking-wider text-[11px]">The Difference</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 mb-5 tracking-tight font-sans"
            >
              Why Step2Impact?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto font-sans"
            >
              We bridge the gap between intent and action, ensuring that every strategic partnership leads to scalable, measurable transformation.
            </motion.p>
          </div>

          {/* 3x2 Grid (Modern Light Professional Card Style) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reasons.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="relative p-6 sm:p-8 bg-slate-50/60 border border-slate-100 rounded-2xl hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-slate-100/55 transition-all duration-300 group flex flex-col items-start"
              >
                {/* Accent border on hover */}
                <div className="absolute left-0 top-6 bottom-6 w-[3px] bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity rounded-r" />

                <div className="w-10 h-10 bg-white border border-slate-100 rounded-xl flex items-center justify-center text-rose-500 mb-5 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                  {item.icon}
                </div>
                
                <h4 className="font-bold text-slate-900 text-lg mb-2 tracking-tight">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION 2: PHILOSOPHY — Connected Transformation Roadmap */}
        <div className="relative mb-24 sm:mb-32">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-rose-500 font-bold uppercase tracking-widest text-xs block mb-3"
            >
              Our Core Philosophy
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight"
            >
              The Journey of Transformation
            </motion.h2>
          </div>

          {/* Connected timeline container */}
          <div className="relative max-w-5xl mx-auto">
            {/* Desktop elegant connecting line */}
            <div className="hidden md:block absolute top-[26px] left-[10%] right-[10%] h-[1.5px] bg-slate-200 -z-10" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="flex flex-col items-center text-center group relative"
                >
                  {/* Mobile connector */}
                  {i < steps.length - 1 && (
                    <div className="md:hidden absolute top-[52px] left-1/2 -translate-x-1/2 w-[1.5px] h-8 bg-slate-200" />
                  )}

                  {/* Number node */}
                  <div className="w-14 h-14 bg-white border border-slate-200 rounded-full flex items-center justify-center text-base font-bold text-slate-800 mb-4 group-hover:border-rose-500 group-hover:text-rose-500 transition-all duration-300 shadow-sm z-10">
                    0{i + 1}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 uppercase tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-500 leading-relaxed max-w-[180px]">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Corporate Quote block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-16 sm:mt-24 p-8 sm:p-14 md:p-16 bg-slate-50/50 border border-slate-100 rounded-3xl text-center relative overflow-hidden shadow-sm max-w-5xl mx-auto"
          >
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <p className="relative z-10 text-base sm:text-xl md:text-2xl lg:text-3xl font-medium text-slate-800 leading-relaxed italic max-w-4xl mx-auto font-sans">
              &ldquo;True transformation happens when{" "}
              <span className="text-rose-500 font-semibold">capability, collaboration, and execution</span>{" "}
              come together within the right ecosystem.&rdquo;
            </p>
          </motion.div>
        </div>

        {/* SECTION 3: WHO WE WORK WITH — Minimalist Badge-style */}
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full mb-8"
          >
            <span className="text-blue-600 text-xs font-bold uppercase tracking-wider">Our Global Reach</span>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {partners.map((partner, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="px-5 py-3.5 bg-white border border-slate-100 rounded-xl shadow-sm hover:border-blue-200 transition-all duration-300 group flex items-center gap-3"
              >
                <span className="w-2 h-2 rounded-full bg-rose-500 group-hover:scale-125 transition-transform shrink-0" />
                <span className="font-semibold text-slate-700 text-xs sm:text-sm uppercase tracking-tight">
                  {partner}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ImpactPhilosophy;