import React from "react";
import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Plan from "./pages/Plan";
import Decor from "./pages/Decor";
import Navbar from "./components/Navbar";
import NikitaAndPhilippe from "./pages/NikitaAndPhilippe";
import AnishaAndWill from "./pages/AnishaAndWill";
import AishwaryaAndNikunj from "./pages/AishwaryaAndNikunj";
import VeeraliAndMichale from "./pages/VeeraliAndMichale";

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
          <Route path="/NikitaAndPhilippe" element={<NikitaAndPhilippe />} />
          <Route path="/AnishaAndWill" element={<AnishaAndWill />} />
          <Route path="/AishwaryaAndNikunj" element={<AishwaryaAndNikunj />} />
          <Route path="/VeeraliAndMichale" element={<VeeraliAndMichale />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
