import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-[#FDFCFE]">
      
      {/* BACKGROUND WAVE & MESH GRADIENT */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-40" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 100C300 50 600 150 900 100C1200 50 1500 150 1800 100V800H0V100Z" fill="url(#paint0_linear)"/>
          <defs>
            <linearGradient id="paint0_linear" x1="720" y1="0" x2="720" y2="800" gradientUnits="userSpaceOnUse">
              <stop stopColor="#EFE1D1" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
        {/* Subtle blur orbs */}
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-brandCoral/10 rounded-full blur-[100px]"></div>
        <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] bg-brandPurple/10 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        
        {/* 1. ANNOUNCEMENT BADGE */}
        <div className="inline-flex items-center gap-2 px-1.5 py-1 pr-4 bg-brandPurple/5 border border-brandPurple/20 rounded-full mb-8 hover:bg-brandPurple/10 transition-all cursor-pointer group">
          <span className="px-2.5 py-0.5 bg-white border border-brandPurple/20 text-brandPurple text-xs font-bold rounded-full shadow-sm">
            New feature
          </span>
          <span className="text-brandPurple text-sm font-semibold flex items-center gap-1.5">
            Turning Intent into Impact <span className="group-hover:translate-x-1 transition-transform">→</span>
          </span>
        </div>

        {/* 2. MAIN HEADING (Pixel Perfect Spacing) */}
        <h1 className="text-[44px] md:text-[72px] font-bold text-[#101828] tracking-[-0.02em] leading-[1.1] mb-6">
          High-performing global teams. <br />
          <span className="text-brandPurple italic font-medium">The future of impact.</span>
        </h1>

        {/* 3. SUBTEXT */}
        <p className="text-lg md:text-xl text-[#475467] max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
          Step2Impact Global Network is a purpose-driven platform focused on creating measurable and sustainable impact through strategic partnerships and global growth.
        </p>

        {/* 4. BUTTON SET */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-20">
          <button className="w-full sm:w-auto px-7 py-4 bg-white border border-[#D0D5DD] text-[#344054] rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-all shadow-sm">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[#344054]">
              <path d="M10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6024 1.66667 10 1.66667C5.39763 1.66667 1.66667 5.39763 1.66667 10C1.66667 14.6024 5.39763 18.3333 10 18.3333Z" stroke="currentColor" strokeWidth="1.66" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.33331 6.66667L13.3333 10L8.33331 13.3333V6.66667Z" stroke="currentColor" strokeWidth="1.66" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Watch Demo
          </button>
          <button className="w-full sm:w-auto px-7 py-4 bg-brandPurple text-white rounded-lg font-bold hover:bg-brandPurple/90 transition-all shadow-sm">
            Partner With Us
          </button>
        </div>

        {/* 5. VIDEO PREVIEW (The Exact Design Layers) */}
        <div className="relative max-w-5xl mx-auto mt-10">
          
          {/* SLANTED PURPLE BARS (Background Accents) */}
          <div className="absolute -right-12 -top-12 w-full h-full bg-brandPurple/10 -z-10 rounded-[32px] rotate-3 translate-y-8"></div>
          <div className="absolute -right-6 -top-6 w-full h-full bg-brandPurple -z-10 rounded-[32px] rotate-2 opacity-5"></div>

          {/* MAIN IMAGE CONTAINER */}
          <div className="relative bg-white p-2 md:p-4 rounded-[32px] shadow-untitled border border-white/40 backdrop-blur-sm">
            <div className="relative rounded-[24px] overflow-hidden aspect-[16/9] bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000" 
                alt="Step2Impact Collaboration" 
                className="w-full h-full object-cover"
              />
              
              {/* PLAY BUTTON OVERLAY */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 group cursor-pointer hover:bg-black/20 transition-all">
                <div className="w-20 h-20 bg-white/25 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/40 shadow-2xl transition-transform group-hover:scale-110">
                  <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* BOTTOM FLOATING ELEMENT */}
          <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden lg:block">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"></div>
                ))}
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Active Members</p>
                <p className="text-sm font-bold text-gray-900">1.2k+ Global Partners</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;