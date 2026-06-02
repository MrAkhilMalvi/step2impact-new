import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Users, Heart, Rocket } from "lucide-react";

interface Pillar {
  icon: React.ReactNode;
  name: string;
  desc: string;
}

const AboutUs: React.FC = () => {
  const pillars: Pillar[] = [
    { 
      icon: <Lightbulb className="w-5 h-5" />, 
      name: "Innovation", 
      desc: "Transforming strategic intent into highly disruptive, scalable action." 
    },
    { 
      icon: <Users className="w-5 h-5" />, 
      name: "Mentorship", 
      desc: "Guiding future-ready leaders through high-impact, expert ecosystems." 
    },
    { 
      icon: <Heart className="w-5 h-5" />, 
      name: "Wellness", 
      desc: "Cultivating sustainable and holistic growth environments for teams." 
    },
    { 
      icon: <Rocket className="w-5 h-5" />, 
      name: "Entrepreneurship", 
      desc: "Co-building enduring, institutional-grade global ventures." 
    },
  ];

  const roadmapSteps = [
    { label: "Ecosystem", val: "Driven", num: "01" },
    { label: "Innovation", val: "Led", num: "02" },
    { label: "Purpose", val: "Focused", num: "03" },
    { label: "Global", val: "Network", num: "04" },
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-slate-50/50 py-20 lg:py-32">
      {/* Decorative Grid Background for a technical/corporate feel */}

      {/* Subtle radial glows */}
      <div className="absolute top-1/4 left-0 -translate-x-1/2 w-96 h-96 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 translate-x-1/2 w-96 h-96 rounded-full bg-red-500/5 blur-[120px] pointer-events-none" />

      {/* Top clean separator line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 xl:gap-20 items-center">
          
          {/* LEFT - Enhanced Visual Collage & Metrics */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-2xl bg-white p-2">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000"
                  alt="Enterprise Collaboration"
                  className="rounded-xl aspect-[5/5] w-full object-cover filter contrast-[1.02] brightness-[0.98]"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
              </div>



            </div>
          </div>

          {/* RIGHT - Deep Strategic Content */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-5"
            >
              <span className="h-px w-8 bg-[#B91C1C]" />
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#B91C1C]">Who We Are</span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight leading-[1.15] mb-6"
            >
              Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B91C1C] to-[#1E40AF]">meaningful</span> <br className="hidden sm:block" /> transformation.
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-slate-600 leading-relaxed mb-5 max-w-2xl"
            >
              Step2Impact Global Network is a purpose-driven ecosystem operating at the intersection of leadership, structured growth, and systemic impact. We catalyze transformative journeys for institutions and pioneers.
            </motion.p>

            {/* Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 * i }}
                  className="group relative p-5 bg-white border border-slate-200/80 rounded-xl hover:border-slate-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Subtle Accent Left Border on Hover */}
                  <div className="absolute left-0 top-4 bottom-4 w-[3px] bg-gradient-to-b from-[#1E40AF] to-[#B91C1C] opacity-0 group-hover:opacity-100 transition-opacity rounded-r" />

                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center text-[#0F172A] group-hover:bg-[#1E40AF] group-hover:text-white transition-all duration-300">
                        {pillar.icon}
                      </div>
                      <h4 className="text-base font-bold text-[#0F172A] tracking-tight group-hover:text-[#1E40AF] transition-colors duration-200">
                        {pillar.name}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed pl-1">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* STRATEGIC ROADMAP - Connected Timeline Concept */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-14 lg:mt-14"
        >
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-[11px] uppercase tracking-[0.25em] font-extrabold text-[#1E40AF] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
              Our Strategic Framework
            </span>
          </div>

          <div className="relative">
            {/* Horizontal timeline connector path for larger screens */}
            <div className="hidden md:block absolute top-[44px] left-[12.5%] right-[12.5%] h-[2px] bg-slate-200 -z-10">
              <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-500 via-red-400 to-transparent" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
              {roadmapSteps.map((step, index) => (
                <div
                  key={index}
                  className="group relative flex flex-col items-center text-center p-6 bg-white border border-slate-200/80 rounded-2xl transition-all duration-300 hover:border-blue-500/30 hover:shadow-xl"
                >
                  {/* Visual Node Dot on the connector line (Desktop only) */}
                  <div className="hidden md:flex absolute -top-[14px] left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-slate-100 border-4 border-white shadow-sm items-center justify-center group-hover:border-[#1E40AF] group-hover:scale-110 transition-all duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-[#1E40AF]" />
                  </div>

                  {/* Step ID badge */}
                  <span className="bg-[#B91C1C] text-white text-[9px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-4 shadow-sm">
                    Step {step.num}
                  </span>

                  {/* Text Details */}
                  <h4 className="text-xl font-bold text-[#0F172A] uppercase tracking-tight italic mb-1 group-hover:text-[#B91C1C] transition-colors">
                    {step.label}
                  </h4>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                    {step.val}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutUs;