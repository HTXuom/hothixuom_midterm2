import React, { useState } from "react";

function App() {
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);
  const [result, setResult] = useState(0);
  const [isError, setIsError] = useState(false);

  function onA(e) {
    const value = e.target.value;
    if (isNaN(value)) {
      setIsError(true);
    } else {
      setNumberA(parseFloat(value));
      setIsError(false);
    }
  }

  function onB(e) {
    const value = e.target.value;
    if (isNaN(value)) {
      setIsError(true);
    } else {
      setNumberB(parseFloat(value));
      setIsError(false);
    }
  }

  function handleCompute() {
    const sum = numberA + numberB;
    setResult(sum);
  }

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={onA} />

      <label>B =</label>
      <input onKeyUp={onB} />

      <label>A + B =</label>
      <input
        disabled
        style={{ color: isError ? "red" : "inherit" }}
        value={isError ? "Input must be a number" : result.toString()}
      />
      <button onClick={handleCompute}>Compute</button>
    </main>
  );
}

export default App;