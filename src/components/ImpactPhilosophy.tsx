import React from 'react';
import { CheckCircle2, ArrowRight, Target, Zap, Globe, Users, HeartHandshake } from 'lucide-react';

const ImpactPhilosophy: React.FC = () => {
  const reasons = [
    { title: "Purpose-Driven Ecosystem", icon: <Globe size={20} /> },
    { title: "Strategy + Execution", icon: <Zap size={20} /> },
    { title: "Strong Mentorship Network", icon: <Users size={20} /> },
    { title: "Sustainable Growth", icon: <Target size={20} /> },
    { title: "Global Integration", icon: <HeartHandshake size={20} /> },
    { title: "Measurable Impact", icon: <CheckCircle2 size={20} /> }
  ];

  const steps = [
    { title: "Design", desc: "Strategic blueprinting & innovation." },
    { title: "Enable", desc: "Capability building & mentorship." },
    { title: "Scale", desc: "Sustainable growth & global reach." },
    { title: "Impact", desc: "Measurable social & economic value." }
  ];

  const partners = [
    "Corporates & Businesses", "Educational Institutions", "Startups & Entrepreneurs",
    "Women Leaders", "NGOs & Social Enterprises", "Industry Experts"
  ];

  return (
    <section className="relative bg-[#FDFCFE] py-24 md:py-32 overflow-hidden">
      
      {/* --- DECORATIVE BACKGROUND ELEMENTS --- */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[10%] -right-[10%] w-[500px] h-[500px] bg-[#EFE1D1]/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-[5%] -left-[10%] w-[400px] h-[400px] bg-[#FF7373]/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- SECTION 1: WHY STEP2IMPACT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-40 items-center">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-[#FF7373]" />
              <span className="text-[#101828] text-xs font-black uppercase tracking-[0.3em]">The Difference</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-[#101828] leading-[1.05] tracking-tighter mb-8">
              Why <br /> Step2Impact?
            </h2>
            <p className="text-xl text-gray-500 font-medium leading-relaxed mb-10 max-w-md">
              We bridge the gap between intent and action, ensuring that every partnership leads to measurable transformation.
            </p>
            <button className="group px-8 py-4 bg-[#101828] text-white rounded-full font-bold flex items-center gap-3 hover:bg-[#FF7373] transition-all shadow-xl shadow-black/5">
              Learn More <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            {reasons.map((item, idx) => (
              <div key={idx} className="p-8 bg-[#EFE1D1]/30 border border-[#EFE1D1] rounded-[32px] hover:bg-white hover:shadow-2xl hover:shadow-black/5 transition-all duration-300 group">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#FF7373] mb-6 shadow-sm group-hover:bg-[#101828] group-hover:text-white transition-all">
                   {item.icon}
                </div>
                <h4 className="font-extrabold text-[#101828] text-lg leading-tight">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* --- SECTION 2: IMPACT PHILOSOPHY (PROCESS FLOW) --- */}
        <div className="relative mb-10">
          <div className="text-center mb-20">
            <span className="text-[#FF7373] font-bold uppercase tracking-[0.4em] text-xs block mb-4">Our Core Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#101828]">The Journey of Transformation</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop Only) */}
            <div className="hidden md:block absolute top-[40px] left-0 w-full h-[2px] bg-[#EFE1D1] -z-10" />

            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-white border-4 border-[#EFE1D1] rounded-full flex items-center justify-center text-2xl font-black text-[#101828] mb-6 group-hover:border-[#FF7373] group-hover:text-[#FF7373] transition-all duration-300 shadow-xl">
                  0{i + 1}
                </div>
                <h3 className="text-2xl font-black text-[#101828] mb-3 uppercase tracking-tighter italic">{step.title}</h3>
                <p className="text-sm font-bold text-gray-400 leading-relaxed max-w-[200px]">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 p-10 md:p-16 bg-[#101828] rounded-[48px] text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
            </div>
            <p className="relative z-10 text-2xl md:text-3xl font-bold text-white/90 leading-tight italic max-w-4xl mx-auto">
              "True transformation happens when <span className="text-[#FF7373]">capability, collaboration, and execution</span> come together within the right ecosystem."
            </p>
          </div>
        </div>

        {/* --- SECTION 3: WHO WE WORK WITH (MODERN BADGES) --- */}
        <div className="text-center">
          <div className="inline-block px-4 py-1.5 bg-[#101828]/5 rounded-full mb-10">
            <span className="text-[#101828]/60 text-xs font-bold uppercase tracking-[0.2em]">Our Global Reach</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {partners.map((partner, idx) => (
              <div 
                key={idx} 
                className="px-10 py-6 bg-white border border-gray-100 rounded-[24px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex items-center gap-4"
              >
                <div className="w-2 h-2 rounded-full bg-[#FF7373] group-hover:scale-150 transition-transform" />
                <span className="font-black text-[#101828] text-sm md:text-base uppercase tracking-tight">{partner}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ImpactPhilosophy;