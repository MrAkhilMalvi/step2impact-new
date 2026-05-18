import React from 'react';
import { 
  TrendingUp, 
  HeartPulse, 
  Lightbulb, 
  GraduationCap, 
  Coins, 
  Globe2, 
  ArrowUpRight 
} from 'lucide-react';

const Offerings: React.FC = () => {
  const offerings = [
    {
      id: "01",
      title: "Impact Consulting & Strategic Growth",
      desc: "Helping organizations overcome demand–supply challenges by creating new market opportunities and designing sustainable impact models.",
      icon: <TrendingUp size={28} />,
      points: ["Strategy Consulting", "Market Expansion Support", "Strategic Partnerships", "Sustainable Growth Models", "Business Transformation"],
      color: "bg-blue-50"
    },
    {
      id: "02",
      title: "Life Skills for Wellness",
      desc: "Empowering individuals with essential life skills that enhance emotional well-being, resilience, communication, and personal growth.",
      icon: <HeartPulse size={28} />,
      points: ["Emotional Intelligence", "Mental Wellness Awareness", "AI & Financial Literacy", "Personality Enhancement", "Work-Life Balance"],
      color: "bg-orange-50"
    },
    {
      id: "03",
      title: "Entrepreneurial Development",
      desc: "Supporting aspiring and existing entrepreneurs with the mindset, guidance, and strategies required to build scalable ventures.",
      icon: <Lightbulb size={28} />,
      points: ["Entrepreneurship Bootcamps", "Startup Mentorship", "Business Model Development", "Market Access Guidance", "Scaling Strategies"],
      color: "bg-purple-50"
    },
    {
      id: "04",
      title: "Mentorship Council for Youth",
      desc: "Building a strong mentorship ecosystem of leaders and experts dedicated to guiding youth toward leadership and employability.",
      icon: <GraduationCap size={28} />,
      points: ["Leadership Mentoring", "Career Guidance", "Industry Expert Guidance", "Skill Enhancement", "Executive & Founder Coaching"],
      color: "bg-green-50"
    },
    {
      id: "05",
      title: "Empowering Women for Freedom",
      desc: "Creating inclusive opportunities for women through entrepreneurship support, financial literacy, and leadership development.",
      icon: <Coins size={28} />,
      points: ["Women Entrepreneurship", "Financial Literacy", "Leadership Workshops", "Networking Circles", "Business Enablement"],
      color: "bg-rose-50"
    },
    {
      id: "06",
      title: "Global Scaling & Partnerships",
      desc: "Helping businesses expand globally through collaboration, investor access, strategic alliances, and growth acceleration.",
      icon: <Globe2 size={28} />,
      points: ["Strategic Alliances", "Global Market Access", "Investor Networking", "Cross-Border Collaborations", "Growth Acceleration"],
      color: "bg-amber-50"
    }
  ];

  return (
    <section id="offerings" className="py-24 md:py-32 bg-[#FDFCFE]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF7373]/10 border border-[#FF7373]/20 rounded-full mb-4">
              <span className="text-[#FF7373] text-xs font-bold uppercase tracking-[0.2em]">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#101828]">
              Our Core <span className="text-[#FF7373]">Offerings</span>
            </h2>
          </div>
          <p className="text-gray-500 font-medium max-w-sm">
            Tailored strategies and ecosystems designed to drive measurable growth across multiple sectors.
          </p>
        </div>

        {/* OFFERINGS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((item, index) => (
            <div 
              key={index}
              className="group relative bg-white border border-gray-100 p-8 rounded-[32px] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-2 flex flex-col"
            >
              {/* TOP SECTION: Icon & ID */}
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 bg-[#101828] text-[#FF7373] rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:rotate-[10deg] shadow-lg">
                  {item.icon}
                </div>
                <span className="text-4xl font-black text-gray-100 group-hover:text-[#EFE1D1] transition-colors">
                  {item.id}
                </span>
              </div>

              {/* MIDDLE SECTION: Content */}
              <h3 className="text-2xl font-bold text-[#101828] mb-4 leading-tight group-hover:text-[#FF7373] transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-500 leading-relaxed mb-8 flex-grow">
                {item.desc}
              </p>

              {/* BOTTOM SECTION: Key Areas List */}
              <div className="pt-6 border-t border-gray-50">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Key Focus Areas</p>
                <ul className="space-y-2">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm font-bold text-[#101828]/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FF7373]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Subtle Arrow Decor */}
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="text-[#FF7373]" size={20} />
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER CALL TO ACTION */}
        <div className="mt-20 p-1 bg-[#EFE1D1] rounded-[40px]">
            <div className="bg-[#101828] rounded-[36px] py-12 px-8 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to scale your impact?</h3>
                <button className="px-10 py-4 bg-[#FF7373] text-white font-bold rounded-full hover:scale-105 transition-all shadow-xl">
                    Get Started Today
                </button>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Offerings;