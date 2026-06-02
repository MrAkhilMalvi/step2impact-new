import React from "react";
import { motion } from "framer-motion";
import { Mail, Send, MessageSquare, ChevronDown, Shield, Clock, Headphones } from "lucide-react";

const ContactUs: React.FC = () => {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#F8FAFC] section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4 sm:mb-6"
            >
              <span className="h-[3px] w-8 sm:w-10 bg-[#B91C1C]" />
              <span className="text-[#B91C1C] text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em]">Contact Us</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="heading-xl mb-5 sm:mb-7"
            >
              Let&rsquo;s start a <br className="hidden sm:block" />
              <span className="text-[#64748B]/50 italic font-normal">conversation.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg text-[#64748B] font-medium mb-8 sm:mb-10 md:mb-12 max-w-md"
            >
              Whether you&rsquo;re looking to partner, join the network, or scale your impact, our team is ready to guide you.
            </motion.p>

            {/* Contact info */}
            <div className="space-y-5 sm:space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-3 sm:gap-4 group"
              >
                <div className="shrink-0 w-10 h-10 sm:w-11 sm:h-11 bg-white border border-[#E2E8F0] rounded-xl flex items-center justify-center text-[#0F172A] group-hover:bg-[#1E40AF] group-hover:text-white group-hover:border-[#1E40AF] transition-all duration-300">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-[#64748B]/50 mb-0.5">Email Us</p>
                  <a
                    href="mailto:info@step2impactglobal.com"
                    className="text-sm sm:text-base md:text-lg font-semibold text-[#0F172A] hover:text-[#1E40AF] transition-colors break-all"
                  >
                    info@step2impactglobal.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-3 sm:gap-4 group"
              >
                <div className="shrink-0 w-10 h-10 sm:w-11 sm:h-11 bg-white border border-[#E2E8F0] rounded-xl flex items-center justify-center text-[#0F172A] group-hover:bg-[#1E40AF] group-hover:text-white group-hover:border-[#1E40AF] transition-all duration-300">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <p className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-[#64748B]/50 mb-0.5">Collaborate</p>
                  <p className="text-sm sm:text-base md:text-lg font-semibold text-[#0F172A]">Join the Global Network</p>
                </div>
              </motion.div>
            </div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-[#E2E8F0] flex flex-wrap gap-4 sm:gap-6"
            >
              {[
                { icon: <Shield size={14} />, text: "Confidential" },
                { icon: <Clock size={14} />, text: "24h Response" },
                { icon: <Headphones size={14} />, text: "Expert Support" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5 sm:gap-2 text-[#64748B]">
                  <span className="text-[#B91C1C]">{item.icon}</span>
                  <span className="text-[10px] sm:text-xs font-medium">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white border border-[#E2E8F0] p-5 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl shadow-xl shadow-[#0F172A]/5"
            >
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                <div className="space-y-1.5 sm:space-y-2">
                  <label className="block text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-[#64748B]/50 ml-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 sm:px-5 py-3 sm:py-3.5 bg-white border border-[#E2E8F0] rounded-lg sm:rounded-xl focus:outline-none focus:border-[#1E40AF] focus:ring-2 focus:ring-[#1E40AF]/10 transition-all font-medium text-[#0F172A] text-sm placeholder:text-gray-300"
                  />
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <label className="block text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-[#64748B]/50 ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full px-4 sm:px-5 py-3 sm:py-3.5 bg-white border border-[#E2E8F0] rounded-lg sm:rounded-xl focus:outline-none focus:border-[#1E40AF] focus:ring-2 focus:ring-[#1E40AF]/10 transition-all font-medium text-[#0F172A] text-sm placeholder:text-gray-300"
                  />
                </div>

                <div className="sm:col-span-2 space-y-1.5 sm:space-y-2">
                  <label className="block text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-[#64748B]/50 ml-1">
                    Subject
                  </label>
                  <div className="relative">
                    <select className="w-full px-4 sm:px-5 py-3 sm:py-3.5 bg-white border border-[#E2E8F0] rounded-lg sm:rounded-xl focus:outline-none focus:border-[#1E40AF] transition-all font-medium text-[#0F172A] text-sm appearance-none cursor-pointer">
                      <option>Strategic Partnership</option>
                      <option>Join the Network</option>
                      <option>Mentorship Inquiry</option>
                      <option>General Support</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-4 sm:right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#64748B]/50" />
                  </div>
                </div>

                <div className="sm:col-span-2 space-y-1.5 sm:space-y-2">
                  <label className="block text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-[#64748B]/50 ml-1">
                    How can we help?
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your goals..."
                    className="w-full px-4 sm:px-5 py-3 sm:py-3.5 bg-white border border-[#E2E8F0] rounded-lg sm:rounded-xl focus:outline-none focus:border-[#1E40AF] focus:ring-2 focus:ring-[#1E40AF]/10 transition-all font-medium text-[#0F172A] text-sm resize-none placeholder:text-gray-300"
                  />
                </div>

                <div className="sm:col-span-2 pt-1 sm:pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 sm:py-4 md:py-5 bg-[#1E40AF] text-white text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] rounded-xl md:rounded-2xl hover:bg-[#1E3A8A] active:scale-[0.98] transition-all shadow-xl shadow-[#1E40AF]/20 flex items-center justify-center gap-2 sm:gap-3 group"
                  >
                    Send Message
                    <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
