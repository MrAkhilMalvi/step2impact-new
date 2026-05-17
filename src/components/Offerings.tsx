const Offerings = () => {
  const items = [
    { title: "Impact Consulting", desc: "Sustainable models and strategic growth expansion.", color: "bg-brand-coral" },
    { title: "Wellness Life Skills", desc: "Emotional intelligence and productivity mentorship.", color: "bg-brand-yellow" },
    { title: "Entrepreneurship", desc: "Bootcamps and scaling strategies for startups.", color: "bg-brand-lavender" },
    { title: "Mentorship Council", desc: "Connecting youth with industry-leading experts.", color: "bg-brand-dark" },
    { title: "Women Empowerment", desc: "Financial freedom and leadership workshops.", color: "bg-brand-coral" },
    { title: "Global Scaling", desc: "Cross-border collaborations and investor access.", color: "bg-brand-lavender" },
  ];

  return (
    <section id="offerings" className="py-32 bg-brand-light">
      <div className="max-w-7xl mx-auto px-8">
        <div className="max-w-2xl mb-20">
          <h2 className="text-4xl font-display font-extrabold text-brand-dark mb-4">Core Capabilities</h2>
          <p className="text-gray-500">We bridge the gap between demand and supply through execution-focused frameworks.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-[40px] border border-gray-100 hover:border-transparent hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
              <div className={`w-12 h-12 rounded-2xl ${item.color} mb-8 shadow-inner`} />
              <h3 className="text-xl font-bold text-brand-dark mb-4">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-brand-coral font-bold text-sm">Learn More +</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerings;