import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import { Routes, Route } from "react-router-dom";






function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project />} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </>
  );
}

export default App;
