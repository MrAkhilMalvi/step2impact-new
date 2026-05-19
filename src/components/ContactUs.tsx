import React from 'react';
import { Mail, Send, MessageSquare, ChevronDown } from 'lucide-react';

const ContactUs: React.FC = () => {
  return (
    <section id="contact" className="relative overflow-hidden py-16 md:py-24 lg:py-32 bg-[#FDFCFE]">
      
      {/* --- BACKGROUND DECOR (Consistency with About Section) --- */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden opacity-30">
        <div className="absolute -right-20 top-20 w-64 h-64 md:w-96 md:h-96 bg-[#FF7373]/5 rounded-full blur-[80px] md:blur-[100px]" />
        <div className="absolute -left-20 bottom-20 w-64 h-64 md:w-96 md:h-96 bg-[#EFE1D1]/40 rounded-full blur-[80px] md:blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE: INFO */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="inline-flex items-center gap-3 mb-4 md:mb-6">
              <div className="h-[2px] w-8 md:w-12 bg-[#FF7373]"></div>
              <span className="text-[#FF7373] text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">Contact Us</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#101828] leading-[1.1] md:leading-[1.05] tracking-tighter mb-6 md:mb-8">
              Let’s start a <br className="hidden sm:block" />
              <span className="text-[#101828]/40 italic font-medium">conversation.</span>
            </h2>
            
            <p className="text-base md:text-lg text-gray-500 font-medium mb-10 md:mb-12 max-w-md">
              Whether you're looking to partner, join the network, or scale your impact, our team is ready to guide you.
            </p>

            {/* CONTACT CARDS */}
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-start gap-4 md:gap-6 group">
                <div className="shrink-0 w-12 h-12 bg-[#EFE1D1]/50 rounded-2xl flex items-center justify-center text-[#101828] group-hover:bg-[#101828] group-hover:text-white transition-all duration-300">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Email Us</p>
                  <a 
                    href="mailto:info@step2impactglobal.com" 
                    className="text-base md:text-lg font-bold text-[#101828] hover:text-[#FF7373] transition-colors break-all"
                  >
                    info@step2impactglobal.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 md:gap-6 group">
                <div className="shrink-0 w-12 h-12 bg-[#EFE1D1]/50 rounded-2xl flex items-center justify-center text-[#101828] group-hover:bg-[#101828] group-hover:text-white transition-all duration-300">
                  <MessageSquare size={22} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Collaborate</p>
                  <p className="text-base md:text-lg font-bold text-[#101828]">Join the Global Network</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: FORM */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#EFE1D1] p-6 sm:p-10 md:p-12 rounded-[32px] md:rounded-[40px] shadow-2xl shadow-[#101828]/5">
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                
                {/* NAME */}
                <div className="space-y-2">
                  <label className="block text-[10px] md:text-xs font-black uppercase tracking-widest text-[#101828]/40 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-5 py-3.5 md:px-6 md:py-4 bg-[#FDFCFE] border border-[#EFE1D1] rounded-xl md:rounded-2xl focus:outline-none focus:border-[#FF7373] focus:ring-1 focus:ring-[#FF7373] transition-all font-bold text-[#101828] placeholder:text-gray-300" 
                  />
                </div>

                {/* EMAIL */}
                <div className="space-y-2">
                  <label className="block text-[10px] md:text-xs font-black uppercase tracking-widest text-[#101828]/40 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@company.com" 
                    className="w-full px-5 py-3.5 md:px-6 md:py-4 bg-[#FDFCFE] border border-[#EFE1D1] rounded-xl md:rounded-2xl focus:outline-none focus:border-[#FF7373] focus:ring-1 focus:ring-[#FF7373] transition-all font-bold text-[#101828] placeholder:text-gray-300" 
                  />
                </div>

                {/* SUBJECT SELECT */}
                <div className="sm:col-span-2 space-y-2 relative">
                  <label className="block text-[10px] md:text-xs font-black uppercase tracking-widest text-[#101828]/40 ml-1">Subject</label>
                  <div className="relative">
                    <select className="w-full px-5 py-3.5 md:px-6 md:py-4 bg-[#FDFCFE] border border-[#EFE1D1] rounded-xl md:rounded-2xl focus:outline-none focus:border-[#FF7373] transition-all font-bold text-[#101828] appearance-none cursor-pointer">
                      <option>Strategic Partnership</option>
                      <option>Join the Network</option>
                      <option>Mentorship Inquiry</option>
                      <option>General Support</option>
                    </select>
                    <ChevronDown size={18} className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" />
                  </div>
                </div>

                {/* MESSAGE */}
                <div className="sm:col-span-2 space-y-2">
                  <label className="block text-[10px] md:text-xs font-black uppercase tracking-widest text-[#101828]/40 ml-1">How can we help?</label>
                  <textarea 
                    rows={4} 
                    placeholder="Tell us about your goals..." 
                    className="w-full px-5 py-3.5 md:px-6 md:py-4 bg-[#FDFCFE] border border-[#EFE1D1] rounded-xl md:rounded-2xl focus:outline-none focus:border-[#FF7373] focus:ring-1 focus:ring-[#FF7373] transition-all font-bold text-[#101828] resize-none placeholder:text-gray-300"
                  ></textarea>
                </div>

                {/* SUBMIT BUTTON */}
                <div className="sm:col-span-2 pt-2 md:pt-4">
                  <button 
                    type="submit"
                    className="w-full py-4 md:py-5 bg-[#101828] text-white text-xs md:text-sm font-black uppercase tracking-[0.2em] rounded-xl md:rounded-2xl hover:bg-[#FF7373] active:scale-[0.98] transition-all shadow-xl flex items-center justify-center gap-3 group"
                  >
                    Send Message 
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;