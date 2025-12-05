import React, { useState } from "react";
import MovieShocase from "./components/MovieShowcase";
import IntroAnimation from "./components/IntroAnimation";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <IntroAnimation onFinish={() => setShowIntro(false)} />}
      {!showIntro && <MovieShocase />}
    </>
  );
}
