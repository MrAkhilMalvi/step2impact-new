import React from 'react';
import { Lightbulb, Users, Heart, Rocket, TrendingUp } from 'lucide-react';

const AboutUs: React.FC = () => {
  const pillars = [
    { icon: <Lightbulb size={24} />, name: 'Innovation' },
    { icon: <Users size={24} />, name: 'Mentorship' },
    { icon: <Heart size={24} />, name: 'Wellness' },
    { icon: <Rocket size={24} />, name: 'Entrepreneurship' },
    { icon: <TrendingUp size={24} />, name: 'Strategic Growth' },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-[#FDFCFE] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT SIDE: Heading & Label */}
          <div className="lg:col-span-5">
            <div className="inline-block px-4 py-1.5 bg-[#FF7373]/10 border border-[#FF7373]/20 rounded-full mb-6">
              <span className="text-[#FF7373] text-sm font-bold uppercase tracking-widest">
                Who We Are
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#101828] leading-[1.1] mb-8">
              An ecosystem built for <br />
              <span className="text-[#FF7373]">meaningful transformation.</span>
            </h2>
            
            {/* Visual Element: A subtle decorative line */}
            <div className="w-20 h-1.5 bg-[#101828] rounded-full mb-8"></div>
            
            <p className="text-xl text-[#101828]/80 leading-relaxed font-medium">
              Step2Impact Global Network is an impact-driven ecosystem dedicated to enabling transformation through innovation, mentorship, wellness, entrepreneurship, and strategic growth.
            </p>
          </div>

          {/* RIGHT SIDE: Detailed Content & Pillars */}
          <div className="lg:col-span-7">
            <div className="space-y-8">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                We believe meaningful impact is created when people, businesses, and communities grow together through collaboration, capability building, and the right ecosystem of strategic partnerships.
              </p>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Our focus is on creating environments that enable <span className="text-[#101828] font-bold">sustainable scaling</span>, growth, and long-term execution for individuals and enterprises alike.
              </p>

              {/* PILLARS GRID */}
              <div className="pt-8 border-t border-gray-100">
                <p className="text-sm font-bold text-[#101828]/40 uppercase tracking-[0.2em] mb-6">
                  Our Core Focus Areas
                </p>
                <div className="flex flex-wrap gap-4">
                  {pillars.map((pillar, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 px-5 py-3 bg-[#EFE1D1]/30 border border-[#EFE1D1] rounded-2xl hover:bg-[#101828] hover:text-white transition-all duration-300 cursor-default group"
                    >
                      <span className="text-[#FF7373] group-hover:text-white transition-colors">
                        {pillar.icon}
                      </span>
                      <span className="font-bold text-[#101828] group-hover:text-white transition-colors">
                        {pillar.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM STATS / TRUST BAR (Minimalist) */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 p-10 bg-[#101828] rounded-[32px] text-white">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold mb-1">Ecosystem</p>
            <p className="text-[#FF7373] text-sm font-bold uppercase tracking-widest">Driven</p>
          </div>
          <div className="text-center border-l border-white/10">
            <p className="text-3xl md:text-4xl font-bold mb-1">Innovation</p>
            <p className="text-[#FF7373] text-sm font-bold uppercase tracking-widest">Led</p>
          </div>
          <div className="text-center border-l border-white/10">
            <p className="text-3xl md:text-4xl font-bold mb-1">Purpose</p>
            <p className="text-[#FF7373] text-sm font-bold uppercase tracking-widest">Focused</p>
          </div>
          <div className="text-center border-l border-white/10">
            <p className="text-3xl md:text-4xl font-bold mb-1">Global</p>
            <p className="text-[#FF7373] text-sm font-bold uppercase tracking-widest">Network</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;