import { Outlet } from "react-router-dom";
import Hero from "../../pages/hero/Hero";
import Projects from "../../pages/projects/Projects";
import Features from "../../pages/features/Features";
import ServicePage from "../../pages/services/ServicePage";
import Contact from "../../pages/contact/Contact";

const PageLayout = () => {
  return (
    <>
      <Hero />
      <Outlet />
      <ServicePage />
      <Outlet />
      <Features />
      <Outlet />
      <Projects />
      <Outlet />
      <Contact />
    </>
  );
};

export default PageLayout;
