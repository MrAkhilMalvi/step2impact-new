import React from 'react';
import { ArrowRight, Play, Globe, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#EFE1D1]">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#FF7373]/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-[#101828]/5 rounded-full blur-[100px]"></div>
        
        {/* Bottom Wave Illustration */}
        <div className="absolute bottom-0 left-0 w-full leading-[0]">
          <svg className="relative block w-full h-[100px] md:h-[200px]" viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              fill="#FDFCFE" 
              fillOpacity="1" 
              d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,181.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* 1. SMALL BADGE */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#101828]/5 border border-[#101828]/10 rounded-full mb-8">
            <span className="flex h-2 w-2 rounded-full bg-[#FF7373] animate-ping"></span>
            <span className="text-[#101828] text-xs md:text-sm font-bold uppercase tracking-widest">
              Global Impact Initiative
            </span>
          </div>

          {/* 2. MAIN HEADING */}
          <h1 className="text-[48px] md:text-[84px] font-extrabold text-[#101828] tracking-tight leading-[1.05] mb-6">
            Turning Intent <br className="hidden md:block" /> 
            <span className="text-[#FF7373]">into Impact</span>
          </h1>

          {/* 3. TAGLINE */}
          <h2 className="text-xl md:text-2xl font-bold text-[#101828]/80 mb-8 max-w-2xl italic">
            Empowering People. Strengthening Businesses. Uplifting Communities.
          </h2>

          {/* 4. DESCRIPTION PARAGRAPHS */}
          <div className="max-w-3xl space-y-4 mb-12">
            <p className="text-lg md:text-xl text-[#101828]/70 leading-relaxed font-medium">
              Step2Impact Global Network is a purpose-driven platform focused on creating measurable and sustainable impact through strategic partnerships, capability building, and global growth enablement.
            </p>
            <p className="text-md md:text-lg text-[#101828]/60 leading-relaxed">
              We help individuals, entrepreneurs, businesses, and communities unlock opportunities, scale sustainably, and thrive within the right ecosystem of collaboration and execution.
            </p>
          </div>

          {/* 5. CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-20">
            <button className="w-full sm:w-auto px-8 py-4 bg-[#101828] text-white rounded-full font-bold text-lg hover:bg-[#FF7373] hover:scale-105 transition-all shadow-xl shadow-black/10 flex items-center justify-center gap-2">
              Partner With Us <ArrowRight size={20} />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-[#101828] border-2 border-[#101828]/10 rounded-full font-bold text-lg hover:border-[#101828] transition-all flex items-center justify-center gap-2">
              Explore
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent text-[#101828] font-bold text-lg hover:text-[#FF7373] transition-all flex items-center justify-center gap-2 underline decoration-[#FF7373] decoration-2 underline-offset-4">
              Join The Network
            </button>
          </div>

          {/* 6. VISUAL PREVIEW (Video/Image Placeholder) */}
          <div className="relative w-full max-w-5xl group">
            {/* Decorative Background Accents */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#FF7373]/20 to-[#101828]/10 rounded-[40px] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative bg-[#101828] p-2 rounded-[32px] shadow-2xl overflow-hidden border border-white/20">
              <div className="relative aspect-video rounded-[24px] overflow-hidden bg-gray-900">
                {/* Image or Video Placeholder */}
                <img 
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=2000" 
                  alt="Step2Impact Global Collaboration" 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Video Play Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all cursor-pointer">
                  <div className="w-20 h-20 bg-[#FF7373] rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                    <Play fill="white" className="text-white ml-1" size={32} />
                  </div>
                </div>

                {/* Floating Metrics */}
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                   <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl hidden md:flex items-center gap-4 border border-white/50 shadow-lg">
                      <div className="bg-[#FF7373]/10 p-2 rounded-lg">
                        <Users className="text-[#FF7373]" />
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] uppercase font-bold text-gray-500 tracking-tighter">Global Community</p>
                        <p className="text-lg font-bold text-[#101828]">5,000+ Members</p>
                      </div>
                   </div>
                   <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl hidden md:flex items-center gap-4 border border-white/50 shadow-lg">
                      <div className="bg-[#101828]/10 p-2 rounded-lg">
                        <Globe className="text-[#101828]" />
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] uppercase font-bold text-gray-500 tracking-tighter">Reach</p>
                        <p className="text-lg font-bold text-[#101828]">24+ Countries</p>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;