import { Outlet } from "react-router-dom";
import Hero from "../../pages/hero/Hero";
import Projects from "../../pages/projects/Projects";
import Features from "../../pages/features/Features";
import ServicePage from "../../pages/services/ServicePage";

const PageLayout = () => {
  return (
    <>
      <Hero />
      <Outlet />
      <ServicePage />
      <Outlet />
      <Projects />
      <Outlet />
      <Features />
    </>
  );
};

export default PageLayout;
