import React from "react";
import { Routes, Route } from "react-router-dom";
import PageLayout from "./layouts/pageLayout/PageLayout";
import OurTeam from "./pages/team/OurTeam";
import Feature from "./pages/feature/Feature";
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<PageLayout />} />
        <Route path="/services" element={<Feature />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
