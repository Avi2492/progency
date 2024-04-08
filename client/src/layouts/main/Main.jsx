import React from "react";
import Hero from "../../pages/hero/Hero";

import Feature from "../../pages/feature/Feature";
import Contact from "../../pages/contact/Contact";
import PricePlans from "../../pages/pricing/PricePlans";
const Main = () => {
  return (
    <>
      <Hero />
      <PricePlans />
      <Feature />
      <Contact />
    </>
  );
};

export default Main;
