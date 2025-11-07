import React from "react";
import Counter from "./counter";
export default function CounterSection({
  count,
  decrementCount,
  resetCount,
  incrementCount,
}) {
  return (
    <section className="section">
      <Counter
        count={count}
        incrementCount={incrementCount}
        decrementCount={decrementCount}
        resetCount={resetCount}
      />
    </section>
  );
}
