import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../src/pages/about";
import Contact from "../src/pages/contact";
import Navbar from "./components/navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
