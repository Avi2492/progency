import { Outlet } from "react-router-dom";
import Hero from "../../pages/hero/Hero";
import Projects from "../../pages/projects/Projects";
import Features from "../../pages/features/Features";

const PageLayout = () => {
  return (
    <>
      <Hero />
      <Outlet />
      <Projects />
      <Features />
    </>
  );
};

export default PageLayout;
