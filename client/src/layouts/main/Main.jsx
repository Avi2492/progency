import React from "react";
import Hero from "../../pages/hero/Hero";

import Feature from "../../pages/feature/Feature";
import Contact from "../../pages/contact/Contact";
import PricePlans from "../../pages/pricing/PricePlans";
import Testimonial from "../../pages/testimonails/Testimonial";

const Main = () => {
  return (
    <>
      <Hero />
      <PricePlans />
      <Feature />
      <Testimonial />
      <Contact />
    </>
  );
};

export default Main;
