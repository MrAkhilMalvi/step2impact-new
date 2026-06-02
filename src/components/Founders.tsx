import React from "react";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Link as LinkIcon } from "lucide-react";

const Leadership: React.FC = () => {
  const founders = [
    {
      name: "Ms. Vasu (Vasundhara) Pawar",
      role: "Founder \u2013 USA Initiatives & Strategic Development",
      bio: "Ms. Vasu Pawar leads the USA initiatives at Step2Impact Global Network. With a strong passion for human development, wellness, and entrepreneurship, she is dedicated to enabling individuals to unlock their full potential through capability building and mentorship.",
      image: "/images/Vasu-Pawar-picture.jpg",
      skills: ["Strategic Partnerships", "Women Empowerment", "Wellness Programs", "Community Development"],
      linkedin: "#",
      email: "mailto:vasu@step2impact.com",
    },
    {
      name: "Mr. Viresh Patel",
      role: "Founder \u2013 Global Outreach & Strategic Partnerships",
      bio: "Mr. Viresh Patel leads global outreach, bringing together businesses, mentors, and investors to create scalable impact ecosystems. He is passionate about enabling businesses to scale globally through meaningful collaborations and sustainable growth models.",
      image: "/images/Viresh-patel-Picture.jpg",
      skills: ["Global Expansion", "Investor Networking", "Strategic Alliances", "Business Scaling"],
      linkedin: "#",
      email: "mailto:viresh@step2impact.com",
    },
  ];

  return (
    <section id="leadership" className="relative overflow-hidden bg-[#F8FAFC] section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 sm:mb-16 md:mb-24 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center md:justify-start gap-3 mb-3 sm:mb-4"
          >
            <span className="h-[3px] w-7 sm:w-8 md:w-10 bg-[#B91C1C]" />
            <span className="section-tag">The Visionaries</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-xl"
          >
            Our <span className="text-[#B91C1C]">Leadership.</span>
          </motion.h2>
        </div>

        {/* Founders — alternating layout */}
        <div className="space-y-20 sm:space-y-28 md:space-y-36">
          {founders.map((founder, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row lg:items-center gap-8 sm:gap-10 md:gap-14 lg:gap-16 xl:gap-20 ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="w-full sm:max-w-sm md:max-w-md lg:w-5/12 group relative mx-auto lg:mx-0"
              >
                <div className="hidden sm:block absolute -inset-3 border border-[#E2E8F0] rounded-[24px] md:rounded-[32px] -z-10 group-hover:border-[#1E40AF]/30 transition-colors duration-500" />
                <div className="hidden sm:block absolute inset-3 bg-[#1E40AF] rounded-[20px] md:rounded-[28px] rotate-3 -z-10 opacity-5 group-hover:rotate-6 transition-transform duration-500" />

                <div className="relative aspect-[4/5] rounded-[20px] md:rounded-[28px] overflow-hidden shadow-xl">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/30 to-transparent" />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="w-full lg:w-7/12"
              >
                <div className="space-y-4 sm:space-y-5 md:space-y-7">
                  <div className="text-center lg:text-left">
                    <p className="text-[#B91C1C] font-semibold uppercase tracking-widest text-[9px] sm:text-[10px] md:text-xs mb-2 sm:mb-3">
                      {founder.role}
                    </p>
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-[#0F172A] leading-tight">
                      {founder.name}
                    </h3>
                  </div>

                  {/* Bio with quote styling */}
                  <div className="relative pl-4 sm:pl-5 md:pl-6 border-l-4 border-[#B91C1C]/30">
                    <p className="text-sm sm:text-base md:text-lg text-[#64748B] font-medium leading-relaxed italic">
                      &ldquo;{founder.bio}&rdquo;
                    </p>
                  </div>

                  {/* Skills */}
                  <div>
                    <p className="text-[8px] sm:text-[9px] md:text-[10px] font-semibold text-[#64748B]/50 uppercase tracking-[0.18em] mb-3 sm:mb-4 text-center lg:text-left">
                      Core Focus Areas
                    </p>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-1.5 sm:gap-2">
                      {founder.skills.map((skill, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
                          className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white border border-[#E2E8F0] rounded-lg text-[10px] sm:text-xs md:text-sm font-semibold text-[#0F172A] hover:bg-[#1E40AF] hover:text-white hover:border-[#1E40AF] transition-all cursor-default shadow-sm"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Social & CTA */}
                  <div className="pt-2 sm:pt-3 md:pt-5 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <a
                        href={founder.linkedin}
                        className="w-9 h-9 sm:w-10 sm:h-10 bg-white border border-[#E2E8F0] rounded-lg flex items-center justify-center text-[#0F172A] hover:bg-[#1E40AF] hover:text-white hover:border-[#1E40AF] transition-all shadow-sm active:scale-95"
                        aria-label="LinkedIn"
                      >
                        <LinkIcon size={16} />
                      </a>
                      <a
                        href={founder.email}
                        className="w-9 h-9 sm:w-10 sm:h-10 bg-white border border-[#E2E8F0] rounded-lg flex items-center justify-center text-[#0F172A] hover:bg-[#1E40AF] hover:text-white hover:border-[#1E40AF] transition-all shadow-sm active:scale-95"
                        aria-label="Email"
                      >
                        <Mail size={16} />
                      </a>
                    </div>
                    <button className="flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 bg-[#1E40AF] text-white rounded-lg font-semibold text-[9px] sm:text-[10px] md:text-xs uppercase tracking-wider hover:bg-[#1E3A8A] transition-all active:scale-95 shadow-lg shadow-[#1E40AF]/20">
                      Full Bio <ArrowUpRight size={12} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
