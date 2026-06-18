import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

const Leadership: React.FC = () => {
  const founders = [
    {
      name: "Ms. Vasu Pawar",
      role: "Founder – USA Initiatives & Strategic Development",
      image: "/images/Vasu-Pawar-picture.jpg",
      linkedin: "#",
      email: "mailto:vasu@step2impact.com",
    },
    {
      name: "Mr. Viresh Patel",
      role: "Co-Founder  Global Outreach & Strategic Partnerships",
      image: "/images/Viresh-patel-Picture.jpg",
      linkedin: "#",
      email: "mailto:viresh@step2impact.com",
    },
  ];

  return (
    <section id="leadership" className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 block mb-2">
            The Visionaries
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Our Leadership
          </h2>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-24 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group pb-16"
            >
              {/* Profile Image Container */}
              <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)] transition-transform duration-500 group-hover:scale-[1.01]">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle dark gradient overlay over the image bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/10 to-transparent" />
              </div>

              {/* Floating Overlapping Card */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8 w-[85%] bg-white rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.06)] p-5 border border-slate-100/50 text-center flex flex-col justify-between min-h-[140px] z-20">
                <div>
                  {/* Name */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] leading-tight transition-colors duration-200 group-hover:text-[#1E40AF]">
                    {founder.name}
                  </h3>
                  
                  {/* Role */}
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mt-1.5 leading-relaxed">
                    {founder.role}
                  </p>
                </div>

                {/* Divider Line */}
                <div className="w-full h-[1px] bg-slate-100/80 my-3.5" />

                {/* Social Links Icons */}
                <div className="flex items-center justify-center gap-2.5">
                  <a
                    href={founder.linkedin}
                    className="w-8 h-8 rounded-full bg-[#F4F6F9] hover:bg-[#1E40AF] hover:text-white text-slate-500 transition-colors flex items-center justify-center"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={13} />
                  </a>
                  <a
                    href={founder.email}
                    className="w-8 h-8 rounded-full bg-[#F4F6F9] hover:bg-[#1E40AF] hover:text-white text-slate-500 transition-colors flex items-center justify-center"
                    aria-label="Email"
                  >
                    <Mail size={13} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Leadership;