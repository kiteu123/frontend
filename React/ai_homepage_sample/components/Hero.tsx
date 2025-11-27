import React, { useEffect, useRef, useState } from "react";

const images = ["/images/hero1.jpg", "/images/hero2.jpg", "/images/hero3.jpg"];

const AUTOPLAY_MS = 4000;
const TRANSITION_MS = 600;

const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);
  const prevRef = useRef(index);
  const [direction, setDirection] = useState<"right" | "left">("right"); // next = right, prev = left
  const autoplayRef = useRef<number | null>(null);

  useEffect(() => {
    // autoplay
    autoplayRef.current = window.setInterval(() => {
      setDirection("right");
      setIndex((i) => {
        prevRef.current = i;
        return (i + 1) % images.length;
      });
    }, AUTOPLAY_MS);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, []);

  const goTo = (to: number, dir: "left" | "right") => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = window.setInterval(() => {
        setDirection("right");
        setIndex((i) => {
          prevRef.current = i;
          return (i + 1) % images.length;
        });
      }, AUTOPLAY_MS);
    }
    setDirection(dir);
    prevRef.current = index;
    setIndex(to);
  };

  const next = () => goTo((index + 1) % images.length, "right");
  const prev = () => goTo((index - 1 + images.length) % images.length, "left");

  return (
    <section className="relative h-[420px] md:h-[560px] overflow-hidden bg-gray-100">
      <div className="relative h-full w-full">
        {/* Slides - absolutely positioned */}
        {images.map((src, i) => {
          const isActive = i === index;
          const isPrev = i === prevRef.current;
          // Calculate translateX for animation:
          // active -> translateX(0)
          // when moving right (next): prev goes to +100% (to the right), active comes from -100% (from left)
          // when moving left (prev): prev goes to -100% (to the left), active comes from +100% (from right)
          let translate = 100;
          if (isActive) translate = 0;
          else if (isPrev) translate = direction === "right" ? 100 : -100;
          else {
            translate = direction === "right" ? -100 : 100;
          }
          return (
            <img
              key={src}
              src={src}
              alt={`hero-${i}`}
              className="absolute inset-0 w-full h-full object-cover transition-transform ease-in-out"
              style={{
                transform: `translateX(${translate}%)`,
                transitionDuration: `${TRANSITION_MS}ms`,
                zIndex: isActive ? 20 : isPrev ? 10 : 0,
              }}
            />
          );
        })}

        {/* Controls */}
        <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
          <button
            onClick={prev}
            className="pointer-events-auto bg-white/70 hover:bg-white px-3 py-2 rounded-full ml-2 shadow"
            aria-label="이전"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="pointer-events-auto bg-white/70 hover:bg-white px-3 py-2 rounded-full mr-2 shadow"
            aria-label="다음"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > index ? "right" : "left")}
              className={`w-3 h-3 rounded-full transition-opacity ${
                i === index ? "bg-white" : "bg-white/40"
              }`}
              aria-label={`slide-${i}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
