import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
