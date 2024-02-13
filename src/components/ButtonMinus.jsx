import { useState } from "react";

export default function ButtonMinus() {
  const [myCounterState, setMyCounterState] = useState(0);

  function incrementCounter() {
    setMyCounterState(myCounterState - 1);
  }
  return (
    <div>
      <p>{myCounterState} cookies!</p>
      <button onClick={incrementCounter}>Click Me</button>
    </div>
  );
}
