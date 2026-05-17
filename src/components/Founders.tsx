import React from 'react';

const Founders: React.FC = () => {
  return (
    <section id="founders" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-black text-impactDark mb-16 uppercase tracking-tighter italic">Our Leadership</h2>
        
        <div className="space-y-20">
          {/* Ms. Vasu */}
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4 bg-impactLavender h-80 rounded-br-[100px] flex items-center justify-center text-white font-black text-5xl italic">VP</div>
            <div className="lg:col-span-8">
              <h3 className="text-3xl font-bold text-impactDark">Ms. Vasu (Vasundhara) Pawar</h3>
              <p className="text-impactCoral font-bold uppercase tracking-widest text-sm mt-2 mb-6">Founder – USA Initiatives & Strategic Development</p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Ms. Vasu Pawar leads the USA initiatives at Step2Impact Global Network. With a strong passion for human development, wellness, and entrepreneurship, she is dedicated to enabling individuals to unlock their full potential through capability building and mentorship.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm font-bold text-impactDark">
                <div className="flex items-center border-l-2 border-impactLavender pl-4 italic">Strategic Partnerships</div>
                <div className="flex items-center border-l-2 border-impactLavender pl-4 italic">Women Empowerment</div>
                <div className="flex items-center border-l-2 border-impactLavender pl-4 italic">Wellness Programs</div>
                <div className="flex items-center border-l-2 border-impactLavender pl-4 italic">Community Development</div>
              </div>
            </div>
          </div>

          {/* Mr. Viresh */}
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4 lg:order-2 bg-impactDark h-80 rounded-tl-[100px] flex items-center justify-center text-white font-black text-5xl italic">VP</div>
            <div className="lg:col-span-8 lg:order-1">
              <h3 className="text-3xl font-bold text-impactDark text-right">Mr. Viresh Patel</h3>
              <p className="text-impactLavender font-bold uppercase tracking-widest text-sm mt-2 mb-6 text-right">Founder – Global Outreach & Strategic Partnerships</p>
              <p className="text-gray-600 leading-relaxed mb-6 text-right">
                Mr. Viresh Patel leads global outreach, bringing together businesses, mentors, and investors to create scalable impact ecosystems. He is passionate about enabling businesses to scale globally through meaningful collaborations and sustainable growth models.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm font-bold text-impactDark text-right">
                <div className="flex items-center justify-end border-r-2 border-impactDark pr-4 italic">Global Expansion</div>
                <div className="flex items-center justify-end border-r-2 border-impactDark pr-4 italic">Investor Networking</div>
                <div className="flex items-center justify-end border-r-2 border-impactDark pr-4 italic">Strategic Alliances</div>
                <div className="flex items-center justify-end border-r-2 border-impactDark pr-4 italic">Business Scaling</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;