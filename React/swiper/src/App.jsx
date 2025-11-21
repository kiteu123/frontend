import React from "react";
import "./App.css";
import BasicSlider from "./components/BasicSlider";
import AutoplaySlider from "./components/AutoplaySlider";
import FadeSlider from "./components/FadeSlider";
import MultipleSlider from "./components/MultipleSlider";
import ThumbnailSlider from "./components/ThumbnailSlider";
import ResponsiveSlider from "./components/ResponsiveSlider";
import CustomNavSlider from "./components/CustomNavSlider";
import FontAwesomeSlider from "./components/FontAwesomeSlider";
import ImageArrowSlider from "./components/ImageArrowSlider";

export default function App() {
  return (
    <div className="container">
      <h1>Swiper Slider Examples</h1>
      <section className="slider-section">
        <h2>1. Basic Slider</h2>
        <BasicSlider />
      </section>
      <section className="slider-section">
        <h2>2. Autoplay Slider</h2>
        <AutoplaySlider />
      </section>
      <section className="slider-section">
        <h2>3. Fade Slider</h2>
        <FadeSlider />
      </section>
      <section className="slider-section">
        <h2>4. Multiple Slider</h2>
        <MultipleSlider />
      </section>
      <section className="slider-section">
        <h2>5. Thumbnail Slider</h2>
        <ThumbnailSlider />
      </section>
      <section className="slider-section">
        <h2>6. Responsive Slider</h2>
        <ResponsiveSlider />
      </section>
      <section className="slider-section">
        <h2>7. Custom Nav Slider</h2>
        <CustomNavSlider />
      </section>
      <section className="slider-section">
        <h2>8. FontAwesome Slider</h2>
        <FontAwesomeSlider />
      </section>
      <section className="slider-section">
        <h2>9. Image Arrow Slider</h2>
        <ImageArrowSlider />
      </section>
    </div>
  );
}
