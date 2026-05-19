import React from "react";
import MainLayout from "./layout/Layout";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
};

export default App;