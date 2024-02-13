import { useState } from "react";

export default function Button() {
  let [myCounterState, setMyCounterState] = useState(0);

  function resetCount() {
    myCounterState = 0;
  }

  function incrementCounter() {
    setMyCounterState(myCounterState + 1);
  }

  return (
    <div>
      <p>{myCounterState} cookies!</p>
      <button onClick={incrementCounter}>Click Me</button>
      <button onClick={resetCount}>Click Me To Reset</button>
    </div>
  );
}
