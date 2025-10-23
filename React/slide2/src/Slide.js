import React, { useEffect, useRef, useState } from "react";
import "./Slide.css";

const slideData = [
  {
    img: "https://picsum.photos/400/400?randam=1",
    text: "민생회복\n소비쿠폰\n사용 가능합니다",
  },
  {
    img: "https://picsum.photos/400/400?randam=2",
    text: "민생회복\n소비쿠폰\n사용 가능합니다",
  },
  {
    img: "https://picsum.photos/400/400?randam=3",
    text: "민생회복\n소비쿠폰\n사용 가능합니다",
  },
];

export default function Slide() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slideData.length);
      }, 3000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPlaying]);

  const goToSlide = (index) => {
    setCurrent(index);
  };
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="slide-area">
      {slideData.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
        >
          <img src={slide.img} />
          <div className="slide-text"></div>
          <h2>
            {slide.text.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </h2>
        </div>
      ))}
      {/* 백틱 감싸진 탬플릿 리터럴 - $제이쿼리아님 이는 자바스크립트의 변수나 표현식을 문자열 안에 삽입 */}
      <div className="pager">
        {slideData.map((_, idx) => (
          <button
            key={idx}
            className={`pager-dot ${idx === current ? "active" : ""}`}
            onClick={() => goToSlide(idx)}
          ></button>
        ))}
        <button className="stop-btn" onClick={togglePlay}>
          {isPlaying ? "⏸" : "▶"}
        </button>
      </div>
    </div>
  );
}
