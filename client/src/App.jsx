import React from "react";
import { Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import PageLayout from "./layouts/pageLayout/PageLayout";
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<PageLayout />} />
      </Routes>
      <Footer />
      <Analytics />
    </>
  );
};

export default App;
