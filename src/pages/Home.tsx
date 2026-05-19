import React from "react";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import VisionMission from "../components/VisionMission";
import ImpactPhilosophy from "../components/ImpactPhilosophy";
import Offerings from "../components/Offerings";
import Founders from "../components/Founders";
import CTA from "../components/CTA";
import ContactUs from "../components/ContactUs";

const Home: React.FC = () => {
  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <section id="about" className="scroll-mt-28">
        <AboutUs />
      </section>

      <section id="impact" className="scroll-mt-28">
        <ImpactPhilosophy />
      </section>

      <VisionMission />

      <section id="offerings" className="scroll-mt-28">
        <Offerings />
      </section>

      <section id="leadership" className="scroll-mt-28">
        <Founders />
      </section>

      <CTA />

      <section id="contact" className="scroll-mt-28">
        <ContactUs />
      </section>
    </>
  );
};

export default Home;