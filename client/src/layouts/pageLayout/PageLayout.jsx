import { Outlet } from "react-router-dom";
import Hero from "../../pages/hero/Hero";
import Projects from "../../pages/projects/Projects";

const PageLayout = () => {
  return (
    <>
      <Hero />
      <Outlet />
      <Projects />
    </>
  );
};

export default PageLayout;
