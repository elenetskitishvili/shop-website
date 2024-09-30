import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import About from "./pages/About/About";
import Products from "./pages/Products/Products";
import Contact from "./pages/Contact/Contact";
import Assignment3 from "./pages/Assignment3/Assignment3";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/assignment-3" element={<Assignment3 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
