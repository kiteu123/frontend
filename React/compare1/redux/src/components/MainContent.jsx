import React from "react";
import CounterSection from "./CounterSection";
import UserSection from "./UserSection";

export default function MainContent({
  count,
  decrementCount,
  resetCount,
  incrementCount,
  user,
  updateUserName,
  updateUserAge,
}) {
  return (
    <main className="main-content">
      <CounterSection />
      <UserSection />
    </main>
  );
}
