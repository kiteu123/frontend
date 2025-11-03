import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Child() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Child Component</h2>
      <p>Theme from Context: {theme}</p>
      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 16px",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
          background: theme === "light" ? "#4f46e5" : "#fbbf24",
          color: "#fff",
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
}
