import React from 'react';
import { Mail, ArrowUpRight, Globe2, Target, Users2, ShieldCheck, LinkIcon } from 'lucide-react';

const Leadership: React.FC = () => {
  const founders = [
    {
      name: "Ms. Vasu (Vasundhara) Pawar",
      role: "Founder – USA Initiatives & Strategic Development",
      bio: "Ms. Vasu Pawar leads the USA initiatives at Step2Impact Global Network. With a strong passion for human development, wellness, and entrepreneurship, she is dedicated to enabling individuals to unlock their full potential through capability building and mentorship.",
      image: "/images/Vasu-Pawar-picture.jpg", // Placeholder for Ms. Vasu
      skills: [
        { name: "Strategic Partnerships", icon: <Target size={14} /> },
        { name: "Women Empowerment", icon: <Users2 size={14} /> },
        { name: "Wellness Programs", icon: <ShieldCheck size={14} /> },
        { name: "Community Development", icon: <Globe2 size={14} /> }
      ],
      linkedin: "#",
      email: "mailto:vasu@step2impact.com"
    },
    {
      name: "Mr. Viresh Patel",
      role: "Founder – Global Outreach & Strategic Partnerships",
      bio: "Mr. Viresh Patel leads global outreach, bringing together businesses, mentors, and investors to create scalable impact ecosystems. He is passionate about enabling businesses to scale globally through meaningful collaborations and sustainable growth models.",
      image: "/images/Viresh-patel-Picture.jpg", // Placeholder for Mr. Viresh
      skills: [
        { name: "Global Expansion", icon: <Globe2 size={14} /> },
        { name: "Investor Networking", icon: <Target size={14} /> },
        { name: "Strategic Alliances", icon: <Users2 size={14} /> },
        { name: "Business Scaling", icon: <ShieldCheck size={14} /> }
      ],
      linkedin: "#",
      email: "mailto:viresh@step2impact.com"
    }
  ];

  return (
    <section id="leadership" className="relative overflow-hidden bg-[#FDFCFE] py-16 md:py-24 lg:py-32">
      
      {/* BACKGROUND DECOR */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-[600px] md:h-[600px] bg-[#EFE1D1]/30 rounded-full blur-[80px] md:blur-[120px] -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="mb-16 md:mb-24 text-center md:text-left">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-[2px] w-8 md:w-10 bg-[#FF7373]" />
            <span className="text-[#101828]/50 text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">The Visionaries</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#101828] tracking-tighter">
            Our <span className="text-[#FF7373]">Leadership.</span>
          </h2>
        </div>

        {/* FOUNDERS LIST */}
        <div className="space-y-24 md:space-y-32 lg:space-y-40">
          {founders.map((founder, index) => (
            <div 
              key={index}
              className={`flex flex-col lg:items-center gap-10 md:gap-16 lg:gap-20 ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }`}
            >
              {/* IMAGE SIDE */}
              <div className="w-full lg:w-5/12 group relative max-w-md mx-auto lg:max-w-none">
                {/* Decorative Frame - Hidden on tiny screens to avoid overflow */}
                <div className="hidden sm:block absolute -inset-3 md:-inset-4 border border-[#EFE1D1] rounded-[32px] md:rounded-[40px] -z-10 group-hover:border-[#FF7373]/30 transition-colors duration-500" />
                <div className="hidden sm:block absolute inset-3 md:inset-4 bg-[#FF7373] rounded-[24px] md:rounded-[32px] rotate-3 -z-10 opacity-10 group-hover:rotate-6 transition-transform duration-500" />
                
                <div className="relative aspect-[4/5] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl">
                  <img 
                    src={founder.image} 
                    alt={founder.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101828]/40 to-transparent opacity-60" />
                </div>
              </div>

              {/* CONTENT SIDE */}
              <div className="w-full lg:w-7/12">
                <div className="space-y-6 md:space-y-8">
                  <div className="text-center lg:text-left">
                    <p className="text-[#FF7373] font-black uppercase tracking-widest text-[10px] md:text-xs mb-3">
                      {founder.role}
                    </p>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#101828] leading-tight">
                      {founder.name}
                    </h3>
                  </div>

                  <div className="relative">
                    <p className="text-base md:text-lg lg:text-xl text-gray-500 font-medium leading-relaxed italic border-l-4 border-[#FF7373]/30 pl-5 md:pl-6 py-1">
                      "{founder.bio}"
                    </p>
                  </div>

                  {/* SKILL GRID */}
                  <div className="pt-4 md:pt-6">
                    <p className="text-[9px] md:text-[10px] font-black text-[#101828]/40 uppercase tracking-[0.2em] mb-4 text-center lg:text-left">Core Focus Areas</p>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-2 md:gap-3">
                      {founder.skills.map((skill, i) => (
                        <div 
                          key={i} 
                          className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white border border-[#EFE1D1] rounded-full hover:bg-[#101828] hover:text-white transition-all cursor-default group/skill shadow-sm"
                        >
                          <span className="text-[#FF7373] group-hover/skill:text-white transition-colors">
                            {skill.icon}
                          </span>
                          <span className="text-xs md:text-sm font-bold tracking-tight">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* SOCIAL & CTA LINKS */}
                  <div className="pt-6 md:pt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                    <div className="flex items-center gap-3">
                      <a 
                        href={founder.linkedin} 
                        className="w-11 h-11 md:w-12 md:h-12 bg-white border border-[#EFE1D1] rounded-full flex items-center justify-center text-[#101828] hover:bg-[#101828] hover:text-white hover:border-[#101828] transition-all shadow-sm active:scale-95"
                        aria-label="LinkedIn Profile"
                      >
                        <LinkIcon size={18} />
                      </a>
                      <a 
                        href={founder.email} 
                        className="w-11 h-11 md:w-12 md:h-12 bg-white border border-[#EFE1D1] rounded-full flex items-center justify-center text-[#101828] hover:bg-[#101828] hover:text-white hover:border-[#101828] transition-all shadow-sm active:scale-95"
                        aria-label="Email Contact"
                      >
                        <Mail size={18} />
                      </a>
                    </div>
                    
                    <button className="flex items-center gap-2 px-6 py-3.5 bg-[#101828] text-white rounded-full font-black text-[10px] md:text-xs uppercase tracking-widest hover:bg-[#FF7373] transition-all active:scale-95 shadow-lg shadow-[#101828]/10 sm:ml-4">
                      Full Bio <ArrowUpRight size={14} className="md:w-4 md:h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;