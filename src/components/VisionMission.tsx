import React from "react";
import { motion } from "framer-motion";
import { Target, CheckCircle2, Heart, Rocket, Globe, ShieldCheck } from "lucide-react";

const VisionMission: React.FC = () => {
  const items = [
    { title: "Individual Empowerment", desc: "Empowering individuals through wellness, life skills, and mentorship.", icon: <Heart size={20} /> },
    { title: "Entrepreneurial Growth", desc: "Supporting entrepreneurs with growth-focused initiatives.", icon: <Rocket size={20} /> },
    { title: "Women\u2019s Leadership", desc: "Enabling women towards financial freedom and leadership roles.", icon: <ShieldCheck size={20} /> },
    { title: "Global Scaling", desc: "Helping businesses scale globally through strategic partnerships.", icon: <Globe size={20} /> },
    { title: "Sustainable Execution", desc: "Creating measurable social and economic impact.", icon: <CheckCircle2 size={20} /> },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Vision — Full-width manifesto block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden bg-[#0F172A] rounded-2xl sm:rounded-3xl md:rounded-[40px] p-8 sm:p-12 md:p-16 lg:p-20 mb-20 md:mb-28 shadow-2xl"
        >
          {/* Glow orbs */}
          <div className="absolute -top-24 -right-24 w-48 h-48 md:w-72 md:h-72 bg-[#B91C1C]/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 md:w-72 md:h-72 bg-[#1E40AF]/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-5 sm:mb-8">
              <Target size={20} className="text-[#B91C1C]" />
              <span className="text-[#B91C1C] font-semibold uppercase tracking-[0.22em] text-[10px] sm:text-xs">
                Our Vision
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-[38px] lg:text-[44px] font-bold text-white leading-[1.2] sm:leading-[1.15] tracking-tight max-w-5xl">
              To build a <span className="text-[#DC2626]">globally connected</span> impact ecosystem that empowers individuals, entrepreneurs, and communities to create{" "}
              <span className="italic font-normal text-white/70">sustainable growth</span> and measurable transformation.
            </h2>
          </div>
        </motion.div>

        {/* Mission — Offset left/right layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left column */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-[#1E40AF]/10 border border-[#1E40AF]/20 rounded-full mb-4 sm:mb-6"
            >
              <span className="text-[#1E40AF] text-[10px] sm:text-xs font-semibold uppercase tracking-widest">Our Mission</span>
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-lg mb-4 sm:mb-6"
            >
              How we drive <br className="hidden md:block" /> change daily.
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#64748B] text-sm sm:text-base md:text-lg leading-relaxed max-w-lg"
            >
              Our mission is the roadmap to our vision. We focus on five key pillars that ensure no one is left behind in the journey of global growth.
            </motion.p>
          </div>

          {/* Right column — alternating layout */}
          <div className="lg:col-span-8 space-y-4 sm:space-y-5">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group p-5 sm:p-6 md:p-7 bg-white border border-[#E2E8F0] rounded-xl hover:border-[#1E40AF]/20 hover:shadow-lg transition-all duration-300 flex items-start gap-4 sm:gap-5 ${
                  i % 2 === 0 ? "md:mr-8 lg:mr-16" : "md:ml-8 lg:ml-16"
                }`}
              >
                <div className="shrink-0 w-10 h-10 sm:w-11 sm:h-11 bg-[#F8FAFC] rounded-lg flex items-center justify-center text-[#B91C1C] group-hover:bg-[#1E40AF] group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-sm sm:text-base md:text-lg font-bold text-[#0F172A] mb-1.5 sm:mb-2 group-hover:text-[#1E40AF] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[#64748B] text-xs sm:text-sm md:text-base leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
