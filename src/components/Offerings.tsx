import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp, HeartPulse, Lightbulb, GraduationCap, Coins, Globe2, ArrowUpRight,
} from "lucide-react";

const Offerings: React.FC = () => {
  const offerings = [
    {
      title: "Impact Consulting",
      subtitle: "Strategic Growth",
      desc: "Creating market opportunities and designing sustainable impact models for global growth.",
      icon: <TrendingUp size={22} />,
      points: ["Strategy Consulting", "Market Expansion", "Strategic Partnerships", "Growth Models"],
    },
    {
      title: "Life Skills",
      subtitle: "Wellness & Resilience",
      desc: "Empowering individuals with essential life skills to enhance emotional well-being and growth.",
      icon: <HeartPulse size={22} />,
      points: ["Emotional Intelligence", "AI & Financial Literacy", "Mental Wellness", "Work-Life Balance"],
    },
    {
      title: "Entrepreneurship",
      subtitle: "Development Initiatives",
      desc: "Mindset and strategies required to build sustainable and scalable business ventures.",
      icon: <Lightbulb size={22} />,
      points: ["Startup Mentorship", "Bootcamps", "Market Access", "Scaling Strategies"],
    },
    {
      title: "Mentorship Council",
      subtitle: "Youth Development",
      desc: "Guiding youth toward leadership, employability, and executive-level success.",
      icon: <GraduationCap size={22} />,
      points: ["Leadership Mentoring", "Career Guidance", "Expert Networking", "Founder Coaching"],
    },
    {
      title: "Empowering Women",
      subtitle: "Financial Freedom",
      desc: "Creating inclusive opportunities through leadership and business enablement initiatives.",
      icon: <Coins size={22} />,
      points: ["Women Entrepreneurship", "Money Management", "Growth Circles", "Leadership Workshops"],
    },
    {
      title: "Global Scaling",
      subtitle: "Strategic Alliances",
      desc: "Helping businesses expand through collaboration and investor access.",
      icon: <Globe2 size={22} />,
      points: ["Global Market Access", "Investor Networking", "Cross-Border Alliances", "Growth Acceleration"],
    },
  ];

  return (
    <section id="offerings" className="relative bg-white section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="mb-10 sm:mb-14 md:mb-20 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center md:justify-start gap-3 mb-4 sm:mb-6"
          >
            <span className="h-[3px] w-8 sm:w-10 bg-[#B91C1C]" />
            <span className="section-tag">What We Provide</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-xl"
          >
            Core <span className="text-[#B91C1C]">Offerings.</span>
          </motion.h2>
        </div>

        {/* Professional grid with alternating card styles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {offerings.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative min-h-[320px] sm:min-h-[360px] bg-white border border-[#E2E8F0] rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-[#1E40AF]/5 hover:border-[#1E40AF]/20 cursor-pointer"
            >
              {/* Content */}
              <div className="p-5 sm:p-6 md:p-7 h-full flex flex-col">
                <div className="w-10 h-10 sm:w-11 sm:h-11 bg-[#F8FAFC] text-[#0F172A] rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-[#1E40AF] group-hover:text-white transition-all duration-500">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 22 })}
                </div>

                <p className="text-[#B91C1C] font-black text-lg sm:text-xl mb-1 sm:mb-1.5">
                  {item.subtitle}
                </p>
                <h3 className="text-base sm:text-lg md:text-xl font-black text-[#0F172A] leading-tight mb-3 sm:mb-4 group-hover:text-[#1E40AF] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base font-medium text-[#64748B]/60 leading-relaxed">
                  {item.desc}
                </p>

                {/* Always-visible arrow indicator */}
                <div className="mt-auto flex justify-end pt-3 sm:pt-4">
                  <span className="text-[#64748B]/30 group-hover:text-[#1E40AF] transition-colors">
                    <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>

              {/* Hover overlay — key focus areas */}
              <div className="absolute inset-0 bg-[#0F172A] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out p-5 sm:p-6 md:p-7 flex flex-col justify-center">
                <p className="text-[#B91C1C] font-semibold uppercase tracking-widest text-[10px] sm:text-xs mb-4 sm:mb-5 md:mb-6">
                  Key Focus Areas
                </p>
                <div className="space-y-2.5 sm:space-y-3">
                  {item.points.map((point, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 sm:gap-3 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity delay-200 duration-500"
                    >
                      <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-[#B91C1C]" />
                      <span className="text-xs sm:text-sm md:text-base leading-tight">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerings;
