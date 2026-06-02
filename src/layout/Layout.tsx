import React from "react";
import Navbar from "../components/Header";
import Footer from "../components/Footer";

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen bg-brandWhite scroll-smooth font-sans selection:bg-brandBlue selection:text-white">
      {/* <AnnouncementBar /> */}
      <Navbar />
      <main className="relative">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
