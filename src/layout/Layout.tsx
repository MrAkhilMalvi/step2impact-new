import React from "react";
import Navbar from "../components/Header";
import Footer from "../components/Footer";

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#FDFCFE] scroll-smooth font-sans selection:bg-[#FF7373] selection:text-white">
      {/* The Header now contains its own spacer internally */}
      <Navbar />

      <main className="relative">{children}</main>

      <Footer />
    </div>
  );
};

export default MainLayout;
