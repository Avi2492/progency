import React from "react";
import Navbar from "./components/header/Navbar";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";
import Feature from "./components/feature/Feature";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Feature />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;