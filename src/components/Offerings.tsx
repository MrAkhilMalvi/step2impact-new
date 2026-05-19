import React from 'react';
import { 
  TrendingUp, 
  HeartPulse, 
  Lightbulb, 
  GraduationCap, 
  Coins, 
  Globe2, 
  Plus, 
  ArrowUpRight
} from 'lucide-react';

const Offerings: React.FC = () => {
  const offerings = [
    {
      title: "Impact Consulting",
      subtitle: "Strategic Growth",
      desc: "Creating market opportunities and designing sustainable impact models for global growth.",
      icon: <TrendingUp size={24} />,
      points: ["Strategy Consulting", "Market Expansion", "Strategic Partnerships", "Growth Models"]
    },
    {
      title: "Life Skills",
      subtitle: "Wellness & Resilience",
      desc: "Empowering individuals with essential life skills to enhance emotional well-being and growth.",
      icon: <HeartPulse size={24} />,
      points: ["Emotional Intelligence", "AI & Financial Literacy", "Mental Wellness", "Work-Life Balance"]
    },
    {
      title: "Entrepreneurship",
      subtitle: "Development Initiatives",
      desc: "Mindset and strategies required to build sustainable and scalable business ventures.",
      icon: <Lightbulb size={24} />,
      points: ["Startup Mentorship", "Bootcamps", "Market Access", "Scaling Strategies"]
    },
    {
      title: "Mentorship Council",
      subtitle: "Youth Development",
      desc: "Guiding youth toward leadership, employability, and executive-level success.",
      icon: <GraduationCap size={24} />,
      points: ["Leadership Mentoring", "Career Guidance", "Expert Networking", "Founder Coaching"]
    },
    {
      title: "Empowering Women",
      subtitle: "Financial Freedom",
      desc: "Creating inclusive opportunities through leadership and business enablement initiatives.",
      icon: <Coins size={24} />,
      points: ["Women Entrepreneurship", "Money Management", "Growth Circles", "Leadership Workshops"]
    },
    {
      title: "Global Scaling",
      subtitle: "Strategic Alliances",
      desc: "Helping businesses expand through collaboration and investor access.",
      icon: <Globe2 size={24} />,
      points: ["Global Market Access", "Investor Networking", "Cross-Border Alliances", "Growth Acceleration"]
    }
  ];

  return (
    <section id="offerings" className="bg-[#FDFCFE] py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="mb-12 md:mb-20 text-center md:text-left">
          <div className="inline-flex items-center gap-3 mb-4 md:mb-6">
            <div className="h-[2px] w-8 md:w-12 bg-[#FF7373]"></div>
            <span className="text-[#101828]/50 text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">What We Provide</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#101828] tracking-tighter">
            Core <span className="text-[#FF7373]">Offerings.</span>
          </h2>
        </div>

        {/* INTERACTIVE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {offerings.map((item, index) => (
            <div 
              key={index}
              className="group relative min-h-[360px] md:h-[400px] bg-white border border-[#EFE1D1] rounded-[28px] md:rounded-[32px] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#101828]/5 cursor-pointer"
            >
              {/* TOP: Static Content */}
              <div className="p-6 md:p-8 h-full flex flex-col">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#EFE1D1] text-[#101828] rounded-xl md:rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#101828] group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
                </div>
                
                <p className="text-xl md:text-2xl font-black text-[#FF7373] mb-2">
                  {item.subtitle}
                </p>
                <h3 className="text-lg md:text-xl font-black text-[#101828] leading-tight mb-4 group-hover:text-[#FF7373] transition-colors">
                  {item.title}
                </h3>
                <p className="text-base md:text-lg font-bold text-gray-400 leading-relaxed">
                  {item.desc}
                </p>

                {/* VISUAL DECOR: Plus sign at corner */}
                <div className="mt-auto flex justify-end">
                   <div className="w-8 h-8 rounded-full border border-[#EFE1D1] flex items-center justify-center group-hover:bg-[#FF7373] group-hover:border-[#FF7373] transition-all">
                      <Plus size={16} className="text-[#101828] group-hover:text-white group-hover:rotate-90 transition-all duration-500" />
                   </div>
                </div>
              </div>

              {/* SLIDE-UP DETAIL OVERLAY (Works on Hover and Focus) */}
              <div className="absolute inset-0 bg-[#101828] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out p-6 md:p-8 flex flex-col justify-center">
                <p className="text-[#FF7373] font-black uppercase tracking-widest text-[10px] md:text-xs mb-6">Key Focus Areas</p>
                <div className="space-y-3 md:space-y-4">
                  {item.points.map((point, i) => (
                    <div 
                      key={i} 
                      className="flex items-center gap-3 md:gap-4 text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity delay-200 duration-500"
                    >
                      <div className="w-1.5 h-1.5 shrink-0 rounded-full bg-[#FF7373]" />
                      <span className="text-sm md:text-base leading-tight">{point}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 md:mt-10 pt-4 border-t border-white/10">
                  <button className="text-white font-black uppercase tracking-widest text-[10px] flex items-center gap-2 hover:text-[#FF7373] transition-colors group/btn">
                    View full details 
                    <ArrowUpRight size={14} className="group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Offerings;