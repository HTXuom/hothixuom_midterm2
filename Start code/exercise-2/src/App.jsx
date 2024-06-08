import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");

  function handleInputChange(e) {
    setInputText(e.target.value);
  }

  return (
    <main>
      <h1>Upper Case Converter</h1>

      <label>Enter any text!</label>
      <input onKeyUp={handleInputChange} />

      <p>
        <label>Here is the text in upper case:</label>
        <input disabled value={inputText.toUpperCase()} />
      </p>
    </main>
  );
}

export default App;