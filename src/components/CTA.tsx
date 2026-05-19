import React from 'react';
import { ArrowRight, UserPlus, Handshake, MessageSquare } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-[#FDFCFE] overflow-hidden">
      
      {/* --- UNIQUE BACKGROUND DESIGN ELEMENTS --- */}
      <div className="absolute inset-0 z-0">
        {/* Large Decorative Wave - Scaled for mobile */}
        <svg className="absolute bottom-0 left-0 w-full opacity-20" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,181.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="#EFE1D1"/>
        </svg>
        
        {/* Animated Impact Path - Hidden on mobile for performance/clarity */}
        <svg className="hidden md:block absolute top-1/2 left-0 w-full h-full -translate-y-1/2 opacity-30 pointer-events-none" viewBox="0 0 1200 400" fill="none">
          <path 
            d="M-50,200 C200,100 400,300 600,200 C800,100 1000,300 1250,200" 
            stroke="#FF7373" 
            strokeWidth="2" 
            strokeDasharray="10 10"
            className="animate-dash"
          />
          <circle cx="200" cy="150" r="4" fill="#101828" />
          <circle cx="600" cy="200" r="6" fill="#FF7373" />
          <circle cx="1000" cy="250" r="4" fill="#101828" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* MAIN CTA CARD */}
        <div className="relative bg-[#101828] rounded-[32px] md:rounded-[48px] px-6 py-12 sm:p-12 md:p-16 lg:p-20 overflow-hidden shadow-2xl">
          
          {/* Glass Overlay for Depth */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/[0.05] to-transparent pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 md:w-64 md:h-64 bg-[#FF7373]/20 rounded-full blur-[60px] md:blur-[80px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-center relative z-10">
            
            {/* LEFT: CONTENT */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/10 rounded-full mb-6 md:mb-8">
                <span className="flex h-2 w-2 rounded-full bg-[#FF7373] animate-pulse"></span>
                <span className="text-white/80 text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">Next Steps</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] md:leading-[1.05] tracking-tighter mb-6 md:mb-8">
                Ready to Create <br className="hidden sm:block" />
                <span className="text-[#FF7373]">Meaningful Impact?</span>
              </h2>
              
              <p className="text-base md:text-lg lg:text-xl text-white/60 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                Whether you are an entrepreneur, organization, mentor, or changemaker — we are here to help you grow, scale, and create sustainable impact.
              </p>
            </div>

            {/* RIGHT: ACTION BUTTONS */}
            <div className="lg:col-span-5 flex flex-col gap-3 md:gap-4">
              
              {/* Button 1: Primary */}
              <button className="group w-full flex items-center justify-between p-4 md:p-6 bg-[#FF7373] text-white rounded-2xl md:rounded-3xl hover:bg-white hover:text-[#101828] transition-all duration-300 shadow-xl active:scale-[0.98]">
                <div className="flex items-center gap-3 md:gap-4 text-left">
                  <div className="bg-white/20 p-2.5 md:p-3 rounded-xl md:rounded-2xl group-hover:bg-[#101828]/5 transition-colors">
                    <Handshake size={20} className="md:w-6 md:h-6" />
                  </div>
                  <span className="text-lg md:text-xl font-black tracking-tight">Become a Partner</span>
                </div>
                <ArrowRight className="shrink-0 group-hover:translate-x-2 transition-transform" />
              </button>

              {/* Button 2: Secondary */}
              <button className="group w-full flex items-center justify-between p-4 md:p-6 bg-white/5 border border-white/10 text-white rounded-2xl md:rounded-3xl hover:bg-white/10 transition-all duration-300 active:scale-[0.98]">
                <div className="flex items-center gap-3 md:gap-4 text-left">
                  <div className="bg-white/10 p-2.5 md:p-3 rounded-xl md:rounded-2xl">
                    <UserPlus size={20} className="md:w-6 md:h-6" />
                  </div>
                  <span className="text-lg md:text-xl font-black tracking-tight">Join Our Network</span>
                </div>
                <ArrowRight className="shrink-0 group-hover:translate-x-2 transition-transform opacity-0 group-hover:opacity-100" />
              </button>

              {/* Button 3: Ghost/Outline */}
              <button className="group w-full flex items-center justify-center gap-2 p-4 text-white/50 hover:text-[#FF7373] font-bold uppercase tracking-widest text-[10px] md:text-xs transition-all">
                <MessageSquare size={16} />
                Contact Us Today
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;