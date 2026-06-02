import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, UserPlus, Handshake, MessageSquare } from "lucide-react";

const CTA: React.FC = () => {
  return (
    <section className="relative section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-[#0F172A] rounded-2xl sm:rounded-3xl md:rounded-[40px] px-5 sm:px-8 md:px-12 lg:px-16 py-10 sm:py-12 md:py-16 lg:py-20 overflow-hidden shadow-2xl"
        >
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/[0.03] to-transparent pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72 bg-[#B91C1C]/12 rounded-full blur-[80px] pointer-events-none" />


          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 items-center relative z-10">
            {/* LEFT */}
            <div className="lg:col-span-7 text-center lg:text-left">

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.1] tracking-tight mb-4 sm:mb-6 md:mb-8">
                Ready to Create <br className="hidden sm:block" />
                <span className="text-[#DC2626]">Meaningful Impact?</span>
              </h2>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/40 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                Whether you are an entrepreneur, organization, mentor, or changemaker \u2014 we are here to help you grow, scale, and create sustainable impact.
              </p>
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-5 flex flex-col gap-2.5 sm:gap-3 md:gap-4">
              <button className="group w-full flex items-center justify-between p-3 sm:p-4 md:p-5 lg:p-6 bg-[#1E40AF] text-white rounded-xl sm:rounded-2xl md:rounded-3xl hover:bg-white hover:text-[#0F172A] transition-all duration-300 shadow-lg active:scale-[0.98]">
                <div className="flex items-center gap-2.5 sm:gap-3 md:gap-4 text-left">
                  <div className="bg-white/15 p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl group-hover:bg-[#0F172A]/5 transition-colors">
                    <Handshake size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </div>
                  <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold tracking-tight">Become a Partner</span>
                </div>
                <ArrowRight className="shrink-0 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" />
              </button>

              <button className="group w-full flex items-center justify-between p-3 sm:p-4 md:p-5 lg:p-6 bg-white/[0.04] border border-white/[0.08] text-white rounded-xl sm:rounded-2xl md:rounded-3xl hover:bg-white/10 transition-all duration-300 active:scale-[0.98]">
                <div className="flex items-center gap-2.5 sm:gap-3 md:gap-4 text-left">
                  <div className="bg-white/10 p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl">
                    <UserPlus size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </div>
                  <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold tracking-tight">Join Our Network</span>
                </div>
                <ArrowRight className="shrink-0 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform opacity-0 group-hover:opacity-100" />
              </button>

              <button className="group w-full flex items-center justify-center gap-1.5 sm:gap-2 p-3 sm:p-4 text-white/40 hover:text-[#B91C1C] font-semibold uppercase tracking-wider text-[9px] sm:text-[10px] md:text-xs transition-all">
                <MessageSquare size={14} className="sm:w-4 sm:h-4" />
                Contact Us Today
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
