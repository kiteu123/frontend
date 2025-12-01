import React, { useState, useRef, useEffect } from "react";

export default function BouncingBallGame() {
  const radius = 100;
  const [isRunning, setIsRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);

  const posRef = useRef({ x: 0, y: 0 });
  const velRef = useRef({ x: 3, y: 0 });
  const requestRef = useRef();
  const startTimeRef = useRef(null);
  const timerRef = useRef(null); // 추가: 진행시간 업데이트용

  const gravity = 0.4;
  const bouncePower = -12;

  const [walls, setWalls] = useState({ left: 0, right: 0, top: 0, bottom: 0 });
  const [pos, setPos] = useState({ x: radius, y: radius });

  useEffect(() => {
    const updateWalls = () => {
      setWalls({
        left: 0,
        top: 0,
        right: window.innerWidth,
        bottom: window.innerHeight,
      });
    };
    updateWalls();
    window.addEventListener("resize", updateWalls);
    return () => window.removeEventListener("resize", updateWalls);
  }, []);

  const animate = () => {
    velRef.current.y += gravity;
    posRef.current.x += velRef.current.x;
    posRef.current.y += velRef.current.y;

    if (posRef.current.x - radius <= walls.left) {
      posRef.current.x = walls.left + radius;
      velRef.current.x *= -1;
    }
    if (posRef.current.x + radius >= walls.right) {
      posRef.current.x = walls.right - radius;
      velRef.current.x *= -1;
    }

    if (posRef.current.y - radius <= walls.top) {
      posRef.current.y = walls.top + radius;
      velRef.current.y *= -1;
    }

    if (posRef.current.y + radius >= walls.bottom) {
      posRef.current.y = walls.bottom - radius;
      setIsRunning(false);
      cancelAnimationFrame(requestRef.current);
      clearInterval(timerRef.current);
      const seconds = ((new Date() - startTimeRef.current) / 1000).toFixed(2);
      setElapsed(seconds);
      return;
    }

    setPos({ x: posRef.current.x, y: posRef.current.y });
    requestRef.current = requestAnimationFrame(animate);
  };

  const startGame = () => {
    cancelAnimationFrame(requestRef.current);
    const speed = 3 + Math.random() * 2;
    const direction = Math.random() < 0.5 ? -1 : 1;
    const randomY = Math.random() * 6 - 3;

    const startX = radius + Math.random() * (walls.right - 2 * radius);
    const startY = radius + Math.random() * (walls.bottom / 3 - radius);
    posRef.current = { x: startX, y: startY };
    velRef.current = { x: speed * direction, y: randomY };
    setPos(posRef.current);

    setIsRunning(true);
    startTimeRef.current = new Date();
    setElapsed(0);

    // 진행시간 업데이트용 interval
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      const seconds = ((new Date() - startTimeRef.current) / 1000).toFixed(2);
      setElapsed(seconds);
    }, 100); // 0.1초마다 업데이트

    requestRef.current = requestAnimationFrame(animate);
  };

  const handleClick = () => {
    if (!isRunning) return;
    velRef.current.y = bouncePower;
  };

  return (
    <div className="w-full h-screen bg-gray-100 relative overflow-hidden">
      {/* 진행시간 표시 */}
      {isRunning && (
        <div className="absolute top-4 left-4 text-xl font-bold text-gray-800">
          {elapsed}s
        </div>
      )}

      {!isRunning && elapsed === 0 && (
        <button
          onClick={startGame}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          px-8 py-4 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-500 transition"
        >
          Start Game
        </button>
      )}

      {isRunning && (
        <div
          onClick={handleClick}
          className="absolute bg-red-500 rounded-full cursor-pointer"
          style={{
            width: radius * 2 + 40,
            height: radius * 2 + 40,
            left: pos.x - radius,
            top: pos.y - radius,
          }}
        />
      )}

      {!isRunning && elapsed > 0 && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-3xl font-bold text-gray-800">
            Game Over! You survived {elapsed} seconds
          </p>
          <button
            onClick={startGame}
            className="mt-6 px-8 py-4 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-500 transition"
          >
            Retry
          </button>
        </div>
      )}
    </div>
  );
}
