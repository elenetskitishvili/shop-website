import React from "react";
import Header from "./Header/Header";
import Content from "./MainContent/MainContent";
import Footer from "./Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
