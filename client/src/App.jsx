import React from "react";
import { Routes, Route } from "react-router-dom";
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
    </>
  );
};

export default App;
