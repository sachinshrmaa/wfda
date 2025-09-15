import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../src/pages/about";
import Contact from "../src/pages/contact";

export default function App() {
  return (
    <div>
      <Routes>
        {/* Route 1: The About page */}
        <Route path="/about" element={<About />} />

        {/* Route 2: The Contact page */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
