import React, { useEffect } from "react";
import "./IntroAnimation.css";

export default function IntroAnimation({ onFinish }) {
  useEffect(() => {
    const duration = 3600; // 애니메이션 총 길이
    const timer = setTimeout(() => {
      onFinish();
    }, duration);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="intro-wrapper">
      <div className="intro-logo">
        M<div className="light-streak"></div>
        <div className="red-glow"></div>
      </div>
    </div>
  );
}
