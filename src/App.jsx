import React, { useRef } from "react";
import "./index.css"
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import About from "./components/About";
import Review from "./components/Review";
import Email from "./components/Email";

let App = () => {
  const targetRef = useRef(null);

  const handleScroll = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
    <div className="app">
      <Main handleScroll={handleScroll} />
      <h3>Poskytuji tyto profesionální služby</h3>
      <Service></Service>
      <Service></Service>
      <Service></Service>
      <button onClick={handleScroll}>Potřebuji pomoct s těmito věcmi</button>
      <Review></Review>
      <About></About>
      <Email ref={targetRef}></Email>
    </div>
      <Navbar />
    </div>
  );
};

export default App;
