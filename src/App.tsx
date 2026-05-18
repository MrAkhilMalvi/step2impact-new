import React from "react";
import Navbar from "./components/Header";
import Offerings from "./components/Offerings";
import Founders from "./components/Founders";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import VisionMission from "./components/VisionMission";
import ImpactPhilosophy from "./components/ImpactPhilosophy";

const App: React.FC = () => {
  return (
    <div className="font-body selection:bg-impactYellow selection:text-impactDark">
      <Navbar />

      <Hero />

      <AboutUs />

      <VisionMission />

      <ImpactPhilosophy />



      <Offerings />

      {/* IMPACT PHILOSOPHY */}
      <section
        id="impact"
        className="py-24 bg-impactDark text-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="flex flex-col items-center">
            <h2 className="text-sm font-black text-impactYellow tracking-[0.8em] uppercase mb-20">
              Impact Philosophy
            </h2>
            <div className="flex flex-col md:flex-row justify-between w-full gap-10">
              {["Design", "Enable", "Scale", "Impact"].map((word, i) => (
                <div key={word} className="flex flex-col items-center">
                  <span className="text-7xl font-black opacity-10">{`0${i + 1}`}</span>
                  <span className="text-4xl font-bold -mt-8 tracking-tighter italic">
                    {word}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Founders />

      {/* FOOTER */}
      <footer
        id="contact"
        className="bg-impactGray py-20 border-t border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-black text-impactDark">
              Step2Impact Global
            </h2>
            <p className="text-gray-500 font-bold uppercase text-[10px] tracking-[0.3em]">
              Empower. Enable. Impact.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="font-black text-impactDark">
              info@step2impactglobal.org
            </p>
            <div className="flex gap-6 text-[10px] font-black uppercase tracking-widest">
              <a href="#" className="hover:text-impactCoral transition-colors">
                LinkedIn
              </a>
              <a href="#" className="hover:text-impactCoral transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-impactCoral transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
