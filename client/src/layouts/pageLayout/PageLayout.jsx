import React from "react";
import Navbar from "../../components/header/Navbar";
import Footer from "../../components/footer/Footer";
import Main from "../main/Main";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Main />
      <Outlet />
      <Footer />
    </>
  );
};

export default PageLayout;
