import React from "react";
import { Lightbulb, Users, Heart, Rocket, ChevronRight } from "lucide-react";

const AboutUs: React.FC = () => {
  const pillars = [
    {
      icon: <Lightbulb size={20} />,
      name: "Innovation",
      desc: "Transforming intent into disruptive action.",
    },
    {
      icon: <Users size={20} />,
      name: "Mentorship",
      desc: "Guiding leaders through expert ecosystems.",
    },
    {
      icon: <Heart size={20} />,
      name: "Wellness",
      desc: "Holistic growth for people and teams.",
    },
    {
      icon: <Rocket size={20} />,
      name: "Entrepreneurship",
      desc: "Building sustainable, scalable ventures.",
    },
  ];

  const steps = [
    { label: "Ecosystem", val: "Driven" },
    { label: "Innovation", val: "Led" },
    { label: "Purpose", val: "Focused" },
    { label: "Global", val: "Network" },
  ];

  return (
    <section id="about" className="relative scroll-mt-20 overflow-hidden bg-[#FDFCFE] py-16 md:py-24 lg:py-32">
      
      {/* --- SUBTLE BACKGROUND DECOR --- */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden opacity-30">
        <div className="absolute -left-20 top-20 w-64 h-64 md:w-96 md:h-96 bg-[#EFE1D1]/40 rounded-full blur-[80px] md:blur-[100px]" />
        <div className="absolute -right-20 bottom-20 w-64 h-64 md:w-96 md:h-96 bg-[#FF7373]/5 rounded-full blur-[80px] md:blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20 xl:gap-24">
          
          {/* --- LEFT: CORPORATE IMAGE STACK --- */}
          <div className="relative group order-2 lg:order-1">
            {/* Decorative border - hidden on smallest screens to save space */}
            <div className="hidden sm:block absolute -inset-3 md:-inset-4 border border-[#EFE1D1] rounded-[32px] md:rounded-[48px] -z-10 group-hover:border-[#FF7373]/20 transition-colors duration-500"></div>
            
            <div className="relative rounded-[24px] md:rounded-[40px] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200"
                alt="Collaboration"
                className="aspect-[4/3] sm:aspect-[4/5] lg:aspect-square w-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101828]/40 to-transparent"></div>
              
              {/* Floating Impact Badge - Scaled for mobile */}
              <div className="absolute top-4 left-4 md:top-8 md:left-8 bg-white/95 backdrop-blur-md px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl border border-white/50 shadow-xl">
                <p className="text-[#FF7373] font-black text-[10px] md:text-xs uppercase tracking-widest">Est. Impact</p>
                <p className="text-[#101828] font-black text-sm md:text-xl">Global Initiative</p>
              </div>
            </div>
          </div>

          {/* --- RIGHT: CONTENT & PILLARS --- */}
          <div className="relative order-1 lg:order-2">
            <div className="inline-flex items-center gap-3 mb-4 md:mb-6">
              <div className="h-[2px] w-8 md:w-12 bg-[#FF7373]"></div>
              <span className="text-[#101828]/50 text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">Who We Are</span>
            </div>

            <h2 className="mb-6 md:mb-8 text-4xl sm:text-5xl md:text-[60px] font-black leading-[1.1] md:leading-[0.95] text-[#101828] tracking-tighter">
              Built for <span className="text-[#FF7373]">meaningful</span> <br className="hidden sm:block" /> transformation.
            </h2>

            <p className="text-lg md:text-xl font-bold leading-relaxed text-[#101828]/70 mb-8 md:mb-10 max-w-xl">
              Step2Impact Global Network is a purpose-driven ecosystem dedicated to enabling transformation through innovation.
            </p>

            {/* PILLARS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar) => (
                <div
                  key={pillar.name}
                  className="group flex flex-col p-5 md:p-6 bg-white border border-[#EFE1D1] rounded-[20px] md:rounded-[24px] hover:border-[#FF7373] hover:shadow-xl hover:shadow-[#101828]/5 transition-all duration-300"
                >
                  <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-[#EFE1D1]/40 text-[#101828] group-hover:bg-[#101828] group-hover:text-white transition-all mb-4">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-black text-[#101828] mb-1">{pillar.name}</h4>
                    <p className="text-xs md:text-sm font-medium text-gray-500 leading-snug">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- BOTTOM SECTION: THE IMPACT STEPS --- */}
        <div className="mt-20 md:mt-24 lg:mt-32 relative">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-[#101828]/30">Our Strategic Roadmap</p>
          </div>

          <div className="flex flex-col md:flex-row items-stretch justify-between gap-6 md:gap-4">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="flex-1 group relative">
                  <div className="h-full relative z-10 p-6 md:p-8 bg-white border border-[#EFE1D1] rounded-[24px] md:rounded-[32px] text-center transition-all duration-300 hover:border-[#FF7373] hover:shadow-lg">
                    {/* Step Badge */}
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF7373] text-white text-[9px] md:text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest whitespace-nowrap">
                      Step 0{index + 1}
                    </span>
                    
                    <h4 className="text-xl md:text-2xl font-black text-[#101828] uppercase tracking-tighter italic mb-1 group-hover:text-[#FF7373] transition-colors">
                      {step.label}
                    </h4>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                      {step.val}
                    </p>
                  </div>
                </div>
                
                {/* Arrow Icon - only visible on Desktop (md+) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex items-center text-[#EFE1D1] self-center">
                    <ChevronRight size={24} className="lg:w-8 lg:h-8" strokeWidth={3} />
                  </div>
                )}

                {/* Mobile Connector Line - visible only on Mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center h-6">
                    <div className="w-[2px] bg-[#EFE1D1]"></div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;