import React from "react";
import { motion } from "framer-motion";

const ContactUs: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#F8FAFC] py-20 lg:py-28 font-sans flex items-center justify-center"
    >
      {/* BACKGROUND GEOMETRIC PATTERNS (Subtle Polygon Accents) */}
      <div className="absolute inset-y-0 left-0 w-64 opacity-5 pointer-events-none select-none hidden md:block">
        <svg
          width="100%"
          height="100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-100 0 L150 150 L-100 400 Z"
            fill="currentColor"
            className="text-slate-900"
          />
          <path
            d="M-50 300 L200 500 L-50 700 Z"
            fill="currentColor"
            className="text-slate-900"
          />
        </svg>
      </div>

      <div className="absolute inset-y-0 right-0 w-64 opacity-5 pointer-events-none select-none hidden md:block">
        <svg
          width="100%"
          height="100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M200 100 L-50 350 L200 600 Z"
            fill="currentColor"
            className="text-slate-900"
          />
          <path
            d="M150 500 L-100 700 L150 900 Z"
            fill="currentColor"
            className="text-slate-900"
          />
        </svg>
      </div>

      <div className="relative max-w-6xl w-full mx-auto px-6 z-10">
        {/* Main Central Card Structure */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-[32px] shadow-xl border border-gray-100 overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[580px]"
        >
          {/* LEFT SIDE: Contact Us Image (Flush left, top, & bottom) */}
          <div className="lg:col-span-6 relative h-64 lg:h-auto overflow-hidden">
            <img
              src="/images/contactusimage.webp"
              alt="Customer Service Assistance"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT SIDE: Styled Form Area */}
          <div className="lg:col-span-6 p-8 sm:p-12 md:p-16 flex flex-col justify-center">
            {/* Tagline */}
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#64748B] mb-2 block">
              Get In Touch
            </span>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] tracking-tight leading-tight mb-8">
              Let’s Discuss Your <br /> Strategic Goals
            </h2>

            {/* Inputs & Textarea */}
            <form className="space-y-4">
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full px-5 py-3.5 bg-[#f5f6f8] text-[#1c242c] font-medium placeholder-gray-400 text-sm rounded-xl border border-transparent focus:border-gray-200 focus:bg-white focus:outline-none transition-all duration-300"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full px-5 py-3.5 bg-[#f5f6f8] text-[#1c242c] font-medium placeholder-gray-400 text-sm rounded-xl border border-transparent focus:border-gray-200 focus:bg-white focus:outline-none transition-all duration-300"
                />
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Organization"
                  className="w-full px-5 py-3.5 bg-[#f5f6f8] text-[#1c242c] font-medium placeholder-gray-400 text-sm rounded-xl border border-transparent focus:border-gray-200 focus:bg-white focus:outline-none transition-all duration-300"
                />
                <input
                  type="tel"
                  placeholder="Contact Number"
                  className="w-full px-5 py-3.5 bg-[#f5f6f8] text-[#1c242c] font-medium placeholder-gray-400 text-sm rounded-xl border border-transparent focus:border-gray-200 focus:bg-white focus:outline-none transition-all duration-300"
                />
              </div>

              {/* Textarea Row */}
              <div>
                <textarea
                  rows={4}
                  placeholder="Type Your Message"
                  required
                  className="w-full px-5 py-3.5 bg-[#f5f6f8] text-[#1c242c] font-medium placeholder-gray-400 text-sm rounded-xl border border-transparent focus:border-gray-200 focus:bg-white focus:outline-none transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit Action: lime-green Pill Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="px-8 py-3.5 text-white bg-[#1c242c] hover:bg-[#ea580c] rounded-2xl shadow-sm transition-all duration-300 active:scale-[0.98]"
                >
                  Submit Message
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
