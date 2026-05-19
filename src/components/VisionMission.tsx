import React from 'react';
import { Target, CheckCircle2, Heart, Rocket, Globe, ShieldCheck } from 'lucide-react';

const VisionMission: React.FC = () => {
  const missionItems = [
    {
      title: "Individual Empowerment",
      desc: "Empowering individuals through wellness, life skills, and mentorship.",
      icon: <Heart className="text-[#FF7373]" size={24} />
    },
    {
      title: "Entrepreneurial Growth",
      desc: "Supporting entrepreneurs with growth-focused development initiatives.",
      icon: <Rocket className="text-[#FF7373]" size={24} />
    },
    {
      title: "Women’s Leadership",
      desc: "Enabling women towards financial freedom and leadership roles.",
      icon: <ShieldCheck className="text-[#FF7373]" size={24} />
    },
    {
      title: "Global Scaling",
      desc: "Helping businesses scale globally through strategic partnerships and market access.",
      icon: <Globe className="text-[#FF7373]" size={24} />
    },
    {
      title: "Sustainable Execution",
      desc: "Creating measurable social and economic impact through sustainable execution.",
      icon: <CheckCircle2 className="text-[#FF7373]" size={24} />
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#EFE1D1]/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* VISION BLOCK - Responsive Padding & Font Sizes */}
        <div className="relative overflow-hidden bg-[#101828] rounded-3xl md:rounded-[40px] p-8 sm:p-12 md:p-20 mb-16 md:mb-24 shadow-2xl">
          {/* Background Decorative Circles - Hidden on extra small screens for performance, blurred on others */}
          <div className="absolute top-[-10%] right-[-5%] w-48 h-48 md:w-64 md:h-64 bg-[#FF7373]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-48 h-48 md:w-64 md:h-64 bg-white/5 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-4 md:mb-6">
              <Target className="text-[#FF7373] hidden md:block" size={20} />
              <Target className="text-[#FF7373] block md:hidden" size={18} />
              <span className="text-[#FF7373] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm">
                Our Vision
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight md:leading-tight">
              To build a <span className="text-[#FF7373]">globally connected</span> impact ecosystem that empowers individuals, entrepreneurs, and communities to create <span className="italic font-medium text-white/80">sustainable growth</span> and measurable transformation.
            </h2>
          </div>
        </div>

        {/* MISSION BLOCK - Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Mission Title - Sticky only on Large Screens */}
          <div className="lg:col-span-4 lg:sticky lg:top-10">
            <div className="inline-block px-4 py-1.5 bg-[#101828]/5 border border-[#101828]/10 rounded-full mb-4 md:mb-6">
              <span className="text-[#101828] text-xs md:text-sm font-bold uppercase tracking-widest">
                Our Mission
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#101828] mb-4 md:mb-6">
              How we drive <br className="hidden md:block" /> change daily.
            </h3>
            <p className="text-[#101828]/60 text-base md:text-lg leading-relaxed max-w-xl">
              Our mission is the roadmap to our vision. We focus on five key pillars that ensure no one is left behind in the journey of global growth.
            </p>
          </div>

          {/* Right Column: Mission Cards - Responsive Grid Columns */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {missionItems.map((item, index) => (
              <div 
                key={index} 
                className={`group p-6 md:p-8 bg-white border border-gray-100 rounded-2xl md:rounded-[24px] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full ${
                  index === 4 ? 'sm:col-span-2' : 'col-span-1'
                }`}
              >
                <div className="w-12 h-12 bg-[#EFE1D1]/50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#FF7373]/10 transition-colors shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-[#101828] mb-2 md:mb-3 group-hover:text-[#FF7373] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default VisionMission;