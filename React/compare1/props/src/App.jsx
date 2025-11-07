import React, { useState } from "react";
import Header from "./components/header";
import MainContent from "./components/MainContent";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    name: "홍길동",
    age: 25,
  });

  const updateUserName = (name) => setUser({ ...user, name });
  const updateUserAge = (age) => setUser({ ...user, age });

  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count - 1);
  };
  const resetCount = () => {
    setCount(0);
  };
  return (
    <div className="app">
      <Header user={user} />
      <MainContent
        count={count}
        user={user}
        updateUserName={updateUserName}
        updateUserAge={updateUserAge}
        incrementCount={incrementCount}
        decrementCount={decrementCount}
        resetCount={resetCount}
      />
    </div>
  );
}
