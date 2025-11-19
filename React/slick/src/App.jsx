import React from "react";
import "./App.css";
import BasicSlider from "./components/BasicSlider";

export default function App() {
  return (
    <div className="container">
      <h1>Slick Slider Examples</h1>
      <section className="slider-section">
        <h2>1. Basic Slider</h2>
        <BasicSlider />
      </section>
    </div>
  );
}
