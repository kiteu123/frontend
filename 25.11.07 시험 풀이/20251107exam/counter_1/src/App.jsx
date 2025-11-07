import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => {
    setCount((prev) => {
      if (prev <= 0) return 0;
      return prev - 1;
    });
  };
  const reset = () => setCount(0);

  const countColor = count > 0 ? "blue" : count < 0 ? "red" : "black";

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>카운터 앱</h1>

      <div style={{ ...styles.countDisplay, color: countColor }}>{count}</div>

      <div style={styles.buttonGroup}>
        <button onClick={increment} style={styles.button}>
          증가
        </button>
        <button onClick={decrement} style={styles.button}>
          감소
        </button>
        <button
          onClick={reset}
          style={{ ...styles.button, backgroundColor: "#6c757d" }}
        >
          초기화
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "2rem",
    color: "#333",
  },
  countDisplay: {
    fontSize: "5rem",
    fontWeight: "bold",
    margin: "2rem 0",
    transition: "color 0.3s ease",
  },
  buttonGroup: {
    display: "flex",
    gap: "1rem",
  },
  button: {
    padding: "12px 24px",
    fontSize: "1rem",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};
