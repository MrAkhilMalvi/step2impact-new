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
    <section className="py-24 bg-[#EFE1D1]/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* VISION BLOCK - The "Big Picture" Statement */}
        <div className="relative overflow-hidden bg-[#101828] rounded-[40px] p-10 md:p-20 mb-20 shadow-2xl">
          {/* Background Decorative Circles */}
          <div className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-[#FF7373]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <Target className="text-[#FF7373]" size={20} />
              <span className="text-[#FF7373] font-bold uppercase tracking-[0.3em] text-sm">Our Vision</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              To build a <span className="text-[#FF7373]">globally connected</span> impact ecosystem that empowers individuals, entrepreneurs, and communities to create <span className="italic font-medium text-white/80">sustainable growth</span> and measurable transformation.
            </h2>
          </div>
        </div>

        {/* MISSION BLOCK - The Actionable Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Mission Title */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <div className="inline-block px-4 py-1.5 bg-[#101828]/5 border border-[#101828]/10 rounded-full mb-6">
              <span className="text-[#101828] text-sm font-bold uppercase tracking-widest">
                Our Mission
              </span>
            </div>
            <h3 className="text-4xl font-extrabold text-[#101828] mb-6">
              How we drive <br /> change daily.
            </h3>
            <p className="text-[#101828]/60 text-lg leading-relaxed">
              Our mission is the roadmap to our vision. We focus on four key pillars that ensure no one is left behind in the journey of global growth.
            </p>
          </div>

          {/* Right Column: Mission Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {missionItems.map((item, index) => (
              <div 
                key={index} 
                className={`p-8 bg-white border border-gray-100 rounded-[24px] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group ${
                  index === 4 ? 'md:col-span-2' : '' // Last item spans full width on tablet+
                }`}
              >
                <div className="w-12 h-12 bg-[#EFE1D1]/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#FF7373]/10 transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-[#101828] mb-3">{item.title}</h4>
                <p className="text-gray-500 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default VisionMission;