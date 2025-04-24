import React from "react";
import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Plan from "./pages/plan";
import Decor from "./pages/Decor";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/decor" element={<Decor />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
