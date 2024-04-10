import React from "react";
import { Routes, Route } from "react-router-dom";
import PageLayout from "./layouts/pageLayout/PageLayout";
import OurTeam from "./pages/team/OurTeam";
import Feature from "./pages/feature/Feature";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageLayout />} />
        <Route path="/services" element={<Feature />} />
        <Route path="/team" element={<OurTeam />} />
      </Routes>
    </>
  );
};

export default App;
